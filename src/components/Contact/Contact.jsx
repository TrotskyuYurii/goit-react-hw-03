import css from "../Contact/Contact.module.css";


const Contact = ({id, name, number, onDeleteContact}) => {

  return (
    <li className={css.ContactLi}>
        <div>
        <p className={css.TextPage}>{name}</p>
        <p className={css.TextPage}>{number}</p>
        </div>
        <div>
            <button type="button" onClick={() => onDeleteContact(id)} >Delete</button>
        </div>
        
    </li>
  )
}

export default Contact