const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("connecting to database"))
  .catch((error) => console.log(error, "not connecting to database"));

//shema
//api
app.get("/", (req, res) => {
  res.send("server is runing ");
});

const usershema = mongoose.Schema({
  firstname: String,
  lastname: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmpassword: String,
  image: String,
});
const mongomodel = mongoose.model("user", usershema);
// for login check
app.post("/", async (req, res) => {
  const bodey = req.body;
  console.log(bodey, "hhhh");

  try {
    const { email } = req.body;
    const data = await mongomodel.findOne({ email: email });
    if (data) {
      const datasend = {
        _id: data._id,
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password,
        confirmpassword: data.confirmpassword,
        image: data.image,
      };
      res.send({ MessageSuccess: "login is valide", data: datasend });
    } else {
      res.send({ MessageFailure: "invalid login from backend" });
    }
  } catch (error) {
    res.status(500).json({ MessageErorr: "Internal server error" });
  }
});

app.listen(PORT, () => console.log("server runing hello  " + PORT));
