(function() {
    'use strict';

    /**
     * All of the general constants used throughout the application
     */
    // ng-inject
    angular.module('angular.alert.messages')
        .constant('appConstants', {

            "alertMessage": {
                "autoCloseDefaultTime" : 6000  // how long the alert message toasts stay open before closing automatically
            }

        });
})();