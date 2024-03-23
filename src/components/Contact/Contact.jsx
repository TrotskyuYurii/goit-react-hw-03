import css from "../Contact/Contact.module.css";


const Contact = ({name, number}) => {

  return (
    <li className={css.ContactLi}>
        <div>
        <p className={css.TextPage}>{name}</p>
        <p className={css.TextPage}>{number}</p>
        </div>
        <div>
            <button>Delete</button>
        </div>
        
    </li>
  )
}

export default Contact