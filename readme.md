# Module Replacements CLI

> Primitive, non-interactive CLI for [module-replacements](https://github.com/es-tooling/module-replacements)

## Usage

```sh
npx @kidonng/module-replacements-cli
```

Optionally, specify a directory containing `package.json`:

```sh
npx @kidonng/module-replacements-cli my-package
```

## Example

```shellsession
$ npx @kidonng/module-replacements-cli
[preferred] execa -> https://github.com/es-tooling/module-replacements/blob/main/docs/modules/process-exec.md
[preferred] globby -> https://github.com/es-tooling/module-replacements/blob/main/docs/modules/glob.md
[micro-utilities] is-whitespace -> Use str.trim() === "" or /^\s*$/.test(str)
[micro-utilities] is-windows -> Use process.platform === "win32"
[native] left-pad -> String.prototype.padStart (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
[native] object-assign -> Object.assign (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
```

## See Also

- [esperf](https://github.com/es-tooling/esperf) - More complete solution