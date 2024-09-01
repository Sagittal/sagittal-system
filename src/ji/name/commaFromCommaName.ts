import {
    Comma,
    compute23FreeClass,
    computeRationalQuotientSmoothness,
    computeRationalSpevFromRationalPev,
    computeRationalSpevFromRationalQuotient,
    FIVE_SMOOTHNESS,
    increment,
    isUndefined,
    Maybe,
    Pev,
    stringify,
} from "@sagittal/general"
import {computeN2D3P9} from "../badness"
import {computeRationalPevInZone, findNotatingCommas} from "../find"
import {computeSizeCategoryZone} from "./sizeCategoryZone"
import {ParsedCommaName, SizeCategory} from "./types"

const compute3LimitCommaInSizeCategory = (sizeCategory: SizeCategory): Comma => {
    let threeExponent = 0
    const zone = computeSizeCategoryZone(sizeCategory)

    while (true) {
        let rationalPevInZone: Maybe<Pev<{rational: true}>> = computeRationalPevInZone(
            [0, threeExponent] as Pev<{rational: true, rough: 3}>,
            zone,
        )
        if (!isUndefined(rationalPevInZone)) {
            return computeRationalSpevFromRationalPev(rationalPevInZone) as Comma
        }

        rationalPevInZone = computeRationalPevInZone(
            [0, -threeExponent] as Pev<{rational: true, rough: 3}>,
            zone,
        )
        if (!isUndefined(rationalPevInZone)) {
            return computeRationalSpevFromRationalPev(rationalPevInZone) as Comma
        }

        threeExponent = increment(threeExponent)
    }
}

const computeCommaFromCommaName = (
    {complexity, commaNameQuotient, sizeCategory, direction}: ParsedCommaName,
): Comma => {
    if (computeRationalQuotientSmoothness(commaNameQuotient) < FIVE_SMOOTHNESS) {
        return compute3LimitCommaInSizeCategory(sizeCategory)
    }

    const zone = computeSizeCategoryZone(sizeCategory)

    // No real choice but to go with the defaults here, unless we majorly refactor
    // It would be cool if we could use the search options the user provides here, but it creates a
    // Chicken-and-egg problem since we need to use this method itself as part of parsing said options!
    const commas = findNotatingCommas(computeRationalSpevFromRationalQuotient(commaNameQuotient), {zone})

    let mostPopularComma = undefined
    let bestPopularity = Infinity
    commas.forEach((comma: Comma): void => {
        const popularity = computeN2D3P9(compute23FreeClass(comma))
        // console.log('checking', comma, popularity)
        // todo: okay so this is just kind of random,
        //  if you give it 1/5 then -4 4 1 is first
        //  and if you give it 5/1 then -34 20 1 is first
        if (popularity < bestPopularity) {
            bestPopularity = popularity
            mostPopularComma = comma
        }
    })

    if (isUndefined(mostPopularComma)) {
        throw new Error(`For whatever reason the number of commas notating the comma name quotient ${stringify(commaNameQuotient)} within the bounds of its size category ${sizeCategory} was not 1. It was ${commas.length}. Perhaps you need to expand the search parameters, e.g. raise the max ATE, AAS, or 2,3-free sopfr.`)
    }

    return mostPopularComma
}

export {
    computeCommaFromCommaName,
}
