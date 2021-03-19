import {Max, Min, Spev, Zone} from "@sagittal/general"
import {EXCLUDE_LOWER_BOUND} from "../constants"
import {SIZE_CATEGORY_BOUNDS} from "./sizeCategoryBounds"
import {computeSizeCategoryIndexFromSizeCategory} from "./sizeCategoryIndex"
import {SizeCategory, SizeCategoryBound} from "./types"

const computeSizeCategoryZone = (sizeCategory: SizeCategory): Zone<{of: SizeCategoryBound}> => {
    const sizeCategoryIndex = computeSizeCategoryIndexFromSizeCategory(sizeCategory)

    return {
        extrema: [
            SIZE_CATEGORY_BOUNDS[sizeCategoryIndex ? sizeCategoryIndex - 1 : 0].pitch as Spev as Min<Spev>,
            SIZE_CATEGORY_BOUNDS[sizeCategoryIndex].pitch as Spev as Max<Spev>,
        ],
        exclusive: EXCLUDE_LOWER_BOUND,
    } as Zone<{of: SizeCategoryBound}>
}

export {
    computeSizeCategoryZone,
}
