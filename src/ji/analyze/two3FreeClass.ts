import {
    compute23FreeClassName,
    computeRationalScaledVectorCopfr,
    computeRationalScaledVectorSmoothness,
    Copfr,
    Max,
    Prime,
    Rough,
    Sopfr,
    Two3FreeClass,
} from "@sagittal/general"
import { computeN2D3P9, computeSopfgtt, N2D3P9 } from "../badness"
import { Two3FreeClassAnalysis } from "./types"

const analyze23FreeClass = (two3FreeClass: Two3FreeClass): Two3FreeClassAnalysis => {
    const name = compute23FreeClassName(two3FreeClass)

    const two3FreePrimeLimit: Max<Prime<Rough<5>>> = computeRationalScaledVectorSmoothness(
        two3FreeClass,
    ) as Max<Prime<Rough<5>>>

    const two3FreeSopfr: Sopfr<Rough<5>> = computeSopfgtt(two3FreeClass) as Sopfr<Rough<5>>
    const two3FreeCopfr: Copfr<Rough<5>> = computeRationalScaledVectorCopfr(two3FreeClass) as Copfr<Rough<5>>

    const n2d3p9: N2D3P9 = computeN2D3P9(two3FreeClass)

    return {
        two3FreeClass,
        name,
        two3FreePrimeLimit,
        two3FreeSopfr,
        two3FreeCopfr,
        n2d3p9,
    }
}

export { analyze23FreeClass }
