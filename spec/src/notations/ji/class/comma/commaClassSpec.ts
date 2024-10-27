import {
    Abs,
    Cents,
    Comma,
    Copfr,
    Decimal,
    Direction,
    EMPTY_VECTOR,
    Index,
    Max,
    Vector,
    Name,
    Prime,
    Quotient,
    Sopfr,
    Two3FreeClass,
} from "@sagittal/general"
import {
    analyzeComma,
    ApotomeSlope,
    Ate,
    CommaAnalysis,
    CommaClass,
    CommaClassId,
    getCommaClass,
    N2D3P9,
    SizeCategory,
    SymbolClassId,
} from "../../../../../../src"

describe("getCommaClass", (): void => {
    it("given a comma class ID, returns the full comma class", (): void => {
        const commaClassId = CommaClassId._77_C

        const actual: CommaClass = getCommaClass(commaClassId)

        const expected: CommaClass = {
            representativeSymbolClassId: SymbolClassId.WING_ANTITICK_AND_RIGHT_ARC,
            pitch: { vector: [-11, 3, 0, 1, 1] as Vector<{ rational: true }> },
        } as CommaClass
        expect(actual).toEqual(expected)
    })
})

describe("comma classes", (): void => {
    it("has all the correct commas", (): void => {
        const commaAnalyses = Object.values(CommaClassId)
            .map(getCommaClass)
            .map((commaClass: CommaClass): CommaAnalysis => analyzeComma(commaClass.pitch))

        const expected = [
            {
                apotomeSlope: 0 as ApotomeSlope,
                aas: 0 as Abs<ApotomeSlope>,
                ate: 0 as Ate,
                two3FreeClassAnalysis: {
                    name: "{1}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 0 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 0 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 1 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 1 as N2D3P9,
                    two3FreeClass: {
                        vector: EMPTY_VECTOR as Vector<{ rational: true }> as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [1, 1] as Quotient<{ rational: true }>,
                vector: EMPTY_VECTOR as Vector<{ rational: true }>,
                decimal: 1.0 as Decimal<{ rational: true }>,
                cents: 0 as Cents,
                name: "1u" as Name<Comma>,
                sizeCategory: 0 as Index<SizeCategory>,
                pitch: { vector: EMPTY_VECTOR as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -2.026028 as ApotomeSlope,
                aas: 2.026028 as Abs<ApotomeSlope>,
                ate: 2 as Ate,
                two3FreeClassAnalysis: {
                    name: "{455}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 25 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 13 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 82.152777 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 1, 1, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [4096, 4095] as Quotient<{ rational: true }>,
                vector: [12, -2, -1, -1, 0, -1] as Vector<{ rational: true }>,
                decimal: 1.000244 as Decimal<{ rational: true }>,
                cents: 0.422716 as Cents,
                name: "1/(5⋅7⋅13)n" as Name<Comma>,
                sizeCategory: 1 as Index<SizeCategory>,
                pitch: { vector: [12, -2, -1, -1, 0, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -3.051261 as ApotomeSlope,
                aas: 3.051261 as Abs<ApotomeSlope>,
                ate: 3 as Ate,
                two3FreeClassAnalysis: {
                    name: "{77/65}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 4 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 36 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 13 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 200.817901 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, -1, 1, 1, -1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [2080, 2079] as Quotient<{ rational: true }>,
                vector: [5, -3, 1, -1, -1, 1] as Vector<{ rational: true }>,
                decimal: 1.000481 as Decimal<{ rational: true }>,
                cents: 0.832524 as Cents,
                name: "65/77n" as Name<Comma>,
                sizeCategory: 1 as Index<SizeCategory>,
                pitch: { vector: [5, -3, 1, -1, -1, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -5.087699 as ApotomeSlope,
                aas: 5.087699 as Abs<ApotomeSlope>,
                ate: 5 as Ate,
                two3FreeClassAnalysis: {
                    name: "{19/5}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 24 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 19 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 33.425925 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, -1, 0, 0, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [1216, 1215] as Quotient<{ rational: true }>,
                vector: [6, -5, -1, 0, 0, 0, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.000823 as Decimal<{ rational: true }>,
                cents: 1.424297 as Cents,
                name: "19/5n" as Name<Comma>,
                sizeCategory: 1 as Index<SizeCategory>,
                pitch: {
                    vector: [6, -5, -1, 0, 0, 0, 0, 1] as Vector<{ rational: true }>,
                } as Comma,
            },
            {
                apotomeSlope: 7.879702 as ApotomeSlope,
                aas: 7.879702 as Abs<ApotomeSlope>,
                ate: 8 as Ate,
                two3FreeClassAnalysis: {
                    name: "{5}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 1 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 5 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 5 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 1.388888 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [32805, 32768] as Quotient<{ rational: true }>,
                vector: [-15, 8, 1] as Vector<{ rational: true }>,
                decimal: 1.001129 as Decimal<{ rational: true }>,
                cents: 1.95372 as Cents,
                name: "5s" as Name<Comma>,
                sizeCategory: 2 as Index<SizeCategory>,
                pitch: { vector: [-15, 8, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 5.853674 as ApotomeSlope,
                aas: 5.853674 as Abs<ApotomeSlope>,
                ate: 6 as Ate,
                two3FreeClassAnalysis: {
                    name: "{91}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 20 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 13 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 32.861111 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 1, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [729, 728] as Quotient<{ rational: true }>,
                vector: [-3, 6, 0, -1, 0, -1] as Vector<{ rational: true }>,
                decimal: 1.001373 as Decimal<{ rational: true }>,
                cents: 2.376436 as Cents,
                name: "1/(7⋅13)s" as Name<Comma>,
                sizeCategory: 2 as Index<SizeCategory>,
                pitch: { vector: [-3, 6, 0, -1, 0, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 9.816371 as ApotomeSlope,
                aas: 9.816371 as Abs<ApotomeSlope>,
                ate: 10 as Ate,
                two3FreeClassAnalysis: {
                    name: "{4375/19}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 6 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 46 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 19 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 1827.980324 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 4, 1, 0, 0, 0, -1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [1121931, 1120000] as Quotient<{ rational: true }>,
                vector: [-8, 10, -4, -1, 0, 0, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.001724 as Decimal<{ rational: true }>,
                cents: 2.982262 as Cents,
                name: "19/(5⁴⋅7)s" as Name<Comma>,
                sizeCategory: 2 as Index<SizeCategory>,
                pitch: {
                    vector: [-8, 10, -4, -1, 0, 0, 0, 1] as Vector<{ rational: true }>,
                } as Comma,
            },
            {
                apotomeSlope: 2.792003 as ApotomeSlope,
                aas: 2.792003 as Abs<ApotomeSlope>,
                ate: 3 as Ate,
                two3FreeClassAnalysis: {
                    name: "{19}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 1 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 19 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 19 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 20.055555 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 0, 0, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [513, 512] as Quotient<{ rational: true }>,
                vector: [-9, 3, 0, 0, 0, 0, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.001953 as Decimal<{ rational: true }>,
                cents: 3.378018 as Cents,
                name: "19s" as Name<Comma>,
                sizeCategory: 2 as Index<SizeCategory>,
                pitch: { vector: [-9, 3, 0, 0, 0, 0, 0, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 1.758005 as ApotomeSlope,
                aas: 1.758005 as Abs<ApotomeSlope>,
                ate: 2 as Ate,
                two3FreeClassAnalysis: {
                    name: "{55/49}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 4 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 30 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 11 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 91.496913 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 1, -2, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [441, 440] as Quotient<{ rational: true }>,
                vector: [-3, 2, -1, 2, -1] as Vector<{ rational: true }>,
                decimal: 1.002272 as Decimal<{ rational: true }>,
                cents: 3.930158 as Cents,
                name: "49/55s" as Name<Comma>,
                sizeCategory: 2 as Index<SizeCategory>,
                pitch: { vector: [-3, 2, -1, 2, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -1.277239 as ApotomeSlope,
                aas: 1.277239 as Abs<ApotomeSlope>,
                ate: 1 as Ate,
                two3FreeClassAnalysis: {
                    name: "{385}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 23 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 11 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 58.819444 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 1, 1, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [385, 384] as Quotient<{ rational: true }>,
                vector: [-7, -1, 1, 1, 1] as Vector<{ rational: true }>,
                decimal: 1.002604 as Decimal<{ rational: true }>,
                cents: 4.502561 as Cents,
                name: "5⋅7⋅11k" as Name<Comma>,
                sizeCategory: 3 as Index<SizeCategory>,
                pitch: { vector: [-7, -1, 1, 1, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -3.303267 as ApotomeSlope,
                aas: 3.303267 as Abs<ApotomeSlope>,
                ate: 3 as Ate,
                two3FreeClassAnalysis: {
                    name: "{13/11}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 24 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 13 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 34.425925 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 0, -1, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [352, 351] as Quotient<{ rational: true }>,
                vector: [5, -3, 0, 0, 1, -1] as Vector<{ rational: true }>,
                decimal: 1.002849 as Decimal<{ rational: true }>,
                cents: 4.925277 as Cents,
                name: "11/13k" as Name<Comma>,
                sizeCategory: 3 as Index<SizeCategory>,
                pitch: { vector: [5, -3, 0, 0, 1, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 5.664569 as ApotomeSlope,
                aas: 5.664569 as Abs<ApotomeSlope>,
                ate: 6 as Ate,
                two3FreeClassAnalysis: {
                    name: "{31/11}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 42 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 31 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 195.759259 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [22599, 22528] as Quotient<{ rational: true }>,
                vector: [-11, 6, 0, 0, -1, 0, 0, 0, 0, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.003151 as Decimal<{ rational: true }>,
                cents: 5.447635 as Cents,
                name: "31/11k" as Name<Comma>,
                sizeCategory: 3 as Index<SizeCategory>,
                pitch: {
                    vector: [-11, 6, 0, 0, -1, 0, 0, 0, 0, 0, 1] as Vector<{ rational: true }>,
                } as Comma,
            },
            {
                apotomeSlope: -6.354528 as ApotomeSlope,
                aas: 6.354528 as Abs<ApotomeSlope>,
                ate: 6 as Ate,
                two3FreeClassAnalysis: {
                    name: "{7/5}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 12 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 7 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 4.537037 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, -1, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [5120, 5103] as Quotient<{ rational: true }>,
                vector: [10, -6, 1, -1] as Vector<{ rational: true }>,
                decimal: 1.003331 as Decimal<{ rational: true }>,
                cents: 5.757802 as Cents,
                name: "5/7k" as Name<Comma>,
                sizeCategory: 3 as Index<SizeCategory>,
                pitch: { vector: [10, -6, 1, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -7.398935 as ApotomeSlope,
                aas: 7.398935 as Abs<ApotomeSlope>,
                ate: 7 as Ate,
                two3FreeClassAnalysis: {
                    name: "{343/5}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 4 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 26 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 7 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 55.578703 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, -1, 3] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [10976, 10935] as Quotient<{ rational: true }>,
                vector: [5, -7, -1, 3] as Vector<{ rational: true }>,
                decimal: 1.003749 as Decimal<{ rational: true }>,
                cents: 6.478999 as Cents,
                name: "7³/5k" as Name<Comma>,
                sizeCategory: 3 as Index<SizeCategory>,
                pitch: { vector: [5, -7, -1, 3] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -1.417215 as ApotomeSlope,
                aas: 1.417215 as Abs<ApotomeSlope>,
                ate: 1 as Ate,
                two3FreeClassAnalysis: {
                    name: "{85}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 22 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 17 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 40.138888 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 1, 0, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [256, 255] as Quotient<{ rational: true }>,
                vector: [8, -1, -1, 0, 0, 0, -1] as Vector<{ rational: true }>,
                decimal: 1.003921 as Decimal<{ rational: true }>,
                cents: 6.775875 as Cents,
                name: "1/(5⋅17)k" as Name<Comma>,
                sizeCategory: 3 as Index<SizeCategory>,
                pitch: { vector: [8, -1, -1, 0, 0, 0, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 8.549541 as ApotomeSlope,
                aas: 8.549541 as Abs<ApotomeSlope>,
                ate: 9 as Ate,
                two3FreeClassAnalysis: {
                    name: "{1225}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 4 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 24 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 7 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 59.548611 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 2, 2] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [19683, 19600] as Quotient<{ rational: true }>,
                vector: [-4, 9, -2, -2] as Vector<{ rational: true }>,
                decimal: 1.004234 as Decimal<{ rational: true }>,
                cents: 7.315767 as Cents,
                name: "1/(5²⋅7²)k" as Name<Comma>,
                sizeCategory: 3 as Index<SizeCategory>,
                pitch: { vector: [-4, 9, -2, -2] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 1.525173 as ApotomeSlope,
                aas: 1.525173 as Abs<ApotomeSlope>,
                ate: 2 as Ate,
                two3FreeClassAnalysis: {
                    name: "{25/7}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 17 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 7 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 11.342592 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 2, -1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [225, 224] as Quotient<{ rational: true }>,
                vector: [-5, 2, 2, -1] as Vector<{ rational: true }>,
                decimal: 1.004464 as Decimal<{ rational: true }>,
                cents: 7.711522 as Cents,
                name: "25/7k" as Name<Comma>,
                sizeCategory: 3 as Index<SizeCategory>,
                pitch: { vector: [-5, 2, 2, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 0.480766 as ApotomeSlope,
                aas: 0.480766 as Abs<ApotomeSlope>,
                ate: 1 as Ate,
                two3FreeClassAnalysis: {
                    name: "{343}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 21 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 7 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 33.347222 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 3] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [1029, 1024] as Quotient<{ rational: true }>,
                vector: [-10, 1, 0, 3] as Vector<{ rational: true }>,
                decimal: 1.004882 as Decimal<{ rational: true }>,
                cents: 8.43272 as Cents,
                name: "7³k" as Name<Comma>,
                sizeCategory: 3 as Index<SizeCategory>,
                pitch: { vector: [-10, 1, 0, 3] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 6.462486 as ApotomeSlope,
                aas: 6.462486 as Abs<ApotomeSlope>,
                ate: 7 as Ate,
                two3FreeClassAnalysis: {
                    name: "{17}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 1 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 17 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 17 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 16.055555 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 0, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [2187, 2176] as Quotient<{ rational: true }>,
                vector: [-7, 7, 0, 0, 0, 0, -1] as Vector<{ rational: true }>,
                decimal: 1.005055 as Decimal<{ rational: true }>,
                cents: 8.729596 as Cents,
                name: "1/17k" as Name<Comma>,
                sizeCategory: 3 as Index<SizeCategory>,
                pitch: { vector: [-7, 7, 0, 0, 0, 0, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 1.434644 as ApotomeSlope,
                aas: 1.434644 as Abs<ApotomeSlope>,
                ate: 2 as Ate,
                two3FreeClassAnalysis: {
                    name: "{14641}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 4 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 44 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 11 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 1118.409722 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 0, 4] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [131769, 131072] as Quotient<{ rational: true }>,
                vector: [-17, 2, 0, 0, 4] as Vector<{ rational: true }>,
                decimal: 1.005317 as Decimal<{ rational: true }>,
                cents: 9.181771 as Cents,
                name: "11⁴k" as Name<Comma>,
                sizeCategory: 3 as Index<SizeCategory>,
                pitch: { vector: [-17, 2, 0, 0, 4] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -4.596523 as ApotomeSlope,
                aas: 4.596523 as Abs<ApotomeSlope>,
                ate: 4 as Ate,
                two3FreeClassAnalysis: {
                    name: "{11/7}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 18 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 11 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 15.685185 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, -1, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [896, 891] as Quotient<{ rational: true }>,
                vector: [7, -4, 0, 1, -1] as Vector<{ rational: true }>,
                decimal: 1.005611 as Decimal<{ rational: true }>,
                cents: 9.68796 as Cents,
                name: "7/11k" as Name<Comma>,
                sizeCategory: 3 as Index<SizeCategory>,
                pitch: { vector: [7, -4, 0, 1, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -7.631767 as ApotomeSlope,
                aas: 7.631767 as Abs<ApotomeSlope>,
                ate: 7 as Ate,
                two3FreeClassAnalysis: {
                    name: "{275}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 21 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 11 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 42.013888 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 2, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [2200, 2187] as Quotient<{ rational: true }>,
                vector: [3, -7, 2, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.005944 as Decimal<{ rational: true }>,
                cents: 10.260364 as Cents,
                name: "5²⋅11k" as Name<Comma>,
                sizeCategory: 3 as Index<SizeCategory>,
                pitch: { vector: [3, -7, 2, 0, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 6.33444 as ApotomeSlope,
                aas: 6.33444 as Abs<ApotomeSlope>,
                ate: 7 as Ate,
                two3FreeClassAnalysis: {
                    name: "{49/13}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 27 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 13 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 76.675925 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 2, 0, -1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [107163, 106496] as Quotient<{ rational: true }>,
                vector: [-13, 7, 0, 2, 0, -1] as Vector<{ rational: true }>,
                decimal: 1.006263 as Decimal<{ rational: true }>,
                cents: 10.809157 as Cents,
                name: "49/13k" as Name<Comma>,
                sizeCategory: 3 as Index<SizeCategory>,
                pitch: { vector: [-13, 7, 0, 2, 0, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -5.684689 as ApotomeSlope,
                aas: 5.684689 as Abs<ApotomeSlope>,
                ate: 5 as Ate,
                two3FreeClassAnalysis: {
                    name: "{8575}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 5 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 31 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 7 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 208.420138 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 2, 3] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [2097152, 2083725] as Quotient<{ rational: true }>,
                vector: [21, -5, -2, -3] as Vector<{ rational: true }>,
                decimal: 1.006443 as Decimal<{ rational: true }>,
                cents: 11.119848 as Cents,
                name: "1/(5²⋅7³)k" as Name<Comma>,
                sizeCategory: 3 as Index<SizeCategory>,
                pitch: { vector: [21, -5, -2, -3] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 3.283179 as ApotomeSlope,
                aas: 3.283179 as Abs<ApotomeSlope>,
                ate: 4 as Ate,
                two3FreeClassAnalysis: {
                    name: "{35/11}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 23 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 11 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 39.212962 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 1, 1, -1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [2835, 2816] as Quotient<{ rational: true }>,
                vector: [-8, 4, 1, 1, -1] as Vector<{ rational: true }>,
                decimal: 1.006747 as Decimal<{ rational: true }>,
                cents: 11.641681 as Cents,
                name: "35/11k" as Name<Comma>,
                sizeCategory: 3 as Index<SizeCategory>,
                pitch: { vector: [-8, 4, 1, 1, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 1.257151 as ApotomeSlope,
                aas: 1.257151 as Abs<ApotomeSlope>,
                ate: 2 as Ate,
                two3FreeClassAnalysis: {
                    name: "{143}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 24 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 13 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 51.638888 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 0, 1, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [144, 143] as Quotient<{ rational: true }>,
                vector: [4, 2, 0, 0, -1, -1] as Vector<{ rational: true }>,
                decimal: 1.006993 as Decimal<{ rational: true }>,
                cents: 12.064397 as Cents,
                name: "1/143C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [4, 2, 0, 0, -1, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -3.786707 as ApotomeSlope,
                aas: 3.786707 as Abs<ApotomeSlope>,
                ate: 3 as Ate,
                two3FreeClassAnalysis: {
                    name: "{17/5}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 22 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 17 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 26.759259 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, -1, 0, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [136, 135] as Quotient<{ rational: true }>,
                vector: [3, -3, -1, 0, 0, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.007407 as Decimal<{ rational: true }>,
                cents: 12.776693 as Cents,
                name: "17/5C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [3, -3, -1, 0, 0, 0, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -5.816995 as ApotomeSlope,
                aas: 5.816995 as Abs<ApotomeSlope>,
                ate: 5 as Ate,
                two3FreeClassAnalysis: {
                    name: "{23/11}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 34 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 23 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 107.759259 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 0, -1, 0, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [5632, 5589] as Quotient<{ rational: true }>,
                vector: [9, -5, 0, 0, 1, 0, 0, 0, -1] as Vector<{ rational: true }>,
                decimal: 1.007693 as Decimal<{ rational: true }>,
                cents: 13.26859 as Cents,
                name: "11/23C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: {
                    vector: [9, -5, 0, 0, 1, 0, 0, 0, -1] as Vector<{ rational: true }>,
                } as Comma,
            },
            {
                apotomeSlope: 1.150605 as ApotomeSlope,
                aas: 1.150605 as Abs<ApotomeSlope>,
                ate: 2 as Ate,
                two3FreeClassAnalysis: {
                    name: "{125/7}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 4 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 22 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 7 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 28.356481 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 3, -1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [126, 125] as Quotient<{ rational: true }>,
                vector: [1, 2, -3, 1] as Vector<{ rational: true }>,
                decimal: 1.008 as Decimal<{ rational: true }>,
                cents: 13.794766 as Cents,
                name: "7/125C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [1, 2, -3, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -5.873762 as ApotomeSlope,
                aas: 5.873762 as Abs<ApotomeSlope>,
                ate: 5 as Ate,
                two3FreeClassAnalysis: {
                    name: "{245}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 19 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 7 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 23.819444 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 1, 2] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [245, 243] as Quotient<{ rational: true }>,
                vector: [0, -5, 1, 2] as Vector<{ rational: true }>,
                decimal: 1.00823 as Decimal<{ rational: true }>,
                cents: 14.190522 as Cents,
                name: "5⋅7²C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [0, -5, 1, 2] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 4.092994 as ApotomeSlope,
                aas: 4.092994 as Abs<ApotomeSlope>,
                ate: 5 as Ate,
                two3FreeClassAnalysis: {
                    name: "{17}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 1 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 17 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 17 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 16.055555 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 0, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [4131, 4096] as Quotient<{ rational: true }>,
                vector: [-12, 5, 0, 0, 0, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.008544 as Decimal<{ rational: true }>,
                cents: 14.730413 as Cents,
                name: "17C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [-12, 5, 0, 0, 0, 0, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -4.9359 as ApotomeSlope,
                aas: 4.9359 as Abs<ApotomeSlope>,
                ate: 4 as Ate,
                two3FreeClassAnalysis: {
                    name: "{143/7}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 31 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 13 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 120.49074 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, -1, 1, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [572, 567] as Quotient<{ rational: true }>,
                vector: [2, -4, 0, -1, 1, 1] as Vector<{ rational: true }>,
                decimal: 1.008818 as Decimal<{ rational: true }>,
                cents: 15.199694 as Cents,
                name: "143/7C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [2, -4, 0, -1, 1, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 9.030308 as ApotomeSlope,
                aas: 9.030308 as Abs<ApotomeSlope>,
                ate: 10 as Ate,
                two3FreeClassAnalysis: {
                    name: "{25/7}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 17 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 7 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 11.342592 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 2, -1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [413343, 409600] as Quotient<{ rational: true }>,
                vector: [-14, 10, -2, 1] as Vector<{ rational: true }>,
                decimal: 1.009138 as Decimal<{ rational: true }>,
                cents: 15.748487 as Cents,
                name: "7/25C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [-14, 10, -2, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 2.00594 as ApotomeSlope,
                aas: 2.00594 as Abs<ApotomeSlope>,
                ate: 3 as Ate,
                two3FreeClassAnalysis: {
                    name: "{1225}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 4 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 24 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 7 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 59.548611 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 2, 2] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [33075, 32768] as Quotient<{ rational: true }>,
                vector: [-15, 3, 2, 2] as Vector<{ rational: true }>,
                decimal: 1.009368 as Decimal<{ rational: true }>,
                cents: 16.144243 as Cents,
                name: "5²⋅7²C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [-15, 3, 2, 2] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -7.018695 as ApotomeSlope,
                aas: 7.018695 as Abs<ApotomeSlope>,
                ate: 6 as Ate,
                two3FreeClassAnalysis: {
                    name: "{23}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 1 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 23 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 23 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 29.388888 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 0, 0, 0, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [736, 729] as Quotient<{ rational: true }>,
                vector: [5, -6, 0, 0, 0, 0, 0, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.009602 as Decimal<{ rational: true }>,
                cents: 16.544342 as Cents,
                name: "23C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: {
                    vector: [5, -6, 0, 0, 0, 0, 0, 0, 1] as Vector<{ rational: true }>,
                } as Comma,
            },
            {
                apotomeSlope: -2.046116 as ApotomeSlope,
                aas: 2.046116 as Abs<ApotomeSlope>,
                ate: 1 as Ate,
                two3FreeClassAnalysis: {
                    name: "{169}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 26 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 13 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 61.027777 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 0, 0, 2] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [512, 507] as Quotient<{ rational: true }>,
                vector: [9, -1, 0, 0, 0, -2] as Vector<{ rational: true }>,
                decimal: 1.009861 as Decimal<{ rational: true }>,
                cents: 16.989675 as Cents,
                name: "1/13²C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [9, -1, 0, 0, 0, -2] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 0.917773 as ApotomeSlope,
                aas: 0.917773 as Abs<ApotomeSlope>,
                ate: 2 as Ate,
                two3FreeClassAnalysis: {
                    name: "{49/11}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 25 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 11 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 54.898148 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 2, -1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [99, 98] as Quotient<{ rational: true }>,
                vector: [-1, 2, 0, -2, 1] as Vector<{ rational: true }>,
                decimal: 1.010204 as Decimal<{ rational: true }>,
                cents: 17.576131 as Cents,
                name: "11/49C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [-1, 2, 0, -2, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 4.890912 as ApotomeSlope,
                aas: 4.890912 as Abs<ApotomeSlope>,
                ate: 6 as Ate,
                two3FreeClassAnalysis: {
                    name: "{31/11}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 42 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 31 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 195.759259 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [8019, 7936] as Quotient<{ rational: true }>,
                vector: [-8, 6, 0, 0, 1, 0, 0, 0, 0, 0, -1] as Vector<{ rational: true }>,
                decimal: 1.010458 as Decimal<{ rational: true }>,
                cents: 18.012375 as Cents,
                name: "11/31C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: {
                    vector: [-8, 6, 0, 0, 1, 0, 0, 0, 0, 0, -1] as Vector<{ rational: true }>,
                } as Comma,
            },
            {
                apotomeSlope: -10.141236 as ApotomeSlope,
                aas: 10.141236 as Abs<ApotomeSlope>,
                ate: 9 as Ate,
                two3FreeClassAnalysis: {
                    name: "{17/7}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 24 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 17 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 37.462962 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, -1, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [139264, 137781] as Quotient<{ rational: true }>,
                vector: [13, -9, 0, -1, 0, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.010763 as Decimal<{ rational: true }>,
                cents: 18.534495 as Cents,
                name: "17/7C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [13, -9, 0, -1, 0, 0, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -3.177894 as ApotomeSlope,
                aas: 3.177894 as Abs<ApotomeSlope>,
                ate: 2 as Ate,
                two3FreeClassAnalysis: {
                    name: "{91/5}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 25 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 13 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 54.768518 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, -1, 1, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [91, 90] as Quotient<{ rational: true }>,
                vector: [-1, -2, -1, 1, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.011111 as Decimal<{ rational: true }>,
                cents: 19.129852 as Cents,
                name: "7⋅13/5C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [-1, -2, -1, 1, 0, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -5.203922 as ApotomeSlope,
                aas: 5.203922 as Abs<ApotomeSlope>,
                ate: 4 as Ate,
                two3FreeClassAnalysis: {
                    name: "{25}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 10 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 5 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 3.472222 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 2] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [2048, 2025] as Quotient<{ rational: true }>,
                vector: [11, -4, -2] as Vector<{ rational: true }>,
                decimal: 1.011358 as Decimal<{ rational: true }>,
                cents: 19.552569 as Cents,
                name: "1/25C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [11, -4, -2] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 7.763478 as ApotomeSlope,
                aas: 7.763478 as Abs<ApotomeSlope>,
                ate: 9 as Ate,
                two3FreeClassAnalysis: {
                    name: "{19}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 1 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 19 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 19 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 20.055555 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 0, 0, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [19683, 19456] as Quotient<{ rational: true }>,
                vector: [-10, 9, 0, 0, 0, 0, 0, -1] as Vector<{ rational: true }>,
                decimal: 1.011667 as Decimal<{ rational: true }>,
                cents: 20.081991 as Cents,
                name: "1/19C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: {
                    vector: [-10, 9, 0, 0, 0, 0, 0, -1] as Vector<{ rational: true }>,
                } as Comma,
            },
            {
                apotomeSlope: -1.256577 as ApotomeSlope,
                aas: 1.256577 as Abs<ApotomeSlope>,
                ate: 0 as Ate,
                two3FreeClassAnalysis: {
                    name: "{253}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 34 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 23 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 161.638888 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 0, 1, 0, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [256, 253] as Quotient<{ rational: true }>,
                vector: [8, 0, 0, 0, -1, 0, 0, 0, -1] as Vector<{ rational: true }>,
                decimal: 1.011857 as Decimal<{ rational: true }>,
                cents: 20.40771 as Cents,
                name: "1/(11⋅23)C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: {
                    vector: [8, 0, 0, 0, -1, 0, 0, 0, -1] as Vector<{ rational: true }>,
                } as Comma,
            },
            {
                apotomeSlope: 4.701807 as ApotomeSlope,
                aas: 4.701807 as Abs<ApotomeSlope>,
                ate: 6 as Ate,
                two3FreeClassAnalysis: {
                    name: "{91}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 20 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 13 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 32.861111 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 1, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [66339, 65536] as Quotient<{ rational: true }>,
                vector: [-16, 6, 0, 1, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.012252 as Decimal<{ rational: true }>,
                cents: 21.083573 as Cents,
                name: "7⋅13C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [-16, 6, 0, 1, 0, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 2.675779 as ApotomeSlope,
                aas: 2.675779 as Abs<ApotomeSlope>,
                ate: 4 as Ate,
                two3FreeClassAnalysis: {
                    name: "{5}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 1 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 5 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 5 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 1.388888 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [81, 80] as Quotient<{ rational: true }>,
                vector: [-4, 4, -1] as Vector<{ rational: true }>,
                decimal: 1.0125 as Decimal<{ rational: true }>,
                cents: 21.506289 as Cents,
                name: "1/5C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [-4, 4, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -4.348588 as ApotomeSlope,
                aas: 4.348588 as Abs<ApotomeSlope>,
                ate: 3 as Ate,
                two3FreeClassAnalysis: {
                    name: "{875}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 4 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 22 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 7 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 42.534722 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 3, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [875, 864] as Quotient<{ rational: true }>,
                vector: [-5, -3, 3, 1] as Vector<{ rational: true }>,
                decimal: 1.012731 as Decimal<{ rational: true }>,
                cents: 21.902045 as Cents,
                name: "5³⋅7C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [-5, -3, 3, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -6.374616 as ApotomeSlope,
                aas: 6.374616 as Abs<ApotomeSlope>,
                ate: 5 as Ate,
                two3FreeClassAnalysis: {
                    name: "{25/13}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 23 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 13 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 39.12037 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 2, 0, 0, -1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [3200, 3159] as Quotient<{ rational: true }>,
                vector: [7, -5, 2, 0, 0, -1] as Vector<{ rational: true }>,
                decimal: 1.012978 as Decimal<{ rational: true }>,
                cents: 22.324761 as Cents,
                name: "25/13C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [7, -5, 2, 0, 0, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -2.411919 as ApotomeSlope,
                aas: 2.411919 as Abs<ApotomeSlope>,
                ate: 1 as Ate,
                two3FreeClassAnalysis: {
                    name: "{25/19}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 29 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 19 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 83.564814 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 2, 0, 0, 0, 0, -1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [76, 75] as Quotient<{ rational: true }>,
                vector: [2, -1, -2, 0, 0, 0, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.013333 as Decimal<{ rational: true }>,
                cents: 22.930587 as Cents,
                name: "19/25C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: {
                    vector: [2, -1, -2, 0, 0, 0, 0, 1] as Vector<{ rational: true }>,
                } as Comma,
            },
            {
                apotomeSlope: 10.555481 as ApotomeSlope,
                aas: 10.555481 as Abs<ApotomeSlope>,
                ate: 12 as Ate,
                two3FreeClassAnalysis: {
                    name: "{1}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 0 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 0 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 1 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 1 as N2D3P9,
                    two3FreeClass: {
                        vector: EMPTY_VECTOR as Vector<{ rational: true }> as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [531441, 524288] as Quotient<{ rational: true }>,
                vector: [-19, 12] as Vector<{ rational: true }>,
                decimal: 1.013643 as Decimal<{ rational: true }>,
                cents: 23.46001 as Cents,
                name: "3C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [-19, 12] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 3.531113 as ApotomeSlope,
                aas: 3.531113 as Abs<ApotomeSlope>,
                ate: 5 as Ate,
                two3FreeClassAnalysis: {
                    name: "{4375}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 5 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 27 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 7 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 106.336805 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 4, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [1063125, 1048576] as Quotient<{ rational: true }>,
                vector: [-20, 5, 4, 1] as Vector<{ rational: true }>,
                decimal: 1.013875 as Decimal<{ rational: true }>,
                cents: 23.855766 as Cents,
                name: "5⁴⋅7C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [-20, 5, 4, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -6.481162 as ApotomeSlope,
                aas: 6.481162 as Abs<ApotomeSlope>,
                ate: 5 as Ate,
                two3FreeClassAnalysis: {
                    name: "{77/5}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 23 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 11 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 39.212962 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, -1, 1, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [1232, 1215] as Quotient<{ rational: true }>,
                vector: [4, -5, -1, 1, 1] as Vector<{ rational: true }>,
                decimal: 1.013991 as Decimal<{ rational: true }>,
                cents: 24.05513 as Cents,
                name: "77/5C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [4, -5, -1, 1, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 1.505085 as ApotomeSlope,
                aas: 1.505085 as Abs<ApotomeSlope>,
                ate: 3 as Ate,
                two3FreeClassAnalysis: {
                    name: "{125/13}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 4 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 28 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 13 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 97.800925 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 3, 0, 0, -1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [3375, 3328] as Quotient<{ rational: true }>,
                vector: [-8, 3, 3, 0, 0, -1] as Vector<{ rational: true }>,
                decimal: 1.014122 as Decimal<{ rational: true }>,
                cents: 24.278482 as Cents,
                name: "125/13C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [-8, 3, 3, 0, 0, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 5.467782 as ApotomeSlope,
                aas: 5.467782 as Abs<ApotomeSlope>,
                ate: 7 as Ate,
                two3FreeClassAnalysis: {
                    name: "{19/5}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 24 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 19 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 33.425925 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, -1, 0, 0, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [41553, 40960] as Quotient<{ rational: true }>,
                vector: [-13, 7, -1, 0, 0, 0, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.014477 as Decimal<{ rational: true }>,
                cents: 24.884308 as Cents,
                name: "19/5C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: {
                    vector: [-13, 7, -1, 0, 0, 0, 0, 1] as Vector<{ rational: true }>,
                } as Comma,
            },
            {
                apotomeSlope: -9.532423 as ApotomeSlope,
                aas: 9.532423 as Abs<ApotomeSlope>,
                ate: 8 as Ate,
                two3FreeClassAnalysis: {
                    name: "{13}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 1 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 13 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 13 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 9.388888 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [6656, 6561] as Quotient<{ rational: true }>,
                vector: [9, -8, 0, 0, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.014479 as Decimal<{ rational: true }>,
                cents: 24.887654 as Cents,
                name: "13C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [9, -8, 0, 0, 0, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -11.558451 as ApotomeSlope,
                aas: 11.558451 as Abs<ApotomeSlope>,
                ate: 10 as Ate,
                two3FreeClassAnalysis: {
                    name: "{35}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 12 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 7 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 6.805555 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 1, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [2097152, 2066715] as Quotient<{ rational: true }>,
                vector: [21, -10, -1, -1] as Vector<{ rational: true }>,
                decimal: 1.014727 as Decimal<{ rational: true }>,
                cents: 25.310371 as Cents,
                name: "1/35C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [21, -10, -1, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 1.39854 as ApotomeSlope,
                aas: 1.39854 as Abs<ApotomeSlope>,
                ate: 3 as Ate,
                two3FreeClassAnalysis: {
                    name: "{77}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 18 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 11 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 23.527777 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 1, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [2079, 2048] as Quotient<{ rational: true }>,
                vector: [-11, 3, 0, 1, 1] as Vector<{ rational: true }>,
                decimal: 1.015136 as Decimal<{ rational: true }>,
                cents: 26.008851 as Cents,
                name: "77C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [-11, 3, 0, 1, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -0.627487 as ApotomeSlope,
                aas: 0.627487 as Abs<ApotomeSlope>,
                ate: 1 as Ate,
                two3FreeClassAnalysis: {
                    name: "{65/11}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 29 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 13 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 86.064814 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 1, 0, -1, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [66, 65] as Quotient<{ rational: true }>,
                vector: [1, 1, -1, 0, 1, -1] as Vector<{ rational: true }>,
                decimal: 1.015384 as Decimal<{ rational: true }>,
                cents: 26.431567 as Cents,
                name: "11/65C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [1, 1, -1, 0, 1, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -1.652721 as ApotomeSlope,
                aas: 1.652721 as Abs<ApotomeSlope>,
                ate: 0 as Ate,
                two3FreeClassAnalysis: {
                    name: "{65}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 18 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 13 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 23.472222 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 1, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [65, 64] as Quotient<{ rational: true }>,
                vector: [-6, 0, 1, 0, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.015625 as Decimal<{ rational: true }>,
                cents: 26.841375 as Cents,
                name: "65C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [-6, 0, 1, 0, 0, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -3.678749 as ApotomeSlope,
                aas: 3.678749 as Abs<ApotomeSlope>,
                ate: 2 as Ate,
                two3FreeClassAnalysis: {
                    name: "{7}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 1 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 7 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 7 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 2.722222 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [64, 63] as Quotient<{ rational: true }>,
                vector: [6, -2, 0, -1] as Vector<{ rational: true }>,
                decimal: 1.015873 as Decimal<{ rational: true }>,
                cents: 27.264092 as Cents,
                name: "1/7C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [6, -2, 0, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -10.703117 as ApotomeSlope,
                aas: 10.703117 as Abs<ApotomeSlope>,
                ate: 9 as Ate,
                two3FreeClassAnalysis: {
                    name: "{625}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 4 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 20 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 5 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 21.701388 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 4] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [20000, 19683] as Quotient<{ rational: true }>,
                vector: [5, -9, 4] as Vector<{ rational: true }>,
                decimal: 1.016105 as Decimal<{ rational: true }>,
                cents: 27.659847 as Cents,
                name: "5⁴C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [5, -9, 4] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 7.252214 as ApotomeSlope,
                aas: 7.252214 as Abs<ApotomeSlope>,
                ate: 9 as Ate,
                two3FreeClassAnalysis: {
                    name: "{13/11}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 24 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 13 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 34.425925 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 0, -1, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [216513, 212992] as Quotient<{ rational: true }>,
                vector: [-14, 9, 0, 0, 1, -1] as Vector<{ rational: true }>,
                decimal: 1.016531 as Decimal<{ rational: true }>,
                cents: 28.385288 as Cents,
                name: "11/13C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [-14, 9, 0, 0, 1, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 6.226981 as ApotomeSlope,
                aas: 6.226981 as Abs<ApotomeSlope>,
                ate: 8 as Ate,
                two3FreeClassAnalysis: {
                    name: "{325}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 23 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 13 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 58.680555 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 2, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [2132325, 2097152] as Quotient<{ rational: true }>,
                vector: [-21, 8, 2, 0, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.016771 as Decimal<{ rational: true }>,
                cents: 28.795096 as Cents,
                name: "5²⋅13C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [-21, 8, 2, 0, 0, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 4.200952 as ApotomeSlope,
                aas: 4.200952 as Abs<ApotomeSlope>,
                ate: 6 as Ate,
                two3FreeClassAnalysis: {
                    name: "{7/5}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 12 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 7 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 4.537037 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, -1, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [3645, 3584] as Quotient<{ rational: true }>,
                vector: [-9, 6, 1, -1] as Vector<{ rational: true }>,
                decimal: 1.01702 as Decimal<{ rational: true }>,
                cents: 29.217813 as Cents,
                name: "5/7C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [-9, 6, 1, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -2.823415 as ApotomeSlope,
                aas: 2.823415 as Abs<ApotomeSlope>,
                ate: 1 as Ate,
                two3FreeClassAnalysis: {
                    name: "{3125}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 5 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 25 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 5 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 54.253472 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 5] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [3125, 3072] as Quotient<{ rational: true }>,
                vector: [-10, -1, 5] as Vector<{ rational: true }>,
                decimal: 1.017252 as Decimal<{ rational: true }>,
                cents: 29.613568 as Cents,
                name: "5⁵C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [-10, -1, 5] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -6.858057 as ApotomeSlope,
                aas: 6.858057 as Abs<ApotomeSlope>,
                ate: 5 as Ate,
                two3FreeClassAnalysis: {
                    name: "{85/11}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 33 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 17 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 147.175925 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 1, 0, -1, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [2720, 2673] as Quotient<{ rational: true }>,
                vector: [5, -5, 1, 0, -1, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.017583 as Decimal<{ rational: true }>,
                cents: 30.176176 as Cents,
                name: "5⋅17/11C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [5, -5, 1, 0, -1, 0, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -0.886746 as ApotomeSlope,
                aas: 0.886746 as Abs<ApotomeSlope>,
                ate: 1 as Ate,
                two3FreeClassAnalysis: {
                    name: "{19/7}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 26 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 19 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 46.796296 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, -1, 0, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [57, 56] as Quotient<{ rational: true }>,
                vector: [-3, 1, 0, -1, 0, 0, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.017857 as Decimal<{ rational: true }>,
                cents: 30.64211 as Cents,
                name: "19/7C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: {
                    vector: [-3, 1, 0, -1, 0, 0, 0, 1] as Vector<{ rational: true }>,
                } as Comma,
            },
            {
                apotomeSlope: -1.920743 as ApotomeSlope,
                aas: 1.920743 as Abs<ApotomeSlope>,
                ate: 0 as Ate,
                two3FreeClassAnalysis: {
                    name: "{55/7}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 23 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 11 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 39.212962 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 1, -1, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [56, 55] as Quotient<{ rational: true }>,
                vector: [3, 0, -1, 1, -1] as Vector<{ rational: true }>,
                decimal: 1.018181 as Decimal<{ rational: true }>,
                cents: 31.19425 as Cents,
                name: "7/55C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [3, 0, -1, 1, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -4.955988 as ApotomeSlope,
                aas: 4.955988 as Abs<ApotomeSlope>,
                ate: 3 as Ate,
                two3FreeClassAnalysis: {
                    name: "{55}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 16 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 11 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 16.805555 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 1, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [55, 54] as Quotient<{ rational: true }>,
                vector: [-1, -3, 1, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.018518 as Decimal<{ rational: true }>,
                cents: 31.766653 as Cents,
                name: "55C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [-1, -3, 1, 0, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -6.982016 as ApotomeSlope,
                aas: 6.982016 as Abs<ApotomeSlope>,
                ate: 5 as Ate,
                two3FreeClassAnalysis: {
                    name: "{91/11}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 31 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 13 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 120.49074 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 1, -1, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [22528, 22113] as Quotient<{ rational: true }>,
                vector: [11, -5, 0, -1, 1, -1] as Vector<{ rational: true }>,
                decimal: 1.018767 as Decimal<{ rational: true }>,
                cents: 32.189369 as Cents,
                name: "11/(7⋅13)C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [11, -5, 0, -1, 1, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -1.008642 as ApotomeSlope,
                aas: 1.008642 as Abs<ApotomeSlope>,
                ate: 1 as Ate,
                two3FreeClassAnalysis: {
                    name: "{125/23}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 4 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 38 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 23 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 306.134259 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 3, 0, 0, 0, 0, 0, -1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [375, 368] as Quotient<{ rational: true }>,
                vector: [-4, 1, 3, 0, 0, 0, 0, 0, -1] as Vector<{ rational: true }>,
                decimal: 1.019021 as Decimal<{ rational: true }>,
                cents: 32.621795 as Cents,
                name: "125/23C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: {
                    vector: [-4, 1, 3, 0, 0, 0, 0, 0, -1] as Vector<{ rational: true }>,
                } as Comma,
            },
            {
                apotomeSlope: 5.958958 as ApotomeSlope,
                aas: 5.958958 as Abs<ApotomeSlope>,
                ate: 8 as Ate,
                two3FreeClassAnalysis: {
                    name: "{11/7}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 18 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 11 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 15.685185 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, -1, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [45927, 45056] as Quotient<{ rational: true }>,
                vector: [-12, 8, 0, 1, -1] as Vector<{ rational: true }>,
                decimal: 1.019331 as Decimal<{ rational: true }>,
                cents: 33.147971 as Cents,
                name: "7/11C" as Name<Comma>,
                sizeCategory: 4 as Index<SizeCategory>,
                pitch: { vector: [-12, 8, 0, 1, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -3.069936 as ApotomeSlope,
                aas: 3.069936 as Abs<ApotomeSlope>,
                ate: 1 as Ate,
                two3FreeClassAnalysis: {
                    name: "{17/13}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 30 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 17 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 69.574074 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 0, 0, -1, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [52, 51] as Quotient<{ rational: true }>,
                vector: [2, -1, 0, 0, 0, 1, -1] as Vector<{ rational: true }>,
                decimal: 1.019607 as Decimal<{ rational: true }>,
                cents: 33.617251 as Cents,
                name: "13/17S" as Name<Comma>,
                sizeCategory: 5 as Index<SizeCategory>,
                pitch: { vector: [2, -1, 0, 0, 0, 1, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -1.110928 as ApotomeSlope,
                aas: 1.110928 as Abs<ApotomeSlope>,
                ate: 1 as Ate,
                two3FreeClassAnalysis: {
                    name: "{25/17}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 27 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 17 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 66.898148 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 2, 0, 0, 0, -1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [51, 50] as Quotient<{ rational: true }>,
                vector: [-1, 1, -2, 0, 0, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.02 as Decimal<{ rational: true }>,
                cents: 34.282982 as Cents,
                name: "17/25S" as Name<Comma>,
                sizeCategory: 5 as Index<SizeCategory>,
                pitch: { vector: [-1, 1, -2, 0, 0, 0, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -0.136311 as ApotomeSlope,
                aas: 0.136311 as Abs<ApotomeSlope>,
                ate: 2 as Ate,
                two3FreeClassAnalysis: {
                    name: "{247/7}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 39 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 19 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 304.175925 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, -1, 0, 1, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [252, 247] as Quotient<{ rational: true }>,
                vector: [2, 2, 0, 1, 0, -1, 0, -1] as Vector<{ rational: true }>,
                decimal: 1.020242 as Decimal<{ rational: true }>,
                cents: 34.69523 as Cents,
                name: "7/(13⋅19)S" as Name<Comma>,
                sizeCategory: 5 as Index<SizeCategory>,
                pitch: {
                    vector: [2, 2, 0, 1, 0, -1, 0, -1] as Vector<{ rational: true }>,
                } as Comma,
            },
            {
                apotomeSlope: -2.153576 as ApotomeSlope,
                aas: 2.153576 as Abs<ApotomeSlope>,
                ate: 0 as Ate,
                two3FreeClassAnalysis: {
                    name: "{49/25}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 4 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 24 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 7 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 26.466049 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, -2, 2] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [50, 49] as Quotient<{ rational: true }>,
                vector: [1, 0, 2, -2] as Vector<{ rational: true }>,
                decimal: 1.020408 as Decimal<{ rational: true }>,
                cents: 34.975614 as Cents,
                name: "25/49S" as Name<Comma>,
                sizeCategory: 5 as Index<SizeCategory>,
                pitch: { vector: [1, 0, 2, -2] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -7.171121 as ApotomeSlope,
                aas: 7.171121 as Abs<ApotomeSlope>,
                ate: 5 as Ate,
                two3FreeClassAnalysis: {
                    name: "{31}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 1 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 31 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 31 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 53.388888 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [248, 243] as Quotient<{ rational: true }>,
                vector: [3, -5, 0, 0, 0, 0, 0, 0, 0, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.020576 as Decimal<{ rational: true }>,
                cents: 35.260568 as Cents,
                name: "31S" as Name<Comma>,
                sizeCategory: 5 as Index<SizeCategory>,
                pitch: {
                    vector: [3, -5, 0, 0, 0, 0, 0, 0, 0, 0, 1] as Vector<{ rational: true }>,
                } as Comma,
            },
            {
                apotomeSlope: -3.197982 as ApotomeSlope,
                aas: 3.197982 as Abs<ApotomeSlope>,
                ate: 1 as Ate,
                two3FreeClassAnalysis: {
                    name: "{49}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 14 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 7 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 9.527777 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 2] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [49, 48] as Quotient<{ rational: true }>,
                vector: [-4, -1, 0, 2] as Vector<{ rational: true }>,
                decimal: 1.020833 as Decimal<{ rational: true }>,
                cents: 35.696812 as Cents,
                name: "49S" as Name<Comma>,
                sizeCategory: 5 as Index<SizeCategory>,
                pitch: { vector: [-4, -1, 0, 2] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 6.768774 as ApotomeSlope,
                aas: 6.768774 as Abs<ApotomeSlope>,
                ate: 9 as Ate,
                two3FreeClassAnalysis: {
                    name: "{17/5}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 22 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 17 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 26.759259 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, -1, 0, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [334611, 327680] as Quotient<{ rational: true }>,
                vector: [-16, 9, -1, 0, 0, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.021151 as Decimal<{ rational: true }>,
                cents: 36.236703 as Cents,
                name: "17/5S" as Name<Comma>,
                sizeCategory: 5 as Index<SizeCategory>,
                pitch: { vector: [-16, 9, -1, 0, 0, 0, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 4.738486 as ApotomeSlope,
                aas: 4.738486 as Abs<ApotomeSlope>,
                ate: 7 as Ate,
                two3FreeClassAnalysis: {
                    name: "{23/11}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 34 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 23 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 107.759259 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 0, -1, 0, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [24057, 23552] as Quotient<{ rational: true }>,
                vector: [-10, 7, 0, 0, 1, 0, 0, 0, -1] as Vector<{ rational: true }>,
                decimal: 1.021441 as Decimal<{ rational: true }>,
                cents: 36.728601 as Cents,
                name: "11/23S" as Name<Comma>,
                sizeCategory: 5 as Index<SizeCategory>,
                pitch: {
                    vector: [-10, 7, 0, 0, 1, 0, 0, 0, -1] as Vector<{ rational: true }>,
                } as Comma,
            },
            {
                apotomeSlope: -8.275272 as ApotomeSlope,
                aas: 8.275272 as Abs<ApotomeSlope>,
                ate: 6 as Ate,
                two3FreeClassAnalysis: {
                    name: "{11}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 1 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 11 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 11 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 6.722222 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [8192, 8019] as Quotient<{ rational: true }>,
                vector: [13, -6, 0, 0, -1] as Vector<{ rational: true }>,
                decimal: 1.021573 as Decimal<{ rational: true }>,
                cents: 36.952052 as Cents,
                name: "1/11S" as Name<Comma>,
                sizeCategory: 5 as Index<SizeCategory>,
                pitch: { vector: [13, -6, 0, 0, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 4.681719 as ApotomeSlope,
                aas: 4.681719 as Abs<ApotomeSlope>,
                ate: 7 as Ate,
                two3FreeClassAnalysis: {
                    name: "{245}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 19 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 7 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 23.819444 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 1, 2] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [535815, 524288] as Quotient<{ rational: true }>,
                vector: [-19, 7, 1, 2] as Vector<{ rational: true }>,
                decimal: 1.021986 as Decimal<{ rational: true }>,
                cents: 37.650532 as Cents,
                name: "5⋅7²S" as Name<Comma>,
                sizeCategory: 5 as Index<SizeCategory>,
                pitch: { vector: [-19, 7, 1, 2] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -4.342916 as ApotomeSlope,
                aas: 4.342916 as Abs<ApotomeSlope>,
                ate: 2 as Ate,
                two3FreeClassAnalysis: {
                    name: "{23/5}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 28 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 23 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 48.981481 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, -1, 0, 0, 0, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [46, 45] as Quotient<{ rational: true }>,
                vector: [1, -2, -1, 0, 0, 0, 0, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.022222 as Decimal<{ rational: true }>,
                cents: 38.050631 as Cents,
                name: "23/5S" as Name<Comma>,
                sizeCategory: 5 as Index<SizeCategory>,
                pitch: {
                    vector: [1, -2, -1, 0, 0, 0, 0, 0, 1] as Vector<{ rational: true }>,
                } as Comma,
            },
            {
                apotomeSlope: 2.655691 as ApotomeSlope,
                aas: 2.655691 as Abs<ApotomeSlope>,
                ate: 5 as Ate,
                two3FreeClassAnalysis: {
                    name: "{13/7}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 20 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 13 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 21.907407 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, -1, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [1701, 1664] as Quotient<{ rational: true }>,
                vector: [-7, 5, 0, 1, 0, -1] as Vector<{ rational: true }>,
                decimal: 1.022235 as Decimal<{ rational: true }>,
                cents: 38.073249 as Cents,
                name: "7/13S" as Name<Comma>,
                sizeCategory: 5 as Index<SizeCategory>,
                pitch: { vector: [-7, 5, 0, 1, 0, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -6.373203 as ApotomeSlope,
                aas: 6.373203 as Abs<ApotomeSlope>,
                ate: 4 as Ate,
                two3FreeClassAnalysis: {
                    name: "{17/11}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 28 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 17 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 58.87037 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 0, -1, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [1408, 1377] as Quotient<{ rational: true }>,
                vector: [7, -4, 0, 0, 1, 0, -1] as Vector<{ rational: true }>,
                decimal: 1.022512 as Decimal<{ rational: true }>,
                cents: 38.542529 as Cents,
                name: "11/17S" as Name<Comma>,
                sizeCategory: 5 as Index<SizeCategory>,
                pitch: { vector: [7, -4, 0, 0, 1, 0, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -0.39557 as ApotomeSlope,
                aas: 0.39557 as Abs<ApotomeSlope>,
                ate: 2 as Ate,
                two3FreeClassAnalysis: {
                    name: "{11/5}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 16 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 11 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 11.203703 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, -1, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [45, 44] as Quotient<{ rational: true }>,
                vector: [-2, 2, 1, 0, -1] as Vector<{ rational: true }>,
                decimal: 1.022727 as Decimal<{ rational: true }>,
                cents: 38.905773 as Cents,
                name: "5/11S" as Name<Comma>,
                sizeCategory: 5 as Index<SizeCategory>,
                pitch: { vector: [-2, 2, 1, 0, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -2.421598 as ApotomeSlope,
                aas: 2.421598 as Abs<ApotomeSlope>,
                ate: 0 as Ate,
                two3FreeClassAnalysis: {
                    name: "{1001}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 31 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 13 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 180.736111 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 1, 1, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [1024, 1001] as Quotient<{ rational: true }>,
                vector: [10, 0, 0, -1, -1, -1] as Vector<{ rational: true }>,
                decimal: 1.022977 as Decimal<{ rational: true }>,
                cents: 39.328489 as Cents,
                name: "1/(7⋅11⋅13)S" as Name<Comma>,
                sizeCategory: 5 as Index<SizeCategory>,
                pitch: { vector: [10, 0, 0, -1, -1, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 3.536786 as ApotomeSlope,
                aas: 3.536786 as Abs<ApotomeSlope>,
                ate: 6 as Ate,
                two3FreeClassAnalysis: {
                    name: "{23}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 1 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 23 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 23 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 29.388888 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 0, 0, 0, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [16767, 16384] as Quotient<{ rational: true }>,
                vector: [-14, 6, 0, 0, 0, 0, 0, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.023376 as Decimal<{ rational: true }>,
                cents: 40.004352 as Cents,
                name: "23S" as Name<Comma>,
                sizeCategory: 5 as Index<SizeCategory>,
                pitch: {
                    vector: [-14, 6, 0, 0, 0, 0, 0, 0, 1] as Vector<{ rational: true }>,
                } as Comma,
            },
            {
                apotomeSlope: -0.502115 as ApotomeSlope,
                aas: 0.502115 as Abs<ApotomeSlope>,
                ate: 2 as Ate,
                two3FreeClassAnalysis: {
                    name: "{91/25}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 4 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 30 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 13 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 91.280864 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, -2, 1, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [819, 800] as Quotient<{ rational: true }>,
                vector: [-5, 2, -2, 1, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.02375 as Decimal<{ rational: true }>,
                cents: 40.636142 as Cents,
                name: "7⋅13/25S" as Name<Comma>,
                sizeCategory: 5 as Index<SizeCategory>,
                pitch: { vector: [-5, 2, -2, 1, 0, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -2.528143 as ApotomeSlope,
                aas: 2.528143 as Abs<ApotomeSlope>,
                ate: 0 as Ate,
                two3FreeClassAnalysis: {
                    name: "{125}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 15 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 5 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 8.680555 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 3] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [128, 125] as Quotient<{ rational: true }>,
                vector: [7, 0, -3] as Vector<{ rational: true }>,
                decimal: 1.024 as Decimal<{ rational: true }>,
                cents: 41.058858 as Cents,
                name: "1/125S" as Name<Comma>,
                sizeCategory: 5 as Index<SizeCategory>,
                pitch: { vector: [7, 0, -3] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -9.552511 as ApotomeSlope,
                aas: 9.552511 as Abs<ApotomeSlope>,
                ate: 7 as Ate,
                two3FreeClassAnalysis: {
                    name: "{35}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 12 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 7 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 6.805555 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 1, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [2240, 2187] as Quotient<{ rational: true }>,
                vector: [6, -7, 1, 1] as Vector<{ rational: true }>,
                decimal: 1.024234 as Decimal<{ rational: true }>,
                cents: 41.454614 as Cents,
                name: "35S" as Name<Comma>,
                sizeCategory: 5 as Index<SizeCategory>,
                pitch: { vector: [6, -7, 1, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 0.414245 as ApotomeSlope,
                aas: 0.414245 as Abs<ApotomeSlope>,
                ate: 3 as Ate,
                two3FreeClassAnalysis: {
                    name: "{17/7}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 24 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 17 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 37.462962 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, -1, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [459, 448] as Quotient<{ rational: true }>,
                vector: [-6, 3, 0, -1, 0, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.024553 as Decimal<{ rational: true }>,
                cents: 41.994505 as Cents,
                name: "17/7S" as Name<Comma>,
                sizeCategory: 5 as Index<SizeCategory>,
                pitch: { vector: [-6, 3, 0, -1, 0, 0, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 7.377586 as ApotomeSlope,
                aas: 7.377586 as Abs<ApotomeSlope>,
                ate: 10 as Ate,
                two3FreeClassAnalysis: {
                    name: "{91/5}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 25 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 13 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 54.768518 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, -1, 1, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [5373459, 5242880] as Quotient<{ rational: true }>,
                vector: [-20, 10, -1, 1, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.024905 as Decimal<{ rational: true }>,
                cents: 42.589863 as Cents,
                name: "7⋅13/5S" as Name<Comma>,
                sizeCategory: 5 as Index<SizeCategory>,
                pitch: { vector: [-20, 10, -1, 1, 0, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 5.351558 as ApotomeSlope,
                aas: 5.351558 as Abs<ApotomeSlope>,
                ate: 8 as Ate,
                two3FreeClassAnalysis: {
                    name: "{25}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 10 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 5 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 3.472222 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 2] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [6561, 6400] as Quotient<{ rational: true }>,
                vector: [-8, 8, -2] as Vector<{ rational: true }>,
                decimal: 1.025156 as Decimal<{ rational: true }>,
                cents: 43.012579 as Cents,
                name: "1/25S" as Name<Comma>,
                sizeCategory: 5 as Index<SizeCategory>,
                pitch: { vector: [-8, 8, -2] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -1.672809 as ApotomeSlope,
                aas: 1.672809 as Abs<ApotomeSlope>,
                ate: 1 as Ate,
                two3FreeClassAnalysis: {
                    name: "{175}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 17 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 7 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 17.013888 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 2, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [525, 512] as Quotient<{ rational: true }>,
                vector: [-9, 1, 2, 1] as Vector<{ rational: true }>,
                decimal: 1.02539 as Decimal<{ rational: true }>,
                cents: 43.408335 as Cents,
                name: "5²⋅7S" as Name<Comma>,
                sizeCategory: 5 as Index<SizeCategory>,
                pitch: { vector: [-9, 1, 2, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -3.698837 as ApotomeSlope,
                aas: 3.698837 as Abs<ApotomeSlope>,
                ate: 1 as Ate,
                two3FreeClassAnalysis: {
                    name: "{13/5}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 18 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 13 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 15.648148 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, -1, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [40, 39] as Quotient<{ rational: true }>,
                vector: [3, -1, 1, 0, 0, -1] as Vector<{ rational: true }>,
                decimal: 1.025641 as Decimal<{ rational: true }>,
                cents: 43.831051 as Cents,
                name: "5/13S" as Name<Comma>,
                sizeCategory: 5 as Index<SizeCategory>,
                pitch: { vector: [3, -1, 1, 0, 0, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 3.264504 as ApotomeSlope,
                aas: 3.264504 as Abs<ApotomeSlope>,
                ate: 6 as Ate,
                two3FreeClassAnalysis: {
                    name: "{49/17}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 31 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 17 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 131.12037 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 2, 0, 0, -1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [35721, 34816] as Quotient<{ rational: true }>,
                vector: [-11, 6, 0, 2, 0, 0, -1] as Vector<{ rational: true }>,
                decimal: 1.025993 as Decimal<{ rational: true }>,
                cents: 44.426408 as Cents,
                name: "49/17S" as Name<Comma>,
                sizeCategory: 5 as Index<SizeCategory>,
                pitch: { vector: [-11, 6, 0, 2, 0, 0, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -1.768944 as ApotomeSlope,
                aas: 1.768944 as Abs<ApotomeSlope>,
                ate: 1 as Ate,
                two3FreeClassAnalysis: {
                    name: "{19/13}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 32 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 19 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 86.907407 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 0, 0, -1, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [39, 38] as Quotient<{ rational: true }>,
                vector: [-1, 1, 0, 0, 0, 1, 0, -1] as Vector<{ rational: true }>,
                decimal: 1.026315 as Decimal<{ rational: true }>,
                cents: 44.969646 as Cents,
                name: "13/19S" as Name<Comma>,
                sizeCategory: 5 as Index<SizeCategory>,
                pitch: {
                    vector: [-1, 1, 0, 0, 0, 1, 0, -1] as Vector<{ rational: true }>,
                } as Comma,
            },
            {
                apotomeSlope: -3.805382 as ApotomeSlope,
                aas: 3.805382 as Abs<ApotomeSlope>,
                ate: 1 as Ate,
                two3FreeClassAnalysis: {
                    name: "{77/25}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 4 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 28 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 11 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 65.354938 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, -2, 1, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [77, 75] as Quotient<{ rational: true }>,
                vector: [0, -1, -2, 1, 1] as Vector<{ rational: true }>,
                decimal: 1.026666 as Decimal<{ rational: true }>,
                cents: 45.56142 as Cents,
                name: "77/25M" as Name<Comma>,
                sizeCategory: 6 as Index<SizeCategory>,
                pitch: { vector: [0, -1, -2, 1, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 4.180864 as ApotomeSlope,
                aas: 4.180864 as Abs<ApotomeSlope>,
                ate: 7 as Ate,
                two3FreeClassAnalysis: {
                    name: "{25/13}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 23 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 13 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 39.12037 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 2, 0, 0, -1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [54675, 53248] as Quotient<{ rational: true }>,
                vector: [-12, 7, 2, 0, 0, -1] as Vector<{ rational: true }>,
                decimal: 1.026799 as Decimal<{ rational: true }>,
                cents: 45.784772 as Cents,
                name: "25/13M" as Name<Comma>,
                sizeCategory: 6 as Index<SizeCategory>,
                pitch: { vector: [-12, 7, 2, 0, 0, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -6.856644 as ApotomeSlope,
                aas: 6.856644 as Abs<ApotomeSlope>,
                ate: 4 as Ate,
                two3FreeClassAnalysis: {
                    name: "{13/5}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 18 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 13 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 15.648148 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, -1, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [416, 405] as Quotient<{ rational: true }>,
                vector: [5, -4, -1, 0, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.02716 as Decimal<{ rational: true }>,
                cents: 46.393944 as Cents,
                name: "13/5M" as Name<Comma>,
                sizeCategory: 6 as Index<SizeCategory>,
                pitch: { vector: [5, -4, -1, 0, 0, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -8.882672 as ApotomeSlope,
                aas: 8.882672 as Abs<ApotomeSlope>,
                ate: 6 as Ate,
                two3FreeClassAnalysis: {
                    name: "{175}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 17 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 7 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 17.013888 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 2, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [131072, 127575] as Quotient<{ rational: true }>,
                vector: [17, -6, -2, -1] as Vector<{ rational: true }>,
                decimal: 1.027411 as Decimal<{ rational: true }>,
                cents: 46.81666 as Cents,
                name: "1/(5²⋅7)M" as Name<Comma>,
                sizeCategory: 6 as Index<SizeCategory>,
                pitch: { vector: [17, -6, -2, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -4.920686 as ApotomeSlope,
                aas: 4.920686 as Abs<ApotomeSlope>,
                ate: 2 as Ate,
                two3FreeClassAnalysis: {
                    name: "{37}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 1 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 37 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 37 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 76.055555 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [37, 36] as Quotient<{ rational: true }>,
                vector: [-2, -2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.027777 as Decimal<{ rational: true }>,
                cents: 47.434037 as Cents,
                name: "37M" as Name<Comma>,
                sizeCategory: 6 as Index<SizeCategory>,
                pitch: {
                    vector: [-2, -2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] as Vector<{ rational: true }>,
                } as Comma,
            },
            {
                apotomeSlope: 2.048291 as ApotomeSlope,
                aas: 2.048291 as Abs<ApotomeSlope>,
                ate: 5 as Ate,
                two3FreeClassAnalysis: {
                    name: "{325/11}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 4 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 34 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 13 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 215.162037 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 2, 0, -1, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [2673, 2600] as Quotient<{ rational: true }>,
                vector: [-3, 5, -2, 0, 1, -1] as Vector<{ rational: true }>,
                decimal: 1.028076 as Decimal<{ rational: true }>,
                cents: 47.937857 as Cents,
                name: "11/(5²⋅13)M" as Name<Comma>,
                sizeCategory: 6 as Index<SizeCategory>,
                pitch: { vector: [-3, 5, -2, 0, 1, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 1.023058 as ApotomeSlope,
                aas: 1.023058 as Abs<ApotomeSlope>,
                ate: 4 as Ate,
                two3FreeClassAnalysis: {
                    name: "{13}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 1 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 13 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 13 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 9.388888 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [1053, 1024] as Quotient<{ rational: true }>,
                vector: [-10, 4, 0, 0, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.02832 as Decimal<{ rational: true }>,
                cents: 48.347665 as Cents,
                name: "13M" as Name<Comma>,
                sizeCategory: 6 as Index<SizeCategory>,
                pitch: { vector: [-10, 4, 0, 0, 0, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -1.00297 as ApotomeSlope,
                aas: 1.00297 as Abs<ApotomeSlope>,
                ate: 2 as Ate,
                two3FreeClassAnalysis: {
                    name: "{35}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 12 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 7 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 6.805555 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 1, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [36, 35] as Quotient<{ rational: true }>,
                vector: [2, 2, -1, -1] as Vector<{ rational: true }>,
                decimal: 1.028571 as Decimal<{ rational: true }>,
                cents: 48.770381 as Cents,
                name: "1/35M" as Name<Comma>,
                sizeCategory: 6 as Index<SizeCategory>,
                pitch: { vector: [2, 2, -1, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -8.027338 as ApotomeSlope,
                aas: 8.027338 as Abs<ApotomeSlope>,
                ate: 5 as Ate,
                two3FreeClassAnalysis: {
                    name: "{125}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 15 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 5 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 8.680555 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 3] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [250, 243] as Quotient<{ rational: true }>,
                vector: [1, -5, 3] as Vector<{ rational: true }>,
                decimal: 1.028806 as Decimal<{ rational: true }>,
                cents: 49.166137 as Cents,
                name: "125M" as Name<Comma>,
                sizeCategory: 6 as Index<SizeCategory>,
                pitch: { vector: [1, -5, 3] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -5.072212 as ApotomeSlope,
                aas: 5.072212 as Abs<ApotomeSlope>,
                ate: 2 as Ate,
                two3FreeClassAnalysis: {
                    name: "{19/11}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 30 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 19 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 73.537037 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 0, -1, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [176, 171] as Quotient<{ rational: true }>,
                vector: [4, -2, 0, 0, 1, 0, 0, -1] as Vector<{ rational: true }>,
                decimal: 1.029239 as Decimal<{ rational: true }>,
                cents: 49.894924 as Cents,
                name: "11/19M" as Name<Comma>,
                sizeCategory: 6 as Index<SizeCategory>,
                pitch: {
                    vector: [4, -2, 0, 0, 1, 0, 0, -1] as Vector<{ rational: true }>,
                } as Comma,
            },
            {
                apotomeSlope: 8.90276 as ApotomeSlope,
                aas: 8.90276 as Abs<ApotomeSlope>,
                ate: 12 as Ate,
                two3FreeClassAnalysis: {
                    name: "{65}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 18 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 13 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 23.472222 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 1, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [34543665, 33554432] as Quotient<{ rational: true }>,
                vector: [-25, 12, 1, 0, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.029481 as Decimal<{ rational: true }>,
                cents: 50.301386 as Cents,
                name: "65M" as Name<Comma>,
                sizeCategory: 6 as Index<SizeCategory>,
                pitch: { vector: [-25, 12, 1, 0, 0, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 6.876732 as ApotomeSlope,
                aas: 6.876732 as Abs<ApotomeSlope>,
                ate: 10 as Ate,
                two3FreeClassAnalysis: {
                    name: "{7}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 1 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 7 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 7 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 2.722222 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [59049, 57344] as Quotient<{ rational: true }>,
                vector: [-13, 10, 0, -1] as Vector<{ rational: true }>,
                decimal: 1.029732 as Decimal<{ rational: true }>,
                cents: 50.724102 as Cents,
                name: "1/7M" as Name<Comma>,
                sizeCategory: 6 as Index<SizeCategory>,
                pitch: { vector: [-13, 10, 0, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -0.147635 as ApotomeSlope,
                aas: 0.147635 as Abs<ApotomeSlope>,
                ate: 3 as Ate,
                two3FreeClassAnalysis: {
                    name: "{625}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 4 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 20 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 5 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 21.701388 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 4] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [16875, 16384] as Quotient<{ rational: true }>,
                vector: [-14, 3, 4] as Vector<{ rational: true }>,
                decimal: 1.029968 as Decimal<{ rational: true }>,
                cents: 51.119858 as Cents,
                name: "5⁴M" as Name<Comma>,
                sizeCategory: 6 as Index<SizeCategory>,
                pitch: { vector: [-14, 3, 4] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -10.159911 as ApotomeSlope,
                aas: 10.159911 as Abs<ApotomeSlope>,
                ate: 7 as Ate,
                two3FreeClassAnalysis: {
                    name: "{11/5}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 16 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 11 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 11.203703 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, -1, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [11264, 10935] as Quotient<{ rational: true }>,
                vector: [10, -7, -1, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.030086 as Decimal<{ rational: true }>,
                cents: 51.319222 as Cents,
                name: "11/5M" as Name<Comma>,
                sizeCategory: 6 as Index<SizeCategory>,
                pitch: { vector: [10, -7, -1, 0, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -4.182277 as ApotomeSlope,
                aas: 4.182277 as Abs<ApotomeSlope>,
                ate: 1 as Ate,
                two3FreeClassAnalysis: {
                    name: "{17/11}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 28 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 17 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 58.87037 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 0, -1, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [34, 33] as Quotient<{ rational: true }>,
                vector: [1, -1, 0, 0, -1, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.030303 as Decimal<{ rational: true }>,
                cents: 51.682466 as Cents,
                name: "17/11M" as Name<Comma>,
                sizeCategory: 6 as Index<SizeCategory>,
                pitch: { vector: [1, -1, 0, 0, -1, 0, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -6.212565 as ApotomeSlope,
                aas: 6.212565 as Abs<ApotomeSlope>,
                ate: 3 as Ate,
                two3FreeClassAnalysis: {
                    name: "{23/5}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 28 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 23 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 48.981481 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, -1, 0, 0, 0, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [640, 621] as Quotient<{ rational: true }>,
                vector: [7, -3, 1, 0, 0, 0, 0, 0, -1] as Vector<{ rational: true }>,
                decimal: 1.030595 as Decimal<{ rational: true }>,
                cents: 52.174364 as Cents,
                name: "5/23M" as Name<Comma>,
                sizeCategory: 6 as Index<SizeCategory>,
                pitch: {
                    vector: [7, -3, 1, 0, 0, 0, 0, 0, -1] as Vector<{ rational: true }>,
                } as Comma,
            },
            {
                apotomeSlope: 0.755035 as ApotomeSlope,
                aas: 0.755035 as Abs<ApotomeSlope>,
                ate: 4 as Ate,
                two3FreeClassAnalysis: {
                    name: "{275/7}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 4 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 28 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 11 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 98.032407 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 2, -1, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [567, 550] as Quotient<{ rational: true }>,
                vector: [-1, 4, -2, 1, -1] as Vector<{ rational: true }>,
                decimal: 1.030909 as Decimal<{ rational: true }>,
                cents: 52.700539 as Cents,
                name: "7/(5²⋅11)M" as Name<Comma>,
                sizeCategory: 6 as Index<SizeCategory>,
                pitch: { vector: [-1, 4, -2, 1, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -2.280209 as ApotomeSlope,
                aas: 2.280209 as Abs<ApotomeSlope>,
                ate: 1 as Ate,
                two3FreeClassAnalysis: {
                    name: "{11}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 1 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 11 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 11 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 6.722222 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [33, 32] as Quotient<{ rational: true }>,
                vector: [-5, 1, 0, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.03125 as Decimal<{ rational: true }>,
                cents: 53.272943 as Cents,
                name: "11M" as Name<Comma>,
                sizeCategory: 6 as Index<SizeCategory>,
                pitch: { vector: [-5, 1, 0, 0, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 3.697424 as ApotomeSlope,
                aas: 3.697424 as Abs<ApotomeSlope>,
                ate: 7 as Ate,
                two3FreeClassAnalysis: {
                    name: "{85/11}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 33 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 17 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 147.175925 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 1, 0, -1, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [185895, 180224] as Quotient<{ rational: true }>,
                vector: [-14, 7, 1, 0, -1, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.031466 as Decimal<{ rational: true }>,
                cents: 53.636187 as Cents,
                name: "5⋅17/11M" as Name<Comma>,
                sizeCategory: 6 as Index<SizeCategory>,
                pitch: { vector: [-14, 7, 1, 0, -1, 0, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -5.33147 as ApotomeSlope,
                aas: 5.33147 as Abs<ApotomeSlope>,
                ate: 2 as Ate,
                two3FreeClassAnalysis: {
                    name: "{65/7}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 25 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 13 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 54.768518 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 1, -1, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [65, 63] as Quotient<{ rational: true }>,
                vector: [0, -2, 1, -1, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.031746 as Decimal<{ rational: true }>,
                cents: 54.105467 as Cents,
                name: "65/7M" as Name<Comma>,
                sizeCategory: 6 as Index<SizeCategory>,
                pitch: { vector: [0, -2, 1, -1, 0, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -7.357498 as ApotomeSlope,
                aas: 7.357498 as Abs<ApotomeSlope>,
                ate: 4 as Ate,
                two3FreeClassAnalysis: {
                    name: "{49}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 14 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 7 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 9.527777 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 2] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [4096, 3969] as Quotient<{ rational: true }>,
                vector: [12, -4, 0, -2] as Vector<{ rational: true }>,
                decimal: 1.031997 as Decimal<{ rational: true }>,
                cents: 54.528183 as Cents,
                name: "1/49M" as Name<Comma>,
                sizeCategory: 6 as Index<SizeCategory>,
                pitch: { vector: [12, -4, 0, -2] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -3.38436 as ApotomeSlope,
                aas: 3.38436 as Abs<ApotomeSlope>,
                ate: 0 as Ate,
                two3FreeClassAnalysis: {
                    name: "{31}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 1 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 31 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 31 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 53.388888 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [32, 31] as Quotient<{ rational: true }>,
                vector: [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1] as Vector<{ rational: true }>,
                decimal: 1.032258 as Decimal<{ rational: true }>,
                cents: 54.964427 as Cents,
                name: "1/31M" as Name<Comma>,
                sizeCategory: 6 as Index<SizeCategory>,
                pitch: {
                    vector: [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1] as Vector<{ rational: true }>,
                } as Comma,
            },
            {
                apotomeSlope: 5.599493 as ApotomeSlope,
                aas: 5.599493 as Abs<ApotomeSlope>,
                ate: 9 as Ate,
                two3FreeClassAnalysis: {
                    name: "{55}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 2 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 16 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 11 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 16.805555 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 1, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [1082565, 1048576] as Quotient<{ rational: true }>,
                vector: [-20, 9, 1, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.032414 as Decimal<{ rational: true }>,
                cents: 55.226664 as Cents,
                name: "55M" as Name<Comma>,
                sizeCategory: 6 as Index<SizeCategory>,
                pitch: { vector: [-20, 9, 1, 0, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 3.573464 as ApotomeSlope,
                aas: 3.573464 as Abs<ApotomeSlope>,
                ate: 7 as Ate,
                two3FreeClassAnalysis: {
                    name: "{91/11}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 31 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 13 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 120.49074 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 0, 1, -1, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [24057, 23296] as Quotient<{ rational: true }>,
                vector: [-8, 7, 0, -1, 1, -1] as Vector<{ rational: true }>,
                decimal: 1.032666 as Decimal<{ rational: true }>,
                cents: 55.64938 as Cents,
                name: "11/(7⋅13)M" as Name<Comma>,
                sizeCategory: 6 as Index<SizeCategory>,
                pitch: { vector: [-8, 7, 0, -1, 1, -1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: -5.459516 as ApotomeSlope,
                aas: 5.459516 as Abs<ApotomeSlope>,
                ate: 2 as Ate,
                two3FreeClassAnalysis: {
                    name: "{595}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 29 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 17 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 140.486111 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, 1, 1, 0, 0, 1] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [595, 576] as Quotient<{ rational: true }>,
                vector: [-6, -2, 1, 1, 0, 0, 1] as Vector<{ rational: true }>,
                decimal: 1.032986 as Decimal<{ rational: true }>,
                cents: 56.185028 as Cents,
                name: "5⋅7⋅17M" as Name<Comma>,
                sizeCategory: 6 as Index<SizeCategory>,
                pitch: { vector: [-6, -2, 1, 1, 0, 0, 1] as Vector<{ rational: true }> } as Comma,
            },
            {
                apotomeSlope: 0.522203 as ApotomeSlope,
                aas: 0.522203 as Abs<ApotomeSlope>,
                ate: 4 as Ate,
                two3FreeClassAnalysis: {
                    name: "{49/5}₂,₃" as Name<Two3FreeClass>,
                    two3FreeCopfr: 3 as Copfr<{ rough: 5 }>,
                    two3FreeSopfr: 19 as Sopfr<{ rough: 5 }>,
                    two3FreePrimeLimit: 7 as Max<Prime<{ rough: 5 }>>,
                    n2d3p9: 15.879629 as N2D3P9,
                    two3FreeClass: {
                        vector: [0, 0, -1, 2] as Vector<{
                            rational: true
                            rough: 5
                            direction: Direction.SUPER
                        }>,
                    } as Two3FreeClass,
                },
                quotient: [405, 392] as Quotient<{ rational: true }>,
                vector: [-3, 4, 1, -2] as Vector<{ rational: true }>,
                decimal: 1.033163 as Decimal<{ rational: true }>,
                cents: 56.481904 as Cents,
                name: "5/49M" as Name<Comma>,
                sizeCategory: 6 as Index<SizeCategory>,
                pitch: { vector: [-3, 4, 1, -2] as Vector<{ rational: true }> } as Comma,
            },
        ]
        expect(commaAnalyses).toBeCloseToObject(expected)
    })
})
