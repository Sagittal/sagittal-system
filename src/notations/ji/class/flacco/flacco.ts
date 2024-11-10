import { Flacco } from "../../../../accidental"
import { SymbolClassId } from "../symbol"
import { FLACCOS } from "./constants"
import { FlaccoId } from "./types"

const getFlacco = (flaccoId: FlaccoId | SymbolClassId): Flacco => FLACCOS[flaccoId]

export { getFlacco }
