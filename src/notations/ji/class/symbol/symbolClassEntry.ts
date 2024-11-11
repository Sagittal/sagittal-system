import { deepEquals, Maybe } from "@sagittal/general"
import { Sagittal } from "../../../../accidental"
import { SYMBOL_CLASSES } from "./constants"
import { computeSagittalFromSymbolClass } from "./from"
import { SymbolClass, SymbolClassId } from "./types"

const getSymbolClassEntry = (sagittal: Maybe<Sagittal>): Maybe<[SymbolClassId, SymbolClass]> =>
    (Object.entries(SYMBOL_CLASSES) as [SymbolClassId, SymbolClass][]).find(
        ([_, symbolClass]: [SymbolClassId, SymbolClass]): boolean =>
            deepEquals(sagittal, computeSagittalFromSymbolClass(symbolClass)),
    )

export { getSymbolClassEntry }
