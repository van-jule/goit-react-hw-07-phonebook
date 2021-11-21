import React from "react";
import styles from "./ContactsList.module.css";
import PropTypes from "prop-types";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import {
  getFilteredContacts,
  isLoadingContacts,
} from "../../redux/contacts/contacts-selectors";
import contactsOperations from "../../redux/contacts/contacts-operations";
import { useEffect } from "react";

export default function ContactsList() {
  const contacts = useSelector(getFilteredContacts);
  const loaderContacts = useSelector(isLoadingContacts);

  const dispatch = useDispatch();
  const onDeleteContact = (id) =>
    dispatch(contactsOperations.deleteContact(id));

  const onfetchContacts = () => dispatch(contactsOperations.fetchContacts());

  useEffect(() => {
    onfetchContacts();
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      {loaderContacts && <h1>Загружаем...</h1>}
      {contacts.length === 0 ? (
        <div> No contacts </div>
      ) : (
        <ul className={styles.list}>
          {contacts.map(({ id, name, number }) => (
            <li key={id} className={styles.item}>
              {name}: {number}
              <button
                className={styles.button}
                type="button"
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
ContactsList.defaultProps = {
  contacts: [],
};

ContactsList.propTypes = {
  onDeleteContact: PropTypes.func,
  contacts: PropTypes.array.isRequired,
};

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: getFilteredContacts(items, filter),
// });

// const mapDispatchToProps = (dispatch) => ({
//   onDeleteContact: (id) => dispatch(contactsActions.deleteContact(id)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
