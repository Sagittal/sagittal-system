import { FlagId, Head } from "../flacco"
import { Sagittal, Shafts } from "./types"

const DOUBLE_BARB_HEAD: Head = { left: [FlagId.BARB], right: [FlagId.BARB] }

const SAGITTAL_SEMISHARP: Sagittal = { shafts: Shafts.SINGLE, ...DOUBLE_BARB_HEAD }
const SAGITTAL_SEMIFLAT: Sagittal = { ...SAGITTAL_SEMISHARP, down: true }

const SAGITTAL_SHARP: Sagittal = { shafts: Shafts.DOUBLE, ...DOUBLE_BARB_HEAD }
const SAGITTAL_FLAT: Sagittal = { ...SAGITTAL_SHARP, down: true }

const SAGITTAL_SESQUISHARP: Sagittal = { shafts: Shafts.TRIPLE, ...DOUBLE_BARB_HEAD }
const SAGITTAL_SESQUIFLAT: Sagittal = { ...SAGITTAL_SESQUISHARP, down: true }

const SAGITTAL_DOUBLE_SHARP: Sagittal = { shafts: Shafts.EX, ...DOUBLE_BARB_HEAD }
const SAGITTAL_DOUBLE_FLAT: Sagittal = { ...SAGITTAL_DOUBLE_SHARP, down: true }

export {
    SAGITTAL_SEMISHARP,
    SAGITTAL_SEMIFLAT,
    SAGITTAL_FLAT,
    SAGITTAL_SHARP,
    SAGITTAL_SESQUISHARP,
    SAGITTAL_SESQUIFLAT,
    SAGITTAL_DOUBLE_SHARP,
    SAGITTAL_DOUBLE_FLAT,
}
