Meteor.methods({
    isValidUser: function(userId) {
        if (userId == this.userId) {
            return true;
        } else {
            throw new Meteor.Error("not-authorized", "This action is not authorized.");
            return false;
        }
    }
});
