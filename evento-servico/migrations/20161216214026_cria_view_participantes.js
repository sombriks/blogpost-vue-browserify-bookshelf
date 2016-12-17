
exports.up = (knex, Promise) => {
  return knex.raw("create view vw_participante as select * from pessoa natural join evento_pessoa");
};

exports.down = (knex, Promise) => {
  return knex.raw("drop view vw_participante");
};
