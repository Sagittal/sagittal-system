import { IDENTIFYING_ACCIDENTAL_CHARS, Io } from "@sagittal/general"
import { Sagitype, Smiley, Unicode } from "../glyph"
import { Accidental } from "../types"
import { parseSagitype } from "./sagitype"
import { parseSmiley } from "./smiley"
import { parseUnicode } from "./unicode"

const parseAccidental = (accidentalIo: Io): Accidental => {
    if (accidentalIo.match(/[:]/)) {
        return parseSmiley(accidentalIo as Smiley)
    } else if (accidentalIo.match(IDENTIFYING_ACCIDENTAL_CHARS)) {
        return parseSagitype(accidentalIo as Sagitype)
    }

    return parseUnicode(accidentalIo as Unicode)
}

export { parseAccidental }
