import {
    arePevsEqual,
    computeLowerAndUpperExclusive,
    computeSpevFromPev,
    computeTrimmedArray,
    Decimal,
    EMPTY_PEV,
    Exponent,
    isSpevGreater,
    isSpevGreaterOrEqual,
    isSpevLesser,
    isSpevLesserOrEqual,
    isUndefined,
    Maybe,
    Pev,
    Prime,
    shallowClone,
    TWO_PRIME_INDEX,
    Zone,
} from "@sagittal/general"

const computeInZone = (
    rationalPevInZone: Pev<{rational: true, rough: 3}>,
    zone: Zone,
): boolean => {
    const {extrema: [lowerBound, upperBound], exclusive} = zone
    const {lowerExclusive, upperExclusive} = computeLowerAndUpperExclusive(exclusive)

    const aboveLowerBound = isUndefined(lowerBound) ?
        true :
        lowerExclusive ?
            isSpevGreater(computeSpevFromPev(rationalPevInZone), lowerBound) :
            isSpevGreaterOrEqual(computeSpevFromPev(rationalPevInZone), lowerBound)

    const belowUpperBound = isUndefined(upperBound) ?
        true :
        upperExclusive ?
            isSpevLesser(computeSpevFromPev(rationalPevInZone), upperBound) :
            isSpevLesserOrEqual(computeSpevFromPev(rationalPevInZone), upperBound)

    return aboveLowerBound && belowUpperBound
}

const computeRationalPevInZone = (
    twoFreeRationalPev: Pev<{rational: true, rough: 3}>,
    zone: Zone,
): Maybe<Pev<{rational: true}>> => {
    const {extrema: [lowerBound, upperBound]} = zone

    const rationalPevInZone = shallowClone(twoFreeRationalPev)

    if (!arePevsEqual(rationalPevInZone, EMPTY_PEV)) {
        while (!isUndefined(upperBound) && isSpevGreater(computeSpevFromPev(rationalPevInZone), upperBound)) {
            rationalPevInZone[TWO_PRIME_INDEX] = rationalPevInZone[TWO_PRIME_INDEX] - 1 as
                Decimal<{integer: true}> & Exponent<Prime>
        }
        while (!isUndefined(lowerBound) && isSpevLesser(computeSpevFromPev(rationalPevInZone), lowerBound)) {
            rationalPevInZone[TWO_PRIME_INDEX] = rationalPevInZone[TWO_PRIME_INDEX] + 1 as
                Decimal<{integer: true}> & Exponent<Prime>
        }
    }

    return computeInZone(rationalPevInZone, zone) ?
        computeTrimmedArray(rationalPevInZone) :
        undefined
}

export {
    computeRationalPevInZone,
}
