import {Count, Decimal, Exponent, Max, Numerator, Prime} from "@sagittal/general"

const INITIAL_MAX_NUMERATOR_PRIME_EXPONENTS_FOR_TWO_AND_THREE =
    [0, 0] as Array<Max<Numerator & Decimal<{integer: true}> & Count<Prime> & Exponent<Prime>>>

export {
    INITIAL_MAX_NUMERATOR_PRIME_EXPONENTS_FOR_TWO_AND_THREE,
}
