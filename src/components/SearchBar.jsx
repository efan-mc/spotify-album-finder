import { FormControl, InputGroup, Button } from "react-bootstrap";

function SearchBar({ onSearch, searchInput, setSearchInput }) {
  return (
    <InputGroup>
      <FormControl
        placeholder="Search For Artist"
        type="input"
        aria-label="Search for an Artist"
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onSearch();
          }
        }}
        onChange={(event) => setSearchInput(event.target.value)}
        style={{
          width: "300px",
          height: "35px",
          borderWidth: "0px",
          borderStyle: "solid",
          borderRadius: "5px",
          marginRight: "10px",
          paddingLeft: "10px",
        }}
      />
      <Button onClick={onSearch}>Search</Button>
    </InputGroup>
  );
}

export default SearchBar;
