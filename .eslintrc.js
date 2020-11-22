module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-console': 'off',
    'import/no-unresolved': 'off',
    'no-unused-vars': 'off',
    'consistent-return': 'off',
    'no-undef': 'off',
    'no-plusplus': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'no-nested-ternary': 'off',
    'react/prop-types': 'off',
    'react/button-has-type': 'off'
  },
};
