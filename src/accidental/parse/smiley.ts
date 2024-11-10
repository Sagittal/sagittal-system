import { BLANK } from "@sagittal/general"
import { Sagitype, Smiley } from "../glyph"
import { Accidental } from "../types"
import { parseSagitype } from "./sagitype"

const parseSmiley = (smiley: Smiley): Accidental =>
    parseSagitype(smiley.replace(/:/g, BLANK).replace(/ /g, BLANK) as Sagitype)

export { parseSmiley }
