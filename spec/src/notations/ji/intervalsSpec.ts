import {
    ATHINA_CENTS,
    HINA_CENTS,
    INA_CENTS_SIZES,
    JiNotationLevelId,
    MINA_CENTS,
    TINA_CENTS,
    ULTRINA_CENTS,
} from "../../../../src"

describe("INA_CENTS_SIZES", (): void => {
    it("has the JI levels' step sizes equal to the correct ina", (): void => {
        expect(INA_CENTS_SIZES[JiNotationLevelId.INSANE]).toBeCloseToTyped(TINA_CENTS)
        expect(INA_CENTS_SIZES[JiNotationLevelId.EXTREME]).toBeCloseToTyped(MINA_CENTS)
        expect(INA_CENTS_SIZES[JiNotationLevelId.ULTRA]).toBeCloseToTyped(ULTRINA_CENTS)
        expect(INA_CENTS_SIZES[JiNotationLevelId.HIGH]).toBeCloseToTyped(HINA_CENTS)
        expect(INA_CENTS_SIZES[JiNotationLevelId.MEDIUM]).toBeCloseToTyped(ATHINA_CENTS)
    })
})
