//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getAllContacts = (req, res) => {
  res.status(200).send("Get all contacts");
};

//@desc Get particular contact
//@route GET /api/contacts
//@access public
const getContact = (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

//@desc Create new contact
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
    console.log(req.body)
  res.status(201).send("Create contact");
};

//@desc Update contact
//@route PUT /api/contacts
//@access public
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
};

//@desc Delete new contact
//@route DELETE /api/contacts
//@access public
const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
};

module.exports = {
  getAllContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
