import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";

const ContactList = ({ usersContact }) => {

  console.log(usersContact);

  return (
    <div>
      <ul className={css.ContactListUl}>
        {usersContact.map(usersContactItem => (
          <Contact key={usersContactItem.id} name={usersContactItem.name} number={usersContactItem.number} />
        ))}
      </ul>
    </div>
  )
}

export default ContactList