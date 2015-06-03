/**
 * @ngdoc directive
 * @name    angular.alert.messages:angularAlertMessages
 *
 * @restrict E
 *
 * @description
 * The 'angularAlertMessages' directive is used to display a floating notification area that will
 * display any alerts sent to the message-service
 *
 * @element ANY
 * @required
 *
 */
(function(){
    'use strict';

    angular
        .module('angular.alert.messages')
        .directive('angularAlertMessages', angularAlertMessages);


    /* @ngInject */
    function angularAlertMessages() {
        var directive = {
            restrict: 'E',
            scope: {
                address: '='
            },
            templateUrl: 'alertMessages/alertMessages.html',

            controller: 'AlertMessagesController',
            controllerAs: 'vm',
            bindToController: true // because the scope is isolated

        };
        return directive;
    }
})();
