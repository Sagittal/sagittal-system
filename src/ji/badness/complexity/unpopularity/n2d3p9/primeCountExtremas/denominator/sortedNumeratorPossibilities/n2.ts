import {
    BASE_2,
    computeRationalDecimalCopfr,
    Count,
    Exponent,
    Numerator,
    pow,
    Prime,
} from "@sagittal/general"
import { N2 } from "./types"

const computeN2 = (numerator: Numerator): N2 =>
    (numerator /
        pow(BASE_2, computeRationalDecimalCopfr(numerator) as number as Exponent<Count<Prime>>)) as N2

export { computeN2 }
