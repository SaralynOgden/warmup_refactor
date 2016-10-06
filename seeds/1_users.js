/* eslint camelcase: 0 */

'use strict';

exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        id: 1,
        first_name: 'Metta',
        last_name: 'Crouse',
        github_username: 'mtcrouse',
        is_instructor: false,
        hashed_password: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        created_at: new Date('2016-10-05 05:07:10 UTC'),
        updated_at: new Date('2016-10-05 05:07:10 UTC')
      }, {
        id: 2,
        first_name: 'Samuel',
        last_name: 'Kurland',
        github_username: 'smk291',
        is_instructor: false,
        hashed_password: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        created_at: new Date('2016-10-05 05:07:10 UTC'),
        updated_at: new Date('2016-10-05 05:07:10 UTC')
      }, {
        id: 3,
        first_name: 'Saralyn',
        last_name: 'Ogden',
        github_username: 'SaralynOgden',
        is_instructor: false,
        hashed_password: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        created_at: new Date('2016-10-05 05:07:10 UTC'),
        updated_at: new Date('2016-10-05 05:07:10 UTC')
      }, {
        id: 4,
        first_name: 'Ken',
        last_name: 'McGrady',
        github_username: 'kmcgrady',
        is_instructor: true,
        hashed_password: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        created_at: new Date('2016-10-05 05:07:10 UTC'),
        updated_at: new Date('2016-10-05 05:07:10 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      );
    });
};
