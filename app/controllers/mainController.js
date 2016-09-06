module.exports = {
  getIndexPage: function(req, res) {
      console.log("sending index page...");
      res.sendfile('./public/index.html');
  },
    testiresti: function(req, res) {
        res.send('moro');
    }
};