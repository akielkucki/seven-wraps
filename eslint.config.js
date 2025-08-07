import js from '@eslint/js';

const eslintConfig = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        sessionStorage: 'readonly',
        localStorage: 'readonly',
        React: 'readonly'
      }
    },
    files: ['**/*.{js,jsx,mjs,cjs}'],
    rules: {
      // JavaScript Rules
      'no-unused-vars': ['warn', {
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_'
      }],
      'no-console': ['warn', {
        'allow': ['warn', 'error']
      }],
      'no-debugger': 'error',
      'no-alert': 'warn',
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-arrow-callback': 'warn',
      'arrow-spacing': 'error',
      'no-multiple-empty-lines': ['error', {
        'max': 2,
        'maxEOF': 1
      }],
      'no-trailing-spaces': 'error',
      'comma-dangle': ['error', 'never'],
      'semi': ['error', 'always'],
      'quotes': ['error', 'single', {
        'allowTemplateLiterals': true
      }],

      // Code Quality
      'eqeqeq': 'error',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'no-script-url': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-throw-literal': 'error',
      'no-void': 'error',
      'radix': 'error',
      'wrap-iife': 'error',

      // Style Guidelines
      'camelcase': ['warn', {
        'properties': 'never'
      }],
      'func-names': ['warn', 'as-needed'],
      'max-len': ['warn', {
        'code': 120,
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true
      }],
      'max-params': ['warn', 4],
      'max-depth': ['warn', 4],
      'complexity': ['warn', 10],

      // Prevent common issues
      'no-undef': 'error',
      'no-unreachable': 'error',
      'no-duplicate-case': 'error',
      'no-empty': 'warn',
      'no-extra-semi': 'error',
      'no-func-assign': 'error',
      'no-invalid-regexp': 'error',
      'no-irregular-whitespace': 'error',
      'no-obj-calls': 'error',
      'no-regex-spaces': 'error',
      'no-sparse-arrays': 'error',
      'use-isnan': 'error',
      'valid-typeof': 'error'
    }
  },
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'dist/**',
      'public/**',
      '*.min.js'
    ]
  }
];

export default eslintConfig;
