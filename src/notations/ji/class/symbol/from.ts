import { Maybe } from "@sagittal/general"
import { Sagittal, computeSagittalFromFlacco } from "../../../../accidental"
import { getFlacco } from "../flacco"
import { getSymbolClass } from "./symbolClass"
import { SymbolClass, SymbolClassId } from "./types"

const computeSagittalFromSymbolClassId = (symbolClassId: SymbolClassId): Maybe<Sagittal> => {
    const symbolClass = getSymbolClass(symbolClassId)

    return computeSagittalFromSymbolClass(symbolClass)
}

const computeSagittalFromSymbolClass = (symbolClass: SymbolClass): Maybe<Sagittal> => {
    const flacco = getFlacco(symbolClass.flaccoId)

    return computeSagittalFromFlacco(flacco)
}

export { computeSagittalFromSymbolClassId, computeSagittalFromSymbolClass }
