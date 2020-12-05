import {ArmId, Compatible, HeadId} from "../../../../src"
import {Shafts} from "../../../../src/accidental/sagittal"

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
