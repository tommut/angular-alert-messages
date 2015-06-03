/**
 * Handles displaying alerts messages sent via the central messageService
 */
(function() {
    'use strict';
    angular.module('angular.alert.messages').controller('AlertMessagesController', AlertMessagesController);

    function AlertMessagesController(messageService) {
        var vm = this;
        vm.alerts = messageService.alerts;
        vm.closeAlert = messageService.closeAlert;
    }
})();
