/* eslint camelcase: 0 */

'use strict';

exports.seed = function(knex) {
  return knex('instructors_programs').del()
    .then(() => {
      return knex('instructors_programs').insert([{
        id: 1,
        instructor_id: 1,
        program_id: 1,
        created_at: new Date('2016-10-05 05:07:10 UTC'),
        updated_at: new Date('2016-10-05 05:07:10 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('instructors_programs_id_seq', (SELECT MAX(id) FROM instructors_programs));"
      );
    });
};
