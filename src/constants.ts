import {APOTOME, halveSpev, THREE_PRIME_INDEX} from "@sagittal/general"

const HALF_APOTOME = halveSpev(APOTOME)                        // √(2187/2048)         56.8425030289¢

const APOTOME_3_EXPONENT = APOTOME.pev![THREE_PRIME_INDEX]

export {
    APOTOME_3_EXPONENT,
    HALF_APOTOME,
}
