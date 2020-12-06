import {Filename} from "@sagittal/general"
import * as fs from "fs"
import * as path from "path"

const catchBadSpecFiles = (basePath: Filename = "" as Filename): void => {
    for (const file of fs.readdirSync(path.join("spec/src", basePath))) {
        const filename = path.join(basePath, file) as Filename

        if (fs.lstatSync(path.join("spec/src", basePath, file)).isDirectory()) {
            catchBadSpecFiles(filename)
        } else {
            if (!new RegExp(".*Spec\.ts").test(filename)) {
                throw new Error(`Spec is not named properly and will not run: ${path.join("spec/src", filename)}`)
            }

            if (
                !fs.existsSync(path.join("src", filename).replace("Spec.ts", ".ts")) &&
                !new RegExp("verificationSpecs").test(filename)
            ) {
                throw new Error(`Spec is not paired with a src file by name: ${filename}`)
            }
        }
    }
}

catchBadSpecFiles()
