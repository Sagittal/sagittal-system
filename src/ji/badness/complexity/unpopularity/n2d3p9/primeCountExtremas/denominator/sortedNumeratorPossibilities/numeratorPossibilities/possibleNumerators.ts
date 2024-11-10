import { isIntegerDecimalRough, Max, Numerator, TWO_3_FREE } from "@sagittal/general"
import { N2D3P9 } from "../../../../types"
import { computeMaxNumeratorGivenMaxN2D3P9 } from "./maxNumerator"

const computePossibleNumeratorsGivenMaxN2D3P9 = (maxN2D3P9: Max<N2D3P9>): Array<Numerator> => {
    const maxNumerator = computeMaxNumeratorGivenMaxN2D3P9(maxN2D3P9)

    const possibleNumerators = []
    let possibleNumerator = 7 as Numerator
    while (possibleNumerator <= maxNumerator) {
        if (isIntegerDecimalRough(possibleNumerator, TWO_3_FREE)) {
            possibleNumerators.push(possibleNumerator)
        }

        possibleNumerator = (possibleNumerator + 2) as Numerator
    }

    return possibleNumerators
}

export { computePossibleNumeratorsGivenMaxN2D3P9 }
