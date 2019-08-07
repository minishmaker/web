module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'indent': 'off',
    'semi': ['warn', 'always'],
    'vue/html-closing-bracket-newline': 'off',
    'vue/html-self-closing': 'off',
    'comma-dangle': ['warn', 'always'],
    'no-console': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
  },
};
