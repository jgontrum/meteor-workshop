angular
    .module('App')
    .controller('SettingsCtrl', SettingsCtrl);

function SettingsCtrl($scope, $reactive) {
    $reactive(this).attach($scope);

    this.subscribe('placeholder');

    $scope.helpers({
        isLoggedIn: () => {
            return Meteor.userId() !== null;
        }
    });

    $scope.logOut = function() {
        Meteor.logout();
    };
}
