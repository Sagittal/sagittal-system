import {
    Cents,
    CENTS_PER_OCTAVE,
    Comma,
    computeCentsFromPitch,
    computePrimes,
    computeQuotientFromPev,
    computeSpevFromDecimal,
    Count,
    Decimal,
    Exponent,
    Index,
    Io,
    isUndefined,
    Map,
    Max,
    Maybe,
    Prime,
    round,
    Step,
    ZERO_ONE_INDEX_DIFF,
} from "@sagittal/general"
import {
    analyzeComma,
    analyzeJiPitch,
    CommaAnalysis,
    computeCommaFromCommaName,
    computeFifthStep,
    Edo,
    EDO_NOTATION_DEFINITIONS,
    EdoNotationDefinition,
    EdoNotationName,
    EdoStep,
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
    EtName,
    TEMPERED_THREES_ONLY_METHOD,
    TemperedThreesOnlyMethod,
} from "../../../../src/notations/edo/types"
import {
    formatMap,
    formatPev,
    formatQuotient,
} from "@sagittal/general/dist/cjs/io"
import { JI_FIFTH_SIZE } from "../../../../src/notations/edo/constants"

// TODO: make an Error type which is a nominally typed Cents
// (btw am a mis - thinking of error as inherently abs val somewhere ?)
// and EdoStep should actually be an alias for like Generator<{ rank: 1 }>
// and figure out what's the relationship between Step and EdoStep

// TODO: extract this type to @sagittal/general
// kinda mind-blown that it doesn't exist there yet
type Octaves = number & { _OctavesBrand: true } 

const WART_ALPHABET: string = "abcdefghijklmno"

// TODO: could be a @general helper for indexOf that preserves type, 
// that could be used a couple times below here

