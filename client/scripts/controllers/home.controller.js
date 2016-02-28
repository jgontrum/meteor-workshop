angular
    .module('App')
    .controller('HomeCtrl', HomeCtrl);

function HomeCtrl($scope, $reactive) {
    $reactive(this).attach($scope);

    this.subscribe('tasks');

    $scope.helpers({
        isLoggedIn: () => {
            return Meteor.userId() !== null;
        },
        tasks: () => {
            return Tasks.find({});
        }
    });

    $scope.addNewTask = function(newTaskName) {
        if (!!newTaskName) {
            Meteor.call("addNewTask", newTaskName);
        }
    };

    $scope.updateTask = function(task) {
        if (!!task) {
            Meteor.call("updateTask", task);
        }
    };
}
