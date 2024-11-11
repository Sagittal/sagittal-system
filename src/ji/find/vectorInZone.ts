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
    PrimeCount,
    NumericProperties,
    Rational,
    Rough,
} from "@sagittal/general"
import { Zone } from "../types"

const computeInZone = <T extends NumericProperties>(
    rationalVectorInZone: Vector<T & Rational & Rough<3>>,
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

const computeRationalVectorInZone = (
    twoFreeRationalVector: Vector<Rational & Rough<3>>,
    zone: Zone,
): Maybe<Vector> => {
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
                Rational & Rough<3>
            >
        }
        while (
            !isUndefined(lowerBound) &&
            isScaledVectorLesser(computeScaledVectorFromVector(rationalVectorInZone), lowerBound)
        ) {
            rationalVectorInZone[TWO_PRIME_INDEX] = (rationalVectorInZone[TWO_PRIME_INDEX] + 1) as PrimeCount<
                Rational & Rough<3>
            >
        }
    }

    return computeInZone(rationalVectorInZone, zone) ? computeTrimmedArray(rationalVectorInZone) : undefined
}

export { computeRationalVectorInZone }
