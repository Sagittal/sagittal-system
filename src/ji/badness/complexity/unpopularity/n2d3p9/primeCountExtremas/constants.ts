import { Extrema, PrimeCount } from "@sagittal/general"

const EMPTY_PRIME_COUNT_EXTREMA = [0, 0] as Extrema<{
    of: PrimeCount
}>

const INITIAL_PRIME_COUNT_EXTREMAS_FOR_TWO_AND_THREE = [
    EMPTY_PRIME_COUNT_EXTREMA,
    EMPTY_PRIME_COUNT_EXTREMA,
] as Extrema<{ of: PrimeCount }>[]

export { EMPTY_PRIME_COUNT_EXTREMA, INITIAL_PRIME_COUNT_EXTREMAS_FOR_TWO_AND_THREE }
