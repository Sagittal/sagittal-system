import {
    BLANK,
    Comma,
    computeCentsFromPitch,
    computeSubQuotient,
    computeSuperScaledVector,
    Direction,
    formatCents,
    isRationalScaledVectorSmooth,
    isRationalScaledVectorSub,
    isRationalScaledVectorUnison,
    Name,
    stringify,
    THREE_SMOOTHNESS,
} from "@sagittal/general"
import { computeCommaNameQuotient } from "./commaNameQuotient"
import { computeMaybeComplex } from "./complex"
import { formatCommaNameQuotient } from "./formatCommaNameQuotient"
import { SIZE_CATEGORY_ABBREVIATIONS, SIZE_CATEGORY_NAMES } from "./sizeCategories"
import { computeSizeCategory } from "./sizeCategory"
import { isCommaSized } from "./typeGuards"
import { CommaNameOptions, FactoringMode, SizeCategory } from "./types"

const removeParentheses = (string: string): string => string.replace("(", BLANK).replace(")", BLANK)

// "Sized comma name"

// TODO: here's the plan for these: https://docs.google.com/spreadsheets/d/1MHNYViphoZaQKY-6vgQogdaG2Zxh7ScpRFSPMc9R4M0/edit?gid=1229301338#gid=1229301338

const computeCommaName = (comma: Comma, options: CommaNameOptions = {}): Name<Comma> => {
    if (!isCommaSized(comma)) {
        throw new Error(
            `Comma ${stringify(comma)} is outside of comma-sized range and cannot be named: ${formatCents(
                computeCentsFromPitch(comma),
            )}`,
        )
    }

    const {
        directed = true,
        factoringMode = FactoringMode.THRESHOLD,
        abbreviated = true,
        ascii = false,
    } = options

    const maybeHyphen = abbreviated ? BLANK : "-"

    const maybeDown = isRationalScaledVectorSub(comma) ? " down" : BLANK

    const superComma = computeSuperScaledVector(comma) as Comma<{
        rational: true
        direction: Direction.SUPER
    }>
    const sizeCategory: SizeCategory = computeSizeCategory(superComma)
    const sizeCategoryText = abbreviated
        ? SIZE_CATEGORY_ABBREVIATIONS[sizeCategory]
        : SIZE_CATEGORY_NAMES[sizeCategory]

    let formattedCommaNameQuotient
    if (isRationalScaledVectorSmooth(comma, THREE_SMOOTHNESS) && !isRationalScaledVectorUnison(comma)) {
        formattedCommaNameQuotient = "3"
    } else {
        const commaNameQuotient = computeCommaNameQuotient(comma)

        if (directed) {
            const stringifiedQuotient = formatCommaNameQuotient(commaNameQuotient, {
                factoringMode,
                ascii,
            })

            formattedCommaNameQuotient =
                stringifiedQuotient[1] === "1"
                    ? removeParentheses(stringifiedQuotient[0])
                    : stringifiedQuotient.join("/")
        } else {
            const stringifiedQuotient = formatCommaNameQuotient(computeSubQuotient(commaNameQuotient), {
                factoringMode,
                ascii,
            })

            formattedCommaNameQuotient =
                stringifiedQuotient[0] === "1"
                    ? removeParentheses(stringifiedQuotient[1])
                    : removeParentheses(stringifiedQuotient.join(":"))
        }
    }

    const maybeComplex = computeMaybeComplex(comma, { sizeCategory, abbreviated })

    return `${maybeComplex}${formattedCommaNameQuotient}${maybeHyphen}${sizeCategoryText}${maybeDown}` as Name<Comma>
}

export { computeCommaName }
