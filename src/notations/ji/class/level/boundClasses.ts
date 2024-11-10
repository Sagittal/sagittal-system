import { CommaMean, Name } from "@sagittal/general"
import { SizeCategoryBound } from "../../../../ji"
import { InaMidpoint } from "../../types"
import { getBoundClass, BoundType, BoundClassId } from "../bound"
import { JiNotationBoundClass, JiNotationBoundClassEntry, JiNotationLevelId } from "./types"

const JI_NOTATION_BOUND_CLASSES: Record<BoundClassId, JiNotationBoundClass> = {
    [BoundClassId.MINA_0]: {
        ...getBoundClass(BoundClassId.MINA_0),
        name: "1.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_1]: {
        ...getBoundClass(BoundClassId.MINA_1),
        name: "5.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_2]: {
        ...getBoundClass(BoundClassId.MINA_2),
        name: "8.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [
            JiNotationLevelId.HIGH,
            JiNotationLevelId.ULTRA,
            JiNotationLevelId.EXTREME,
            JiNotationLevelId.INSANE,
        ],
    },
    [BoundClassId.MINA_3]: {
        ...getBoundClass(BoundClassId.MINA_3),
        name: "12.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.ULTRA, JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_4]: {
        ...getBoundClass(BoundClassId.MINA_4),
        name: "15.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_5]: {
        ...getBoundClass(BoundClassId.MINA_5),
        name: "19.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [
            JiNotationLevelId.MEDIUM,
            JiNotationLevelId.ULTRA,
            JiNotationLevelId.EXTREME,
            JiNotationLevelId.INSANE,
        ],
    },
    [BoundClassId.MINA_6]: {
        ...getBoundClass(BoundClassId.MINA_6),
        name: "22.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_7]: {
        ...getBoundClass(BoundClassId.MINA_7),
        name: "26.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_8]: {
        ...getBoundClass(BoundClassId.MINA_8),
        name: "29.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_9]: {
        ...getBoundClass(BoundClassId.MINA_9),
        name: "32.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [
            JiNotationLevelId.HIGH,
            JiNotationLevelId.ULTRA,
            JiNotationLevelId.EXTREME,
            JiNotationLevelId.INSANE,
        ],
    },
    [BoundClassId.MINA_10]: {
        ...getBoundClass(BoundClassId.MINA_10),
        name: "36.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_11]: {
        ...getBoundClass(BoundClassId.MINA_11),
        name: "39.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_12]: {
        ...getBoundClass(BoundClassId.MINA_12),
        name: "43.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_13]: {
        ...getBoundClass(BoundClassId.MINA_13),
        name: "46.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [
            JiNotationLevelId.HIGH,
            JiNotationLevelId.ULTRA,
            JiNotationLevelId.EXTREME,
            JiNotationLevelId.INSANE,
        ],
    },
    [BoundClassId.MINA_14]: {
        ...getBoundClass(BoundClassId.MINA_14),
        name: "50.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.ULTRA, JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_15]: {
        ...getBoundClass(BoundClassId.MINA_15),
        name: "53.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_16]: {
        ...getBoundClass(BoundClassId.MINA_16),
        name: "57.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [
            JiNotationLevelId.MEDIUM,
            JiNotationLevelId.ULTRA,
            JiNotationLevelId.EXTREME,
            JiNotationLevelId.INSANE,
        ],
    },
    [BoundClassId.MINA_17]: {
        ...getBoundClass(BoundClassId.MINA_17),
        name: "60.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_18]: {
        ...getBoundClass(BoundClassId.MINA_18),
        name: "64.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [
            JiNotationLevelId.HIGH,
            JiNotationLevelId.ULTRA,
            JiNotationLevelId.EXTREME,
            JiNotationLevelId.INSANE,
        ],
    },
    [BoundClassId.MINA_19]: {
        ...getBoundClass(BoundClassId.MINA_19),
        name: "67.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_20]: {
        ...getBoundClass(BoundClassId.MINA_20),
        name: "71.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_21]: {
        ...getBoundClass(BoundClassId.MINA_21),
        name: "74.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_22]: {
        ...getBoundClass(BoundClassId.MINA_22),
        name: "78.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [
            JiNotationLevelId.HIGH,
            JiNotationLevelId.ULTRA,
            JiNotationLevelId.EXTREME,
            JiNotationLevelId.INSANE,
        ],
    },
    [BoundClassId.MINA_23]: {
        ...getBoundClass(BoundClassId.MINA_23),
        name: "81.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_24]: {
        ...getBoundClass(BoundClassId.MINA_24),
        name: "85.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.ULTRA, JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_25]: {
        ...getBoundClass(BoundClassId.MINA_25),
        name: "88.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.ULTRA, JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_26]: {
        ...getBoundClass(BoundClassId.MINA_26),
        name: "92.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_27]: {
        ...getBoundClass(BoundClassId.MINA_27),
        name: "95.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [
            JiNotationLevelId.MEDIUM,
            JiNotationLevelId.HIGH,
            JiNotationLevelId.ULTRA,
            JiNotationLevelId.EXTREME,
            JiNotationLevelId.INSANE,
        ],
    },
    [BoundClassId.MINA_28]: {
        ...getBoundClass(BoundClassId.MINA_28),
        name: "98.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_29]: {
        ...getBoundClass(BoundClassId.MINA_29),
        name: "102.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_30]: {
        ...getBoundClass(BoundClassId.MINA_30),
        name: "105.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_31]: {
        ...getBoundClass(BoundClassId.MINA_31),
        name: "109.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [
            JiNotationLevelId.HIGH,
            JiNotationLevelId.ULTRA,
            JiNotationLevelId.EXTREME,
            JiNotationLevelId.INSANE,
        ],
    },
    [BoundClassId.MINA_32]: {
        ...getBoundClass(BoundClassId.MINA_32),
        name: "112.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_33]: {
        ...getBoundClass(BoundClassId.MINA_33),
        name: "116.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_34]: {
        ...getBoundClass(BoundClassId.MINA_34),
        name: "119.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_35]: {
        ...getBoundClass(BoundClassId.MINA_35),
        name: "123.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [
            JiNotationLevelId.HIGH,
            JiNotationLevelId.ULTRA,
            JiNotationLevelId.EXTREME,
            JiNotationLevelId.INSANE,
        ],
    },
    [BoundClassId.MINA_36]: {
        ...getBoundClass(BoundClassId.MINA_36),
        name: "126.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_37]: {
        ...getBoundClass(BoundClassId.MINA_37),
        name: "130.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_38]: {
        ...getBoundClass(BoundClassId.MINA_38),
        name: "133.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [
            JiNotationLevelId.MEDIUM,
            JiNotationLevelId.HIGH,
            JiNotationLevelId.ULTRA,
            JiNotationLevelId.EXTREME,
            JiNotationLevelId.INSANE,
        ],
    },
    [BoundClassId.MINA_39]: {
        ...getBoundClass(BoundClassId.MINA_39),
        name: "137.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_40]: {
        ...getBoundClass(BoundClassId.MINA_40),
        name: "140.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.ULTRA, JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_41]: {
        ...getBoundClass(BoundClassId.MINA_41),
        name: "144.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [
            JiNotationLevelId.HIGH,
            JiNotationLevelId.ULTRA,
            JiNotationLevelId.EXTREME,
            JiNotationLevelId.INSANE,
        ],
    },
    [BoundClassId.MINA_42]: {
        ...getBoundClass(BoundClassId.MINA_42),
        name: "147.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_43]: {
        ...getBoundClass(BoundClassId.MINA_43),
        name: "151.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_44]: {
        ...getBoundClass(BoundClassId.MINA_44),
        name: "154.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_45]: {
        ...getBoundClass(BoundClassId.MINA_45),
        name: "157.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_46]: {
        ...getBoundClass(BoundClassId.MINA_46),
        name: "161.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [
            JiNotationLevelId.HIGH,
            JiNotationLevelId.ULTRA,
            JiNotationLevelId.EXTREME,
            JiNotationLevelId.INSANE,
        ],
    },
    [BoundClassId.MINA_47]: {
        ...getBoundClass(BoundClassId.MINA_47),
        name: "164.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.ULTRA, JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_48]: {
        ...getBoundClass(BoundClassId.MINA_48),
        name: "168.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_49]: {
        ...getBoundClass(BoundClassId.MINA_49),
        name: "`'/| ,,)/|" as Name<CommaMean>,
        boundType: BoundType.COMMA_MEAN,
        jiNotationLevels: [JiNotationLevelId.ULTRA, JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_49_SPLIT]: {
        ...getBoundClass(BoundClassId.MINA_49_SPLIT),
        name: "171.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_50]: {
        ...getBoundClass(BoundClassId.MINA_50),
        name: "175.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.MEDIUM, JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_51]: {
        ...getBoundClass(BoundClassId.MINA_51),
        name: ")/| ,.|)" as Name<CommaMean>,
        boundType: BoundType.COMMA_MEAN,
        jiNotationLevels: [JiNotationLevelId.ULTRA, JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_51_SPLIT]: {
        ...getBoundClass(BoundClassId.MINA_51_SPLIT),
        name: "178.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_52]: {
        ...getBoundClass(BoundClassId.MINA_52),
        name: "182.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_53]: {
        ...getBoundClass(BoundClassId.MINA_53),
        name: "185.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [
            JiNotationLevelId.HIGH,
            JiNotationLevelId.ULTRA,
            JiNotationLevelId.EXTREME,
            JiNotationLevelId.INSANE,
        ],
    },
    [BoundClassId.MINA_54]: {
        ...getBoundClass(BoundClassId.MINA_54),
        name: "189.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_55]: {
        ...getBoundClass(BoundClassId.MINA_55),
        name: "192.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_56]: {
        ...getBoundClass(BoundClassId.MINA_56),
        name: "196.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_57]: {
        ...getBoundClass(BoundClassId.MINA_57),
        name: "199.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_58]: {
        ...getBoundClass(BoundClassId.MINA_58),
        name: "203.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [
            JiNotationLevelId.HIGH,
            JiNotationLevelId.ULTRA,
            JiNotationLevelId.EXTREME,
            JiNotationLevelId.INSANE,
        ],
    },
    [BoundClassId.MINA_59]: {
        ...getBoundClass(BoundClassId.MINA_59),
        name: "206.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_60]: {
        ...getBoundClass(BoundClassId.MINA_60),
        name: "210.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_61]: {
        ...getBoundClass(BoundClassId.MINA_61),
        name: "213.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [
            JiNotationLevelId.MEDIUM,
            JiNotationLevelId.ULTRA,
            JiNotationLevelId.EXTREME,
            JiNotationLevelId.INSANE,
        ],
    },
    [BoundClassId.MINA_62]: {
        ...getBoundClass(BoundClassId.MINA_62),
        name: "217.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_63]: {
        ...getBoundClass(BoundClassId.MINA_63),
        name: "220.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [
            JiNotationLevelId.HIGH,
            JiNotationLevelId.ULTRA,
            JiNotationLevelId.EXTREME,
            JiNotationLevelId.INSANE,
        ],
    },
    [BoundClassId.MINA_64]: {
        ...getBoundClass(BoundClassId.MINA_64),
        name: "223.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.ULTRA, JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_65]: {
        ...getBoundClass(BoundClassId.MINA_65),
        name: "227.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_66]: {
        ...getBoundClass(BoundClassId.MINA_66),
        name: "230.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [
            JiNotationLevelId.HIGH,
            JiNotationLevelId.ULTRA,
            JiNotationLevelId.EXTREME,
            JiNotationLevelId.INSANE,
        ],
    },
    [BoundClassId.MINA_67]: {
        ...getBoundClass(BoundClassId.MINA_67),
        name: "234.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_68]: {
        ...getBoundClass(BoundClassId.MINA_68),
        name: "237.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_69]: {
        ...getBoundClass(BoundClassId.MINA_69),
        name: "241.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_70]: {
        ...getBoundClass(BoundClassId.MINA_70),
        name: "244.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [
            JiNotationLevelId.HIGH,
            JiNotationLevelId.ULTRA,
            JiNotationLevelId.EXTREME,
            JiNotationLevelId.INSANE,
        ],
    },
    [BoundClassId.MINA_71]: {
        ...getBoundClass(BoundClassId.MINA_71),
        name: "248.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_72]: {
        ...getBoundClass(BoundClassId.MINA_72),
        name: "'(| ,~|)" as Name<CommaMean>,
        boundType: BoundType.COMMA_MEAN,
        jiNotationLevels: [
            JiNotationLevelId.MEDIUM,
            JiNotationLevelId.ULTRA,
            JiNotationLevelId.EXTREME,
            JiNotationLevelId.INSANE,
        ],
    },
    [BoundClassId.MINA_72_SPLIT]: {
        ...getBoundClass(BoundClassId.MINA_72_SPLIT),
        name: "251.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_73]: {
        ...getBoundClass(BoundClassId.MINA_73),
        name: "255.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_74]: {
        ...getBoundClass(BoundClassId.MINA_74),
        name: "258.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.ULTRA, JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_75]: {
        ...getBoundClass(BoundClassId.MINA_75),
        name: "262.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_76]: {
        ...getBoundClass(BoundClassId.MINA_76),
        name: "265.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [
            JiNotationLevelId.HIGH,
            JiNotationLevelId.ULTRA,
            JiNotationLevelId.EXTREME,
            JiNotationLevelId.INSANE,
        ],
    },
    [BoundClassId.MINA_77]: {
        ...getBoundClass(BoundClassId.MINA_77),
        name: "269.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.ULTRA, JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_78]: {
        ...getBoundClass(BoundClassId.MINA_78),
        name: "/|~ ,,(|(" as Name<CommaMean>,
        boundType: BoundType.COMMA_MEAN,
        jiNotationLevels: [
            JiNotationLevelId.HIGH,
            JiNotationLevelId.ULTRA,
            JiNotationLevelId.EXTREME,
            JiNotationLevelId.INSANE,
        ],
    },
    [BoundClassId.MINA_78_SPLIT]: {
        ...getBoundClass(BoundClassId.MINA_78_SPLIT),
        name: "272.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_79]: {
        ...getBoundClass(BoundClassId.MINA_79),
        name: "276.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_80]: {
        ...getBoundClass(BoundClassId.MINA_80),
        name: "279.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_81]: {
        ...getBoundClass(BoundClassId.MINA_81),
        name: "282.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [
            JiNotationLevelId.HIGH,
            JiNotationLevelId.ULTRA,
            JiNotationLevelId.EXTREME,
            JiNotationLevelId.INSANE,
        ],
    },
    [BoundClassId.MINA_82]: {
        ...getBoundClass(BoundClassId.MINA_82),
        name: "286.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [
            JiNotationLevelId.MEDIUM,
            JiNotationLevelId.ULTRA,
            JiNotationLevelId.EXTREME,
            JiNotationLevelId.INSANE,
        ],
    },
    [BoundClassId.MINA_83]: {
        ...getBoundClass(BoundClassId.MINA_83),
        name: "289.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_84]: {
        ...getBoundClass(BoundClassId.MINA_84),
        name: "293.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_85]: {
        ...getBoundClass(BoundClassId.MINA_85),
        name: "296.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [
            JiNotationLevelId.HIGH,
            JiNotationLevelId.ULTRA,
            JiNotationLevelId.EXTREME,
            JiNotationLevelId.INSANE,
        ],
    },
    [BoundClassId.MINA_86]: {
        ...getBoundClass(BoundClassId.MINA_86),
        name: "300.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_87]: {
        ...getBoundClass(BoundClassId.MINA_87),
        name: "303.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_88]: {
        ...getBoundClass(BoundClassId.MINA_88),
        name: "307.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_89]: {
        ...getBoundClass(BoundClassId.MINA_89),
        name: "310.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_90]: {
        ...getBoundClass(BoundClassId.MINA_90),
        name: "314.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.ULTRA, JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_91]: {
        ...getBoundClass(BoundClassId.MINA_91),
        name: "317.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_92]: {
        ...getBoundClass(BoundClassId.MINA_92),
        name: "S|M" as Name<SizeCategoryBound>,
        boundType: BoundType.SIZE_CATEGORY_BOUND,
        jiNotationLevels: [
            JiNotationLevelId.MEDIUM,
            JiNotationLevelId.HIGH,
            JiNotationLevelId.ULTRA,
            JiNotationLevelId.EXTREME,
            JiNotationLevelId.INSANE,
        ],
    },
    [BoundClassId.MINA_93]: {
        ...getBoundClass(BoundClassId.MINA_93),
        name: "324.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_94]: {
        ...getBoundClass(BoundClassId.MINA_94),
        name: "328.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_95]: {
        ...getBoundClass(BoundClassId.MINA_95),
        name: "331.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_96]: {
        ...getBoundClass(BoundClassId.MINA_96),
        name: "335.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_97]: {
        ...getBoundClass(BoundClassId.MINA_97),
        name: "338.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [
            JiNotationLevelId.HIGH,
            JiNotationLevelId.ULTRA,
            JiNotationLevelId.EXTREME,
            JiNotationLevelId.INSANE,
        ],
    },
    [BoundClassId.MINA_98]: {
        ...getBoundClass(BoundClassId.MINA_98),
        name: "342.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_99]: {
        ...getBoundClass(BoundClassId.MINA_99),
        name: "345.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_100]: {
        ...getBoundClass(BoundClassId.MINA_100),
        name: "348.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_101]: {
        ...getBoundClass(BoundClassId.MINA_101),
        name: "352.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [
            JiNotationLevelId.HIGH,
            JiNotationLevelId.ULTRA,
            JiNotationLevelId.EXTREME,
            JiNotationLevelId.INSANE,
        ],
    },
    [BoundClassId.MINA_102]: {
        ...getBoundClass(BoundClassId.MINA_102),
        name: "355.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.ULTRA, JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_103]: {
        ...getBoundClass(BoundClassId.MINA_103),
        name: "359.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_104]: {
        ...getBoundClass(BoundClassId.MINA_104),
        name: "362.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_105]: {
        ...getBoundClass(BoundClassId.MINA_105),
        name: "`'/|) ./|\\" as Name<CommaMean>,
        boundType: BoundType.COMMA_MEAN,
        jiNotationLevels: [
            JiNotationLevelId.MEDIUM,
            JiNotationLevelId.ULTRA,
            JiNotationLevelId.EXTREME,
            JiNotationLevelId.INSANE,
        ],
    },
    [BoundClassId.MINA_105_SPLIT]: {
        ...getBoundClass(BoundClassId.MINA_105_SPLIT),
        name: "366.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_106]: {
        ...getBoundClass(BoundClassId.MINA_106),
        name: "369.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [
            JiNotationLevelId.HIGH,
            JiNotationLevelId.ULTRA,
            JiNotationLevelId.EXTREME,
            JiNotationLevelId.INSANE,
        ],
    },
    [BoundClassId.MINA_107]: {
        ...getBoundClass(BoundClassId.MINA_107),
        name: "373.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_108]: {
        ...getBoundClass(BoundClassId.MINA_108),
        name: "376.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_109]: {
        ...getBoundClass(BoundClassId.MINA_109),
        name: "380.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_110]: {
        ...getBoundClass(BoundClassId.MINA_110),
        name: "383.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [
            JiNotationLevelId.HIGH,
            JiNotationLevelId.ULTRA,
            JiNotationLevelId.EXTREME,
            JiNotationLevelId.INSANE,
        ],
    },
    [BoundClassId.MINA_111]: {
        ...getBoundClass(BoundClassId.MINA_111),
        name: "387.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_112]: {
        ...getBoundClass(BoundClassId.MINA_112),
        name: "390.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_113]: {
        ...getBoundClass(BoundClassId.MINA_113),
        name: "`(/| '/|\\" as Name<CommaMean>,
        boundType: BoundType.COMMA_MEAN,
        jiNotationLevels: [JiNotationLevelId.ULTRA, JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_113_SPLIT]: {
        ...getBoundClass(BoundClassId.MINA_113_SPLIT),
        name: "394.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_114]: {
        ...getBoundClass(BoundClassId.MINA_114),
        name: "397.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [
            JiNotationLevelId.HIGH,
            JiNotationLevelId.ULTRA,
            JiNotationLevelId.EXTREME,
            JiNotationLevelId.INSANE,
        ],
    },
    [BoundClassId.MINA_115]: {
        ...getBoundClass(BoundClassId.MINA_115),
        name: "401.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
    },
    [BoundClassId.MINA_116]: {
        ...getBoundClass(BoundClassId.MINA_116),
        name: "404.5°809" as Name<InaMidpoint>,
        boundType: BoundType.INA_MIDPOINT,
        jiNotationLevels: [
            JiNotationLevelId.MEDIUM,
            JiNotationLevelId.HIGH,
            JiNotationLevelId.ULTRA,
            JiNotationLevelId.EXTREME,
            JiNotationLevelId.INSANE,
        ],
    },
}

const getJiNotationBoundClass = (boundClassId: BoundClassId): JiNotationBoundClass =>
    JI_NOTATION_BOUND_CLASSES[boundClassId]

const JI_NOTATION_BOUND_CLASS_ENTRIES = Object.entries(
    JI_NOTATION_BOUND_CLASSES,
) as JiNotationBoundClassEntry[]

export { JI_NOTATION_BOUND_CLASSES, JI_NOTATION_BOUND_CLASS_ENTRIES, getJiNotationBoundClass }
