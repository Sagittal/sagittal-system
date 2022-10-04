# sagittal-system

Implementations of Sagittal notations, accidental parsing, useful metrics, comma naming, and finding and analyzing commas using Sagittal-specific properties.

## development

`make build` builds two versions of this package: one with CJS and one with ESM.

This is so the project can be used isomorphically (in both Node and the browser).

The two packages are exposed as `main` and `module`, respectively.

`sideEffects: false` has been marked in `package.json` to allow the ESM version to be tree-shaken by consumers.

The CJS package uses the default `tsconfig.json` (the same one Jasmine tests use) while the EMS simply passes a couple overriding configuration properties via the CLI.
