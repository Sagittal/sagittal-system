import { Decimal, Ed, Index, Window } from "@sagittal/general"
import { Sagittal, Sagitype } from "../../accidental"

type EdoStep = Decimal<{ integer: true }> & { _EdoStepBrand: boolean }

type Edo = Ed<{ of: Window<{ of: 2 }> }> & EdoStep

interface SubsetEdoNotationDefinition {
    supersetEdo: Edo
}

interface NonSubsetEdoNotationDefinition {
    isLimmaFraction?: boolean,
    sagitypes: Sagitype[],
}

type EdoNotationDefinition = SubsetEdoNotationDefinition | NonSubsetEdoNotationDefinition

interface EdoStepNotation {
    linkIndex: Index<Link>              // 35 possibilities, -17 to 17, for FCGDAEB flanked by sharps and flats and doubles thereof
    sagittalIndex: Index<Sagittal>      // 0 is none, 1 is the first sagittal in the sequence
}

// for convenience, these values the ones used by StaffCode
enum Whorl {
    DOUBLE_FLAT = "bb",
    FLAT = "b",
    NATURAL = "",
    SHARP = "#",
    DOUBLE_SHARP = "X",
}

enum Nominal {
    F = "f",
    C = "c",
    G = "g",
    D = "d",
    A = "a",
    E = "e",
    B = "b",
}

interface Link {
    nominal: Nominal,
    whorl: Whorl
}

export {
    Edo,
    EdoStep,
    EdoStepNotation,
    Whorl,
    Nominal,
    Link,
    EdoNotationDefinition,
    SubsetEdoNotationDefinition,
    NonSubsetEdoNotationDefinition,
}
