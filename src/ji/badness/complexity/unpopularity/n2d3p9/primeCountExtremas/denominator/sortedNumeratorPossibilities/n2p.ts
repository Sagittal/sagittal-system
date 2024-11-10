import { computeRationalDecimalGpf, Numerator } from "@sagittal/general"
import { computeN2 } from "./n2"
import { N2P } from "./types"

const computeN2P = (numerator: Numerator): N2P =>
    (computeN2(numerator) * computeRationalDecimalGpf(numerator)) as N2P

export { computeN2P }
