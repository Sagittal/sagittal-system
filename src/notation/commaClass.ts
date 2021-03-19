import {
    Comma,
    PYTHAGOREAN_COMMA,
    SCHISMA,
    SCHISMINA,
    SEPTIMAL_COMMA,
    SEPTIMAL_KLEISMA,
    SYNTONIC_COMMA,
    UNISON,
} from "@sagittal/general"
import {CommaClass, CommaClassId, SymbolClassId} from "./types"

const COMMA_CLASSES: Record<CommaClassId, CommaClass> = {
    /*0*/[CommaClassId._1_u]: {                                                                     //  (|//|)
        representativeSymbolClassId: SymbolClassId.NULL,
        pitch: UNISON,
    },
    /*1*/[CommaClassId._1_V_5_7_13_n]: {                                                            //     `|
        representativeSymbolClassId: SymbolClassId.WING,
        pitch: SCHISMINA,
    },
    /*2*/[CommaClassId._65_V_77_n]: {                                                               //    ``|
        representativeSymbolClassId: SymbolClassId.BIRD,
        pitch: {pev: [5, -3, 1, -1, -1, 1]} as Comma,
    },
    /*3*/[CommaClassId._19_V_5_n]: {                                                                //    .)|
        representativeSymbolClassId: SymbolClassId.ANTITICK_AND_LEFT_SCROLL,
        pitch: {pev: [6, -5, -1, 0, 0, 0, 0, 1]} as Comma,
    },
    /*4*/[CommaClassId._5_s]: {                                                                     //     '|
        representativeSymbolClassId: SymbolClassId.TICK,
        pitch: SCHISMA,
    },
    /*5*/[CommaClassId._1_V_7_13_s]: {                                                              //    `'|
        representativeSymbolClassId: SymbolClassId.WING_AND_TICK,
        pitch: {pev: [-3, 6, 0, -1, 0, -1]} as Comma,
    },
    /*6*/[CommaClassId._19_V_5_P_4_7_s]: {                                                          //    ,)|
        representativeSymbolClassId: SymbolClassId.ANTIWING_AND_LEFT_SCROLL,
        pitch: {pev: [-8, 10, -4, -1, 0, 0, 0, 1]} as Comma,
    },
    /*7*/[CommaClassId._19_s]: {                                                                    //     )|
        representativeSymbolClassId: SymbolClassId.LEFT_SCROLL,
        pitch: {pev: [-9, 3, 0, 0, 0, 0, 0, 1]} as Comma,
    },
    /*8*/[CommaClassId._49_V_55_s]: {                                                               //    `)|
        representativeSymbolClassId: SymbolClassId.WING_AND_LEFT_SCROLL,
        pitch: {pev: [-3, 2, -1, 2, -1]} as Comma,
    },
    /*9*/[CommaClassId._5_7_11_k]: {                                                                //   ``)|
        representativeSymbolClassId: SymbolClassId.BIRD_AND_LEFT_SCROLL,
        pitch: {pev: [-7, -1, 1, 1, 1]} as Comma,
    },
    /*10*/[CommaClassId._11_V_13_k]: {                                                              //    ,,|(
        representativeSymbolClassId: SymbolClassId.ANTIBIRD_AND_RIGHT_SCROLL,
        pitch: {pev: [5, -3, 0, 0, 1, -1]} as Comma,
    },
    /*11*/[CommaClassId._31_V_11_k]: {                                                              //     ,|(
        representativeSymbolClassId: SymbolClassId.ANTIWING_AND_RIGHT_SCROLL,
        pitch: {pev: [-11, 6, 0, 0, -1, 0, 0, 0, 0, 0, 1]} as Comma,
    },
    /*12*/[CommaClassId._5_V_7_k]: {                                                                //      |(
        representativeSymbolClassId: SymbolClassId.RIGHT_SCROLL,
        pitch: {pev: [10, -6, 1, -1]} as Comma,
    },
    /*13*/[CommaClassId._7_P_3_V_5_k]: {                                                            //     `|(
        representativeSymbolClassId: SymbolClassId.WING_AND_RIGHT_SCROLL,
        pitch: {pev: [5, -7, -1, 3]} as Comma,
    },
    /*14*/[CommaClassId._1_V_5_17_k]: {                                                             //    .~|
        representativeSymbolClassId: SymbolClassId.ANTITICK_AND_LEFT_BOATHOOK,
        pitch: {pev: [8, -1, -1, 0, 0, 0, -1]} as Comma,
    },
    /*15*/[CommaClassId._1_V_5_P_2_7_P_2_k]: {                                                      //    ,'|(
        representativeSymbolClassId: SymbolClassId.ANTIWING_TICK_AND_RIGHT_SCROLL,
        pitch: {pev: [-4, 9, -2, -2]} as Comma,
    },
    /*16*/[CommaClassId._25_V_7_k]: {                                                               //     '|(
        representativeSymbolClassId: SymbolClassId.TICK_AND_RIGHT_SCROLL,
        pitch: SEPTIMAL_KLEISMA,
    },
    /*17*/[CommaClassId._7_P_3_k]: {                                                                //    ,~|
        representativeSymbolClassId: SymbolClassId.ANTIWING_AND_LEFT_BOATHOOK,
        pitch: {pev: [-10, 1, 0, 3]} as Comma,
    },
    /*18*/[CommaClassId._1_V_17_k]: {                                                               //     ~|
        representativeSymbolClassId: SymbolClassId.LEFT_BOATHOOK,
        pitch: {pev: [-7, 7, 0, 0, 0, 0, -1]} as Comma,
    },
    /*19*/[CommaClassId._11_P_4_k]: {                                                               //    ,)|(
        representativeSymbolClassId: SymbolClassId.ANTIWING_AND_DOUBLE_SCROLL,
        pitch: {pev: [-17, 2, 0, 0, 4]} as Comma,
    },
    /*20*/[CommaClassId._7_V_11_k]: {                                                               //     )|(
        representativeSymbolClassId: SymbolClassId.DOUBLE_SCROLL,
        pitch: {pev: [7, -4, 0, 1, -1]} as Comma,
    },
    /*21*/[CommaClassId._5_P_2_11_k]: {                                                             //    `)|(
        representativeSymbolClassId: SymbolClassId.WING_AND_DOUBLE_SCROLL,
        pitch: {pev: [3, -7, 2, 0, 1]} as Comma,
    },
    /*22*/[CommaClassId._49_V_13_k]: {                                                              //   ``)|(
        representativeSymbolClassId: SymbolClassId.BIRD_AND_DOUBLE_SCROLL,
        pitch: {pev: [-13, 7, 0, 2, 0, -1]} as Comma,
    },
    /*23*/[CommaClassId._1_V_5_P_2_7_P_3_k]: {                                                      //   ,')|(
        representativeSymbolClassId: SymbolClassId.ANTIWING_TICK_AND_DOUBLE_SCROLL,
        pitch: {pev: [21, -5, -2, -3]} as Comma,
    },
    /*24*/[CommaClassId._35_V_11_k]: {                                                              //    ')|(
        representativeSymbolClassId: SymbolClassId.TICK_AND_DOUBLE_SCROLL,
        pitch: {pev: [-8, 4, 1, 1, -1]} as Comma,
    },
    /*25*/[CommaClassId._1_V_143_C]: {                                                              //    )~|
        representativeSymbolClassId: SymbolClassId.LEFT_SCROLL_AND_BOATHOOK,
        pitch: {pev: [4, 2, 0, 0, -1, -1]} as Comma,
    },
    /*26*/[CommaClassId._17_V_5_C]: {                                                               //    .~|(
        representativeSymbolClassId: SymbolClassId.ANTITICK_BOATHOOK_AND_SCROLL,
        pitch: {pev: [3, -3, -1, 0, 0, 0, 1]} as Comma,
    },
    /*27*/[CommaClassId._11_V_23_C]: {                                                              //   `.~|(
        representativeSymbolClassId: SymbolClassId.WING_ANTITICK_BOATHOOK_AND_SCROLL,
        pitch: {pev: [9, -5, 0, 0, 1, 0, 0, 0, -1]} as Comma,
    },
    /*28*/[CommaClassId._7_V_125_C]: {                                                              //   ,,~|(
        representativeSymbolClassId: SymbolClassId.ANTIBIRD_BOATHOOK_AND_SCROLL,
        pitch: {pev: [1, 2, -3, 1]} as Comma,
    },
    /*29*/[CommaClassId._5_7_P_2_C]: {                                                              //    ,~|(
        representativeSymbolClassId: SymbolClassId.ANTIWING_BOATHOOK_AND_SCROLL,
        pitch: {pev: [0, -5, 1, 2]} as Comma,
    },
    /*30*/[CommaClassId._17_C]: {                                                                   //     ~|(
        representativeSymbolClassId: SymbolClassId.BOATHOOK_AND_SCROLL,
        pitch: {pev: [-12, 5, 0, 0, 0, 0, 1]} as Comma,
    },
    /*31*/[CommaClassId._143_V_7_C]: {                                                              //    `~|(
        representativeSymbolClassId: SymbolClassId.WING_BOATHOOK_AND_SCROLL,
        pitch: {pev: [2, -4, 0, -1, 1, 1]} as Comma,
    },
    /*32*/[CommaClassId._7_V_25_C]: {                                                               //    ,,|~
        representativeSymbolClassId: SymbolClassId.ANTIBIRD_AND_RIGHT_BOATHOOK,
        pitch: {pev: [-14, 10, -2, 1]} as Comma,
    },
    /*33*/[CommaClassId._5_P_2_7_P_2_C]: {                                                          //     ,|~
        representativeSymbolClassId: SymbolClassId.ANTIWING_AND_RIGHT_BOATHOOK,
        pitch: {pev: [-15, 3, 2, 2]} as Comma,
    },
    /*34*/[CommaClassId._23_C]: {                                                                   //      |~
        representativeSymbolClassId: SymbolClassId.RIGHT_BOATHOOK,
        pitch: {pev: [5, -6, 0, 0, 0, 0, 0, 0, 1]} as Comma,
    },
    /*35*/[CommaClassId._1_V_13_P_2_C]: {                                                           //     `|~
        representativeSymbolClassId: SymbolClassId.WING_AND_RIGHT_BOATHOOK,
        pitch: {pev: [9, -1, 0, 0, 0, -2]} as Comma,
    },
    /*36*/[CommaClassId._11_V_49_C]: {                                                              //    ~~|
        representativeSymbolClassId: SymbolClassId.DOUBLE_LEFT_BOATHOOK,
        pitch: {pev: [-1, 2, 0, -2, 1]} as Comma,
    },
    /*37*/[CommaClassId._11_V_31_C]: {                                                              //   `~~|
        representativeSymbolClassId: SymbolClassId.WING_AND_DOUBLE_LEFT_BOATHOOK,
        pitch: {pev: [-8, 6, 0, 0, 1, 0, 0, 0, 0, 0, -1]} as Comma,
    },
    /*38*/[CommaClassId._17_V_7_C]: {                                                               //  ``~~|
        representativeSymbolClassId: SymbolClassId.BIRD_AND_DOUBLE_LEFT_BOATHOOK,
        pitch: {pev: [13, -9, 0, -1, 0, 0, 1]} as Comma,
    },
    /*39*/[CommaClassId._7_13_V_5_C]: {                                                             //   ,./|
        representativeSymbolClassId: SymbolClassId.ANTIWING_ANTITICK_AND_LEFT_BARB,
        pitch: {pev: [-1, -2, -1, 1, 0, 1]} as Comma,
    },
    /*40*/[CommaClassId._1_V_25_C]: {                                                               //    ./|
        representativeSymbolClassId: SymbolClassId.ANTITICK_AND_LEFT_BARB,
        pitch: {pev: [11, -4, -2]} as Comma,
    },
    /*41*/[CommaClassId._1_V_19_C]: {                                                               //     )|~
        representativeSymbolClassId: SymbolClassId.SCROLL_AND_BOATHOOK,
        pitch: {pev: [-10, 9, 0, 0, 0, 0, 0, -1]} as Comma,
    },
    /*42*/[CommaClassId._1_V_11_23_C]: {                                                            //   ,,/|
        representativeSymbolClassId: SymbolClassId.ANTIBIRD_AND_LEFT_BARB,
        pitch: {pev: [8, 0, 0, 0, -1, 0, 0, 0, -1]} as Comma,
    },
    /*43*/[CommaClassId._7_13_C]: {                                                                 //    ,/|
        representativeSymbolClassId: SymbolClassId.ANTIWING_AND_LEFT_BARB,
        pitch: {pev: [-16, 6, 0, 1, 0, 1]} as Comma,
    },
    /*44*/[CommaClassId._1_V_5_C]: {                                                                //     /|
        representativeSymbolClassId: SymbolClassId.LEFT_BARB,
        pitch: SYNTONIC_COMMA,
    },
    /*45*/[CommaClassId._5_P_3_7_C]: {                                                              //    `/|
        representativeSymbolClassId: SymbolClassId.WING_AND_LEFT_BARB,
        pitch: {pev: [-5, -3, 3, 1]} as Comma,
    },
    /*46*/[CommaClassId._25_V_13_C]: {                                                              //   ``/|
        representativeSymbolClassId: SymbolClassId.BIRD_AND_LEFT_BARB,
        pitch: {pev: [7, -5, 2, 0, 0, -1]} as Comma,
    },
    /*47*/[CommaClassId._19_V_25_C]: {                                                              //   .)/|
        representativeSymbolClassId: SymbolClassId.ANTITICK_AND_LEFT_SCROLL_AND_BARB,
        pitch: {pev: [2, -1, -2, 0, 0, 0, 0, 1]} as Comma,
    },
    /*48*/[CommaClassId._3_C]: {                                                                    //    '/|
        representativeSymbolClassId: SymbolClassId.TICK_AND_LEFT_BARB,
        pitch: PYTHAGOREAN_COMMA,
    },
    /*49*/[CommaClassId._5_P_4_7_C]: {                                                              //   `'/|
        representativeSymbolClassId: SymbolClassId.WING_TICK_AND_LEFT_BARB,
        pitch: {pev: [-20, 5, 4, 1]} as Comma,
    },
    /*50*/[CommaClassId._77_V_5_C]: {                                                               //  ,,)/|
        representativeSymbolClassId: SymbolClassId.ANTIBIRD_AND_LEFT_SCROLL_AND_BARB,
        pitch: {pev: [4, -5, -1, 1, 1]} as Comma,
    },
    /*51*/[CommaClassId._125_V_13_C]: {                                                             //   ,)/|
        representativeSymbolClassId: SymbolClassId.ANTIWING_AND_LEFT_SCROLL_AND_BARB,
        pitch: {pev: [-8, 3, 3, 0, 0, -1]} as Comma,
    },
    /*52*/[CommaClassId._19_V_5_C]: {                                                               //    )/|
        representativeSymbolClassId: SymbolClassId.LEFT_SCROLL_AND_BARB,
        pitch: {pev: [-13, 7, -1, 0, 0, 0, 0, 1]} as Comma,                       // 1.01447753906
    },
    /*53*/[CommaClassId._13_C]: {                                                                   //    ,.|)
        representativeSymbolClassId: SymbolClassId.ANTIWING_ANTITICK_AND_RIGHT_ARC,
        pitch: {pev: [9, -8, 0, 0, 0, 1]} as Comma,                               // 1.01447950008
    },
    /*54*/[CommaClassId._1_V_35_C]: {                                                               //     .|)
        representativeSymbolClassId: SymbolClassId.ANTITICK_AND_RIGHT_ARC,
        pitch: {pev: [21, -10, -1, -1]} as Comma,
    },
    /*55*/[CommaClassId._77_C]: {                                                                   //    `.|)
        representativeSymbolClassId: SymbolClassId.WING_ANTITICK_AND_RIGHT_ARC,
        pitch: {pev: [-11, 3, 0, 1, 1]} as Comma,
    },
    /*56*/[CommaClassId._11_V_65_C]: {                                                              //    ,,|)
        representativeSymbolClassId: SymbolClassId.ANTIBIRD_AND_RIGHT_ARC,
        pitch: {pev: [1, 1, -1, 0, 1, -1]} as Comma,
    },
    /*57*/[CommaClassId._65_C]: {                                                                   //     ,|)
        representativeSymbolClassId: SymbolClassId.ANTIWING_AND_RIGHT_ARC,
        pitch: {pev: [-6, 0, 1, 0, 0, 1]} as Comma,
    },
    /*58*/[CommaClassId._1_V_7_C]: {                                                                //      |)
        representativeSymbolClassId: SymbolClassId.RIGHT_ARC,
        pitch: SEPTIMAL_COMMA,
    },
    /*59*/[CommaClassId._5_P_4_C]: {                                                                //     `|)
        representativeSymbolClassId: SymbolClassId.WING_AND_RIGHT_ARC,
        pitch: {pev: [5, -9, 4]} as Comma,
    },
    /*60*/[CommaClassId._11_V_13_C]: {                                                              //    ``|)
        representativeSymbolClassId: SymbolClassId.BIRD_AND_RIGHT_ARC,
        pitch: {pev: [-14, 9, 0, 0, 1, -1]} as Comma,
    },
    /*61*/[CommaClassId._5_P_2_13_C]: {                                                             //    ,'|)
        representativeSymbolClassId: SymbolClassId.ANTIWING_TICK_AND_RIGHT_ARC,
        pitch: {pev: [-21, 8, 2, 0, 0, 1]} as Comma,
    },
    /*62*/[CommaClassId._5_V_7_C]: {                                                                //     '|)
        representativeSymbolClassId: SymbolClassId.TICK_AND_RIGHT_ARC,
        pitch: {pev: [-9, 6, 1, -1]} as Comma,
    },
    /*63*/[CommaClassId._5_P_5_C]: {                                                                //    `'|)
        representativeSymbolClassId: SymbolClassId.WING_TICK_AND_RIGHT_ARC,
        pitch: {pev: [-10, -1, 5]} as Comma,
    },
    /*64*/[CommaClassId._5_17_V_11_C]: {                                                            //    ,)|)
        representativeSymbolClassId: SymbolClassId.ANTIWING_SCROLL_AND_ARC,
        pitch: {pev: [5, -5, 1, 0, -1, 0, 1]} as Comma,
    },
    /*65*/[CommaClassId._19_V_7_C]: {                                                               //     )|)
        representativeSymbolClassId: SymbolClassId.SCROLL_AND_ARC,
        pitch: {pev: [-3, 1, 0, -1, 0, 0, 0, 1]} as Comma,
    },
    /*66*/[CommaClassId._7_V_55_C]: {                                                               //    .(|
        representativeSymbolClassId: SymbolClassId.ANTITICK_AND_LEFT_ARC,
        pitch: {pev: [3, 0, -1, 1, -1]} as Comma,
    },
    /*67*/[CommaClassId._55_C]: {                                                                   //      |\
        representativeSymbolClassId: SymbolClassId.RIGHT_BARB,
        pitch: {pev: [-1, -3, 1, 0, 1]} as Comma,
    },
    /*68*/[CommaClassId._11_V_7_13_C]: {                                                            //     `|\
        representativeSymbolClassId: SymbolClassId.WING_AND_RIGHT_BARB,
        pitch: {pev: [11, -5, 0, -1, 1, -1]} as Comma,
    },
    /*69*/[CommaClassId._125_V_23_C]: {                                                             //    ,(|
        representativeSymbolClassId: SymbolClassId.ANTIWING_AND_LEFT_ARC,
        pitch: {pev: [-4, 1, 3, 0, 0, 0, 0, 0, -1]} as Comma,
    },
    /*70*/[CommaClassId._7_V_11_C]: {                                                               //     (|
        representativeSymbolClassId: SymbolClassId.LEFT_ARC,
        pitch: {pev: [-12, 8, 0, 1, -1]} as Comma,
    },
    /*71*/[CommaClassId._13_V_17_S]: {                                                              //    `(|
        representativeSymbolClassId: SymbolClassId.WING_AND_LEFT_ARC,
        pitch: {pev: [2, -1, 0, 0, 0, 1, -1]} as Comma,
    },
    /*72*/[CommaClassId._17_V_25_S]: {                                                              //   ``(|
        representativeSymbolClassId: SymbolClassId.BIRD_AND_LEFT_ARC,
        pitch: {pev: [-1, 1, -2, 0, 0, 0, 1]} as Comma,
    },
    /*73*/[CommaClassId._7_V_13_19_S]: {                                                            //   ,'(|
        representativeSymbolClassId: SymbolClassId.ANTIWING_TICK_AND_LEFT_ARC,
        pitch: {pev: [2, 2, 0, 1, 0, -1, 0, -1]} as Comma,
    },
    /*74*/[CommaClassId._25_V_49_S]: {                                                              //    '(|
        representativeSymbolClassId: SymbolClassId.TICK_AND_LEFT_ARC,
        pitch: {pev: [1, 0, 2, -2]} as Comma,
    },
    /*75*/[CommaClassId._31_S]: {                                                                   //    ,~|)
        representativeSymbolClassId: SymbolClassId.ANTIWING_BOATHOOK_AND_ARC,
        pitch: {pev: [3, -5, 0, 0, 0, 0, 0, 0, 0, 0, 1]} as Comma,
    },
    /*76*/[CommaClassId._49_S]: {                                                                   //     ~|)
        representativeSymbolClassId: SymbolClassId.BOATHOOK_AND_ARC,
        pitch: {pev: [-4, -1, 0, 2]} as Comma,
    },
    /*77*/[CommaClassId._17_V_5_S]: {                                                               //    `~|)
        representativeSymbolClassId: SymbolClassId.WING_BOATHOOK_AND_ARC,
        pitch: {pev: [-16, 9, -1, 0, 0, 0, 1]} as Comma,
    },
    /*78*/[CommaClassId._11_V_23_S]: {                                                              //   ,.(|(
        representativeSymbolClassId: SymbolClassId.ANTIWING_ANTITICK_ARC_AND_SCROLL,
        pitch: {pev: [-10, 7, 0, 0, 1, 0, 0, 0, -1]} as Comma,
    },
    /*79*/[CommaClassId._1_V_11_S]: {                                                               //    .(|(
        representativeSymbolClassId: SymbolClassId.ANTITICK_ARC_AND_SCROLL,
        pitch: {pev: [13, -6, 0, 0, -1]} as Comma,
    },
    /*80*/[CommaClassId._5_7_P_2_S]: {                                                              //    '~|)
        representativeSymbolClassId: SymbolClassId.TICK_BOATHOOK_AND_ARC,
        pitch: {pev: [-19, 7, 1, 2]} as Comma,
    },
    /*81*/[CommaClassId._23_V_5_S]: {                                                               //     /|~
        representativeSymbolClassId: SymbolClassId.BARB_AND_BOATHOOK,
        pitch: {pev: [1, -2, -1, 0, 0, 0, 0, 0, 1]} as Comma,
    },
    /*82*/[CommaClassId._7_V_13_S]: {                                                               //   ,,(|(
        representativeSymbolClassId: SymbolClassId.ANTIBIRD_ARC_AND_SCROLL,
        pitch: {pev: [-7, 5, 0, 1, 0, -1]} as Comma,
    },
    /*83*/[CommaClassId._11_V_17_S]: {                                                              //    ,(|(
        representativeSymbolClassId: SymbolClassId.ANTIWING_ARC_AND_SCROLL,
        pitch: {pev: [7, -4, 0, 0, 1, 0, -1]} as Comma,
    },
    /*84*/[CommaClassId._5_V_11_S]: {                                                               //     (|(
        representativeSymbolClassId: SymbolClassId.ARC_AND_SCROLL,
        pitch: {pev: [-2, 2, 1, 0, -1]} as Comma,
    },
    /*85*/[CommaClassId._1_V_7_11_13_S]: {                                                          //    `(|(
        representativeSymbolClassId: SymbolClassId.WING_ARC_AND_SCROLL,
        pitch: {pev: [10, 0, 0, -1, -1, -1]} as Comma,
    },
    /*86*/[CommaClassId._23_S]: {                                                                   //     ~|\
        representativeSymbolClassId: SymbolClassId.BOATHOOK_AND_BARB,
        pitch: {pev: [-14, 6, 0, 0, 0, 0, 0, 0, 1]} as Comma,
    },
    /*87*/[CommaClassId._7_13_V_25_S]: {                                                            //  ,.//|
        representativeSymbolClassId: SymbolClassId.ANTIWING_ANTITICK_AND_DOUBLE_LEFT_BARB,
        pitch: {pev: [-5, 2, -2, 1, 0, 1]} as Comma,
    },
    /*88*/[CommaClassId._1_V_125_S]: {                                                              //   .//|
        representativeSymbolClassId: SymbolClassId.ANTITICK_AND_DOUBLE_LEFT_BARB,
        pitch: {pev: [7, 0, -3]} as Comma,
    },
    /*89*/[CommaClassId._35_S]: {                                                                   //  `.//|
        representativeSymbolClassId: SymbolClassId.WING_ANTITICK_AND_DOUBLE_LEFT_BARB,
        pitch: {pev: [6, -7, 1, 1]} as Comma,
    },
    /*90*/[CommaClassId._17_V_7_S]: {                                                               //  ,,//|
        representativeSymbolClassId: SymbolClassId.ANTIBIRD_AND_DOUBLE_LEFT_BARB,
        pitch: {pev: [-6, 3, 0, -1, 0, 0, 1]} as Comma,
    },
    /*91*/[CommaClassId._7_13_V_5_S]: {                                                             //   ,//|
        representativeSymbolClassId: SymbolClassId.ANTIWING_AND_DOUBLE_LEFT_BARB,
        pitch: {pev: [-20, 10, -1, 1, 0, 1]} as Comma,
    },
    /*92*/[CommaClassId._1_V_25_S]: {                                                               //    //|
        representativeSymbolClassId: SymbolClassId.DOUBLE_LEFT_BARB,
        pitch: {pev: [-8, 8, -2]} as Comma,
    },
    /*93*/[CommaClassId._5_P_2_7_S]: {                                                              //   `//|
        representativeSymbolClassId: SymbolClassId.WING_AND_DOUBLE_LEFT_BARB,
        pitch: {pev: [-9, 1, 2, 1]} as Comma,
    },
    /*94*/[CommaClassId._5_V_13_S]: {                                                               //  ``//|
        representativeSymbolClassId: SymbolClassId.BIRD_AND_DOUBLE_LEFT_BARB,
        pitch: {pev: [3, -1, 1, 0, 0, -1]} as Comma,
    },
    /*95*/[CommaClassId._49_V_17_S]: {                                                              //  ,'//|
        representativeSymbolClassId: SymbolClassId.ANTIWING_TICK_AND_DOUBLE_LEFT_BARB,
        pitch: {pev: [-11, 6, 0, 2, 0, 0, -1]} as Comma,
    },
    /*96*/[CommaClassId._13_V_19_S]: {                                                              //   '//|
        representativeSymbolClassId: SymbolClassId.TICK_AND_DOUBLE_LEFT_BARB,
        pitch: {pev: [-1, 1, 0, 0, 0, 1, 0, -1]} as Comma,
    },
    /*97*/[CommaClassId._77_V_25_M]: {                                                              // ,,)//|
        representativeSymbolClassId: SymbolClassId.ANTIBIRD_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB,
        pitch: {pev: [0, -1, -2, 1, 1]} as Comma,
    },
    /*98*/[CommaClassId._25_V_13_M]: {                                                              //  ,)//|
        representativeSymbolClassId: SymbolClassId.ANTIWING_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB,
        pitch: {pev: [-12, 7, 2, 0, 0, -1]} as Comma,
    },
    /*99*/[CommaClassId._13_V_5_M]: {                                                               //   )//|
        representativeSymbolClassId: SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB,
        pitch: {pev: [5, -4, -1, 0, 0, 1]} as Comma,
    },
    /*100*/[CommaClassId._1_V_5_P_2_7_M]: {                                                         //  `)//|
        representativeSymbolClassId: SymbolClassId.WING_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB,
        pitch: {pev: [17, -6, -2, -1]} as Comma,
    },
    /*101*/[CommaClassId._37_M]: {                                                                  // ``)//|
        representativeSymbolClassId: SymbolClassId.BIRD_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB,
        pitch: {pev: [-2, -2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]} as Comma,
    },
    /*102*/[CommaClassId._11_V_5_P_2_13_M]: {                                                       //   ,,/|)
        representativeSymbolClassId: SymbolClassId.ANTIBIRD_BARB_AND_ARC,
        pitch: {pev: [-3, 5, -2, 0, 1, -1]} as Comma,
    },
    /*103*/[CommaClassId._13_M]: {                                                                  //    ,/|)
        representativeSymbolClassId: SymbolClassId.ANTIWING_BARB_AND_ARC,
        pitch: {pev: [-10, 4, 0, 0, 0, 1]} as Comma,
    },
    /*104*/[CommaClassId._1_V_35_M]: {                                                              //     /|)
        representativeSymbolClassId: SymbolClassId.BARB_AND_ARC,
        pitch: {pev: [2, 2, -1, -1]} as Comma,
    },
    /*105*/[CommaClassId._125_M]: {                                                                 //    `/|)
        representativeSymbolClassId: SymbolClassId.WING_BARB_AND_ARC,
        pitch: {pev: [1, -5, 3]} as Comma,
    },
    /*106*/[CommaClassId._11_V_19_M]: {                                                             //     (|~
        representativeSymbolClassId: SymbolClassId.ARC_AND_BOATHOOK,
        pitch: {pev: [4, -2, 0, 0, 1, 0, 0, -1]} as Comma,
    },
    /*107*/[CommaClassId._65_M]: {                                                                  //   ,'/|)
        representativeSymbolClassId: SymbolClassId.ANTIWING_TICK_BARB_AND_ARC,
        pitch: {pev: [-25, 12, 1, 0, 0, 1]} as Comma,
    },
    /*108*/[CommaClassId._1_V_7_M]: {                                                               //    '/|)
        representativeSymbolClassId: SymbolClassId.TICK_BARB_AND_ARC,
        pitch: {pev: [-13, 10, 0, -1]} as Comma,
    },
    /*109*/[CommaClassId._5_P_4_M]: {                                                               //   `'/|)
        representativeSymbolClassId: SymbolClassId.WING_TICK_BARB_AND_ARC,
        pitch: {pev: [-14, 3, 4]} as Comma,
    },
    /*110*/[CommaClassId._11_V_5_M]: {                                                              //    ./|\
        representativeSymbolClassId: SymbolClassId.ANTITICK_AND_DOUBLE_BARB,
        pitch: {pev: [10, -7, -1, 0, 1]} as Comma,
    },
    /*111*/[CommaClassId._17_V_11_M]: {                                                             //   `./|\
        representativeSymbolClassId: SymbolClassId.WING_ANTITICK_AND_DOUBLE_BARB,
        pitch: {pev: [1, -1, 0, 0, -1, 0, 1]} as Comma,
    },
    /*112*/[CommaClassId._5_V_23_M]: {                                                              //   ,,/|\
        representativeSymbolClassId: SymbolClassId.ANTIBIRD_AND_DOUBLE_BARB,
        pitch: {pev: [7, -3, 1, 0, 0, 0, 0, 0, -1]} as Comma,
    },
    /*113*/[CommaClassId._7_V_5_P_2_11_M]: {                                                        //    ,/|\
        representativeSymbolClassId: SymbolClassId.ANTIWING_AND_DOUBLE_BARB,
        pitch: {pev: [-1, 4, -2, 1, -1]} as Comma,
    },
    /*114*/[CommaClassId._11_M]: {                                                                  //     /|\
        representativeSymbolClassId: SymbolClassId.DOUBLE_BARB,
        pitch: {pev: [-5, 1, 0, 0, 1]} as Comma,
    },
    /*115*/[CommaClassId._5_17_V_11_M]: {                                                           //    `/|\
        representativeSymbolClassId: SymbolClassId.WING_AND_DOUBLE_BARB,
        pitch: {pev: [-14, 7, 1, 0, -1, 0, 1]} as Comma,
    },
    /*116*/[CommaClassId._65_V_7_M]: {                                                              //   ,(/|
        representativeSymbolClassId: SymbolClassId.ANTIWING_AND_LEFT_ARC_AND_BARB,
        pitch: {pev: [0, -2, 1, -1, 0, 1]} as Comma,
    },
    /*117*/[CommaClassId._1_V_49_M]: {                                                              //    (/|
        representativeSymbolClassId: SymbolClassId.LEFT_ARC_AND_BARB,
        pitch: {pev: [12, -4, 0, -2]} as Comma,
    },
    /*118*/[CommaClassId._1_V_31_M]: {                                                              //   `(/|
        representativeSymbolClassId: SymbolClassId.WING_AND_LEFT_ARC_AND_BARB,
        pitch: {pev: [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1]} as Comma,
    },
    /*119*/[CommaClassId._55_M]: {                                                                  //    '/|\
        representativeSymbolClassId: SymbolClassId.TICK_AND_DOUBLE_BARB,
        pitch: {pev: [-20, 9, 1, 0, 1]} as Comma,
    },
    /*120*/[CommaClassId._11_V_7_13_M]: {                                                           //   `'/|\
        representativeSymbolClassId: SymbolClassId.WING_TICK_AND_DOUBLE_BARB,
        pitch: {pev: [-8, 7, 0, -1, 1, -1]} as Comma,
    },
    /*121*/[CommaClassId._5_7_17_M]: {                                                              //   ,)/|\
        representativeSymbolClassId: SymbolClassId.ANTIWING_LEFT_SCROLL_AND_DOUBLE_BARB,
        pitch: {pev: [-6, -2, 1, 1, 0, 0, 1]} as Comma,
    },
    /*122*/[CommaClassId._5_V_49_M]: {                                                              //    )/|\
        representativeSymbolClassId: SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB,
        pitch: {pev: [-3, 4, 1, -2]} as Comma,
    },
}

const getCommaClass = (commaClassId: CommaClassId): CommaClass =>
    COMMA_CLASSES[commaClassId]

export {
    getCommaClass,
}
