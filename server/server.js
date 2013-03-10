Meteor.publish("lists", function () {
	return Lists.find({ user: this.userId });
});

Meteor.publish("items", function () {
	return Items.find({ user: this.userId });
});

Meteor.publish("tags", function () {
	return Tags.find({ user: this.userId });
});



//customize accounts-ui so that some profile fields are created 
Accounts.onCreateUser(function(options, user) {
 
  if (!options.profile){
    user.profile = {'name':options.email,'group':''};
	}
  return user;
});