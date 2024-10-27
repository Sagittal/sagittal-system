import {
    Cents,
    CENTS_PER_OCTAVE,
    Comma,
    computeCentsFromPitch,
    computePrimes,
    computeQuotientFromVector,
    computeScaledVectorFromDecimal,
    Count,
    Edo,
    EdoStep,
    EtName,
    Exponent,
    Index,
    isUndefined,
    Map,
    Max,
    Maybe,
    Name,
    Prime,
    round,
    ZERO_ONE_INDEX_DIFF,
} from "@sagittal/general"
import {
    analyzeComma,
    CommaAnalysis,
    computeCommaFromCommaName,
    computeFifthStep,
    EDO_NOTATION_DEFINITIONS,
    EdoNotationDefinition,
    EdoNotationName,
    isSubsetNotation,
    parseCommaName,
    ParsedCommaName,
    parseEdoNotationName,
    Sagittal,
    Sagitype,
    StepDefinition,
} from "../../../../src"
import { computeStepSize } from "../../../../src/notations/edo/size"
import {
    TEMPERED_THREES_ONLY_METHOD,
    TemperedThreesOnlyMethod,
} from "../../../../src/notations/edo/types"
import { formatMap, formatVector, formatQuotient } from "@sagittal/general/dist/cjs/io"
import { JI_FIFTH_SIZE } from "../../../../src/notations/edo/constants"
import { EtStep, Per } from "@sagittal/general/dist/cjs/music/rtt/types"
import { Octaves } from "@sagittal/general/dist/cjs/music"

// TODO: in @sagittal/general make an Error type which is a nominally typed Cents
// (btw am a mis - thinking of error as inherently abs val somewhere ?)
// and EdoStep should actually be an alias for like Generator<{ rank: 1 }>
// and figure out what's the relationship between Step and EdoStep
//
// could also be a @sagittal/general helper for indexOf that preserves type,
// that could be used a couple times below here
//
// finally, note this computeMap is a lot like computeSimpleMap in the @sagittal/general repo.
// dunno if you can effectively DRY them up or anything, though
// probably @sagittal/general should just be able to make a simple map as a special case of making a warted map, or something
// map from ET name or something

const WART_ALPHABET: string = "abcdefghijklmno"

const computeMap = (etName: EtName, primeLimit: Max<Prime>): Map => {
    const edo: Edo = parseInt(etName.match(/\d*/)![0]) as Edo
    const wartedPrimeIndices: Index<Prime>[] = Array.from(etName.match(/[a-z]/g) || []).map(
        (wart: string): Index<Prime> => WART_ALPHABET.indexOf(wart) as Index<Prime>,
    )

    const stepSize: Cents = computeStepSize(edo)

    const allPrimes: Prime[] = computePrimes(primeLimit)
    const maxPrimeIndex: Index<Prime> = allPrimes.indexOf(primeLimit) as Index<Prime>
    const primes: Prime[] = allPrimes.slice(0, maxPrimeIndex + ZERO_ONE_INDEX_DIFF)

    return primes.map((prime: Prime, primeIndex: number): Per<Count<EtStep>, Prime> => {
        return computeStepCount(
            prime,
            stepSize,
            wartedPrimeIndices.includes(primeIndex as Index<Prime>),
        )
    })
}

const computeStepCount = (
    prime: Prime,
    stepSize: Cents,
    isPrimeWarted: boolean,
): Per<Count<EtStep>, Prime> => {
    const jiPrimeSize = computeCentsFromPitch(computeScaledVectorFromDecimal(prime))

    let currentBestApproximationCandidate: Cents = 0 as Cents
    let previousBestApproximationCandidate: Cents = 0 as Cents
    let currentStep: Per<Count<EtStep>, Prime> = 0 as Per<Count<EtStep>, Prime>
    while (currentBestApproximationCandidate < jiPrimeSize) {
        currentStep++
        previousBestApproximationCandidate = currentBestApproximationCandidate
        currentBestApproximationCandidate = (stepSize * currentStep) as Cents
    }

    const wideCandidateError: Cents = (currentBestApproximationCandidate - jiPrimeSize) as Cents
    const narrowCandidateError: Cents = (jiPrimeSize - previousBestApproximationCandidate) as Cents

    return wideCandidateError < narrowCandidateError
        ? isPrimeWarted
            ? ((currentStep - 1) as Per<Count<EtStep>, Prime>)
            : (currentStep as Per<Count<EtStep>, Prime>)
        : isPrimeWarted
        ? (currentStep as Per<Count<EtStep>, Prime>)
        : ((currentStep - 1) as Per<Count<EtStep>, Prime>)
}

