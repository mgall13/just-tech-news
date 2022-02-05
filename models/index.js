const User = require('./User');

const Post = require('./Post');

// Create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// Reverse association
Post.belongsTo(User, {
    foreignKey: 'user_id',
})

module.exports = { User, Post };
