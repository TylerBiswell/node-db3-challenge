const db = require('../data/db-config');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
  addStep,
};

// find() functionality tested in Insomnia
function find() {
  return db('schemes');
}

// findById(id) functionality tested in Insomnia
function findById(id) {
  return db('schemes')
    .where({ id })
    .first();
}

// findSteps(id) functionality tested in Insomnia
function findSteps(id) {
  return db('steps')
    .join('schemes', 'schemes.id', 'steps.scheme_id')
    .select('steps.id', 'scheme_name', 'step_number', 'instructions')
    .where({ scheme_id: id })
    .orderBy('step_number');
}

// add(schema) functionality tested in Insomnia
function add(schema) {
  return db('schemes')
    .insert(schema)
    .then(ids => findById(ids[0]));
}

// update(changes, id) functionality tested in Insomnia
function update(changes, id) {
  return db('schemes')
    .where({ id })
    .update(changes)
    .then(count => findById(id));
}

// remove(id) functionality tested in Insomnia
function remove(id) {
  return db('schemes')
    .where({ id })
    .del();
}

// addStep(step, scheme_id) functionality tested in Insomnia
function addStep(step, scheme_id) {
    return db('steps')
      .insert({ ...step, scheme_id })
      .then(id => {
        return db('steps').where({ id: id[0] });
      });
  }