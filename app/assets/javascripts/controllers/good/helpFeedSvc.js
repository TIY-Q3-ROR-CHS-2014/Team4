angular.module("helpFeed")
    .factory("helpFeedSvc", function ($rootScope, $log, $http) {

      var urlHelp = "/users/:user_id/posts";

      var getHelps = function () {
        return $http.get(urlHelp);
      };

      var getHelp = function (id) {
        return $http.get(urlHelp + "/" + id);
      };

      var addHelp = function (help) {
      $http.post(urlHelp + "/", help).then(function (response) {
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
