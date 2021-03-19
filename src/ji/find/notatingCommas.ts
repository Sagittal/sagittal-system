import {
    arePevsEqual,
    Comma,
    computeRoughRationalPev,
    invertPev,
    NumericProperties,
    Pev,
    Spev,
    TWO_3_FREE,
} from "@sagittal/general"
import {computeCommasFrom23FreeRationalPev} from "./commasFrom23FreePev"
import {CommasFrom23FreePevOptions} from "./types"

const findNotatingCommas = <T extends NumericProperties>(
    {pev}: Spev<T & {rational: true}>,
    options?: CommasFrom23FreePevOptions,
): Comma[] => {
    const two3FreeRationalPev: Pev<{rational: true, rough: 5}> =
        computeRoughRationalPev(pev, TWO_3_FREE) as Pev<{rational: true, rough: 5}>

    if (arePevsEqual(two3FreeRationalPev, [])) {
        return computeCommasFrom23FreeRationalPev(two3FreeRationalPev, options)
    }

    return [
        ...computeCommasFrom23FreeRationalPev(two3FreeRationalPev, options),
        ...computeCommasFrom23FreeRationalPev(invertPev(two3FreeRationalPev), options),
    ]
}

export {
    findNotatingCommas,
}
