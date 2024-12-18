import { Maybe } from "@sagittal/general"
import { Flacco } from "../flacco"
import { Flavor } from "../types"

enum Shafts {
    SINGLE = "single",
    DOUBLE = "double",
    TRIPLE = "triple",
    EX = "ex",
}

type Sagittal<T extends Maybe<Flavor> = undefined> = Flacco & {
    down?: boolean
    shafts: Shafts
} & (T extends Flavor ? { _FlavorBrand: T } : unknown)

type Core<T extends Maybe<Flavor> = undefined> = Omit<Sagittal<T>, "arm">

export { Core, Sagittal, Shafts }
