import * as Dotenv from 'dotenv-webpack';

module.exports = {
  plugins: [
    new Dotenv({
      path: 'apps/russian/cabinet/.env',
    }),
  ],
};
