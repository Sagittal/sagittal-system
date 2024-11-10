import {
    Abs,
    Cents,
    Copfr,
    Decimal,
    Max,
    Vector,
    Name,
    Prime,
    Quotient,
    ScaledVector,
    Sopfr,
    Two3FreeClass,
    Rational,
    Super,
    Rough,
} from "@sagittal/general"
import { analyzeJiPitch, ApotomeSlope, Ate, N2D3P9 } from "../../../../src"

describe("analyzeJiPitch", (): void => {
    it("returns an analysis of a JI pitch, given its vector", (): void => {
        const jiPitch = { vector: [-7, -6, 3, 5, -1] } as ScaledVector<Rational>

        const actual = analyzeJiPitch(jiPitch)

        const expected = {
            pitch: jiPitch,
            cents: 1240.022726 as Cents,
            vector: [-7, -6, 3, 5, -1] as Vector<Rational>,
            quotient: [2100875, 1026432] as Quotient<Rational>,
            decimal: 2.046775 as Decimal<Rational>,
            apotomeSlope: -82.352717 as ApotomeSlope,
            ate: 6 as Ate,
            aas: 82.352717 as Abs<ApotomeSlope>,
            two3FreeClassAnalysis: {
                two3FreeClass: {
                    vector: [0, 0, 3, 5, -1] as Vector<Rational & Rough<5> & Super>,
                } as Two3FreeClass,
                name: "{2100875/11}₂,₃" as Name<Two3FreeClass>,
                two3FreePrimeLimit: 11 as Max<Prime<Rough<5>>>,
                two3FreeCopfr: 9 as Copfr<Rough<5>>,
                two3FreeSopfr: 61 as Sopfr<Rough<5>>,
                n2d3p9: 36777.470341 as N2D3P9,
            },
        }
        expect(actual).toBeCloseToObject(expected)
    })
})
