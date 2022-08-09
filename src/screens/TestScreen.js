import React from "react";

const TestScreen = () => {
  const [search, setSearch] = React.useState('');

  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div>
      <Search value={search} onChange={handleChange}>
        Rechercher :
      </Search>

      <p>Recherche de {search ? search : '...'}</p>
    </div>
  );
};

const Search = ({ value, onChange, children }) => {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
        />
    </div>
  );
};

export default TestScreen;