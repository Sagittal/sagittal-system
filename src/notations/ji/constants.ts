import {
    APOTOME,
    Decimal,
    Integer,
    Multiplier,
    multiplyScaledVector,
    Rational,
    ScaledVector,
} from "@sagittal/general"

const APOTOME_DOWN = multiplyScaledVector(
    APOTOME,
    -1 as Decimal<Integer> & Multiplier,
) as ScaledVector<Rational>
const DOUBLE_APOTOME = multiplyScaledVector(
    APOTOME,
    2 as Decimal<Integer> & Multiplier,
) as ScaledVector<Rational>
const DOUBLE_APOTOME_DOWN = multiplyScaledVector(
    APOTOME,
    -2 as Decimal<Integer> & Multiplier,
) as ScaledVector<Rational>

export { APOTOME_DOWN, DOUBLE_APOTOME, DOUBLE_APOTOME_DOWN }
