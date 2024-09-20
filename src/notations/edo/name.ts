import { Edo, EdoName } from "./types"

const parseEdoName = (
    edoName: EdoName,
): { edo: Edo; useSecondBestFifth: boolean } => {
    let useSecondBestFifth: boolean = false
    if (edoName.match(/b/)) {
        edoName = edoName.slice(0, edoName.length - 1) as EdoName
        useSecondBestFifth = true
    }
    const edo: Edo = parseInt(edoName) as Edo

    return { edo, useSecondBestFifth }
}

const formatEdoName = (edo: Edo, useSecondBestFifth: boolean): EdoName =>
    `${edo}${useSecondBestFifth ? "b" : ""}` as EdoName

export { parseEdoName, formatEdoName }
