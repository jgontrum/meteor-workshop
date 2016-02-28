angular
    .module('App')
    .controller('HomeCtrl', HomeCtrl);

function HomeCtrl($scope, $reactive) {
    $reactive(this).attach($scope);

    this.subscribe('placeholder');

    $scope.helpers({
        isLoggedIn: () => {
            return Meteor.userId() !== null;
        }
    });
}
