import {
    Cents,
    CENTS_PER_OCTAVE,
    Comma,
    computeCentsFromPitch,
    computeQuotientFromVector,
    Count,
    Edo,
    EdoStep,
    EtName,
    Exponent,
    Index,
    isUndefined,
    Map,
    Maybe,
    Name,
    computeStepSize,
    computeMap,
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
import { TEMPERED_THREES_ONLY_METHOD, TemperedThreesOnlyMethod } from "../../../../src/notations/edo/types"
import { formatMap, formatVector, formatQuotient } from "@sagittal/general/dist/cjs/io"
import { JI_FIFTH_SIZE } from "../../../../src/notations/edo/constants"
import { EtStep, mapVector, Octaves } from "@sagittal/general/dist/cjs/music"

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

    validCommas.forEach((maybeSupposedlyValidCommaName: Maybe<Name<Comma>>, index: number): void => {
        if (isUndefined(maybeSupposedlyValidCommaName)) return
        const supposedlyValidCommaName: Name<Comma> = maybeSupposedlyValidCommaName
        const parsedCommaName: ParsedCommaName = parseCommaName(`${supposedlyValidCommaName} up`)
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
    })
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
    const temperedCommaSteps: Count<EtStep> = mapVector(comma.vector, map)

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
            )}, ${formatVector(comma.vector)}) tempers to ${temperedCommaSteps}\\${edoNotationName}`,
        )
        .toBe(sagittalIndex as number as Count<EtStep>)
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
            )}, ${formatVector(comma.vector)}) tempers to ${temperedCommaSteps}\\${edoNotationName}`,
        )
        .toBe(sagittalIndex as number as EdoStep)
}

describe("EDO notation definitions", (): void => {
    it("all valid commas noted for an EDO's sagittal are tempered by that EDO's simple map to the step count that sagittal notates", (): void => {
        const EDO_NOTATION_DEFINITIONS_ENTRIES: [EdoNotationName, EdoNotationDefinition][] = Object.entries(
            EDO_NOTATION_DEFINITIONS,
        ) as [EdoNotationName, EdoNotationDefinition][]

        EDO_NOTATION_DEFINITIONS_ENTRIES.forEach(
            ([edoNotationName, edoNotationDefinition]: [EdoNotationName, EdoNotationDefinition]): void => {
                if (isSubsetNotation(edoNotationDefinition)) return

                edoNotationDefinition.stepDefinitions.forEach(
                    (stepDefinition: StepDefinition, sagittalIndexMinusOne: number): void =>
                        expectStepDefinition(stepDefinition, {
                            edoNotationName,
                            sagittalIndex: (sagittalIndexMinusOne + ZERO_ONE_INDEX_DIFF) as Index<Sagittal>,
                        }),
                )
            },
        )
    })
})
