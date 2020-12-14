import {
    BLANK,
    computeLowestTermsRationalQuotient,
    Io,
    isUndefined,
    Maybe,
    parseQuotient,
    Quotient,
} from "@sagittal/general"
import {SIZE_CATEGORY_ABBREVIATIONS, SIZE_CATEGORY_NAMES, SIZE_CATEGORY_NAME_ALTERNATIVES} from "./sizeCategories"
import {CommaNameQuotient, ParsedCommaName, SizeCategory, SizeCategoryName} from "./types"

// TODO: comma names need to be updated to reflect the new understanding about up & down being overrides while
//  The direction of the ratio in the comma name expresses the direction of the 2,3-free prime content as well as
//  The direction of the comma itself (positive or negative cents)
//  Which is made possible in part by a resolution to the counterexample given where two commas could have the same name
//  Which I fixed by devising a series of tie-breakers
//  See: http://forum.sagittal.org/viewtopic.php?p=3062#p3062
//  And there's also some new stuff that needs to be parsed, like scaled monzos, half commas, default commas per size
//  Category, hyphens v spaces, and preferred outputs http://forum.sagittal.org/viewtopic.php?p=3105#p3105
//  All answers here now: http://forum.sagittal.org/viewtopic.php?p=3106#p3106

const parseCommaName = (commaNameIo: Io): ParsedCommaName => {
    const quotientPartOfCommaName = commaNameIo // *not* a 2,3-free class, because it's not necessarily super!!!
        .replace(/[a-zA-Z+\-]/g, BLANK) as Io
    const sizeCategoryPartOfCommaName = commaNameIo
        .replace(quotientPartOfCommaName, BLANK)
        .replace(/-/, BLANK) as Io

    const commaNameQuotient: CommaNameQuotient = computeLowestTermsRationalQuotient(
        parseQuotient(quotientPartOfCommaName) as Quotient<{rational: true, rough: 3}>,
    ) as Quotient<{rational: true, rough: 3}> as CommaNameQuotient

    let sizeCategory: Maybe<SizeCategory> = undefined

    for (const sizeCategoryValue of Object.values(SizeCategory)) {
        if (
            sizeCategoryPartOfCommaName.toUpperCase() === SIZE_CATEGORY_NAMES[sizeCategoryValue].toUpperCase()
            || sizeCategoryPartOfCommaName === SIZE_CATEGORY_ABBREVIATIONS[sizeCategoryValue]
            || SIZE_CATEGORY_NAME_ALTERNATIVES[sizeCategoryValue]
                .includes(sizeCategoryPartOfCommaName as SizeCategoryName)
        ) {
            sizeCategory = sizeCategoryValue
        }
    }

    if (isUndefined(sizeCategory)) {
        throw new Error(`No size category found for comma name ${commaNameIo}.`)
    }

    return {commaNameQuotient, sizeCategory}
}

export {
    parseCommaName,
}
