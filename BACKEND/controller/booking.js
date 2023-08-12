const User = require("../model/users");

exports.getUsers = (req, res, next) => {
  //   console.log(req.body);
  User.findAll()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => console.log(err.message));
};

exports.newUser = (req, res, next) => {
  res.json({ id: 4 });
};

exports.postAddUser = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  User.create({
    name: name,
    email: email,
    phone: phone,
  })
    .then((user) => {
      // console.log(user);
      res.json(user);
    })
    .catch((err) => console.log(err.message));
};

// exports.getEditUser = (req, res, next) => {
//   const editMode = req.query.edit;
//   if (!editMode) {
//     return res.redirect("/");
//   }
//   const userId = req.params.userId;

//   User.findAll({ where: { id: userId } })
//     .then((user) => {
//       if (!user[0]) {
//         return res.redirect("/");
//       }
//       res.render("add-user", {
//         editing: editMode,
//         pageTitle: "Edit User",
//         path: "/add-user",
//         user: user[0],
//       });
//     })
//     .catch((err) => console.log(err.message));
// };

exports.postEditUser = (req, res, next) => {
  const userId = req.params.userId;
  const updateName = req.body.name;
  const updateEmail = req.body.email;
  const updatePhone = req.body.phone;
  User.update(
    {
      name: updateName,
      email: updateEmail,
      phone: updatePhone,
    },
    { where: { id: userId } }
  )
    .then((user) => {
      console.log("user updated");
      res.json({
        id: userId,
        name: updateName,
        email: updateEmail,
        phone: updatePhone,
      });
    })
    .catch((err) => console.log(err.message));
};

exports.deleteUser = (req, res, next) => {
  const userId = req.params.userId;
  User.destroy({ where: { id: userId } })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => console.log(err.message));
};
