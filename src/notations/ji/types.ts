import {Cents, CommaMean, Name, NumericProperties, Spev} from "@sagittal/general"
import {SizeCategoryBound} from "../../ji"
import {BoundClass, BoundClassId} from "../../notation"

enum BoundType {
    INA_MIDPOINT = "inaMidpoint",
    COMMA_MEAN = "commaMean",
    SIZE_CATEGORY_BOUND = "sizeCategoryBound",
}

type Tinas = Cents & {_InaBrand: "Tina"}
type Minas = Cents & {_InaBrand: "Mina"}
type Ultrinas = Cents & {_InaBrand: "Ultrina"}
type Hinas = Cents & {_InaBrand: "Hina"}
type Athinas = Cents & {_InaBrand: "Athina"}

type Ina = Cents & {_InaBrand: "Tina" | "Mina" | "Ultrina" | "Hina" | "Athina"}

enum JiNotationLevelId {
    MEDIUM = "medium",          // Corresponds closely with Athenian symbol subset
    HIGH = "high",              // Corresponds closely with Promethean symbol subset
    ULTRA = "ultra",            // Corresponds closely with Herculean symbol subset
    EXTREME = "extreme",        // Corresponds closely with Olympian symbol subset
    INSANE = "insane",          // Corresponds closely with Magrathean symbol subset
}

type InaMidpoint<T extends NumericProperties = {}> = {
    name: Name<InaMidpoint>,
    pitch: Spev<T & {rational: false}>,
}

type JiNotationBound<T extends NumericProperties = {}> = InaMidpoint<T> | CommaMean<T> | SizeCategoryBound<T>

// TODO: POST-NOTATION-GENERATION: JI NOTATION CLEAN-UP
//  JiNotationBoundClass is confusing and therefore bad. Please improve.
//  Maybe defer this issue until resolving what sagittal/notations/ji looks like post-notation generation
type JiNotationBoundClass<T extends NumericProperties = {}> =
    JiNotationBound<T> &
    BoundClass<T> &
    {
        jiNotationLevels: JiNotationLevelId[],
        boundType: BoundType,
    }

type JiNotationBoundClassEntry = [BoundClassId, JiNotationBoundClass]

export {
    Tinas,
    Minas,
    Ultrinas,
    Hinas,
    Athinas,
    JiNotationLevelId,
    JiNotationBound,
    JiNotationBoundClass,
    Ina,
    BoundType,
    InaMidpoint,
    JiNotationBoundClassEntry,
}
