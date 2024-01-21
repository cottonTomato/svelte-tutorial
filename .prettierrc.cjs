/** @type {import("prettier").Config} */
module.exports = {
  singleQuote: true,
  tabWidth: 2,
  plugins: ['prettier-plugin-svelte'],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
};
