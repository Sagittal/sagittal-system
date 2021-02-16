import {deepEquals, isUndefined, join, Maybe, sumTexts} from "@sagittal/general"
import {Accent, Arm} from "../flacco"
import {Accidental, Compatible, Flavor} from "../flavor"
import {Core, Sagittal} from "../sagittal"
import {computeAccentSagitype, computeCompatibleSagitype, computeCoreSagitype} from "./sagitype"
import {BLANK_SAGITYPE, BLANK_SMILEY, PARENTHETICAL_NATURAL_SMILEY} from "./constants"
import {Sagitype, Smiley} from "./types"

const convertSagitypeToSmiley = (sagitype: Sagitype): Smiley => {
    const massagedSagitype = sagitype
        .replace("|//|", "h")
        .replace(/\/\//g, "/ /")
        .replace(/\\\\/g, "\\ \\")

    return `:${massagedSagitype}:` as Smiley
}

const computeCoreSmiley = (core: Core): Smiley =>
    convertSagitypeToSmiley(computeCoreSagitype(core))

const computeCompatibleSmiley = (compatible: Compatible): Smiley =>
    convertSagitypeToSmiley(computeCompatibleSagitype(compatible))

const computeAccentSmiley = (accent: Accent, down?: boolean): Smiley =>
    convertSagitypeToSmiley(computeAccentSagitype(accent, down))

const computeSagittalSmiley = (sagittal: Maybe<Sagittal>): Smiley => {
    if (isUndefined(sagittal)) return PARENTHETICAL_NATURAL_SMILEY
    const {arm, ...core} = sagittal

    const armSmiley = isUndefined(arm) ? BLANK_SMILEY : computeArmSmiley(arm, core.down)
    const coreSmiley = computeCoreSmiley(core)

    return sumTexts(armSmiley, coreSmiley)
}

const computeArmSmiley = (arm: Arm, down?: boolean): Smiley =>
    join(
        arm.map((accent: Accent): Smiley => computeAccentSmiley(accent, down)),
        BLANK_SAGITYPE,
    )

const computeAccidentalSmiley = <T extends Maybe<Flavor> = undefined>(
    accidental: Accidental<T>,
): Smiley<T> => {
    if (isUndefined(accidental)) return PARENTHETICAL_NATURAL_SMILEY as Smiley<T>
    const {arm, compatible, ...core} = accidental

    const armSmiley = isUndefined(arm) ?
        BLANK_SMILEY :
        computeArmSmiley(arm, core.down)

    const coreSmiley = deepEquals(core, {} as Core) ?
        isUndefined(compatible) ? PARENTHETICAL_NATURAL_SMILEY : BLANK_SMILEY :
        computeCoreSmiley(core)

    const compatibleSmiley = isUndefined(compatible) ?
        BLANK_SMILEY :
        computeCompatibleSmiley(compatible)

    return sumTexts(armSmiley, coreSmiley, compatibleSmiley) as Smiley<T>
}

export {
    computeAccidentalSmiley,
    computeCoreSmiley,
    computeCompatibleSmiley,
    computeSagittalSmiley,
    computeAccentSmiley,
}
