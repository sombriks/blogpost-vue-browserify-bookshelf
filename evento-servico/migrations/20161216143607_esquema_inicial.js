
exports.up = (knex, Promise) => {
  return knex.schema.createTable("evento", (tb) => {
    tb.increments("idevento");
    tb.string("nomeevento").notNullable();
  }).createTable("pessoa", (tb) => {
    tb.increments("idpessoa");
    tb.string("nomepessoa").notNullable();
  }).createTable("evento_pessoa", (tb) => {
    tb.integer("idevento").notNullable();
    tb.integer("idpessoa").notNullable();
    tb.primary(["idevento", "idpessoa"]);
  });
};

exports.down = (knex, Promise) => {
  return knex.schema
    .dropTable("evento_pessoa")
    .dropTable("pessoa")
    .dropTable("evento");
};
