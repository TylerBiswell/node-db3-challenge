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

function find() {
  return db('schemes');
}

function findById(id) {
    return db('schemes')
      .where({ id })
      .first();
  }

function findSteps(id) {}

function add(schema) {}

function update(changes, id) {}

function remove(id) {}

function addStep(step, scheme_id) {}