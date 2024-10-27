import {
    computeSuperScaledVector,
    isScaledVectorGreaterOrEqual,
    NumericProperties,
    ScaledVector,
} from "@sagittal/general"
import { MAX_SIZE_CATEGORY_BOUND } from "./constants"

// But not necessarily a Comma, since it isn't necessarily rational.
// I don't like the use of a raw brand outside of a types module.
// Perhaps the brand is just a comma size brand, not a comma brand.
const isCommaSized = <T extends NumericProperties>(
    candidateCommaSizedPitch: ScaledVector<T>,
): candidateCommaSizedPitch is ScaledVector<T> & { _CommaBrand: boolean } =>
    isScaledVectorGreaterOrEqual(
        MAX_SIZE_CATEGORY_BOUND.pitch,
        computeSuperScaledVector(candidateCommaSizedPitch),
    )

export { isCommaSized }
