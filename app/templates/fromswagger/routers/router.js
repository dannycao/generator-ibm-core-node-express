var express = require('express');

module.exports = function(app, basepath) {
  var router = express.Router();

<% if (routes) { -%>
<%   routes.forEach(function (route) { -%>
  router.<%- route.method %>('<%- route.route %>', function (req, res, next) {
    res.json({});
  })

<%   }); -%>
  app.use(basepath, router);
<% } -%>
}

