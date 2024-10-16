import { EdoNotationName, EdoNotationDefinition } from "./types"

const EDO_NOTATION_DEFINITIONS: Record<EdoNotationName, EdoNotationDefinition> =
    {
        "5": { stepDefinitions: [] },
        "6": { supersetEdoNotationName: "12" },
        "7": { isLimmaFraction: true, stepDefinitions: [] },
        "8": { supersetEdoNotationName: "24" },
        "9": { isLimmaFraction: true, stepDefinitions: [{ sagitype: "|\\" }] },
        "10": { stepDefinitions: [{ sagitype: "(|\\" }] },
        "11": { supersetEdoNotationName: "22" },
        "12": { stepDefinitions: [] },
        "13": { supersetEdoNotationName: "26" },
        "14": { isLimmaFraction: true, stepDefinitions: [{ sagitype: "|\\" }] },
        "15": { stepDefinitions: [{ sagitype: "/|" }] },
        "16": { isLimmaFraction: true, stepDefinitions: [{ sagitype: "|)" }] },
        "17": {
            stepDefinitions: [{ sagitype: "/|\\", validCommas: ["11M"] }],
        },
        "18": { supersetEdoNotationName: "36" },
        "19": { stepDefinitions: [] },
        "20": { stepDefinitions: [{ sagitype: ")~|" }, { sagitype: "(|\\" }] },
        "21": { isLimmaFraction: true, stepDefinitions: [{ sagitype: "|)" }] },
        "22": {
            stepDefinitions: [{ sagitype: "/|", validCommas: ["5C"] }],
        },
        "23": {
            isLimmaFraction: true,
            stepDefinitions: [{ sagitype: "|)" }, { sagitype: "|\\" }],
        },
        "23b": { stepDefinitions: [")|", "/|", "(|\\"] },
        "24": { stepDefinitions: [{ sagitype: "/|\\", validCommas: ["11M"] }] },
        "25": {
            stepDefinitions: [{ sagitype: ")~|" }, { sagitype: "/|" }],
        },
        "26": { stepDefinitions: [] },
        "27": {
            stepDefinitions: [
                { sagitype: "/|", validCommas: ["5C"] },
                { sagitype: "(|\\", validCommas: [undefined, "13L"] },
            ],
        },
        "28": {
            isLimmaFraction: true,
            stepDefinitions: [{ sagitype: "|)" }, { sagitype: "|\\" }],
        },
        "29": { stepDefinitions: [{ sagitype: "/|", validCommas: ["5C"] }] },
        "30": {
            stepDefinitions: [
                { sagitype: ")|" },
                { sagitype: "/|" },
                { sagitype: "(|\\" },
            ],
        },
        "30b": {
            isLimmaFraction: true,
            stepDefinitions: [{ sagitype: "|(" }, { sagitype: "|)" }],
        },
        "31": { stepDefinitions: [{ sagitype: "/|\\", validCommas: ["11M"] }] },
        "32": {
            stepDefinitions: [{ sagitype: ")~|" }, { sagitype: "/|" }],
        },
        "33": {
            isLimmaFraction: true,
            stepDefinitions: [{ sagitype: "|)" }, { sagitype: "|\\" }],
        },
        "34": {
            stepDefinitions: [
                { sagitype: "/|", validCommas: ["5C"] },
                { sagitype: "/|\\", validCommas: ["11M"] },
            ],
        },
        "35": {
            isLimmaFraction: true,
            stepDefinitions: [{ sagitype: "|(" }, { sagitype: "|)" }],
        },
        "35b": {
            stepDefinitions: [
                { sagitype: ")|" },
                { sagitype: "/|" },
                { sagitype: "/|)" },
            ],
        },
        "36": { stepDefinitions: [{ sagitype: "|)", validCommas: ["7C"] }] },
        "37": {
            stepDefinitions: [
                { sagitype: ")|" },
                { sagitype: "/|" },
                { sagitype: "(|\\" },
            ],
        },
        "38": { stepDefinitions: [{ sagitype: "/|\\", validCommas: ["11M"] }] },
        "39": {
            stepDefinitions: [
                { sagitype: "/|", validCommas: ["5C"] },
                { sagitype: "/|\\", validCommas: ["11M"] },
            ],
        },
        "40": {
            isLimmaFraction: true,
            stepDefinitions: [
                { sagitype: "|(" },
                { sagitype: "|)" },
                { sagitype: "(|\\" },
            ],
        },
        "41": {
            stepDefinitions: [
                { sagitype: "/|", validCommas: ["5C"] },
                { sagitype: "/|\\", validCommas: ["11M"] },
            ],
        },
        "42": {
            stepDefinitions: [
                { sagitype: ")|" },
                { sagitype: "/|" },
                { sagitype: "/|)" },
            ],
        },
        "42b": {
            isLimmaFraction: true,
            stepDefinitions: [
                { sagitype: "|(" },
                { sagitype: "|)" },
                { sagitype: "|\\" },
            ],
        },
        "43": { stepDefinitions: [{ sagitype: "|)", validCommas: ["7C"] }] },
        "44": {
            stepDefinitions: [
                { sagitype: ")|", validCommas: ["19s"] },
                { sagitype: "/|", validCommas: ["5C"] },
                { sagitype: "(|\\", validCommas: [undefined, "13L"] },
            ],
        },
        "45": { stepDefinitions: [{ sagitype: "/|)", validCommas: ["35M"] }] },
        "46": {
            stepDefinitions: [
                { sagitype: "/|", validCommas: ["5C"] },
                { sagitype: "/|\\", validCommas: ["11M"] },
            ],
        },
        "47": {
            isLimmaFraction: true,
            stepDefinitions: [
                { sagitype: "|(" },
                { sagitype: "|)" },
                { sagitype: "|\\" },
            ],
        },
        "47b": {
            stepDefinitions: [
                { sagitype: ")|" },
                { sagitype: ")~|" },
                { sagitype: "/|" },
                { sagitype: "(|\\" },
            ],
        },
        "48": {
            stepDefinitions: [
                { sagitype: "|~", validCommas: ["23C"] },
                { sagitype: "/|\\", validCommas: ["11M"] },
            ],
        },
        "49": {
            stepDefinitions: [
                { sagitype: ")|", validCommas: ["19s"] },
                { sagitype: "/|", validCommas: ["5C"] },
                { sagitype: "/|\\", validCommas: ["11M"] },
            ],
        },
        "50": {
            stepDefinitions: [
                { sagitype: "/|)", validCommas: [undefined, "13M"] },
            ],
        },
        "51": {
            stepDefinitions: [
                { sagitype: "|)", validCommas: ["7C"] },
                { sagitype: "/|", validCommas: ["5C"] },
                { sagitype: "(|\\", validCommas: [undefined, "13L"] },
            ],
        },
        "52": { stepDefinitions: [{ sagitype: "/|)", validCommas: ["35M"] }] },
        "53": {
            stepDefinitions: [
                { sagitype: "/|", validCommas: ["5C"] },
                { sagitype: "//|", validCommas: ["25S"] },
            ],
        },
        "54": {
            stepDefinitions: [
                { sagitype: ")|", validCommas: ["19s"] },
                { sagitype: "/|", validCommas: ["5C"] },
                { sagitype: "/|\\", validCommas: ["11M"] },
                { sagitype: "(|\\", validCommas: [undefined, "13L"] },
            ],
        },
        "55": {
            stepDefinitions: [
                { sagitype: ")|(", validCommas: ["11/7k"] },
                { sagitype: "/|\\", validCommas: ["11M"] },
            ],
        },
        "56": {
            stepDefinitions: [
                { sagitype: "|)", validCommas: ["7C"] },
                { sagitype: "/|", validCommas: ["5C"] },
                { sagitype: "/|\\", validCommas: ["11M"] },
            ],
        },
        "57": {
            stepDefinitions: [
                { sagitype: "/|)", validCommas: [undefined, "13M"] },
            ],
        },
        "58": {
            stepDefinitions: [
                { sagitype: "/|", validCommas: ["5C"] },
                { sagitype: "|\\", validCommas: ["55C"] },
                { sagitype: "/|\\", validCommas: ["11M"] },
            ],
        },
        "59": {
            stepDefinitions: [
                { sagitype: ")|", nonJiMeaning: "(~3A)/9 ((~2187/2048)/9)" },
                { sagitype: ")~|", validCommas: ["143C"] },
                { sagitype: "/|", validCommas: ["5C"] },
                { sagitype: "/|)", validCommas: [undefined, "13M"] },
            ],
        },
        "59b": { stepDefinitions: [{ sagitype: "/|)", validCommas: ["35M"] }] },
        "60": {
            stepDefinitions: [
                { sagitype: "(|", validCommas: ["11/7C"] },
                { sagitype: "/|~", validCommas: ["23/5S"] },
            ],
        },
        "61": {
            stepDefinitions: [
                { sagitype: ")|", validCommas: ["19s"] },
                { sagitype: "/|", validCommas: ["5C"] },
                { sagitype: "/|\\", validCommas: ["11M"] },
                { sagitype: "(|\\", validCommas: [undefined, "13L"] },
            ],
        },
        "62": {
            stepDefinitions: [
                { sagitype: "/|)", validCommas: [undefined, "13M"] },
                { sagitype: "/|\\", validCommas: ["11M"] },
            ],
        },
        "63": {
            stepDefinitions: [
                { sagitype: "|)", validCommas: ["7C"] },
                { sagitype: "/|", validCommas: ["5C"] },
                { sagitype: "/|\\", validCommas: ["11M"] },
            ],
        },
        "64": {
            stepDefinitions: [
                { sagitype: "/|)", validCommas: [undefined, "13M"] },
            ],
        },
        "64b": {
            stepDefinitions: [
                { sagitype: ")|" },
                { sagitype: ")~|" },
                { sagitype: ")|(" },
                { sagitype: "/|" },
                { sagitype: "(|\\" },
            ],
        },
        "65": {
            stepDefinitions: [
                { sagitype: "/|", validCommas: ["5C"] },
                { sagitype: "|)", validCommas: ["7C"] },
                { sagitype: "/|\\", validCommas: ["11M"] },
            ],
        },
        "66": {
            stepDefinitions: [
                { sagitype: ")|", validCommas: ["19s"] },
                { sagitype: ")~|", validCommas: ["143C"] },
                { sagitype: "/|", validCommas: ["5C"] },
                { sagitype: "/|)", validCommas: [undefined, "13M"] },
            ],
        },
        "67": {
            stepDefinitions: [
                { sagitype: ")|(", validCommas: ["11/7k"] },
                { sagitype: "/|)", validCommas: ["35M"] },
            ],
        },
        "68": {
            stepDefinitions: [
                { sagitype: "|)", validCommas: ["7C"] },
                { sagitype: "/|", validCommas: ["5C"] },
                { sagitype: "/|\\", validCommas: ["11M"] },
                { sagitype: "(|\\", validCommas: [undefined, "13L"] },
            ],
        },
        "69": {
            stepDefinitions: [
                { sagitype: "/|)", validCommas: [undefined, "13M"] }, // TODO: remember, some of these are going to require kludge maps when you write the test
                { sagitype: "/|\\", validCommas: [undefined, "25·11/7M"] },
            ],
        },
        "70": {
            stepDefinitions: [
                { sagitype: "/|", validCommas: ["5C"] },
                { sagitype: "|\\", validCommas: ["55C"] },
                { sagitype: "/|\\", validCommas: ["11M"] },
            ],
        },
        "71": {
            stepDefinitions: [
                { sagitype: "|\\", validCommas: ["55C"] },
                { sagitype: ")~|", validCommas: ["143C"] },
                { sagitype: "/|", validCommas: ["5C"] },
                { sagitype: "/|\\", validCommas: ["11M"] },
                { sagitype: "(|\\", validCommas: [undefined, "13L"] },
            ],
        },
        "71b": {
            stepDefinitions: [
                { sagitype: "/|)", validCommas: [undefined, "13M"] },
            ],
        },
        "72": {
            stepDefinitions: [
                { sagitype: "/|", validCommas: ["5C"] },
                { sagitype: "|)", validCommas: ["7C"] },
                { sagitype: "/|\\", validCommas: ["11M"] },
            ],
        },
        "73": {
            stepDefinitions: [
                { sagitype: "|)", validCommas: ["7C"] },
                { sagitype: "/|", validCommas: ["5C"] },
                { sagitype: "(|(", validCommas: ["11/5S"] },
                { sagitype: "/|\\", validCommas: ["11M"] },
            ],
        },
        "74": {
            stepDefinitions: [
                { sagitype: "(|(", validCommas: [undefined, "13/7S"] },
                { sagitype: "/|)", validCommas: ["35M", "13M"] },
            ],
        },
        "75": {
            stepDefinitions: [
                { sagitype: "|)", validCommas: ["7C"] },
                { sagitype: "/|", validCommas: ["5C"] },
                { sagitype: "/|\\", validCommas: ["11M"] },
                { sagitype: "(|\\", validCommas: [undefined, "13L"] },
            ],
        },
        "76": {
            stepDefinitions: [
                { sagitype: "/|)", validCommas: [undefined, "13M"] },
                { sagitype: "/|\\", validCommas: [undefined, "25·11/7M"] },
            ],
        },
        "77": {
            stepDefinitions: [
                { sagitype: "/|", validCommas: ["5C"] },
                { sagitype: "|)", validCommas: ["7C"] },
                { sagitype: "/|\\", validCommas: ["11M"] },
            ],
        },
        "79": {
            stepDefinitions: [
                { sagitype: "/|" },
                { sagitype: "|)" },
                { sagitype: "/|\\" },
            ],
        },
        "80": {
            stepDefinitions: [
                { sagitype: "|)" },
                { sagitype: "/|" },
                { sagitype: "(|(" },
                { sagitype: "/|\\" },
            ],
        },
        "84": {
            stepDefinitions: [
                { sagitype: "/|" },
                { sagitype: "|)" },
                { sagitype: "/|)" },
            ],
        },
        "87": {
            stepDefinitions: [
                { sagitype: "|~" },
                { sagitype: "/|" },
                { sagitype: "/|~" },
                { sagitype: "/|\\" },
            ],
        },
        "88": { supersetEdoNotationName: "176" },
        "89": {
            stepDefinitions: [
                { sagitype: "/|" },
                { sagitype: "|)" },
                { sagitype: "/|)" },
                { sagitype: "/|\\" },
            ],
        },
        "94": {
            stepDefinitions: [
                { sagitype: "~|(" },
                { sagitype: "/|" },
                { sagitype: "(|(" },
                { sagitype: "/|" },
            ],
        },
        "99": {
            stepDefinitions: [
                { sagitype: "~|" },
                { sagitype: "/|" },
                { sagitype: "~|)" },
                { sagitype: "//|" },
                { sagitype: ")/|\\" },
            ],
        },
        "111": {
            stepDefinitions: [
                { sagitype: ")|(" },
                { sagitype: "/|" },
                { sagitype: "|\\" },
                { sagitype: "//|" },
                { sagitype: "/|\\" },
            ],
        },
        "112": { supersetEdoNotationName: "224" },
        "118": {
            stepDefinitions: [
                { sagitype: ")|(" },
                { sagitype: "/|" },
                { sagitype: "|)" },
                { sagitype: "//|" },
                { sagitype: "/|\\" },
            ],
        },
        "121": {
            stepDefinitions: [
                { sagitype: ")|" },
                { sagitype: "~|" },
                { sagitype: "/|" },
                { sagitype: "(|(" },
                { sagitype: "~|\\" },
                { sagitype: "/|\\" },
            ],
        }, // https://forum.sagittal.org/viewtopic.php?p=4751#p4751
        "125": {
            stepDefinitions: [
                { sagitype: "|(" },
                { sagitype: "/|" },
                { sagitype: "|)" },
                { sagitype: "//|" },
                { sagitype: "/|)" },
            ],
        },
        "128": {
            stepDefinitions: [
                { sagitype: ")|" },
                { sagitype: "~|" },
                { sagitype: "/|" },
                { sagitype: "(|(" },
                { sagitype: "~|\\" },
                { sagitype: "/|\\" },
            ],
        }, // https://forum.sagittal.org/viewtopic.php?p=4751#p4751
        "130": {
            stepDefinitions: [
                { sagitype: "|(" },
                { sagitype: "/|" },
                { sagitype: "|)" },
                { sagitype: "|\\" },
                { sagitype: "/|)" },
                { sagitype: "/|\\" },
            ],
        },
        "135": {
            stepDefinitions: [
                { sagitype: ")|(" },
                { sagitype: "~~|" },
                { sagitype: "|)" },
                { sagitype: "~|)" },
                { sagitype: "//|" },
                { sagitype: "/|\\" },
            ],
        }, // https://forum.sagittal.org/viewtopic.php?p=308#p308
        "137": {
            stepDefinitions: [
                { sagitype: "|(" },
                { sagitype: "/|" },
                { sagitype: "|)" },
                { sagitype: "|\\" },
                { sagitype: "/|)" },
                { sagitype: "/|\\" },
            ],
        }, // https://forum.sagittal.org/viewtopic.php?p=1743#p1743
        "140": {
            stepDefinitions: [
                { sagitype: ")|(" },
                { sagitype: "~~|" },
                { sagitype: "/|" },
                { sagitype: "~|)" },
                { sagitype: "(|(" },
                { sagitype: "/|)" },
                { sagitype: ")/|\\" },
            ],
        }, // https://forum.sagittal.org/viewtopic.php?p=308#p308
        "141": {
            stepDefinitions: [
                { sagitype: "/|" },
                { sagitype: "//|" },
                { sagitype: "(|(" },
                { sagitype: "(|)" },
                { sagitype: "(|\\" },
            ],
        }, // https://forum.sagittal.org/viewtopic.php?p=308#p308
        "142": {
            stepDefinitions: [
                { sagitype: "|(" },
                { sagitype: "/|" },
                { sagitype: "|)" },
                { sagitype: "|\\" },
                { sagitype: "/|)" },
                { sagitype: "/|\\" },
            ],
        },
        "145": {
            stepDefinitions: [
                { sagitype: ")|" },
                { sagitype: ")~|" },
                { sagitype: "|)" },
                { sagitype: ")|)" },
                { sagitype: "(|(" },
                { sagitype: "~|\\" },
                { sagitype: "/|\\" },
            ],
        }, // https://forum.sagittal.org/viewtopic.php?p=4749#p4749
        "147": {
            stepDefinitions: [
                { sagitype: ")|(" },
                { sagitype: "~|(" },
                { sagitype: "/|" },
                { sagitype: "|\\" },
                { sagitype: "~|)" },
                { sagitype: "/|)" },
                { sagitype: "/|\\" },
            ],
        }, // https://forum.sagittal.org/viewtopic.php?p=308#p308
        "152": {
            stepDefinitions: [
                { sagitype: ")|(" },
                { sagitype: "~|(" },
                { sagitype: "/|" },
                { sagitype: "|\\" },
                { sagitype: "(|(" },
                { sagitype: "//|" },
                { sagitype: "/|\\" },
            ],
        },
        "171": {
            stepDefinitions: [
                { sagitype: "|(" },
                { sagitype: "~|(" },
                { sagitype: "/|" },
                { sagitype: "|)" },
                { sagitype: "|\\" },
                { sagitype: "//|" },
                { sagitype: "/|)" },
                { sagitype: "/|\\" },
            ],
        },
        "174": {
            stepDefinitions: [
                { sagitype: ")|" },
                { sagitype: ")~|" },
                { sagitype: "~~|" },
                { sagitype: "/|" },
                { sagitype: "~|)" },
                { sagitype: "(|(" },
                { sagitype: "~|\\" },
                { sagitype: "/|\\" },
                { sagitype: ")/|\\" },
            ],
        }, // https://forum.sagittal.org/viewtopic.php?p=4749#p4749
        "176": {
            stepDefinitions: [
                { sagitype: "|(" },
                { sagitype: "~|(" },
                { sagitype: "/|" },
                { sagitype: "|)" },
                { sagitype: "|\\" },
                { sagitype: "(|(" },
                { sagitype: "/|)" },
                { sagitype: "/|\\" },
            ],
        },
        "181": {
            stepDefinitions: [
                { sagitype: ")|" },
                { sagitype: ")~|" },
                { sagitype: "~~|" },
                { sagitype: "/|" },
                { sagitype: "~|)" },
                { sagitype: "(|(" },
                { sagitype: "~|\\" },
                { sagitype: "/|\\" },
                { sagitype: ")/|\\" },
            ],
        }, // https://forum.sagittal.org/viewtopic.php?p=4749#p4749
        "183": {
            stepDefinitions: [
                { sagitype: "|(" },
                { sagitype: "~|(" },
                { sagitype: "/|" },
                { sagitype: "|)" },
                { sagitype: "|\\" },
                { sagitype: "(|(" },
                { sagitype: "/|)" },
                { sagitype: "/|\\" },
            ],
        },
        "205": {
            stepDefinitions: [
                { sagitype: ")|" },
                { sagitype: ")|(" },
                { sagitype: "~|(" },
                { sagitype: "/|" },
                { sagitype: "|\\" },
                { sagitype: "/|~" },
                { sagitype: "(|(" },
                { sagitype: "//|" },
                { sagitype: "/|\\" },
                { sagitype: ")/|\\" },
            ],
        }, // https://forum.sagittal.org/viewtopic.php?p=308#p308
        "217": {
            stepDefinitions: [
                { sagitype: "|(" },
                { sagitype: "~|" },
                { sagitype: "~|(" },
                { sagitype: "/|" },
                { sagitype: "|)" },
                { sagitype: "|\\" },
                { sagitype: "(|(" },
                { sagitype: "//|" },
                { sagitype: "/|)" },
                { sagitype: "/|\\" },
            ],
        },
        "224": {
            stepDefinitions: [
                { sagitype: "|(" },
                { sagitype: ")|(" },
                { sagitype: "~|(" },
                { sagitype: "/|" },
                { sagitype: "|)" },
                { sagitype: "|\\" },
                { sagitype: "(|(" },
                { sagitype: "//|" },
                { sagitype: "/|)" },
                { sagitype: "/|\\" },
            ],
        },
        "270": {
            stepDefinitions: [
                { sagitype: "|(" },
                { sagitype: ")|(" },
                { sagitype: "~|(" },
                { sagitype: "~~|" },
                { sagitype: "/|" },
                { sagitype: "|)" },
                { sagitype: "|\\" },
                { sagitype: "~|)" },
                { sagitype: "(|(" },
                { sagitype: "//|" },
                { sagitype: "/|)" },
                { sagitype: "/|\\" },
                { sagitype: ")/|\\" },
            ],
        }, // https://forum.sagittal.org/viewtopic.php?p=4408#p4408
        "311": {
            stepDefinitions: [
                { sagitype: "|(" },
                { sagitype: ")|(" },
                { sagitype: ")~|" },
                { sagitype: "~|(" },
                { sagitype: "~~|" },
                { sagitype: "/|" },
                { sagitype: "|)" },
                { sagitype: "|\\" },
                { sagitype: "(|" },
                { sagitype: "(|(" },
                { sagitype: "~|\\" },
                { sagitype: "//|" },
                { sagitype: "/|)" },
                { sagitype: "/|\\" },
                { sagitype: ")/|\\" },
            ],
        }, // https://forum.sagittal.org/viewtopic.php?p=4408#p4408
        "494": {
            stepDefinitions: [
                { sagitype: ")|" },
                { sagitype: "|(" },
                { sagitype: "~|" },
                { sagitype: ")|(" },
                { sagitype: ")~|" },
                { sagitype: "~|(" },
                { sagitype: "|~" },
                { sagitype: ")|~" },
                { sagitype: "/|" },
                { sagitype: ")/|" },
                { sagitype: "|)" },
                { sagitype: ")|)" },
                { sagitype: "|\\" },
                { sagitype: "(|" },
                { sagitype: "~|)" },
                { sagitype: "/|~" },
                { sagitype: "~|\\" },
                { sagitype: "//|" },
                { sagitype: ")//|" },
                { sagitype: "/|)" },
                { sagitype: "(|~" },
                { sagitype: "/|\\" },
                { sagitype: "(/|" },
            ],
        }, // https://forum.sagittal.org/viewtopic.php?p=877#p877
        "581": {
            stepDefinitions: [
                { sagitype: "'|" },
                { sagitype: "|(" },
                { sagitype: "'|(" },
                { sagitype: ")|(" },
                { sagitype: "')|(" },
                { sagitype: ".|~" },
                { sagitype: "|~" },
                { sagitype: ".~~|" },
                { sagitype: "~~|" },
                { sagitype: "./|" },
                { sagitype: "/|" },
                { sagitype: ".|)" },
                { sagitype: "|)" },
                { sagitype: ".|\\" },
                { sagitype: "|\\" },
                { sagitype: ".(|" },
                { sagitype: "(|" },
                { sagitype: "'(|" },
                { sagitype: "(|(" },
                { sagitype: "'(|(" },
                { sagitype: ".//|" },
                { sagitype: "//|" },
                { sagitype: "./|)" },
                { sagitype: "/|)" },
                { sagitype: "./|\\" },
                { sagitype: "/|\\" },
                { sagitype: ".)/|\\" },
                { sagitype: ")/|\\" },
            ],
        }, // https://forum.sagittal.org/viewtopic.php?p=741#p741
    } as Record<EdoNotationName, EdoNotationDefinition>

export { EDO_NOTATION_DEFINITIONS }