const temperComma = (comma: Comma, simpleMap: Map): EdoStep => {
    return comma.vector.reduce(
        (edoStep: EdoStep, primeExponent: Exponent<Prime>, primeIndex: number): EdoStep =>
            (edoStep + simpleMap[primeIndex] * primeExponent) as EdoStep,
        0 as EdoStep,
    )
}

const expectStepDefinition = (
    { sagitype, validCommas, alternativeJustifications }: StepDefinition,
    {
        edoNotationName,
        sagittalIndex,
    }: {
        edoNotationName: EdoNotationName
        sagittalIndex: Index<Sagittal>
    },
): void => {
    if (isUndefined(validCommas)) return

    validCommas.forEach(
        (maybeSupposedlyValidCommaName: Maybe<Name<Comma>>, index: number): void => {
            if (isUndefined(maybeSupposedlyValidCommaName)) return
            const supposedlyValidCommaName: Name<Comma> = maybeSupposedlyValidCommaName
            const parsedCommaName: ParsedCommaName = parseCommaName(
                `${supposedlyValidCommaName} up`,
            )
            const comma: Comma = computeCommaFromCommaName(parsedCommaName)

            const alternativeJustification: Maybe<EtName | TemperedThreesOnlyMethod> = isUndefined(
                alternativeJustifications,
            )
                ? undefined
                : alternativeJustifications[index]

            expectValidComma(comma, {
                supposedlyValidCommaName,
                sagitype,
                edoNotationName,
                sagittalIndex,
                alternativeJustification,
            })
        },
    )
}

const expectValidComma = (
    comma: Comma,
    {
        supposedlyValidCommaName,
        sagitype,
        edoNotationName,
        sagittalIndex,
        alternativeJustification,
    }: {
        supposedlyValidCommaName: Name<Comma>
        sagitype: Sagitype
        edoNotationName: EdoNotationName
        sagittalIndex: Index<Sagittal>
        alternativeJustification: Maybe<EtName | TemperedThreesOnlyMethod>
    },
) => {
    if (isUndefined(alternativeJustification)) {
        expectValidCommaByMapMethod(comma, edoNotationName, {
            supposedlyValidCommaName,
            sagitype,
            sagittalIndex,
            edoNotationName,
        })
    } else if (isTemperedThreesOnlyMethod(alternativeJustification)) {
        expectValidCommaByTemperedThreesOnlyMethod(comma, {
            supposedlyValidCommaName,
            sagitype,
            sagittalIndex,
            edoNotationName,
        })
    } else {
        expectValidCommaByMapMethod(comma, alternativeJustification, {
            supposedlyValidCommaName,
            sagitype,
            sagittalIndex,
            edoNotationName,
        })
    }
}

const isTemperedThreesOnlyMethod = (
    alternativeJustification: EtName | TemperedThreesOnlyMethod,
): alternativeJustification is TemperedThreesOnlyMethod =>
    alternativeJustification === TEMPERED_THREES_ONLY_METHOD

