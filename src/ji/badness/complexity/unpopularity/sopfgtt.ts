import { computeRationalScaledVectorSopfr, Rough, Sopfr, Two3FreeClass } from "@sagittal/general"
import { Unpopularity } from "./types"

// The classic SoPF>3 unpopularity metric which served Sagittal for most of its development, up to the Insane precision
const computeSopfgtt = (two3FreeClass: Two3FreeClass): Unpopularity & Sopfr<Rough<5>> =>
    computeRationalScaledVectorSopfr(two3FreeClass) as Unpopularity & Sopfr<Rough<5>>

export { computeSopfgtt }
