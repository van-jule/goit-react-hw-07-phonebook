import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from "./contacts-actions";

axios.defaults.baseURL = "https://6197aefa164fa60017c22d4f.mockapi.io/contacts";

const fetchContacts = createAsyncThunk("contacts/fetchContacts", async () => {
  const contacts = await axios.get("./contacts");
  console.log("contacts", contacts.data);
  return contacts.data;
});

// const fetchContacts = () => async (dispatch) => {
//   dispatch(fetchContactsRequest);

//   try {
//     const { data } = await axios.get("./contacts");
//     dispatch(fetchContactsSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactsError(error));
//   }

//   //   axios
//   //     .get("./contacts")
//   //     .then(({ data }) => dispatch(fetchContactsSuccess(data)))
//   //     .catch((error) => dispatch(fetchContactsError(error)));
// };

// const addContact =
//   ({ name, number }) =>
//   (dispatch) => {
//     const contact = { name, number };

//     dispatch(addContactRequest());

//     axios
//       .post("/contacts", contact)
//       .then(({ data }) => dispatch(addContactSuccess(data)))
//       .catch((error) => dispatch(addContactError(error)));
//   };

const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }) => {
    // const contact = { name, number };
    const response = await axios.post("/contacts", { name, number });
    console.log("response!!! addContact", response);
    return response;
  }
);

const deleteContact = (contactId) => (dispatch) => {
  dispatch(deleteContactRequest());

  axios
    .delete(`contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch((error) => dispatch(deleteContactError(error)));
};

export default {
  addContact,
  deleteContact,
  fetchContacts,
};
