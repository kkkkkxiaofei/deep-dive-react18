import { useState, Suspense, useMemo } from "react";
import { useResource } from "./useResource";

const SearchResult = ({ query = "" }) => {
  const autosuggestions = useResource(query);

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
    <ul>
      {autosuggestions.map((str) => (
        <li>
          <Item value={str} />
        </li>
      ))}
    </ul>
  );
};

export const SearchBox = () => {
  const [query, setQuery] = useState();
  const handleOnChange = (val) => {
    setQuery(val);
  };
  const searchResult = useMemo(() => <SearchResult query={query} />, [query]);
  return (
    <div>
      <input value={query} onChange={(e) => handleOnChange(e.target.value)} />
      <Suspense fallback={<div>loading...</div>}>{searchResult}</Suspense>
    </div>
  );
};
