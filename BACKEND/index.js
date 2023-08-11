const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");

const sequelize = require("./utils/database");

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.static(path.join(process.cwd(), "public")));

const errorController = require("./controller/404");

const bookingRouter = require("./router/booking");

app.use(bookingRouter);

app.use(errorController.get404);

sequelize
  .sync()
  .then(() => {
    app.listen(5000, () => {
      //   console.log(res);
      console.log("Server is running ");
    });
  })
  .catch((err) => console.log(err.message));
