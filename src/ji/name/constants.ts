import { SIZE_CATEGORY_BOUNDS } from "./sizeCategoryBounds"
import { CommaNameOptions, DirectedNumbers, DirectedWord, SizeCategoryBound } from "./types"

const MAX_SIZE_CATEGORY_BOUND: SizeCategoryBound = SIZE_CATEGORY_BOUNDS[SIZE_CATEGORY_BOUNDS.length - 1] // 227.370012¢

const OUTDATED_COMMA_NAME_OPTIONS_PREFERENCE: CommaNameOptions = {
    directedWord: DirectedWord.NEVER,
    directedNumbers: DirectedNumbers.ON,
}

export { MAX_SIZE_CATEGORY_BOUND, OUTDATED_COMMA_NAME_OPTIONS_PREFERENCE }
