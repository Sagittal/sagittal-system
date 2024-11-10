import { Comma, Formatted } from "@sagittal/general"
import { computeCommaName } from "./commaName"
import { CommaNameOptions } from "./types"

const formatComma = (comma: Comma, options: CommaNameOptions = {}): Formatted<Comma> => {
    return computeCommaName(comma, options) as string as Formatted<Comma>
}

export { formatComma }
