import { Cents, CENTS_PER_OCTAVE, HexColor, PHI, Edo, EdoStep } from "@sagittal/general"
import { EdoNotationName, SectionColor } from "./types"
import { parseEdoNotationName } from "./name"
import { computeFifthStep } from "./steps"
import { computeStepSize } from "./size"

const BLACK_GOLD_BOUNDARY: number = (1 + 2 * PHI) / (1 + 3 * PHI)
const GOLD_GREEN_BOUNDARY: number = (13 + 3 * PHI) / (22 + 5 * PHI)
const GREEN_BLUE_BOUNDARY: number = (10 + 13 * PHI) / (17 + 22 * PHI)
const BLUE_MAGENTA_BOUNDARY: number = (10 + 17 * PHI) / (17 + 29 * PHI)
const MAGENTA_GREY_BOUNDARY: number = (17 + 24 * PHI) / (29 + 41 * PHI)
const GREY_ORANGE_BOUNDARY: number = (66 + 7 * PHI) / (113 + 12 * PHI)
const ORANGE_PINK_BOUNDARY: number = (60 + 7 * PHI) / (103 + 12 * PHI)
const PINK_YELLOW_BOUNDARY: number = (46 + 53 * PHI) / (79 + 91 * PHI)
const YELLOW_CYAN_BOUNDARY: number = (18 + 25 * PHI) / (31 + 43 * PHI)
const CYAN_PURPLE_BOUNDARY: number = (26 + 11 * PHI) / (45 + 19 * PHI)
const PURPLE_ROSE_BOUNDARY: number = (4 + 15 * PHI) / (7 + 26 * PHI)
const ROSE_WHITE_BOUNDARY: number = (5 + 1 * PHI) / (9 + 2 * PHI)

const computeSectionColor = (
    edoNotationName: EdoNotationName,
): SectionColor | HexColor => {
    const fifthStep: EdoStep = computeFifthStep(edoNotationName)
    const edo: Edo = parseEdoNotationName(edoNotationName).edo
    const fifthSize: Cents = computeStepSize(edo, fifthStep)
    const fifthFractionOfOctave: number = fifthSize / CENTS_PER_OCTAVE

    if (fifthFractionOfOctave < BLACK_GOLD_BOUNDARY) {
        if (fifthFractionOfOctave < GOLD_GREEN_BOUNDARY) {
            if (fifthFractionOfOctave < GREEN_BLUE_BOUNDARY) {
                if (fifthFractionOfOctave < BLUE_MAGENTA_BOUNDARY) {
                    if (fifthFractionOfOctave < MAGENTA_GREY_BOUNDARY) {
                        if (fifthFractionOfOctave < GREY_ORANGE_BOUNDARY) {
                            if (fifthFractionOfOctave < ORANGE_PINK_BOUNDARY) {
                                if (
                                    fifthFractionOfOctave < PINK_YELLOW_BOUNDARY
                                ) {
                                    if (
                                        fifthFractionOfOctave <
                                        YELLOW_CYAN_BOUNDARY
                                    ) {
                                        if (
                                            fifthFractionOfOctave <
                                            CYAN_PURPLE_BOUNDARY
                                        ) {
                                            if (
                                                fifthFractionOfOctave <
                                                PURPLE_ROSE_BOUNDARY
                                            ) {
                                                if (
                                                    fifthFractionOfOctave <
                                                    ROSE_WHITE_BOUNDARY
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
