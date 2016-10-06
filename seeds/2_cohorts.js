/* eslint camelcase: 0 */

'use strict';

exports.seed = function(knex) {
  return knex('programs').del()
    .then(() => {
      return knex('programs').insert([{
        id: 1,
        start_date: 'August 2016',
        end_date: 'January 2017',
        number_of_students: 16,
        type: 'web development immersive',
        lead_instructor: 'Ken McGrady',
        cohort_number: 34,
        location: 'Seattle',
        created_at: new Date('2016-10-05 05:07:10 UTC'),
        updated_at: new Date('2016-10-05 05:07:10 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('programs_id_seq', (SELECT MAX(id) FROM programs));"
      );
    });
};
