import { FlagId, parseSagitype, Sagittal, Sagitype, Shafts } from "../../accidental"
import { Nominal } from "./types"

const NOMINALS: Nominal[] = Object.values(Nominal)

const SAGITTAL_SHARP: Sagittal = parseSagitype("/||\\" as Sagitype)
const SAGITTAL_HALF_SHARP: Sagittal = { shafts: Shafts.SINGLE, left: [FlagId.BARB], right: [FlagId.BARB] }
const SAGITTAL_FLAT: Sagittal = { ...SAGITTAL_SHARP, down: true }
const SAGITTAL_HALF_FLAT: Sagittal = { ...SAGITTAL_HALF_SHARP, down: true }

export {
    NOMINALS,
    SAGITTAL_SHARP,
    SAGITTAL_FLAT,
    SAGITTAL_HALF_SHARP,
    SAGITTAL_HALF_FLAT
}
