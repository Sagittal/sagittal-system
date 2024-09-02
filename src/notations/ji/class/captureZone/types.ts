import { BoundClassId } from "../bound/types";
import { Section } from "../section/types";
import { SymbolClassId } from "../symbol/types";

interface CaptureZone {
    boundClassId: BoundClassId,
    symbolClassId: SymbolClassId,
    section: Section,
}

export {
    CaptureZone,
}
