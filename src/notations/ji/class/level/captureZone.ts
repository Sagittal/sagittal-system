import {
    isScaledVectorGreater,
    isUndefined,
    Max,
    Maybe,
    Min,
    ScaledVector,
    UNISON,
    Zone,
} from "@sagittal/general"
import { getCommaClass, formatCommaClass, CommaClassId, CommaClass } from "../comma"
import { formatJiNotationLevel } from "./format"
import { JI_NOTATION_LEVELS_BOUND_CLASSES } from "./levelsBoundClasses"
import { JiNotationBoundClass, JiNotationLevelId } from "./types"
import { getIntroducingJiNotationLevel } from "./introducingJiNotationLevel"
import { isWithinJiNotationLevel } from "./isWithinLevel"

// TODO: POST-NOTATION-GENERATION: JI NOTATION CLEAN-UP
//  This should be another example of a module that should be outmoded post notation generation?

const computeJiNotationCaptureZone = (
    commaClassId: CommaClassId,
    jiNotationLevel: JiNotationLevelId = JiNotationLevelId.EXTREME,
): Maybe<Zone<{ of: CommaClass }>> => {
    const jiNotationLevelBoundClasses = JI_NOTATION_LEVELS_BOUND_CLASSES[jiNotationLevel]

    const introducingJiNotationLevel = getIntroducingJiNotationLevel(commaClassId)
    if (!isWithinJiNotationLevel(introducingJiNotationLevel, jiNotationLevel)) {
        throw new Error(
            `JI Notation comma class ${formatCommaClass(commaClassId, {
                align: false,
                name: true,
            })} is not present at the ${formatJiNotationLevel(
                jiNotationLevel,
            )} JI notation level; it is not introduced until the ${formatJiNotationLevel(
                introducingJiNotationLevel,
            )} JI notation level.`,
        )
    }

    const commaClass = getCommaClass(commaClassId)

    const indexOfBoundClassJustAboveCommaAtThisLevel = jiNotationLevelBoundClasses.findIndex(
        (jiNotationBoundClass: JiNotationBoundClass): boolean => {
            return isScaledVectorGreater(jiNotationBoundClass.pitch, commaClass.pitch)
        },
    )
    const indexOfJiNotationBoundJustBelowCommaClassAtThisLevel =
        indexOfBoundClassJustAboveCommaAtThisLevel - 1

    const lowerBoundClass =
        jiNotationLevelBoundClasses[indexOfJiNotationBoundJustBelowCommaClassAtThisLevel]
    const lowerBoundClassPitch = isUndefined(lowerBoundClass)
        ? UNISON
        : (lowerBoundClass.pitch as ScaledVector as Min<ScaledVector>)
    const upperBoundClassPitch = jiNotationLevelBoundClasses[
        indexOfBoundClassJustAboveCommaAtThisLevel
    ].pitch as ScaledVector as Max<ScaledVector>

    return { extrema: [lowerBoundClassPitch, upperBoundClassPitch] } as Zone<{ of: CommaClass }>
}

export { computeJiNotationCaptureZone }
