import { deepEquals, isUndefined, Maybe, stringify } from "@sagittal/general"
import { Arm, ArmId, computeApotomeComplement, Core, getArm, HeadId, Sagittal } from "../../accidental"
import { APOTOME_CORE, getCore } from "../../accidental"

// https://forum.sagittal.org/viewtopic.php?p=1308#p1308
const computeMaybeArmForSelfComplementingCore = (maybeArm: Maybe<Arm>): Maybe<Arm> => {
    if (deepEquals(maybeArm, getArm(ArmId.WING_AND_TICK, { anti: true }))) {
        throw new Error(`There is no arm complement for wing and tick for self-complementing core.`)
    } else if (deepEquals(maybeArm, getArm(ArmId.TICK, { anti: true }))) {
        return getArm(ArmId.WING_AND_TICK)
    } else if (deepEquals(maybeArm, getArm(ArmId.ANTIWING_AND_TICK, { anti: true }))) {
        return getArm(ArmId.TICK)
    } else if (deepEquals(maybeArm, getArm(ArmId.BIRD, { anti: true }))) {
        return getArm(ArmId.ANTIWING_AND_TICK)
    } else if (deepEquals(maybeArm, getArm(ArmId.WING, { anti: true }))) {
        return getArm(ArmId.BIRD)
    } else if (deepEquals(maybeArm, undefined)) {
        return getArm(ArmId.WING)
    } else if (deepEquals(maybeArm, getArm(ArmId.WING))) {
        return undefined
    } else if (deepEquals(maybeArm, getArm(ArmId.BIRD))) {
        return getArm(ArmId.WING, { anti: true })
    } else if (deepEquals(maybeArm, getArm(ArmId.ANTIWING_AND_TICK))) {
        return getArm(ArmId.BIRD, { anti: true })
    } else if (deepEquals(maybeArm, getArm(ArmId.TICK))) {
        return getArm(ArmId.ANTIWING_AND_TICK, { anti: true })
    } else if (deepEquals(maybeArm, getArm(ArmId.WING_AND_TICK))) {
        return getArm(ArmId.TICK, { anti: true })
    } else {
        throw new Error(`Did not find arm for self-complementing core with arm ${stringify(maybeArm)}.`)
    }
}

const computeApotomeComplementHandlingAsymmetricalSelfComplement = (sagittal: Maybe<Sagittal>): Maybe<Sagittal> => {
    if (isUndefined(sagittal)) return APOTOME_CORE
    
    const { arm, down, ...core } = sagittal
    
    if (deepEquals(core, getCore(HeadId.LEFT_SCROLL_AND_DOUBLE_BARB))) {
        const handledArm = computeMaybeArmForSelfComplementingCore(arm)

        return isUndefined(handledArm) ?
            { ...core as Core } :
            { arm: handledArm, ...core as Core }
    } else {
        return computeApotomeComplement(sagittal)
    }
}

export {
    computeApotomeComplementHandlingAsymmetricalSelfComplement,
}