// TODO: note this is a lot like computeSimpleMap in the @sagittal/general repo.
// dunno if you can effectively DRY them up or anything, though
const computeMap = (etName: EtName, primeLimit: Max<Prime>): Map => {
    const edo: Edo = parseInt(etName.match(/\d*/)![0]) as Edo
    const wartedPrimeIndices: Index<Prime>[] = Array.from(
        etName.match(/[a-z]/g) || [],
    ).map(
        (wart: string): Index<Prime> =>
            WART_ALPHABET.indexOf(wart) as Index<Prime>,
    )

    const stepSize: Cents = computeStepSize(edo)

    const allPrimes: Prime[] = computePrimes(primeLimit)
    const maxPrimeIndex: Index<Prime> = allPrimes.indexOf(
        primeLimit,
    ) as Index<Prime>
    const primes: Prime[] = allPrimes.slice(
        0,
        maxPrimeIndex + ZERO_ONE_INDEX_DIFF,
    )

    return primes.map((prime: Prime, primeIndex: number): Count<Step> => {
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
) => {
    const jiPrimeSize = computeCentsFromPitch(computeSpevFromDecimal(prime))

    let currentBestApproximationCandidate: Cents = 0 as Cents
    let previousBestApproximationCandidate: Cents = 0 as Cents
    let currentStep: Count<Step> = 0 as Count<Step>
    while (currentBestApproximationCandidate < jiPrimeSize) {
        currentStep++
        previousBestApproximationCandidate = currentBestApproximationCandidate
        currentBestApproximationCandidate = (stepSize * currentStep) as Cents
    }

    const wideCandidateError: Cents = (currentBestApproximationCandidate -
        jiPrimeSize) as Cents
    const narrowCandidateError: Cents = (jiPrimeSize -
        previousBestApproximationCandidate) as Cents

    return wideCandidateError < narrowCandidateError
        ? isPrimeWarted
            ? ((currentStep - 1) as Count<Step>)
            : (currentStep as Count<Step>)
        : isPrimeWarted
        ? (currentStep as Count<Step>)
        : ((currentStep - 1) as Count<Step>)
}

const temperComma = (comma: Comma, simpleMap: Map): EdoStep => {
    return comma.pev.reduce(
        (
            edoStep: EdoStep,
            primeExponent: Exponent<Prime>,
            primeIndex: number,
        ): EdoStep =>
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
        (maybeSupposedlyValidCommaName: Maybe<Io>, index: number): void => {
            if (isUndefined(maybeSupposedlyValidCommaName)) return
            const supposedlyValidCommaName: Io = maybeSupposedlyValidCommaName
            const parsedCommaName: ParsedCommaName = parseCommaName(
                `${supposedlyValidCommaName} up`,
            )
            const comma: Comma = computeCommaFromCommaName(parsedCommaName)

            const alternativeJustification: Maybe<
                EtName | TemperedThreesOnlyMethod
            > = isUndefined(alternativeJustifications)
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
        supposedlyValidCommaName: Io
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
        supposedlyValidCommaName: Io
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
                computeQuotientFromPev(comma.pev),
            )}, ${formatPev(
                comma.pev,
            )}) tempers to ${temperedCommaSteps}\\${edoNotationName}`,
        )
        .toBe(
            sagittalIndex as Decimal<{
                integer: true
            }> as EdoStep,
        )
}

const expectValidCommaByTemperedThreesOnlyMethod = (
    comma: Comma,
    {
        supposedlyValidCommaName,
        sagitype,
        sagittalIndex,
        edoNotationName,
    }: {
        supposedlyValidCommaName: Io
        edoNotationName: EdoNotationName
        sagitype: Sagitype
        sagittalIndex: Index<Sagittal>
    },
) => {
    const commaSize: Cents = computeCentsFromPitch(comma)
    const threeExponent: Exponent<3> = comma.pev[1] as Exponent<3>

    const fifthStep: EdoStep = computeFifthStep(edoNotationName)
    const edo: Edo = parseEdoNotationName(edoNotationName).edo
    const fifthSize: Cents = computeStepSize(edo, fifthStep)
    const fifthError: Cents = (fifthSize - JI_FIFTH_SIZE) as Cents

    const mistuningFromTemperedThree: Cents = (fifthError *
        threeExponent) as Cents
    const temperedCommaSize: Cents = (commaSize +
        mistuningFromTemperedThree) as Cents

    const temperedCommaOctaveFraction: Octaves = (temperedCommaSize /
        CENTS_PER_OCTAVE) as Octaves
    const approximateTemperedCommaSteps: number =
        temperedCommaOctaveFraction * edo
    const temperedCommaSteps: EdoStep = round(
        approximateTemperedCommaSteps,
    ) as EdoStep

    expect(temperedCommaSteps)
        .withContext(
            `Because ${sagitype} notates ${sagittalIndex}\\${edoNotationName} and claims ${supposedlyValidCommaName} up to be one of its meanings, expected that claim to be valid, i.e. expected that comma to temper to that step count using the tempered-3's-only method, but instead found that ${supposedlyValidCommaName} up (${formatQuotient(
                computeQuotientFromPev(comma.pev),
            )}, ${formatPev(
                comma.pev,
            )}) tempers to ${temperedCommaSteps}\\${edoNotationName}`,
        )
        .toBe(
            sagittalIndex as Decimal<{
                integer: true
            }> as EdoStep,
        )
}

describe("EDO notation definitions", (): void => {
    it("all valid commas noted for an EDO's sagittal are tempered by that EDO's simple map to the step count that sagittal notates", (): void => {
        const EDO_NOTATION_DEFINITIONS_ENTRIES: [
            EdoNotationName,
            EdoNotationDefinition,
        ][] = Object.entries(EDO_NOTATION_DEFINITIONS) as [
            EdoNotationName,
            EdoNotationDefinition,
        ][]

        EDO_NOTATION_DEFINITIONS_ENTRIES.forEach(
            ([edoNotationName, edoNotationDefinition]: [
                EdoNotationName,
                EdoNotationDefinition,
            ]): void => {
                if (isSubsetNotation(edoNotationDefinition)) return

                edoNotationDefinition.stepDefinitions.forEach(
                    (
                        stepDefinition: StepDefinition,
                        sagittalIndexMinusOne: number,
                    ): void =>
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
