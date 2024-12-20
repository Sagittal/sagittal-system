import { Cents, Name, ScaledVector, Irrational, Apotome } from "@sagittal/general"

type Tinas = Cents & { _InaBrand: "Tina" }
type Minas = Cents & { _InaBrand: "Mina" }
type Ultrinas = Cents & { _InaBrand: "Ultrina" }
type Hinas = Cents & { _InaBrand: "Hina" }
type Athinas = Cents & { _InaBrand: "Athina" }

type Ina = Cents & { _InaBrand: "Tina" | "Mina" | "Ultrina" | "Hina" | "Athina" }

type InaMidpoint = {
    name: Name<InaMidpoint>
    pitch: ScaledVector<Irrational, { of: Apotome }>
}

export { Tinas, Minas, Ultrinas, Hinas, Athinas, InaMidpoint, Ina }
