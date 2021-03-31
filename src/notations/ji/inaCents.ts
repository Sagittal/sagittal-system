import {Cents} from "@sagittal/general"
import {ATHINA_CENTS, HINA_CENTS, MINA_CENTS, TINA_CENTS, ULTRINA_CENTS} from "./intervals"
import {Athinas, Hinas, Minas, Tinas, Ultrinas} from "./types"

const computeCentsFromTinas = (tinas: Tinas): Cents =>
    tinas * TINA_CENTS as Cents

const computeCentsFromMinas = (minas: Minas): Cents =>
    minas * MINA_CENTS as Cents

const computeCentsFromUltrinas = (ultrinas: Ultrinas): Cents =>
    ultrinas * ULTRINA_CENTS as Cents

const computeCentsFromHinas = (hinas: Hinas): Cents =>
    hinas * HINA_CENTS as Cents

const computeCentsFromAthinas = (athinas: Athinas): Cents =>
    athinas * ATHINA_CENTS as Cents

export {
    computeCentsFromTinas,
    computeCentsFromMinas,
    computeCentsFromUltrinas,
    computeCentsFromHinas,
    computeCentsFromAthinas,
}
