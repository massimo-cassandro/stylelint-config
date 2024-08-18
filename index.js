/* eslint-env node */

module.exports = {
  extends: [
    'stylelint-config-twbs-bootstrap/'
    // 'stylelint-config-standard' // in twbs
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

    // 'order/properties-order': [
    //   'position',
    //   'top',
    //   'right',
    //   'bottom',
    //   'left',
    //   'z-index',
    //   'box-sizing',
    //   'display',
    //   'flex',
    //   'flex-align',
    //   'flex-basis',
    //   'flex-direction',
    //   'flex-wrap',
    //   'flex-flow',
    //   'flex-shrink',
    //   'flex-grow',
    //   'flex-order',
    //   'flex-pack',
    //   'align-content',
    //   'align-items',
    //   'align-self',
    //   'justify-content',
    //   'order',
    //   'float',
    //   'width',
    //   'min-width',
    //   'max-width',
    //   'height',
    //   'min-height',
    //   'max-height',
    //   'padding',
    //   'padding-top',
    //   'padding-right',
    //   'padding-bottom',
    //   'padding-left',
    //   'margin',
    //   'margin-top',
    //   'margin-right',
    //   'margin-bottom',
    //   'margin-left',
    //   'overflow',
    //   'overflow-x',
    //   'overflow-y',
    //   '-webkit-overflow-scrolling',
    //   '-ms-overflow-x',
    //   '-ms-overflow-y',
    //   '-ms-overflow-style',
    //   'columns',
    //   'column-count',
    //   'column-fill',
    //   'column-gap',
    //   'column-rule',
    //   'column-rule-width',
    //   'column-rule-style',
    //   'column-rule-color',
    //   'column-span',
    //   'column-width',
    //   'orphans',
    //   'widows',
    //   'clip',
    //   'clear',
    //   'font',
    //   'font-family',
    //   'font-size',
    //   'font-style',
    //   'font-weight',
    //   'font-variant',
    //   'font-size-adjust',
    //   'font-stretch',
    //   'font-effect',
    //   'font-emphasize',
    //   'font-emphasize-position',
    //   'font-emphasize-style',
    //   'font-smooth',
    //   'src',
    //   'hyphens',
    //   'line-height',
    //   'color',
    //   'text-align',
    //   'text-align-last',
    //   'text-emphasis',
    //   'text-emphasis-color',
    //   'text-emphasis-style',
    //   'text-emphasis-position',
    //   'text-decoration',
    //   'text-indent',
    //   'text-justify',
    //   'text-outline',
    //   '-ms-text-overflow',
    //   'text-overflow',
    //   'text-overflow-ellipsis',
    //   'text-overflow-mode',
    //   'text-shadow',
    //   'text-transform',
    //   'text-wrap',
    //   '-webkit-text-size-adjust',
    //   '-ms-text-size-adjust',
    //   'letter-spacing',
    //   '-ms-word-break',
    //   'word-break',
    //   'word-spacing',
    //   '-ms-word-wrap',
    //   'word-wrap',
    //   'overflow-wrap',
    //   'tab-size',
    //   'white-space',
    //   'vertical-align',
    //   'direction',
    //   'unicode-bidi',
    //   'list-style',
    //   'list-style-position',
    //   'list-style-type',
    //   'list-style-image',
    //   'pointer-events',
    //   '-ms-touch-action',
    //   'touch-action',
    //   'cursor',
    //   'visibility',
    //   'zoom',
    //   'table-layout',
    //   'empty-cells',
    //   'caption-side',
    //   'border-spacing',
    //   'border-collapse',
    //   'content',
    //   'quotes',
    //   'counter-reset',
    //   'counter-increment',
    //   'resize',
    //   'user-select',
    //   'nav-index',
    //   'nav-up',
    //   'nav-right',
    //   'nav-down',
    //   'nav-left',
    //   'background',
    //   'background-color',
    //   'background-image',
    //   'filter',
    //   'background-repeat',
    //   'background-attachment',
    //   'background-position',
    //   'background-position-x',
    //   'background-position-y',
    //   'background-clip',
    //   'background-origin',
    //   'background-size',
    //   'border',
    //   'border-color',
    //   'border-style',
    //   'border-width',
    //   'border-top',
    //   'border-top-color',
    //   'border-top-style',
    //   'border-top-width',
    //   'border-right',
    //   'border-right-color',
    //   'border-right-style',
    //   'border-right-width',
    //   'border-bottom',
    //   'border-bottom-color',
    //   'border-bottom-style',
    //   'border-bottom-width',
    //   'border-left',
    //   'border-left-color',
    //   'border-left-style',
    //   'border-left-width',
    //   'border-radius',
    //   'border-top-left-radius',
    //   'border-top-right-radius',
    //   'border-bottom-right-radius',
    //   'border-bottom-left-radius',
    //   'border-image',
    //   'border-image-source',
    //   'border-image-slice',
    //   'border-image-width',
    //   'border-image-outset',
    //   'border-image-repeat',
    //   'outline',
    //   'outline-width',
    //   'outline-style',
    //   'outline-color',
    //   'outline-offset',
    //   'box-shadow',
    //   'opacity',
    //   '-ms-interpolation-mode',
    //   'page-break-after',
    //   'page-break-before',
    //   'page-break-inside',
    //   'transition',
    //   'transition-delay',
    //   'transition-timing-function',
    //   'transition-duration',
    //   'transition-property',
    //   'transform',
    //   'transform-origin',
    //   'perspective',
    //   'appearance',
    //   'animation',
    //   'animation-name',
    //   'animation-duration',
    //   'animation-play-state',
    //   'animation-timing-function',
    //   'animation-delay',
    //   'animation-iteration-count',
    //   'animation-direction',
    //   'animation-fill-mode',
    //   'fill',
    //   'stroke'
    // ]
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
