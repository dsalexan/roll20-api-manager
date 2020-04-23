module.exports = {
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends": [
    "plugin:prettier/recommended"
  ],
  "plugins": [
    "prettier"
  ],
  "rules": {
    "prettier/prettier": "error",
    
    'no-console': 'warn',
    'no-debugger': 'warn',
    camelcase: 'off',
    'max-len': [
      'warn',
      {
        code: 130
      }
    ],
    'prefer-destructuring': 'error',
    'radix': 'off',
    'consistent-return': 'error',
    'import/no-named-as-default-member': 'off',
    'consistent-return': 'off',
    'prefer-destructuring': 'warn',
    'no-unused-vars': 'warn',
    'no-extend-native': 'off',
  }
}