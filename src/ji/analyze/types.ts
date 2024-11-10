import {
    Abs,
    Cents,
    Comma,
    Copfr,
    Decimal,
    Index,
    Max,
    Maybe,
    Name,
    Vector,
    Prime,
    Quotient,
    Sopfr,
    ScaledVector,
    Two3FreeClass,
    Rational,
    Rough,
} from "@sagittal/general"
import { ApotomeSlope, Ate, N2D3P9 } from "../badness"
import { SizeCategory } from "../name"

interface JiPitchAnalysisProperties {
    apotomeSlope: ApotomeSlope
    ate: Ate
    aas: Abs<ApotomeSlope>
    vector: Vector
    quotient: Quotient
    decimal: Decimal<Rational>
    cents: Cents
    two3FreeClassAnalysis: Two3FreeClassAnalysis
}

type CommaAnalysis = JiPitchAnalysisProperties & {
    name: Name<Comma>
    sizeCategory: Index<SizeCategory>
    pitch: Comma
}

type JiPitchAnalysis = JiPitchAnalysisProperties & {
    pitch: ScaledVector<Rational>
}

type PotentiallyCommaAnalysis = JiPitchAnalysisProperties & {
    name: Maybe<Name<Comma>>
    sizeCategory: Maybe<Index<SizeCategory>>
    pitch: ScaledVector<Rational>
}

type Two3FreeClassAnalysis = {
    two3FreeClass: Two3FreeClass
    name: Name<Two3FreeClass>
    two3FreePrimeLimit: Max<Prime<Rough<5>>>
    n2d3p9: N2D3P9
    two3FreeCopfr: Copfr<Rough<5>>
    two3FreeSopfr: Sopfr<Rough<5>>
}

export { JiPitchAnalysis, CommaAnalysis, Two3FreeClassAnalysis, PotentiallyCommaAnalysis }
