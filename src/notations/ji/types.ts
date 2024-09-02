import {Cents, Name, NumericProperties, Spev, Comma} from "@sagittal/general"

type Tinas = Cents & {_InaBrand: "Tina"}
type Minas = Cents & {_InaBrand: "Mina"}
type Ultrinas = Cents & {_InaBrand: "Ultrina"}
type Hinas = Cents & {_InaBrand: "Hina"}
type Athinas = Cents & {_InaBrand: "Athina"}

type Ina = Cents & {_InaBrand: "Tina" | "Mina" | "Ultrina" | "Hina" | "Athina"}

type InaMidpoint<T extends NumericProperties = {}> = {
    name: Name<InaMidpoint>,
    pitch: Spev<T & {rational: false}>,
}

export {
    Tinas,
    Minas,
    Ultrinas,
    Hinas,
    Athinas,
    InaMidpoint,
    Ina,
}
