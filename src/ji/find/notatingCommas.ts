import {
    areVectorsEqual,
    Comma,
    computeRoughRationalVector,
    invertVector,
    NumericProperties,
    Vector,
    ScaledVector,
    TWO_3_FREE,
} from "@sagittal/general"
import { computeCommasFrom23FreeRationalVector } from "./commasFrom23FreeVector"
import { CommasFrom23FreeVectorOptions } from "./types"

const findNotatingCommas = <T extends NumericProperties>(
    { vector }: ScaledVector<T & { rational: true }>,
    options?: CommasFrom23FreeVectorOptions,
): Comma[] => {
    const two3FreeRationalVector: Vector<{ rational: true; rough: 5 }> = computeRoughRationalVector(
        vector,
        TWO_3_FREE,
    ) as Vector<{ rational: true; rough: 5 }>

    if (areVectorsEqual(two3FreeRationalVector, [] as unknown[] as Vector)) {
        return computeCommasFrom23FreeRationalVector(two3FreeRationalVector, options)
    }

    return [
        ...computeCommasFrom23FreeRationalVector(two3FreeRationalVector, options),
        ...computeCommasFrom23FreeRationalVector(invertVector(two3FreeRationalVector), options),
    ]
}

export { findNotatingCommas }
