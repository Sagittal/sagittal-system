import { Irrational, ScaledVector } from "@sagittal/general"

enum BoundClassId {
    MINA_0 = "mina0",
    MINA_1 = "mina1",
    MINA_2 = "mina2",
    MINA_3 = "mina3",
    MINA_4 = "mina4",
    MINA_5 = "mina5",
    MINA_6 = "mina6",
    MINA_7 = "mina7",
    MINA_8 = "mina8",
    MINA_9 = "mina9",
    MINA_10 = "mina10",
    MINA_11 = "mina11",
    MINA_12 = "mina12",
    MINA_13 = "mina13",
    MINA_14 = "mina14",
    MINA_15 = "mina15",
    MINA_16 = "mina16",
    MINA_17 = "mina17",
    MINA_18 = "mina18",
    MINA_19 = "mina19",
    MINA_20 = "mina20",
    MINA_21 = "mina21",
    MINA_22 = "mina22",
    MINA_23 = "mina23",
    MINA_24 = "mina24",
    MINA_25 = "mina25",
    MINA_26 = "mina26",
    MINA_27 = "mina27",
    MINA_28 = "mina28",
    MINA_29 = "mina29",
    MINA_30 = "mina30",
    MINA_31 = "mina31",
    MINA_32 = "mina32",
    MINA_33 = "mina33",
    MINA_34 = "mina34",
    MINA_35 = "mina35",
    MINA_36 = "mina36",
    MINA_37 = "mina37",
    MINA_38 = "mina38",
    MINA_39 = "mina39",
    MINA_40 = "mina40",
    MINA_41 = "mina41",
    MINA_42 = "mina42",
    MINA_43 = "mina43",
    MINA_44 = "mina44",
    MINA_45 = "mina45",
    MINA_46 = "mina46",
    MINA_47 = "mina47",
    MINA_48 = "mina48",
    MINA_49 = "mina49",
    MINA_49_SPLIT = "mina49Split",
    MINA_50 = "mina50",
    MINA_51 = "mina51",
    MINA_51_SPLIT = "mina51Split",
    MINA_52 = "mina52",
    MINA_53 = "mina53",
    MINA_54 = "mina54",
    MINA_55 = "mina55",
    MINA_56 = "mina56",
    MINA_57 = "mina57",
    MINA_58 = "mina58",
    MINA_59 = "mina59",
    MINA_60 = "mina60",
    MINA_61 = "mina61",
    MINA_62 = "mina62",
    MINA_63 = "mina63",
    MINA_64 = "mina64",
    MINA_65 = "mina65",
    MINA_66 = "mina66",
    MINA_67 = "mina67",
    MINA_68 = "mina68",
    MINA_69 = "mina69",
    MINA_70 = "mina70",
    MINA_71 = "mina71",
    MINA_72 = "mina72",
    MINA_72_SPLIT = "mina72Split",
    MINA_73 = "mina73",
    MINA_74 = "mina74",
    MINA_75 = "mina75",
    MINA_76 = "mina76",
    MINA_77 = "mina77",
    MINA_78 = "mina78",
    MINA_78_SPLIT = "mina78Split",
    MINA_79 = "mina79",
    MINA_80 = "mina80",
    MINA_81 = "mina81",
    MINA_82 = "mina82",
    MINA_83 = "mina83",
    MINA_84 = "mina84",
    MINA_85 = "mina85",
    MINA_86 = "mina86",
    MINA_87 = "mina87",
    MINA_88 = "mina88",
    MINA_89 = "mina89",
    MINA_90 = "mina90",
    MINA_91 = "mina91",
    MINA_92 = "mina92",
    MINA_93 = "mina93",
    MINA_94 = "mina94",
    MINA_95 = "mina95",
    MINA_96 = "mina96",
    MINA_97 = "mina97",
    MINA_98 = "mina98",
    MINA_99 = "mina99",
    MINA_100 = "mina100",
    MINA_101 = "mina101",
    MINA_102 = "mina102",
    MINA_103 = "mina103",
    MINA_104 = "mina104",
    MINA_105 = "mina105",
    MINA_105_SPLIT = "mina105Split",
    MINA_106 = "mina106",
    MINA_107 = "mina107",
    MINA_108 = "mina108",
    MINA_109 = "mina109",
    MINA_110 = "mina110",
    MINA_111 = "mina111",
    MINA_112 = "mina112",
    MINA_113 = "mina113",
    MINA_113_SPLIT = "mina113Split",
    MINA_114 = "mina114",
    MINA_115 = "mina115",
    MINA_116 = "mina116",
}

type BoundClass = {
    pitch: ScaledVector<Irrational>
}

enum BoundType {
    INA_MIDPOINT = "inaMidpoint",
    COMMA_MEAN = "commaMean",
    SIZE_CATEGORY_BOUND = "sizeCategoryBound",
}

export { BoundClass, BoundClassId, BoundType }
