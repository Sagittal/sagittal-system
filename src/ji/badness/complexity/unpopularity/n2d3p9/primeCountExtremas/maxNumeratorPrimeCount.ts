import { floor, log, Max, Numerator, Of, Power, Prime, PrimeCount } from "@sagittal/general"
import { N2D3P9 } from "../types"

const computeMaxNumeratorPrimeCountGivenMaxN2D3P9 = (
    numeratorPrime: Prime & Of<Numerator>,
    maxN2D3P9: Max<N2D3P9>,
): Max<Numerator & PrimeCount> => {
    const power = (maxN2D3P9 * 9 * (1 / numeratorPrime)) as Power<Prime & Of<Numerator>>

    if (power <= 0) {
        return 0 as Max<Numerator & PrimeCount>
    }

    const base = numeratorPrime / 2

    return floor(log(power, base)) as number as Max<Numerator & PrimeCount>
}

export { computeMaxNumeratorPrimeCountGivenMaxN2D3P9 }
