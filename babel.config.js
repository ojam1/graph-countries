module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { esmodules: true } }],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  env: {
    test: {
      presets: [
        ['@babel/preset-env', { modules: 'commonjs' }],
        '@babel/preset-react',
      ]
    },
  },
};
