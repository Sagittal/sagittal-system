import { APOTOME, HALF_SCALER, Pev, PYTHAGOREAN_LIMMA, Spev } from "@sagittal/general"
import { BoundClass, BoundClassId } from "./types"

const BOUND_CLASSES: Record<BoundClassId, BoundClass> = {
    /*0*/[BoundClassId.MINA_0]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [1.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*1*/[BoundClassId.MINA_1]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [5.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*2*/[BoundClassId.MINA_2]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [8.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*3*/[BoundClassId.MINA_3]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [12.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*4*/[BoundClassId.MINA_4]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [15.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*5*/[BoundClassId.MINA_5]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [19.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*6*/[BoundClassId.MINA_6]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [22.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*7*/[BoundClassId.MINA_7]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [26.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*8*/[BoundClassId.MINA_8]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [29.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*9*/[BoundClassId.MINA_9]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [32.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*10*/[BoundClassId.MINA_10]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [36.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*11*/[BoundClassId.MINA_11]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [39.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*12*/[BoundClassId.MINA_12]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [43.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*13*/[BoundClassId.MINA_13]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [46.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*14*/[BoundClassId.MINA_14]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [50.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*15*/[BoundClassId.MINA_15]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [53.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*16*/[BoundClassId.MINA_16]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [57.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*17*/[BoundClassId.MINA_17]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [60.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*18*/[BoundClassId.MINA_18]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [64.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*19*/[BoundClassId.MINA_19]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [67.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*20*/[BoundClassId.MINA_20]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [71.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*21*/[BoundClassId.MINA_21]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [74.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*22*/[BoundClassId.MINA_22]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [78.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*23*/[BoundClassId.MINA_23]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [81.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*24*/[BoundClassId.MINA_24]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [85.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*25*/[BoundClassId.MINA_25]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [88.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*26*/[BoundClassId.MINA_26]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [92.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*27*/[BoundClassId.MINA_27]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [95.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*28*/[BoundClassId.MINA_28]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [98.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*29*/[BoundClassId.MINA_29]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [102.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*30*/[BoundClassId.MINA_30]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [105.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*31*/[BoundClassId.MINA_31]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [109.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*32*/[BoundClassId.MINA_32]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [112.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*33*/[BoundClassId.MINA_33]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [116.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*34*/[BoundClassId.MINA_34]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [119.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*35*/[BoundClassId.MINA_35]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [123.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*36*/[BoundClassId.MINA_36]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [126.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*37*/[BoundClassId.MINA_37]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [130.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*38*/[BoundClassId.MINA_38]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [133.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*39*/[BoundClassId.MINA_39]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [137.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*40*/[BoundClassId.MINA_40]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [140.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*41*/[BoundClassId.MINA_41]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [144.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*42*/[BoundClassId.MINA_42]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [147.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*43*/[BoundClassId.MINA_43]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [151.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*44*/[BoundClassId.MINA_44]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [154.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*45*/[BoundClassId.MINA_45]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [157.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*46*/[BoundClassId.MINA_46]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [161.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*47*/[BoundClassId.MINA_47]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [164.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*48*/[BoundClassId.MINA_48]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [168.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*49*/[BoundClassId.MINA_49]: {
        pitch: {
            pev: [-16, 0, 3, 2, 1] as Pev<{ rational: true }>,
            scaler: HALF_SCALER,
        } as Spev<{ rational: false }>,
    },
    /*50*/[BoundClassId.MINA_49_SPLIT]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [171.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*51*/[BoundClassId.MINA_50]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [175.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*52*/[BoundClassId.MINA_51]: {
        pitch: {
            pev: [-4, -1, -1, 0, 0, 1, 0, 1] as Pev<{ rational: true }>,
            scaler: HALF_SCALER,
        } as Spev<{ rational: false }>,
    },
    /*53*/[BoundClassId.MINA_51_SPLIT]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [178.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*54*/[BoundClassId.MINA_52]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [182.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*55*/[BoundClassId.MINA_53]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [185.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*56*/[BoundClassId.MINA_54]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [189.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*57*/[BoundClassId.MINA_55]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [192.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*58*/[BoundClassId.MINA_56]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [196.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*59*/[BoundClassId.MINA_57]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [199.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*60*/[BoundClassId.MINA_58]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [203.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*61*/[BoundClassId.MINA_59]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [206.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*62*/[BoundClassId.MINA_60]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [210.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*63*/[BoundClassId.MINA_61]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [213.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*64*/[BoundClassId.MINA_62]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [217.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*65*/[BoundClassId.MINA_63]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [220.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*66*/[BoundClassId.MINA_64]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [223.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*67*/[BoundClassId.MINA_65]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [227.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*68*/[BoundClassId.MINA_66]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [230.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*69*/[BoundClassId.MINA_67]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [234.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*70*/[BoundClassId.MINA_68]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [237.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*71*/[BoundClassId.MINA_69]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [241.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*72*/[BoundClassId.MINA_70]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [244.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*73*/[BoundClassId.MINA_71]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [248.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*74*/[BoundClassId.MINA_72]: {
        pitch: {
            pev: [4, -5, 2, -2, 0, 0, 0, 0, 0, 0, 1] as Pev<{ rational: true }>,
            scaler: HALF_SCALER,
        } as Spev<{ rational: false }>,
    },
    /*75*/[BoundClassId.MINA_72_SPLIT]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [251.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*76*/[BoundClassId.MINA_73]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [255.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*77*/[BoundClassId.MINA_74]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [258.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*78*/[BoundClassId.MINA_75]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [262.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*79*/[BoundClassId.MINA_76]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [265.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*80*/[BoundClassId.MINA_77]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [269.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*81*/[BoundClassId.MINA_78]: {
        pitch: {
            pev: [-6, 3, -1, 1, 0, -1, 0, 0, 1] as Pev<{ rational: true }>,
            scaler: HALF_SCALER,
        } as Spev<{ rational: false }>,
    },
    /*82*/[BoundClassId.MINA_78_SPLIT]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [272.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*83*/[BoundClassId.MINA_79]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [276.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*84*/[BoundClassId.MINA_80]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [279.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*85*/[BoundClassId.MINA_81]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [282.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*86*/[BoundClassId.MINA_82]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [286.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*87*/[BoundClassId.MINA_83]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [289.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*88*/[BoundClassId.MINA_84]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [293.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*89*/[BoundClassId.MINA_85]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [296.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*90*/[BoundClassId.MINA_86]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [300.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*91*/[BoundClassId.MINA_87]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [303.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*92*/[BoundClassId.MINA_88]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [307.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*93*/[BoundClassId.MINA_89]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [310.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*94*/[BoundClassId.MINA_90]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [314.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*95*/[BoundClassId.MINA_91]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [317.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*96*/[BoundClassId.MINA_92]: {
        pitch: {
            pev: PYTHAGOREAN_LIMMA.pev,
            scaler: HALF_SCALER,
        } as Spev<{ rational: false }>,
    },
    /*97*/[BoundClassId.MINA_93]: {
        pitch: {
            pev: APOTOME.pev,
            scaler: [324.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*98*/[BoundClassId.MINA_94]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [328.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*99*/[BoundClassId.MINA_95]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [331.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*100*/[BoundClassId.MINA_96]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [335.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*101*/[BoundClassId.MINA_97]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [338.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*102*/[BoundClassId.MINA_98]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [342.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*103*/[BoundClassId.MINA_99]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [345.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*104*/[BoundClassId.MINA_100]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [348.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*105*/[BoundClassId.MINA_101]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [352.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*106*/[BoundClassId.MINA_102]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [355.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*107*/[BoundClassId.MINA_103]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [359.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*108*/[BoundClassId.MINA_104]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [362.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*109*/[BoundClassId.MINA_105]: {
        pitch: {
            pev: [-4, -4, 3, 0, 1] as Pev<{ rational: true }>,
            scaler: HALF_SCALER,
        } as Spev<{ rational: false }>,
    },
    /*110*/[BoundClassId.MINA_105_SPLIT]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [366.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*111*/[BoundClassId.MINA_106]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [369.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*112*/[BoundClassId.MINA_107]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [373.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*113*/[BoundClassId.MINA_108]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [376.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*114*/[BoundClassId.MINA_109]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [380.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*115*/[BoundClassId.MINA_110]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [383.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*116*/[BoundClassId.MINA_111]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [387.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*117*/[BoundClassId.MINA_112]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [390.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*118*/[BoundClassId.MINA_113]: {
        pitch: {
            pev: [-15, 9, 1, 0, 1, 0, 0, 0, 0, 0, -1] as Pev<{ rational: true }>,
            scaler: HALF_SCALER,
        } as Spev<{ rational: false }>,
    },
    /*119*/[BoundClassId.MINA_113_SPLIT]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [394.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*120*/[BoundClassId.MINA_114]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [397.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*121*/[BoundClassId.MINA_115]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [401.5, 809],
        } as Spev<{ rational: false }>,
    },
    /*122*/[BoundClassId.MINA_116]: {
        pitch: {
            pev: APOTOME.pev as Pev<{ rational: true }>,
            scaler: [404.5, 809],
        } as Spev<{ rational: false }>,
    },
}

const getBoundClass = (boundClassId: BoundClassId): BoundClass =>
    BOUND_CLASSES[boundClassId]

export {
    getBoundClass,
}
