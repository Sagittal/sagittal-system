import { Maybe } from "@sagittal/general"
import { Sagittal, computeSagittalFromFlacco } from "../../../../accidental"
import { SymbolClass, SymbolClassId } from "./types"
import { getSymbolClass } from "./symbolClass"
import { getFlacco } from "../flacco"

const computeSagittalFromSymbolClassId = (symbolClassId: SymbolClassId): Maybe<Sagittal> => {
    const symbolClass = getSymbolClass(symbolClassId)

    return computeSagittalFromSymbolClass(symbolClass)
}

const computeSagittalFromSymbolClass = (symbolClass: SymbolClass): Maybe<Sagittal> => {
    const flacco = getFlacco(symbolClass.flaccoId)

    return computeSagittalFromFlacco(flacco)
}

export {
    computeSagittalFromSymbolClassId,
    computeSagittalFromSymbolClass,
}
