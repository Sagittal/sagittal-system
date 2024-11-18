import { Comma, Index, indexOf } from "@sagittal/general"
import { computeSizeCategory } from "./sizeCategory"
import { SizeCategory } from "./types"

const computeSizeCategoryIndex = (comma: Comma): Index<SizeCategory> => {
    const sizeCategory = computeSizeCategory(comma)

    return computeSizeCategoryIndexFromSizeCategory(sizeCategory)
}

const computeSizeCategoryIndexFromSizeCategory = (sizeCategory: SizeCategory): Index<SizeCategory> =>
    indexOf(Object.values(SizeCategory), sizeCategory)

export { computeSizeCategoryIndex, computeSizeCategoryIndexFromSizeCategory }
