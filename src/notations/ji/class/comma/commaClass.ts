import { COMMA_CLASSES } from "./constants"
import { CommaClass, CommaClassId } from "./types"

const getCommaClass = (commaClassId: CommaClassId): CommaClass =>
    COMMA_CLASSES[commaClassId]

export {
    getCommaClass,
}
