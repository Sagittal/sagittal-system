import { Maybe } from "@sagittal/general"
import { Sagitype, Smiley, Unicode } from "../../../../../src"
import { Flavor } from "../../../../../src/accidental"

interface GlyphExpectation<T extends Maybe<Flavor> = undefined> {
    sagitype: Sagitype<T>
    unicode: Unicode<T>
    smiley: Smiley<T>
}

export { GlyphExpectation }
