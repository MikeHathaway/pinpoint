
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          id: 1,
          name: 'Mike',
          email: 'email@gmail.com',
          hashed_password: '',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          name: 'Elon',
          email: 'otherEmail@gmail.com',
          hashed_password: '',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          name: 'Layla',
          email: 'laylasEmail@gmail.com',
          hashed_password: '',
          created_at: new Date(),
          updated_at: new Date()
        }
      ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      )
    })
}