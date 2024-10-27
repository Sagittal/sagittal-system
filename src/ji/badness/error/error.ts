import { abs, Cents, round, Error, Abs } from "@sagittal/general"

const computeCentsAbsError = (cents: Cents, centUnit: Cents): Abs<Error<Cents>> => {
    const unrounded = cents / centUnit
    const rounded = round(unrounded)

    return abs(unrounded - rounded) as number as Error<Cents>
}

export { computeCentsAbsError }
