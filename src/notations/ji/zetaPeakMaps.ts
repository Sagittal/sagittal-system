import { computeSimpleMap, Max, Prime, Map, Edo, Integer } from "@sagittal/general"

const MEDIUM_ZETA_PEAK_EDO = 217.0247 as Edo
const HIGH_ZETA_PEAK_EDO = 494.01377 as Edo
// Const ULTRA_ZETA_PEAK_EDO = 612
// Ultra notation does not correspond to an EDO: http://forum.sagittal.org/viewtopic.php?p=2639#p2639
const EXTREME_ZETA_PEAK_EDO = 2459.98488 as Edo
const INSANE_ZETA_PEAK_EDO = 8539.00834 as Edo

//  281 has no particular meaning, it was just as high as I had on hand.
//  The highest prime limit of any comma in bestCommasPerSemitinaZone.txt is 233, so it's actually uncomfortably close!
const ARBITRARY_PRIME_LIMIT_FOR_ZETA_PEAK_MAPS = 281 as Max<Prime>

const MEDIUM_ZETA_PEAK_MAP: Map<Integer> = computeSimpleMap(
    MEDIUM_ZETA_PEAK_EDO,
    ARBITRARY_PRIME_LIMIT_FOR_ZETA_PEAK_MAPS,
)
const HIGH_ZETA_PEAK_MAP: Map<Integer> = computeSimpleMap(
    HIGH_ZETA_PEAK_EDO,
    ARBITRARY_PRIME_LIMIT_FOR_ZETA_PEAK_MAPS,
)
const EXTREME_ZETA_PEAK_MAP: Map<Integer> = computeSimpleMap(
    EXTREME_ZETA_PEAK_EDO,
    ARBITRARY_PRIME_LIMIT_FOR_ZETA_PEAK_MAPS,
)
const INSANE_ZETA_PEAK_MAP: Map<Integer> = computeSimpleMap(
    INSANE_ZETA_PEAK_EDO,
    ARBITRARY_PRIME_LIMIT_FOR_ZETA_PEAK_MAPS,
)

export {
    MEDIUM_ZETA_PEAK_EDO,
    MEDIUM_ZETA_PEAK_MAP,
    HIGH_ZETA_PEAK_EDO,
    HIGH_ZETA_PEAK_MAP,
    EXTREME_ZETA_PEAK_EDO,
    EXTREME_ZETA_PEAK_MAP,
    INSANE_ZETA_PEAK_EDO,
    INSANE_ZETA_PEAK_MAP,
}
