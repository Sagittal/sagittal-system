import { HexColor } from "@sagittal/general"
import {
    computeSectionColor,
    EDO_NOTATION_DEFINITIONS,
    EdoNotationName,
    parseEdoNotationName,
} from "../../../../src"
import { SectionColor } from "../../../../src/notations/edo/types"

const BEST_FIFTH_SECTION_COLORS_FROM_PT: Record<
    SectionColor,
    EdoNotationName[]
> = {
    [SectionColor.BLACK]: [],
    [SectionColor.GOLD]: [
        "5",
        "6",
        "8",
        "10",
        "13",
        "15",
        "18",
        "20",
        "23b",
        "25",
        "30",
        "32",
        "35b",
        "37",
        "42",
        "47b",
        "64b",
    ] as EdoNotationName[],
    [SectionColor.GREEN]: [
        "22",
        "27",
        "44",
        "49",
        "54",
        "59",
        "61",
        "66",
        "71",
    ] as EdoNotationName[],
    [SectionColor.BLUE]: [
        "17",
        "34",
        "39",
        "46",
        "51",
        "56",
        "63",
        "68",
    ] as EdoNotationName[],
    [SectionColor.MAGENTA]: ["29", "58", "70"] as EdoNotationName[],
    [SectionColor.GREY]: ["41", "53", "65"] as EdoNotationName[],
    [SectionColor.ORANGE]: [
        "12",
        "24",
        "36",
        "48",
        "60",
        "72",
    ] as EdoNotationName[],
    [SectionColor.PINK]: [],
    [SectionColor.YELLOW]: ["43", "55", "67"] as EdoNotationName[],
    [SectionColor.CYAN]: [
        "19",
        "31",
        "38",
        "50",
        "57",
        "62",
        "69",
    ] as EdoNotationName[],
    [SectionColor.PURPLE]: [
        "26",
        "45",
        "52",
        "59b",
        "64",
        "71b",
    ] as EdoNotationName[],
    [SectionColor.ROSE]: [
        "7",
        "9",
        "11",
        "14",
        "16",
        "21",
        "23",
        "28",
        "30b",
        "33",
        "35",
        "40",
        "42b",
        "47",
    ] as EdoNotationName[],
    [SectionColor.WHITE]: [],
}

const switchSlicingToBeByEdoNotationNameThenColorAsHexColor = (
    sectionColors: Record<SectionColor, EdoNotationName[]>,
): Record<EdoNotationName, HexColor> =>
    Object.entries(sectionColors).reduce(
        (
            sectionColorsAsHexColorByEdoNotationName: Record<EdoNotationName, HexColor>,
            [sectionColor, edoNotationNames]: [string, EdoNotationName[]],
        ): Record<EdoNotationName, HexColor> => {
            edoNotationNames.forEach(
                (edoNotationName: EdoNotationName): void => {
                    sectionColorsAsHexColorByEdoNotationName[edoNotationName] =
                        sectionColor as HexColor
                },
            )
            return sectionColorsAsHexColorByEdoNotationName
        },
        {} as Record<EdoNotationName, HexColor>,
    )

const BEST_FIFTH_SECTION_COLORS_FROM_PT_BY_EDO_NAME_AND_AS_HEX_COLOR: Record<
    EdoNotationName,
    HexColor
> = switchSlicingToBeByEdoNotationNameThenColorAsHexColor(
    BEST_FIFTH_SECTION_COLORS_FROM_PT,
)

const sectionColorFromHexColor = (hexColor: HexColor) =>
    Object.keys(SectionColor)[
        Object.values(SectionColor).indexOf(hexColor as SectionColor)
    ]

describe("computeSectionColor", (): void => {
    it("chooses the correct colors for all the EDOs", (): void => {
        const edoNotationNames: EdoNotationName[] = Object.keys(
            EDO_NOTATION_DEFINITIONS,
        ) as EdoNotationName[]

        edoNotationNames.forEach((edoNotationName: EdoNotationName): void => {
            if (parseEdoNotationName(edoNotationName).edo > 72) return

            const actual: HexColor = computeSectionColor(edoNotationName)
            const expected: HexColor =
                BEST_FIFTH_SECTION_COLORS_FROM_PT_BY_EDO_NAME_AND_AS_HEX_COLOR[
                    edoNotationName
                ]

            expect(actual)
                .withContext(
                    `Expected ${edoNotationName} to be ${sectionColorFromHexColor(
                        expected,
                    )}, but was instead ${sectionColorFromHexColor(actual)}`,
                )
                .toEqual(expected)
        })
    })
})
