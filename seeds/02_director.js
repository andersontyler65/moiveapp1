
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('director').del()
    .then(function () {
      // Inserts seed entries
      return knex('director').insert([
        {id: 1, name: 'Danah', nationality: 'Asian'},
        {id: 2, name: 'Bill', nationality: 'Hispanic'},
        {id: 3, name: 'JJ', nationality: 'Caucasian'}
      ]);
    });
};
