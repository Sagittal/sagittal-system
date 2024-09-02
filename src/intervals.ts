import {
    APOTOME,
    Apotome,
    Cents,
    computeCentsFromPitch,
    Decimal,
    Ed,
    ONE,
    Quotient,
    scaleSpev,
    Spev,
} from "@sagittal/general"
import {
    JiNotationLevelId,
    JI_NOTATION_LEVELS,
    EXTREME_EDA,
    HIGH_EDA,
    INSANE_EDA,
    JI_NOTATION_LEVEL_EDAS,
    MEDIUM_EDA,
    ULTRA_EDA
} from "./notations"

const TINA: Spev<{ rational: false }> = scaleSpev(
    APOTOME,
    [ONE, INSANE_EDA as Decimal<{ integer: true }>] as Quotient<{ rational: true }>,
)
const MINA: Spev<{ rational: false }> = scaleSpev(
    APOTOME,
    [ONE, EXTREME_EDA as Decimal<{ integer: true }>] as Quotient<{ rational: true }>,
)
const ULTRINA: Spev<{ rational: false }> = scaleSpev(
    APOTOME,
    [ONE, ULTRA_EDA as Decimal<{ integer: true }>] as Quotient<{ rational: true }>,
)
const HINA: Spev<{ rational: false }> = scaleSpev(
    APOTOME,
    [ONE, HIGH_EDA as Decimal<{ integer: true }>] as Quotient<{ rational: true }>,
)
const ATHINA: Spev<{ rational: false }> = scaleSpev(
    APOTOME,
    [ONE, MEDIUM_EDA as Decimal<{ integer: true }>] as Quotient<{ rational: true }>,
)

const INA_CENTS_SIZES: Record<JiNotationLevelId, Cents> = JI_NOTATION_LEVEL_EDAS.reduce(
    (
        jiNotationLevelEdaStepSizes: Record<JiNotationLevelId, Cents>,
        jiNotationLevelEda: Ed<{ of: Apotome }>,
        index: number,
    ): Record<JiNotationLevelId, Cents> =>
    ({
        ...jiNotationLevelEdaStepSizes,
        [JI_NOTATION_LEVELS[index]]: computeCentsFromPitch((APOTOME)) / jiNotationLevelEda,
    }),
    {} as Record<JiNotationLevelId, Cents>,
)

const TINA_CENTS: Cents = computeCentsFromPitch(TINA)
const MINA_CENTS: Cents = computeCentsFromPitch(MINA)
const ULTRINA_CENTS: Cents = computeCentsFromPitch(ULTRINA)
const HINA_CENTS: Cents = computeCentsFromPitch(HINA)
const ATHINA_CENTS: Cents = computeCentsFromPitch(ATHINA)

export {
    TINA,
    MINA,
    ULTRINA,
    HINA,
    ATHINA,
    INA_CENTS_SIZES,
    TINA_CENTS,
    MINA_CENTS,
    ULTRINA_CENTS,
    HINA_CENTS,
    ATHINA_CENTS,
}
