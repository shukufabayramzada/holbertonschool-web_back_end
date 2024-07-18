module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true, // Add jest environment
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'jest', // Add jest plugin
  ],
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'off',
    // Add your custom rules here
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true, // Allow in devDependencies
        optionalDependencies: false,
        peerDependencies: false,
        packageDir: ['./', './src'], // Adjust based on your project structure
      },
    ],
  },
};
