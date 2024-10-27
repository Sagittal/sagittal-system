import {
    Abs,
    BLANK,
    Comma,
    computeRationalVectorFromRationalScaledVector,
    computeRationalScaledVectorSmoothness,
    computeRoughRationalVector,
    computeSuperScaledVector,
    decrement,
    FIVE_ROUGHNESS,
    invertVector,
    Max,
    ScaledVector,
} from "@sagittal/general"
import { ApotomeSlope, Ate, computeAte } from "../badness"
import { computeCommasFrom23FreeRationalVector } from "../find"
import { computeSizeCategoryZone } from "./sizeCategoryZone"
import { MaybeComplexOptions } from "./types"

const COMMA_COMPLEXITY_NAMES = [
    "complex",
    "supercomplex",
    "hypercomplex",
    "ultracomplex",
    "5-complex",
    "6-complex",
    "7-complex",
    "8-complex",
    "9-complex",
    "10-complex",
    "11-complex",
    "12-complex",
    "13-complex",
]

const COMMA_COMPLEXITY_ABBREVIATIONS = [
    "c",
    "sc",
    "hc",
    "uc",
    "5c",
    "6c",
    "7c",
    "8c",
    "9c",
    "10c",
    "11c",
    "12c",
    "13c",
]

const computeMaybeComplex = (
    comma: Comma,
    { sizeCategory, abbreviated }: MaybeComplexOptions,
): string => {
    const maxAte = decrement(computeAte(comma)) as Max<Ate>
    if (maxAte === -1) return BLANK

    const zone = computeSizeCategoryZone(sizeCategory)
    const maxAas = Infinity as Max<Abs<ApotomeSlope>>
    const two3FreeRationalVector = computeRoughRationalVector(
        computeRationalVectorFromRationalScaledVector(
            computeSuperScaledVector(comma) as ScaledVector<{ rational: true }>,
        ),
        FIVE_ROUGHNESS,
    )
    const maxPrimeLimit = computeRationalScaledVectorSmoothness(comma)
    const options = { zone, maxPrimeLimit, maxAas, maxAte }
    const sameDirectionCommas = computeCommasFrom23FreeRationalVector(
        two3FreeRationalVector,
        options,
    )
    const otherDirectionCommas = computeCommasFrom23FreeRationalVector(
        invertVector(two3FreeRationalVector),
        options,
    )
    const commas = [...sameDirectionCommas, ...otherDirectionCommas]

    if (commas.length === 0) return BLANK

    return maxPrimeLimit < 5
        ? abbreviated
            ? `${computeAte(comma)}e`
            : `${computeAte(comma)}-EDO-`
        : abbreviated
        ? COMMA_COMPLEXITY_ABBREVIATIONS[commas.length - 1]
        : `${COMMA_COMPLEXITY_NAMES[commas.length - 1]}-`
}

// TODO: COMPLEXITY TIE-BREAKER
//  See: http://forum.sagittal.org/viewtopic.php?p=3239#p3239
//  I think the conclusion is to just call one greater and one lesser, based on their size
//  - I still need to realize how two commas with same undirected 2,3-free content share a complexity level, though, too

export { computeMaybeComplex }
