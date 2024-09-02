enum AccentId {
    TICK = "tick",
    WING = "wing",
    BIRD = "bird",
    HORN = "horn",
    WEDGE = "wedge",
    HORNWING = "hornwing",
    WEDGEWING = "wedgewing",
    HORNBIRD = "hornbird",
    WEDGEBIRD = "wedgebird",
    WINGBIRD = "wingbird",
    DOT = "dot",
}

type Accent = {
    id: AccentId,
    anti?: boolean,
}

type Arm = Accent[]

enum ArmId {
    WING = "wing",
    BIRD = "bird",
    ANTIWING_AND_TICK = "antiwingAndTick",
    TICK = "tick",
    WING_AND_TICK = "wingAndTick",
    // I don't think we've defined which Magrathean arms are valid yet
    // Once you have it, then it would make sense to expand the `glyph/parse` spec to check it can find Magrathean arms
    // It also slightly disconcerts me that there's no way for it output bird and wing as @3 and @6. Maybe script flag?
}

enum FlagId {
    BARB = "barb",
    SCROLL = "scroll",
    ARC = "arc",
    BOATHOOK = "boathook",
}

// You *could* make:
/*
type Flag = {
    id: FlagId,
    double?: boolean,
}
 */
// If you strongly wanted parallelism between AccentId -> Accent -> Arm and FlagId -> Flag -> Head.
// However, I feel that because of the way "double" gets used in HeadId both for doubling a specific flag on one side
// And for the case when you've got the same flag on each side (e.g. double barb)
// However: an important consideration that has just occurred to me: by splitting into left and right, you now have to
// Make both of them optional. But if you made it one array of flags, then you'd always have to have at least one flag.
// And I prefer having fewer optional fields, because it makes it less likely to get something conflated as your type.

interface Head {
    left?: FlagId[],
    right?: FlagId[],
}

enum HeadId {
    BARE_SHAFT = "bareShaft",
    RIGHT_SCROLL = "rightScroll",
    LEFT_BARB = "leftBarb",
    RIGHT_ARC = "rightArc",
    DOUBLE_LEFT_BARB = "doubleLeftBarb",
    BARB_AND_ARC = "barbAndArc",
    DOUBLE_BARB = "doubleBarb",
    DOUBLE_ARC = "doubleArc",
    ARC_AND_BARB = "arcAndBarb",
    DOUBLE_SCROLL = "doubleScroll",
    BOATHOOK_AND_SCROLL = "boathookAndScroll",
    RIGHT_BARB = "rightBarb",
    LEFT_ARC = "leftArc",
    ARC_AND_SCROLL = "arcAndScroll",
    RIGHT_BOATHOOK = "rightBoathook",
    LEFT_SCROLL_AND_BARB = "leftScrollAndBarb",
    BARB_AND_BOATHOOK = "barbAndBoathook",
    LEFT_SCROLL = "leftScroll",
    LEFT_BOATHOOK = "leftBoathook",
    LEFT_SCROLL_AND_BOATHOOK = "leftScrollAndBoathook",
    DOUBLE_LEFT_BOATHOOK = "doubleLeftBoathook",
    SCROLL_AND_BOATHOOK = "scrollAndBoathook",
    SCROLL_AND_ARC = "scrollAndArc",
    BOATHOOK_AND_ARC = "boathookAndArc",
    BOATHOOK_AND_BARB = "boathookAndBarb",
    LEFT_SCROLL_DOUBLE_LEFT_BARB = "leftScrollDoubleLeftBarb",
    ARC_AND_BOATHOOK = "arcAndBoathook",
    LEFT_ARC_AND_BARB = "leftArcAndBarb",
    LEFT_SCROLL_AND_DOUBLE_BARB = "leftScrollAndDoubleBarb",
    RIGHT_BARB_AND_ARC = "rightBarbAndArc",
    DOUBLE_RIGHT_BARB = "doubleRightBarb",
    LEFT_SCROLL_DOUBLE_RIGHT_BARB = "leftScrollDoubleRightBarb",
}


// FlagId and AccentId Combination (see: http://forum.sagittal.org/viewtopic.php?p=2474#p2474)
interface Flacco extends Head {
    arm?: Arm,
}

export {
    Flacco,
    FlagId,
    AccentId,
    Head,
    HeadId,
    Arm,
    ArmId,
    Accent,
}
