import { BoundClassId } from "../bound"
import { Section } from "../section"
import { SymbolClassId } from "../symbol"

interface CaptureZone {
    boundClassId: BoundClassId
    symbolClassId: SymbolClassId
    section: Section
}

export { CaptureZone }
