import {
    compute23FreeClass,
    computeDecimalFromVector,
    computeRationalScaledVectorFromRationalVector,
    doForEachRationalVector,
    Extrema,
    max,
    Max,
    Maybe,
    Vector,
    Numerator,
    PrimeCount,
} from "@sagittal/general"
import { computeN2D3P9 } from "../../n2d3p9"
import { N2D3P9 } from "../../types"

const computeMaybeNumeratorWithinMaxN2D3P9 = (
    numeratorVectorToCheck: Vector,
    maxN2D3P9: Max<N2D3P9>,
): Maybe<Numerator> => {
    const two3FreeClass = compute23FreeClass(
        computeRationalScaledVectorFromRationalVector(numeratorVectorToCheck),
    )
    const n2d3p9 = computeN2D3P9(two3FreeClass)

    return n2d3p9 < maxN2D3P9 ? (computeDecimalFromVector(numeratorVectorToCheck) as Numerator) : undefined
}

const computeMaxNumeratorWithLessN2D3P9ThanMaxN2D3P9 = (
    numeratorPrimeCountExtremasGivenMaxN2D3P9: Extrema<{ of: PrimeCount }>[],
    maxN2D3P9: Max<N2D3P9>,
): Max<Numerator> => {
    const numerators = doForEachRationalVector(
        numeratorPrimeCountExtremasGivenMaxN2D3P9,
        computeMaybeNumeratorWithinMaxN2D3P9,
        maxN2D3P9,
    )

    return max(...numerators)
}

export { computeMaxNumeratorWithLessN2D3P9ThanMaxN2D3P9 }
