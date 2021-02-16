import {Formatted, shallowClone} from "@sagittal/general"
import {PARENTHETICAL_NATURAL_SAGITYPE} from "./constants"
import {Sagitype} from "./types"

const alignSagitype = (sagitype: Sagitype): Formatted<Sagitype> => {
    if (sagitype === PARENTHETICAL_NATURAL_SAGITYPE) {
        return ` ${PARENTHETICAL_NATURAL_SAGITYPE} ` as Formatted<Sagitype>
    }

    const shaftIndex = sagitype.indexOf("|")

    let spacesToPrepend = 5 - shaftIndex

    let formattedSagitype: Formatted<Sagitype> = shallowClone(sagitype) as string as Formatted<Sagitype>

    while (spacesToPrepend > 0) {
        formattedSagitype = " " + formattedSagitype as Formatted<Sagitype>
        spacesToPrepend -= 1
    }

    while (formattedSagitype.length < 8) {
        formattedSagitype = formattedSagitype + " " as Formatted<Sagitype>
    }

    return formattedSagitype as Formatted<Sagitype>
}

export {
    alignSagitype,
}
