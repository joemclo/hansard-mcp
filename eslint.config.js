import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tseslintParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: ['src/generated/**/*']
  },
  eslint.configs.recommended,
  {
    files: ['src/**/*.ts'],
    ignores: [
      '**/*.d.ts', 
      'dist/**/*'
    ],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parser: tseslintParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
          modules: true
        }
      },
      globals: {
        console: 'readonly',
        process: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'prettier': prettier,
      'import': importPlugin
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...prettier.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', { 
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_'
      }],
      'no-redeclare': 'off',
      '@typescript-eslint/no-redeclare': 'error',
      'import/no-unresolved': 'off',
      'import/extensions': ['error', 'always', { 
        'ts': 'never',
        'js': 'never'
      }],
      'import/prefer-default-export': 'off'
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx']
      },
      'import/resolver': {
        'typescript': {
          'alwaysTryTypes': true
        },
        'node': true
      }
    }
  },
  {
    files: ['src/**/*.test.ts', 'src/**/*.spec.ts'],
    languageOptions: {
      globals: {
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly'
      }
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off'
    }
  }
]; 