// 仅用于 SSR 模式的 bable 配置
const config = require('./config');
const paths = require('./paths');

const { localIdentName } = config.style;
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    [
      'module-resolver',
      {
        root: [paths.appSrc],
        alias: {
          '@': isProduction ? paths.appSrc : paths.appLib,
        },
      },
    ],
    [
      'css-modules-transform',
      {
        camelCase: true,
        generateScopedName: localIdentName,
        extensions: ['.css', '.scss'],
      },
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-transform-runtime'],
    'dynamic-import-node',
  ],
};
