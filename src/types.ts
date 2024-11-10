import { Index } from "@sagittal/general"
import { Sagittal } from "./accidental"

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
    nominal: Nominal
    whorl: Whorl
}

interface Spelling {
    linkIndex: Index<Link> // 35 possibilities, -17 to 17, for FCGDAEB flanked by sharps and flats and doubles thereof
    sagittalIndex: Index<Sagittal> // 0 is none, 1 is the first sagittal in the sequence
}

export { Whorl, Nominal, Link, Spelling }
