import {
    compute23FreeClass,
    computeDecimalFromVector,
    computeRationalScaledVectorFromRationalVector,
    Decimal,
    doForEachRationalVector,
    Exponent,
    Extrema,
    max,
    Max,
    Maybe,
    Vector,
    Numerator,
    Prime,
    Count,
} from "@sagittal/general"
import { computeN2D3P9 } from "../../n2d3p9"
import { N2D3P9 } from "../../types"

const computeMaybeNumeratorWithinMaxN2D3P9 = (
    numeratorVectorToCheck: Vector<{ integer: true }>,
    maxN2D3P9: Max<N2D3P9>,
): Maybe<Numerator & Decimal<{ integer: true }>> => {
    const two3FreeClass = compute23FreeClass(
        computeRationalScaledVectorFromRationalVector(
            numeratorVectorToCheck as Vector<{ integer: true; rational: true }>,
        ),
    )
    const n2d3p9 = computeN2D3P9(two3FreeClass)

    return n2d3p9 < maxN2D3P9
        ? (computeDecimalFromVector(numeratorVectorToCheck) as Numerator &
              Decimal<{ integer: true }>)
        : undefined
}

const computeMaxNumeratorWithLessN2D3P9ThanMaxN2D3P9 = (
    numeratorPrimeExponentExtremasGivenMaxN2D3P9: Array<
        Extrema<{ of: Count<Prime> & Exponent<Prime> & Decimal<{ integer: true }> }>
    >,
    maxN2D3P9: Max<N2D3P9>,
): Max<Numerator & Decimal<{ integer: true }>> => {
    const numerators = doForEachRationalVector(
        numeratorPrimeExponentExtremasGivenMaxN2D3P9,
        computeMaybeNumeratorWithinMaxN2D3P9,
        maxN2D3P9,
    )

    return max(...numerators)
}

export { computeMaxNumeratorWithLessN2D3P9ThanMaxN2D3P9 }
