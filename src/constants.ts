import { APOTOME, halveScaledVector, THREE_PRIME_INDEX } from "@sagittal/general"
import { Nominal } from "./types"

const HALF_APOTOME = halveScaledVector(APOTOME) // √(2187/2048)         56.8425030289¢

const APOTOME_3_EXPONENT = APOTOME.vector![THREE_PRIME_INDEX]

const NOMINALS: Nominal[] = Object.values(Nominal)

export { APOTOME_3_EXPONENT, HALF_APOTOME, NOMINALS }
