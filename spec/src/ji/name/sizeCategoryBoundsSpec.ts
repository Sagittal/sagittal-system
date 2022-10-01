import {
    APOTOME,
    Cents,
    computePitchExpectation,
    Decimal,
    EMPTY_PEV,
    HALF_SCALER,
    Pev,
    PitchExpectation,
    Spev,
} from "@sagittal/general"
import {SIZE_CATEGORY_BOUNDS, SizeCategoryBound} from "../../../../src"

describe("SIZE_CATEGORY_BOUNDS", (): void => {
    it("the bounds have the correct cents values and such", (): void => {
        const actual = SIZE_CATEGORY_BOUNDS
            .map((sizeCategoryBound: SizeCategoryBound): PitchExpectation => {
                return computePitchExpectation(sizeCategoryBound.pitch)
            })

        expect(actual).toBeCloseToObject([
            {
                // u|n
                pitch: {
                    pev: EMPTY_PEV as Pev<{rational: true}>,
                } as Spev<{rational: false}>,
                pev: EMPTY_PEV as Pev,
                cents: 0.000000 as Cents,
                decimal: 1.000000 as Decimal,
            },
            {
                // n|s
                pitch: {
                    pev: [-84, 53] as Pev<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Spev<{rational: false}>,
                pev: [-42, 26.5] as Pev,
                cents: 1.807522 as Cents,
                decimal: 1.001044 as Decimal,
            },
            {
                // s|k
                pitch: {
                    pev: [317, -200] as Pev<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Spev<{rational: false}>,
                pev: [158.5, -100] as Pev,
                cents: 4.499913 as Cents,
                decimal: 1.002602 as Decimal,
            },
            {
                // k|C
                pitch: {
                    pev: [-19, 12] as Pev<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Spev<{rational: false}>,
                pev: [-9.5, 6] as Pev,
                cents: 11.730005 as Cents,
                decimal: 1.006798 as Decimal,
            },
            {
                // C|S
                pitch: {
                    pev: [27, -17] as Pev<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Spev<{rational: false}>,
                pev: [13.5, -8.5] as Pev,
                cents: 33.382492 as Cents,
                decimal: 1.019469 as Decimal,
            },
            {
                // S|M
                pitch: {
                    pev: [8, -5] as Pev<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Spev<{rational: false}>,
                pev: [4, -2.5] as Pev,
                cents: 45.112497 as Cents,
                decimal: 1.026400 as Decimal,
            },
            {
                // M|L
                pitch: {
                    pev: APOTOME.pev,
                    scaler: HALF_SCALER,
                } as Spev<{rational: false}>,
                pev: [-5.5, 3.5] as Pev,
                cents: 56.842503 as Cents,
                decimal: 1.033378 as Decimal,
            },
            {
                // L|SS
                pitch: {
                    pev: [-30, 19] as Pev<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Spev<{rational: false}>,
                pev: [-15, 9.5] as Pev,
                cents: 68.572508 as Cents,
                decimal: 1.040403 as Decimal,
            },
            {
                // SS|MS
                pitch: {
                    pev: [-49, 31] as Pev<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Spev<{rational: false}>,
                pev: [-24.5, 15.5] as Pev,
                cents: 80.302513 as Cents,
                decimal: 1.047477 as Decimal,
            },
            {
                // MS|LS
                pitch: {
                    pev: [-3, 2] as Pev<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Spev<{rational: false}>,
                pev: [-1.5, 1] as Pev,
                cents: 101.955000 as Cents,
                decimal: 1.060660 as Decimal,
            },
            {
                // LS|A
                pitch: {
                    pev: [62, -39] as Pev<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Spev<{rational: false}>,
                pev: [31, -19.5] as Pev,
                cents: 111.877483 as Cents,
                decimal: 1.066756 as Decimal,
            },
            {
                // A|s+A
                pitch: {
                    pev: [-106, 67] as Pev<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Spev<{rational: false}>,
                pev: [-53, 33.5] as Pev,
                cents: 115.492528 as Cents,
                decimal: 1.068986 as Decimal,
            },
            {
                // s+A|k+A
                pitch: {
                    pev: [295, -186] as Pev<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Spev<{rational: false}>,
                pev: [147.5, -93] as Pev,
                cents: 118.184919 as Cents,
                decimal: 1.070650 as Decimal,
            },
            {
                // k+A|C+A
                pitch: {
                    pev: [-41, 26] as Pev<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Spev<{rational: false}>,
                pev: [-20.5, 13] as Pev,
                cents: 125.415011 as Cents,
                decimal: 1.075131 as Decimal,
            },
            {
                // C+A|S+A
                pitch: {
                    pev: [5, -3] as Pev<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Spev<{rational: false}>,
                pev: [2.5, -1.5] as Pev,
                cents: 147.067498 as Cents,
                decimal: 1.088662 as Decimal,
            },
            {
                // S+A|M+A
                pitch: {
                    pev: [-14, 9] as Pev<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Spev<{rational: false}>,
                pev: [-7, 4.5] as Pev,
                cents: 158.797503 as Cents,
                decimal: 1.096063 as Decimal,
            },
            {
                // M+A|L+A
                pitch: {
                    pev: [-33, 21] as Pev<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Spev<{rational: false}>,
                pev: [-16.5, 10.5] as Pev,
                cents: 170.527509 as Cents,
                decimal: 1.103515 as Decimal,
            },
            {
                // L+A|SS+A
                pitch: {
                    pev: [-52, 33] as Pev<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Spev<{rational: false}>,
                pev: [-26, 16.5] as Pev,
                cents: 182.257514 as Cents,
                decimal: 1.111017 as Decimal,
            },
            {
                // SS+A|MS+A
                pitch: {
                    pev: [-71, 45] as Pev<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Spev<{rational: false}>,
                pev: [-35.5, 22.5] as Pev,
                cents: 193.987519 as Cents,
                decimal: 1.118570 as Decimal,
            },
            {
                // MS+A|LS+A
                pitch: {
                    pev: [-25, 16] as Pev<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Spev<{rational: false}>,
                pev: [-12.5, 8] as Pev,
                cents: 215.640006 as Cents,
                decimal: 1.132648 as Decimal,
            },
            {
                // LS+A|A+A
                pitch: {
                    pev: [40, -25] as Pev<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Spev<{rational: false}>,
                pev: [20, -12.5] as Pev,
                cents: 225.562489 as Cents,
                decimal: 1.139158 as Decimal,
            },
            {
                // A+A|
                pitch: {
                    pev: [-44, 28] as Pev<{rational: true}>,
                    scaler: HALF_SCALER,
                } as Spev<{rational: false}>,
                pev: [-22, 14] as Pev,
                cents: 227.370012 as Cents,
                decimal: 1.140348 as Decimal,
            },
        ])
    })
})
