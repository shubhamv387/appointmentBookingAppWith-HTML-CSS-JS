const express = require("express");

const router = express.Router();

const bookingController = require("../controller/booking");

router.get("/", bookingController.getUsers);

router.get("/new-user", bookingController.newUser);

router.post("/add-user", bookingController.postAddUser);

// router.post("/edit-user/:userId", bookingController.getEditUser);

router.use("/edit-user/:userId", bookingController.postEditUser);

router.use("/delete-user/:userId", bookingController.deleteUser);

module.exports = router;
