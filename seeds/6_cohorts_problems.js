/* eslint camelcase: 0 */

'use strict';

exports.seed = function(knex) {
  return knex('cohorts_problems').del()
    .then(() => {
      return knex('cohorts_problems').insert([{
        id: 1,
        cohort_id: 1,
        problem_id: 1,
        scheduled_date: new Date('2016-11-05 05:07:10 UTC'),
        scheduled_announcement: new Date('2016-11-02 05:07:10 UTC'),
        created_at: new Date('2016-10-05 05:07:10 UTC'),
        updated_at: new Date('2016-10-05 05:07:10 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('cohorts_problems_id_seq', (SELECT MAX(id) FROM cohorts_problems));"
      );
    });
};
