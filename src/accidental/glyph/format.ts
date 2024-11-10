import { Formatted, ioSettings, TableFormat } from "@sagittal/general"
import { Accidental } from "../types"
import { alignSagitype } from "./align"
import { computeAccidentalSagitype } from "./sagitype"
import { computeAccidentalSmiley } from "./smiley"
import { Sagitype, Glyph, Smiley, Unicode } from "./types"
import { computeAccidentalUnicode } from "./unicode"

const formatAccidental = (
    accidental: Accidental,
    { align = true }: { align?: boolean } = {},
): Formatted<Glyph> => {
    switch (ioSettings.tableFormat) {
        case TableFormat.TERMINAL:
            return align
                ? alignSagitype(computeAccidentalSagitype(accidental))
                : (computeAccidentalSagitype(accidental) as string as Formatted<Sagitype>)
        case TableFormat.FORUM:
        case TableFormat.FORUM_WITH_SPLIT_QUOTIENTS:
            return computeAccidentalSmiley(accidental) as string as Formatted<Smiley>
        case TableFormat.SPREADSHEET:
        default:
            return computeAccidentalUnicode(accidental) as string as Formatted<Unicode>
    }
}

export { formatAccidental }
