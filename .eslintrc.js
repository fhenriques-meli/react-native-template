module.exports = {
  root: true,
  extends: [
    'airbnb',
    '@react-native-community',
    'prettier/react',
    'prettier',
  ],
  parser: 'babel-eslint',
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: [
          '.js',
          '.jsx'
        ],
      },
    ],
    'import/prefer-default-export': 'off',
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
      },
    },
  },
};
