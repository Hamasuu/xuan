var users = [
    {
        id: 1,
        name: 'Tom',
    },
    {
        id: 2,
        name: 'Jerry',
    },

]
var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'I will catch you'
    },
    {
        id: 2,
        user_id: 2,
        content: 'Ok',
    },
]
function getComment() {
    return new Promise(function(resolve){
        setTimeout(function() {
            resolve(comments)
        },1000)
    })
}
function getUserByIds(userIds) {
    return new Promise(function(resolve) {
        var result = users.filter(function(user) {
            return userIds.includes(user.id)
        })
        setTimeout(function() {
            resolve(result)
        },1000)
    })
}

 getComment()
    .then(function(comments) {
        var userIds = comments.map(function(comments) {
            return comments.user_id
        })
       return getUserByIds(userIds)
            .then(function(users) {
                return {
                    users: users,
                    comments: comments,
                }
        })
    })
    .then(function(data) {
        var commentBlock = document.querySelector('.comment-box')
        var html = ''
        data.comments.forEach(function(comment) {
            var user = data.users.find(function(user) {
                return user.id === comment.user_id
            })
            html += `<li>${user.name}: ${comment.content}</li>`
        })
        commentBlock.innerHTML = html
    })

