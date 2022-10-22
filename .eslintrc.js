module.exports = {
  'root': true,
  'parser': '@typescript-eslint/parser',
  'plugins': [
    '@typescript-eslint',
    'prettier'
  ],
  'extends': [
    'plugin:@typescript-eslint/eslint-recommended',
    // 'plugin:@typescript-eslint/recommended',
    // 'eslint:recommended',
    // 'prettier'
    'plugin:prettier/recommended'
  ],
  'env': {
    'browser': true,
    'node': true
  },
  'rules': {
    'prettier/prettier': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': [
      'off'
    ]
  }
}
