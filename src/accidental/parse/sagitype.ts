import { BLANK, Char, Count, increment, isEmpty, shallowClone } from "@sagittal/general"
import { EMPTY_ACCIDENTAL } from "../constants"
import { AccentId, Arm, FlagId } from "../flacco"
import { Sagitype, BLANK_SAGITYPE, PARENTHETICAL_NATURAL_SAGITYPE } from "../glyph"
import { Shafts } from "../sagittal"
import { Accidental, Compatible } from "../types"

const computeDown = (sagitype: Sagitype): boolean =>
    !sagitype.match(/[|!XY]/g) ? !sagitype.match(/[`']/) : !sagitype.match(/[|X]/g)

const parseSagitype = (sagitype: Sagitype): Accidental => {
    if (sagitype === PARENTHETICAL_NATURAL_SAGITYPE) return EMPTY_ACCIDENTAL

    const down = computeDown(sagitype)

    let pastShaft = false

    const accidental = {} as Accidental

    let shaftCount = 0 as Count

    const arm = [] as Arm
    const left = [] as FlagId[]
    const right = [] as FlagId[]

    let accidentalText = shallowClone(sagitype)
    if (accidentalText.match(/``/)) {
        if (down) {
            arm.push({ id: AccentId.BIRD, anti: true })
        } else {
            arm.push({ id: AccentId.BIRD })
        }
        accidentalText = accidentalText.replace(/``/, BLANK_SAGITYPE) as Sagitype
    }
    if (accidentalText.match(/,,/)) {
        if (down) {
            arm.push({ id: AccentId.BIRD })
        } else {
            arm.push({ id: AccentId.BIRD, anti: true })
        }
        accidentalText = accidentalText.replace(/,,/, BLANK_SAGITYPE) as Sagitype
    }

    if (accidentalText.match(/bb/)) {
        accidental.compatible = Compatible.DOUBLE_FLAT
    } else if (accidentalText.match(/>#/)) {
        accidental.compatible = Compatible.STEIN_SESQUISHARP
    } else if (accidentalText.match(/<b/)) {
        accidental.compatible = Compatible.ZIMMERMANN_SESQUIFLAT
    } else if (accidentalText.match(/>/)) {
        accidental.compatible = Compatible.STEIN_SEMISHARP
    } else if (accidentalText.match(/</)) {
        accidental.compatible = Compatible.STEIN_SEMIFLAT
    } else if (accidentalText.match(/\+/)) {
        accidental.compatible = Compatible.WILSON_PLUS
    } else if (accidentalText.match(/-/)) {
        accidental.compatible = Compatible.WILSON_MINUS
    } else if (accidentalText.match(/b/)) {
        accidental.compatible = Compatible.FLAT
    } else if (accidentalText.match(/#/)) {
        accidental.compatible = Compatible.SHARP
    } else if (accidentalText.match(/x/)) {
        accidental.compatible = Compatible.DOUBLE_SHARP
    }

    const accidentalChars = accidentalText.split(BLANK) as Char[]
    accidentalChars.forEach((sagittalChar: Char): void => {
        if (sagittalChar === "`") {
            if (down) {
                arm.push({ id: AccentId.WING, anti: true })
            } else {
                arm.push({ id: AccentId.WING })
            }
        } else if (sagittalChar === ",") {
            if (down) {
                arm.push({ id: AccentId.WING })
            } else {
                arm.push({ id: AccentId.WING, anti: true })
            }
        } else if (sagittalChar === "'") {
            if (down) {
                arm.push({ id: AccentId.TICK, anti: true })
            } else {
                arm.push({ id: AccentId.TICK })
            }
        } else if (sagittalChar === ".") {
            if (down) {
                arm.push({ id: AccentId.TICK })
            } else {
                arm.push({ id: AccentId.TICK, anti: true })
            }
        } else if (sagittalChar === "/") {
            if (down) {
                right.push(FlagId.BARB)
            } else {
                left.push(FlagId.BARB)
            }
        } else if (sagittalChar === "\\") {
            if (down) {
                left.push(FlagId.BARB)
            } else {
                right.push(FlagId.BARB)
            }
        /* eslint-disable prettier/prettier */
        } else if (sagittalChar === ")") {
            if (pastShaft) {
                right.push(FlagId.ARC)      //      !)  or   |)
            } else {
                left.push(FlagId.SCROLL)    //     )!   or  )|
            }
        } else if (sagittalChar === "(") {
            if (pastShaft) {
                right.push(FlagId.SCROLL)   //      !(  or   |(
            } else {
                left.push(FlagId.ARC)       //     (!   or  (|
            }
        /* eslint-enable prettier/prettier */
        } else if (sagittalChar === "~") {
            if (pastShaft) {
                right.push(FlagId.BOATHOOK)
            } else {
                left.push(FlagId.BOATHOOK)
            }
        } else if (sagittalChar === "!" || sagittalChar === "|") {
            pastShaft = true
            shaftCount = increment(shaftCount)
        } else if (sagittalChar === "X" || sagittalChar === "Y") {
            pastShaft = true
            shaftCount = 4 as Count
        }
    })

    if (down) accidental.down = down
    accidental.shafts =
        shaftCount <= 1
            ? Shafts.SINGLE
            : shaftCount === 2
              ? Shafts.DOUBLE
              : shaftCount === 3
                ? Shafts.TRIPLE
                : Shafts.EX
    if (!isEmpty(arm)) accidental.arm = arm
    if (!isEmpty(left)) accidental.left = left
    if (!isEmpty(right)) accidental.right = right

    return accidental
}

export { parseSagitype }
