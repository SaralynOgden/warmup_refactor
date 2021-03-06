/* eslint camelcase: 0 */

'use strict';

exports.seed = function(knex) {
  return knex('problems').del()
    .then(() => {
      return knex('problems').insert([{
        id: 1,
        problem_text: 'What does const mean?',
        type: 'js',
        created_at: new Date('2016-10-05 05:07:10 UTC'),
        updated_at: new Date('2016-10-05 05:07:10 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('problems_id_seq', (SELECT MAX(id) FROM problems));"
      );
    });
};
