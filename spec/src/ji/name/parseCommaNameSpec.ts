import { Direction, Io } from "@sagittal/general"
import { parseCommaName, SizeCategory } from "../../../../src"
import { CommaNameQuotient } from "../../../../src/ji/name/types"

describe("parseCommaName", (): void => {
    const commaNameQuotient = [1, 5] as CommaNameQuotient

    it("works for any size category abbreviation", (): void => {
        expect(parseCommaName("1/5u" as Io)) // Not that this is a real thing or anything
            .toEqual({ commaNameQuotient, sizeCategory: SizeCategory.UNISON })
        expect(parseCommaName("1/5n" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.SCHISMINA,
        })
        expect(parseCommaName("1/5s" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.SCHISMA,
        })
        expect(parseCommaName("1/5k" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.KLEISMA,
        })
        expect(parseCommaName("1/5C" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.COMMA,
        })
        expect(parseCommaName("1/5S" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.SMALL_DIESIS,
        })
        expect(parseCommaName("1/5M" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.MEDIUM_DIESIS,
        })
        expect(parseCommaName("1/5L" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.LARGE_DIESIS,
        })
        expect(parseCommaName("1/5SS" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.SMALL_SEMITONE,
        })
        expect(parseCommaName("1/5MS" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.MEDIUM_SEMITONE,
        })
        expect(parseCommaName("1/5LS" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.LARGE_SEMITONE,
        })
        expect(parseCommaName("1/5A" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.APOTOME,
        })
        expect(parseCommaName("1/5s+A" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.SCHISMA_PLUS_APOTOME,
        })
        expect(parseCommaName("1/5k+A" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.KLEISMA_PLUS_APOTOME,
        })
        expect(parseCommaName("1/5C+A" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.COMMA_PLUS_APOTOME,
        })
        expect(parseCommaName("1/5S+A" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.SMALL_DIESIS_PLUS_APOTOME,
        })
        expect(parseCommaName("1/5M+A" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.MEDIUM_DIESIS_PLUS_APOTOME,
        })
        expect(parseCommaName("1/5L+A" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.LARGE_DIESIS_PLUS_APOTOME,
        })
        expect(parseCommaName("1/5SS+A" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.SMALL_SEMITONE_PLUS_APOTOME,
        })
        expect(parseCommaName("1/5MS+A" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.LIMMA_PLUS_APOTOME,
        })
        expect(parseCommaName("1/5LS+A" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.LARGE_SEMITONE_PLUS_APOTOME,
        })
        expect(parseCommaName("1/5A+A" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.DOUBLE_APOTOME,
        })
    })

    it("works for any size category name", (): void => {
        expect(parseCommaName("1/5-unison" as Io)) // Not that this is a real thing or anything
            .toEqual({ commaNameQuotient, sizeCategory: SizeCategory.UNISON })
        expect(parseCommaName("1/5-schismina" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.SCHISMINA,
        })
        expect(parseCommaName("1/5-schisma" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.SCHISMA,
        })
        expect(parseCommaName("1/5-kleisma" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.KLEISMA,
        })
        expect(parseCommaName("1/5-Comma" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.COMMA,
        })
        expect(parseCommaName("1/5-Small-Diesis" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.SMALL_DIESIS,
        })
        expect(parseCommaName("1/5-Medium-Diesis" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.MEDIUM_DIESIS,
        })
        expect(parseCommaName("1/5-Large-Diesis" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.LARGE_DIESIS,
        })
        expect(parseCommaName("1/5-Small-Semitone" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.SMALL_SEMITONE,
        })
        expect(parseCommaName("1/5-Medium-Semitone" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.MEDIUM_SEMITONE,
        })
        expect(parseCommaName("1/5-Large-Semitone" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.LARGE_SEMITONE,
        })
        expect(parseCommaName("1/5-Apotome" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.APOTOME,
        })
        expect(parseCommaName("1/5-schisma-Plus-Apotome" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.SCHISMA_PLUS_APOTOME,
        })
        expect(parseCommaName("1/5-kleisma-Plus-Apotome" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.KLEISMA_PLUS_APOTOME,
        })
        expect(parseCommaName("1/5-Comma-Plus-Apotome" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.COMMA_PLUS_APOTOME,
        })
        expect(parseCommaName("1/5-Small-Diesis-Plus-Apotome" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.SMALL_DIESIS_PLUS_APOTOME,
        })
        expect(parseCommaName("1/5-Medium-Diesis-Plus-Apotome" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.MEDIUM_DIESIS_PLUS_APOTOME,
        })
        expect(parseCommaName("1/5-Large-Diesis-Plus-Apotome" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.LARGE_DIESIS_PLUS_APOTOME,
        })
        expect(parseCommaName("1/5-Small-Semitone-Plus-Apotome" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.SMALL_SEMITONE_PLUS_APOTOME,
        })
        expect(parseCommaName("1/5-Limma-Plus-Apotome" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.LIMMA_PLUS_APOTOME,
        })
        expect(parseCommaName("1/5-Large-Semitone-Plus-Apotome" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.LARGE_SEMITONE_PLUS_APOTOME,
        })
        expect(parseCommaName("1/5-Double-Apotome" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.DOUBLE_APOTOME,
        })
    })

    it("works for 3-limit names", (): void => {
        expect(parseCommaName("3k" as Io)).toEqual({
            commaNameQuotient: [3, 1] as CommaNameQuotient,
            sizeCategory: SizeCategory.KLEISMA,
        })
        expect(parseCommaName("3C" as Io)).toEqual({
            commaNameQuotient: [3, 1] as CommaNameQuotient,
            sizeCategory: SizeCategory.COMMA,
        })
    })

    it("works for alternatively capitalized versions of the size category names", (): void => {
        expect(parseCommaName("1/5-Unison" as Io)) // Not that this is a real thing or anything
            .toEqual({ commaNameQuotient, sizeCategory: SizeCategory.UNISON })
        expect(parseCommaName("1/5-Schismina" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.SCHISMINA,
        })
        expect(parseCommaName("1/5-Schisma" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.SCHISMA,
        })
        expect(parseCommaName("1/5-Kleisma" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.KLEISMA,
        })
        expect(parseCommaName("1/5-comma" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.COMMA,
        })
        expect(parseCommaName("1/5-small-diesis" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.SMALL_DIESIS,
        })
        expect(parseCommaName("1/5-medium-diesis" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.MEDIUM_DIESIS,
        })
        expect(parseCommaName("1/5-large-diesis" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.LARGE_DIESIS,
        })
        expect(parseCommaName("1/5-small-semitone" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.SMALL_SEMITONE,
        })
        expect(parseCommaName("1/5-medium-semitone" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.MEDIUM_SEMITONE,
        })
        expect(parseCommaName("1/5-large-semitone" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.LARGE_SEMITONE,
        })
        expect(parseCommaName("1/5-apotome" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.APOTOME,
        })
        expect(parseCommaName("1/5-schisma-plus-apotome" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.SCHISMA_PLUS_APOTOME,
        })
        expect(parseCommaName("1/5-kleisma-plus-apotome" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.KLEISMA_PLUS_APOTOME,
        })
        expect(parseCommaName("1/5-comma-plus-apotome" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.COMMA_PLUS_APOTOME,
        })
        expect(parseCommaName("1/5-small-diesis-plus-apotome" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.SMALL_DIESIS_PLUS_APOTOME,
        })
        expect(parseCommaName("1/5-medium-diesis-plus-apotome" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.MEDIUM_DIESIS_PLUS_APOTOME,
        })
        expect(parseCommaName("1/5-large-diesis-plus-apotome" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.LARGE_DIESIS_PLUS_APOTOME,
        })
        expect(parseCommaName("1/5-small-semitone-plus-apotome" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.SMALL_SEMITONE_PLUS_APOTOME,
        })
        expect(parseCommaName("1/5-limma-plus-apotome" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.LIMMA_PLUS_APOTOME,
        })
        expect(parseCommaName("1/5-large-semitone-plus-apotome" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.LARGE_SEMITONE_PLUS_APOTOME,
        })
        expect(parseCommaName("1/5-double-apotome" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.DOUBLE_APOTOME,
        })
    })

    it("works for alternative size category names", (): void => {
        expect(parseCommaName("1/5-atom" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.SCHISMINA,
        })
        expect(parseCommaName("1/5-skismina" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.SCHISMINA,
        })
        expect(parseCommaName("1/5-skhismina" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.SCHISMINA,
        })

        expect(parseCommaName("1/5-skisma" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.SCHISMA,
        })
        expect(parseCommaName("1/5-skhisma" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.SCHISMA,
        })

        expect(parseCommaName("1/5-semicomma" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.KLEISMA,
        })

        expect(parseCommaName("1/5-diaschisma" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.COMMA,
        })
        expect(parseCommaName("1/5-diaskisma" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.COMMA,
        })
        expect(parseCommaName("1/5-diaskhisma" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.COMMA,
        })

        expect(parseCommaName("1/5-minor-diesis" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.SMALL_DIESIS,
        })
        expect(parseCommaName("1/5-fifth-tone" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.SMALL_DIESIS,
        })

        expect(parseCommaName("1/5-diesis" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.MEDIUM_DIESIS,
        })
        expect(parseCommaName("1/5-quarter-tone" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.MEDIUM_DIESIS,
        })
        expect(parseCommaName("1/5-enharmonic-diesis" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.MEDIUM_DIESIS,
        })
        expect(parseCommaName("1/5-enharmonic" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.MEDIUM_DIESIS,
        })

        expect(parseCommaName("1/5-major-diesis" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.LARGE_DIESIS,
        })
        expect(parseCommaName("1/5-third-tone" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.LARGE_DIESIS,
        })

        expect(parseCommaName("1/5-chromatic-semitone" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.SMALL_SEMITONE,
        })

        expect(parseCommaName("1/5-semitone" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.MEDIUM_SEMITONE,
        })
        expect(parseCommaName("1/5-limma" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.MEDIUM_SEMITONE,
        })

        expect(parseCommaName("1/5-diatonic-semitone" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.LARGE_SEMITONE,
        })

        expect(parseCommaName("1/5-neutral-second" as Io)).toEqual({
            commaNameQuotient,
            sizeCategory: SizeCategory.SMALL_DIESIS_PLUS_APOTOME,
        })
    })

    it("uses direction of the comma name quotient to indicate direction of the comma (not the prime content), but you can override either direction in the comma name quotient by suffixing 'up' or 'down'", (): void => {
        const sizeCategory = SizeCategory.COMMA

        expect(parseCommaName("5C" as Io)).toEqual({
            sizeCategory,
            commaNameQuotient: [5, 1] as CommaNameQuotient,
        })
        expect(parseCommaName("5C up" as Io)).toEqual({
            sizeCategory,
            commaNameQuotient: [5, 1] as CommaNameQuotient,
            direction: Direction.SUPER,
        })
        expect(parseCommaName("5C down" as Io)).toEqual({
            sizeCategory,
            commaNameQuotient: [5, 1] as CommaNameQuotient,
            direction: Direction.SUB,
        })
    })

    it("handles factorized comma names", (): void => {
        expect(parseCommaName("1/(5²⋅7)M" as Io)).toEqual({
            sizeCategory: SizeCategory.MEDIUM_DIESIS,
            commaNameQuotient: [1, 175] as CommaNameQuotient,
        })
        expect(parseCommaName("1/(5^2*7)M" as Io)).toEqual({
            sizeCategory: SizeCategory.MEDIUM_DIESIS,
            commaNameQuotient: [1, 175] as CommaNameQuotient,
        })
    })
})
