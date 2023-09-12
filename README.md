
# Build
run pnpm run build

1. go to the file and remove the first `(() => {` and the last `})();`!
2. The entry point is `src_default(canvas, params)` when NOT minified otherwise z

3. Search for `z=(t,e)=>{let i=(r,n,o)=>({type:r,value:typeof e[n]=="undefined"` or similar
eg via `)=>{` and make sure the function is called "z". later there should be "undefined" (for orientation)

1. Miniify the code via https://skalman.github.io/UglifyJS-online/ and replace the code with the result
2. Use the config under uglifyJS_config.txt for the minification
3. check that entry point is `z` and that the function is called `z` in the minified code


[![COBE](card.png)](https://cobe.vercel.app)

<p align="center">A <b>lightweight (5kB)</b> WebGL globe lib. The name "COBE" stands for <a href="https://en.wikipedia.org/wiki/Cosmic_Background_Explorer" target="_blank">Cosmic Background Explorer</a>.</p>

---

- [**Demo** and configurations](https://cobe.vercel.app)
- Use with React: https://codesandbox.io/s/eager-sky-r2q0g
- Use with vanilla JS: https://codesandbox.io/s/peaceful-gwen-m579y
- Use with Vue3: https://stackblitz.com/edit/vitejs-vite-l5a8xk?file=src/App.vue
- Use with Svelte: https://codesandbox.io/s/great-visvesvaraya-78yf6?file=/App.svelte

## Quick Start

```html
<canvas
  id="cobe"
  style="width: 500px; height: 500px;"
  width="1000"
  height="1000"
></canvas>
```

```js
import createGlobe from 'cobe'

let phi = 0
let canvas = document.getElementById("cobe")

const globe = createGlobe(canvas, {
  devicePixelRatio: 2,
  width: 1000,
  height: 1000,
  phi: 0,
  theta: 0,
  dark: 0,
  diffuse: 1.2,
  scale: 1,
  mapSamples: 16000,
  mapBrightness: 6,
  baseColor: [0.3, 0.3, 0.3],
  markerColor: [1, 0.5, 1],
  glowColor: [1, 1, 1],
  offset: [0, 0],
  markers: [
    { location: [37.7595, -122.4367], size: 0.03 },
    { location: [40.7128, -74.006], size: 0.1 },
  ],
  onRender: (state) => {
    // Called on every animation frame.
    // `state` will be an empty object, return updated params.
    state.phi = phi
    phi += 0.01
  },
})

// `globe` will be a Phenomenon (https://github.com/vaneenige/phenomenon) instance.
// To pause requestAnimationFrame:
// `globe.toggle()`
// To remove the instance:
// `globe.destroy()`
// ...
```

## Acknowledgment

This project is inspired & based on the great work of:

- [Spherical Fibonacci Mapping](https://dl.acm.org/doi/10.1145/2816795.2818131), Benjamin Keinert et al.
- https://www.shadertoy.com/view/lllXz4, Inigo Quilez
- https://github.blog/2020-12-21-how-we-built-the-github-globe
- https://github.com/vaneenige/phenomenon
- https://github.com/evanw/glslx

World map asset from:

- https://de.wikipedia.org/wiki/Datei:World_map_blank_without_borders.svg

## License

The MIT License.
