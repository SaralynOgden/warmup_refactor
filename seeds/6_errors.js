/* eslint camelcase: 0 */

'use strict';

exports.seed = function(knex) {
  return knex('errors').del()
    .then(() => {
      return knex('errors').insert([{
        id: 1,
        problem_id: 1,
        type: 'syntax error',
        created_at: new Date('2016-10-05 05:07:10 UTC'),
        updated_at: new Date('2016-10-05 05:07:10 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('errors_id_seq', (SELECT MAX(id) FROM errors));"
      );
    });
};
