// for convenience, these values the ones used by StaffCode
enum Whorl {
    DOUBLE_FLAT = "bb",
    FLAT = "b",
    NATURAL = "",
    SHARP = "#",
    DOUBLE_SHARP = "X",
}

enum Nominal {
    F = "f",
    C = "c",
    G = "g",
    D = "d",
    A = "a",
    E = "e",
    B = "b",
}

interface Link {
    nominal: Nominal,
    whorl: Whorl
}

export {
    Whorl,
    Nominal,
    Link,
}
