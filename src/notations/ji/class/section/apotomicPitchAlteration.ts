import { APOTOME, deepEquals, Maybe, ScaledVector } from "@sagittal/general"
import {
    SECTION_N1T,
    SECTION_N2A,
    SECTION_N2T,
    SECTION_P1T,
    SECTION_P2A,
    SECTION_P2T,
} from "./constants"
import { APOTOME_DOWN, DOUBLE_APOTOME, DOUBLE_APOTOME_DOWN } from "../../constants"
import { Section } from "./types"

const computeApotomicPitchAlterationFromSection = (
    section: Section,
): Maybe<ScaledVector<{ rational: true }>> => {
    if (deepEquals(section, SECTION_P1T) || deepEquals(section, SECTION_P2A)) {
        return APOTOME
    } else if (deepEquals(section, SECTION_P2T)) {
        return DOUBLE_APOTOME
    } else if (deepEquals(section, SECTION_N1T) || deepEquals(section, SECTION_N2A)) {
        return APOTOME_DOWN
    } else if (deepEquals(section, SECTION_N2T)) {
        return DOUBLE_APOTOME_DOWN
    } else {
        return undefined
    }
}

export { computeApotomicPitchAlterationFromSection }
