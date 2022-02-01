const router = require('express').Router();
const { User } = require('../../models');

// GET /api/users
router.get('/', (req, res) => {
    // Access our User model and run .findAll() method
    User.findAll({
        attributes: { exclude: ['password']}
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
    });
});

// GET /api/users/1
router.get('/:id', (req, res) => {
    // find one user
    User.findOne({
        where: {
            id: req.params.id
        },
        attributes: {
            exclude: ['password']
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    });
});

// POST /api/users
router.post('/', (req, res) => {
    // expects {username: 'example', email: 'example@gmail', password: 'password'}
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    });
});

// PUT /api/users/1
router.put('/:id', (req, res) => {
    // expects {username: 'username', email: 'email@gmail.com', password: 'password'}

    // if req.body has exact key/value pairs to match the model, you can just use req.body instead
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if (!dbUserData[0]) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err);
    });
});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'ID value does not exist!'});
            return;
        }
    res.status(dbUserData);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    });
});

module.exports = router;