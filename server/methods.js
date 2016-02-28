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
        Placeholder.insert({
            description: newTaskName,
            done: false
        })
    },
    updateTask: function(task) {
        console.log(task);
        Placeholder.update({_id: task._id}, {
            $set: {
                done: task.done
            }
        })
    }
});
