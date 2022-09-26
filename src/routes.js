const {
  addNoteHandler,
  showNotesHandler,
  showNoteHandler,
  editNoteHandler,
  deleteNoteHandler,
} = require('./handler');

const methods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

const routes = [
  {
    method: methods.GET,
    path: '/notes',
    handler: showNotesHandler,
  },
  {
    method: methods.GET,
    path: '/notes/{id}',
    handler: showNoteHandler,
  },
  {
    method: methods.POST,
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: methods.PUT,
    path: '/notes/{id}',
    handler: editNoteHandler,
  },
  {
    method: methods.DELETE,
    path: '/notes/{id}',
    handler: deleteNoteHandler,
  },
];

module.exports = routes;
