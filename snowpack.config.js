// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: { url: '/dist' }, // Mount "src" to "dist".
    public: { url: '/', static: true, resolve: false }, // Mount "public" to root.
  },
  plugins: [
    [
      'snowpack-sass-compiler',
      {
        compilerOptions: {
          outputStyle: 'compressed',
          includePaths: ['src', 'node_modules'],
        },
      },
    ],
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
