import css from "../SearchBox/SearchBox.module.css";

const SearchBox = ({onChangeFilter}) => (
  <section>
    <h2>Search users by email or username</h2>
    <input
      type="text"
      placeholder="Search..."
      onChange={onChangeFilter}/>
  </section>
)

export default SearchBox