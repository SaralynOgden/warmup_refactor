/* eslint camelcase: 0 */

'use strict';

exports.seed = function(knex) {
  return knex('solutions').del()
    .then(() => {
      return knex('solutions').insert([{
        id: 1,
        error_id: 1,
        problem_id: 1,
        attempts: 'Not sure what goes here. Is this # of attempts?',
        created_at: new Date('2016-10-05 05:07:10 UTC'),
        updated_at: new Date('2016-10-05 05:07:10 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('solutions_id_seq', (SELECT MAX(id) FROM solutions));"
      );
    });
};
