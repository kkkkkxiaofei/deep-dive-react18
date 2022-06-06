import { useState, Suspense, useMemo, useDeferredValue } from "react";
import { createSearchResource } from "./resourceFactory";

const SearchResult = ({ resource, query = "" }) => {
  const autosuggestions = resource.read();

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

const initResource = createSearchResource();

export const SearchBox = () => {
  const [resource, setResource] = useState(initResource);
  const [query, setQuery] = useState();
  const deferredQuery = useDeferredValue(query);
  const handleOnChange = (val) => {
    // should be automatic batch
    setQuery(val);
    setResource(createSearchResource(val));
  };
  const searchResult = useMemo(
    () => <SearchResult resource={resource} query={deferredQuery} />,
    [deferredQuery]
  );
  return (
    <div>
      <input value={query} onChange={(e) => handleOnChange(e.target.value)} />
      <Suspense fallback={<div>loading...</div>}>{searchResult}</Suspense>
    </div>
  );
};
