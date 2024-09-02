import { Maybe } from "@sagittal/general"
import { ArmId, HeadId } from "./flacco"
import { Shafts, Sagittal } from "./sagittal"

type AccidentalOptions = Partial<{
    armId: ArmId,
    anti: boolean,
    headId: HeadId,
    shafts: Shafts,
    down: boolean,
    compatible: Compatible,
}>

enum Flavor {
    EVO = "evo",
    EVO_SZ = "evo-sz",
    REVO = "revo",
}

// Went with "Compatible" over "Conventional" because some of these are arguably unconventional,
// But they are all definitely Sagittal-compatible (and we try to drop assumed "Sagittal" whenever possible).
// There is a (weak) sense in which the conventionals are actually sagittals, where the unconventionals are not.
// That is the sense in which, when we substitute the Stein or Wilson accidentals
// We call the notation "Sagittal-Stein" or "Sagittal-Wilson", but
// When we substitute the conventional accidentals we don't feel the need to call it "Sagittal-conventional" notation.
// We instead call it "mixed Sagittal", or "evo Sagittal".
enum Compatible {
    STEIN_SEMISHARP = "steinSemisharp",
    STEIN_SEMIFLAT = "steinSemiflat",
    STEIN_SESQUISHARP = "steinSesquisharp",
    ZIMMERMANN_SESQUIFLAT = "zimmermannSesquiflat",
    WILSON_PLUS = "wilsonPlus",
    WILSON_MINUS = "wilsonMinus",
    NATURAL = "natural",
    SHARP = "sharp",
    FLAT = "flat",
    DOUBLE_SHARP = "doubleSharp",
    DOUBLE_FLAT = "doubleFlat",
}

type Accidental<T extends Maybe<Flavor> = undefined> = Maybe<Sagittal>
    & {compatible?: Compatible}
    & (T extends Flavor ? {_FlavorBrand: T} : {})

export {
    Flavor,
    Accidental,
    Compatible,
    AccidentalOptions,
}
