import {computeAccidentalAscii, computeAccidentalSmiley, computeAccidentalUnicode} from "../../../../../src/accidental"
import {computeEvoAccidentalFromCaptureZone} from "../../../../../src/accidental/flavor/evo"
import {computeRevoAccidentalFromCaptureZone} from "../../../../../src/accidental/flavor/revo"
import {CaptureZone} from "../../../../../src/notation"
import {FlavorsExpectation} from "./types"

const computeFlavorsExpectation = ({symbolClassId, section}: CaptureZone): FlavorsExpectation => {
    const evoAccidental = computeEvoAccidentalFromCaptureZone(symbolClassId, section)
    const evo = {
        unicode: computeAccidentalUnicode(evoAccidental),
        ascii: computeAccidentalAscii(evoAccidental),
        smiley: computeAccidentalSmiley(evoAccidental),
    }

    const revoAccidental = computeRevoAccidentalFromCaptureZone(symbolClassId, section)
    const revo = {
        unicode: computeAccidentalUnicode(revoAccidental),
        ascii: computeAccidentalAscii(revoAccidental),
        smiley: computeAccidentalSmiley(revoAccidental),
    }

    return {
        evo,
        revo,
    }
}

export {
    computeFlavorsExpectation,
}
