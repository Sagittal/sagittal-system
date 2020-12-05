// Import {ceil, Count, decrement, increment, Name} from "@sagittal/general"
// Import {computeRange} from "../../../../../src/general/code"
// Import {Max} from "../../../../../src/general/math"
// Import {subtractPitch} from "../../../../../src/general/music"
// Import {CommaClassId} from "../../../../src/ji/comma/class"
// Import {getMinaName, Minas} from "../../../../src/notations/ji"
// Import {computeJiNotationCaptureZone} from "../../../../src/notations/ji/captureZone"
// Import {MINA} from "../../../../src/notations/ji/intervals"
// Import {EXTREME_EDA} from "../../../../src/notations/ji/levelEdas"
//
// TODO: POST-NOTATION-GENERATION: FIGURE OUT MINA NAME SITUATION
//  Aren't these kind of just exactly the bound names now? not sure what to do with that exactly...
//  And it's bizarre that we fetch them by comma class instead of bound class, no?
//  And did we ever get to checking those mina names computation? From the commas that is (the spreadsheet formula)
// Describe("getMinaName", (): void => {
//     Const SPLIT_MINAS = [49, 51, 72, 78, 105, 113]
//     Const MAX_MINA = ceil(EXTREME_EDA / 2) as Count<Minas> & Max<Minas>   // 233 / 2 = 116.5 ---> 117
//
//     Const computeSplitMinaName = (commaClassId: CommaClassId): Name<Minas> => {
//         Const [lowerBound, upperBound] = computeJiNotationCaptureZone(commaClassId)
//         Const centsSpan = subtractPitch(upperBound, lowerBound)
//
//         Const baseMina = parseInt(getMinaName(commaClassId))
//         Const mina = baseMina + centsSpan / MINA
//
//         Return mina.toFixed(6) as Name<Minas>
//     }
//
//     It("one mina name for every mina up to the max comma class size, plus one for each split mina", (): void => {
//         Let commaClassId = 0 as CommaClassId
//         Const minaRange = computeRange(MAX_MINA)
//
//         MinaRange.forEach((mina: Minas): void => {
//             Expect(getMinaName(commaClassId)).toBe(mina.toString())
//             CommaClassId = increment(commaClassId)
//
//             If (SPLIT_MINAS.includes(mina)) {
//                 Expect(getMinaName(commaClassId)).toBe(computeSplitMinaName(decrement(commaClassId)))
//                 CommaClassId = increment(commaClassId)
//             }
//         })
//     })
// })
