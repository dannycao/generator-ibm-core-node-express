var expect = require('chai').expect;
var http = require('http');

before(function(done){
  require(process.cwd() + '/server/server');
  setTimeout(done, 5000); // Waiting 5 seconds for server to start
  this.timeout(10000);
});

<% if (routes && basepath) {  %>
describe('Testing <%- basepath %><%- routes[0].route%>',function(){
  it('Testing GET for <%- routes[0].route%> route',function(done){
    var responseString = '';

    var options = {
      host: 'localhost',
      port: process.env.PORT || 3000,
      path: '<%- basepath %><%- routes[0].route%>'
    };

    var callback = function(response){
      response.on('data', function (chunk) {
        responseString += chunk;
      });

      response.on('end', function () {
        expect(responseString).to.equal('{}');
        done();
      });
    };

    http.request(options, callback).end();
  });
});
<% } %>

