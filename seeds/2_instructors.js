/* eslint camelcase: 0 */

'use strict';

exports.seed = function(knex) {
  return knex('instructors').del()
    .then(() => {
      return knex('instructors').insert([{
        id: 1,
        first_name: 'Ken',
        last_name: 'McGrady',
        github_username: 'ken',
        hashed_password: '470bc578162732ac7f9d387d34c4af4ca6e1b6f7',
        is_lead_instructor: true,
        program: 'web development immersive',
        'class': 'g34',
        galvanize_username: 'kenken',
        galvanize_password: 'mcgradymcgrady',
        created_at: new Date('2016-10-05 05:07:10 UTC'),
        updated_at: new Date('2016-10-05 05:07:10 UTC')
      }, {
        id: 2,
        first_name: 'Adam',
        last_name: 'Lichty',
        github_username: 'adam',
        hashed_password: '0e18f44c1fec03ec4083422cb58ba6a09ac4fb2a',
        is_lead_instructor: false,
        program: 'web development immersive',
        'class': 'g34',
        galvanize_username: 'adamadam',
        galvanize_password: 'lichtylichty',
        created_at: new Date('2016-10-05 05:07:10 UTC'),
        updated_at: new Date('2016-10-05 05:07:10 UTC')
      }, {
        id: 3,
        first_name: 'Wale',
        last_name: 'Ogundipe',
        github_username: 'wale',
        hashed_password: 'f16df804cb9f7e2b8a48d5896cec5d28e1547d37',
        is_lead_instructor: false,
        program: 'web development immersive',
        'class': 'g34',
        galvanize_username: 'walewale',
        galvanize_password: 'ogundipeogundipe',
        created_at: new Date('2016-10-05 05:07:10 UTC'),
        updated_at: new Date('2016-10-05 05:07:10 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('instructors_id_seq', (SELECT MAX(id) FROM instructors));"
      );
    });
};
