import {Maybe} from "@sagittal/general"
import {Compatible, computeCoreUnicode} from "../../../../../src"
import {AccentId, HeadId} from "../../../../../src/accidental"
import {
    computeAccentSagitype,
    computeAccentSmiley,
    computeAccentUnicode,
    computeCompatibleSagitype,
    computeCompatibleSmiley,
    computeCompatibleUnicode,
    computeCoreSagitype,
    computeCoreSmiley,
} from "../../../../../src/accidental/glyph"
import {getCore, Shafts} from "../../../../../src/accidental/sagittal"
import {GlyphExpectation} from "./types"

const computeCoreGlyphExpectation = (
    headId: HeadId,
    {shafts = Shafts.SINGLE, down = false}: {shafts?: Shafts, down?: boolean} = {},
): Maybe<GlyphExpectation> => {
    try {
        const core = getCore(headId, {shafts, down})

        return {
            sagitype: computeCoreSagitype(core),
            unicode: computeCoreUnicode(core),
            smiley: computeCoreSmiley(core),
        }
    } catch (e) {
        return undefined
    }
}

const computeAccentGlyphExpectation = (accentId: AccentId, {anti = false}: {anti?: boolean} = {}): GlyphExpectation =>
    ({
        sagitype: computeAccentSagitype({id: accentId, anti}),
        unicode: computeAccentUnicode({id: accentId, anti}),
        smiley: computeAccentSmiley({id: accentId, anti}),
    })

const computeCompatibleGlyphExpectation = (compatible: Compatible): GlyphExpectation =>
    ({
        sagitype: computeCompatibleSagitype(compatible),
        unicode: computeCompatibleUnicode(compatible),
        smiley: computeCompatibleSmiley(compatible),
    })

export {
    computeCoreGlyphExpectation,
    computeAccentGlyphExpectation,
    computeCompatibleGlyphExpectation,
}
