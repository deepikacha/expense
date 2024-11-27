const User = require('../models/user');

exports.getUser = (req, res, next) => {
    // Fetch all users from the database
    User.findAll()
        .then(users => {
            // Render the user-list view with the users data
            res.render('user-list', {
                users: users,  // Pass the users array to the view
                pageTitle: 'User List',
                path: '/users'
            });
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error fetching users');
        });
};

exports.postAddUser=(req,res,next)=>{
    const amount=req.body.amount;
    const description=req.body.description;
    const category=req.body.category;
  
    User.create({
        amount:amount,
        description:description,
        category:category
    })
    .then((result)=>
        {console.log('user created')
            res.redirect('/users')
        })

    .catch((err)=>console.log(err))
}

exports.postDeleteUser=(req,res,next)=>{
    const userId=req.body.userId;
    User.findByPk(userId)
    .then(user=>{
        return user.destroy()
    })
    .then((result)=>{
        console.log('user destroyed')
        res.redirect('/')
    })
    .catch((err)=>console.log(err))
}

