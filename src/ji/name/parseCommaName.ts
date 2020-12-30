import {
    computeLowestTermsRationalQuotient,
    Direction,
    Io,
    isUndefined,
    Maybe,
    parseQuotient,
    Quotient,
} from "@sagittal/general"
import {SIZE_CATEGORY_ABBREVIATIONS, SIZE_CATEGORY_NAME_ALTERNATIVES, SIZE_CATEGORY_NAMES} from "./sizeCategories"
import {CommaNameQuotient, ParsedCommaName, SizeCategory, SizeCategoryName} from "./types"

// TODO: COMMA NAMES
//  Comma names need to be updated to reflect the new understanding about up & down being overrides while
//  The direction of the ratio in the comma name expresses the direction of the 2,3-free prime content as well as
//  The direction of the comma itself (positive or negative cents)
//  Which is made possible in part by a resolution to the counterexample given where two commas could have the same name
//  Which I fixed by devising a series of tie-breakers
//  See: http://forum.sagittal.org/viewtopic.php?p=3062#p3062
//  And there's also some new stuff that needs to be parsed, like scaled monzos, half commas, default commas per size
//  Category, hyphens v spaces, and preferred outputs http://forum.sagittal.org/viewtopic.php?p=3105#p3105
//  All answers here now: http://forum.sagittal.org/viewtopic.php?p=3106#p3106
//  - There's also complex name parsing
//  Eventually add a third element to parsedCommaName: complexity, affecting what it returns
//  - Hey, and also a fourth element: direction, the up/down override
//  And handle all the alternate input methods
//  Touched upon here: http://forum.sagittal.org/viewtopic.php?p=1721#p1721
//  Most recent questions here: http://forum.sagittal.org/viewtopic.php?p=2980#p2980
//  1c3C = c3C = 41e3C and
//  0c3C = 3C = 12e3C.

const parseCommaName = (commaNameIo: Io): ParsedCommaName => {
    const commaNameParts = commaNameIo.match(/(.*c)?([0-9⁰¹²³⁴⁵⁶⁷⁸⁹.⋅*^]+[:\/]?\(?[0-9⁰¹²³⁴⁵⁶⁷⁸⁹.⋅*^]*\)?)-?([a-zA-Z-+]+)\s?(up|down)?/)
    if (commaNameParts === null) throw new Error(`Could not parse comma name ${commaNameIo}.`)
    const [
        _,
        complexityCommaNamePart,
        quotientCommaNamePart, // *not* a 2,3-free class, because it's not necessarily super!!!
        sizeCategoryCommaNamePart,
        directionCommaNamePart,
    ] = commaNameParts

    const commaNameQuotient: CommaNameQuotient = computeLowestTermsRationalQuotient(
        parseQuotient(quotientCommaNamePart) as Quotient<{rational: true, rough: 3}>,
    ) as Quotient<{rational: true, rough: 3}> as CommaNameQuotient

    let sizeCategory: Maybe<SizeCategory> = undefined

    for (const sizeCategoryValue of Object.values(SizeCategory)) {
        if (
            sizeCategoryCommaNamePart.toUpperCase() === SIZE_CATEGORY_NAMES[sizeCategoryValue].toUpperCase()
            || sizeCategoryCommaNamePart === SIZE_CATEGORY_ABBREVIATIONS[sizeCategoryValue]
            || SIZE_CATEGORY_NAME_ALTERNATIVES[sizeCategoryValue]
                .includes(sizeCategoryCommaNamePart as SizeCategoryName)
        ) {
            sizeCategory = sizeCategoryValue
        }
    }

    if (isUndefined(sizeCategory)) {
        throw new Error(`No size category found for comma name ${commaNameIo}.`)
    }

    const parsedCommaName = {commaNameQuotient, sizeCategory} as ParsedCommaName

    const direction = directionCommaNamePart === "up" ?
        Direction.SUPER :
        directionCommaNamePart === "down" ?
            Direction.SUB :
            undefined
    if (!isUndefined(direction)) parsedCommaName.direction = direction

    return parsedCommaName
}

export {
    parseCommaName,
}
