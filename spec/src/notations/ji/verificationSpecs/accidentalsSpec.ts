import {Unicode} from "../../../../../src"
import {Ascii, Flavor, Smiley} from "../../../../../src/accidental"
import {CaptureZone} from "../../../../../src/notation"
import {computeCaptureZones} from "../../../../../src/notation/captureZones"
import {EXTREME_NOTATION} from "../../../../../src/notations/ji/notations"
import {computeFlavorsExpectation} from "../../../../helpers/src/accidental/flavor/accidentalExpectation"
import {FlavorsExpectation} from "../../../../helpers/src/accidental/flavor/types"

// TODO: POST-NOTATION-GENERATION: ACCIDENTAL, PRIMARY COMMA, ZONE STUFF
//  So I could either imagine having totally separate specs for verifying the bounds & commas of the capture zones
//  I think that kind of works, what with the actual captureZonesSpec checking everything but in proto-form
//  Then this makes sure the actual stuff you can derive from each is correct, but the accidentals stuff only
//  So the other ones would verify okay you got the right bound class ID fine, we know that from the captureZoneSpec
//  But do you actually use that w/r/t natural, negated, shifted, section, etc. correctly
//  And same for primary comma
//  I'll just include the WIP for those methods here then
/*
// const computePrimaryComma = ({ commaClassId, commaDirection, apotomeCount }: PrimaryCommaOptions): Comma => {
//     const comma = getCommaClass(commaClassId).pitch
//     const commaticAlteration: Comma = commaDirection === Direction.SUPER ? comma : invertScamon(comma) as Comma
//     const apotomeBase: Comma = multiplyScamon(
//         APOTOME,
//         apotomeCount as Decimal<{ integer: true }> as Decimal<{ integer: true }> & Multiplier,
//     ) as Comma
//
//     return addScamons(apotomeBase, commaticAlteration) as Scamon as Comma
// }
//
// const computeCaptureZone = ({ boundClassId, commaDirection, apotomeCount }: CaptureZoneOptions): Zone => {
//     const bound = getBoundClass(boundClassId).pitch
//     const boundAlteration = commaDirection === Direction.SUPER ? bound : invertScamon(bound)
//     const apotomeBase = multiplyScamon(
//         APOTOME,
//         apotomeCount as Decimal<{ integer: true }> as Decimal<{ integer: true }> & Multiplier,
//     ) as Comma
//
//     return addScamons(apotomeBase, boundAlteration)
// }
 */

