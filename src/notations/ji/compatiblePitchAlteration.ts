import {
    APOTOME,
    invertScaledVector,
    ScaledVector,
    SYNTONIC_COMMA,
    UNISON,
} from "@sagittal/general"
import { Compatible } from "../../accidental"
import { APOTOME_DOWN, DOUBLE_APOTOME, DOUBLE_APOTOME_DOWN } from "./constants"

const COMPATIBLE_TO_PITCH_MAP: Record<Compatible, ScaledVector<{ rational: true }>> = {
    [Compatible.STEIN_SEMISHARP]: { vector: [-5, 1, 0, 0, 1] } as ScaledVector<{ rational: true }>, //  >
    [Compatible.STEIN_SEMIFLAT]: { vector: [5, -1, 0, 0, -1] } as ScaledVector<{ rational: true }>, //  <
    [Compatible.STEIN_SESQUISHARP]: { vector: [-16, 8, 0, 0, 1] } as ScaledVector<{
        rational: true
    }>, // >#
    [Compatible.ZIMMERMANN_SESQUIFLAT]: { vector: [16, -8, 0, 0, -1] } as ScaledVector<{
        rational: true
    }>, // <b
    [Compatible.WILSON_PLUS]: SYNTONIC_COMMA, //  +
    [Compatible.WILSON_MINUS]: invertScaledVector(SYNTONIC_COMMA) as ScaledVector<{
        rational: true
    }>, //  -
    [Compatible.NATURAL]: UNISON, // |//|
    [Compatible.SHARP]: APOTOME, //  #
    [Compatible.FLAT]: APOTOME_DOWN, //  b
    [Compatible.DOUBLE_SHARP]: DOUBLE_APOTOME, //  x
    [Compatible.DOUBLE_FLAT]: DOUBLE_APOTOME_DOWN, //  bb
}

const computePitchAlterationFromCompatible = (
    compatible: Compatible,
): ScaledVector<{ rational: true }> => COMPATIBLE_TO_PITCH_MAP[compatible]

export { computePitchAlterationFromCompatible }
