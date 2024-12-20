import { Count, isEven, EdoStep } from "@sagittal/general"
import { computeApotomeComplement, Flavor, parseSagitype, Sagittal, Sagitype, Shafts } from "../../accidental"
import { SAGITTAL_SHARP } from "../../accidental"

const computeRequiredRevoSagittalCount = (sharpStep: EdoStep): Count<Sagittal> =>
    isEven(sharpStep)
        ? ((Math.floor(sharpStep / 2) - 1) as Count<Sagittal>)
        : (Math.floor(sharpStep / 2) as Count<Sagittal>)

const shiftedSagittal = (sagittal: Sagittal): Sagittal => ({
    ...sagittal,
    shafts: sagittal.shafts === Shafts.SINGLE ? Shafts.TRIPLE : Shafts.EX,
})

const computeSagittals = ({
    sagitypes,
    flavor,
    sharpStep,
}: {
    sagitypes: Sagitype[]
    flavor: Flavor
    sharpStep: EdoStep
}): Sagittal[] => {
    const sagittals: Sagittal[] = sagitypes.map(parseSagitype)

    if (flavor === Flavor.REVO) {
        sagittals
            .slice(0, computeRequiredRevoSagittalCount(sharpStep))
            .reverse()
            .forEach((sagittal: Sagittal): void => {
                sagittals.push(computeApotomeComplement(sagittal) as Sagittal<Flavor.REVO>)
            })

        sagittals.push(SAGITTAL_SHARP)

        sagittals.slice().forEach((sagittal: Sagittal): void => {
            sagittals.push(shiftedSagittal(sagittal))
        })
    }

    return sagittals
}

export { computeSagittals }
