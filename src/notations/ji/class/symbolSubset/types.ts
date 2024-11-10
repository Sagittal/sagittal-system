// TODO: POST-NOTATION-GENERATION: TRULY SYMBOL SUBSETS, NOT JUST SYMBOL CLASS SUBSETS
//  So I made this into SymbolSubsetId which I think is right but there's not literally a SymbolSubset type yet
//  Which would be an array of SymbolClassIds I suppose?
enum SymbolSubsetId {
    COMPATIBLE = "compatible",
    SPARTAN = "spartan",
    ATHENIAN = "athenian",
    PROMETHEAN = "promethean",
    HERCULEAN = "herculean",
    OLYMPIAN = "olympian",
    MAGRATHEAN = "magrathean",
    TROJAN = "trojan",
}

export { SymbolSubsetId }
