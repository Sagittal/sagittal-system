import {Io, Maybe} from "@sagittal/general"
import {Flavor} from "../flavor"

type Sagitype<T extends Maybe<Flavor> = undefined> =
    Io
    & {_SagitypeBrand: boolean}
    & (T extends Flavor ? {_FlavorBrand: T} : {})
type Unicode<T extends Maybe<Flavor> = undefined> =
    Io
    & {_UnicodeBrand: boolean}
    & (T extends Flavor ? {_FlavorBrand: T} : {})
type Smiley<T extends Maybe<Flavor> = undefined> =
    Io
    & {_SmileyBrand: boolean}
    & (T extends Flavor ? {_FlavorBrand: T} : {})

type Glyph<T extends Maybe<Flavor> = undefined> = Unicode<T> | Sagitype<T> | Smiley<T>

export {
    Sagitype,
    Unicode,
    Smiley,
    Glyph,
}
