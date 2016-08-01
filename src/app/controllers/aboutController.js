require('signalr');
var aboutCtrl = function ($scope, $http) {
  var about = this;
  about.hello = "About controller";
  $scope.hello2 = " Scope Hello";


  $(function () {
    var connection = $.hubConnection("http://localhost:8649/signalr", { useDefaultPath: false });
    var chatHubProxy = connection.createHubProxy('myChatHub');

    chatHubProxy.on('getMessage', function (name, message) {
      console.log(name + ' ' + message);
      var encodedName = $('<div />').text(name).html();
      var encodedMsg = $('<div />').text(message).html();
      // Add the message to the page.
      $('#discussion').append('<li><strong>' + encodedName
        + '</strong>:&nbsp;&nbsp;' + encodedMsg + '</li>');
    });

    connection.start().done(function () {
      console.log("Connected, transport = " + connection.transport.name);
      // Wire up Send button to call NewContosoChatMessage on the server.
      $('#sendmessage').click(function () {
        chatHubProxy.invoke('sendMessage', $('#displayname').val(), $('#message').val());
        $('#message').val('').focus();
      });
    });

    $('#displayname').val(prompt('Enter your name:', ''));
    // Set initial focus to message input box.
    $('#message').focus();
  });


  // $http.post('http://localhost:8649/api/services/app/user/GetUsers' , { name:'liuziyuan'})
  //   .success(function (data) {
  //     console.log(data);
  //   });

  // $http.post('http://localhost:8649/api/services/app/user/GetAllUsers')
  // .success(function(data) {
  //   console.log(data);
  // });

  // $http.post('http://localhost:8649/api/services/app/user/CreateUser',{name:'liuziyuan' , address:'dalian'})
  // .success(function(data) {
  //   console.log(data);
  // });
  console.log('This is About controller');
};
aboutCtrl.$inject = ['$scope', '$http'];
module.exports = aboutCtrl;
