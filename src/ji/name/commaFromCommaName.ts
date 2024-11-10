import {
    Comma,
    compute23FreeClass,
    computeRationalQuotientSmoothness,
    computeRationalScaledVectorFromRationalVector,
    computeRationalScaledVectorFromRationalQuotient,
    Direction,
    FIVE_SMOOTHNESS,
    increment,
    isUndefined,
    Maybe,
    Vector,
    stringify,
    TWO_3_FREE,
    computeRationalScaledVectorCopfr,
    computeRoughRationalVector,
    invertScaledVector,
    isVectorSub,
    isQuotientSub,
    isScaledVectorSub,
    Rational,
    Rough,
} from "@sagittal/general"
import { computeN2D3P9 } from "../badness"
import { computeRationalVectorInZone, findNotatingCommas } from "../find"
import { computeSizeCategoryZone } from "./sizeCategoryZone"
import { ParsedCommaName, SizeCategory } from "./types"

const compute3LimitCommaInSizeCategory = (sizeCategory: SizeCategory): Comma => {
    let threeExponent = 0
    const zone = computeSizeCategoryZone(sizeCategory)

    while (true) {
        let rationalVectorInZone: Maybe<Vector<Rational>> = computeRationalVectorInZone(
            [0, threeExponent] as Vector<Rational & Rough<3>>,
            zone,
        )
        if (!isUndefined(rationalVectorInZone)) {
            return computeRationalScaledVectorFromRationalVector(rationalVectorInZone) as Comma
        }

        rationalVectorInZone = computeRationalVectorInZone(
            [0, -threeExponent] as Vector<Rational & Rough<3>>,
            zone,
        )
        if (!isUndefined(rationalVectorInZone)) {
            return computeRationalScaledVectorFromRationalVector(rationalVectorInZone) as Comma
        }

        threeExponent = increment(threeExponent)
    }
}

const computeCommaFromCommaName = ({
    complexity,
    commaNameQuotient,
    sizeCategory,
    direction,
}: ParsedCommaName): Comma => {
    if (computeRationalQuotientSmoothness(commaNameQuotient) < FIVE_SMOOTHNESS) {
        return compute3LimitCommaInSizeCategory(sizeCategory)
    }

    const zone = computeSizeCategoryZone(sizeCategory)

    // No real choice but to go with the defaults here, unless we majorly refactor
    // It would be cool if we could use the search options the user provides here, but it creates a
    // Chicken-and-egg problem since we need to use this method itself as part of parsing said options!
    const commas = findNotatingCommas(computeRationalScaledVectorFromRationalQuotient(commaNameQuotient), {
        zone,
    })

    let mostPopularComma: Maybe<Comma>
    let bestPopularity = Infinity
    commas.forEach((comma: Comma): void => {
        const popularity = computeN2D3P9(compute23FreeClass(comma))

        if (
            popularity < bestPopularity ||
            (popularity === bestPopularity &&
                computeRationalScaledVectorCopfr(comma) < computeRationalScaledVectorCopfr(mostPopularComma!))
        ) {
            bestPopularity = popularity
            mostPopularComma = comma
        }
    })

    if (isUndefined(mostPopularComma)) {
        throw new Error(
            `For whatever reason the number of commas notating the comma name quotient ${stringify(
                commaNameQuotient,
            )} within the bounds of its size category ${sizeCategory} was not 1. It was ${
                commas.length
            }. Perhaps you need to expand the search parameters, e.g. raise the max ATE, AAS, or 2,3-free sopfr.`,
        )
    }

    const shouldCommaBeDown: boolean = isUndefined(direction)
        ? isQuotientSub(commaNameQuotient) !==
          isVectorSub(computeRoughRationalVector(mostPopularComma.vector, TWO_3_FREE))
        : direction === Direction.SUB
    const isCommaDown: boolean = isScaledVectorSub(mostPopularComma)

    return shouldCommaBeDown
        ? isCommaDown
            ? mostPopularComma
            : (invertScaledVector(mostPopularComma) as unknown as Comma)
        : isCommaDown
          ? (invertScaledVector(mostPopularComma) as unknown as Comma)
          : mostPopularComma
}

export { computeCommaFromCommaName }
