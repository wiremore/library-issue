import { defineConfig } from 'tsup';

export default defineConfig({
    clean: true,
    dts: true,
    entry: ['src/index.ts'],
    external: ['react', 'react-dom'],
    format: ['esm'],
    injectStyle: false,
    minify: true,
    sourcemap: 'inline',
    splitting: false,
    treeshake: true,
});
