import { Cents, computeCentsFromPitch, ScaledVector } from "@sagittal/general"
import { MINA_CENTS } from "../../intervals"
import { computeLpe } from "./complexity"
import { LPEI_U } from "./constants"
import { computeCentsAbsError } from "./error"
import { LPEI } from "./types"

const computeLpei = (jiPitch: ScaledVector<{ rational: true }>, centUnit: Cents = MINA_CENTS): LPEI => {
    const cents = computeCentsFromPitch(jiPitch)

    return (computeLpe(jiPitch) + LPEI_U * computeCentsAbsError(cents, centUnit)) as LPEI
}

export { computeLpei }
