export { findNotatingCommas } from "./notatingCommas"
export { computeRationalVectorInZone } from "./vectorInZone"
export { computeCommasFrom23FreeRationalVector } from "./commasFrom23FreeVector"
export { CommasFrom23FreeVectorOptions } from "./types"
export {
    DEFAULT_MAX_AAS,
    DEFAULT_MAX_ATE,
    DEFAULT_UPPER_BOUND,
    DEFAULT_MAX_2_3_FREE_COPFR,
    DEFAULT_MAX_2_3_FREE_SOPFR,
    DEFAULT_MAX_PRIME_LIMIT,
    DEFAULT_LOWER_BOUND,
    DEFAULT_MAX_N2D3P9,
    DEFAULT_EXCLUSIVE,
    DEFAULT_ZONE,
    DEFAULT_DIRECTED_WORD,
    DEFAULT_DIRECTED_NUMBERS,
    DEFAULT_FACTORING_MODE,
    DEFAULT_ABBREVIATED,
    DEFAULT_ASCII,
} from "./constants"

// A weird thing is that I think none of this stuff in here requires them to be commas.
// But it's all quite intimately connected with the find-commas script.
// And the sibling module "name" is definitely only for commas, but "analyze" is for comma or any JI pitch.
// And "badness" works for JI pitch or comma (or 2,3-free class). So I think just leave it open-ended. Let go.
