// TODO : créer un router pour se connecter à la db
// TODO : Get la liste des users dans la collection users

// module express
const { Router } = require("express");
// connexion db
const { connectToDatabase } = require("../database/database-connection");
// module router > usersRouter
const usersRouter = Router();
const ObjectId = require("mongodb").ObjectId;

// GET users
usersRouter.get("/", async (req, res) => {
  const db = await connectToDatabase();
  const usersCollection = db.collection("users");
  const users = await usersCollection.find().toArray();

  //   utiliser pour renvoyer un json
  //   res.send(await users.find().toArray());

  // rendu vers users.mustache avec les data users
  res.render("users", { users });
});

usersRouter.get("/:id", async (req, res) => {
  const db = await connectToDatabase();
  const userId = req.params.id;

  try {
    const user = await db
      .collection("users")
      .findOne({ _id: new ObjectId(userId) });

    if (user) {
      res.render("userDetails", { user });
    } else {
      res.status(404).send("User pas trouvé");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// export usersRouter
exports.usersRouter = usersRouter;
