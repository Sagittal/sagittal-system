import { areRationalScaledVectorsEqual, Maybe, Rational, ScaledVector } from "@sagittal/general"
import { JI_NOTATION_COMMA_CLASS_IDS } from "../level"
import { getCommaClass } from "./commaClass"
import { CommaClassId } from "./types"

const computeMaybeCommaClassId = (jiPitch: ScaledVector<Rational>): Maybe<CommaClassId> =>
    JI_NOTATION_COMMA_CLASS_IDS.find((commaClassId: CommaClassId): boolean => {
        const commaClass = getCommaClass(commaClassId)

        return areRationalScaledVectorsEqual(commaClass.pitch, jiPitch)
    })

export { computeMaybeCommaClassId }
