/* eslint-env node */

module.exports = {
  extends: [
    'stylelint-config-twbs-bootstrap/'
    // 'stylelint-config-standard' // in twb
  ],
  plugins: [
    // 'stylelint-order',
    '@stylistic/stylelint-plugin'
  ],
  'ignoreFiles': [
    '**/node_modules/**/*.*',
    '**/vendor/**/*.*',
    '**/build/**/*.*',
    '**/dist/**/*.*'
  ],

  'rules': {

    // order overrides
    // https://github.com/stormwarning/stylelint-config-recess-order
		// 'order/properties-order': {
    //   'padding-inline-start'
		// },

    'alpha-value-notation': null,
    'at-rule-no-vendor-prefix': true,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          // tailwind
          'tailwind',
          'apply',
          'layer',
          'variants',
          'responsive',
          'screen',
          'config',

          // postcss
          'define-mixin',
          'mixin',

          // sass
          'extend',
          'include',
          'if',
          'else',
          // 'mixin',
          'function',
          'at-root',
          'use',
          'forward',
          'each',
          'while',
          'for',
          'error',
          'warn',
          'debug',
          'return'
        ],
      },
    ],

    // 'color-function-notation': 'legacy',
    // 'comment-empty-line-before': [
    //   'always',
    //   {
    //     // except: ['first-nested'],
    //     ignore: ['after-comment', 'stylelint-commands']
    //   }
    // ],
    'comment-empty-line-before': null,
    'font-family-name-quotes': 'always-where-recommended',

    'function-no-unknown': [true,
      {
        // tailwind
        ignoreFunctions: ['theme']
      }
    ],
    'function-url-no-scheme-relative': true,
    'function-url-quotes': 'always',

    'hue-degree-notation': null,
    'import-notation': null,

    'max-nesting-depth': [
      3,
      {
        ignore: ['pseudo-classes', 'blockless-at-rules'],
        ignoreAtRules: [/media/, /include/],
        ignorePseudoClasses: ['before', 'after']
      }
    ],
    // 'media-feature-name-no-vendor-prefix': true,

    'property-no-vendor-prefix': true,
    'selector-attribute-quotes': 'always',
    'selector-class-pattern': [
      '^[a-z][a-z0-9\\-]*[a-z0-9]$',
      {
        resolveNestedSelectors: true
      }
    ],
    'selector-max-type': [
      3,
      {
        ignore: ['child', 'compounded', 'descendant', 'next-sibling']
      }
    ],

    'selector-no-qualifying-type': [
      null,
      {
        ignore: ['attribute', 'class', 'id']
      }
    ],
    'selector-no-vendor-prefix': true,
    'shorthand-property-no-redundant-values': true,

    // 'shorthand-property-no-redundant-values': [
    //   true,
    //   {
    //     ignoreShorthands: [ /^grid-/ ]
    //   }
    // ],

    // =>> stylistic
    // https://github.com/elirasza/stylelint-stylistic
    '@stylistic/function-max-empty-lines': 2,
    '@stylistic/function-parentheses-space-inside': 'never-single-line',
    '@stylistic/no-empty-first-line': null,
    '@stylistic/no-missing-end-of-source-newline': null,
    '@stylistic/max-empty-lines': [3, {ignore: ['comments']}],
    '@stylistic/number-leading-zero': null, //'never',
    '@stylistic/string-quotes': 'single',
    '@stylistic/selector-list-comma-space-after': null,
    '@stylistic/selector-list-comma-space-before': 'never',
    '@stylistic/selector-list-comma-newline-after': 'always-multi-line',
    '@stylistic/value-list-comma-space-after': 'always-single-line',
    '@stylistic/value-list-comma-newline-after': 'always-multi-line', //'never-multi-line',
    '@stylistic/value-list-max-empty-lines': 3,

    'value-keyword-case': [
      'lower',
      {
        ignoreKeywords: ['currentColor']
      }
    ],

    'value-no-vendor-prefix': true
  },
  'overrides': [
    {
      'files': ['**/*.scss'],
      // 'extends': ['stylelint-config-twbs-bootstrap/'],
      'rules': {


        'scss/at-function-pattern': '^[a-z][a-z-]*$',
        'scss/at-function-parentheses-space-before': 'never',
        'scss/at-import-no-partial-leading-underscore': null, //true,
        'scss/at-import-partial-extension': 'never',
        'scss/at-mixin-named-arguments': null,
        'scss/at-mixin-parentheses-space-before': 'never',
        // 'scss/at-rule-no-unknown': true,
        'scss/at-rule-no-unknown': [
          true,
          {
            ignoreAtRules: [

              // tailwind
              'tailwind',
              'apply',
              'layer',
              'variants',
              'responsive',
              'screen',
              'config',

              // sass
              'extend',
              'include',
              'if',
              'else',
              'mixin',
              'function',
              'at-root',
              'use',
              'forward',
              'each',
              'while',
              'for',
              'error',
              'warn',
              'debug',
              'return'
            ]
          }
        ],
        'scss/dollar-variable-colon-space-before': 'never',
        'scss/dollar-variable-no-missing-interpolation': true,
        'scss/dollar-variable-pattern': '^[a-z][a-z-\\d]*$',
        'scss/no-duplicate-dollar-variables': [
          null,
          {
            'ignoreInsideAtRules': [
              'extend',
              'if',
              'mixin'
            ]
          }
        ],
        'scss/no-duplicate-mixins': true,
        'scss/operator-no-newline-after': true,
        'scss/operator-no-newline-before': true,
        'scss/operator-no-unspaced': true,
      }
    },
    {
      'files': ['**/*.module.scss', '**/*.module.css'],
      'extends': [/* 'stylelint-config-twbs-bootstrap/', */ 'stylelint-config-css-modules'],
      'rules': {
        'selector-class-pattern': [
          '^[a-z]+(_?[A-Z]?[a-z0-9]*)*$',
          // '(?<=:global[ \(])^[a-z][a-z0-9\\-]*[a-z0-9]$\)?'
          {
            resolveNestedSelectors: true
          }
        ],
      }
    }
  ]
};
