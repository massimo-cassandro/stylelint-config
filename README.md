# Stylelint config

My [stylelint](https://stylelint.io/) config,

Previous versions at <https://github.com/massimo-cassandro/linters-config>.

## Use

Install `styleint` and the other nedeed packages:

```bash
npm install -D @massimo-cassandro/stylelint-config stylelint @stylistic/stylelint-plugin stylelint-config-css-modules stylelint-config-twbs-bootstrap
```

Create a `.stylelintrc.cjs` file (or use any other name you like, following the instructions at <https://stylelint.io/user-guide/configure>) and add:

```javascript
/* eslint-env node */

module.exports = {
  'extends': '@massimo-cassandro/stylelint-config'
};
```

Optionally you can extends your `.stylelintrc` file with other configuration (see <https://stylelint.io/user-guide/configure/#extends>): 

```javascript
/* eslint-env node */

module.exports = {
  'extends': [ 'stylelint-config-recommended', 'stylelint-config-recommended-scss', 'stylelint-order', '@massimo-cassandro/stylelint-config']
};
```

(NB: you don't need to add `stylelint-config-standard` as it is included in [stylelint-config-twbs-bootstrap](https://github.com/twbs/stylelint-config-twbs-bootstrap) )
