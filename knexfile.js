'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/warmup_refactor_dev'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/warmup_refactor_test'

  },
  production: {
  }
};
