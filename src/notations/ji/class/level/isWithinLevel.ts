import { indexOf } from "@sagittal/general"
import { JI_NOTATION_LEVELS } from "./levels"
import { JiNotationLevelId } from "./types"

const isWithinJiNotationLevel = (
    jiNotationLevel: JiNotationLevelId,
    targetJiNotationLevel: JiNotationLevelId,
): boolean =>
    indexOf(JI_NOTATION_LEVELS, jiNotationLevel) <= indexOf(JI_NOTATION_LEVELS, targetJiNotationLevel)

export { isWithinJiNotationLevel }
