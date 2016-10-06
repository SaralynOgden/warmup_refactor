/* eslint camelcase: 0 */

'use strict';

exports.seed = function(knex) {
  return knex('cohorts_users').del()
    .then(() => {
      return knex('cohorts_users').insert([{
        id: 1,
        cohort_id: 1,
        user_id: 1,
        is_instructor: false,
        is_lead_instructor: false,
        created_at: new Date('2016-10-05 05:07:10 UTC'),
        updated_at: new Date('2016-10-05 05:07:10 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('cohorts_users_id_seq', (SELECT MAX(id) FROM cohorts_users));"
      );
    });
};
