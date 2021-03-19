//tslint:disable comment-format

import {APOTOME, invertSpev, Spev, SYNTONIC_COMMA, UNISON} from "@sagittal/general"
import {Compatible} from "../flavor"
import {APOTOME_DOWN, DOUBLE_APOTOME, DOUBLE_APOTOME_DOWN} from "./constants"

const COMPATIBLE_TO_PITCH_MAP: Record<Compatible, Spev<{rational: true}>> = {
    [Compatible.STEIN_SEMISHARP]: {pev: [-5, 1, 0, 0, 1]} as Spev<{rational: true}>,                //  >
    [Compatible.STEIN_SEMIFLAT]: {pev: [5, -1, 0, 0, -1]} as Spev<{rational: true}>,                //  <
    [Compatible.STEIN_SESQUISHARP]: {pev: [-16, 8, 0, 0, 1]} as Spev<{rational: true}>,             // >#
    [Compatible.ZIMMERMANN_SESQUIFLAT]: {pev: [16, -8, 0, 0, -1]} as Spev<{rational: true}>,        // <b
    [Compatible.WILSON_PLUS]: SYNTONIC_COMMA,                                                           //  +
    [Compatible.WILSON_MINUS]: invertSpev(SYNTONIC_COMMA) as Spev<{rational: true}>,                //  -
    [Compatible.NATURAL]: UNISON,                                                                       // |//|
    [Compatible.SHARP]: APOTOME,                                                                        //  #
    [Compatible.FLAT]: APOTOME_DOWN,                                                                    //  b
    [Compatible.DOUBLE_SHARP]: DOUBLE_APOTOME,                                                          //  x
    [Compatible.DOUBLE_FLAT]: DOUBLE_APOTOME_DOWN,                                                      //  bb
}

const computePitchAlterationFromCompatible = (compatible: Compatible): Spev<{rational: true}> =>
    COMPATIBLE_TO_PITCH_MAP[compatible]

export {
    computePitchAlterationFromCompatible,
}
