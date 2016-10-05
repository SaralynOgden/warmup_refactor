/* eslint camelcase: 0 */

'use strict';

exports.seed = function(knex) {
  return knex('problems_students').del()
    .then(() => {
      return knex('problems_students').insert([{
        id: 1,
        problem_id: 1,
        student_id: 1,
        created_at: new Date('2016-10-05 05:07:10 UTC'),
        updated_at: new Date('2016-10-05 05:07:10 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('problems_students_id_seq', (SELECT MAX(id) FROM problems_students));"
      );
    });
};
