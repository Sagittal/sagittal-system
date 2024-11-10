import { isUndefined } from "@sagittal/general"
import { SYMBOL_CLASSES } from "./constants"
import { SymbolClass, SymbolClassId } from "./types"

const getSymbolClass = (symbolClassId: SymbolClassId): SymbolClass => {
    const maybeSymbolClass = SYMBOL_CLASSES[symbolClassId]

    if (isUndefined(maybeSymbolClass)) {
        throw new Error(
            `This flacco ID is not defined as a symbol class. It is probably one of the convenience flaccos defined with a value greater than a half apotome.`,
        )
    }

    return maybeSymbolClass
}

export { getSymbolClass }
