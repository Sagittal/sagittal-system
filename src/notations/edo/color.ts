import { Cents, CENTS_PER_OCTAVE, HexColor, PHI } from "@sagittal/general"
import { Edo, EdoName, EdoStep, SectionColor } from "./types"
import { parseEdoName } from "./name"
import { computeFifthStep } from "./steps"
import { computeStepSize } from "./size"

const GOLD_UPPER_BOUNDARY: number = (1 + 2 * PHI) / (1 + 3 * PHI)
const GREEN_UPPER_BOUNDARY: number = (13 + 3 * PHI) / (22 + 5 * PHI)
const BLUE_UPPER_BOUNDARY: number = (10 + 13 * PHI) / (17 + 22 * PHI)
const MAGENTA_UPPER_BOUNDARY: number = (10 + 17 * PHI) / (17 + 29 * PHI)
const GREY_UPPER_BOUNDARY: number = (17 + 24 * PHI) / (29 + 41 * PHI)
const ORANGE_UPPER_BOUNDARY: number = (66 + 7 * PHI) / (113 + 12 * PHI)
const PINK_UPPER_BOUNDARY: number = (60 + 7 * PHI) / (103 + 12 * PHI)
const YELLOW_UPPER_BOUNDARY: number = (46 + 53 * PHI) / (79 + 91 * PHI)
const CYAN_UPPER_BOUNDARY: number = (18 + 25 * PHI) / (31 + 43 * PHI)
const PURPLE_UPPER_BOUNDARY: number = (26 + 11 * PHI) / (45 + 19 * PHI)
const ROSE_UPPER_BOUNDARY: number = (4 + 15 * PHI) / (7 + 26 * PHI)
const WHITE_UPPER_BOUNDARY: number = (5 + 1 * PHI) / (9 + 2 * PHI)

const computeSectionColor = (edoName: EdoName): HexColor => {
    const fifthStep: EdoStep = computeFifthStep(edoName)
    const edo: Edo = parseEdoName(edoName).edo
    const fifthSize: Cents = computeStepSize(edo, fifthStep)
    const fifthFractionOfOctave: number = fifthSize / CENTS_PER_OCTAVE

    if (fifthFractionOfOctave < GOLD_UPPER_BOUNDARY) {
        if (fifthFractionOfOctave < GREEN_UPPER_BOUNDARY) {
            if (fifthFractionOfOctave < BLUE_UPPER_BOUNDARY) {
                if (fifthFractionOfOctave < MAGENTA_UPPER_BOUNDARY) {
                    if (fifthFractionOfOctave < GREY_UPPER_BOUNDARY) {
                        if (fifthFractionOfOctave < ORANGE_UPPER_BOUNDARY) {
                            if (fifthFractionOfOctave < PINK_UPPER_BOUNDARY) {
                                if (
                                    fifthFractionOfOctave <
                                    YELLOW_UPPER_BOUNDARY
                                ) {
                                    if (
                                        fifthFractionOfOctave <
                                        CYAN_UPPER_BOUNDARY
                                    ) {
                                        if (
                                            fifthFractionOfOctave <
                                            PURPLE_UPPER_BOUNDARY
                                        ) {
                                            if (
                                                fifthFractionOfOctave <
                                                ROSE_UPPER_BOUNDARY
                                            ) {
                                                if (
                                                    fifthFractionOfOctave <
                                                    WHITE_UPPER_BOUNDARY
                                                ) {
                                                    return SectionColor.WHITE as HexColor
                                                } else {
                                                    return SectionColor.ROSE as HexColor
                                                }
                                            } else {
                                                return SectionColor.PURPLE as HexColor
                                            }
                                        } else {
                                            return SectionColor.CYAN as HexColor
                                        }
                                    } else {
                                        return SectionColor.YELLOW as HexColor
                                    }
                                } else {
                                    return SectionColor.PINK as HexColor
                                }
                            } else {
                                return SectionColor.ORANGE as HexColor
                            }
                        } else {
                            return SectionColor.GREY as HexColor
                        }
                    } else {
                        return SectionColor.MAGENTA as HexColor
                    }
                } else {
                    return SectionColor.BLUE as HexColor
                }
            } else {
                return SectionColor.GREEN as HexColor
            }
        } else {
            return SectionColor.GOLD as HexColor
        }
    } else {
        return SectionColor.BLACK as HexColor
    }
}

export { computeSectionColor }
