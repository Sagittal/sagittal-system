import { Exclusive, Extrema, NoProperties, ScaledVector } from "@sagittal/general"

type Zone<T extends { of?: unknown } = NoProperties> = {
    extrema: Extrema<{ of: ScaledVector; open: true }>
    exclusive?: Exclusive
} & (T extends { of: unknown } ? { _ZoneOfBrand: T["of"] } : unknown)

export { Zone }
