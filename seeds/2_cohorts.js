/* eslint camelcase: 0 */

'use strict';

exports.seed = function(knex) {
  return knex('cohorts').del()
    .then(() => {
      return knex('cohorts').insert([{
        id: 1,
        name: 'g34',
        location: 'Seattle',
        start_date: new Date('2016-08-08 05:07:10 UTC'),
        end_date: new Date('2017-01-19 05:07:10 UTC'),
        type: 'fs',
        lead_instructor: 'Ken McGrady',
        created_at: new Date('2016-10-05 05:07:10 UTC'),
        updated_at: new Date('2016-10-05 05:07:10 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('cohorts_id_seq', (SELECT MAX(id) FROM cohorts));"
      );
    });
};
