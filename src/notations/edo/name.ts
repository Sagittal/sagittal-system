import { Edo } from "@sagittal/general"
import { EdoNotationName } from "./types"

const parseEdoNotationName = (
    edoNotationName: EdoNotationName,
): { edo: Edo; useSecondBestFifth: boolean } => {
    let useSecondBestFifth: boolean = false
    if (edoNotationName.match(/b/)) {
        edoNotationName = edoNotationName.slice(
            0,
            edoNotationName.length - 1,
        ) as EdoNotationName
        useSecondBestFifth = true
    }
    const edo: Edo = parseInt(edoNotationName) as Edo

    return { edo, useSecondBestFifth }
}

const formatEdoNotationName = (
    edo: Edo,
    useSecondBestFifth: boolean,
): EdoNotationName =>
    `${edo}${useSecondBestFifth ? "b" : ""}` as EdoNotationName

export { parseEdoNotationName, formatEdoNotationName }
