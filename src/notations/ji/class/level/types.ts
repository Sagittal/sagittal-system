import { CommaMean } from "@sagittal/general"
import { SizeCategoryBound } from "../../../../ji"
import { InaMidpoint } from "../../types"
import { BoundClassId } from "../bound"
import { BoundClass, BoundType } from "../bound"
import { SymbolClassId } from "../symbol"

// State of the art plans described here: http://forum.sagittal.org/viewtopic.php?p=2492#p2492

// But this is actually just a JI Precision Level notation...
interface Notation {
    boundClassIds: BoundClassId[]
    symbolClassIds: SymbolClassId[]
}

type JiNotationBound = InaMidpoint | CommaMean | SizeCategoryBound

// TODO: POST-NOTATION-GENERATION: JI NOTATION CLEAN-UP
//  JiNotationBoundClass is confusing and therefore bad. Please improve.
//  Maybe defer this issue until resolving what sagittal/notations/ji looks like post-notation generation
type JiNotationBoundClass = JiNotationBound &
    BoundClass & {
        jiNotationLevels: JiNotationLevelId[]
        boundType: BoundType
    }

type JiNotationBoundClassEntry = [BoundClassId, JiNotationBoundClass]

enum JiNotationLevelId {
    MEDIUM = "medium", // Corresponds closely with Athenian symbol subset
    HIGH = "high", // Corresponds closely with Promethean symbol subset
    ULTRA = "ultra", // Corresponds closely with Herculean symbol subset
    EXTREME = "extreme", // Corresponds closely with Olympian symbol subset
    INSANE = "insane", // Corresponds closely with Magrathean symbol subset
}

export { JiNotationLevelId, JiNotationBound, JiNotationBoundClass, JiNotationBoundClassEntry, Notation }
