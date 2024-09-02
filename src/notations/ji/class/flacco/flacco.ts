import { FlaccoId } from "./types"
import { ArmId, Flacco, HeadId, getArm, getHead } from "../../../../accidental"
import { SymbolClassId } from "../symbol"
import { FLACCOS } from "./constants"

const getFlacco = (flaccoId: FlaccoId | SymbolClassId): Flacco =>
    FLACCOS[flaccoId]

export {
    getFlacco,
}
