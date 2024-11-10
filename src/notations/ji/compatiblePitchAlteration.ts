import {
    APOTOME,
    invertScaledVector,
    Rational,
    ScaledVector,
    SYNTONIC_COMMA,
    UNISON,
} from "@sagittal/general"
import { Compatible } from "../../accidental"
import { APOTOME_DOWN, DOUBLE_APOTOME, DOUBLE_APOTOME_DOWN } from "./constants"

/* eslint-disable prettier/prettier */
const COMPATIBLE_TO_PITCH_MAP: Record<Compatible, ScaledVector<Rational>> = {
    [Compatible.STEIN_SEMISHARP]: { vector: [-5, 1, 0, 0, 1] } as ScaledVector<Rational>,           //  >
    [Compatible.STEIN_SEMIFLAT]: { vector: [5, -1, 0, 0, -1] } as ScaledVector<Rational>,           //  <
    [Compatible.STEIN_SESQUISHARP]: { vector: [-16, 8, 0, 0, 1] } as ScaledVector<Rational>,        // >#
    [Compatible.ZIMMERMANN_SESQUIFLAT]: { vector: [16, -8, 0, 0, -1] } as ScaledVector<Rational>,   // <b
    [Compatible.WILSON_PLUS]: SYNTONIC_COMMA,                                                       //  +
    [Compatible.WILSON_MINUS]: invertScaledVector(SYNTONIC_COMMA) as ScaledVector<Rational>,        //  -
    [Compatible.NATURAL]: UNISON,                                                                   // |//|
    [Compatible.SHARP]: APOTOME,                                                                    //  #
    [Compatible.FLAT]: APOTOME_DOWN,                                                                //  b
    [Compatible.DOUBLE_SHARP]: DOUBLE_APOTOME,                                                      //  x
    [Compatible.DOUBLE_FLAT]: DOUBLE_APOTOME_DOWN,                                                  //  bb
}
/* eslint-enable prettier/prettier */

const computePitchAlterationFromCompatible = (compatible: Compatible): ScaledVector<Rational> =>
    COMPATIBLE_TO_PITCH_MAP[compatible]

export { computePitchAlterationFromCompatible }
