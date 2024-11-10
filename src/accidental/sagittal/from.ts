import { isUndefined, Maybe } from "@sagittal/general"
import { Flacco } from "../flacco"
import { Sagittal, Shafts } from "./types"

const computeSagittalFromFlacco = (flacco: Flacco): Maybe<Sagittal> => {
    if (isUndefined(flacco.arm) && isUndefined(flacco.left) && isUndefined(flacco.right)) return

    return {
        ...flacco,
        shafts: Shafts.SINGLE,
    }
}

export { computeSagittalFromFlacco }
