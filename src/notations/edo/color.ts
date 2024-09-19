import { HexColor } from "@sagittal/general"
import { Edo, SectionColor } from "./types"

// TODO: eventually use a formula, and this hardcoded thing is just the test.
/*
The non-linear function is in two-pieces.
left = (fifthCents-700)/(100/7)
right = (700-fifthCents)/(100/5)
groupNumber
= IF(fifthCents>700,
10 - 72/7 * left/(left+1),
10 + 72/5 * right/(right+1))
*/

const BEST_FIFTH_SECTION_COLORS: Record<SectionColor, Edo[]> = {
    [SectionColor.BLACK]: [],
    [SectionColor.GOLD]: [
        5, 6, 8, 10, 13, 15, 18, 20, 25, 30, 32, 37, 42,
    ] as Edo[],
    [SectionColor.GREEN]: [22, 27, 44, 49, 54, 59, 61, 66, 71] as Edo[],
    [SectionColor.BLUE]: [17, 34, 39, 46, 51, 56, 63, 68] as Edo[],
    [SectionColor.MAGENTA]: [29, 58, 70] as Edo[],
    [SectionColor.GREY]: [41, 53, 65] as Edo[],
    [SectionColor.ORANGE]: [12, 24, 36, 48, 60, 72] as Edo[],
    [SectionColor.PINK]: [],
    [SectionColor.YELLOW]: [43, 55, 67] as Edo[],
    [SectionColor.CYAN]: [19, 31, 38, 50, 57, 62, 69] as Edo[],
    [SectionColor.PURPLE]: [26, 45, 52, 64] as Edo[],
    [SectionColor.ROSE]: [
        7, 9, 11, 14, 16, 21, 23, 28, 33, 35, 40, 47,
    ] as Edo[],
    [SectionColor.WHITE]: [],
}

const SECOND_BEST_FIFTH_SECTION_COLORS: Record<SectionColor, Edo[]> = {
    [SectionColor.BLACK]: [],
    [SectionColor.GOLD]: [23, 35, 47, 64] as Edo[],
    [SectionColor.GREEN]: [] as Edo[],
    [SectionColor.BLUE]: [] as Edo[],
    [SectionColor.MAGENTA]: [] as Edo[],
    [SectionColor.GREY]: [] as Edo[],
    [SectionColor.ORANGE]: [] as Edo[],
    [SectionColor.PINK]: [],
    [SectionColor.YELLOW]: [] as Edo[],
    [SectionColor.CYAN]: [] as Edo[],
    [SectionColor.PURPLE]: [59, 71] as Edo[],
    [SectionColor.ROSE]: [30, 42] as Edo[],
    [SectionColor.WHITE]: [],
}

const switchSlicingToBeByEdoThenColor = (
    sectionColors: Record<SectionColor, Edo[]>,
): Record<Edo, SectionColor> =>
    Object.entries(sectionColors).reduce(
        (
            sectionColorsByEdo: Record<Edo, SectionColor>,
            [sectionColor, edoList]: [string, Edo[]],
        ): Record<Edo, SectionColor> => {
            edoList.forEach((edo: Edo): void => {
                sectionColorsByEdo[edo] = sectionColor as SectionColor
            })
            return sectionColorsByEdo
        },
        {} as Record<Edo, SectionColor>,
    )

const BEST_FIFTH_SECTION_COLORS_BY_EDO: Record<Edo, SectionColor> =
    switchSlicingToBeByEdoThenColor(BEST_FIFTH_SECTION_COLORS)

const SECOND_BEST_FIFTH_SECTION_COLORS_BY_EDO: Record<Edo, SectionColor> =
    switchSlicingToBeByEdoThenColor(SECOND_BEST_FIFTH_SECTION_COLORS)

const computeSectionColor = (edo: Edo, useSecondBestFifth: boolean): HexColor =>
    (useSecondBestFifth
        ? SECOND_BEST_FIFTH_SECTION_COLORS_BY_EDO[edo]
        : BEST_FIFTH_SECTION_COLORS_BY_EDO[edo]) as HexColor

export { computeSectionColor }
