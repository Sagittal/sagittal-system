import {
    Abs,
    Cents,
    Copfr,
    Decimal,
    Direction,
    Max,
    Vector,
    Name,
    Prime,
    Quotient,
    ScaledVector,
    Sopfr,
    Two3FreeClass,
} from "@sagittal/general"
import { analyzeJiPitch, ApotomeSlope, Ate, N2D3P9 } from "../../../../src"

describe("analyzeJiPitch", (): void => {
    it("returns an analysis of a JI pitch, given its vector", (): void => {
        const jiPitch = { vector: [-7, -6, 3, 5, -1] } as ScaledVector<{ rational: true }>

        const actual = analyzeJiPitch(jiPitch)

        const expected = {
            pitch: jiPitch,
            cents: 1240.022726 as Cents,
            vector: [-7, -6, 3, 5, -1] as Vector<{ rational: true }>,
            quotient: [2100875, 1026432] as Quotient<{ rational: true }>,
            decimal: 2.046775 as Decimal<{ rational: true }>,
            apotomeSlope: -82.352717 as ApotomeSlope,
            ate: 6 as Ate,
            aas: 82.352717 as Abs<ApotomeSlope>,
            two3FreeClassAnalysis: {
                two3FreeClass: {
                    vector: [0, 0, 3, 5, -1] as Vector<{
                        rational: true
                        rough: 5
                        direction: Direction.SUPER
                    }>,
                } as Two3FreeClass,
                name: "{2100875/11}₂,₃" as Name<Two3FreeClass>,
                two3FreePrimeLimit: 11 as Max<Prime<{ rough: 5 }>>,
                two3FreeCopfr: 9 as Copfr<{ rough: 5 }>,
                two3FreeSopfr: 61 as Sopfr<{ rough: 5 }>,
                n2d3p9: 36777.470341 as N2D3P9,
            },
        }
        expect(actual).toBeCloseToObject(expected)
    })
})
