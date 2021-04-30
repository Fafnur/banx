import * as Dotenv from 'dotenv-webpack';

module.exports = {
  plugins: [
    new Dotenv({
      systemvars: true,
      path: 'apps/russian/cabinet/.env',
    }),
  ],
};
