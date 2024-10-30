import {
    BLANK,
    Comma,
    computeCentsFromPitch,
    computeSubQuotient,
    computeSuperQuotient,
    computeSuperScaledVector,
    Direction,
    formatCents,
    isQuotientSub,
    isRationalScaledVectorSmooth,
    isRationalScaledVectorSub,
    isRationalScaledVectorUnison,
    Name,
    ScaledVector,
    stringify,
    THREE_SMOOTHNESS,
} from "@sagittal/general"
import { computeCommaNameQuotient } from "./commaNameQuotient"
import { computeMaybeComplex } from "./complex"
import { formatCommaNameQuotient } from "./formatCommaNameQuotient"
import { SIZE_CATEGORY_ABBREVIATIONS, SIZE_CATEGORY_NAMES } from "./sizeCategories"
import { computeSizeCategory } from "./sizeCategory"
import { isCommaSized } from "./typeGuards"
import { CommaNameOptions, DirectedNumbers, DirectedWord, FactoringMode, SizeCategory } from "./types"

const removeParentheses = (string: string): string => string.replace("(", BLANK).replace(")", BLANK)

const computeMaybeDown = (
    comma: Comma,
    { directedNumbers, directedWord }: { directedNumbers: DirectedNumbers; directedWord: DirectedWord },
): string => {
    const commaIsDown: boolean = isRationalScaledVectorSub(comma)
    if (directedWord === DirectedWord.ALWAYS) {
        return commaIsDown ? " down" : " up"
    } else if (directedWord === DirectedWord.NEVER) {
        return ""
    } else {
        if (directedNumbers === DirectedNumbers.OFF_WITH_COLON) {
            return commaIsDown ? " down" : " up"
        } else if (directedNumbers === DirectedNumbers.ON) {
            return ""
        } else {
            const commaNameQuotientIsDown = isQuotientSub(
                computeCommaNameQuotient(computeSuperScaledVector(comma) as ScaledVector as Comma),
            )

            console.log("commaIsDown", commaIsDown)
            console.log("commaNameQuotientIsDown", commaNameQuotientIsDown)
            return commaIsDown === commaNameQuotientIsDown ? "" : commaIsDown ? " down" : " up" // TODO: DRY up these three occurrences of same
        }
    }
}

const computeFormattedCommaNameQuotient = (stringifiedQuotient: string[]) =>
    stringifiedQuotient[1] === "1" ? removeParentheses(stringifiedQuotient[0]) : stringifiedQuotient.join("/")

// "Sized comma name"

const computeCommaName = (comma: Comma, options: CommaNameOptions = {}): Name<Comma> => {
    if (!isCommaSized(comma)) {
        throw new Error(
            `Comma ${stringify(comma)} is outside of comma-sized range and cannot be named: ${formatCents(
                computeCentsFromPitch(comma),
            )}`,
        )
    }

    const {
        directedNumbers = DirectedNumbers.ON,
        directedWord = DirectedWord.CONDITIONALLY,
        factoringMode = FactoringMode.THRESHOLD,
        abbreviated = true,
        ascii = false,
    } = options

    const maybeHyphen = abbreviated ? BLANK : "-"

    const superComma = computeSuperScaledVector(comma) as Comma<{
        rational: true
        direction: Direction.SUPER
    }>
    const sizeCategory: SizeCategory = computeSizeCategory(superComma)
    const sizeCategoryText = abbreviated
        ? SIZE_CATEGORY_ABBREVIATIONS[sizeCategory]
        : SIZE_CATEGORY_NAMES[sizeCategory]

    const commaNameQuotient = computeCommaNameQuotient(comma)

    let formattedCommaNameQuotientOrRatio
    if (isRationalScaledVectorSmooth(comma, THREE_SMOOTHNESS) && !isRationalScaledVectorUnison(comma)) {
        formattedCommaNameQuotientOrRatio = "3"
    } else {
        if (directedNumbers === DirectedNumbers.ON) {
            const stringifiedQuotient = formatCommaNameQuotient(commaNameQuotient, {
                factoringMode,
                ascii,
            })

            formattedCommaNameQuotientOrRatio = computeFormattedCommaNameQuotient(stringifiedQuotient)
        } else if (directedNumbers === DirectedNumbers.OFF_WITH_COLON) {
            const stringifiedQuotient = formatCommaNameQuotient(computeSubQuotient(commaNameQuotient), {
                factoringMode,
                ascii,
            })

            formattedCommaNameQuotientOrRatio =
                stringifiedQuotient[0] === "1"
                    ? removeParentheses(stringifiedQuotient[1])
                    : removeParentheses(stringifiedQuotient.join(":"))
        } else {
            const stringifiedQuotient = formatCommaNameQuotient(computeSuperQuotient(commaNameQuotient), {
                factoringMode,
                ascii,
            })

            formattedCommaNameQuotientOrRatio = computeFormattedCommaNameQuotient(stringifiedQuotient)
        }
    }

    const maybeComplex = computeMaybeComplex(comma, { sizeCategory, abbreviated })
    const maybeDown = computeMaybeDown(comma, { directedNumbers, directedWord })

    return `${maybeComplex}${formattedCommaNameQuotientOrRatio}${maybeHyphen}${sizeCategoryText}${maybeDown}` as Name<Comma>
}

export { computeCommaName }
