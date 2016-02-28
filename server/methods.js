Meteor.methods({
    isValidUser: function(userId) {
        if (userId == this.userId) {
            return true;
        } else {
            throw new Meteor.Error("not-authorized", "This action is not authorized.");
            return false;
        }
    },
    addNewTask: function(newTaskName) {
        if (!!this.userId) {
            Tasks.insert({
                description: newTaskName,
                done: false,
                user: this.userId
            });
        } else {
            throw new Meteor.Error("not-authorized", "This action is not authorized.");
        }
    },
    updateTask: function(task) {
        Tasks.update({_id: task._id}, {
            $set: {
                done: task.done
            }
        })
    }
});
