import {
    computePrimes,
    computeRationalDecimalCopf,
    computeRationalDecimalCopfr,
    computeRationalDecimalGpf,
    computeRationalVectorFromRationalDecimal,
    DOT_OPERATOR,
    formatDecimalAsSuperscript,
    PrimeCount,
    Quotient,
    QuotientPart,
    stringify,
} from "@sagittal/general"
import { FactoringMode } from "./types"

const formatFactoredCommaNameQuotientPart = (
    commaNameQuotientPart: QuotientPart,
    quotientPartIndex: number,
    ascii = false,
): string => {
    if (commaNameQuotientPart === 1) return "1"

    const integerVector = computeRationalVectorFromRationalDecimal(commaNameQuotientPart)

    const factoredTerms: string[] = []

    const primes = computePrimes()

    integerVector.forEach((primeCount: PrimeCount, primeCountIndex: number): void => {
        if (primeCount === 0) {
            return
        }

        if (primeCount === 1) {
            factoredTerms.push(`${primes[primeCountIndex]}`)
        }

        if (primeCount > 1) {
            const exponent = ascii ? `^${primeCount}` : formatDecimalAsSuperscript(primeCount)
            factoredTerms.push(`${primes[primeCountIndex]}${exponent}`)
        }
    })

    const operator = ascii ? "*" : DOT_OPERATOR
    const joinedFactoredTerms = factoredTerms.join(operator)

    return quotientPartIndex === 1 && computeRationalDecimalCopf(commaNameQuotientPart) > 1
        ? `(${joinedFactoredTerms})`
        : joinedFactoredTerms
}

const formatUnfactoredCommaNameQuotientPart = (commaNameQuotientPart: QuotientPart): string =>
    stringify(commaNameQuotientPart)

const computeShouldFactor = (commaNameQuotientPart: QuotientPart): boolean => {
    if (computeRationalDecimalCopfr(commaNameQuotientPart) > 2 && commaNameQuotientPart !== 125) return true

    return (
        computeRationalDecimalGpf(commaNameQuotientPart) > 11 &&
        commaNameQuotientPart !== 65 &&
        commaNameQuotientPart !== 143
    )
}

const formatMaybeFactoredCommaNameQuotientPart = (
    commaNameQuotientPart: QuotientPart,
    quotientPartIndex: number,
    ascii: boolean,
): string =>
    computeShouldFactor(commaNameQuotientPart)
        ? formatFactoredCommaNameQuotientPart(commaNameQuotientPart, quotientPartIndex, ascii)
        : formatUnfactoredCommaNameQuotientPart(commaNameQuotientPart)

const formatCommaNameQuotient = (
    commaNameQuotient: Quotient,
    { factoringMode, ascii }: { factoringMode: FactoringMode; ascii: boolean },
): string[] =>
    factoringMode === FactoringMode.ALWAYS
        ? commaNameQuotient.map((quotientPart: QuotientPart, quotientPartIndex: number): string => {
              return formatFactoredCommaNameQuotientPart(quotientPart, quotientPartIndex, ascii)
          })
        : factoringMode === FactoringMode.NEVER
          ? commaNameQuotient.map(formatUnfactoredCommaNameQuotientPart)
          : commaNameQuotient.map((quotientPart: QuotientPart, quotientPartIndex: number): string => {
                return formatMaybeFactoredCommaNameQuotientPart(quotientPart, quotientPartIndex, ascii)
            })

export { formatCommaNameQuotient }
