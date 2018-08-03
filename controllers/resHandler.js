module.exports = {
  showAll(req, res) {
    // test the format of the request, and send out the appropriate format
    res.render('showAll', { students: res.locals.students });
  },
  handleCreate(req, res) {
    res.redirect('/students');
  },
};
