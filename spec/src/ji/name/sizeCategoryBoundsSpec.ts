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
    Irrational,
    NoProperties,
} from "@sagittal/general"
import { SIZE_CATEGORY_BOUNDS, SizeCategoryBound } from "../../../../src"

describe("SIZE_CATEGORY_BOUNDS", (): void => {
    it("the bounds have the correct cents values and such", (): void => {
        const actual = SIZE_CATEGORY_BOUNDS.map(
            (sizeCategoryBound: SizeCategoryBound): PitchExpectation<Irrational> => {
                return computePitchExpectation(sizeCategoryBound.pitch)
            },
        )

        expect(actual).toBeCloseToObject([
            {
                // u|n
                pitch: {
                    vector: EMPTY_VECTOR,
                } as ScaledVector<Irrational>,
                vector: EMPTY_VECTOR as Vector<NoProperties> as Vector<Irrational>,
                cents: 0.0 as Cents,
                decimal: 1.0 as Decimal<Irrational>,
            },
            {
                // n|s
                pitch: {
                    vector: [-84, 53] as Vector,
                    scaler: HALF_SCALER,
                } as ScaledVector<Irrational>,
                vector: [-42, 26.5] as Vector<Irrational>,
                cents: 1.807522 as Cents,
                decimal: 1.001044 as Decimal<Irrational>,
            },
            {
                // s|k
                pitch: {
                    vector: [317, -200] as Vector,
                    scaler: HALF_SCALER,
                } as ScaledVector<Irrational>,
                vector: [158.5, -100] as Vector<Irrational>,
                cents: 4.499913 as Cents,
                decimal: 1.002602 as Decimal<Irrational>,
            },
            {
                // k|C
                pitch: {
                    vector: [-19, 12] as Vector,
                    scaler: HALF_SCALER,
                } as ScaledVector<Irrational>,
                vector: [-9.5, 6] as Vector<Irrational>,
                cents: 11.730005 as Cents,
                decimal: 1.006798 as Decimal<Irrational>,
            },
            {
                // C|S
                pitch: {
                    vector: [27, -17] as Vector,
                    scaler: HALF_SCALER,
                } as ScaledVector<Irrational>,
                vector: [13.5, -8.5] as Vector<Irrational>,
                cents: 33.382492 as Cents,
                decimal: 1.019469 as Decimal<Irrational>,
            },
            {
                // S|M
                pitch: {
                    vector: [8, -5] as Vector,
                    scaler: HALF_SCALER,
                } as ScaledVector<Irrational>,
                vector: [4, -2.5] as Vector<Irrational>,
                cents: 45.112497 as Cents,
                decimal: 1.0264 as Decimal<Irrational>,
            },
            {
                // M|L
                pitch: {
                    vector: APOTOME.vector,
                    scaler: HALF_SCALER,
                } as ScaledVector<Irrational>,
                vector: [-5.5, 3.5] as Vector<Irrational>,
                cents: 56.842503 as Cents,
                decimal: 1.033378 as Decimal<Irrational>,
            },
            {
                // L|SS
                pitch: {
                    vector: [-30, 19] as Vector,
                    scaler: HALF_SCALER,
                } as ScaledVector<Irrational>,
                vector: [-15, 9.5] as Vector<Irrational>,
                cents: 68.572508 as Cents,
                decimal: 1.040403 as Decimal<Irrational>,
            },
            {
                // SS|MS
                pitch: {
                    vector: [-49, 31] as Vector,
                    scaler: HALF_SCALER,
                } as ScaledVector<Irrational>,
                vector: [-24.5, 15.5] as Vector<Irrational>,
                cents: 80.302513 as Cents,
                decimal: 1.047477 as Decimal<Irrational>,
            },
            {
                // MS|LS
                pitch: {
                    vector: [-3, 2] as Vector,
                    scaler: HALF_SCALER,
                } as ScaledVector<Irrational>,
                vector: [-1.5, 1] as Vector<Irrational>,
                cents: 101.955 as Cents,
                decimal: 1.06066 as Decimal<Irrational>,
            },
            {
                // LS|A
                pitch: {
                    vector: [62, -39] as Vector,
                    scaler: HALF_SCALER,
                } as ScaledVector<Irrational>,
                vector: [31, -19.5] as Vector<Irrational>,
                cents: 111.877483 as Cents,
                decimal: 1.066756 as Decimal<Irrational>,
            },
            {
                // A|s+A
                pitch: {
                    vector: [-106, 67] as Vector,
                    scaler: HALF_SCALER,
                } as ScaledVector<Irrational>,
                vector: [-53, 33.5] as Vector<Irrational>,
                cents: 115.492528 as Cents,
                decimal: 1.068986 as Decimal<Irrational>,
            },
            {
                // s+A|k+A
                pitch: {
                    vector: [295, -186] as Vector,
                    scaler: HALF_SCALER,
                } as ScaledVector<Irrational>,
                vector: [147.5, -93] as Vector<Irrational>,
                cents: 118.184919 as Cents,
                decimal: 1.07065 as Decimal<Irrational>,
            },
            {
                // k+A|C+A
                pitch: {
                    vector: [-41, 26] as Vector,
                    scaler: HALF_SCALER,
                } as ScaledVector<Irrational>,
                vector: [-20.5, 13] as Vector<Irrational>,
                cents: 125.415011 as Cents,
                decimal: 1.075131 as Decimal<Irrational>,
            },
            {
                // C+A|S+A
                pitch: {
                    vector: [5, -3] as Vector,
                    scaler: HALF_SCALER,
                } as ScaledVector<Irrational>,
                vector: [2.5, -1.5] as Vector<Irrational>,
                cents: 147.067498 as Cents,
                decimal: 1.088662 as Decimal<Irrational>,
            },
            {
                // S+A|M+A
                pitch: {
                    vector: [-14, 9] as Vector,
                    scaler: HALF_SCALER,
                } as ScaledVector<Irrational>,
                vector: [-7, 4.5] as Vector<Irrational>,
                cents: 158.797503 as Cents,
                decimal: 1.096063 as Decimal<Irrational>,
            },
            {
                // M+A|L+A
                pitch: {
                    vector: [-33, 21] as Vector,
                    scaler: HALF_SCALER,
                } as ScaledVector<Irrational>,
                vector: [-16.5, 10.5] as Vector<Irrational>,
                cents: 170.527509 as Cents,
                decimal: 1.103515 as Decimal<Irrational>,
            },
            {
                // L+A|SS+A
                pitch: {
                    vector: [-52, 33] as Vector,
                    scaler: HALF_SCALER,
                } as ScaledVector<Irrational>,
                vector: [-26, 16.5] as Vector<Irrational>,
                cents: 182.257514 as Cents,
                decimal: 1.111017 as Decimal<Irrational>,
            },
            {
                // SS+A|MS+A
                pitch: {
                    vector: [-71, 45] as Vector,
                    scaler: HALF_SCALER,
                } as ScaledVector<Irrational>,
                vector: [-35.5, 22.5] as Vector<Irrational>,
                cents: 193.987519 as Cents,
                decimal: 1.11857 as Decimal<Irrational>,
            },
            {
                // MS+A|LS+A
                pitch: {
                    vector: [-25, 16] as Vector,
                    scaler: HALF_SCALER,
                } as ScaledVector<Irrational>,
                vector: [-12.5, 8] as Vector<Irrational>,
                cents: 215.640006 as Cents,
                decimal: 1.132648 as Decimal<Irrational>,
            },
            {
                // LS+A|A+A
                pitch: {
                    vector: [40, -25] as Vector,
                    scaler: HALF_SCALER,
                } as ScaledVector<Irrational>,
                vector: [20, -12.5] as Vector<Irrational>,
                cents: 225.562489 as Cents,
                decimal: 1.139158 as Decimal<Irrational>,
            },
            {
                // A+A|
                pitch: {
                    vector: [-44, 28] as Vector,
                    scaler: HALF_SCALER,
                } as ScaledVector<Irrational>,
                vector: [-22, 14] as Vector<Irrational>,
                cents: 227.370012 as Cents,
                decimal: 1.140348 as Decimal<Irrational>,
            },
        ])
    })
})
