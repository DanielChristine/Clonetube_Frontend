import { connectSearchBox } from "react-instantsearch-dom";

const SearchBox = ({ currentRefinement }) => (
  <form noValidate action="" role="search">
    <input type="search" value={currentRefinement} />
    <input type="submit" value="Submit" />
  </form>
);

const CustomSearchBox = connectSearchBox(SearchBox);

export default SearchBox;
