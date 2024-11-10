import { isUndefined } from "@sagittal/general"
import { Accidental, apotomeShift, Flavor, flipSagittal } from "../../../../accidental"
import { computeApotomeComplementHandlingAsymmetricalSelfComplement } from "../../asymmetricalSelfComplement"
import { Section } from "../section"
import { SymbolClassId } from "../symbol"
import { computeSagittalFromSymbolClassId } from "../symbol"

const computeRevoAccidentalFromCaptureZone = (
    symbolClassId: SymbolClassId,
    { negated, mirrored, shifted }: Section,
): Accidental<Flavor.REVO> => {
    let sagittal = computeSagittalFromSymbolClassId(symbolClassId)

    sagittal = mirrored ? computeApotomeComplementHandlingAsymmetricalSelfComplement(sagittal) : sagittal
    sagittal = shifted ? apotomeShift(sagittal) : sagittal
    sagittal = negated ? flipSagittal(sagittal) : sagittal

    return isUndefined(sagittal) ? ({} as Accidental<Flavor.REVO>) : (sagittal as Accidental<Flavor.REVO>)
}

export { computeRevoAccidentalFromCaptureZone }
