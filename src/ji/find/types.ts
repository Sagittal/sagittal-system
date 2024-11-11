import { Abs, Max, Prime } from "@sagittal/general"
import { ApotomeSlope, Ate, N2D3P9 } from "../badness"
import { CommaNameOptions } from "../name"
import { Zone } from "../types"

type CommasFrom23FreeVectorOptions = CommaNameOptions &
    Partial<{
        zone: Zone
        maxAte: Max<Ate>
        maxAas: Max<Abs<ApotomeSlope>>
        maxN2D3P9: Max<N2D3P9>
        maxPrimeLimit: Max<Max<Prime>>
    }>

export { CommasFrom23FreeVectorOptions }
