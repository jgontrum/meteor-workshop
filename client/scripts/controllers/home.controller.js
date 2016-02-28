angular
    .module('App')
    .controller('HomeCtrl', HomeCtrl);

function HomeCtrl($scope, $reactive) {
    $reactive(this).attach($scope);

    this.subscribe('placeholder');

    $scope.helpers({
        isLoggedIn: () => {
            return Meteor.userId() !== null;
        },
        tasks: () => {
            return Placeholder.find({});
        }
    });

    $scope.addNewTask = function(newTaskName) {
        if (!!newTaskName) {
            Meteor.call("addNewTask", newTaskName);
        }
    };

    $scope.updateTask = function(task) {
        console.log(task);
        if (!!task) {
            Meteor.call("updateTask", task);
        }
    };
}
