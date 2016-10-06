/* eslint camelcase: 0 */

'use strict';

exports.seed = function(knex) {
  return knex('problem_status').del()
    .then(() => {
      return knex('problem_status').insert([{
        id: 1,
        user_id: 1,
        problem_id: 1,
        progress: 'UNATTEMPTED',
        answer: '',
        created_at: new Date('2016-10-05 05:07:10 UTC'),
        updated_at: new Date('2016-10-05 05:07:10 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('problem_status_id_seq', (SELECT MAX(id) FROM problem_status));"
      );
    });
};
