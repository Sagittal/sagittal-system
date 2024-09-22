import { HexColor } from "@sagittal/general"
import {
    computeSectionColor,
    EDO_NOTATION_DEFINITIONS,
    EdoName,
    parseEdoName,
} from "../../../../src"
import { SectionColor } from "../../../../src/notations/edo/types"

const BEST_FIFTH_SECTION_COLORS_FROM_PT: Record<SectionColor, EdoName[]> = {
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
    ] as EdoName[],
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
    ] as EdoName[],
    [SectionColor.BLUE]: [
        "17",
        "34",
        "39",
        "46",
        "51",
        "56",
        "63",
        "68",
    ] as EdoName[],
    [SectionColor.MAGENTA]: ["29", "58", "70"] as EdoName[],
    [SectionColor.GREY]: ["41", "53", "65"] as EdoName[],
    [SectionColor.ORANGE]: ["12", "24", "36", "48", "60", "72"] as EdoName[],
    [SectionColor.PINK]: [],
    [SectionColor.YELLOW]: ["43", "55", "67"] as EdoName[],
    [SectionColor.CYAN]: [
        "19",
        "31",
        "38",
        "50",
        "57",
        "62",
        "69",
    ] as EdoName[],
    [SectionColor.PURPLE]: ["26", "45", "52", "59b", "64", "71b"] as EdoName[],
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
    ] as EdoName[],
    [SectionColor.WHITE]: [],
}

const switchSlicingToBeByEdoNameThenColorAsHexColor = (
    sectionColors: Record<SectionColor, EdoName[]>,
): Record<EdoName, HexColor> =>
    Object.entries(sectionColors).reduce(
        (
            sectionColorsAsHexColorByEdoName: Record<EdoName, HexColor>,
            [sectionColor, edoNames]: [string, EdoName[]],
        ): Record<EdoName, HexColor> => {
            edoNames.forEach((edoName: EdoName): void => {
                sectionColorsAsHexColorByEdoName[edoName] =
                    sectionColor as HexColor
            })
            return sectionColorsAsHexColorByEdoName
        },
        {} as Record<EdoName, HexColor>,
    )

const BEST_FIFTH_SECTION_COLORS_FROM_PT_BY_EDO_NAME_AND_AS_HEX_COLOR: Record<
    EdoName,
    HexColor
> = switchSlicingToBeByEdoNameThenColorAsHexColor(
    BEST_FIFTH_SECTION_COLORS_FROM_PT,
)

const sectionColorFromHexColor = (hexColor: HexColor) =>
    Object.keys(SectionColor)[
        Object.values(SectionColor).indexOf(hexColor as SectionColor)
    ]

describe("computeSectionColor", (): void => {
    it("chooses the correct colors for all the EDOs", (): void => {
        const edoNames: EdoName[] = Object.keys(
            EDO_NOTATION_DEFINITIONS,
        ) as EdoName[]

        edoNames.forEach((edoName: EdoName): void => {
            if (parseEdoName(edoName).edo > 72) return

            const actual: HexColor = computeSectionColor(edoName)
            const expected: HexColor =
                BEST_FIFTH_SECTION_COLORS_FROM_PT_BY_EDO_NAME_AND_AS_HEX_COLOR[
                    edoName
                ]

            expect(actual)
                .withContext(
                    `Expected ${edoName} to be ${sectionColorFromHexColor(
                        expected,
                    )}, but was instead ${sectionColorFromHexColor(actual)}`,
                )
                .toEqual(expected)
        })
    })
})