const expectValidCommaByMapMethod = (
    comma: Comma,
    etName: EtName,
    {
        supposedlyValidCommaName,
        sagitype,
        sagittalIndex,
        edoNotationName,
    }: {
        supposedlyValidCommaName: Name<Comma>
        sagitype: Sagitype
        sagittalIndex: Index<Sagittal>
        edoNotationName: EdoNotationName
    },
) => {
    const {
        two3FreeClassAnalysis: { two3FreePrimeLimit: primeLimit },
    }: CommaAnalysis = analyzeComma(comma)
    const map: Map = computeMap(etName, primeLimit)
    const temperedCommaSteps: EdoStep = temperComma(comma, map)

    expect(temperedCommaSteps)
        .withContext(
            `Because ${sagitype} notates ${sagittalIndex}\\${edoNotationName} and claims ${supposedlyValidCommaName} up to be one of its meanings, expected that claim to be valid, i.e. expected that comma to temper to that step count using ${
                edoNotationName.match(/b/)
                    ? "the second-best fifth map"
                    : edoNotationName.match(/[a-z]/)
                    ? "an alternative map"
                    : "the simple map"
            } for that EDO, which is ${formatMap(
                map,
            )}, but instead found that ${supposedlyValidCommaName} up (${formatQuotient(
                computeQuotientFromVector(comma.vector),
            )}, ${formatVector(
                comma.vector,
            )}) tempers to ${temperedCommaSteps}\\${edoNotationName}`,
        )
        .toBe(sagittalIndex as number as EdoStep)
}

const expectValidCommaByTemperedThreesOnlyMethod = (
    comma: Comma,
    {
        supposedlyValidCommaName,
        sagitype,
        sagittalIndex,
        edoNotationName,
    }: {
        supposedlyValidCommaName: Name<Comma>
        edoNotationName: EdoNotationName
        sagitype: Sagitype
        sagittalIndex: Index<Sagittal>
    },
) => {
    const commaSize: Cents = computeCentsFromPitch(comma)
    const threeExponent: Exponent<3> = comma.vector[1] as Exponent<3>

    const fifthStep: EdoStep = computeFifthStep(edoNotationName)
    const edo: Edo = parseEdoNotationName(edoNotationName).edo
    const fifthSize: Cents = computeStepSize(edo, fifthStep)
    const fifthError: Cents = (fifthSize - JI_FIFTH_SIZE) as Cents

    const mistuningFromTemperedThree: Cents = (fifthError * threeExponent) as Cents
    const temperedCommaSize: Cents = (commaSize + mistuningFromTemperedThree) as Cents

    const temperedCommaOctaveFraction: Octaves = (temperedCommaSize / CENTS_PER_OCTAVE) as Octaves
    const approximateTemperedCommaSteps: number = temperedCommaOctaveFraction * edo
    const temperedCommaSteps: EdoStep = round(approximateTemperedCommaSteps) as EdoStep

    expect(temperedCommaSteps)
        .withContext(
            `Because ${sagitype} notates ${sagittalIndex}\\${edoNotationName} and claims ${supposedlyValidCommaName} up to be one of its meanings, expected that claim to be valid, i.e. expected that comma to temper to that step count using the tempered-3's-only method, but instead found that ${supposedlyValidCommaName} up (${formatQuotient(
                computeQuotientFromVector(comma.vector),
            )}, ${formatVector(
                comma.vector,
            )}) tempers to ${temperedCommaSteps}\\${edoNotationName}`,
        )
        .toBe(sagittalIndex as number as EdoStep)
}

describe("EDO notation definitions", (): void => {
    it("all valid commas noted for an EDO's sagittal are tempered by that EDO's simple map to the step count that sagittal notates", (): void => {
        const EDO_NOTATION_DEFINITIONS_ENTRIES: [EdoNotationName, EdoNotationDefinition][] =
            Object.entries(EDO_NOTATION_DEFINITIONS) as [EdoNotationName, EdoNotationDefinition][]

        EDO_NOTATION_DEFINITIONS_ENTRIES.forEach(
            ([edoNotationName, edoNotationDefinition]: [
                EdoNotationName,
                EdoNotationDefinition,
            ]): void => {
                if (isSubsetNotation(edoNotationDefinition)) return

                edoNotationDefinition.stepDefinitions.forEach(
                    (stepDefinition: StepDefinition, sagittalIndexMinusOne: number): void =>
                        expectStepDefinition(stepDefinition, {
                            edoNotationName,
                            sagittalIndex: (sagittalIndexMinusOne +
                                ZERO_ONE_INDEX_DIFF) as Index<Sagittal>,
                        }),
                )
            },
        )
    })
})
