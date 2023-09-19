const user = require('../Models/userData');

async function deleteUser(req, res) {
console.log(req.params.userID);
  try {
    const result = await user.findByIdAndDelete(req.params.userID);
    if (result) {
      res.send({ message: "User deleted successfully" });
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send({ message: "Internal Server Error", error: error });
  }
}
module.exports = { deleteUser };
