import { Edo, EdoNotationDefinition } from "./types"

const EDO_NOTATION_DEFINITIONS: Record<Edo, EdoNotationDefinition> = {
    5: { sagitypes: [] },
    6: { supersetEdo: 12 },
    7: { isLimmaFraction: true, sagitypes: [] },
    8: { supersetEdo: 24 },
    9: { isLimmaFraction: true, sagitypes: ["|\\"] },
    10: { sagitypes: ["(|\\"] },
    11: { supersetEdo: 22 },
    12: { sagitypes: [] },
    13: { supersetEdo: 26 },
    14: { isLimmaFraction: true, sagitypes: ["|\\"] },
    15: { sagitypes: ["/|"] },
    16: { isLimmaFraction: true, sagitypes: ["|)"] },
    17: { sagitypes: ["/|\\"] },
    18: { supersetEdo: 36 },
    19: { sagitypes: [] },
    20: { sagitypes: [")~|", "(|\\"] },
    21: { isLimmaFraction: true, sagitypes: ["|)"] },
    22: { sagitypes: ["/|"] },
    23: { isLimmaFraction: true, sagitypes: ["|)", "|\\"] },
    24: { sagitypes: ["/|\\"] },
    25: { sagitypes: [")~|", "/|"] },
    26: { sagitypes: [] },
    27: { sagitypes: ["/|", "(|\\"] },
    28: { isLimmaFraction: true, sagitypes: ["|)", "|\\"] },
    29: { sagitypes: ["/|"] },
    30: { sagitypes: [")|", "/|", "(|\\"] },
    31: { sagitypes: ["/|\\"] },
    32: { sagitypes: [")~|", "/|"] },
    33: { isLimmaFraction: true, sagitypes: ["|)", "|\\"] },
    34: { sagitypes: ["/|", "/|\\"] },
    35: { isLimmaFraction: true, sagitypes: ["|(", "|)"] },
    36: { sagitypes: ["|)"] },
    37: { sagitypes: [")|", "/|", "(|\\"] },
    38: { sagitypes: ["/|\\"] },
    39: { sagitypes: ["/|", "/|\\"] },
    40: { isLimmaFraction: true, sagitypes: ["|(", "|)", "(|\\"] },
    41: { sagitypes: ["/|", "/|\\"] },
    42: { sagitypes: [")|", "/|", "/|)"] },
    43: { sagitypes: ["|)"] },
    44: { sagitypes: [")|", "/|", "(|\\"] },
    45: { sagitypes: ["/|)"] },
    46: { sagitypes: ["/|", "/|\\"] },
    47: { isLimmaFraction: true, sagitypes: ["|(", "|)", "|\\"] },
    48: { sagitypes: ["|~", "/|\\"] },
    49: { sagitypes: [")|", "/|", "/|\\"] },
    50: { sagitypes: ["/|)"] },
    51: { sagitypes: ["|)", "/|", "(|\\"] },
    52: { sagitypes: ["/|)"] },
    53: { sagitypes: ["/|", "//|"] },
    54: { sagitypes: [")|", "/|", "/|\\", "(|\\"] },
    55: { sagitypes: [")|(", "/|\\"] },
    56: { sagitypes: ["|)", "/|", "/|\\"] },
    57: { sagitypes: ["/|)"] },
    58: { sagitypes: ["/|", "|\\", "/|\\"] },
    59: { sagitypes: [")|", ")~|", "/|", "/|)"] },
    60: { sagitypes: ["(|", "/|~"] },
    61: { sagitypes: [")|", "/|", "/|\\", "(|\\"] },
    62: { sagitypes: ["/|)", "/|\\"] },
    63: { sagitypes: ["|)", "/|", "/|\\"] },
    64: { sagitypes: ["/|)"] },
    65: { sagitypes: ["/|", "|)", "/|\\"] },
    66: { sagitypes: [")|", ")~|", "/|", "/|)"] },
    67: { sagitypes: [")|(", "/|)"] },
    68: { sagitypes: ["|\\", "/|", "/|\\", "(|\\"] },
    69: { sagitypes: ["/|)", "/|\\"] },
    70: { sagitypes: ["/|", "|\\", "/|\\"] },
    71: { sagitypes: ["|\\", ")~|", "/|", "/|\\", "/|)"] },
    72: { sagitypes: ["/|", "|)", "/|\\"] },
    75: { sagitypes: ["|\\", "/|", "/|\\", "(|\\"] },
    76: { supersetEdo: 152 },
    79: { sagitypes: ["/|", "|)", "/|\\"] },
    80: { sagitypes: ["|)", "/|", "(|(", "/|\\"] },
    84: { sagitypes: ["/|", "|)", "/|)"] },
    87: { sagitypes: ["|~", "/|", "/|~", "/|\\"] },
    88: { supersetEdo: 176 },
    89: { sagitypes: ["/|", "|)", "/|)", "/|\\"] },
    94: { sagitypes: ["~|(", "/|", "(|(", "/|"] },
    99: { sagitypes: ["~|", "/|", "~|)", "//|", ")/|\\"] },
    111: { sagitypes: [")|(", "/|", "|\\", "//|", "/|\\"] },
    112: { supersetEdo: 224 },
    118: { sagitypes: [")|(", "/|", "|)", "//|", "/|\\"] },
    121: { sagitypes: [")|", "~|", "/|", "(|(", "~|\\", "/|\\"] }, // https://forum.sagittal.org/viewtopic.php?p=4751#p4751
    125: { sagitypes: ["|(", "/|", "|)", "//|", "/|)"] },
    128: { sagitypes: [")|", "~|", "/|", "(|(", "~|\\", "/|\\"] }, // https://forum.sagittal.org/viewtopic.php?p=4751#p4751
    130: { sagitypes: ["|(", "/|", "|)", "|\\", "/|)", "/|\\"] },
    135: { sagitypes: [")|(", "~~|", "|)", "~|)", "//|", "/|\\"] }, // https://forum.sagittal.org/viewtopic.php?p=308#p308
    137: { sagitypes: ["|(", "/|", "|)", "|\\", "/|)", "/|\\"] }, // https://forum.sagittal.org/viewtopic.php?p=1743#p1743
    140: { sagitypes: [")|(", "~~|", "/|", "~|)", "(|(", "/|)", ")/|\\"] }, // https://forum.sagittal.org/viewtopic.php?p=308#p308
    141: { sagitypes: ["/|", "//|", "(|(", "(|)", "(|\\"] }, // https://forum.sagittal.org/viewtopic.php?p=308#p308
    142: { sagitypes: ["|(", "/|", "|)", "|\\", "/|)", "/|\\"] },
    145: { sagitypes: [")|", ")~|", "|)", ")|)", "(|(", "~|\\", "/|\\"] }, // https://forum.sagittal.org/viewtopic.php?p=4749#p4749
    147: { sagitypes: [")|(", "~|(", "/|", "|\\", "~|)", "/|)", "/|\\"] }, // https://forum.sagittal.org/viewtopic.php?p=308#p308
    152: { sagitypes: [")|(", "~|(", "/|", "|\\", "(|(", "//|", "/|\\"] },
    171: { sagitypes: ["|(", "~|(", "/|", "|)", "|\\", "//|", "/|)", "/|\\"] },
    174: { sagitypes: [")|", ")~|", "~~|", "/|", "~|)", "(|(", "~|\\", "/|\\", ")/|\\"] }, // https://forum.sagittal.org/viewtopic.php?p=4749#p4749
    176: { sagitypes: ["|(", "~|(", "/|", "|)", "|\\", "(|(", "/|)", "/|\\"] },
    181: { sagitypes: [")|", ")~|", "~~|", "/|", "~|)", "(|(", "~|\\", "/|\\", ")/|\\"] }, // https://forum.sagittal.org/viewtopic.php?p=4749#p4749
    183: { sagitypes: ["|(", "~|(", "/|", "|)", "|\\", "(|(", "/|)", "/|\\"] },
    205: { sagitypes: [")|", ")|(", "~|(", "/|", "|\\", "/|~", "(|(", "//|", "/|\\", ")/|\\"] }, // https://forum.sagittal.org/viewtopic.php?p=308#p308
    217: { sagitypes: ["|(", "~|", "~|(", "/|", "|)", "|\\", "(|(", "//|", "/|)", "/|\\"] },
    224: { sagitypes: ["|(", ")|(", "~|(", "/|", "|)", "|\\", "(|(", "//|", "/|)", "/|\\"] },
    270: { sagitypes: ["|(", ")|(", "~|(", "~~|", "/|", "|)", "|\\", "~|)", "(|(", "//|", "/|)", "/|\\", ")/|\\"] }, // https://forum.sagittal.org/viewtopic.php?p=4408#p4408
    311: { sagitypes: ["|(", ")|(", ")~|", "~|(", "~~|", "/|", "|)", "|\\", "(|", "(|(", "~|\\", "//|", "/|)", "/|\\", ")/|\\"] }, // https://forum.sagittal.org/viewtopic.php?p=4408#p4408
    494: { sagitypes: [")|", "|(", "~|", ")|(", ")~|", "~|(", "|~", ")|~", "/|", ")/|", "|)", ")|)", "|\\", "(|", "~|)", "/|~", "~|\\", "//|", ")//|", "/|)", "(|~", "/|\\", "(/|"] }, // https://forum.sagittal.org/viewtopic.php?p=877#p877
    581: { sagitypes: ["'|", "|(", "'|(", ")|(", "')|(", ".|~", "|~", ".~~|", "~~|", "./|", "/|", ".|)", "|)", ".|\\", "|\\", ".(|", "(|", "'(|", "(|(", "'(|(", ".//|", "//|", "./|)", "/|)", "./|\\", "/|\\", ".)/|\\", ")/|\\"] }, // https://forum.sagittal.org/viewtopic.php?p=741#p741
} as Record<Edo, EdoNotationDefinition>

export {
    EDO_NOTATION_DEFINITIONS,
}
