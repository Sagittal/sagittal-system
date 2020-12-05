import {ArmId, HeadId} from "./flacco"
import {Compatible} from "./flavor"
import {Shafts} from "./sagittal"

type AccidentalOptions = Partial<{
    armId: ArmId,
    anti: boolean,
    headId: HeadId,
    shafts: Shafts,
    down: boolean,
    compatible: Compatible,
}>

export {
    AccidentalOptions,
}
