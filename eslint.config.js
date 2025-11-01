import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import prettier from 'eslint-config-prettier'
import typescriptEslint from 'typescript-eslint'
import vueEslintParser from 'vue-eslint-parser'

export default typescriptEslint.config(
    { ignores: ['node_modules', 'dist', '.vitepress/dist', '.vitepress/cache', 'bun.lockb', 'posts/**/*.md', 'pages/**/*.md', '*.md'] },
    js.configs.recommended,
    ...typescriptEslint.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    prettier,
    {
        files: ['.vitepress/**/*.{js,mjs,ts,vue}', '*.{js,mjs,ts}'],
        languageOptions: {
            parser: vueEslintParser,
            parserOptions: {
                parser: typescriptEslint.parser,
                ecmaVersion: 2020,
                sourceType: 'module'
            }
        },
        rules: {
            'array-bracket-newline': ['error', 'consistent']
        }
    }
)