import esbuild from 'esbuild'

import __TEXTURE__ from '../src/texture.js'
import * as __SHADER__ from '../src/shader.min.js'

esbuild
  .build({
    entryPoints: ['src/index.js'],
    bundle: true,
    minify: true,
    outfile: 'dist/renderer.min.js',
    format: 'iife',
    treeShaking: true,
    //target: ['chrome116', 'firefox117', 'safari16', 'edge116'],
    define: {
      __TEXTURE__: JSON.stringify(__TEXTURE__),
      ...Object.entries(__SHADER__)
        .map((v) => [v[0], JSON.stringify(v[1])])
        .reduce((o, entry) => ((o[entry[0]] = entry[1]), o), {}),
    },
  })
  .catch(() => process.exit(1))
