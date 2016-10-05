/* eslint camelcase: 0 */

'use strict';

exports.seed = function(knex) {
  return knex('activity').del()
    .then(() => {
      return knex('activity').insert([{
        id: 1,
        student_id: 1,
        has_tried: true,
        created_at: new Date('2016-10-05 05:07:10 UTC'),
        updated_at: new Date('2016-10-05 05:07:10 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('activity_id_seq', (SELECT MAX(id) FROM activity));"
      );
    });
};
