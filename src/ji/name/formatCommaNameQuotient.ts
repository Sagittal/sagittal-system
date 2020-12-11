import {
    computePrimes,
    computeRationalDecimalCopf,
    computeRationalDecimalCopfr,
    computeRationalDecimalGpf,
    computeRationalMonzoFromRationalDecimal,
    Decimal,
    DOT_OPERATOR,
    Exponent,
    formatDecimalAsSuperscript,
    Prime,
    Quotient,
    QuotientPart,
} from "@sagittal/general"
import {FactoringMode} from "./types"

const formatFactoredCommaNameQuotientPart = (
    commaNameQuotientPart: QuotientPart & Decimal<{integer: true}>,
    quotientPartIndex: number,
): string => {
    if (commaNameQuotientPart === 1) return "1"

    const integerMonzo = computeRationalMonzoFromRationalDecimal(commaNameQuotientPart)

    const factoredTerms: string[] = []

    const primes = computePrimes()

    integerMonzo.forEach(
        (
            primeExponent: Decimal<{integer: true}> & Exponent<Prime>,
            primeExponentIndex: number,
        ): void => {
            if (primeExponent === 0) {
                return
            }

            if (primeExponent === 1) {
                factoredTerms.push(`${primes[primeExponentIndex]}`)
            }

            if (primeExponent > 1) {
                factoredTerms.push(`${primes[primeExponentIndex]}${formatDecimalAsSuperscript(primeExponent)}`)
            }
        },
    )

    const joinedFactoredTerms = factoredTerms.join(DOT_OPERATOR)

    return quotientPartIndex === 1 && computeRationalDecimalCopf(commaNameQuotientPart) > 1 ?
        `(${joinedFactoredTerms})` :
        joinedFactoredTerms
}

const formatUnfactoredCommaNameQuotientPart = (
    commaNameQuotientPart: QuotientPart & Decimal<{integer: true}>,
): string =>
    commaNameQuotientPart.toString()

const computeShouldFactor = (
    commaNameQuotientPart: QuotientPart & Decimal<{integer: true}>,
): boolean => {
    if (computeRationalDecimalCopfr(commaNameQuotientPart) > 2 && commaNameQuotientPart !== 125) return true

    return computeRationalDecimalGpf(commaNameQuotientPart) > 11
        && commaNameQuotientPart !== 65
        && commaNameQuotientPart !== 143
}

const formatMaybeFactoredCommaNameQuotientPart = (
    commaNameQuotientPart: QuotientPart & Decimal<{integer: true}>,
    quotientPartIndex: number,
): string =>
    computeShouldFactor(commaNameQuotientPart) ?
        formatFactoredCommaNameQuotientPart(commaNameQuotientPart, quotientPartIndex) :
        formatUnfactoredCommaNameQuotientPart(commaNameQuotientPart)

const formatCommaNameQuotient = (
    commaNameQuotient: Quotient<{rational: true}>,
    {factoringMode}: {factoringMode: FactoringMode},
): string[] =>
    factoringMode === FactoringMode.ALWAYS ?
        commaNameQuotient.map(formatFactoredCommaNameQuotientPart) :
        factoringMode === FactoringMode.NEVER ?
            commaNameQuotient.map(formatUnfactoredCommaNameQuotientPart) :
            commaNameQuotient.map(formatMaybeFactoredCommaNameQuotientPart)

export {
    formatCommaNameQuotient,
}
