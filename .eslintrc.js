module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-param-reassign': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    radix: 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
