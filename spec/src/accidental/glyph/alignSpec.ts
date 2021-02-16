import {alignSagitype, Sagitype} from "../../../../src"

describe("alignSagitype", (): void => {
    it("shifts the Sagitype so that its shaft aligns with all the others' shafts, making it 8 total chars wide                  ", (): void => {
        expect(alignSagitype(",,)//|" as Sagitype)).toEqual(",,)//|  ")
        expect(alignSagitype(",)|)" as Sagitype)).toEqual("   ,)|) ")
        expect(alignSagitype("|\\" as Sagitype)).toEqual("     |\\ ")
        expect(alignSagitype(")|\\\\" as Sagitype)).toEqual("    )|\\\\")
    })

    it("centers the parenthetical natural symbol in a different way", (): void => {
        expect(alignSagitype("(|//|)" as Sagitype)).toEqual(" (|//|) ")
    })
})
