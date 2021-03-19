import {areRationalSpevsEqual, Maybe, Spev} from "@sagittal/general"
import {CommaClassId, getCommaClass} from "../../notation"
import {JI_NOTATION_COMMA_CLASS_IDS} from "./levelCommaClassIds"

const computeMaybeCommaClassId = (jiPitch: Spev<{rational: true}>): Maybe<CommaClassId> =>
    JI_NOTATION_COMMA_CLASS_IDS.find((commaClassId: CommaClassId): boolean => {
        const commaClass = getCommaClass(commaClassId)

        return areRationalSpevsEqual(commaClass.pitch, jiPitch)
    })

export {
    computeMaybeCommaClassId,
}
