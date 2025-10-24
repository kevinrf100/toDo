import { type Config } from 'prettier';

const config: Config = {
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
