import { useState } from "react";
import { fakeSearch } from "./api";

export const SearchBox = () => {
  const [query, setQuery] = useState();
  const [searchResult, setSearchResult] = useState([]);
  const handleOnChange = (val) => {
    setQuery(val);
    fakeSearch(val).then((result) => {
      setSearchResult(result);
    });
  };
  const Item = ({ value }) => {
    return [...value].map((char, index) => {
      const start = value.indexOf(query);
      if (start >= 0) {
        const end = start + query.length - 1;
        if (index >= start && index <= end) {
          return <span style={{ color: "green" }}>{char}</span>;
        }
      }
      return char;
    });
  };
  return (
    <div>
      <input value={query} onChange={(e) => handleOnChange(e.target.value)} />
      <ul>
        {searchResult.map((str) => (
          <li>
            <Item value={str} />
          </li>
        ))}
      </ul>
    </div>
  );
};
