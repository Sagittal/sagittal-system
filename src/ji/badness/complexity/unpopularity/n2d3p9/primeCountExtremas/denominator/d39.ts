import { pow } from "@sagittal/general"
import { D39, D39ForPossibleMaxDenominatorPrimeCountOptions } from "./types"

const computeD39ForPossibleMaxDenominatorPrimeCount = (
    options: D39ForPossibleMaxDenominatorPrimeCountOptions,
): D39 => {
    const { denominatorPrime, possibleMaxDenominatorPrimeCountGivenMaxN2D3P9 } = options

    return (pow(denominatorPrime / 3, possibleMaxDenominatorPrimeCountGivenMaxN2D3P9) / 9) as D39
}

export { computeD39ForPossibleMaxDenominatorPrimeCount }
