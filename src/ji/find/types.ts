import { Abs, Max, Prime } from "@sagittal/general"
import { ApotomeSlope, Ate, N2D3P9 } from "../badness"
import { Zone } from "../types"

type CommasFrom23FreeVectorOptions = Partial<{
    zone: Zone
    maxAte: Max<Ate>
    maxAas: Max<Abs<ApotomeSlope>>
    maxN2D3P9: Max<N2D3P9>
    maxPrimeLimit: Max<Max<Prime>>
}>

export { CommasFrom23FreeVectorOptions }
