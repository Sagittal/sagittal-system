import {BLANK} from "@sagittal/general"
import {Accidental} from "../flavor"
import {Sagitype, Smiley} from "../glyph"
import {parseSagitype} from "./sagitype"

const parseSmiley = (smiley: Smiley): Accidental =>
    parseSagitype(smiley.replace(/:/g, BLANK).replace(/ /g, BLANK) as Sagitype)

export {
    parseSmiley,
}
