import { Denominator, isLowestTerms, Max, Quotient, QuotientPart, Rational, Rough } from "@sagittal/general"
import { N2D3P9 } from "../types"
import { KNOWN_NUMERATORS } from "./constants"
import { computeN2D3P9FromKnownLowN2D3P9NumeratorAndPossibleDenominator } from "./n2d3p9"

const computeKnownRationalQuotients = (maxN2D3P9: Max<N2D3P9>): Quotient<Rational & Rough<5>>[] => {
    const rationalQuotients = [] as Quotient<Rational & Rough<5>>[]

    for (const [knownNumeratorIndex, knownNumerator] of KNOWN_NUMERATORS.entries()) {
        const possibleDenominators = KNOWN_NUMERATORS.slice(0, knownNumeratorIndex)

        for (const [possibleDenominatorIndex, possibleDenominator] of possibleDenominators.entries()) {
            const n2d3p9 = computeN2D3P9FromKnownLowN2D3P9NumeratorAndPossibleDenominator(
                knownNumerator,
                possibleDenominator,
            )

            if (n2d3p9 <= maxN2D3P9) {
                const rationalQuotient = [
                    knownNumerator.numerator,
                    possibleDenominator.numerator as QuotientPart as Denominator,
                ] as Quotient<Rational & Rough<5>>
                if (!isLowestTerms(rationalQuotient)) continue
                rationalQuotients.push(rationalQuotient)
            } else if (possibleDenominatorIndex === 0) {
                break
            }
        }
    }

    return rationalQuotients
}

export { computeKnownRationalQuotients }
