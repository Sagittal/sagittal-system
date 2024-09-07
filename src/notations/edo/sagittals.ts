import { Count, mod } from "@sagittal/general"
import { EdoStep } from "./types";
import { computeApotomeComplement, Flavor, parseSagitype, Sagittal, Sagitype, Shafts } from "../../accidental";
import { SAGITTAL_SHARP } from "../../accidental/sagittal/constants";

const computeRequiredRevoSagittalCount = (sharpStep: EdoStep): Count<Sagittal> => mod(sharpStep, 2) === 0 ?
    Math.floor(sharpStep / 2) - 1 as Count<Sagittal> :
    Math.floor(sharpStep / 2) as Count<Sagittal>

const shiftedSagittal = (sagittal: Sagittal): Sagittal => ({
    ...sagittal,
    shafts: sagittal.shafts === Shafts.SINGLE ?
        Shafts.TRIPLE :
        Shafts.EX
})

const computeSagittals = (
    { sagitypes, flavor, sharpStep }: { sagitypes: Sagitype[], flavor: Flavor, sharpStep: EdoStep }
): Sagittal[] => {
    let sagittals: Sagittal[] = sagitypes.map(parseSagitype)

    if (flavor === Flavor.EVO) {
        return sagittals
    }

    sagittals
        .slice(0, computeRequiredRevoSagittalCount(sharpStep))
        .reverse()
        .forEach((sagittal: Sagittal): void => {
            sagittals.push(computeApotomeComplement(sagittal) as Sagittal)
        })

    sagittals.push(SAGITTAL_SHARP)

    sagittals
        .slice()
        .forEach((sagittal: Sagittal): void => {
            sagittals.push(shiftedSagittal(sagittal))
        })

    return sagittals
}

export {
    computeSagittals,
}
