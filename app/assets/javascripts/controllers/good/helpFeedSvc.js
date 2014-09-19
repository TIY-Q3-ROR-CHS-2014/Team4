angular.module("helpFeed")
    .factory("helpFeedSvc", function ($rootScope, $log, $http) {

      var urlHelp = "/users/";

      var getHelps = function () {
        return $http.get("/allposts");
      };

      var getHelp = function (id) {
        return $http.get("/allposts" + "/" + id);
      };

      var addHelp = function (help,id) {
        console.log(help);
      $http.post(urlHelp + id + "/posts", help).then(function (response) {
        $rootScope.$broadcast("help:added");
        $log.info("help:added");
        });
      };


      return {
        getHelps: getHelps,
        getHelp: getHelp,
        addHelp: addHelp,
      };
    });
