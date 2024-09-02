import { camelCaseToConstantCase, isUndefined } from "@sagittal/general"
import { Sagitype, Compatible, Smiley, Unicode } from "../../../../../src"
import { AccentId, HeadId } from "../../../../../src/accidental"
import { Shafts } from "../../../../../src/accidental/sagittal"
import {
    computeAccentGlyphExpectation,
    computeCompatibleGlyphExpectation,
    computeCoreGlyphExpectation,
} from "../../../../helpers/src/accidental/glyph/glyphExpectation"
import { GlyphExpectation } from "../../../../helpers/src/accidental/glyph/types"

describe("glyphs", (): void => {
    it("has the correct core glyphs and computes their IO correctly", (): void => {
        const coreGlyphExpectations: Record<string, GlyphExpectation> = {}

        Object.values(HeadId).forEach((headId: HeadId): void => {
            Object.values(Shafts).forEach((shafts: Shafts): void => {
                [false, true].forEach((down: boolean): void => {
                    const coreGlyphExpectation = computeCoreGlyphExpectation(headId, { shafts, down })
                    const nameArray = [camelCaseToConstantCase(headId)] as string[]
                    if (shafts !== Shafts.SINGLE) nameArray.push(camelCaseToConstantCase(shafts))
                    if (down) nameArray.push("DOWN")
                    const name = nameArray.join("_")

                    if (!isUndefined(coreGlyphExpectation)) coreGlyphExpectations[name] = coreGlyphExpectation
                })
            })
        })

        const expected: Record<string, GlyphExpectation> = {
            RIGHT_SCROLL: {
                unicode: "" as Unicode,
                sagitype: "|(" as Sagitype,
                smiley: ":|(:" as Smiley,
            },
            RIGHT_SCROLL_DOWN: {
                unicode: "" as Unicode,
                sagitype: "!(" as Sagitype,
                smiley: ":!(:" as Smiley,
            },
            LEFT_BARB: {
                unicode: "" as Unicode,
                sagitype: "/|" as Sagitype,
                smiley: ":/|:" as Smiley,
            },
            LEFT_BARB_DOWN: {
                unicode: "" as Unicode,
                sagitype: "\\!" as Sagitype,
                smiley: ":\\!:" as Smiley,
            },
            RIGHT_ARC: {
                unicode: "" as Unicode,
                sagitype: "|)" as Sagitype,
                smiley: ":|):" as Smiley,
            },
            RIGHT_ARC_DOWN: {
                unicode: "" as Unicode,
                sagitype: "!)" as Sagitype,
                smiley: ":!):" as Smiley,
            },
            DOUBLE_LEFT_BARB: {
                unicode: "" as Unicode,
                sagitype: "//|" as Sagitype,
                smiley: ":/ /|:" as Smiley,
            },
            DOUBLE_LEFT_BARB_DOWN: {
                unicode: "" as Unicode,
                sagitype: "\\\\!" as Sagitype,
                smiley: ":\\ \\!:" as Smiley,
            },
            BARB_AND_ARC: {
                unicode: "" as Unicode,
                sagitype: "/|)" as Sagitype,
                smiley: ":/|):" as Smiley,
            },
            BARB_AND_ARC_DOWN: {
                unicode: "" as Unicode,
                sagitype: "\\!)" as Sagitype,
                smiley: ":\\!):" as Smiley,
            },
            DOUBLE_BARB: {
                unicode: "" as Unicode,
                sagitype: "/|\\" as Sagitype,
                smiley: ":/|\\:" as Smiley,
            },
            DOUBLE_BARB_DOWN: {
                unicode: "" as Unicode,
                sagitype: "\\!/" as Sagitype,
                smiley: ":\\!/:" as Smiley,
            },
            DOUBLE_ARC: {
                unicode: "" as Unicode,
                sagitype: "(|)" as Sagitype,
                smiley: ":(|):" as Smiley,
            },
            DOUBLE_ARC_DOWN: {
                unicode: "" as Unicode,
                sagitype: "(!)" as Sagitype,
                smiley: ":(!):" as Smiley,
            },
            ARC_AND_BARB: {
                unicode: "" as Unicode,
                sagitype: "(|\\" as Sagitype,
                smiley: ":(|\\:" as Smiley,
            },
            ARC_AND_BARB_DOWN: {
                unicode: "" as Unicode,
                sagitype: "(!/" as Sagitype,
                smiley: ":(!/:" as Smiley,
            },
            DOUBLE_SCROLL_DOUBLE: {
                unicode: "" as Unicode,
                sagitype: ")||(" as Sagitype,
                smiley: ":)||(:" as Smiley,
            },
            DOUBLE_SCROLL_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: ")!!(" as Sagitype,
                smiley: ":)!!(:" as Smiley,
            },
            RIGHT_ARC_DOUBLE: {
                unicode: "" as Unicode,
                sagitype: "||)" as Sagitype,
                smiley: ":||):" as Smiley,
            },
            RIGHT_ARC_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "!!)" as Sagitype,
                smiley: ":!!):" as Smiley,
            },
            RIGHT_BARB_DOUBLE: {
                unicode: "" as Unicode,
                sagitype: "||\\" as Sagitype,
                smiley: ":||\\:" as Smiley,
            },
            RIGHT_BARB_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "!!/" as Sagitype,
                smiley: ":!!/:" as Smiley,
            },
            BARB_AND_ARC_DOUBLE: {
                unicode: "" as Unicode,
                sagitype: "/||)" as Sagitype,
                smiley: ":/||):" as Smiley,
            },
            BARB_AND_ARC_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "\\!!)" as Sagitype,
                smiley: ":\\!!):" as Smiley,
            },
            DOUBLE_BARB_DOUBLE: {
                unicode: "" as Unicode,
                sagitype: "/||\\" as Sagitype,
                smiley: ":/||\\:" as Smiley,
            },
            DOUBLE_BARB_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "\\!!/" as Sagitype,
                smiley: ":\\!!/:" as Smiley,
            },
            RIGHT_SCROLL_TRIPLE: {
                unicode: "" as Unicode,
                sagitype: "|||(" as Sagitype,
                smiley: ":|||(:" as Smiley,
            },
            RIGHT_SCROLL_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "!!!(" as Sagitype,
                smiley: ":!!!(:" as Smiley,
            },
            LEFT_BARB_TRIPLE: {
                unicode: "" as Unicode,
                sagitype: "/|||" as Sagitype,
                smiley: ":/|||:" as Smiley,
            },
            LEFT_BARB_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "\\!!!" as Sagitype,
                smiley: ":\\!!!:" as Smiley,
            },
            RIGHT_ARC_TRIPLE: {
                unicode: "" as Unicode,
                sagitype: "|||)" as Sagitype,
                smiley: ":|||):" as Smiley,
            },
            RIGHT_ARC_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "!!!)" as Sagitype,
                smiley: ":!!!):" as Smiley,
            },
            DOUBLE_LEFT_BARB_TRIPLE: {
                unicode: "" as Unicode,
                sagitype: "//|||" as Sagitype,
                smiley: ":/ /|||:" as Smiley,
            },
            DOUBLE_LEFT_BARB_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "\\\\!!!" as Sagitype,
                smiley: ":\\ \\!!!:" as Smiley,
            },
            BARB_AND_ARC_TRIPLE: {
                unicode: "" as Unicode,
                sagitype: "/|||)" as Sagitype,
                smiley: ":/|||):" as Smiley,
            },
            BARB_AND_ARC_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "\\!!!)" as Sagitype,
                smiley: ":\\!!!):" as Smiley,
            },
            DOUBLE_BARB_TRIPLE: {
                unicode: "" as Unicode,
                sagitype: "/|||\\" as Sagitype,
                smiley: ":/|||\\:" as Smiley,
            },
            DOUBLE_BARB_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "\\!!!/" as Sagitype,
                smiley: ":\\!!!/:" as Smiley,
            },
            DOUBLE_ARC_TRIPLE: {
                unicode: "" as Unicode,
                sagitype: "(|||)" as Sagitype,
                smiley: ":(|||):" as Smiley,
            },
            DOUBLE_ARC_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "(!!!)" as Sagitype,
                smiley: ":(!!!):" as Smiley,
            },
            ARC_AND_BARB_TRIPLE: {
                unicode: "" as Unicode,
                sagitype: "(|||\\" as Sagitype,
                smiley: ":(|||\\:" as Smiley,
            },
            ARC_AND_BARB_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "(!!!/" as Sagitype,
                smiley: ":(!!!/:" as Smiley,
            },
            DOUBLE_SCROLL_EX: {
                unicode: "" as Unicode,
                sagitype: ")X(" as Sagitype,
                smiley: ":)X(:" as Smiley,
            },
            DOUBLE_SCROLL_EX_DOWN: {
                unicode: "" as Unicode,
                sagitype: ")Y(" as Sagitype,
                smiley: ":)Y(:" as Smiley,
            },
            RIGHT_ARC_EX: {
                unicode: "" as Unicode,
                sagitype: "X)" as Sagitype,
                smiley: ":X):" as Smiley,
            },
            RIGHT_ARC_EX_DOWN: {
                unicode: "" as Unicode,
                sagitype: "Y)" as Sagitype,
                smiley: ":Y):" as Smiley,
            },
            RIGHT_BARB_EX: {
                unicode: "" as Unicode,
                sagitype: "X\\" as Sagitype,
                smiley: ":X\\:" as Smiley,
            },
            RIGHT_BARB_EX_DOWN: {
                unicode: "" as Unicode,
                sagitype: "Y/" as Sagitype,
                smiley: ":Y/:" as Smiley,
            },
            BARB_AND_ARC_EX: {
                unicode: "" as Unicode,
                sagitype: "/X)" as Sagitype,
                smiley: ":/X):" as Smiley,
            },
            BARB_AND_ARC_EX_DOWN: {
                unicode: "" as Unicode,
                sagitype: "\\Y)" as Sagitype,
                smiley: ":\\Y):" as Smiley,
            },
            DOUBLE_BARB_EX: {
                unicode: "" as Unicode,
                sagitype: "/X\\" as Sagitype,
                smiley: ":/X\\:" as Smiley,
            },
            DOUBLE_BARB_EX_DOWN: {
                unicode: "" as Unicode,
                sagitype: "\\Y/" as Sagitype,
                smiley: ":\\Y/:" as Smiley,
            },
            DOUBLE_SCROLL: {
                unicode: "" as Unicode,
                sagitype: ")|(" as Sagitype,
                smiley: ":)|(:" as Smiley,
            },
            DOUBLE_SCROLL_DOWN: {
                unicode: "" as Unicode,
                sagitype: ")!(" as Sagitype,
                smiley: ":)!(:" as Smiley,
            },
            BOATHOOK_AND_SCROLL: {
                unicode: "" as Unicode,
                sagitype: "~|(" as Sagitype,
                smiley: ":~|(:" as Smiley,
            },
            BOATHOOK_AND_SCROLL_DOWN: {
                unicode: "" as Unicode,
                sagitype: "~!(" as Sagitype,
                smiley: ":~!(:" as Smiley,
            },
            RIGHT_BARB: {
                unicode: "" as Unicode,
                sagitype: "|\\" as Sagitype,
                smiley: ":|\\:" as Smiley,
            },
            RIGHT_BARB_DOWN: {
                unicode: "" as Unicode,
                sagitype: "!/" as Sagitype,
                smiley: ":!/:" as Smiley,
            },
            LEFT_ARC: {
                unicode: "" as Unicode,
                sagitype: "(|" as Sagitype,
                smiley: ":(|:" as Smiley,
            },
            LEFT_ARC_DOWN: {
                unicode: "" as Unicode,
                sagitype: "(!" as Sagitype,
                smiley: ":(!:" as Smiley,
            },
            ARC_AND_SCROLL: {
                unicode: "" as Unicode,
                sagitype: "(|(" as Sagitype,
                smiley: ":(|(:" as Smiley,
            },
            ARC_AND_SCROLL_DOWN: {
                unicode: "" as Unicode,
                sagitype: "(!(" as Sagitype,
                smiley: ":(!(:" as Smiley,
            },
            BOATHOOK_AND_SCROLL_DOUBLE: {
                unicode: "" as Unicode,
                sagitype: "~||(" as Sagitype,
                smiley: ":~||(:" as Smiley,
            },
            BOATHOOK_AND_SCROLL_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "~!!(" as Sagitype,
                smiley: ":~!!(:" as Smiley,
            },
            SCROLL_AND_BOATHOOK_DOUBLE: {
                unicode: "" as Unicode,
                sagitype: ")||~" as Sagitype,
                smiley: ":)||~:" as Smiley,
            },
            SCROLL_AND_BOATHOOK_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: ")!!~" as Sagitype,
                smiley: ":)!!~:" as Smiley,
            },
            LEFT_BARB_DOUBLE: {
                unicode: "" as Unicode,
                sagitype: "/||" as Sagitype,
                smiley: ":/||:" as Smiley,
            },
            LEFT_BARB_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "\\!!" as Sagitype,
                smiley: ":\\!!:" as Smiley,
            },
            ARC_AND_SCROLL_DOUBLE: {
                unicode: "" as Unicode,
                sagitype: "(||(" as Sagitype,
                smiley: ":(||(:" as Smiley,
            },
            ARC_AND_SCROLL_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "(!!(" as Sagitype,
                smiley: ":(!!(:" as Smiley,
            },
            DOUBLE_LEFT_BARB_DOUBLE: {
                unicode: "" as Unicode,
                sagitype: "//||" as Sagitype,
                smiley: ":/ /||:" as Smiley,
            },
            DOUBLE_LEFT_BARB_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "\\\\!!" as Sagitype,
                smiley: ":\\ \\!!:" as Smiley,
            },
            DOUBLE_SCROLL_TRIPLE: {
                unicode: "" as Unicode,
                sagitype: ")|||(" as Sagitype,
                smiley: ":)|||(:" as Smiley,
            },
            DOUBLE_SCROLL_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: ")!!!(" as Sagitype,
                smiley: ":)!!!(:" as Smiley,
            },
            BOATHOOK_AND_SCROLL_TRIPLE: {
                unicode: "" as Unicode,
                sagitype: "~|||(" as Sagitype,
                smiley: ":~|||(:" as Smiley,
            },
            BOATHOOK_AND_SCROLL_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "~!!!(" as Sagitype,
                smiley: ":~!!!(:" as Smiley,
            },
            RIGHT_BARB_TRIPLE: {
                unicode: "" as Unicode,
                sagitype: "|||\\" as Sagitype,
                smiley: ":|||\\:" as Smiley,
            },
            RIGHT_BARB_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "!!!/" as Sagitype,
                smiley: ":!!!/:" as Smiley,
            },
            LEFT_ARC_TRIPLE: {
                unicode: "" as Unicode,
                sagitype: "(|||" as Sagitype,
                smiley: ":(|||:" as Smiley,
            },
            LEFT_ARC_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "(!!!" as Sagitype,
                smiley: ":(!!!:" as Smiley,
            },
            ARC_AND_SCROLL_TRIPLE: {
                unicode: "" as Unicode,
                sagitype: "(|||(" as Sagitype,
                smiley: ":(|||(:" as Smiley,
            },
            ARC_AND_SCROLL_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "(!!!(" as Sagitype,
                smiley: ":(!!!(:" as Smiley,
            },
            BOATHOOK_AND_SCROLL_EX: {
                unicode: "" as Unicode,
                sagitype: "~X(" as Sagitype,
                smiley: ":~X(:" as Smiley,
            },
            BOATHOOK_AND_SCROLL_EX_DOWN: {
                unicode: "" as Unicode,
                sagitype: "~Y(" as Sagitype,
                smiley: ":~Y(:" as Smiley,
            },
            SCROLL_AND_BOATHOOK_EX: {
                unicode: "" as Unicode,
                sagitype: ")X~" as Sagitype,
                smiley: ":)X~:" as Smiley,
            },
            SCROLL_AND_BOATHOOK_EX_DOWN: {
                unicode: "" as Unicode,
                sagitype: ")Y~" as Sagitype,
                smiley: ":)Y~:" as Smiley,
            },
            LEFT_BARB_EX: {
                unicode: "" as Unicode,
                sagitype: "/X" as Sagitype,
                smiley: ":/X:" as Smiley,
            },
            LEFT_BARB_EX_DOWN: {
                unicode: "" as Unicode,
                sagitype: "\\Y" as Sagitype,
                smiley: ":\\Y:" as Smiley,
            },
            ARC_AND_SCROLL_EX: {
                unicode: "" as Unicode,
                sagitype: "(X(" as Sagitype,
                smiley: ":(X(:" as Smiley,
            },
            ARC_AND_SCROLL_EX_DOWN: {
                unicode: "" as Unicode,
                sagitype: "(Y(" as Sagitype,
                smiley: ":(Y(:" as Smiley,
            },
            DOUBLE_LEFT_BARB_EX: {
                unicode: "" as Unicode,
                sagitype: "//X" as Sagitype,
                smiley: ":/ /X:" as Smiley,
            },
            DOUBLE_LEFT_BARB_EX_DOWN: {
                unicode: "" as Unicode,
                sagitype: "\\\\Y" as Sagitype,
                smiley: ":\\ \\Y:" as Smiley,
            },
            RIGHT_BOATHOOK: {
                unicode: "" as Unicode,
                sagitype: "|~" as Sagitype,
                smiley: ":|~:" as Smiley,
            },
            RIGHT_BOATHOOK_DOWN: {
                unicode: "" as Unicode,
                sagitype: "!~" as Sagitype,
                smiley: ":!~:" as Smiley,
            },
            LEFT_SCROLL_AND_BARB: {
                unicode: "" as Unicode,
                sagitype: ")/|" as Sagitype,
                smiley: ":)/|:" as Smiley,
            },
            LEFT_SCROLL_AND_BARB_DOWN: {
                unicode: "" as Unicode,
                sagitype: ")\\!" as Sagitype,
                smiley: ":)\\!:" as Smiley,
            },
            BARB_AND_BOATHOOK: {
                unicode: "" as Unicode,
                sagitype: "/|~" as Sagitype,
                smiley: ":/|~:" as Smiley,
            },
            BARB_AND_BOATHOOK_DOWN: {
                unicode: "" as Unicode,
                sagitype: "\\!~" as Sagitype,
                smiley: ":\\!~:" as Smiley,
            },
            RIGHT_BOATHOOK_DOUBLE: {
                unicode: "" as Unicode,
                sagitype: "||~" as Sagitype,
                smiley: ":||~:" as Smiley,
            },
            RIGHT_BOATHOOK_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "!!~" as Sagitype,
                smiley: ":!!~:" as Smiley,
            },
            SCROLL_AND_ARC_DOUBLE: {
                unicode: "" as Unicode,
                sagitype: ")||)" as Sagitype,
                smiley: ":)||):" as Smiley,
            },
            SCROLL_AND_ARC_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: ")!!)" as Sagitype,
                smiley: ":)!!):" as Smiley,
            },
            BARB_AND_BOATHOOK_DOUBLE: {
                unicode: "" as Unicode,
                sagitype: "/||~" as Sagitype,
                smiley: ":/||~:" as Smiley,
            },
            BARB_AND_BOATHOOK_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "\\!!~" as Sagitype,
                smiley: ":\\!!~:" as Smiley,
            },
            RIGHT_BOATHOOK_TRIPLE: {
                unicode: "" as Unicode,
                sagitype: "|||~" as Sagitype,
                smiley: ":|||~:" as Smiley,
            },
            RIGHT_BOATHOOK_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "!!!~" as Sagitype,
                smiley: ":!!!~:" as Smiley,
            },
            LEFT_SCROLL_AND_BARB_TRIPLE: {
                unicode: "" as Unicode,
                sagitype: ")/|||" as Sagitype,
                smiley: ":)/|||:" as Smiley,
            },
            LEFT_SCROLL_AND_BARB_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: ")\\!!!" as Sagitype,
                smiley: ":)\\!!!:" as Smiley,
            },
            BARB_AND_BOATHOOK_TRIPLE: {
                unicode: "" as Unicode,
                sagitype: "/|||~" as Sagitype,
                smiley: ":/|||~:" as Smiley,
            },
            BARB_AND_BOATHOOK_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "\\!!!~" as Sagitype,
                smiley: ":\\!!!~:" as Smiley,
            },
            RIGHT_BOATHOOK_EX: {
                unicode: "" as Unicode,
                sagitype: "X~" as Sagitype,
                smiley: ":X~:" as Smiley,
            },
            RIGHT_BOATHOOK_EX_DOWN: {
                unicode: "" as Unicode,
                sagitype: "Y~" as Sagitype,
                smiley: ":Y~:" as Smiley,
            },
            SCROLL_AND_ARC_EX: {
                unicode: "" as Unicode,
                sagitype: ")X)" as Sagitype,
                smiley: ":)X):" as Smiley,
            },
            SCROLL_AND_ARC_EX_DOWN: {
                unicode: "" as Unicode,
                sagitype: ")Y)" as Sagitype,
                smiley: ":)Y):" as Smiley,
            },
            BARB_AND_BOATHOOK_EX: {
                unicode: "" as Unicode,
                sagitype: "/X~" as Sagitype,
                smiley: ":/X~:" as Smiley,
            },
            BARB_AND_BOATHOOK_EX_DOWN: {
                unicode: "" as Unicode,
                sagitype: "\\Y~" as Sagitype,
                smiley: ":\\Y~:" as Smiley,
            },
            LEFT_SCROLL: {
                unicode: "" as Unicode,
                sagitype: ")|" as Sagitype,
                smiley: ":)|:" as Smiley,
            },
            LEFT_SCROLL_DOWN: {
                unicode: "" as Unicode,
                sagitype: ")!" as Sagitype,
                smiley: ":)!:" as Smiley,
            },
            LEFT_BOATHOOK: {
                unicode: "" as Unicode,
                sagitype: "~|" as Sagitype,
                smiley: ":~|:" as Smiley,
            },
            LEFT_BOATHOOK_DOWN: {
                unicode: "" as Unicode,
                sagitype: "~!" as Sagitype,
                smiley: ":~!:" as Smiley,
            },
            LEFT_SCROLL_AND_BOATHOOK: {
                unicode: "" as Unicode,
                sagitype: ")~|" as Sagitype,
                smiley: ":)~|:" as Smiley,
            },
            LEFT_SCROLL_AND_BOATHOOK_DOWN: {
                unicode: "" as Unicode,
                sagitype: ")~!" as Sagitype,
                smiley: ":)~!:" as Smiley,
            },
            DOUBLE_LEFT_BOATHOOK: {
                unicode: "" as Unicode,
                sagitype: "~~|" as Sagitype,
                smiley: ":~~|:" as Smiley,
            },
            DOUBLE_LEFT_BOATHOOK_DOWN: {
                unicode: "" as Unicode,
                sagitype: "~~!" as Sagitype,
                smiley: ":~~!:" as Smiley,
            },
            SCROLL_AND_BOATHOOK: {
                unicode: "" as Unicode,
                sagitype: ")|~" as Sagitype,
                smiley: ":)|~:" as Smiley,
            },
            SCROLL_AND_BOATHOOK_DOWN: {
                unicode: "" as Unicode,
                sagitype: ")!~" as Sagitype,
                smiley: ":)!~:" as Smiley,
            },
            SCROLL_AND_ARC: {
                unicode: "" as Unicode,
                sagitype: ")|)" as Sagitype,
                smiley: ":)|):" as Smiley,
            },
            SCROLL_AND_ARC_DOWN: {
                unicode: "" as Unicode,
                sagitype: ")!)" as Sagitype,
                smiley: ":)!):" as Smiley,
            },
            BOATHOOK_AND_ARC: {
                unicode: "" as Unicode,
                sagitype: "~|)" as Sagitype,
                smiley: ":~|):" as Smiley,
            },
            BOATHOOK_AND_ARC_DOWN: {
                unicode: "" as Unicode,
                sagitype: "~!)" as Sagitype,
                smiley: ":~!):" as Smiley,
            },
            BOATHOOK_AND_BARB: {
                unicode: "" as Unicode,
                sagitype: "~|\\" as Sagitype,
                smiley: ":~|\\:" as Smiley,
            },
            BOATHOOK_AND_BARB_DOWN: {
                unicode: "" as Unicode,
                sagitype: "~!/" as Sagitype,
                smiley: ":~!/:" as Smiley,
            },
            LEFT_SCROLL_DOUBLE_LEFT_BARB: {
                unicode: "" as Unicode,
                sagitype: ")//|" as Sagitype,
                smiley: ":)/ /|:" as Smiley,
            },
            LEFT_SCROLL_DOUBLE_LEFT_BARB_DOWN: {
                unicode: "" as Unicode,
                sagitype: ")\\\\!" as Sagitype,
                smiley: ":)\\ \\!:" as Smiley,
            },
            ARC_AND_BOATHOOK: {
                unicode: "" as Unicode,
                sagitype: "(|~" as Sagitype,
                smiley: ":(|~:" as Smiley,
            },
            ARC_AND_BOATHOOK_DOWN: {
                unicode: "" as Unicode,
                sagitype: "(!~" as Sagitype,
                smiley: ":(!~:" as Smiley,
            },
            LEFT_ARC_AND_BARB: {
                unicode: "" as Unicode,
                sagitype: "(/|" as Sagitype,
                smiley: ":(/|:" as Smiley,
            },
            LEFT_ARC_AND_BARB_DOWN: {
                unicode: "" as Unicode,
                sagitype: "(\\!" as Sagitype,
                smiley: ":(\\!:" as Smiley,
            },
            LEFT_SCROLL_AND_DOUBLE_BARB: {
                unicode: "" as Unicode,
                sagitype: ")/|\\" as Sagitype,
                smiley: ":)/|\\:" as Smiley,
            },
            LEFT_SCROLL_AND_DOUBLE_BARB_DOWN: {
                unicode: "" as Unicode,
                sagitype: ")\\!/" as Sagitype,
                smiley: ":)\\!/:" as Smiley,
            },
            RIGHT_BARB_AND_ARC: {
                unicode: "" as Unicode,
                sagitype: "|\\)" as Sagitype,
                smiley: ":|\\):" as Smiley,
            },
            RIGHT_BARB_AND_ARC_DOWN: {
                unicode: "" as Unicode,
                sagitype: "!/)" as Sagitype,
                smiley: ":!/):" as Smiley,
            },
            DOUBLE_RIGHT_BARB: {
                unicode: "" as Unicode,
                sagitype: "|\\\\" as Sagitype,
                smiley: ":|\\ \\:" as Smiley,
            },
            DOUBLE_RIGHT_BARB_DOWN: {
                unicode: "" as Unicode,
                sagitype: "!//" as Sagitype,
                smiley: ":!/ /:" as Smiley,
            },
            LEFT_SCROLL_DOUBLE_RIGHT_BARB: {
                unicode: "" as Unicode,
                sagitype: ")|\\\\" as Sagitype,
                smiley: ":)|\\ \\:" as Smiley,
            },
            LEFT_SCROLL_DOUBLE_RIGHT_BARB_DOWN: {
                unicode: "" as Unicode,
                sagitype: ")!//" as Sagitype,
                smiley: ":)!/ /:" as Smiley,
            },
            LEFT_SCROLL_AND_BOATHOOK_DOUBLE: {
                unicode: "" as Unicode,
                sagitype: ")~||" as Sagitype,
                smiley: ":)~||:" as Smiley,
            },
            LEFT_SCROLL_AND_BOATHOOK_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: ")~!!" as Sagitype,
                smiley: ":)~!!:" as Smiley,
            },
            DOUBLE_LEFT_BOATHOOK_DOUBLE: {
                unicode: "" as Unicode,
                sagitype: "~~||" as Sagitype,
                smiley: ":~~||:" as Smiley,
            },
            DOUBLE_LEFT_BOATHOOK_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "~~!!" as Sagitype,
                smiley: ":~~!!:" as Smiley,
            },
            LEFT_SCROLL_AND_BARB_DOUBLE: {
                unicode: "" as Unicode,
                sagitype: ")/||" as Sagitype,
                smiley: ":)/||:" as Smiley,
            },
            LEFT_SCROLL_AND_BARB_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: ")\\!!" as Sagitype,
                smiley: ":)\\!!:" as Smiley,
            },
            LEFT_ARC_DOUBLE: {
                unicode: "" as Unicode,
                sagitype: "(||" as Sagitype,
                smiley: ":(||:" as Smiley,
            },
            LEFT_ARC_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "(!!" as Sagitype,
                smiley: ":(!!:" as Smiley,
            },
            BOATHOOK_AND_ARC_DOUBLE: {
                unicode: "" as Unicode,
                sagitype: "~||)" as Sagitype,
                smiley: ":~||):" as Smiley,
            },
            BOATHOOK_AND_ARC_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "~!!)" as Sagitype,
                smiley: ":~!!):" as Smiley,
            },
            BOATHOOK_AND_BARB_DOUBLE: {
                unicode: "" as Unicode,
                sagitype: "~||\\" as Sagitype,
                smiley: ":~||\\:" as Smiley,
            },
            BOATHOOK_AND_BARB_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "~!!/" as Sagitype,
                smiley: ":~!!/:" as Smiley,
            },
            LEFT_SCROLL_DOUBLE_LEFT_BARB_DOUBLE: {
                unicode: "" as Unicode,
                sagitype: ")//||" as Sagitype,
                smiley: ":)/ /||:" as Smiley,
            },
            LEFT_SCROLL_DOUBLE_LEFT_BARB_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: ")\\\\!!" as Sagitype,
                smiley: ":)\\ \\!!:" as Smiley,
            },
            ARC_AND_BOATHOOK_DOUBLE: {
                unicode: "" as Unicode,
                sagitype: "(||~" as Sagitype,
                smiley: ":(||~:" as Smiley,
            },
            ARC_AND_BOATHOOK_DOUBLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "(!!~" as Sagitype,
                smiley: ":(!!~:" as Smiley,
            },
            LEFT_SCROLL_TRIPLE: {
                unicode: "" as Unicode,
                sagitype: ")|||" as Sagitype,
                smiley: ":)|||:" as Smiley,
            },
            LEFT_SCROLL_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: ")!!!" as Sagitype,
                smiley: ":)!!!:" as Smiley,
            },
            LEFT_BOATHOOK_TRIPLE: {
                unicode: "" as Unicode,
                sagitype: "~|||" as Sagitype,
                smiley: ":~|||:" as Smiley,
            },
            LEFT_BOATHOOK_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "~!!!" as Sagitype,
                smiley: ":~!!!:" as Smiley,
            },
            LEFT_SCROLL_AND_BOATHOOK_TRIPLE: {
                unicode: "" as Unicode,
                sagitype: ")~|||" as Sagitype,
                smiley: ":)~|||:" as Smiley,
            },
            LEFT_SCROLL_AND_BOATHOOK_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: ")~!!!" as Sagitype,
                smiley: ":)~!!!:" as Smiley,
            },
            DOUBLE_LEFT_BOATHOOK_TRIPLE: {
                unicode: "" as Unicode,
                sagitype: "~~|||" as Sagitype,
                smiley: ":~~|||:" as Smiley,
            },
            DOUBLE_LEFT_BOATHOOK_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "~~!!!" as Sagitype,
                smiley: ":~~!!!:" as Smiley,
            },
            SCROLL_AND_BOATHOOK_TRIPLE: {
                unicode: "" as Unicode,
                sagitype: ")|||~" as Sagitype,
                smiley: ":)|||~:" as Smiley,
            },
            SCROLL_AND_BOATHOOK_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: ")!!!~" as Sagitype,
                smiley: ":)!!!~:" as Smiley,
            },
            SCROLL_AND_ARC_TRIPLE: {
                unicode: "" as Unicode,
                sagitype: ")|||)" as Sagitype,
                smiley: ":)|||):" as Smiley,
            },
            SCROLL_AND_ARC_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: ")!!!)" as Sagitype,
                smiley: ":)!!!):" as Smiley,
            },
            BOATHOOK_AND_ARC_TRIPLE: {
                unicode: "" as Unicode,
                sagitype: "~|||)" as Sagitype,
                smiley: ":~|||):" as Smiley,
            },
            BOATHOOK_AND_ARC_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "~!!!)" as Sagitype,
                smiley: ":~!!!):" as Smiley,
            },
            BOATHOOK_AND_BARB_TRIPLE: {
                unicode: "" as Unicode,
                sagitype: "~|||\\" as Sagitype,
                smiley: ":~|||\\:" as Smiley,
            },
            BOATHOOK_AND_BARB_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "~!!!/" as Sagitype,
                smiley: ":~!!!/:" as Smiley,
            },
            LEFT_SCROLL_DOUBLE_LEFT_BARB_TRIPLE: {
                unicode: "" as Unicode,
                sagitype: ")//|||" as Sagitype,
                smiley: ":)/ /|||:" as Smiley,
            },
            LEFT_SCROLL_DOUBLE_LEFT_BARB_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: ")\\\\!!!" as Sagitype,
                smiley: ":)\\ \\!!!:" as Smiley,
            },
            ARC_AND_BOATHOOK_TRIPLE: {
                unicode: "" as Unicode,
                sagitype: "(|||~" as Sagitype,
                smiley: ":(|||~:" as Smiley,
            },
            ARC_AND_BOATHOOK_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "(!!!~" as Sagitype,
                smiley: ":(!!!~:" as Smiley,
            },
            LEFT_ARC_AND_BARB_TRIPLE: {
                unicode: "" as Unicode,
                sagitype: "(/|||" as Sagitype,
                smiley: ":(/|||:" as Smiley,
            },
            LEFT_ARC_AND_BARB_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "(\\!!!" as Sagitype,
                smiley: ":(\\!!!:" as Smiley,
            },
            LEFT_SCROLL_AND_DOUBLE_BARB_TRIPLE: {
                unicode: "" as Unicode,
                sagitype: ")/|||\\" as Sagitype,
                smiley: ":)/|||\\:" as Smiley,
            },
            LEFT_SCROLL_AND_DOUBLE_BARB_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: ")\\!!!/" as Sagitype,
                smiley: ":)\\!!!/:" as Smiley,
            },
            RIGHT_BARB_AND_ARC_TRIPLE: {
                unicode: "" as Unicode,
                sagitype: "|||\\)" as Sagitype,
                smiley: ":|||\\):" as Smiley,
            },
            RIGHT_BARB_AND_ARC_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "!!!/)" as Sagitype,
                smiley: ":!!!/):" as Smiley,
            },
            DOUBLE_RIGHT_BARB_TRIPLE: {
                unicode: "" as Unicode,
                sagitype: "|||\\\\" as Sagitype,
                smiley: ":|||\\ \\:" as Smiley,
            },
            DOUBLE_RIGHT_BARB_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: "!!!//" as Sagitype,
                smiley: ":!!!/ /:" as Smiley,
            },
            LEFT_SCROLL_DOUBLE_RIGHT_BARB_TRIPLE: {
                unicode: "" as Unicode,
                sagitype: ")|||\\\\" as Sagitype,
                smiley: ":)|||\\ \\:" as Smiley,
            },
            LEFT_SCROLL_DOUBLE_RIGHT_BARB_TRIPLE_DOWN: {
                unicode: "" as Unicode,
                sagitype: ")!!!//" as Sagitype,
                smiley: ":)!!!/ /:" as Smiley,
            },
            LEFT_SCROLL_AND_BOATHOOK_EX: {
                unicode: "" as Unicode,
                sagitype: ")~X" as Sagitype,
                smiley: ":)~X:" as Smiley,
            },
            LEFT_SCROLL_AND_BOATHOOK_EX_DOWN: {
                unicode: "" as Unicode,
                sagitype: ")~Y" as Sagitype,
                smiley: ":)~Y:" as Smiley,
            },
            DOUBLE_LEFT_BOATHOOK_EX: {
                unicode: "" as Unicode,
                sagitype: "~~X" as Sagitype,
                smiley: ":~~X:" as Smiley,
            },
            DOUBLE_LEFT_BOATHOOK_EX_DOWN: {
                unicode: "" as Unicode,
                sagitype: "~~Y" as Sagitype,
                smiley: ":~~Y:" as Smiley,
            },
            LEFT_SCROLL_AND_BARB_EX: {
                unicode: "" as Unicode,
                sagitype: ")/X" as Sagitype,
                smiley: ":)/X:" as Smiley,
            },
            LEFT_SCROLL_AND_BARB_EX_DOWN: {
                unicode: "" as Unicode,
                sagitype: ")\\Y" as Sagitype,
                smiley: ":)\\Y:" as Smiley,
            },
            LEFT_ARC_EX: {
                unicode: "" as Unicode,
                sagitype: "(X" as Sagitype,
                smiley: ":(X:" as Smiley,
            },
            LEFT_ARC_EX_DOWN: {
                unicode: "" as Unicode,
                sagitype: "(Y" as Sagitype,
                smiley: ":(Y:" as Smiley,
            },
            BOATHOOK_AND_ARC_EX: {
                unicode: "" as Unicode,
                sagitype: "~X)" as Sagitype,
                smiley: ":~X):" as Smiley,
            },
            BOATHOOK_AND_ARC_EX_DOWN: {
                unicode: "" as Unicode,
                sagitype: "~Y)" as Sagitype,
                smiley: ":~Y):" as Smiley,
            },
            BOATHOOK_AND_BARB_EX: {
                unicode: "" as Unicode,
                sagitype: "~X\\" as Sagitype,
                smiley: ":~X\\:" as Smiley,
            },
            BOATHOOK_AND_BARB_EX_DOWN: {
                unicode: "" as Unicode,
                sagitype: "~Y/" as Sagitype,
                smiley: ":~Y/:" as Smiley,
            },
            LEFT_SCROLL_DOUBLE_LEFT_BARB_EX: {
                unicode: "" as Unicode,
                sagitype: ")//X" as Sagitype,
                smiley: ":)/ /X:" as Smiley,
            },
            LEFT_SCROLL_DOUBLE_LEFT_BARB_EX_DOWN: {
                unicode: "" as Unicode,
                sagitype: ")\\\\Y" as Sagitype,
                smiley: ":)\\ \\Y:" as Smiley,
            },
            ARC_AND_BOATHOOK_EX: {
                unicode: "" as Unicode,
                sagitype: "(X~" as Sagitype,
                smiley: ":(X~:" as Smiley,
            },
            ARC_AND_BOATHOOK_EX_DOWN: {
                unicode: "" as Unicode,
                sagitype: "(Y~" as Sagitype,
                smiley: ":(Y~:" as Smiley,
            },
            BARE_SHAFT: {
                unicode: "" as Unicode,
                sagitype: "|" as Sagitype,
                smiley: ":|:" as Smiley,
            },
            BARE_SHAFT_DOWN: {
                unicode: "" as Unicode,
                sagitype: "!" as Sagitype,
                smiley: ":!:" as Smiley,
            },
        }
        expect(coreGlyphExpectations).toEqual(expected)
    })

    it("has the correct accent glyphs and computes their IO correctly", (): void => {
        const accentIds = Object.values(AccentId) as AccentId[]
        const accentGlyphExpectations = accentIds.reduce(
            (
                accentGlyphExpectations: Record<AccentId, GlyphExpectation>,
                accentId: AccentId,
            ): Record<AccentId, GlyphExpectation> => {
                return {
                    ...accentGlyphExpectations,
                    [accentId]: computeAccentGlyphExpectation(accentId),
                }
            },
            {} as Record<AccentId, GlyphExpectation>,
        )

        const expected: Record<AccentId, GlyphExpectation> = {
            [AccentId.TICK]: {
                unicode: "" as Unicode,
                sagitype: "'" as Sagitype,
                smiley: ":':" as Smiley,
            },
            [AccentId.WING]: {
                unicode: "" as Unicode,
                sagitype: "`" as Sagitype,
                smiley: ":`:" as Smiley,
            },
            [AccentId.BIRD]: {
                unicode: "" as Unicode,
                sagitype: "``" as Sagitype,
                smiley: ":``:" as Smiley,
            },
            [AccentId.HORN]: {
                unicode: "" as Unicode,
                sagitype: "@1" as Sagitype,
                smiley: ":@1:" as Smiley,
            },
            [AccentId.WEDGE]: {
                unicode: "" as Unicode,
                sagitype: "@2" as Sagitype,
                smiley: ":@2:" as Smiley,
            },
            [AccentId.HORNWING]: {
                unicode: "" as Unicode,
                sagitype: "@4" as Sagitype,
                smiley: ":@4:" as Smiley,
            },
            [AccentId.WEDGEWING]: {
                unicode: "" as Unicode,
                sagitype: "@5" as Sagitype,
                smiley: ":@5:" as Smiley,
            },
            [AccentId.HORNBIRD]: {
                unicode: "" as Unicode,
                sagitype: "@7" as Sagitype,
                smiley: ":@7:" as Smiley,
            },
            [AccentId.WEDGEBIRD]: {
                unicode: "" as Unicode,
                sagitype: "@8" as Sagitype,
                smiley: ":@8:" as Smiley,
            },
            [AccentId.WINGBIRD]: {
                unicode: "" as Unicode,
                sagitype: "@9" as Sagitype,
                smiley: ":@9:" as Smiley,
            },
            [AccentId.DOT]: {
                unicode: "" as Unicode,
                sagitype: "@." as Sagitype,
                smiley: ":@.:" as Smiley,
            },
        }
        expect(accentGlyphExpectations).toEqual(expected)
    })

    it("has the correct accent glyphs and computes their IO correctly (when oriented against, or anti-, their core)              ", (): void => {
        const accentIds = Object.values(AccentId) as AccentId[]
        const accentGlyphExpectations = accentIds.reduce(
            (
                accentGlyphExpectations: Record<AccentId, GlyphExpectation>,
                accentId: AccentId,
            ): Record<AccentId, GlyphExpectation> => {
                return {
                    ...accentGlyphExpectations,
                    [accentId]: computeAccentGlyphExpectation(accentId, { anti: true }),
                }
            },
            {} as Record<AccentId, GlyphExpectation>,
        )

        const expected: Record<AccentId, GlyphExpectation> = {
            [AccentId.TICK]: {
                unicode: "" as Unicode,
                sagitype: "." as Sagitype,
                smiley: ":.:" as Smiley,
            },
            [AccentId.WING]: {
                unicode: "" as Unicode,
                sagitype: "," as Sagitype,
                smiley: ":,:" as Smiley,
            },
            [AccentId.BIRD]: {
                unicode: "" as Unicode,
                sagitype: ",," as Sagitype,
                smiley: ":,,:" as Smiley,
            },
            [AccentId.HORN]: {
                unicode: "" as Unicode,
                sagitype: "l1" as Sagitype,
                smiley: ":l1:" as Smiley,
            },
            [AccentId.WEDGE]: {
                unicode: "" as Unicode,
                sagitype: "l2" as Sagitype,
                smiley: ":l2:" as Smiley,
            },
            [AccentId.HORNWING]: {
                unicode: "" as Unicode,
                sagitype: "l4" as Sagitype,
                smiley: ":l4:" as Smiley,
            },
            [AccentId.WEDGEWING]: {
                unicode: "" as Unicode,
                sagitype: "l5" as Sagitype,
                smiley: ":l5:" as Smiley,
            },
            [AccentId.HORNBIRD]: {
                unicode: "" as Unicode,
                sagitype: "l7" as Sagitype,
                smiley: ":l7:" as Smiley,
            },
            [AccentId.WEDGEBIRD]: {
                unicode: "" as Unicode,
                sagitype: "l8" as Sagitype,
                smiley: ":l8:" as Smiley,
            },
            [AccentId.WINGBIRD]: {
                unicode: "" as Unicode,
                sagitype: "l9" as Sagitype,
                smiley: ":l9:" as Smiley,
            },
            [AccentId.DOT]: {
                unicode: "" as Unicode,
                sagitype: "l." as Sagitype,
                smiley: ":l.:" as Smiley,
            },
        }
        expect(accentGlyphExpectations).toEqual(expected)
    })

    it("has the correct Sagittal-compatible glyphs and computes their IO correctly", (): void => {
        const compatibles = Object.values(Compatible) as Compatible[]
        const compatibleGlyphExpectations = compatibles.reduce(
            (
                compatibleGlyphExpectations: Record<Compatible, GlyphExpectation>,
                compatible: Compatible,
            ): Record<Compatible, GlyphExpectation> => {
                return {
                    ...compatibleGlyphExpectations,
                    [compatible]: computeCompatibleGlyphExpectation(compatible),
                }
            },
            {} as Record<Compatible, GlyphExpectation>,
        )

        const expected: Record<Compatible, GlyphExpectation> = {
            [Compatible.STEIN_SEMISHARP]: {
                unicode: "" as Unicode,
                sagitype: ">" as Sagitype,
                smiley: ":>:" as Smiley,
            },
            [Compatible.STEIN_SEMIFLAT]: {
                unicode: "" as Unicode,
                sagitype: "<" as Sagitype,
                smiley: ":<:" as Smiley,
            },
            [Compatible.STEIN_SESQUISHARP]: {
                unicode: "" as Unicode,
                sagitype: ">#" as Sagitype,
                smiley: ":>#:" as Smiley,
            },
            [Compatible.ZIMMERMANN_SESQUIFLAT]: {
                unicode: "" as Unicode,
                sagitype: "<b" as Sagitype,
                smiley: ":<b:" as Smiley,
            },
            [Compatible.WILSON_PLUS]: {
                unicode: "" as Unicode,
                sagitype: "+" as Sagitype,
                smiley: ":+:" as Smiley,
            },
            [Compatible.WILSON_MINUS]: {
                unicode: "" as Unicode,
                sagitype: "-" as Sagitype,
                smiley: ":-:" as Smiley,
            },
            [Compatible.NATURAL]: {
                unicode: "" as Unicode,
                sagitype: "|//|" as Sagitype,
                smiley: ":h:" as Smiley,
            },
            [Compatible.SHARP]: {
                unicode: "" as Unicode,
                sagitype: "#" as Sagitype,
                smiley: ":#:" as Smiley,
            },
            [Compatible.FLAT]: {
                unicode: "" as Unicode,
                sagitype: "b" as Sagitype,
                smiley: ":b:" as Smiley,
            },
            [Compatible.DOUBLE_SHARP]: {
                unicode: "" as Unicode,
                sagitype: "x" as Sagitype,
                smiley: ":x:" as Smiley,
            },
            [Compatible.DOUBLE_FLAT]: {
                unicode: "" as Unicode,
                sagitype: "bb" as Sagitype,
                smiley: ":bb:" as Smiley,
            },
        }
        expect(compatibleGlyphExpectations).toEqual(expected)
    })
})
