#!/usr/bin/env node
import { join } from 'node:path'
import { argv, cwd } from 'node:process'
import { all } from 'module-replacements'

const replacements = all.moduleReplacements

const target = join(argv[2] || cwd(), 'package.json')
const { default: content } = await import(target, { with: { type: 'json' } })

const dependencies = [
  content.dependencies,
  content.devDependencies,
  content.peerDependencies,
  content.optionalDependencies,
].filter(Boolean).map(Object.keys).flat()

for (const dependency of dependencies) {
  const replacement = replacements.find(replacement => replacement.moduleName === dependency)
  if (!replacement) continue

  console.log(
    `[${replacement.category}]`,
    replacement.moduleName,
    '->',
    replacement.type === 'simple'
      ? replacement.replacement
  : replacement.type === 'native'
      ? `${replacement.replacement} (https://developer.mozilla.org/docs/Web/JavaScript/Reference/${replacement.mdnPath})`
  : replacement.type === 'documented'
      ? `https://github.com/es-tooling/module-replacements/blob/main/docs/modules/${replacement.docPath}.md`
      : replacement
  )
}
