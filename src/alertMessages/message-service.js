/**
 * @ngdoc service
 * @name angular.alert.messages:messageService
 *
 * @description
 * Message service provides a way to present common notifications and prompts to the user.
 *
 *
 * @example
 <pre>
 // Notifications
 messageService.info('Informational Notification');
 messageService.success('Successful Notification', 'bottom-right');

 </pre>
 */

(function() {
    'use strict';

    angular.module('angular.alert.messages').service('messageService',function ($injector, $timeout, appConstants) {

        // default close interval (in ms) if none is provided

        // default orientation if none is provided
        var defaultOrientation = 'top-right';

        var alerts = [ ];

        function getDefaultAutomaticCloseTime() {
            var autoCloseDefaultTime = 7000;

            // it's possible that if there is a failure at boostrap time, the configurable constants are not yet
            // loaded, in which case we will use a backup hardcoded value instead
            if ( appConstants.alertMessage ) {
                return appConstants.alertMessage.autoCloseDefaultTime;
            }
            else {
                return autoCloseDefaultTime;
            }
        }

        function addAlert(alert, closeAutomaticallyTime) {
            alerts.push(alert);

            // If specified, close the notification after the given time interval
            if ( closeAutomaticallyTime && closeAutomaticallyTime >= 0 ) {
                $timeout(function () {
                    alerts.splice(alerts.indexOf(alert), 1);
                }, closeAutomaticallyTime);
            }
        }

        return {
            duration: false,

            alerts: alerts,

            closeAlert: function(index) {
                alerts.splice(index, 1);
            },

            /**
             * @ngdoc method
             * @name commons.service:messageService#info
             *
             * @description
             * Present an info notification message to the user.
             *
             * @param text - Message of the notification
             * @param orientation - Can be one of the following ['top-right, 'top, 'top-left', 'center', 'bottom-right',
             * @param closeAfter an optional time interval to close the notification after if the user hasn't already
             * 'bottom', 'bottom-left']. Defaults to 'center'
             */
            info: function(text, orientation, closeAfter) {
                this.show(text, 'info',
                    orientation || defaultOrientation,
                    closeAfter || getDefaultAutomaticCloseTime());
            },

            /**
             * @ngdoc method
             * @name commons.service:messageService#danger
             *
             * @description
             * Present a danger notification message to the user.
             *
             * @param text - Message of the notification
             * @param orientation - Can be one of the following ['top-right, 'top, 'top-left', 'center', 'bottom-right',
             * @param closeAfter an optional time interval to close the notification after if the user hasn't already
             * 'bottom', 'bottom-left']. Defaults to 'center'
             */
            danger: function(text, orientation, closeAfter) {
                this.show(text, 'danger',
                    orientation || defaultOrientation,
                    closeAfter || getDefaultAutomaticCloseTime());
            },

            /**
             * @ngdoc method
             * @name commons.service:messageService#success
             *
             * @description
             * Present a success notification message to the user.
             *
             * @param text - Message of the notification
             * @param orientation - Can be one of the following ['top-right, 'top, 'top-left', 'center', 'bottom-right',
             * @param closeAfter an optional time interval to close the notification after if the user hasn't already
             * 'bottom', 'bottom-left']. Defaults to 'center'
             */
            success: function(text, orientation, closeAfter) {
                this.show(text, 'success',
                    orientation || defaultOrientation,
                    closeAfter || getDefaultAutomaticCloseTime());
            },

            /**
             * @ngdoc method
             * @name commons.service:messageService#warning
             *
             * @description
             * Present a warning notification message to the user.
             *
             * @param text - Message of the notification
             * @param orientation - Can be one of the following ['top-right, 'top, 'top-left', 'center', 'bottom-right',
             * @param closeAfter an optional time interval to close the notification after if the user hasn't already
             * 'bottom', 'bottom-left']. Defaults to 'center'
             */
            warning: function(text, orientation, closeAfter) {
                this.show(text, 'warning',
                    orientation || defaultOrientation,
                    closeAfter || getDefaultAutomaticCloseTime());
            },

            /**
             * @ngdoc method
             * @name commons.service:messageService#show
             *
             * @description
             * Present a notification message to the user.
             *
             * @param text - Message of the notification
             * @param type - Type of message.  Correlates with bootstrap alerts. ['info', 'success', 'warning',
             *     'danger'].
             * @param orientation - Can be one of the following ['top-right, 'top, 'top-left', 'center',
             *     'bottom-right',
             * 'bottom', 'bottom-left']. Defaults to 'center'
             */
            show: function(text, type, orientation, closeAfter) {
                if ( orientation === 'top' ) {
                    type = type + '-centered'; // use centered version of .alert-type class
                }

               var alert = { type: type, msg: text };
               addAlert( alert, closeAfter );
            }


        };
    });

}());