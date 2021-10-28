const schemaJson = require('./server/schema.json')
// const schemaJson = require('./node-server/src/generated/schema.json')

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  plugins: ['@typescript-eslint', 'import', 'graphql'],
  extends: [
    'react-app',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'no-underscore-dangle': ['error', { allow: ['__typename'] }],
    'class-methods-use-this': 0,
    'react/jsx-curly-newline': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-indent': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-wrap-multilines': 0,
    'react/prefer-stateless-function': 0,
    'react/react-in-jsx-scope': 0,
    'react/no-array-index-key': 0,
    'graphql/capitalized-type-name': ['warn', { schemaJson }],
    'graphql/named-operations': ['warn', { schemaJson }],
    'graphql/required-fields': ['error', { schemaJson, requiredFields: ['id'] }],
    'graphql/template-strings': ['error', { env: 'apollo', schemaJson, tagName: 'gql' }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/extensions': 0,
    'import/newline-after-import': 'error',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
      },
    ],
    'import/prefer-default-export': 0,
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: ['Input', 'Textarea', 'Select', 'Checkbox', 'Radio', 'DateInput'],
      },
    ],
    'jsx-a11y/control-has-associated-label': [
      'error',
      {
        controlComponents: ['Button', 'SubmitButton'],
      },
    ],
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/member-delimiter-style': 0,

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-duplicate-imports.md
    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': 'error',

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
    'return-await': 'off',
    '@typescript-eslint/return-await': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-this.md
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/init-declarations.md
    'init-declarations': 'off',
    '@typescript-eslint/init-declarations': ['error'],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/prop-types': 0,
      },
    },
    {
      files: ['*.test.ts', '*.test.tsx', '*.stories.ts', '*.stories.tsx'],
      rules: {
        '@typescript-eslint/ban-ts-ignore': 0,
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
}
