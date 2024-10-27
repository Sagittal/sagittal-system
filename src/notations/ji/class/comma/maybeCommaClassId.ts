import { areRationalScaledVectorsEqual, Maybe, ScaledVector } from "@sagittal/general"
import { CommaClassId } from "./types"
import { getCommaClass } from "./commaClass"
import { JI_NOTATION_COMMA_CLASS_IDS } from "../level"

const computeMaybeCommaClassId = (jiPitch: ScaledVector<{ rational: true }>): Maybe<CommaClassId> =>
    JI_NOTATION_COMMA_CLASS_IDS.find((commaClassId: CommaClassId): boolean => {
        const commaClass = getCommaClass(commaClassId)

        return areRationalScaledVectorsEqual(commaClass.pitch, jiPitch)
    })

export { computeMaybeCommaClassId }