describe("accidentals", (): void => {
    it("has the correct accidentals for Extreme", (): void => {
        const captureZones = computeCaptureZones(EXTREME_NOTATION)

        const accidentalExpectations = captureZones.map((captureZone: CaptureZone): FlavorsExpectation => {
            return computeFlavorsExpectation(captureZone)
        })

        const expectedN1A: FlavorsExpectation[] = [
            {
                revo: {
                    ascii: "(|//|)" as Ascii<Flavor.REVO>,
                    smiley: "(:h:)" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(|//|)" as Ascii<Flavor.EVO>,
                    smiley: "(:h:)" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",!" as Ascii<Flavor.REVO>,
                    smiley: ":,::!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!" as Ascii<Flavor.EVO>,
                    smiley: ":,::!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,!" as Ascii<Flavor.REVO>,
                    smiley: ":,,::!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,!" as Ascii<Flavor.EVO>,
                    smiley: ":,,::!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "')!" as Ascii<Flavor.REVO>,
                    smiley: ":'::)!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "')!" as Ascii<Flavor.EVO>,
                    smiley: ":'::)!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".!" as Ascii<Flavor.REVO>,
                    smiley: ":.::!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".!" as Ascii<Flavor.EVO>,
                    smiley: ":.::!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",.!" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.!" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)!" as Ascii<Flavor.REVO>,
                    smiley: ":`::)!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)!" as Ascii<Flavor.EVO>,
                    smiley: ":`::)!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")!" as Ascii<Flavor.REVO>,
                    smiley: ":)!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!" as Ascii<Flavor.EVO>,
                    smiley: ":)!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)!" as Ascii<Flavor.REVO>,
                    smiley: ":,::)!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)!" as Ascii<Flavor.EVO>,
                    smiley: ":,::)!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,)!" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)!" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``!(" as Ascii<Flavor.REVO>,
                    smiley: ":``::!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``!(" as Ascii<Flavor.EVO>,
                    smiley: ":``::!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`!(" as Ascii<Flavor.EVO>,
                    smiley: ":`::!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "!(" as Ascii<Flavor.REVO>,
                    smiley: ":!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!(" as Ascii<Flavor.EVO>,
                    smiley: ":!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",!(" as Ascii<Flavor.REVO>,
                    smiley: ":,::!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!(" as Ascii<Flavor.EVO>,
                    smiley: ":,::!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'~!" as Ascii<Flavor.REVO>,
                    smiley: ":'::~!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'~!" as Ascii<Flavor.EVO>,
                    smiley: ":'::~!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.!(" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".!(" as Ascii<Flavor.REVO>,
                    smiley: ":.::!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".!(" as Ascii<Flavor.EVO>,
                    smiley: ":.::!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`~!" as Ascii<Flavor.REVO>,
                    smiley: ":`::~!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~!" as Ascii<Flavor.EVO>,
                    smiley: ":`::~!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~!" as Ascii<Flavor.REVO>,
                    smiley: ":~!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~!" as Ascii<Flavor.EVO>,
                    smiley: ":~!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::)!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)!(" as Ascii<Flavor.EVO>,
                    smiley: ":`::)!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")!(" as Ascii<Flavor.REVO>,
                    smiley: ":)!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!(" as Ascii<Flavor.EVO>,
                    smiley: ":)!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)!(" as Ascii<Flavor.REVO>,
                    smiley: ":,::)!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)!(" as Ascii<Flavor.EVO>,
                    smiley: ":,::)!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,)!(" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)!(" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.)!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::)!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.)!(" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::)!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".)!(" as Ascii<Flavor.REVO>,
                    smiley: ":.::)!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".)!(" as Ascii<Flavor.EVO>,
                    smiley: ":.::)!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")~!" as Ascii<Flavor.REVO>,
                    smiley: ":)~!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")~!" as Ascii<Flavor.EVO>,
                    smiley: ":)~!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'~!(" as Ascii<Flavor.REVO>,
                    smiley: ":'::~!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'~!(" as Ascii<Flavor.EVO>,
                    smiley: ":'::~!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",'~!(" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::~!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'~!(" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::~!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``~!(" as Ascii<Flavor.REVO>,
                    smiley: ":``::~!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``~!(" as Ascii<Flavor.EVO>,
                    smiley: ":``::~!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`~!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::~!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~!(" as Ascii<Flavor.EVO>,
                    smiley: ":`::~!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~!(" as Ascii<Flavor.REVO>,
                    smiley: ":~!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~!(" as Ascii<Flavor.EVO>,
                    smiley: ":~!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",~!(" as Ascii<Flavor.REVO>,
                    smiley: ":,::~!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~!(" as Ascii<Flavor.EVO>,
                    smiley: ":,::~!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``!~" as Ascii<Flavor.REVO>,
                    smiley: ":``::!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``!~" as Ascii<Flavor.EVO>,
                    smiley: ":``::!~:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`!~" as Ascii<Flavor.REVO>,
                    smiley: ":`::!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`!~" as Ascii<Flavor.EVO>,
                    smiley: ":`::!~:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "!~" as Ascii<Flavor.REVO>,
                    smiley: ":!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!~" as Ascii<Flavor.EVO>,
                    smiley: ":!~:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",!~" as Ascii<Flavor.REVO>,
                    smiley: ":,::!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!~" as Ascii<Flavor.EVO>,
                    smiley: ":,::!~:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~~!" as Ascii<Flavor.REVO>,
                    smiley: ":~~!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~~!" as Ascii<Flavor.EVO>,
                    smiley: ":~~!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",~~!" as Ascii<Flavor.REVO>,
                    smiley: ":,::~~!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~~!" as Ascii<Flavor.EVO>,
                    smiley: ":,::~~!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,~~!" as Ascii<Flavor.REVO>,
                    smiley: ":,,::~~!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,~~!" as Ascii<Flavor.EVO>,
                    smiley: ":,,::~~!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`'\\!" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::\\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'\\!" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::\\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'\\!" as Ascii<Flavor.REVO>,
                    smiley: ":'::\\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'\\!" as Ascii<Flavor.EVO>,
                    smiley: ":'::\\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")!~" as Ascii<Flavor.REVO>,
                    smiley: ":)!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!~" as Ascii<Flavor.EVO>,
                    smiley: ":)!~:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``\\!" as Ascii<Flavor.REVO>,
                    smiley: ":``::\\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``\\!" as Ascii<Flavor.EVO>,
                    smiley: ":``::\\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`\\!" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`\\!" as Ascii<Flavor.EVO>,
                    smiley: ":`::\\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "\\!" as Ascii<Flavor.REVO>,
                    smiley: ":\\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "\\!" as Ascii<Flavor.EVO>,
                    smiley: ":\\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",\\!" as Ascii<Flavor.REVO>,
                    smiley: ":,::\\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",\\!" as Ascii<Flavor.EVO>,
                    smiley: ":,::\\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,\\!" as Ascii<Flavor.REVO>,
                    smiley: ":,,::\\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,\\!" as Ascii<Flavor.EVO>,
                    smiley: ":,,::\\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "')\\!" as Ascii<Flavor.REVO>,
                    smiley: ":'::)\\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "')\\!" as Ascii<Flavor.EVO>,
                    smiley: ":'::)\\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".\\!" as Ascii<Flavor.REVO>,
                    smiley: ":.::\\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".\\!" as Ascii<Flavor.EVO>,
                    smiley: ":.::\\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",.\\!" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::\\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.\\!" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::\\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``)\\!" as Ascii<Flavor.REVO>,
                    smiley: ":``::)\\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)\\!" as Ascii<Flavor.EVO>,
                    smiley: ":``::)\\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)\\!" as Ascii<Flavor.REVO>,
                    smiley: ":`::)\\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)\\!" as Ascii<Flavor.EVO>,
                    smiley: ":`::)\\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")\\!" as Ascii<Flavor.REVO>,
                    smiley: ":)\\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")\\!" as Ascii<Flavor.EVO>,
                    smiley: ":)\\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`'!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'!)" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'!)" as Ascii<Flavor.REVO>,
                    smiley: ":'::!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'!)" as Ascii<Flavor.EVO>,
                    smiley: ":'::!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",'!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'!)" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``!)" as Ascii<Flavor.REVO>,
                    smiley: ":``::!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``!)" as Ascii<Flavor.EVO>,
                    smiley: ":``::!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`!)" as Ascii<Flavor.EVO>,
                    smiley: ":`::!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "!)" as Ascii<Flavor.REVO>,
                    smiley: ":!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!)" as Ascii<Flavor.EVO>,
                    smiley: ":!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!)" as Ascii<Flavor.EVO>,
                    smiley: ":,::!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,!)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,!)" as Ascii<Flavor.EVO>,
                    smiley: ":,,::!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.!)" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".!)" as Ascii<Flavor.REVO>,
                    smiley: ":.::!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".!)" as Ascii<Flavor.EVO>,
                    smiley: ":.::!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",.!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.!)" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::)!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)!)" as Ascii<Flavor.EVO>,
                    smiley: ":`::)!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")!)" as Ascii<Flavor.REVO>,
                    smiley: ":)!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!)" as Ascii<Flavor.EVO>,
                    smiley: ":)!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'(!" as Ascii<Flavor.REVO>,
                    smiley: ":'::(!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(!" as Ascii<Flavor.EVO>,
                    smiley: ":'::(!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "!/" as Ascii<Flavor.REVO>,
                    smiley: ":!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!/" as Ascii<Flavor.EVO>,
                    smiley: ":!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!/" as Ascii<Flavor.EVO>,
                    smiley: ":,::!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`(!" as Ascii<Flavor.REVO>,
                    smiley: ":`::(!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(!" as Ascii<Flavor.EVO>,
                    smiley: ":`::(!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(!" as Ascii<Flavor.REVO>,
                    smiley: ":(!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(!" as Ascii<Flavor.EVO>,
                    smiley: ":(!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",(!" as Ascii<Flavor.REVO>,
                    smiley: ":,::(!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(!" as Ascii<Flavor.EVO>,
                    smiley: ":,::(!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,(!" as Ascii<Flavor.REVO>,
                    smiley: ":,,::(!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,(!" as Ascii<Flavor.EVO>,
                    smiley: ":,,::(!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.(!" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::(!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.(!" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::(!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".(!" as Ascii<Flavor.REVO>,
                    smiley: ":.::(!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(!" as Ascii<Flavor.EVO>,
                    smiley: ":.::(!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`~!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::~!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~!)" as Ascii<Flavor.EVO>,
                    smiley: ":`::~!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~!)" as Ascii<Flavor.REVO>,
                    smiley: ":~!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~!)" as Ascii<Flavor.EVO>,
                    smiley: ":~!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",~!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::~!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~!)" as Ascii<Flavor.EVO>,
                    smiley: ":,::~!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`'(!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::(!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'(!(" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::(!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'(!(" as Ascii<Flavor.REVO>,
                    smiley: ":'::(!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(!(" as Ascii<Flavor.EVO>,
                    smiley: ":'::(!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".~!)" as Ascii<Flavor.REVO>,
                    smiley: ":.::~!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".~!)" as Ascii<Flavor.EVO>,
                    smiley: ":.::~!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "\\!~" as Ascii<Flavor.REVO>,
                    smiley: ":\\!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "\\!~" as Ascii<Flavor.EVO>,
                    smiley: ":\\!~:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``(!(" as Ascii<Flavor.REVO>,
                    smiley: ":``::(!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``(!(" as Ascii<Flavor.EVO>,
                    smiley: ":``::(!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`(!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::(!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(!(" as Ascii<Flavor.EVO>,
                    smiley: ":`::(!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(!(" as Ascii<Flavor.REVO>,
                    smiley: ":(!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(!(" as Ascii<Flavor.EVO>,
                    smiley: ":(!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",(!(" as Ascii<Flavor.REVO>,
                    smiley: ":,::(!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(!(" as Ascii<Flavor.EVO>,
                    smiley: ":,::(!(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~!/" as Ascii<Flavor.REVO>,
                    smiley: ":~!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~!/" as Ascii<Flavor.EVO>,
                    smiley: ":~!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`'\\\\!" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::\\ \\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'\\\\!" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::\\ \\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'\\\\!" as Ascii<Flavor.REVO>,
                    smiley: ":'::\\ \\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'\\\\!" as Ascii<Flavor.EVO>,
                    smiley: ":'::\\ \\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",'\\\\!" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::\\ \\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'\\\\!" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::\\ \\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``\\\\!" as Ascii<Flavor.REVO>,
                    smiley: ":``::\\ \\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``\\\\!" as Ascii<Flavor.EVO>,
                    smiley: ":``::\\ \\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`\\\\!" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\ \\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`\\\\!" as Ascii<Flavor.EVO>,
                    smiley: ":`::\\ \\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "\\\\!" as Ascii<Flavor.REVO>,
                    smiley: ":\\ \\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "\\\\!" as Ascii<Flavor.EVO>,
                    smiley: ":\\ \\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",\\\\!" as Ascii<Flavor.REVO>,
                    smiley: ":,::\\ \\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",\\\\!" as Ascii<Flavor.EVO>,
                    smiley: ":,::\\ \\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,\\\\!" as Ascii<Flavor.REVO>,
                    smiley: ":,,::\\ \\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,\\\\!" as Ascii<Flavor.EVO>,
                    smiley: ":,,::\\ \\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.\\\\!" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::\\ \\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.\\\\!" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::\\ \\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".\\\\!" as Ascii<Flavor.REVO>,
                    smiley: ":.::\\ \\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".\\\\!" as Ascii<Flavor.EVO>,
                    smiley: ":.::\\ \\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``)\\\\!" as Ascii<Flavor.REVO>,
                    smiley: ":``::)\\ \\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)\\\\!" as Ascii<Flavor.EVO>,
                    smiley: ":``::)\\ \\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)\\\\!" as Ascii<Flavor.REVO>,
                    smiley: ":`::)\\ \\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)\\\\!" as Ascii<Flavor.EVO>,
                    smiley: ":`::)\\ \\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")\\\\!" as Ascii<Flavor.REVO>,
                    smiley: ":)\\ \\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")\\\\!" as Ascii<Flavor.EVO>,
                    smiley: ":)\\ \\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)\\\\!" as Ascii<Flavor.REVO>,
                    smiley: ":,::)\\ \\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)\\\\!" as Ascii<Flavor.EVO>,
                    smiley: ":,::)\\ \\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,)\\\\!" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)\\ \\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)\\\\!" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)\\ \\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``\\!)" as Ascii<Flavor.REVO>,
                    smiley: ":``::\\!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``\\!)" as Ascii<Flavor.EVO>,
                    smiley: ":``::\\!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`\\!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`\\!)" as Ascii<Flavor.EVO>,
                    smiley: ":`::\\!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "\\!)" as Ascii<Flavor.REVO>,
                    smiley: ":\\!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "\\!)" as Ascii<Flavor.EVO>,
                    smiley: ":\\!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",\\!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::\\!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",\\!)" as Ascii<Flavor.EVO>,
                    smiley: ":,::\\!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(!~" as Ascii<Flavor.REVO>,
                    smiley: ":(!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(!~" as Ascii<Flavor.EVO>,
                    smiley: ":(!~:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.\\!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::\\!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.\\!)" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::\\!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".\\!)" as Ascii<Flavor.REVO>,
                    smiley: ":.::\\!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".\\!)" as Ascii<Flavor.EVO>,
                    smiley: ":.::\\!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",.\\!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::\\!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.\\!)" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::\\!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'\\!/" as Ascii<Flavor.REVO>,
                    smiley: ":'::\\!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'\\!/" as Ascii<Flavor.EVO>,
                    smiley: ":'::\\!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",'\\!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::\\!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'\\!/" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::\\!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``\\!/" as Ascii<Flavor.REVO>,
                    smiley: ":``::\\!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``\\!/" as Ascii<Flavor.EVO>,
                    smiley: ":``::\\!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`\\!/" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`\\!/" as Ascii<Flavor.EVO>,
                    smiley: ":`::\\!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "\\!/" as Ascii<Flavor.REVO>,
                    smiley: ":\\!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "\\!/" as Ascii<Flavor.EVO>,
                    smiley: ":\\!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",\\!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::\\!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",\\!/" as Ascii<Flavor.EVO>,
                    smiley: ":,::\\!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`(\\!" as Ascii<Flavor.REVO>,
                    smiley: ":`::(\\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(\\!" as Ascii<Flavor.EVO>,
                    smiley: ":`::(\\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(\\!" as Ascii<Flavor.REVO>,
                    smiley: ":(\\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(\\!" as Ascii<Flavor.EVO>,
                    smiley: ":(\\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",(\\!" as Ascii<Flavor.REVO>,
                    smiley: ":,::(\\!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(\\!" as Ascii<Flavor.EVO>,
                    smiley: ":,::(\\!:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".\\!/" as Ascii<Flavor.REVO>,
                    smiley: ":.::\\!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".\\!/" as Ascii<Flavor.EVO>,
                    smiley: ":.::\\!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",.\\!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::\\!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.\\!/" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::\\!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)\\!/" as Ascii<Flavor.REVO>,
                    smiley: ":`::)\\!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)\\!/" as Ascii<Flavor.EVO>,
                    smiley: ":`::)\\!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")\\!/" as Ascii<Flavor.REVO>,
                    smiley: ":)\\!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")\\!/" as Ascii<Flavor.EVO>,
                    smiley: ":)\\!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
        ].reverse()
        const expectedN1T: FlavorsExpectation[] = [
            {
                revo: {
                    ascii: ",)\\!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::)\\!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)\\!/" as Ascii<Flavor.EVO>,
                    smiley: ":,::)\\!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,)\\!/" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)\\!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)\\!/" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)\\!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`'(!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::(!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'(!)" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::(!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'(!)" as Ascii<Flavor.REVO>,
                    smiley: ":'::(!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(!)" as Ascii<Flavor.EVO>,
                    smiley: ":'::(!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`!/)" as Ascii<Flavor.REVO>,
                    smiley: ":`::!/):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`!/)" as Ascii<Flavor.EVO>,
                    smiley: ":`::!/):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "!/)" as Ascii<Flavor.REVO>,
                    smiley: ":!/):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!/)" as Ascii<Flavor.EVO>,
                    smiley: ":!/):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",!/)" as Ascii<Flavor.REVO>,
                    smiley: ":,::!/):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!/)" as Ascii<Flavor.EVO>,
                    smiley: ":,::!/):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`(!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::(!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(!)" as Ascii<Flavor.EVO>,
                    smiley: ":`::(!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(!)" as Ascii<Flavor.REVO>,
                    smiley: ":(!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(!)" as Ascii<Flavor.EVO>,
                    smiley: ":(!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",(!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::(!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(!)" as Ascii<Flavor.EVO>,
                    smiley: ":,::(!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,(!)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::(!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,(!)" as Ascii<Flavor.EVO>,
                    smiley: ":,,::(!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.(!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::(!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.(!)" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::(!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".(!)" as Ascii<Flavor.REVO>,
                    smiley: ":.::(!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(!)" as Ascii<Flavor.EVO>,
                    smiley: ":.::(!):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`'(!/" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::(!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'(!/" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::(!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'(!/" as Ascii<Flavor.REVO>,
                    smiley: ":'::(!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(!/" as Ascii<Flavor.EVO>,
                    smiley: ":'::(!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",'(!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::(!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'(!/" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::(!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "!//" as Ascii<Flavor.REVO>,
                    smiley: ":!/ /:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!//" as Ascii<Flavor.EVO>,
                    smiley: ":!/ /:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`(!/" as Ascii<Flavor.REVO>,
                    smiley: ":`::(!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(!/" as Ascii<Flavor.EVO>,
                    smiley: ":`::(!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(!/" as Ascii<Flavor.REVO>,
                    smiley: ":(!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(!/" as Ascii<Flavor.EVO>,
                    smiley: ":(!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",(!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::(!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(!/" as Ascii<Flavor.EVO>,
                    smiley: ":,::(!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,(!/" as Ascii<Flavor.REVO>,
                    smiley: ":,,::(!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,(!/" as Ascii<Flavor.EVO>,
                    smiley: ":,,::(!/:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``)!//" as Ascii<Flavor.REVO>,
                    smiley: ":``::)!/ /:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)!//" as Ascii<Flavor.EVO>,
                    smiley: ":``::)!/ /:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)!//" as Ascii<Flavor.REVO>,
                    smiley: ":`::)!/ /:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)!//" as Ascii<Flavor.EVO>,
                    smiley: ":`::)!/ /:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")!//" as Ascii<Flavor.REVO>,
                    smiley: ":)!/ /:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!//" as Ascii<Flavor.EVO>,
                    smiley: ":)!/ /:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)!//" as Ascii<Flavor.REVO>,
                    smiley: ":,::)!/ /:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)!//" as Ascii<Flavor.EVO>,
                    smiley: ":,::)!/ /:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,)!//" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)!/ /:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)!//" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)!/ /:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "')!!(" as Ascii<Flavor.REVO>,
                    smiley: ":'::)!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'//|b" as Ascii<Flavor.EVO>,
                    smiley: ":'::/ /|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",')!!(" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::)!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'//|b" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::/ /|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``)!!(" as Ascii<Flavor.REVO>,
                    smiley: ":``::)!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``//|b" as Ascii<Flavor.EVO>,
                    smiley: ":``::/ /|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)!!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::)!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`//|b" as Ascii<Flavor.EVO>,
                    smiley: ":`::/ /|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")!!(" as Ascii<Flavor.REVO>,
                    smiley: ":)!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "//|b" as Ascii<Flavor.EVO>,
                    smiley: ":/ /|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)!!(" as Ascii<Flavor.REVO>,
                    smiley: ":,::)!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",//|b" as Ascii<Flavor.EVO>,
                    smiley: ":,::/ /|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,)!!(" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,//|b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::/ /|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.)!!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::)!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.//|b" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::/ /|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".)!!(" as Ascii<Flavor.REVO>,
                    smiley: ":.::)!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".//|b" as Ascii<Flavor.EVO>,
                    smiley: ":.::/ /|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",.)!!(" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::)!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.//|b" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::/ /|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")~!!" as Ascii<Flavor.REVO>,
                    smiley: ":)~!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~|\\b" as Ascii<Flavor.EVO>,
                    smiley: ":~|\\::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`~!!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::~!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(|(b" as Ascii<Flavor.EVO>,
                    smiley: ":`::(|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~!!(" as Ascii<Flavor.REVO>,
                    smiley: ":~!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(|(b" as Ascii<Flavor.EVO>,
                    smiley: ":(|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",~!!(" as Ascii<Flavor.REVO>,
                    smiley: ":,::~!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(|(b" as Ascii<Flavor.EVO>,
                    smiley: ":,::(|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,~!!(" as Ascii<Flavor.REVO>,
                    smiley: ":,,::~!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,(|(b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::(|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "!!~" as Ascii<Flavor.REVO>,
                    smiley: ":!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "/|~b" as Ascii<Flavor.EVO>,
                    smiley: ":/|~::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'~~!!" as Ascii<Flavor.REVO>,
                    smiley: ":'::~~!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'~|)b" as Ascii<Flavor.EVO>,
                    smiley: ":'::~|)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".~!!(" as Ascii<Flavor.REVO>,
                    smiley: ":.::~!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(|(b" as Ascii<Flavor.EVO>,
                    smiley: ":.::(|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",.~!!(" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::~!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.(|(b" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::(|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`~~!!" as Ascii<Flavor.REVO>,
                    smiley: ":`::~~!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~|)b" as Ascii<Flavor.EVO>,
                    smiley: ":`::~|)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~~!!" as Ascii<Flavor.REVO>,
                    smiley: ":~~!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~|)b" as Ascii<Flavor.EVO>,
                    smiley: ":~|)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",~~!!" as Ascii<Flavor.REVO>,
                    smiley: ":,::~~!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~|)b" as Ascii<Flavor.EVO>,
                    smiley: ":,::~|)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "')!!~" as Ascii<Flavor.REVO>,
                    smiley: ":'::)!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(|b" as Ascii<Flavor.EVO>,
                    smiley: ":'::(|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",')!!~" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::)!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'(|b" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::(|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``)!!~" as Ascii<Flavor.REVO>,
                    smiley: ":``::)!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``(|b" as Ascii<Flavor.EVO>,
                    smiley: ":``::(|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)!!~" as Ascii<Flavor.REVO>,
                    smiley: ":`::)!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(|b" as Ascii<Flavor.EVO>,
                    smiley: ":`::(|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")!!~" as Ascii<Flavor.REVO>,
                    smiley: ":)!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(|b" as Ascii<Flavor.EVO>,
                    smiley: ":(|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)!!~" as Ascii<Flavor.REVO>,
                    smiley: ":,::)!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(|b" as Ascii<Flavor.EVO>,
                    smiley: ":,::(|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`\\!!" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|\\b" as Ascii<Flavor.EVO>,
                    smiley: ":`::|\\::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "\\!!" as Ascii<Flavor.REVO>,
                    smiley: ":\\!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|\\b" as Ascii<Flavor.EVO>,
                    smiley: ":|\\::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".)!!~" as Ascii<Flavor.REVO>,
                    smiley: ":.::)!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(|b" as Ascii<Flavor.EVO>,
                    smiley: ":.::(|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")\\!!" as Ascii<Flavor.REVO>,
                    smiley: ":)\\!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|)b" as Ascii<Flavor.EVO>,
                    smiley: ":)|)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)\\!!" as Ascii<Flavor.REVO>,
                    smiley: ":,::)\\!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)|)b" as Ascii<Flavor.EVO>,
                    smiley: ":,::)|)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`'!!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'|)b" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::|)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'!!)" as Ascii<Flavor.REVO>,
                    smiley: ":'::!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'|)b" as Ascii<Flavor.EVO>,
                    smiley: ":'::|)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",'!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'|)b" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::|)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``!!)" as Ascii<Flavor.REVO>,
                    smiley: ":``::!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``|)b" as Ascii<Flavor.EVO>,
                    smiley: ":``::|)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`!!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|)b" as Ascii<Flavor.EVO>,
                    smiley: ":`::|)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "!!)" as Ascii<Flavor.REVO>,
                    smiley: ":!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|)b" as Ascii<Flavor.EVO>,
                    smiley: ":|)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",|)b" as Ascii<Flavor.EVO>,
                    smiley: ":,::|)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,|)b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::|)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.!!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.|)b" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::|)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".!!)" as Ascii<Flavor.REVO>,
                    smiley: ":.::!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".|)b" as Ascii<Flavor.EVO>,
                    smiley: ":.::|)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",.!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.|)b" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::|)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")!!)" as Ascii<Flavor.REVO>,
                    smiley: ":)!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")/|b" as Ascii<Flavor.EVO>,
                    smiley: ":)/|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::)!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)/|b" as Ascii<Flavor.EVO>,
                    smiley: ":,::)/|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,)!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)/|b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)/|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`'!!/" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'/|b" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::/|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'!!/" as Ascii<Flavor.REVO>,
                    smiley: ":'::!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'/|b" as Ascii<Flavor.EVO>,
                    smiley: ":'::/|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".)!!)" as Ascii<Flavor.REVO>,
                    smiley: ":.::)!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".)/|b" as Ascii<Flavor.EVO>,
                    smiley: ":.::)/|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``!!/" as Ascii<Flavor.REVO>,
                    smiley: ":``::!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``/|b" as Ascii<Flavor.EVO>,
                    smiley: ":``::/|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`!!/" as Ascii<Flavor.REVO>,
                    smiley: ":`::!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`/|b" as Ascii<Flavor.EVO>,
                    smiley: ":`::/|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "!!/" as Ascii<Flavor.REVO>,
                    smiley: ":!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "/|b" as Ascii<Flavor.EVO>,
                    smiley: ":/|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",!!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",/|b" as Ascii<Flavor.EVO>,
                    smiley: ":,::/|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,!!/" as Ascii<Flavor.REVO>,
                    smiley: ":,,::!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,/|b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::/|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(!!" as Ascii<Flavor.REVO>,
                    smiley: ":(!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|~b" as Ascii<Flavor.EVO>,
                    smiley: ":)|~::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".!!/" as Ascii<Flavor.REVO>,
                    smiley: ":.::!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "./|b" as Ascii<Flavor.EVO>,
                    smiley: ":.::/|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",.!!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",./|b" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::/|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``~!!)" as Ascii<Flavor.REVO>,
                    smiley: ":``::~!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``~~|b" as Ascii<Flavor.EVO>,
                    smiley: ":``::~~|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`~!!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::~!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~~|b" as Ascii<Flavor.EVO>,
                    smiley: ":`::~~|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~!!)" as Ascii<Flavor.REVO>,
                    smiley: ":~!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~~|b" as Ascii<Flavor.EVO>,
                    smiley: ":~~|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`\\!!~" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|~b" as Ascii<Flavor.EVO>,
                    smiley: ":`::|~::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "\\!!~" as Ascii<Flavor.REVO>,
                    smiley: ":\\!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|~b" as Ascii<Flavor.EVO>,
                    smiley: ":|~::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",\\!!~" as Ascii<Flavor.REVO>,
                    smiley: ":,::\\!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",|~b" as Ascii<Flavor.EVO>,
                    smiley: ":,::|~::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,\\!!~" as Ascii<Flavor.REVO>,
                    smiley: ":,,::\\!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,|~b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::|~::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`(!!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::(!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~|(b" as Ascii<Flavor.EVO>,
                    smiley: ":`::~|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(!!(" as Ascii<Flavor.REVO>,
                    smiley: ":(!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~|(b" as Ascii<Flavor.EVO>,
                    smiley: ":~|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",(!!(" as Ascii<Flavor.REVO>,
                    smiley: ":,::(!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~|(b" as Ascii<Flavor.EVO>,
                    smiley: ":,::~|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,(!!(" as Ascii<Flavor.REVO>,
                    smiley: ":,,::(!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,~|(b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::~|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.(!!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::(!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.~|(b" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::~|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".(!!(" as Ascii<Flavor.REVO>,
                    smiley: ":.::(!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".~|(b" as Ascii<Flavor.EVO>,
                    smiley: ":.::~|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~!!/" as Ascii<Flavor.REVO>,
                    smiley: ":~!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")~|b" as Ascii<Flavor.EVO>,
                    smiley: ":)~|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'\\\\!!" as Ascii<Flavor.REVO>,
                    smiley: ":'::\\ \\!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "')|(b" as Ascii<Flavor.EVO>,
                    smiley: ":'::)|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",'\\\\!!" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::\\ \\!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",')|(b" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::)|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``\\\\!!" as Ascii<Flavor.REVO>,
                    smiley: ":``::\\ \\!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)|(b" as Ascii<Flavor.EVO>,
                    smiley: ":``::)|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`\\\\!!" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\ \\!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)|(b" as Ascii<Flavor.EVO>,
                    smiley: ":`::)|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "\\\\!!" as Ascii<Flavor.REVO>,
                    smiley: ":\\ \\!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|(b" as Ascii<Flavor.EVO>,
                    smiley: ":)|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",\\\\!!" as Ascii<Flavor.REVO>,
                    smiley: ":,::\\ \\!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)|(b" as Ascii<Flavor.EVO>,
                    smiley: ":,::)|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")\\\\!!" as Ascii<Flavor.REVO>,
                    smiley: ":)\\ \\!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~|b" as Ascii<Flavor.EVO>,
                    smiley: ":~|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)\\\\!!" as Ascii<Flavor.REVO>,
                    smiley: ":,::)\\ \\!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~|b" as Ascii<Flavor.EVO>,
                    smiley: ":,::~|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'\\!!)" as Ascii<Flavor.REVO>,
                    smiley: ":'::\\!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'|(b" as Ascii<Flavor.EVO>,
                    smiley: ":'::|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",'\\!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::\\!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'|(b" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".)\\\\!!" as Ascii<Flavor.REVO>,
                    smiley: ":.::)\\ \\!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".~|b" as Ascii<Flavor.EVO>,
                    smiley: ":.::~|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`\\!!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|(b" as Ascii<Flavor.EVO>,
                    smiley: ":`::|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "\\!!)" as Ascii<Flavor.REVO>,
                    smiley: ":\\!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|(b" as Ascii<Flavor.EVO>,
                    smiley: ":|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",\\!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::\\!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",|(b" as Ascii<Flavor.EVO>,
                    smiley: ":,::|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,\\!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::\\!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,|(b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::|(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``(!!~" as Ascii<Flavor.REVO>,
                    smiley: ":``::(!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)|b" as Ascii<Flavor.EVO>,
                    smiley: ":``::)|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`(!!~" as Ascii<Flavor.REVO>,
                    smiley: ":`::(!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)|b" as Ascii<Flavor.EVO>,
                    smiley: ":`::)|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(!!~" as Ascii<Flavor.REVO>,
                    smiley: ":(!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|b" as Ascii<Flavor.EVO>,
                    smiley: ":)|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",(!!~" as Ascii<Flavor.REVO>,
                    smiley: ":,::(!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)|b" as Ascii<Flavor.EVO>,
                    smiley: ":,::)|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`'\\!!/" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::\\!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'|b" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'\\!!/" as Ascii<Flavor.REVO>,
                    smiley: ":'::\\!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'|b" as Ascii<Flavor.EVO>,
                    smiley: ":'::|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".(!!~" as Ascii<Flavor.REVO>,
                    smiley: ":.::(!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".)|b" as Ascii<Flavor.EVO>,
                    smiley: ":.::)|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``\\!!/" as Ascii<Flavor.REVO>,
                    smiley: ":``::\\!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``|b" as Ascii<Flavor.EVO>,
                    smiley: ":``::|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`\\!!/" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|b" as Ascii<Flavor.EVO>,
                    smiley: ":`::|::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "\\!!/" as Ascii<Flavor.REVO>,
                    smiley: ":\\!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "b" as Ascii<Flavor.EVO>,
                    smiley: ":b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
        ].reverse()
        const expectedN2A: FlavorsExpectation[] = [
            {
                revo: {
                    ascii: "\\!!/" as Ascii<Flavor.REVO>,
                    smiley: ":\\!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "b" as Ascii<Flavor.EVO>,
                    smiley: ":b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",\\!!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::\\!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!b" as Ascii<Flavor.EVO>,
                    smiley: ":,::!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,\\!!/" as Ascii<Flavor.REVO>,
                    smiley: ":,,::\\!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,!b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "')!!!" as Ascii<Flavor.REVO>,
                    smiley: ":'::)!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "')!b" as Ascii<Flavor.EVO>,
                    smiley: ":'::)!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".\\!!/" as Ascii<Flavor.REVO>,
                    smiley: ":.::\\!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".!b" as Ascii<Flavor.EVO>,
                    smiley: ":.::!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",.\\!!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::\\!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.!b" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)!!!" as Ascii<Flavor.REVO>,
                    smiley: ":`::)!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)!b" as Ascii<Flavor.EVO>,
                    smiley: ":`::)!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")!!!" as Ascii<Flavor.REVO>,
                    smiley: ":)!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!b" as Ascii<Flavor.EVO>,
                    smiley: ":)!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)!!!" as Ascii<Flavor.REVO>,
                    smiley: ":,::)!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)!b" as Ascii<Flavor.EVO>,
                    smiley: ":,::)!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,)!!!" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)!b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":``::!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``!(b" as Ascii<Flavor.EVO>,
                    smiley: ":``::!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`!(b" as Ascii<Flavor.EVO>,
                    smiley: ":`::!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!(b" as Ascii<Flavor.EVO>,
                    smiley: ":!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":,::!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!(b" as Ascii<Flavor.EVO>,
                    smiley: ":,::!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'~!!!" as Ascii<Flavor.REVO>,
                    smiley: ":'::~!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'~!b" as Ascii<Flavor.EVO>,
                    smiley: ":'::~!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.!(b" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":.::!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".!(b" as Ascii<Flavor.EVO>,
                    smiley: ":.::!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`~!!!" as Ascii<Flavor.REVO>,
                    smiley: ":`::~!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~!b" as Ascii<Flavor.EVO>,
                    smiley: ":`::~!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~!!!" as Ascii<Flavor.REVO>,
                    smiley: ":~!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~!b" as Ascii<Flavor.EVO>,
                    smiley: ":~!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::)!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)!(b" as Ascii<Flavor.EVO>,
                    smiley: ":`::)!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":)!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!(b" as Ascii<Flavor.EVO>,
                    smiley: ":)!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":,::)!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)!(b" as Ascii<Flavor.EVO>,
                    smiley: ":,::)!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,)!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)!(b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.)!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::)!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.)!(b" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::)!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".)!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":.::)!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".)!(b" as Ascii<Flavor.EVO>,
                    smiley: ":.::)!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")~!!!" as Ascii<Flavor.REVO>,
                    smiley: ":)~!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")~!b" as Ascii<Flavor.EVO>,
                    smiley: ":)~!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'~!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":'::~!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'~!(b" as Ascii<Flavor.EVO>,
                    smiley: ":'::~!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",'~!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::~!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'~!(b" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::~!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``~!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":``::~!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``~!(b" as Ascii<Flavor.EVO>,
                    smiley: ":``::~!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`~!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::~!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~!(b" as Ascii<Flavor.EVO>,
                    smiley: ":`::~!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":~!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~!(b" as Ascii<Flavor.EVO>,
                    smiley: ":~!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",~!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":,::~!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~!(b" as Ascii<Flavor.EVO>,
                    smiley: ":,::~!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``!!!~" as Ascii<Flavor.REVO>,
                    smiley: ":``::!!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``!~b" as Ascii<Flavor.EVO>,
                    smiley: ":``::!~::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`!!!~" as Ascii<Flavor.REVO>,
                    smiley: ":`::!!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`!~b" as Ascii<Flavor.EVO>,
                    smiley: ":`::!~::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "!!!~" as Ascii<Flavor.REVO>,
                    smiley: ":!!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!~b" as Ascii<Flavor.EVO>,
                    smiley: ":!~::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",!!!~" as Ascii<Flavor.REVO>,
                    smiley: ":,::!!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!~b" as Ascii<Flavor.EVO>,
                    smiley: ":,::!~::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~~!!!" as Ascii<Flavor.REVO>,
                    smiley: ":~~!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~~!b" as Ascii<Flavor.EVO>,
                    smiley: ":~~!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",~~!!!" as Ascii<Flavor.REVO>,
                    smiley: ":,::~~!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~~!b" as Ascii<Flavor.EVO>,
                    smiley: ":,::~~!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,~~!!!" as Ascii<Flavor.REVO>,
                    smiley: ":,,::~~!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,~~!b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::~~!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`'\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::\\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::\\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":'::\\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":'::\\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")!!!~" as Ascii<Flavor.REVO>,
                    smiley: ":)!!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!~b" as Ascii<Flavor.EVO>,
                    smiley: ":)!~::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":``::\\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":``::\\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":`::\\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":\\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":\\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":,::\\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":,::\\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":,,::\\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::\\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "')\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":'::)\\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "')\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":'::)\\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":.::\\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":.::\\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",.\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::\\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::\\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``)\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":``::)\\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":``::)\\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":`::)\\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":`::)\\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":)\\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":)\\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`'!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'!)b" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":'::!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'!)b" as Ascii<Flavor.EVO>,
                    smiley: ":'::!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",'!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'!)b" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":``::!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``!)b" as Ascii<Flavor.EVO>,
                    smiley: ":``::!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`!)b" as Ascii<Flavor.EVO>,
                    smiley: ":`::!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!)b" as Ascii<Flavor.EVO>,
                    smiley: ":!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!)b" as Ascii<Flavor.EVO>,
                    smiley: ":,::!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,!)b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.!)b" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":.::!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".!)b" as Ascii<Flavor.EVO>,
                    smiley: ":.::!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",.!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.!)b" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::)!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)!)b" as Ascii<Flavor.EVO>,
                    smiley: ":`::)!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":)!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!)b" as Ascii<Flavor.EVO>,
                    smiley: ":)!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'(!!!" as Ascii<Flavor.REVO>,
                    smiley: ":'::(!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(!b" as Ascii<Flavor.EVO>,
                    smiley: ":'::(!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!/b" as Ascii<Flavor.EVO>,
                    smiley: ":!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!/b" as Ascii<Flavor.EVO>,
                    smiley: ":,::!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`(!!!" as Ascii<Flavor.REVO>,
                    smiley: ":`::(!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(!b" as Ascii<Flavor.EVO>,
                    smiley: ":`::(!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(!!!" as Ascii<Flavor.REVO>,
                    smiley: ":(!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(!b" as Ascii<Flavor.EVO>,
                    smiley: ":(!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",(!!!" as Ascii<Flavor.REVO>,
                    smiley: ":,::(!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(!b" as Ascii<Flavor.EVO>,
                    smiley: ":,::(!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,(!!!" as Ascii<Flavor.REVO>,
                    smiley: ":,,::(!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,(!b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::(!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.(!!!" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::(!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.(!b" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::(!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".(!!!" as Ascii<Flavor.REVO>,
                    smiley: ":.::(!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(!b" as Ascii<Flavor.EVO>,
                    smiley: ":.::(!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`~!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::~!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~!)b" as Ascii<Flavor.EVO>,
                    smiley: ":`::~!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":~!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~!)b" as Ascii<Flavor.EVO>,
                    smiley: ":~!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",~!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::~!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~!)b" as Ascii<Flavor.EVO>,
                    smiley: ":,::~!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`'(!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::(!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'(!(b" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::(!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'(!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":'::(!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(!(b" as Ascii<Flavor.EVO>,
                    smiley: ":'::(!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".~!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":.::~!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".~!)b" as Ascii<Flavor.EVO>,
                    smiley: ":.::~!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "\\!!!~" as Ascii<Flavor.REVO>,
                    smiley: ":\\!!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "\\!~b" as Ascii<Flavor.EVO>,
                    smiley: ":\\!~::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``(!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":``::(!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``(!(b" as Ascii<Flavor.EVO>,
                    smiley: ":``::(!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`(!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":`::(!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(!(b" as Ascii<Flavor.EVO>,
                    smiley: ":`::(!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":(!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(!(b" as Ascii<Flavor.EVO>,
                    smiley: ":(!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",(!!!(" as Ascii<Flavor.REVO>,
                    smiley: ":,::(!!!(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(!(b" as Ascii<Flavor.EVO>,
                    smiley: ":,::(!(::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":~!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~!/b" as Ascii<Flavor.EVO>,
                    smiley: ":~!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`'\\\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::\\ \\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'\\\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::\\ \\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'\\\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":'::\\ \\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'\\\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":'::\\ \\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",'\\\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::\\ \\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'\\\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::\\ \\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``\\\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":``::\\ \\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``\\\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":``::\\ \\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`\\\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\ \\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`\\\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":`::\\ \\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "\\\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":\\ \\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "\\\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":\\ \\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",\\\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":,::\\ \\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",\\\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":,::\\ \\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,\\\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":,,::\\ \\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,\\\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::\\ \\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.\\\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::\\ \\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.\\\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::\\ \\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".\\\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":.::\\ \\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".\\\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":.::\\ \\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``)\\\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":``::)\\ \\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)\\\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":``::)\\ \\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)\\\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":`::)\\ \\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)\\\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":`::)\\ \\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")\\\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":)\\ \\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")\\\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":)\\ \\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)\\\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":,::)\\ \\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)\\\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":,::)\\ \\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,)\\\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)\\ \\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)\\\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)\\ \\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``\\!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":``::\\!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``\\!)b" as Ascii<Flavor.EVO>,
                    smiley: ":``::\\!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`\\!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`\\!)b" as Ascii<Flavor.EVO>,
                    smiley: ":`::\\!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "\\!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":\\!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "\\!)b" as Ascii<Flavor.EVO>,
                    smiley: ":\\!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",\\!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::\\!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",\\!)b" as Ascii<Flavor.EVO>,
                    smiley: ":,::\\!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(!!!~" as Ascii<Flavor.REVO>,
                    smiley: ":(!!!~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(!~b" as Ascii<Flavor.EVO>,
                    smiley: ":(!~::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.\\!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::\\!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.\\!)b" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::\\!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".\\!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":.::\\!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".\\!)b" as Ascii<Flavor.EVO>,
                    smiley: ":.::\\!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",.\\!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::\\!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.\\!)b" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::\\!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'\\!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":'::\\!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'\\!/b" as Ascii<Flavor.EVO>,
                    smiley: ":'::\\!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",'\\!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::\\!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'\\!/b" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::\\!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``\\!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":``::\\!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``\\!/b" as Ascii<Flavor.EVO>,
                    smiley: ":``::\\!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`\\!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`\\!/b" as Ascii<Flavor.EVO>,
                    smiley: ":`::\\!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "\\!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":\\!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "\\!/b" as Ascii<Flavor.EVO>,
                    smiley: ":\\!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",\\!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::\\!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",\\!/b" as Ascii<Flavor.EVO>,
                    smiley: ":,::\\!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`(\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":`::(\\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":`::(\\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":(\\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":(\\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",(\\!!!" as Ascii<Flavor.REVO>,
                    smiley: ":,::(\\!!!:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(\\!b" as Ascii<Flavor.EVO>,
                    smiley: ":,::(\\!::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".\\!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":.::\\!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".\\!/b" as Ascii<Flavor.EVO>,
                    smiley: ":.::\\!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",.\\!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::\\!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.\\!/b" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::\\!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)\\!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":`::)\\!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)\\!/b" as Ascii<Flavor.EVO>,
                    smiley: ":`::)\\!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")\\!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":)\\!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")\\!/b" as Ascii<Flavor.EVO>,
                    smiley: ":)\\!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
        ].reverse()
        const expectedN2T: FlavorsExpectation[] = [
            {
                revo: {
                    ascii: ",)\\!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::)\\!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)\\!/b" as Ascii<Flavor.EVO>,
                    smiley: ":,::)\\!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,)\\!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)\\!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)\\!/b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)\\!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`'(!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::(!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'(!)b" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::(!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'(!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":'::(!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(!)b" as Ascii<Flavor.EVO>,
                    smiley: ":'::(!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`!!!/)" as Ascii<Flavor.REVO>,
                    smiley: ":`::!!!/):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`!/)b" as Ascii<Flavor.EVO>,
                    smiley: ":`::!/)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "!!!/)" as Ascii<Flavor.REVO>,
                    smiley: ":!!!/):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!/)b" as Ascii<Flavor.EVO>,
                    smiley: ":!/)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",!!!/)" as Ascii<Flavor.REVO>,
                    smiley: ":,::!!!/):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!/)b" as Ascii<Flavor.EVO>,
                    smiley: ":,::!/)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`(!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::(!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(!)b" as Ascii<Flavor.EVO>,
                    smiley: ":`::(!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":(!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(!)b" as Ascii<Flavor.EVO>,
                    smiley: ":(!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",(!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,::(!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(!)b" as Ascii<Flavor.EVO>,
                    smiley: ":,::(!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,(!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::(!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,(!)b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::(!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.(!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::(!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.(!)b" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::(!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".(!!!)" as Ascii<Flavor.REVO>,
                    smiley: ":.::(!!!):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(!)b" as Ascii<Flavor.EVO>,
                    smiley: ":.::(!)::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`'(!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::(!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'(!/b" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::(!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'(!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":'::(!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(!/b" as Ascii<Flavor.EVO>,
                    smiley: ":'::(!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",'(!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::(!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'(!/b" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::(!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "!!!//" as Ascii<Flavor.REVO>,
                    smiley: ":!!!/ /:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!//b" as Ascii<Flavor.EVO>,
                    smiley: ":!/ /::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`(!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":`::(!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(!/b" as Ascii<Flavor.EVO>,
                    smiley: ":`::(!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":(!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(!/b" as Ascii<Flavor.EVO>,
                    smiley: ":(!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",(!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":,::(!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(!/b" as Ascii<Flavor.EVO>,
                    smiley: ":,::(!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,(!!!/" as Ascii<Flavor.REVO>,
                    smiley: ":,,::(!!!/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,(!/b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::(!/::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``)!!!//" as Ascii<Flavor.REVO>,
                    smiley: ":``::)!!!/ /:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)!//b" as Ascii<Flavor.EVO>,
                    smiley: ":``::)!/ /::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)!!!//" as Ascii<Flavor.REVO>,
                    smiley: ":`::)!!!/ /:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)!//b" as Ascii<Flavor.EVO>,
                    smiley: ":`::)!/ /::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")!!!//" as Ascii<Flavor.REVO>,
                    smiley: ":)!!!/ /:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!//b" as Ascii<Flavor.EVO>,
                    smiley: ":)!/ /::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)!!!//" as Ascii<Flavor.REVO>,
                    smiley: ":,::)!!!/ /:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)!//b" as Ascii<Flavor.EVO>,
                    smiley: ":,::)!/ /::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,)!!!//" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)!!!/ /:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)!//b" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)!/ /::b:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "')Y(" as Ascii<Flavor.REVO>,
                    smiley: ":'::)Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'//|bb" as Ascii<Flavor.EVO>,
                    smiley: ":'::/ /|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",')Y(" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::)Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'//|bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::/ /|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``)Y(" as Ascii<Flavor.REVO>,
                    smiley: ":``::)Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``//|bb" as Ascii<Flavor.EVO>,
                    smiley: ":``::/ /|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)Y(" as Ascii<Flavor.REVO>,
                    smiley: ":`::)Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`//|bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::/ /|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")Y(" as Ascii<Flavor.REVO>,
                    smiley: ":)Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "//|bb" as Ascii<Flavor.EVO>,
                    smiley: ":/ /|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)Y(" as Ascii<Flavor.REVO>,
                    smiley: ":,::)Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",//|bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::/ /|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,)Y(" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,//|bb" as Ascii<Flavor.EVO>,
                    smiley: ":,,::/ /|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.)Y(" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::)Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.//|bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::/ /|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".)Y(" as Ascii<Flavor.REVO>,
                    smiley: ":.::)Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".//|bb" as Ascii<Flavor.EVO>,
                    smiley: ":.::/ /|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",.)Y(" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::)Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.//|bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::/ /|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")~Y" as Ascii<Flavor.REVO>,
                    smiley: ":)~Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~|\\bb" as Ascii<Flavor.EVO>,
                    smiley: ":~|\\::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`~Y(" as Ascii<Flavor.REVO>,
                    smiley: ":`::~Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::(|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~Y(" as Ascii<Flavor.REVO>,
                    smiley: ":~Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":(|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",~Y(" as Ascii<Flavor.REVO>,
                    smiley: ":,::~Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::(|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,~Y(" as Ascii<Flavor.REVO>,
                    smiley: ":,,::~Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,(|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":,,::(|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "Y~" as Ascii<Flavor.REVO>,
                    smiley: ":Y~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "/|~bb" as Ascii<Flavor.EVO>,
                    smiley: ":/|~::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'~~Y" as Ascii<Flavor.REVO>,
                    smiley: ":'::~~Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'~|)bb" as Ascii<Flavor.EVO>,
                    smiley: ":'::~|)::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".~Y(" as Ascii<Flavor.REVO>,
                    smiley: ":.::~Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":.::(|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",.~Y(" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::~Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.(|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::(|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`~~Y" as Ascii<Flavor.REVO>,
                    smiley: ":`::~~Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~|)bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::~|)::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~~Y" as Ascii<Flavor.REVO>,
                    smiley: ":~~Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~|)bb" as Ascii<Flavor.EVO>,
                    smiley: ":~|)::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",~~Y" as Ascii<Flavor.REVO>,
                    smiley: ":,::~~Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~|)bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::~|)::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "')Y~" as Ascii<Flavor.REVO>,
                    smiley: ":'::)Y~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(|bb" as Ascii<Flavor.EVO>,
                    smiley: ":'::(|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",')Y~" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::)Y~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'(|bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::(|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``)Y~" as Ascii<Flavor.REVO>,
                    smiley: ":``::)Y~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``(|bb" as Ascii<Flavor.EVO>,
                    smiley: ":``::(|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)Y~" as Ascii<Flavor.REVO>,
                    smiley: ":`::)Y~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(|bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::(|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")Y~" as Ascii<Flavor.REVO>,
                    smiley: ":)Y~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(|bb" as Ascii<Flavor.EVO>,
                    smiley: ":(|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)Y~" as Ascii<Flavor.REVO>,
                    smiley: ":,::)Y~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(|bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::(|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`\\Y" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|\\bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::|\\::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "\\Y" as Ascii<Flavor.REVO>,
                    smiley: ":\\Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|\\bb" as Ascii<Flavor.EVO>,
                    smiley: ":|\\::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".)Y~" as Ascii<Flavor.REVO>,
                    smiley: ":.::)Y~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(|bb" as Ascii<Flavor.EVO>,
                    smiley: ":.::(|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")\\Y" as Ascii<Flavor.REVO>,
                    smiley: ":)\\Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|)bb" as Ascii<Flavor.EVO>,
                    smiley: ":)|)::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)\\Y" as Ascii<Flavor.REVO>,
                    smiley: ":,::)\\Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)|)bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::)|)::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`'Y)" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'|)bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::|)::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'Y)" as Ascii<Flavor.REVO>,
                    smiley: ":'::Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'|)bb" as Ascii<Flavor.EVO>,
                    smiley: ":'::|)::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",'Y)" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'|)bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::|)::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``Y)" as Ascii<Flavor.REVO>,
                    smiley: ":``::Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``|)bb" as Ascii<Flavor.EVO>,
                    smiley: ":``::|)::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`Y)" as Ascii<Flavor.REVO>,
                    smiley: ":`::Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|)bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::|)::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "Y)" as Ascii<Flavor.REVO>,
                    smiley: ":Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|)bb" as Ascii<Flavor.EVO>,
                    smiley: ":|)::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",Y)" as Ascii<Flavor.REVO>,
                    smiley: ":,::Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",|)bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::|)::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,Y)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,|)bb" as Ascii<Flavor.EVO>,
                    smiley: ":,,::|)::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.Y)" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.|)bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::|)::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".Y)" as Ascii<Flavor.REVO>,
                    smiley: ":.::Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".|)bb" as Ascii<Flavor.EVO>,
                    smiley: ":.::|)::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",.Y)" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.|)bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::|)::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")Y)" as Ascii<Flavor.REVO>,
                    smiley: ":)Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")/|bb" as Ascii<Flavor.EVO>,
                    smiley: ":)/|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)Y)" as Ascii<Flavor.REVO>,
                    smiley: ":,::)Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)/|bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::)/|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,)Y)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)/|bb" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)/|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`'Y/" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::Y/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'/|bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::/|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'Y/" as Ascii<Flavor.REVO>,
                    smiley: ":'::Y/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'/|bb" as Ascii<Flavor.EVO>,
                    smiley: ":'::/|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".)Y)" as Ascii<Flavor.REVO>,
                    smiley: ":.::)Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".)/|bb" as Ascii<Flavor.EVO>,
                    smiley: ":.::)/|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``Y/" as Ascii<Flavor.REVO>,
                    smiley: ":``::Y/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``/|bb" as Ascii<Flavor.EVO>,
                    smiley: ":``::/|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`Y/" as Ascii<Flavor.REVO>,
                    smiley: ":`::Y/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`/|bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::/|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "Y/" as Ascii<Flavor.REVO>,
                    smiley: ":Y/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "/|bb" as Ascii<Flavor.EVO>,
                    smiley: ":/|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",Y/" as Ascii<Flavor.REVO>,
                    smiley: ":,::Y/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",/|bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::/|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,Y/" as Ascii<Flavor.REVO>,
                    smiley: ":,,::Y/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,/|bb" as Ascii<Flavor.EVO>,
                    smiley: ":,,::/|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(Y" as Ascii<Flavor.REVO>,
                    smiley: ":(Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|~bb" as Ascii<Flavor.EVO>,
                    smiley: ":)|~::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".Y/" as Ascii<Flavor.REVO>,
                    smiley: ":.::Y/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "./|bb" as Ascii<Flavor.EVO>,
                    smiley: ":.::/|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",.Y/" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::Y/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",./|bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::/|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``~Y)" as Ascii<Flavor.REVO>,
                    smiley: ":``::~Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``~~|bb" as Ascii<Flavor.EVO>,
                    smiley: ":``::~~|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`~Y)" as Ascii<Flavor.REVO>,
                    smiley: ":`::~Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~~|bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::~~|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~Y)" as Ascii<Flavor.REVO>,
                    smiley: ":~Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~~|bb" as Ascii<Flavor.EVO>,
                    smiley: ":~~|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`\\Y~" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\Y~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|~bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::|~::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "\\Y~" as Ascii<Flavor.REVO>,
                    smiley: ":\\Y~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|~bb" as Ascii<Flavor.EVO>,
                    smiley: ":|~::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",\\Y~" as Ascii<Flavor.REVO>,
                    smiley: ":,::\\Y~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",|~bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::|~::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,\\Y~" as Ascii<Flavor.REVO>,
                    smiley: ":,,::\\Y~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,|~bb" as Ascii<Flavor.EVO>,
                    smiley: ":,,::|~::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`(Y(" as Ascii<Flavor.REVO>,
                    smiley: ":`::(Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::~|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(Y(" as Ascii<Flavor.REVO>,
                    smiley: ":(Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":~|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",(Y(" as Ascii<Flavor.REVO>,
                    smiley: ":,::(Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::~|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,(Y(" as Ascii<Flavor.REVO>,
                    smiley: ":,,::(Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,~|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":,,::~|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.(Y(" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::(Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.~|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::~|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".(Y(" as Ascii<Flavor.REVO>,
                    smiley: ":.::(Y(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".~|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":.::~|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~Y/" as Ascii<Flavor.REVO>,
                    smiley: ":~Y/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")~|bb" as Ascii<Flavor.EVO>,
                    smiley: ":)~|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'\\\\Y" as Ascii<Flavor.REVO>,
                    smiley: ":'::\\ \\Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "')|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":'::)|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",'\\\\Y" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::\\ \\Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",')|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::)|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``\\\\Y" as Ascii<Flavor.REVO>,
                    smiley: ":``::\\ \\Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":``::)|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`\\\\Y" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\ \\Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::)|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "\\\\Y" as Ascii<Flavor.REVO>,
                    smiley: ":\\ \\Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":)|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",\\\\Y" as Ascii<Flavor.REVO>,
                    smiley: ":,::\\ \\Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::)|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")\\\\Y" as Ascii<Flavor.REVO>,
                    smiley: ":)\\ \\Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~|bb" as Ascii<Flavor.EVO>,
                    smiley: ":~|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)\\\\Y" as Ascii<Flavor.REVO>,
                    smiley: ":,::)\\ \\Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~|bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::~|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'\\Y)" as Ascii<Flavor.REVO>,
                    smiley: ":'::\\Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":'::|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",'\\Y)" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::\\Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".)\\\\Y" as Ascii<Flavor.REVO>,
                    smiley: ":.::)\\ \\Y:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".~|bb" as Ascii<Flavor.EVO>,
                    smiley: ":.::~|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`\\Y)" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "\\Y)" as Ascii<Flavor.REVO>,
                    smiley: ":\\Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",\\Y)" as Ascii<Flavor.REVO>,
                    smiley: ":,::\\Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,\\Y)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::\\Y):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,|(bb" as Ascii<Flavor.EVO>,
                    smiley: ":,,::|(::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``(Y~" as Ascii<Flavor.REVO>,
                    smiley: ":``::(Y~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)|bb" as Ascii<Flavor.EVO>,
                    smiley: ":``::)|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`(Y~" as Ascii<Flavor.REVO>,
                    smiley: ":`::(Y~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)|bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::)|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(Y~" as Ascii<Flavor.REVO>,
                    smiley: ":(Y~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|bb" as Ascii<Flavor.EVO>,
                    smiley: ":)|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",(Y~" as Ascii<Flavor.REVO>,
                    smiley: ":,::(Y~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)|bb" as Ascii<Flavor.EVO>,
                    smiley: ":,::)|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`'\\Y/" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::\\Y/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'|bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'\\Y/" as Ascii<Flavor.REVO>,
                    smiley: ":'::\\Y/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'|bb" as Ascii<Flavor.EVO>,
                    smiley: ":'::|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".(Y~" as Ascii<Flavor.REVO>,
                    smiley: ":.::(Y~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".)|bb" as Ascii<Flavor.EVO>,
                    smiley: ":.::)|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``\\Y/" as Ascii<Flavor.REVO>,
                    smiley: ":``::\\Y/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``|bb" as Ascii<Flavor.EVO>,
                    smiley: ":``::|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`\\Y/" as Ascii<Flavor.REVO>,
                    smiley: ":`::\\Y/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|bb" as Ascii<Flavor.EVO>,
                    smiley: ":`::|::bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "\\Y/" as Ascii<Flavor.REVO>,
                    smiley: ":\\Y/:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "bb" as Ascii<Flavor.EVO>,
                    smiley: ":bb:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
        ].reverse()

        const expectedP1A: FlavorsExpectation[] = [
            {
                revo: {
                    ascii: "(|//|)" as Ascii<Flavor.REVO>,
                    smiley: "(:h:)" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(|//|)" as Ascii<Flavor.EVO>,
                    smiley: "(:h:)" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`|" as Ascii<Flavor.REVO>,
                    smiley: ":`::|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|" as Ascii<Flavor.EVO>,
                    smiley: ":`::|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``|" as Ascii<Flavor.REVO>,
                    smiley: ":``::|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``|" as Ascii<Flavor.EVO>,
                    smiley: ":``::|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".)|" as Ascii<Flavor.REVO>,
                    smiley: ":.::)|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".)|" as Ascii<Flavor.EVO>,
                    smiley: ":.::)|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'|" as Ascii<Flavor.REVO>,
                    smiley: ":'::|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'|" as Ascii<Flavor.EVO>,
                    smiley: ":'::|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`'|" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'|" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)|" as Ascii<Flavor.REVO>,
                    smiley: ":,::)|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)|" as Ascii<Flavor.EVO>,
                    smiley: ":,::)|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")|" as Ascii<Flavor.REVO>,
                    smiley: ":)|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|" as Ascii<Flavor.EVO>,
                    smiley: ":)|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)|" as Ascii<Flavor.REVO>,
                    smiley: ":`::)|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)|" as Ascii<Flavor.EVO>,
                    smiley: ":`::)|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``)|" as Ascii<Flavor.REVO>,
                    smiley: ":``::)|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)|" as Ascii<Flavor.EVO>,
                    smiley: ":``::)|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,|(" as Ascii<Flavor.REVO>,
                    smiley: ":,,::|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,|(" as Ascii<Flavor.EVO>,
                    smiley: ":,,::|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",|(" as Ascii<Flavor.REVO>,
                    smiley: ":,::|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",|(" as Ascii<Flavor.EVO>,
                    smiley: ":,::|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "|(" as Ascii<Flavor.REVO>,
                    smiley: ":|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|(" as Ascii<Flavor.EVO>,
                    smiley: ":|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`|(" as Ascii<Flavor.REVO>,
                    smiley: ":`::|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|(" as Ascii<Flavor.EVO>,
                    smiley: ":`::|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".~|" as Ascii<Flavor.REVO>,
                    smiley: ":.::~|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".~|" as Ascii<Flavor.EVO>,
                    smiley: ":.::~|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",'|(" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'|(" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'|(" as Ascii<Flavor.REVO>,
                    smiley: ":'::|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'|(" as Ascii<Flavor.EVO>,
                    smiley: ":'::|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",~|" as Ascii<Flavor.REVO>,
                    smiley: ":,::~|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~|" as Ascii<Flavor.EVO>,
                    smiley: ":,::~|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~|" as Ascii<Flavor.REVO>,
                    smiley: ":~|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~|" as Ascii<Flavor.EVO>,
                    smiley: ":~|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)|(" as Ascii<Flavor.REVO>,
                    smiley: ":,::)|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)|(" as Ascii<Flavor.EVO>,
                    smiley: ":,::)|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")|(" as Ascii<Flavor.REVO>,
                    smiley: ":)|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|(" as Ascii<Flavor.EVO>,
                    smiley: ":)|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)|(" as Ascii<Flavor.REVO>,
                    smiley: ":`::)|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)|(" as Ascii<Flavor.EVO>,
                    smiley: ":`::)|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``)|(" as Ascii<Flavor.REVO>,
                    smiley: ":``::)|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)|(" as Ascii<Flavor.EVO>,
                    smiley: ":``::)|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",')|(" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::)|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",')|(" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::)|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "')|(" as Ascii<Flavor.REVO>,
                    smiley: ":'::)|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "')|(" as Ascii<Flavor.EVO>,
                    smiley: ":'::)|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")~|" as Ascii<Flavor.REVO>,
                    smiley: ":)~|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")~|" as Ascii<Flavor.EVO>,
                    smiley: ":)~|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".~|(" as Ascii<Flavor.REVO>,
                    smiley: ":.::~|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".~|(" as Ascii<Flavor.EVO>,
                    smiley: ":.::~|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.~|(" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::~|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.~|(" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::~|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,~|(" as Ascii<Flavor.REVO>,
                    smiley: ":,,::~|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,~|(" as Ascii<Flavor.EVO>,
                    smiley: ":,,::~|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",~|(" as Ascii<Flavor.REVO>,
                    smiley: ":,::~|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~|(" as Ascii<Flavor.EVO>,
                    smiley: ":,::~|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~|(" as Ascii<Flavor.REVO>,
                    smiley: ":~|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~|(" as Ascii<Flavor.EVO>,
                    smiley: ":~|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`~|(" as Ascii<Flavor.REVO>,
                    smiley: ":`::~|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~|(" as Ascii<Flavor.EVO>,
                    smiley: ":`::~|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,|~" as Ascii<Flavor.REVO>,
                    smiley: ":,,::|~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,|~" as Ascii<Flavor.EVO>,
                    smiley: ":,,::|~:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",|~" as Ascii<Flavor.REVO>,
                    smiley: ":,::|~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",|~" as Ascii<Flavor.EVO>,
                    smiley: ":,::|~:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "|~" as Ascii<Flavor.REVO>,
                    smiley: ":|~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|~" as Ascii<Flavor.EVO>,
                    smiley: ":|~:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`|~" as Ascii<Flavor.REVO>,
                    smiley: ":`::|~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|~" as Ascii<Flavor.EVO>,
                    smiley: ":`::|~:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~~|" as Ascii<Flavor.REVO>,
                    smiley: ":~~|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~~|" as Ascii<Flavor.EVO>,
                    smiley: ":~~|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`~~|" as Ascii<Flavor.REVO>,
                    smiley: ":`::~~|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~~|" as Ascii<Flavor.EVO>,
                    smiley: ":`::~~|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``~~|" as Ascii<Flavor.REVO>,
                    smiley: ":``::~~|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``~~|" as Ascii<Flavor.EVO>,
                    smiley: ":``::~~|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",./|" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::/|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",./|" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::/|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "./|" as Ascii<Flavor.REVO>,
                    smiley: ":.::/|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "./|" as Ascii<Flavor.EVO>,
                    smiley: ":.::/|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")|~" as Ascii<Flavor.REVO>,
                    smiley: ":)|~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|~" as Ascii<Flavor.EVO>,
                    smiley: ":)|~:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,/|" as Ascii<Flavor.REVO>,
                    smiley: ":,,::/|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,/|" as Ascii<Flavor.EVO>,
                    smiley: ":,,::/|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",/|" as Ascii<Flavor.REVO>,
                    smiley: ":,::/|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",/|" as Ascii<Flavor.EVO>,
                    smiley: ":,::/|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "/|" as Ascii<Flavor.REVO>,
                    smiley: ":/|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "/|" as Ascii<Flavor.EVO>,
                    smiley: ":/|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`/|" as Ascii<Flavor.REVO>,
                    smiley: ":`::/|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`/|" as Ascii<Flavor.EVO>,
                    smiley: ":`::/|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``/|" as Ascii<Flavor.REVO>,
                    smiley: ":``::/|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``/|" as Ascii<Flavor.EVO>,
                    smiley: ":``::/|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".)/|" as Ascii<Flavor.REVO>,
                    smiley: ":.::)/|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".)/|" as Ascii<Flavor.EVO>,
                    smiley: ":.::)/|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'/|" as Ascii<Flavor.REVO>,
                    smiley: ":'::/|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'/|" as Ascii<Flavor.EVO>,
                    smiley: ":'::/|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`'/|" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::/|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'/|" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::/|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,)/|" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)/|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)/|" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)/|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)/|" as Ascii<Flavor.REVO>,
                    smiley: ":,::)/|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)/|" as Ascii<Flavor.EVO>,
                    smiley: ":,::)/|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")/|" as Ascii<Flavor.REVO>,
                    smiley: ":)/|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")/|" as Ascii<Flavor.EVO>,
                    smiley: ":)/|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",.|)" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.|)" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".|)" as Ascii<Flavor.REVO>,
                    smiley: ":.::|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".|)" as Ascii<Flavor.EVO>,
                    smiley: ":.::|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.|)" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.|)" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,|)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,|)" as Ascii<Flavor.EVO>,
                    smiley: ":,,::|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",|)" as Ascii<Flavor.REVO>,
                    smiley: ":,::|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",|)" as Ascii<Flavor.EVO>,
                    smiley: ":,::|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "|)" as Ascii<Flavor.REVO>,
                    smiley: ":|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|)" as Ascii<Flavor.EVO>,
                    smiley: ":|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`|)" as Ascii<Flavor.REVO>,
                    smiley: ":`::|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|)" as Ascii<Flavor.EVO>,
                    smiley: ":`::|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``|)" as Ascii<Flavor.REVO>,
                    smiley: ":``::|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``|)" as Ascii<Flavor.EVO>,
                    smiley: ":``::|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",'|)" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'|)" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'|)" as Ascii<Flavor.REVO>,
                    smiley: ":'::|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'|)" as Ascii<Flavor.EVO>,
                    smiley: ":'::|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`'|)" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'|)" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)|)" as Ascii<Flavor.REVO>,
                    smiley: ":,::)|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)|)" as Ascii<Flavor.EVO>,
                    smiley: ":,::)|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")|)" as Ascii<Flavor.REVO>,
                    smiley: ":)|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|)" as Ascii<Flavor.EVO>,
                    smiley: ":)|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".(|" as Ascii<Flavor.REVO>,
                    smiley: ":.::(|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(|" as Ascii<Flavor.EVO>,
                    smiley: ":.::(|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "|\\" as Ascii<Flavor.REVO>,
                    smiley: ":|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|\\" as Ascii<Flavor.EVO>,
                    smiley: ":|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`|\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|\\" as Ascii<Flavor.EVO>,
                    smiley: ":`::|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",(|" as Ascii<Flavor.REVO>,
                    smiley: ":,::(|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(|" as Ascii<Flavor.EVO>,
                    smiley: ":,::(|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(|" as Ascii<Flavor.REVO>,
                    smiley: ":(|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(|" as Ascii<Flavor.EVO>,
                    smiley: ":(|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`(|" as Ascii<Flavor.REVO>,
                    smiley: ":`::(|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(|" as Ascii<Flavor.EVO>,
                    smiley: ":`::(|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``(|" as Ascii<Flavor.REVO>,
                    smiley: ":``::(|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``(|" as Ascii<Flavor.EVO>,
                    smiley: ":``::(|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",'(|" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::(|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'(|" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::(|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'(|" as Ascii<Flavor.REVO>,
                    smiley: ":'::(|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(|" as Ascii<Flavor.EVO>,
                    smiley: ":'::(|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",~|)" as Ascii<Flavor.REVO>,
                    smiley: ":,::~|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~|)" as Ascii<Flavor.EVO>,
                    smiley: ":,::~|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~|)" as Ascii<Flavor.REVO>,
                    smiley: ":~|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~|)" as Ascii<Flavor.EVO>,
                    smiley: ":~|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`~|)" as Ascii<Flavor.REVO>,
                    smiley: ":`::~|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~|)" as Ascii<Flavor.EVO>,
                    smiley: ":`::~|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",.(|(" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::(|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.(|(" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::(|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".(|(" as Ascii<Flavor.REVO>,
                    smiley: ":.::(|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(|(" as Ascii<Flavor.EVO>,
                    smiley: ":.::(|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'~|)" as Ascii<Flavor.REVO>,
                    smiley: ":'::~|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'~|)" as Ascii<Flavor.EVO>,
                    smiley: ":'::~|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "/|~" as Ascii<Flavor.REVO>,
                    smiley: ":/|~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "/|~" as Ascii<Flavor.EVO>,
                    smiley: ":/|~:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,(|(" as Ascii<Flavor.REVO>,
                    smiley: ":,,::(|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,(|(" as Ascii<Flavor.EVO>,
                    smiley: ":,,::(|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",(|(" as Ascii<Flavor.REVO>,
                    smiley: ":,::(|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(|(" as Ascii<Flavor.EVO>,
                    smiley: ":,::(|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(|(" as Ascii<Flavor.REVO>,
                    smiley: ":(|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(|(" as Ascii<Flavor.EVO>,
                    smiley: ":(|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`(|(" as Ascii<Flavor.REVO>,
                    smiley: ":`::(|(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(|(" as Ascii<Flavor.EVO>,
                    smiley: ":`::(|(:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~|\\" as Ascii<Flavor.REVO>,
                    smiley: ":~|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~|\\" as Ascii<Flavor.EVO>,
                    smiley: ":~|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",.//|" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::/ /|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.//|" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::/ /|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".//|" as Ascii<Flavor.REVO>,
                    smiley: ":.::/ /|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".//|" as Ascii<Flavor.EVO>,
                    smiley: ":.::/ /|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.//|" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::/ /|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.//|" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::/ /|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,//|" as Ascii<Flavor.REVO>,
                    smiley: ":,,::/ /|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,//|" as Ascii<Flavor.EVO>,
                    smiley: ":,,::/ /|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",//|" as Ascii<Flavor.REVO>,
                    smiley: ":,::/ /|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",//|" as Ascii<Flavor.EVO>,
                    smiley: ":,::/ /|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "//|" as Ascii<Flavor.REVO>,
                    smiley: ":/ /|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "//|" as Ascii<Flavor.EVO>,
                    smiley: ":/ /|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`//|" as Ascii<Flavor.REVO>,
                    smiley: ":`::/ /|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`//|" as Ascii<Flavor.EVO>,
                    smiley: ":`::/ /|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``//|" as Ascii<Flavor.REVO>,
                    smiley: ":``::/ /|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``//|" as Ascii<Flavor.EVO>,
                    smiley: ":``::/ /|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",'//|" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::/ /|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'//|" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::/ /|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'//|" as Ascii<Flavor.REVO>,
                    smiley: ":'::/ /|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'//|" as Ascii<Flavor.EVO>,
                    smiley: ":'::/ /|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,)//|" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)/ /|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)//|" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)/ /|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)//|" as Ascii<Flavor.REVO>,
                    smiley: ":,::)/ /|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)//|" as Ascii<Flavor.EVO>,
                    smiley: ":,::)/ /|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")//|" as Ascii<Flavor.REVO>,
                    smiley: ":)/ /|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")//|" as Ascii<Flavor.EVO>,
                    smiley: ":)/ /|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)//|" as Ascii<Flavor.REVO>,
                    smiley: ":`::)/ /|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)//|" as Ascii<Flavor.EVO>,
                    smiley: ":`::)/ /|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``)//|" as Ascii<Flavor.REVO>,
                    smiley: ":``::)/ /|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)//|" as Ascii<Flavor.EVO>,
                    smiley: ":``::)/ /|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,/|)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::/|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,/|)" as Ascii<Flavor.EVO>,
                    smiley: ":,,::/|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",/|)" as Ascii<Flavor.REVO>,
                    smiley: ":,::/|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",/|)" as Ascii<Flavor.EVO>,
                    smiley: ":,::/|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "/|)" as Ascii<Flavor.REVO>,
                    smiley: ":/|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "/|)" as Ascii<Flavor.EVO>,
                    smiley: ":/|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`/|)" as Ascii<Flavor.REVO>,
                    smiley: ":`::/|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`/|)" as Ascii<Flavor.EVO>,
                    smiley: ":`::/|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(|~" as Ascii<Flavor.REVO>,
                    smiley: ":(|~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(|~" as Ascii<Flavor.EVO>,
                    smiley: ":(|~:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",'/|)" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::/|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'/|)" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::/|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'/|)" as Ascii<Flavor.REVO>,
                    smiley: ":'::/|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'/|)" as Ascii<Flavor.EVO>,
                    smiley: ":'::/|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`'/|)" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::/|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'/|)" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::/|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "./|\\" as Ascii<Flavor.REVO>,
                    smiley: ":.::/|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "./|\\" as Ascii<Flavor.EVO>,
                    smiley: ":.::/|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`./|\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::/|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`./|\\" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::/|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,/|\\" as Ascii<Flavor.REVO>,
                    smiley: ":,,::/|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,/|\\" as Ascii<Flavor.EVO>,
                    smiley: ":,,::/|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",/|\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::/|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",/|\\" as Ascii<Flavor.EVO>,
                    smiley: ":,::/|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "/|\\" as Ascii<Flavor.REVO>,
                    smiley: ":/|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "/|\\" as Ascii<Flavor.EVO>,
                    smiley: ":/|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`/|\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::/|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`/|\\" as Ascii<Flavor.EVO>,
                    smiley: ":`::/|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",(/|" as Ascii<Flavor.REVO>,
                    smiley: ":,::(/|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(/|" as Ascii<Flavor.EVO>,
                    smiley: ":,::(/|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(/|" as Ascii<Flavor.REVO>,
                    smiley: ":(/|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(/|" as Ascii<Flavor.EVO>,
                    smiley: ":(/|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`(/|" as Ascii<Flavor.REVO>,
                    smiley: ":`::(/|:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(/|" as Ascii<Flavor.EVO>,
                    smiley: ":`::(/|:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'/|\\" as Ascii<Flavor.REVO>,
                    smiley: ":'::/|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'/|\\" as Ascii<Flavor.EVO>,
                    smiley: ":'::/|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`'/|\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::/|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'/|\\" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::/|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)/|\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::)/|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)/|\\" as Ascii<Flavor.EVO>,
                    smiley: ":,::)/|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")/|\\" as Ascii<Flavor.REVO>,
                    smiley: ":)/|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")/|\\" as Ascii<Flavor.EVO>,
                    smiley: ":)/|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
        ]
        const expectedP1T: FlavorsExpectation[] = [
            {
                revo: {
                    ascii: "`)/|\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::)/|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)/|\\" as Ascii<Flavor.EVO>,
                    smiley: ":`::)/|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``)/|\\" as Ascii<Flavor.REVO>,
                    smiley: ":``::)/|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)/|\\" as Ascii<Flavor.EVO>,
                    smiley: ":``::)/|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",.(|)" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::(|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.(|)" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::(|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".(|)" as Ascii<Flavor.REVO>,
                    smiley: ":.::(|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(|)" as Ascii<Flavor.EVO>,
                    smiley: ":.::(|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",|\\)" as Ascii<Flavor.REVO>,
                    smiley: ":,::|\\):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",|\\)" as Ascii<Flavor.EVO>,
                    smiley: ":,::|\\):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "|\\)" as Ascii<Flavor.REVO>,
                    smiley: ":|\\):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|\\)" as Ascii<Flavor.EVO>,
                    smiley: ":|\\):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`|\\)" as Ascii<Flavor.REVO>,
                    smiley: ":`::|\\):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|\\)" as Ascii<Flavor.EVO>,
                    smiley: ":`::|\\):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",(|)" as Ascii<Flavor.REVO>,
                    smiley: ":,::(|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(|)" as Ascii<Flavor.EVO>,
                    smiley: ":,::(|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(|)" as Ascii<Flavor.REVO>,
                    smiley: ":(|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(|)" as Ascii<Flavor.EVO>,
                    smiley: ":(|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`(|)" as Ascii<Flavor.REVO>,
                    smiley: ":`::(|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(|)" as Ascii<Flavor.EVO>,
                    smiley: ":`::(|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``(|)" as Ascii<Flavor.REVO>,
                    smiley: ":``::(|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``(|)" as Ascii<Flavor.EVO>,
                    smiley: ":``::(|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",'(|)" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::(|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'(|)" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::(|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'(|)" as Ascii<Flavor.REVO>,
                    smiley: ":'::(|):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(|)" as Ascii<Flavor.EVO>,
                    smiley: ":'::(|):" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",.(|\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::(|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.(|\\" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::(|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".(|\\" as Ascii<Flavor.REVO>,
                    smiley: ":.::(|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(|\\" as Ascii<Flavor.EVO>,
                    smiley: ":.::(|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.(|\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::(|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.(|\\" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::(|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "|\\\\" as Ascii<Flavor.REVO>,
                    smiley: ":|\\ \\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|\\\\" as Ascii<Flavor.EVO>,
                    smiley: ":|\\ \\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",(|\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::(|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(|\\" as Ascii<Flavor.EVO>,
                    smiley: ":,::(|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(|\\" as Ascii<Flavor.REVO>,
                    smiley: ":(|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(|\\" as Ascii<Flavor.EVO>,
                    smiley: ":(|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`(|\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::(|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(|\\" as Ascii<Flavor.EVO>,
                    smiley: ":`::(|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``(|\\" as Ascii<Flavor.REVO>,
                    smiley: ":``::(|\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``(|\\" as Ascii<Flavor.EVO>,
                    smiley: ":``::(|\\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,)|\\\\" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)|\\ \\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)|\\\\" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)|\\ \\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)|\\\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::)|\\ \\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)|\\\\" as Ascii<Flavor.EVO>,
                    smiley: ":,::)|\\ \\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")|\\\\" as Ascii<Flavor.REVO>,
                    smiley: ":)|\\ \\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|\\\\" as Ascii<Flavor.EVO>,
                    smiley: ":)|\\ \\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)|\\\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::)|\\ \\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)|\\\\" as Ascii<Flavor.EVO>,
                    smiley: ":`::)|\\ \\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``)|\\\\" as Ascii<Flavor.REVO>,
                    smiley: ":``::)|\\ \\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)|\\\\" as Ascii<Flavor.EVO>,
                    smiley: ":``::)|\\ \\:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".)||(" as Ascii<Flavor.REVO>,
                    smiley: ":.::)||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".\\\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":.::\\ \\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.)||(" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::)||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.\\\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::\\ \\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,)||(" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,\\\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::\\ \\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)||(" as Ascii<Flavor.REVO>,
                    smiley: ":,::)||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",\\\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":,::\\ \\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")||(" as Ascii<Flavor.REVO>,
                    smiley: ":)||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "\\\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":\\ \\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)||(" as Ascii<Flavor.REVO>,
                    smiley: ":`::)||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`\\\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":`::\\ \\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``)||(" as Ascii<Flavor.REVO>,
                    smiley: ":``::)||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``\\\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":``::\\ \\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",')||(" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::)||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'\\\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::\\ \\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "')||(" as Ascii<Flavor.REVO>,
                    smiley: ":'::)||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'\\\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":'::\\ \\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`')||(" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::)||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'\\\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::\\ \\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")~||" as Ascii<Flavor.REVO>,
                    smiley: ":)~||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~!/#" as Ascii<Flavor.EVO>,
                    smiley: ":~!/::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",~||(" as Ascii<Flavor.REVO>,
                    smiley: ":,::~||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(!(#" as Ascii<Flavor.EVO>,
                    smiley: ":,::(!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~||(" as Ascii<Flavor.REVO>,
                    smiley: ":~||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(!(#" as Ascii<Flavor.EVO>,
                    smiley: ":(!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`~||(" as Ascii<Flavor.REVO>,
                    smiley: ":`::~||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(!(#" as Ascii<Flavor.EVO>,
                    smiley: ":`::(!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``~||(" as Ascii<Flavor.REVO>,
                    smiley: ":``::~||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``(!(#" as Ascii<Flavor.EVO>,
                    smiley: ":``::(!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "||~" as Ascii<Flavor.REVO>,
                    smiley: ":||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "\\!~#" as Ascii<Flavor.EVO>,
                    smiley: ":\\!~::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".~~||" as Ascii<Flavor.REVO>,
                    smiley: ":.::~~||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".~!)#" as Ascii<Flavor.EVO>,
                    smiley: ":.::~!)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'~||(" as Ascii<Flavor.REVO>,
                    smiley: ":'::~||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(!(#" as Ascii<Flavor.EVO>,
                    smiley: ":'::(!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`'~||(" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::~||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'(!(#" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::(!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",~~||" as Ascii<Flavor.REVO>,
                    smiley: ":,::~~||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~!)#" as Ascii<Flavor.EVO>,
                    smiley: ":,::~!)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~~||" as Ascii<Flavor.REVO>,
                    smiley: ":~~||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~!)#" as Ascii<Flavor.EVO>,
                    smiley: ":~!)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`~~||" as Ascii<Flavor.REVO>,
                    smiley: ":`::~~||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~!)#" as Ascii<Flavor.EVO>,
                    smiley: ":`::~!)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".)||~" as Ascii<Flavor.REVO>,
                    smiley: ":.::)||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(!#" as Ascii<Flavor.EVO>,
                    smiley: ":.::(!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.)||~" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::)||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.(!#" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::(!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,)||~" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,(!#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::(!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)||~" as Ascii<Flavor.REVO>,
                    smiley: ":,::)||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(!#" as Ascii<Flavor.EVO>,
                    smiley: ":,::(!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")||~" as Ascii<Flavor.REVO>,
                    smiley: ":)||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(!#" as Ascii<Flavor.EVO>,
                    smiley: ":(!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)||~" as Ascii<Flavor.REVO>,
                    smiley: ":`::)||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(!#" as Ascii<Flavor.EVO>,
                    smiley: ":`::(!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",/||" as Ascii<Flavor.REVO>,
                    smiley: ":,::/||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!/#" as Ascii<Flavor.EVO>,
                    smiley: ":,::!/::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "/||" as Ascii<Flavor.REVO>,
                    smiley: ":/||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!/#" as Ascii<Flavor.EVO>,
                    smiley: ":!/::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "')||~" as Ascii<Flavor.REVO>,
                    smiley: ":'::)||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(!#" as Ascii<Flavor.EVO>,
                    smiley: ":'::(!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")/||" as Ascii<Flavor.REVO>,
                    smiley: ":)/||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!)#" as Ascii<Flavor.EVO>,
                    smiley: ":)!)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)/||" as Ascii<Flavor.REVO>,
                    smiley: ":`::)/||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)!)#" as Ascii<Flavor.EVO>,
                    smiley: ":`::)!)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",.||)" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.!)#" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::!)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".||)" as Ascii<Flavor.REVO>,
                    smiley: ":.::||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".!)#" as Ascii<Flavor.EVO>,
                    smiley: ":.::!)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.||)" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.!)#" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::!)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,||)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,!)#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::!)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",||)" as Ascii<Flavor.REVO>,
                    smiley: ":,::||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!)#" as Ascii<Flavor.EVO>,
                    smiley: ":,::!)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "||)" as Ascii<Flavor.REVO>,
                    smiley: ":||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!)#" as Ascii<Flavor.EVO>,
                    smiley: ":!)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`||)" as Ascii<Flavor.REVO>,
                    smiley: ":`::||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`!)#" as Ascii<Flavor.EVO>,
                    smiley: ":`::!)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``||)" as Ascii<Flavor.REVO>,
                    smiley: ":``::||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``!)#" as Ascii<Flavor.EVO>,
                    smiley: ":``::!)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",'||)" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'!)#" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::!)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'||)" as Ascii<Flavor.REVO>,
                    smiley: ":'::||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'!)#" as Ascii<Flavor.EVO>,
                    smiley: ":'::!)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`'||)" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'!)#" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::!)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")||)" as Ascii<Flavor.REVO>,
                    smiley: ":)||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":)\\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)||)" as Ascii<Flavor.REVO>,
                    smiley: ":`::)||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":`::)\\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``)||)" as Ascii<Flavor.REVO>,
                    smiley: ":``::)||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":``::)\\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",.||\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::\\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".||\\" as Ascii<Flavor.REVO>,
                    smiley: ":.::||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":.::\\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "')||)" as Ascii<Flavor.REVO>,
                    smiley: ":'::)||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "')\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":'::)\\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,||\\" as Ascii<Flavor.REVO>,
                    smiley: ":,,::||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::\\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",||\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":,::\\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "||\\" as Ascii<Flavor.REVO>,
                    smiley: ":||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":\\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`||\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":`::\\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``||\\" as Ascii<Flavor.REVO>,
                    smiley: ":``::||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":``::\\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(||" as Ascii<Flavor.REVO>,
                    smiley: ":(||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!~#" as Ascii<Flavor.EVO>,
                    smiley: ":)!~::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'||\\" as Ascii<Flavor.REVO>,
                    smiley: ":'::||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":'::\\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`'||\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'\\!#" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::\\!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,~||)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::~||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,~~!#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::~~!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",~||)" as Ascii<Flavor.REVO>,
                    smiley: ":,::~||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~~!#" as Ascii<Flavor.EVO>,
                    smiley: ":,::~~!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~||)" as Ascii<Flavor.REVO>,
                    smiley: ":~||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~~!#" as Ascii<Flavor.EVO>,
                    smiley: ":~~!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",/||~" as Ascii<Flavor.REVO>,
                    smiley: ":,::/||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!~#" as Ascii<Flavor.EVO>,
                    smiley: ":,::!~::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "/||~" as Ascii<Flavor.REVO>,
                    smiley: ":/||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!~#" as Ascii<Flavor.EVO>,
                    smiley: ":!~::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`/||~" as Ascii<Flavor.REVO>,
                    smiley: ":`::/||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`!~#" as Ascii<Flavor.EVO>,
                    smiley: ":`::!~::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``/||~" as Ascii<Flavor.REVO>,
                    smiley: ":``::/||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``!~#" as Ascii<Flavor.EVO>,
                    smiley: ":``::!~::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",(||(" as Ascii<Flavor.REVO>,
                    smiley: ":,::(||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~!(#" as Ascii<Flavor.EVO>,
                    smiley: ":,::~!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(||(" as Ascii<Flavor.REVO>,
                    smiley: ":(||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~!(#" as Ascii<Flavor.EVO>,
                    smiley: ":~!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`(||(" as Ascii<Flavor.REVO>,
                    smiley: ":`::(||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~!(#" as Ascii<Flavor.EVO>,
                    smiley: ":`::~!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``(||(" as Ascii<Flavor.REVO>,
                    smiley: ":``::(||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``~!(#" as Ascii<Flavor.EVO>,
                    smiley: ":``::~!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",'(||(" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::(||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'~!(#" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::~!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'(||(" as Ascii<Flavor.REVO>,
                    smiley: ":'::(||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'~!(#" as Ascii<Flavor.EVO>,
                    smiley: ":'::~!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~||\\" as Ascii<Flavor.REVO>,
                    smiley: ":~||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")~!#" as Ascii<Flavor.EVO>,
                    smiley: ":)~!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".//||" as Ascii<Flavor.REVO>,
                    smiley: ":.::/ /||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".)!(#" as Ascii<Flavor.EVO>,
                    smiley: ":.::)!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.//||" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::/ /||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.)!(#" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::)!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,//||" as Ascii<Flavor.REVO>,
                    smiley: ":,,::/ /||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)!(#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",//||" as Ascii<Flavor.REVO>,
                    smiley: ":,::/ /||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)!(#" as Ascii<Flavor.EVO>,
                    smiley: ":,::)!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "//||" as Ascii<Flavor.REVO>,
                    smiley: ":/ /||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!(#" as Ascii<Flavor.EVO>,
                    smiley: ":)!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`//||" as Ascii<Flavor.REVO>,
                    smiley: ":`::/ /||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)!(#" as Ascii<Flavor.EVO>,
                    smiley: ":`::)!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")//||" as Ascii<Flavor.REVO>,
                    smiley: ":)/ /||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~!#" as Ascii<Flavor.EVO>,
                    smiley: ":~!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)//||" as Ascii<Flavor.REVO>,
                    smiley: ":`::)/ /||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~!#" as Ascii<Flavor.EVO>,
                    smiley: ":`::~!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "./||)" as Ascii<Flavor.REVO>,
                    smiley: ":.::/||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".!(#" as Ascii<Flavor.EVO>,
                    smiley: ":.::!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`./||)" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::/||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.!(#" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "')//||" as Ascii<Flavor.REVO>,
                    smiley: ":'::)/ /||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'~!#" as Ascii<Flavor.EVO>,
                    smiley: ":'::~!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",/||)" as Ascii<Flavor.REVO>,
                    smiley: ":,::/||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!(#" as Ascii<Flavor.EVO>,
                    smiley: ":,::!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "/||)" as Ascii<Flavor.REVO>,
                    smiley: ":/||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!(#" as Ascii<Flavor.EVO>,
                    smiley: ":!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`/||)" as Ascii<Flavor.REVO>,
                    smiley: ":`::/||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`!(#" as Ascii<Flavor.EVO>,
                    smiley: ":`::!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``/||)" as Ascii<Flavor.REVO>,
                    smiley: ":``::/||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``!(#" as Ascii<Flavor.EVO>,
                    smiley: ":``::!(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,(||~" as Ascii<Flavor.REVO>,
                    smiley: ":,,::(||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)!#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",(||~" as Ascii<Flavor.REVO>,
                    smiley: ":,::(||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)!#" as Ascii<Flavor.EVO>,
                    smiley: ":,::)!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(||~" as Ascii<Flavor.REVO>,
                    smiley: ":(||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!#" as Ascii<Flavor.EVO>,
                    smiley: ":)!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`(||~" as Ascii<Flavor.REVO>,
                    smiley: ":`::(||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)!#" as Ascii<Flavor.EVO>,
                    smiley: ":`::)!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",./||\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::/||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.!#" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "./||\\" as Ascii<Flavor.REVO>,
                    smiley: ":.::/||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".!#" as Ascii<Flavor.EVO>,
                    smiley: ":.::!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'(||~" as Ascii<Flavor.REVO>,
                    smiley: ":'::(||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "')!#" as Ascii<Flavor.EVO>,
                    smiley: ":'::)!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,/||\\" as Ascii<Flavor.REVO>,
                    smiley: ":,,::/||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,!#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",/||\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::/||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!#" as Ascii<Flavor.EVO>,
                    smiley: ":,::!::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "/||\\" as Ascii<Flavor.REVO>,
                    smiley: ":/||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "#" as Ascii<Flavor.EVO>,
                    smiley: ":#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
        ]
        const expectedP2A: FlavorsExpectation[] = [
            {
                revo: {
                    ascii: "/||\\" as Ascii<Flavor.REVO>,
                    smiley: ":/||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "#" as Ascii<Flavor.EVO>,
                    smiley: ":#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`/||\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::/||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|#" as Ascii<Flavor.EVO>,
                    smiley: ":`::|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``/||\\" as Ascii<Flavor.REVO>,
                    smiley: ":``::/||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``|#" as Ascii<Flavor.EVO>,
                    smiley: ":``::|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".)|||" as Ascii<Flavor.REVO>,
                    smiley: ":.::)|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".)|#" as Ascii<Flavor.EVO>,
                    smiley: ":.::)|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'/||\\" as Ascii<Flavor.REVO>,
                    smiley: ":'::/||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'|#" as Ascii<Flavor.EVO>,
                    smiley: ":'::|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`'/||\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::/||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'|#" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)|||" as Ascii<Flavor.REVO>,
                    smiley: ":,::)|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)|#" as Ascii<Flavor.EVO>,
                    smiley: ":,::)|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")|||" as Ascii<Flavor.REVO>,
                    smiley: ":)|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|#" as Ascii<Flavor.EVO>,
                    smiley: ":)|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)|||" as Ascii<Flavor.REVO>,
                    smiley: ":`::)|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)|#" as Ascii<Flavor.EVO>,
                    smiley: ":`::)|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``)|||" as Ascii<Flavor.REVO>,
                    smiley: ":``::)|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)|#" as Ascii<Flavor.EVO>,
                    smiley: ":``::)|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,|||(" as Ascii<Flavor.REVO>,
                    smiley: ":,,::|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,|(#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",|||(" as Ascii<Flavor.REVO>,
                    smiley: ":,::|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",|(#" as Ascii<Flavor.EVO>,
                    smiley: ":,::|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "|||(" as Ascii<Flavor.REVO>,
                    smiley: ":|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|(#" as Ascii<Flavor.EVO>,
                    smiley: ":|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`|||(" as Ascii<Flavor.REVO>,
                    smiley: ":`::|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|(#" as Ascii<Flavor.EVO>,
                    smiley: ":`::|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".~|||" as Ascii<Flavor.REVO>,
                    smiley: ":.::~|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".~|#" as Ascii<Flavor.EVO>,
                    smiley: ":.::~|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",'|||(" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'|(#" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'|||(" as Ascii<Flavor.REVO>,
                    smiley: ":'::|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'|(#" as Ascii<Flavor.EVO>,
                    smiley: ":'::|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",~|||" as Ascii<Flavor.REVO>,
                    smiley: ":,::~|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~|#" as Ascii<Flavor.EVO>,
                    smiley: ":,::~|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~|||" as Ascii<Flavor.REVO>,
                    smiley: ":~|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~|#" as Ascii<Flavor.EVO>,
                    smiley: ":~|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)|||(" as Ascii<Flavor.REVO>,
                    smiley: ":,::)|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)|(#" as Ascii<Flavor.EVO>,
                    smiley: ":,::)|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")|||(" as Ascii<Flavor.REVO>,
                    smiley: ":)|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|(#" as Ascii<Flavor.EVO>,
                    smiley: ":)|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)|||(" as Ascii<Flavor.REVO>,
                    smiley: ":`::)|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)|(#" as Ascii<Flavor.EVO>,
                    smiley: ":`::)|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``)|||(" as Ascii<Flavor.REVO>,
                    smiley: ":``::)|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)|(#" as Ascii<Flavor.EVO>,
                    smiley: ":``::)|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",')|||(" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::)|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",')|(#" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::)|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "')|||(" as Ascii<Flavor.REVO>,
                    smiley: ":'::)|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "')|(#" as Ascii<Flavor.EVO>,
                    smiley: ":'::)|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")~|||" as Ascii<Flavor.REVO>,
                    smiley: ":)~|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")~|#" as Ascii<Flavor.EVO>,
                    smiley: ":)~|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".~|||(" as Ascii<Flavor.REVO>,
                    smiley: ":.::~|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".~|(#" as Ascii<Flavor.EVO>,
                    smiley: ":.::~|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.~|||(" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::~|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.~|(#" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::~|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,~|||(" as Ascii<Flavor.REVO>,
                    smiley: ":,,::~|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,~|(#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::~|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",~|||(" as Ascii<Flavor.REVO>,
                    smiley: ":,::~|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~|(#" as Ascii<Flavor.EVO>,
                    smiley: ":,::~|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~|||(" as Ascii<Flavor.REVO>,
                    smiley: ":~|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~|(#" as Ascii<Flavor.EVO>,
                    smiley: ":~|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`~|||(" as Ascii<Flavor.REVO>,
                    smiley: ":`::~|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~|(#" as Ascii<Flavor.EVO>,
                    smiley: ":`::~|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,|||~" as Ascii<Flavor.REVO>,
                    smiley: ":,,::|||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,|~#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::|~::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",|||~" as Ascii<Flavor.REVO>,
                    smiley: ":,::|||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",|~#" as Ascii<Flavor.EVO>,
                    smiley: ":,::|~::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "|||~" as Ascii<Flavor.REVO>,
                    smiley: ":|||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|~#" as Ascii<Flavor.EVO>,
                    smiley: ":|~::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`|||~" as Ascii<Flavor.REVO>,
                    smiley: ":`::|||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|~#" as Ascii<Flavor.EVO>,
                    smiley: ":`::|~::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~~|||" as Ascii<Flavor.REVO>,
                    smiley: ":~~|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~~|#" as Ascii<Flavor.EVO>,
                    smiley: ":~~|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`~~|||" as Ascii<Flavor.REVO>,
                    smiley: ":`::~~|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~~|#" as Ascii<Flavor.EVO>,
                    smiley: ":`::~~|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``~~|||" as Ascii<Flavor.REVO>,
                    smiley: ":``::~~|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``~~|#" as Ascii<Flavor.EVO>,
                    smiley: ":``::~~|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",./|||" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::/|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",./|#" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::/|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "./|||" as Ascii<Flavor.REVO>,
                    smiley: ":.::/|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "./|#" as Ascii<Flavor.EVO>,
                    smiley: ":.::/|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")|||~" as Ascii<Flavor.REVO>,
                    smiley: ":)|||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|~#" as Ascii<Flavor.EVO>,
                    smiley: ":)|~::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,/|||" as Ascii<Flavor.REVO>,
                    smiley: ":,,::/|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,/|#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::/|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",/|||" as Ascii<Flavor.REVO>,
                    smiley: ":,::/|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",/|#" as Ascii<Flavor.EVO>,
                    smiley: ":,::/|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "/|||" as Ascii<Flavor.REVO>,
                    smiley: ":/|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "/|#" as Ascii<Flavor.EVO>,
                    smiley: ":/|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`/|||" as Ascii<Flavor.REVO>,
                    smiley: ":`::/|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`/|#" as Ascii<Flavor.EVO>,
                    smiley: ":`::/|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``/|||" as Ascii<Flavor.REVO>,
                    smiley: ":``::/|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``/|#" as Ascii<Flavor.EVO>,
                    smiley: ":``::/|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".)/|||" as Ascii<Flavor.REVO>,
                    smiley: ":.::)/|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".)/|#" as Ascii<Flavor.EVO>,
                    smiley: ":.::)/|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'/|||" as Ascii<Flavor.REVO>,
                    smiley: ":'::/|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'/|#" as Ascii<Flavor.EVO>,
                    smiley: ":'::/|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`'/|||" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::/|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'/|#" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::/|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,)/|||" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)/|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)/|#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)/|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)/|||" as Ascii<Flavor.REVO>,
                    smiley: ":,::)/|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)/|#" as Ascii<Flavor.EVO>,
                    smiley: ":,::)/|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")/|||" as Ascii<Flavor.REVO>,
                    smiley: ":)/|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")/|#" as Ascii<Flavor.EVO>,
                    smiley: ":)/|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",.|||)" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.|)#" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".|||)" as Ascii<Flavor.REVO>,
                    smiley: ":.::|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".|)#" as Ascii<Flavor.EVO>,
                    smiley: ":.::|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.|||)" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.|)#" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,|||)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,|)#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",|||)" as Ascii<Flavor.REVO>,
                    smiley: ":,::|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",|)#" as Ascii<Flavor.EVO>,
                    smiley: ":,::|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "|||)" as Ascii<Flavor.REVO>,
                    smiley: ":|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|)#" as Ascii<Flavor.EVO>,
                    smiley: ":|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`|||)" as Ascii<Flavor.REVO>,
                    smiley: ":`::|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|)#" as Ascii<Flavor.EVO>,
                    smiley: ":`::|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``|||)" as Ascii<Flavor.REVO>,
                    smiley: ":``::|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``|)#" as Ascii<Flavor.EVO>,
                    smiley: ":``::|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",'|||)" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'|)#" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'|||)" as Ascii<Flavor.REVO>,
                    smiley: ":'::|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'|)#" as Ascii<Flavor.EVO>,
                    smiley: ":'::|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`'|||)" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'|)#" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)|||)" as Ascii<Flavor.REVO>,
                    smiley: ":,::)|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)|)#" as Ascii<Flavor.EVO>,
                    smiley: ":,::)|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")|||)" as Ascii<Flavor.REVO>,
                    smiley: ":)|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|)#" as Ascii<Flavor.EVO>,
                    smiley: ":)|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".(|||" as Ascii<Flavor.REVO>,
                    smiley: ":.::(|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(|#" as Ascii<Flavor.EVO>,
                    smiley: ":.::(|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":`::|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",(|||" as Ascii<Flavor.REVO>,
                    smiley: ":,::(|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(|#" as Ascii<Flavor.EVO>,
                    smiley: ":,::(|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(|||" as Ascii<Flavor.REVO>,
                    smiley: ":(|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(|#" as Ascii<Flavor.EVO>,
                    smiley: ":(|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`(|||" as Ascii<Flavor.REVO>,
                    smiley: ":`::(|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(|#" as Ascii<Flavor.EVO>,
                    smiley: ":`::(|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``(|||" as Ascii<Flavor.REVO>,
                    smiley: ":``::(|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``(|#" as Ascii<Flavor.EVO>,
                    smiley: ":``::(|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",'(|||" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::(|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'(|#" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::(|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'(|||" as Ascii<Flavor.REVO>,
                    smiley: ":'::(|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(|#" as Ascii<Flavor.EVO>,
                    smiley: ":'::(|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",~|||)" as Ascii<Flavor.REVO>,
                    smiley: ":,::~|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~|)#" as Ascii<Flavor.EVO>,
                    smiley: ":,::~|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~|||)" as Ascii<Flavor.REVO>,
                    smiley: ":~|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~|)#" as Ascii<Flavor.EVO>,
                    smiley: ":~|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`~|||)" as Ascii<Flavor.REVO>,
                    smiley: ":`::~|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~|)#" as Ascii<Flavor.EVO>,
                    smiley: ":`::~|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",.(|||(" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::(|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.(|(#" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::(|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".(|||(" as Ascii<Flavor.REVO>,
                    smiley: ":.::(|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(|(#" as Ascii<Flavor.EVO>,
                    smiley: ":.::(|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'~|||)" as Ascii<Flavor.REVO>,
                    smiley: ":'::~|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'~|)#" as Ascii<Flavor.EVO>,
                    smiley: ":'::~|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "/|||~" as Ascii<Flavor.REVO>,
                    smiley: ":/|||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "/|~#" as Ascii<Flavor.EVO>,
                    smiley: ":/|~::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,(|||(" as Ascii<Flavor.REVO>,
                    smiley: ":,,::(|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,(|(#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::(|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",(|||(" as Ascii<Flavor.REVO>,
                    smiley: ":,::(|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(|(#" as Ascii<Flavor.EVO>,
                    smiley: ":,::(|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(|||(" as Ascii<Flavor.REVO>,
                    smiley: ":(|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(|(#" as Ascii<Flavor.EVO>,
                    smiley: ":(|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`(|||(" as Ascii<Flavor.REVO>,
                    smiley: ":`::(|||(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(|(#" as Ascii<Flavor.EVO>,
                    smiley: ":`::(|(::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":~|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":~|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",.//|||" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::/ /|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.//|#" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::/ /|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".//|||" as Ascii<Flavor.REVO>,
                    smiley: ":.::/ /|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".//|#" as Ascii<Flavor.EVO>,
                    smiley: ":.::/ /|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.//|||" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::/ /|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.//|#" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::/ /|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,//|||" as Ascii<Flavor.REVO>,
                    smiley: ":,,::/ /|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,//|#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::/ /|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",//|||" as Ascii<Flavor.REVO>,
                    smiley: ":,::/ /|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",//|#" as Ascii<Flavor.EVO>,
                    smiley: ":,::/ /|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "//|||" as Ascii<Flavor.REVO>,
                    smiley: ":/ /|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "//|#" as Ascii<Flavor.EVO>,
                    smiley: ":/ /|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`//|||" as Ascii<Flavor.REVO>,
                    smiley: ":`::/ /|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`//|#" as Ascii<Flavor.EVO>,
                    smiley: ":`::/ /|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``//|||" as Ascii<Flavor.REVO>,
                    smiley: ":``::/ /|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``//|#" as Ascii<Flavor.EVO>,
                    smiley: ":``::/ /|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",'//|||" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::/ /|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'//|#" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::/ /|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'//|||" as Ascii<Flavor.REVO>,
                    smiley: ":'::/ /|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'//|#" as Ascii<Flavor.EVO>,
                    smiley: ":'::/ /|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,)//|||" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)/ /|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)//|#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)/ /|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)//|||" as Ascii<Flavor.REVO>,
                    smiley: ":,::)/ /|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)//|#" as Ascii<Flavor.EVO>,
                    smiley: ":,::)/ /|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")//|||" as Ascii<Flavor.REVO>,
                    smiley: ":)/ /|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")//|#" as Ascii<Flavor.EVO>,
                    smiley: ":)/ /|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)//|||" as Ascii<Flavor.REVO>,
                    smiley: ":`::)/ /|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)//|#" as Ascii<Flavor.EVO>,
                    smiley: ":`::)/ /|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``)//|||" as Ascii<Flavor.REVO>,
                    smiley: ":``::)/ /|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)//|#" as Ascii<Flavor.EVO>,
                    smiley: ":``::)/ /|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,/|||)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::/|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,/|)#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::/|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",/|||)" as Ascii<Flavor.REVO>,
                    smiley: ":,::/|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",/|)#" as Ascii<Flavor.EVO>,
                    smiley: ":,::/|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "/|||)" as Ascii<Flavor.REVO>,
                    smiley: ":/|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "/|)#" as Ascii<Flavor.EVO>,
                    smiley: ":/|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`/|||)" as Ascii<Flavor.REVO>,
                    smiley: ":`::/|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`/|)#" as Ascii<Flavor.EVO>,
                    smiley: ":`::/|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(|||~" as Ascii<Flavor.REVO>,
                    smiley: ":(|||~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(|~#" as Ascii<Flavor.EVO>,
                    smiley: ":(|~::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",'/|||)" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::/|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'/|)#" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::/|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'/|||)" as Ascii<Flavor.REVO>,
                    smiley: ":'::/|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'/|)#" as Ascii<Flavor.EVO>,
                    smiley: ":'::/|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`'/|||)" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::/|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'/|)#" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::/|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "./|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":.::/|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "./|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":.::/|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`./|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::/|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`./|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::/|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,/|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":,,::/|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,/|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::/|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",/|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::/|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",/|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":,::/|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "/|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":/|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "/|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":/|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`/|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::/|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`/|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":`::/|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",(/|||" as Ascii<Flavor.REVO>,
                    smiley: ":,::(/|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(/|#" as Ascii<Flavor.EVO>,
                    smiley: ":,::(/|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(/|||" as Ascii<Flavor.REVO>,
                    smiley: ":(/|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(/|#" as Ascii<Flavor.EVO>,
                    smiley: ":(/|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`(/|||" as Ascii<Flavor.REVO>,
                    smiley: ":`::(/|||:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(/|#" as Ascii<Flavor.EVO>,
                    smiley: ":`::(/|::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'/|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":'::/|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'/|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":'::/|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`'/|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::/|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'/|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::/|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)/|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::)/|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)/|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":,::)/|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")/|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":)/|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")/|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":)/|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
        ]
        const expectedP2T: FlavorsExpectation[] = [
            {
                revo: {
                    ascii: "`)/|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::)/|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)/|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":`::)/|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``)/|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":``::)/|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)/|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":``::)/|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",.(|||)" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::(|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.(|)#" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::(|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".(|||)" as Ascii<Flavor.REVO>,
                    smiley: ":.::(|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(|)#" as Ascii<Flavor.EVO>,
                    smiley: ":.::(|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",|||\\)" as Ascii<Flavor.REVO>,
                    smiley: ":,::|||\\):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",|\\)#" as Ascii<Flavor.EVO>,
                    smiley: ":,::|\\)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "|||\\)" as Ascii<Flavor.REVO>,
                    smiley: ":|||\\):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|\\)#" as Ascii<Flavor.EVO>,
                    smiley: ":|\\)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`|||\\)" as Ascii<Flavor.REVO>,
                    smiley: ":`::|||\\):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`|\\)#" as Ascii<Flavor.EVO>,
                    smiley: ":`::|\\)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",(|||)" as Ascii<Flavor.REVO>,
                    smiley: ":,::(|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(|)#" as Ascii<Flavor.EVO>,
                    smiley: ":,::(|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(|||)" as Ascii<Flavor.REVO>,
                    smiley: ":(|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(|)#" as Ascii<Flavor.EVO>,
                    smiley: ":(|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`(|||)" as Ascii<Flavor.REVO>,
                    smiley: ":`::(|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(|)#" as Ascii<Flavor.EVO>,
                    smiley: ":`::(|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``(|||)" as Ascii<Flavor.REVO>,
                    smiley: ":``::(|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``(|)#" as Ascii<Flavor.EVO>,
                    smiley: ":``::(|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",'(|||)" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::(|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'(|)#" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::(|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'(|||)" as Ascii<Flavor.REVO>,
                    smiley: ":'::(|||):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(|)#" as Ascii<Flavor.EVO>,
                    smiley: ":'::(|)::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",.(|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::(|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.(|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::(|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".(|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":.::(|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":.::(|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.(|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::(|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.(|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::(|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "|||\\\\" as Ascii<Flavor.REVO>,
                    smiley: ":|||\\ \\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "|\\\\#" as Ascii<Flavor.EVO>,
                    smiley: ":|\\ \\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",(|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::(|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":,::(|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":(|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":(|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`(|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::(|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":`::(|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``(|||\\" as Ascii<Flavor.REVO>,
                    smiley: ":``::(|||\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``(|\\#" as Ascii<Flavor.EVO>,
                    smiley: ":``::(|\\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,)|||\\\\" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)|||\\ \\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)|\\\\#" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)|\\ \\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)|||\\\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::)|||\\ \\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)|\\\\#" as Ascii<Flavor.EVO>,
                    smiley: ":,::)|\\ \\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")|||\\\\" as Ascii<Flavor.REVO>,
                    smiley: ":)|||\\ \\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")|\\\\#" as Ascii<Flavor.EVO>,
                    smiley: ":)|\\ \\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)|||\\\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::)|||\\ \\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)|\\\\#" as Ascii<Flavor.EVO>,
                    smiley: ":`::)|\\ \\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``)|||\\\\" as Ascii<Flavor.REVO>,
                    smiley: ":``::)|||\\ \\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)|\\\\#" as Ascii<Flavor.EVO>,
                    smiley: ":``::)|\\ \\::#:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".)X(" as Ascii<Flavor.REVO>,
                    smiley: ":.::)X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".\\\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":.::\\ \\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.)X(" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::)X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.\\\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::\\ \\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,)X(" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,\\\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":,,::\\ \\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)X(" as Ascii<Flavor.REVO>,
                    smiley: ":,::)X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",\\\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":,::\\ \\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")X(" as Ascii<Flavor.REVO>,
                    smiley: ":)X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "\\\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":\\ \\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)X(" as Ascii<Flavor.REVO>,
                    smiley: ":`::)X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`\\\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":`::\\ \\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``)X(" as Ascii<Flavor.REVO>,
                    smiley: ":``::)X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``\\\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":``::\\ \\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",')X(" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::)X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'\\\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::\\ \\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "')X(" as Ascii<Flavor.REVO>,
                    smiley: ":'::)X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'\\\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":'::\\ \\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`')X(" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::)X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'\\\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::\\ \\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")~X" as Ascii<Flavor.REVO>,
                    smiley: ":)~X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~!/x" as Ascii<Flavor.EVO>,
                    smiley: ":~!/::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",~X(" as Ascii<Flavor.REVO>,
                    smiley: ":,::~X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(!(x" as Ascii<Flavor.EVO>,
                    smiley: ":,::(!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~X(" as Ascii<Flavor.REVO>,
                    smiley: ":~X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(!(x" as Ascii<Flavor.EVO>,
                    smiley: ":(!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`~X(" as Ascii<Flavor.REVO>,
                    smiley: ":`::~X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(!(x" as Ascii<Flavor.EVO>,
                    smiley: ":`::(!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``~X(" as Ascii<Flavor.REVO>,
                    smiley: ":``::~X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``(!(x" as Ascii<Flavor.EVO>,
                    smiley: ":``::(!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "X~" as Ascii<Flavor.REVO>,
                    smiley: ":X~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "\\!~x" as Ascii<Flavor.EVO>,
                    smiley: ":\\!~::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".~~X" as Ascii<Flavor.REVO>,
                    smiley: ":.::~~X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".~!)x" as Ascii<Flavor.EVO>,
                    smiley: ":.::~!)::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'~X(" as Ascii<Flavor.REVO>,
                    smiley: ":'::~X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(!(x" as Ascii<Flavor.EVO>,
                    smiley: ":'::(!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`'~X(" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::~X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'(!(x" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::(!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",~~X" as Ascii<Flavor.REVO>,
                    smiley: ":,::~~X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~!)x" as Ascii<Flavor.EVO>,
                    smiley: ":,::~!)::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~~X" as Ascii<Flavor.REVO>,
                    smiley: ":~~X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~!)x" as Ascii<Flavor.EVO>,
                    smiley: ":~!)::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`~~X" as Ascii<Flavor.REVO>,
                    smiley: ":`::~~X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~!)x" as Ascii<Flavor.EVO>,
                    smiley: ":`::~!)::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".)X~" as Ascii<Flavor.REVO>,
                    smiley: ":.::)X~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".(!x" as Ascii<Flavor.EVO>,
                    smiley: ":.::(!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.)X~" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::)X~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.(!x" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::(!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,)X~" as Ascii<Flavor.REVO>,
                    smiley: ":,,::)X~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,(!x" as Ascii<Flavor.EVO>,
                    smiley: ":,,::(!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",)X~" as Ascii<Flavor.REVO>,
                    smiley: ":,::)X~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",(!x" as Ascii<Flavor.EVO>,
                    smiley: ":,::(!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")X~" as Ascii<Flavor.REVO>,
                    smiley: ":)X~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "(!x" as Ascii<Flavor.EVO>,
                    smiley: ":(!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)X~" as Ascii<Flavor.REVO>,
                    smiley: ":`::)X~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`(!x" as Ascii<Flavor.EVO>,
                    smiley: ":`::(!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",/X" as Ascii<Flavor.REVO>,
                    smiley: ":,::/X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!/x" as Ascii<Flavor.EVO>,
                    smiley: ":,::!/::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "/X" as Ascii<Flavor.REVO>,
                    smiley: ":/X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!/x" as Ascii<Flavor.EVO>,
                    smiley: ":!/::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "')X~" as Ascii<Flavor.REVO>,
                    smiley: ":'::)X~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'(!x" as Ascii<Flavor.EVO>,
                    smiley: ":'::(!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")/X" as Ascii<Flavor.REVO>,
                    smiley: ":)/X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!)x" as Ascii<Flavor.EVO>,
                    smiley: ":)!)::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)/X" as Ascii<Flavor.REVO>,
                    smiley: ":`::)/X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)!)x" as Ascii<Flavor.EVO>,
                    smiley: ":`::)!)::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",.X)" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.!)x" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::!)::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".X)" as Ascii<Flavor.REVO>,
                    smiley: ":.::X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".!)x" as Ascii<Flavor.EVO>,
                    smiley: ":.::!)::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.X)" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.!)x" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::!)::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,X)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,!)x" as Ascii<Flavor.EVO>,
                    smiley: ":,,::!)::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",X)" as Ascii<Flavor.REVO>,
                    smiley: ":,::X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!)x" as Ascii<Flavor.EVO>,
                    smiley: ":,::!)::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "X)" as Ascii<Flavor.REVO>,
                    smiley: ":X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!)x" as Ascii<Flavor.EVO>,
                    smiley: ":!)::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`X)" as Ascii<Flavor.REVO>,
                    smiley: ":`::X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`!)x" as Ascii<Flavor.EVO>,
                    smiley: ":`::!)::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``X)" as Ascii<Flavor.REVO>,
                    smiley: ":``::X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``!)x" as Ascii<Flavor.EVO>,
                    smiley: ":``::!)::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",'X)" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'!)x" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::!)::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'X)" as Ascii<Flavor.REVO>,
                    smiley: ":'::X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'!)x" as Ascii<Flavor.EVO>,
                    smiley: ":'::!)::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`'X)" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'!)x" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::!)::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")X)" as Ascii<Flavor.REVO>,
                    smiley: ":)X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":)\\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)X)" as Ascii<Flavor.REVO>,
                    smiley: ":`::)X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":`::)\\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``)X)" as Ascii<Flavor.REVO>,
                    smiley: ":``::)X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``)\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":``::)\\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",.X\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::X\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::\\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".X\\" as Ascii<Flavor.REVO>,
                    smiley: ":.::X\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":.::\\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "')X)" as Ascii<Flavor.REVO>,
                    smiley: ":'::)X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "')\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":'::)\\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,X\\" as Ascii<Flavor.REVO>,
                    smiley: ":,,::X\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":,,::\\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",X\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::X\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":,::\\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "X\\" as Ascii<Flavor.REVO>,
                    smiley: ":X\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":\\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`X\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::X\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":`::\\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``X\\" as Ascii<Flavor.REVO>,
                    smiley: ":``::X\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":``::\\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(X" as Ascii<Flavor.REVO>,
                    smiley: ":(X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!~x" as Ascii<Flavor.EVO>,
                    smiley: ":)!~::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'X\\" as Ascii<Flavor.REVO>,
                    smiley: ":'::X\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":'::\\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`'X\\" as Ascii<Flavor.REVO>,
                    smiley: ":`::'::X\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`'\\!x" as Ascii<Flavor.EVO>,
                    smiley: ":`::'::\\!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,~X)" as Ascii<Flavor.REVO>,
                    smiley: ":,,::~X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,~~!x" as Ascii<Flavor.EVO>,
                    smiley: ":,,::~~!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",~X)" as Ascii<Flavor.REVO>,
                    smiley: ":,::~X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~~!x" as Ascii<Flavor.EVO>,
                    smiley: ":,::~~!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~X)" as Ascii<Flavor.REVO>,
                    smiley: ":~X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~~!x" as Ascii<Flavor.EVO>,
                    smiley: ":~~!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",/X~" as Ascii<Flavor.REVO>,
                    smiley: ":,::/X~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!~x" as Ascii<Flavor.EVO>,
                    smiley: ":,::!~::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "/X~" as Ascii<Flavor.REVO>,
                    smiley: ":/X~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!~x" as Ascii<Flavor.EVO>,
                    smiley: ":!~::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`/X~" as Ascii<Flavor.REVO>,
                    smiley: ":`::/X~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`!~x" as Ascii<Flavor.EVO>,
                    smiley: ":`::!~::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``/X~" as Ascii<Flavor.REVO>,
                    smiley: ":``::/X~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``!~x" as Ascii<Flavor.EVO>,
                    smiley: ":``::!~::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",(X(" as Ascii<Flavor.REVO>,
                    smiley: ":,::(X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",~!(x" as Ascii<Flavor.EVO>,
                    smiley: ":,::~!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(X(" as Ascii<Flavor.REVO>,
                    smiley: ":(X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~!(x" as Ascii<Flavor.EVO>,
                    smiley: ":~!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`(X(" as Ascii<Flavor.REVO>,
                    smiley: ":`::(X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~!(x" as Ascii<Flavor.EVO>,
                    smiley: ":`::~!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``(X(" as Ascii<Flavor.REVO>,
                    smiley: ":``::(X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``~!(x" as Ascii<Flavor.EVO>,
                    smiley: ":``::~!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",'(X(" as Ascii<Flavor.REVO>,
                    smiley: ":,::'::(X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",'~!(x" as Ascii<Flavor.EVO>,
                    smiley: ":,::'::~!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'(X(" as Ascii<Flavor.REVO>,
                    smiley: ":'::(X(:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'~!(x" as Ascii<Flavor.EVO>,
                    smiley: ":'::~!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "~X\\" as Ascii<Flavor.REVO>,
                    smiley: ":~X\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")~!x" as Ascii<Flavor.EVO>,
                    smiley: ":)~!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ".//X" as Ascii<Flavor.REVO>,
                    smiley: ":.::/ /X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".)!(x" as Ascii<Flavor.EVO>,
                    smiley: ":.::)!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`.//X" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::/ /X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.)!(x" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::)!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,//X" as Ascii<Flavor.REVO>,
                    smiley: ":,,::/ /X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)!(x" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",//X" as Ascii<Flavor.REVO>,
                    smiley: ":,::/ /X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)!(x" as Ascii<Flavor.EVO>,
                    smiley: ":,::)!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "//X" as Ascii<Flavor.REVO>,
                    smiley: ":/ /X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!(x" as Ascii<Flavor.EVO>,
                    smiley: ":)!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`//X" as Ascii<Flavor.REVO>,
                    smiley: ":`::/ /X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)!(x" as Ascii<Flavor.EVO>,
                    smiley: ":`::)!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ")//X" as Ascii<Flavor.REVO>,
                    smiley: ":)/ /X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "~!x" as Ascii<Flavor.EVO>,
                    smiley: ":~!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`)//X" as Ascii<Flavor.REVO>,
                    smiley: ":`::)/ /X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`~!x" as Ascii<Flavor.EVO>,
                    smiley: ":`::~!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "./X)" as Ascii<Flavor.REVO>,
                    smiley: ":.::/X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".!(x" as Ascii<Flavor.EVO>,
                    smiley: ":.::!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`./X)" as Ascii<Flavor.REVO>,
                    smiley: ":`::.::/X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`.!(x" as Ascii<Flavor.EVO>,
                    smiley: ":`::.::!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "')//X" as Ascii<Flavor.REVO>,
                    smiley: ":'::)/ /X:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "'~!x" as Ascii<Flavor.EVO>,
                    smiley: ":'::~!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",/X)" as Ascii<Flavor.REVO>,
                    smiley: ":,::/X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!(x" as Ascii<Flavor.EVO>,
                    smiley: ":,::!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "/X)" as Ascii<Flavor.REVO>,
                    smiley: ":/X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "!(x" as Ascii<Flavor.EVO>,
                    smiley: ":!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`/X)" as Ascii<Flavor.REVO>,
                    smiley: ":`::/X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`!(x" as Ascii<Flavor.EVO>,
                    smiley: ":`::!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "``/X)" as Ascii<Flavor.REVO>,
                    smiley: ":``::/X):" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "``!(x" as Ascii<Flavor.EVO>,
                    smiley: ":``::!(::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,(X~" as Ascii<Flavor.REVO>,
                    smiley: ":,,::(X~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,)!x" as Ascii<Flavor.EVO>,
                    smiley: ":,,::)!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",(X~" as Ascii<Flavor.REVO>,
                    smiley: ":,::(X~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",)!x" as Ascii<Flavor.EVO>,
                    smiley: ":,::)!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "(X~" as Ascii<Flavor.REVO>,
                    smiley: ":(X~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ")!x" as Ascii<Flavor.EVO>,
                    smiley: ":)!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "`(X~" as Ascii<Flavor.REVO>,
                    smiley: ":`::(X~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "`)!x" as Ascii<Flavor.EVO>,
                    smiley: ":`::)!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",./X\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::.::/X\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",.!x" as Ascii<Flavor.EVO>,
                    smiley: ":,::.::!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "./X\\" as Ascii<Flavor.REVO>,
                    smiley: ":.::/X\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ".!x" as Ascii<Flavor.EVO>,
                    smiley: ":.::!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "'(X~" as Ascii<Flavor.REVO>,
                    smiley: ":'::(X~:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "')!x" as Ascii<Flavor.EVO>,
                    smiley: ":'::)!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",,/X\\" as Ascii<Flavor.REVO>,
                    smiley: ":,,::/X\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",,!x" as Ascii<Flavor.EVO>,
                    smiley: ":,,::!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: ",/X\\" as Ascii<Flavor.REVO>,
                    smiley: ":,::/X\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: ",!x" as Ascii<Flavor.EVO>,
                    smiley: ":,::!::x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
            {
                revo: {
                    ascii: "/X\\" as Ascii<Flavor.REVO>,
                    smiley: ":/X\\:" as Smiley<Flavor.REVO>,
                    unicode: "" as Unicode<Flavor.REVO>,
                },
                evo: {
                    ascii: "x" as Ascii<Flavor.EVO>,
                    smiley: ":x:" as Smiley<Flavor.EVO>,
                    unicode: "" as Unicode<Flavor.EVO>,
                },
            },
        ]

        const expected = [
            ...expectedN2T,
            ...expectedN2A,
            ...expectedN1T,
            ...expectedN1A,
            ...expectedP1A,
            ...expectedP1T,
            ...expectedP2A,
            ...expectedP2T,
        ] as FlavorsExpectation[]
        expect(accidentalExpectations).toEqual(expected)
    })
})
