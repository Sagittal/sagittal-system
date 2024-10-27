import { abs, Cents, round, Error, Abs } from "@sagittal/general"

const computeAbsError = (cents: Cents, centUnit: Cents): Abs<Error> => {
    const unrounded = cents / centUnit
    const rounded = round(unrounded)

    return abs(unrounded - rounded) as number as Abs<Error>
}

export { computeAbsError }
