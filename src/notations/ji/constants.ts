import {APOTOME, Decimal, Multiplier, multiplySpev, Spev} from "@sagittal/general"

const APOTOME_DOWN =
    multiplySpev(APOTOME, -1 as Decimal<{integer: true}> & Multiplier) as Spev<{rational: true}>
const DOUBLE_APOTOME =
    multiplySpev(APOTOME, 2 as Decimal<{integer: true}> & Multiplier) as Spev<{rational: true}>
const DOUBLE_APOTOME_DOWN =
    multiplySpev(APOTOME, -2 as Decimal<{integer: true}> & Multiplier) as Spev<{rational: true}>

export {
    APOTOME_DOWN,
    DOUBLE_APOTOME,
    DOUBLE_APOTOME_DOWN,
}
