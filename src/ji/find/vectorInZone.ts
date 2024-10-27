import {
    areVectorsEqual,
    computeLowerAndUpperExclusive,
    computeScaledVectorFromVector,
    computeTrimmedArray,
    EMPTY_VECTOR,
    isScaledVectorGreater,
    isScaledVectorGreaterOrEqual,
    isScaledVectorLesser,
    isScaledVectorLesserOrEqual,
    isUndefined,
    Maybe,
    Vector,
    shallowClone,
    TWO_PRIME_INDEX,
    Zone,
    PrimeCount,
    NumericProperties,
} from "@sagittal/general"

const computeInZone = <T extends NumericProperties>(
    rationalVectorInZone: Vector<T & { rational: true; rough: 3 }>,
    zone: Zone,
): boolean => {
    const {
        extrema: [lowerBound, upperBound],
        exclusive,
    } = zone
    const { lowerExclusive, upperExclusive } = computeLowerAndUpperExclusive(exclusive)

    const aboveLowerBound = isUndefined(lowerBound)
        ? true
        : lowerExclusive
        ? isScaledVectorGreater(computeScaledVectorFromVector(rationalVectorInZone), lowerBound)
        : isScaledVectorGreaterOrEqual(computeScaledVectorFromVector(rationalVectorInZone), lowerBound)

    const belowUpperBound = isUndefined(upperBound)
        ? true
        : upperExclusive
        ? isScaledVectorLesser(computeScaledVectorFromVector(rationalVectorInZone), upperBound)
        : isScaledVectorLesserOrEqual(computeScaledVectorFromVector(rationalVectorInZone), upperBound)

    return aboveLowerBound && belowUpperBound
}

const computeRationalVectorInZone = <T extends NumericProperties>(
    twoFreeRationalVector: Vector<T & { rational: true; rough: 3 }>,
    zone: Zone,
): Maybe<Vector<T & { rational: true }>> => {
    const {
        extrema: [lowerBound, upperBound],
    } = zone

    const rationalVectorInZone = shallowClone(twoFreeRationalVector)

    if (!areVectorsEqual(rationalVectorInZone, EMPTY_VECTOR)) {
        while (
            !isUndefined(upperBound) &&
            isScaledVectorGreater(computeScaledVectorFromVector(rationalVectorInZone), upperBound)
        ) {
            rationalVectorInZone[TWO_PRIME_INDEX] = (rationalVectorInZone[TWO_PRIME_INDEX] - 1) as PrimeCount<
                T & { rational: true; rough: 3 }
            >
        }
        while (
            !isUndefined(lowerBound) &&
            isScaledVectorLesser(computeScaledVectorFromVector(rationalVectorInZone), lowerBound)
        ) {
            rationalVectorInZone[TWO_PRIME_INDEX] = (rationalVectorInZone[TWO_PRIME_INDEX] + 1) as PrimeCount<
                T & { rational: true; rough: 3 }
            >
        }
    }

    return computeInZone(rationalVectorInZone, zone) ? computeTrimmedArray(rationalVectorInZone) : undefined
}

export { computeRationalVectorInZone }
