import {
    APOTOME,
    Cents,
    computePitchExpectation,
    Decimal,
    EMPTY_VECTOR,
    HALF_SCALER,
    Vector,
    PitchExpectation,
    ScaledVector,
} from "@sagittal/general"
import { SIZE_CATEGORY_BOUNDS, SizeCategoryBound } from "../../../../src"

describe("SIZE_CATEGORY_BOUNDS", (): void => {
    it("the bounds have the correct cents values and such", (): void => {
        const actual = SIZE_CATEGORY_BOUNDS.map(
            (sizeCategoryBound: SizeCategoryBound): PitchExpectation => {
                return computePitchExpectation(sizeCategoryBound.pitch)
            },
        )

        expect(actual).toBeCloseToObject([
            {
                // u|n
                pitch: {
                    vector: EMPTY_VECTOR as Vector<{ rational: true }>,
                } as ScaledVector<{ rational: false }>,
                vector: EMPTY_VECTOR as Vector,
                cents: 0.0 as Cents,
                decimal: 1.0 as Decimal,
            },
            {
                // n|s
                pitch: {
                    vector: [-84, 53] as Vector<{ rational: true }>,
                    scaler: HALF_SCALER,
                } as ScaledVector<{ rational: false }>,
                vector: [-42, 26.5] as Vector,
                cents: 1.807522 as Cents,
                decimal: 1.001044 as Decimal,
            },
            {
                // s|k
                pitch: {
                    vector: [317, -200] as Vector<{ rational: true }>,
                    scaler: HALF_SCALER,
                } as ScaledVector<{ rational: false }>,
                vector: [158.5, -100] as Vector,
                cents: 4.499913 as Cents,
                decimal: 1.002602 as Decimal,
            },
            {
                // k|C
                pitch: {
                    vector: [-19, 12] as Vector<{ rational: true }>,
                    scaler: HALF_SCALER,
                } as ScaledVector<{ rational: false }>,
                vector: [-9.5, 6] as Vector,
                cents: 11.730005 as Cents,
                decimal: 1.006798 as Decimal,
            },
            {
                // C|S
                pitch: {
                    vector: [27, -17] as Vector<{ rational: true }>,
                    scaler: HALF_SCALER,
                } as ScaledVector<{ rational: false }>,
                vector: [13.5, -8.5] as Vector,
                cents: 33.382492 as Cents,
                decimal: 1.019469 as Decimal,
            },
            {
                // S|M
                pitch: {
                    vector: [8, -5] as Vector<{ rational: true }>,
                    scaler: HALF_SCALER,
                } as ScaledVector<{ rational: false }>,
                vector: [4, -2.5] as Vector,
                cents: 45.112497 as Cents,
                decimal: 1.0264 as Decimal,
            },
            {
                // M|L
                pitch: {
                    vector: APOTOME.vector,
                    scaler: HALF_SCALER,
                } as ScaledVector<{ rational: false }>,
                vector: [-5.5, 3.5] as Vector,
                cents: 56.842503 as Cents,
                decimal: 1.033378 as Decimal,
            },
            {
                // L|SS
                pitch: {
                    vector: [-30, 19] as Vector<{ rational: true }>,
                    scaler: HALF_SCALER,
                } as ScaledVector<{ rational: false }>,
                vector: [-15, 9.5] as Vector,
                cents: 68.572508 as Cents,
                decimal: 1.040403 as Decimal,
            },
            {
                // SS|MS
                pitch: {
                    vector: [-49, 31] as Vector<{ rational: true }>,
                    scaler: HALF_SCALER,
                } as ScaledVector<{ rational: false }>,
                vector: [-24.5, 15.5] as Vector,
                cents: 80.302513 as Cents,
                decimal: 1.047477 as Decimal,
            },
            {
                // MS|LS
                pitch: {
                    vector: [-3, 2] as Vector<{ rational: true }>,
                    scaler: HALF_SCALER,
                } as ScaledVector<{ rational: false }>,
                vector: [-1.5, 1] as Vector,
                cents: 101.955 as Cents,
                decimal: 1.06066 as Decimal,
            },
            {
                // LS|A
                pitch: {
                    vector: [62, -39] as Vector<{ rational: true }>,
                    scaler: HALF_SCALER,
                } as ScaledVector<{ rational: false }>,
                vector: [31, -19.5] as Vector,
                cents: 111.877483 as Cents,
                decimal: 1.066756 as Decimal,
            },
            {
                // A|s+A
                pitch: {
                    vector: [-106, 67] as Vector<{ rational: true }>,
                    scaler: HALF_SCALER,
                } as ScaledVector<{ rational: false }>,
                vector: [-53, 33.5] as Vector,
                cents: 115.492528 as Cents,
                decimal: 1.068986 as Decimal,
            },
            {
                // s+A|k+A
                pitch: {
                    vector: [295, -186] as Vector<{ rational: true }>,
                    scaler: HALF_SCALER,
                } as ScaledVector<{ rational: false }>,
                vector: [147.5, -93] as Vector,
                cents: 118.184919 as Cents,
                decimal: 1.07065 as Decimal,
            },
            {
                // k+A|C+A
                pitch: {
                    vector: [-41, 26] as Vector<{ rational: true }>,
                    scaler: HALF_SCALER,
                } as ScaledVector<{ rational: false }>,
                vector: [-20.5, 13] as Vector,
                cents: 125.415011 as Cents,
                decimal: 1.075131 as Decimal,
            },
            {
                // C+A|S+A
                pitch: {
                    vector: [5, -3] as Vector<{ rational: true }>,
                    scaler: HALF_SCALER,
                } as ScaledVector<{ rational: false }>,
                vector: [2.5, -1.5] as Vector,
                cents: 147.067498 as Cents,
                decimal: 1.088662 as Decimal,
            },
            {
                // S+A|M+A
                pitch: {
                    vector: [-14, 9] as Vector<{ rational: true }>,
                    scaler: HALF_SCALER,
                } as ScaledVector<{ rational: false }>,
                vector: [-7, 4.5] as Vector,
                cents: 158.797503 as Cents,
                decimal: 1.096063 as Decimal,
            },
            {
                // M+A|L+A
                pitch: {
                    vector: [-33, 21] as Vector<{ rational: true }>,
                    scaler: HALF_SCALER,
                } as ScaledVector<{ rational: false }>,
                vector: [-16.5, 10.5] as Vector,
                cents: 170.527509 as Cents,
                decimal: 1.103515 as Decimal,
            },
            {
                // L+A|SS+A
                pitch: {
                    vector: [-52, 33] as Vector<{ rational: true }>,
                    scaler: HALF_SCALER,
                } as ScaledVector<{ rational: false }>,
                vector: [-26, 16.5] as Vector,
                cents: 182.257514 as Cents,
                decimal: 1.111017 as Decimal,
            },
            {
                // SS+A|MS+A
                pitch: {
                    vector: [-71, 45] as Vector<{ rational: true }>,
                    scaler: HALF_SCALER,
                } as ScaledVector<{ rational: false }>,
                vector: [-35.5, 22.5] as Vector,
                cents: 193.987519 as Cents,
                decimal: 1.11857 as Decimal,
            },
            {
                // MS+A|LS+A
                pitch: {
                    vector: [-25, 16] as Vector<{ rational: true }>,
                    scaler: HALF_SCALER,
                } as ScaledVector<{ rational: false }>,
                vector: [-12.5, 8] as Vector,
                cents: 215.640006 as Cents,
                decimal: 1.132648 as Decimal,
            },
            {
                // LS+A|A+A
                pitch: {
                    vector: [40, -25] as Vector<{ rational: true }>,
                    scaler: HALF_SCALER,
                } as ScaledVector<{ rational: false }>,
                vector: [20, -12.5] as Vector,
                cents: 225.562489 as Cents,
                decimal: 1.139158 as Decimal,
            },
            {
                // A+A|
                pitch: {
                    vector: [-44, 28] as Vector<{ rational: true }>,
                    scaler: HALF_SCALER,
                } as ScaledVector<{ rational: false }>,
                vector: [-22, 14] as Vector,
                cents: 227.370012 as Cents,
                decimal: 1.140348 as Decimal,
            },
        ])
    })
})
