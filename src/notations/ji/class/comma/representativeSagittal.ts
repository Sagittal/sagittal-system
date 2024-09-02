import { Maybe } from "@sagittal/general"
import { computeSagittalFromFlacco, Sagittal } from "../../../../accidental"
import { getCommaClass } from "./constants"
import { CommaClassId } from "./types"
import { getFlacco } from "../flacco/flacco"

const getRepresentativeSagittal = (commaClassId: CommaClassId): Maybe<Sagittal> => {
    const symbolClassId = getCommaClass(commaClassId).representativeSymbolClassId
    const flacco = getFlacco(symbolClassId)

    return computeSagittalFromFlacco(flacco)
}

export {
    getRepresentativeSagittal,
}
