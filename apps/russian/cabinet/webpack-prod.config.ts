import * as Dotenv from 'dotenv-webpack';
import { join } from 'path';

module.exports = {
  plugins: [
    new Dotenv({
      systemvars: true,
      path: 'apps/russian/cabinet/.env',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{ loader: join(__dirname, 'automation-clear-loader.ts') }],
      },
    ],
  },
};
