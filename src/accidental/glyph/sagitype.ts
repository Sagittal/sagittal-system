import { BLANK, deepEquals, isUndefined, join, Maybe, sumTexts } from "@sagittal/general"
import { Accent, AccentId, Arm, FlagId } from "../flacco"
import { Core, Sagittal, Shafts } from "../sagittal"
import { Accidental, Compatible, Flavor } from "../types"
import { BLANK_SAGITYPE, PARENTHETICAL_NATURAL_SAGITYPE } from "./constants"
import { Sagitype } from "./types"

const SHAFTS_TO_SAGITYPE_MAP: Record<Shafts, Sagitype> = {
    [Shafts.SINGLE]: "|" as Sagitype,
    [Shafts.DOUBLE]: "||" as Sagitype,
    [Shafts.TRIPLE]: "|||" as Sagitype,
    [Shafts.EX]: "X" as Sagitype,
}

const DOWN_SHAFTS_TO_SAGITYPE_MAP: Record<Shafts, Sagitype> = {
    [Shafts.SINGLE]: "!" as Sagitype,
    [Shafts.DOUBLE]: "!!" as Sagitype,
    [Shafts.TRIPLE]: "!!!" as Sagitype,
    [Shafts.EX]: "Y" as Sagitype,
}

const LEFT_FLAG_TO_SAGITYPE_MAP: Record<FlagId, Sagitype> = {
    [FlagId.BARB]: "/" as Sagitype,
    [FlagId.ARC]: "(" as Sagitype,
    [FlagId.SCROLL]: ")" as Sagitype,
    [FlagId.BOATHOOK]: "~" as Sagitype,
}

const DOWN_LEFT_FLAG_TO_SAGITYPE_MAP: Record<FlagId, Sagitype> = {
    [FlagId.BARB]: "\\" as Sagitype,
    [FlagId.ARC]: "(" as Sagitype,
    [FlagId.SCROLL]: ")" as Sagitype,
    [FlagId.BOATHOOK]: "~" as Sagitype,
}

const RIGHT_FLAG_TO_SAGITYPE_MAP: Record<FlagId, Sagitype> = {
    [FlagId.BARB]: "\\" as Sagitype,
    [FlagId.ARC]: ")" as Sagitype,
    [FlagId.SCROLL]: "(" as Sagitype,
    [FlagId.BOATHOOK]: "~" as Sagitype,
}

const DOWN_RIGHT_FLAG_TO_SAGITYPE_MAP: Record<FlagId, Sagitype> = {
    [FlagId.BARB]: "/" as Sagitype,
    [FlagId.ARC]: ")" as Sagitype,
    [FlagId.SCROLL]: "(" as Sagitype,
    [FlagId.BOATHOOK]: "~" as Sagitype,
}

const ACCENT_TO_SAGITYPE_MAP: Record<AccentId, Sagitype> = {
    [AccentId.TICK]: "'" as Sagitype,
    [AccentId.WING]: "`" as Sagitype,
    [AccentId.BIRD]: "``" as Sagitype,
    [AccentId.HORN]: "@1" as Sagitype,
    [AccentId.WEDGE]: "@2" as Sagitype,
    [AccentId.HORNWING]: "@4" as Sagitype,
    [AccentId.WEDGEWING]: "@5" as Sagitype,
    [AccentId.HORNBIRD]: "@7" as Sagitype,
    [AccentId.WEDGEBIRD]: "@8" as Sagitype,
    [AccentId.WINGBIRD]: "@9" as Sagitype,
    [AccentId.DOT]: "@." as Sagitype,
}

const DOWN_ACCENT_TO_SAGITYPE_MAP: Record<AccentId, Sagitype> = {
    [AccentId.TICK]: "." as Sagitype,
    [AccentId.WING]: "," as Sagitype,
    [AccentId.BIRD]: ",," as Sagitype,
    [AccentId.HORN]: "l1" as Sagitype,
    [AccentId.WEDGE]: "l2" as Sagitype,
    [AccentId.HORNWING]: "l4" as Sagitype,
    [AccentId.WEDGEWING]: "l5" as Sagitype,
    [AccentId.HORNBIRD]: "l7" as Sagitype,
    [AccentId.WEDGEBIRD]: "l8" as Sagitype,
    [AccentId.WINGBIRD]: "l9" as Sagitype,
    [AccentId.DOT]: "l." as Sagitype,
}

