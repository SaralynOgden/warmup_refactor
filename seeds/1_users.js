/* eslint camelcase: 0 */

'use strict';

exports.seed = function(knex) {
  return knex('students').del()
    .then(() => {
      return knex('students').insert([{
        id: 1,
        first_name: 'Metta',
        last_name: 'Crouse',
        github_username: 'mtcrouse',
        hashed_password: '32fdc12d2e187811af0d771e6c29e1a0a3a356b6',
        created_at: new Date('2016-10-05 05:07:10 UTC'),
        updated_at: new Date('2016-10-05 05:07:10 UTC')
      }, {
        id: 2,
        first_name: 'Samuel',
        last_name: 'Kurland',
        github_username: 'smk291',
        hashed_password: 'f16bed56189e249fe4ca8ed10a1ecae60e8ceac0',
        created_at: new Date('2016-10-05 05:07:10 UTC'),
        updated_at: new Date('2016-10-05 05:07:10 UTC')
      }, {
        id: 3,
        first_name: 'Saralyn',
        last_name: 'Ogden',
        github_username: 'SaralynOgden',
        hashed_password: 'b1e4e8ba68f4fcaf2ee1c86c42609c74391454e2',
        created_at: new Date('2016-10-05 05:07:10 UTC'),
        updated_at: new Date('2016-10-05 05:07:10 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('students_id_seq', (SELECT MAX(id) FROM students));"
      );
    });
};
