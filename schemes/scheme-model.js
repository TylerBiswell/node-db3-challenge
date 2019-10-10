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

// FUNCTIONAL
function find() {
  return db('schemes');
}

// FUNCTIONAL
function findById(id) {
  return db('schemes')
    .where({ id })
    .first();
}

// FUNCTIONAL
function findSteps(id) {
  return db('steps')
    .join('schemes', 'schemes.id', 'steps.scheme_id')
    .select('steps.id', 'scheme_name', 'step_number', 'instructions')
    .where({ scheme_id: id })
    .orderBy('step_number');
}

//
function add(schema) {}

//
function update(changes, id) {}

//
function remove(id) {}

//
function addStep(step, scheme_id) {}