const COMPATIBLE_TO_SAGITYPE_MAP: Record<Compatible, Sagitype> = {
    [Compatible.STEIN_SEMISHARP]: ">" as Sagitype,
    [Compatible.STEIN_SEMIFLAT]: "<" as Sagitype,
    [Compatible.STEIN_SESQUISHARP]: ">#" as Sagitype,
    [Compatible.ZIMMERMANN_SESQUIFLAT]: "<b" as Sagitype,
    [Compatible.WILSON_PLUS]: "+" as Sagitype,
    [Compatible.WILSON_MINUS]: "-" as Sagitype,
    [Compatible.NATURAL]: "|//|" as Sagitype,
    [Compatible.SHARP]: "#" as Sagitype,
    [Compatible.FLAT]: "b" as Sagitype,
    [Compatible.DOUBLE_SHARP]: "x" as Sagitype,
    [Compatible.DOUBLE_FLAT]: "bb" as Sagitype,
}

const computeCoreSagitype = ({ down, shafts, left, right }: Core): Sagitype => {
    const leftSagitype = isUndefined(left)
        ? BLANK_SAGITYPE
        : left
              .map((flagId: FlagId): Sagitype => {
                  return down ? DOWN_LEFT_FLAG_TO_SAGITYPE_MAP[flagId] : LEFT_FLAG_TO_SAGITYPE_MAP[flagId]
              })
              .join(BLANK)

    const shaftsSagitype = down ? DOWN_SHAFTS_TO_SAGITYPE_MAP[shafts] : SHAFTS_TO_SAGITYPE_MAP[shafts]

    const rightSagitype = isUndefined(right)
        ? BLANK_SAGITYPE
        : right
              .map((flagId: FlagId): Sagitype => {
                  return down ? DOWN_RIGHT_FLAG_TO_SAGITYPE_MAP[flagId] : RIGHT_FLAG_TO_SAGITYPE_MAP[flagId]
              })
              .join(BLANK)

    return sumTexts(leftSagitype, shaftsSagitype, rightSagitype)
        .replace(/\|\|\|\|/, "X")
        .replace(/!!!!/, "Y") as Sagitype
}

const computeCompatibleSagitype = (compatible: Compatible): Sagitype => COMPATIBLE_TO_SAGITYPE_MAP[compatible]

const computeAccentSagitype = ({ id, anti }: Accent, down?: boolean): Sagitype =>
    anti
        ? down
            ? ACCENT_TO_SAGITYPE_MAP[id]
            : DOWN_ACCENT_TO_SAGITYPE_MAP[id]
        : down
          ? DOWN_ACCENT_TO_SAGITYPE_MAP[id]
          : ACCENT_TO_SAGITYPE_MAP[id]

const computeSagittalSagitype = (sagittal: Maybe<Sagittal>): Sagitype => {
    if (isUndefined(sagittal)) return PARENTHETICAL_NATURAL_SAGITYPE
    const { arm, ...core } = sagittal

    const armSagitype = isUndefined(arm) ? BLANK_SAGITYPE : computeArmSagitype(arm, core.down)
    const coreSagitype = computeCoreSagitype(core)

    return sumTexts(armSagitype, coreSagitype)
}

const computeArmSagitype = (arm: Arm, down?: boolean): Sagitype =>
    join(
        arm.map((accent: Accent): Sagitype => computeAccentSagitype(accent, down)),
        BLANK_SAGITYPE,
    )

const computeAccidentalSagitype = <T extends Maybe<Flavor> = undefined>(
    accidental: Accidental<T>,
): Sagitype<T> => {
    if (isUndefined(accidental)) return PARENTHETICAL_NATURAL_SAGITYPE as Sagitype<T>
    const { compatible, arm, ...core } = accidental

    const armSagitype = isUndefined(arm) ? BLANK_SAGITYPE : computeArmSagitype(arm, core.down)

    const coreSagitype = deepEquals(core, {} as Core)
        ? isUndefined(compatible)
            ? PARENTHETICAL_NATURAL_SAGITYPE
            : BLANK_SAGITYPE
        : computeCoreSagitype(core)

    const compatibleSagitype = isUndefined(compatible)
        ? BLANK_SAGITYPE
        : computeCompatibleSagitype(compatible)

    return sumTexts(armSagitype, coreSagitype, compatibleSagitype) as Sagitype<T>
}

export {
    computeCoreSagitype,
    computeAccidentalSagitype,
    computeSagittalSagitype,
    computeCompatibleSagitype,
    computeAccentSagitype,
}
