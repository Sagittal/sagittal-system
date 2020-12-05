import {Maybe} from "@sagittal/general"
import {Ascii, Smiley, Unicode} from "../../../../../src"
import {Flavor} from "../../../../../src/accidental"

interface GlyphExpectation<T extends Maybe<Flavor> = undefined> {
    ascii: Ascii<T>,
    unicode: Unicode<T>,
    smiley: Smiley<T>,
}

export {
    GlyphExpectation,
}
