import {
    computeAccidentalSagitype,
    computeAccidentalSmiley,
    computeAccidentalUnicode,
} from "../../../../../../../src/accidental"
import { CaptureZone, computeRevoAccidentalFromCaptureZone } from "../../../../../../../src/notations"
import { computeEvoAccidentalFromCaptureZone } from "../../../../../../../src/notations/ji/class/flavor/evo"
import { FlavorsExpectation } from "./types"

const computeFlavorsExpectation = ({ symbolClassId, section }: CaptureZone): FlavorsExpectation => {
    const evoAccidental = computeEvoAccidentalFromCaptureZone(symbolClassId, section)
    const evo = {
        unicode: computeAccidentalUnicode(evoAccidental),
        sagitype: computeAccidentalSagitype(evoAccidental),
        smiley: computeAccidentalSmiley(evoAccidental),
    }

    const revoAccidental = computeRevoAccidentalFromCaptureZone(symbolClassId, section)
    const revo = {
        unicode: computeAccidentalUnicode(revoAccidental),
        sagitype: computeAccidentalSagitype(revoAccidental),
        smiley: computeAccidentalSmiley(revoAccidental),
    }

    return {
        evo,
        revo,
    }
}

export { computeFlavorsExpectation }
