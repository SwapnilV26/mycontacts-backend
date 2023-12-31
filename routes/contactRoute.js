const express = require("express");
const router = express.Router();

const {
  getAllContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);  // this way is used when we want protect all the routes

router.route("/").get(getAllContacts).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

// or we can also use this method for creating route
// router.route("/:id").put(updateContact);
// router.route("/:id").delete(deleteContact);

module.exports = router;
