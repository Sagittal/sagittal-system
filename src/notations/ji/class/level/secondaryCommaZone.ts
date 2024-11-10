import { Zone } from "../../../../ji"
import { CommaClass, CommaClassId } from "../comma"
import { computeJiNotationCaptureZone } from "./captureZone"
import { getIntroducingJiNotationLevel } from "./introducingJiNotationLevel"

const computeSecondaryCommaZone = (commaClassId: CommaClassId): Zone<{ of: CommaClass }> => {
    return computeJiNotationCaptureZone(commaClassId, getIntroducingJiNotationLevel(commaClassId)) as Zone<{
        of: CommaClass
    }>
}

export { computeSecondaryCommaZone }
