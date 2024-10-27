import { APOTOME, Decimal, Multiplier, multiplyScaledVector, ScaledVector } from "@sagittal/general"

const APOTOME_DOWN = multiplyScaledVector(
    APOTOME,
    -1 as Decimal<{ integer: true }> & Multiplier,
) as ScaledVector<{ rational: true }>
const DOUBLE_APOTOME = multiplyScaledVector(
    APOTOME,
    2 as Decimal<{ integer: true }> & Multiplier,
) as ScaledVector<{ rational: true }>
const DOUBLE_APOTOME_DOWN = multiplyScaledVector(
    APOTOME,
    -2 as Decimal<{ integer: true }> & Multiplier,
) as ScaledVector<{ rational: true }>

export { APOTOME_DOWN, DOUBLE_APOTOME, DOUBLE_APOTOME_DOWN }
