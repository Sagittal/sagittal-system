import {deepEquals, Maybe} from "@sagittal/general"
import {SYMBOL_CLASSES, SymbolClass, SymbolClassId} from "../../notation"
import {computeSagittalFromSymbolClass, Sagittal} from "../sagittal"

const getSymbolClassEntry = (sagittal: Maybe<Sagittal>): Maybe<[SymbolClassId, SymbolClass]> =>
    (Object.entries(SYMBOL_CLASSES) as Array<[SymbolClassId, SymbolClass]>)
        .find(([_, symbolClass]: [SymbolClassId, SymbolClass]): boolean =>
            deepEquals(sagittal, computeSagittalFromSymbolClass(symbolClass)))

export {
    getSymbolClassEntry,
}
