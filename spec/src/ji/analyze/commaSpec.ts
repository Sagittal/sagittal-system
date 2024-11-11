import {
    Abs,
    Cents,
    Comma,
    Copfr,
    Decimal,
    Index,
    Max,
    Vector,
    Name,
    Prime,
    Quotient,
    Sopfr,
    Two3FreeClass,
    Super,
    Rational,
    Rough,
} from "@sagittal/general"
import { analyzeComma, ApotomeSlope, Ate, N2D3P9, SizeCategory } from "../../../../src"

describe("analyzeComma", (): void => {
    it("returns an analysis of a comma, given its vector", (): void => {
        const comma = { vector: [-8, -6, 3, 5, -1] } as Comma

        const actual = analyzeComma(comma)

        const expected = {
            pitch: comma,
            cents: 40.022726 as Cents,
            vector: [-8, -6, 3, 5, -1] as Vector,
            quotient: [2100875, 2052864] as Quotient,
            decimal: 1.023387 as Decimal<Rational>,
            name: "5³⋅7⁵/11S" as Name<Comma>,
            sizeCategory: 5 as Index<SizeCategory>,
            apotomeSlope: -8.464345 as ApotomeSlope,
            aas: 8.464345 as Abs<ApotomeSlope>,
            ate: 6 as Ate,
            two3FreeClassAnalysis: {
                name: "{2100875/11}₂,₃" as Name<Two3FreeClass>,
                two3FreePrimeLimit: 11 as Max<Prime<Rough<5>>>,
                two3FreeCopfr: 9 as Copfr<Rough<5>>,
                two3FreeSopfr: 61 as Sopfr<Rough<5>>,
                n2d3p9: 36777.470341 as N2D3P9,
                two3FreeClass: {
                    vector: [0, 0, 3, 5, -1] as Vector<Rational & Rough<5> & Super>,
                } as Two3FreeClass,
            },
        }
        expect(actual).toBeCloseToObject(expected)
    })
})
