import { fakeSearch } from "./api";

const wrapPromise = (promiseCall) => {
  let status;
  let result;
  let suspender;
  return {
    read(...args) {
      if (!suspender) {
        status = "pending";
        suspender = promiseCall(...args).then(
          (r) => {
            status = "success";
            result = r;
          },
          (e) => {
            status = "error";
            result = e;
          }
        );
      }
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
};

const resourceMap = {};

const resourceFactory = (scope) => {
  if (resourceMap[scope]) {
    return resourceMap[scope];
  }
  // could wrap more resources here
  const search = wrapPromise(fakeSearch);
  const resource = {
    search
  };
  resourceMap[scope] = resource;
  return resourceMap[scope];
};

export const useResource = (query) => {
  // memo doesn't work here
  // because it is being handled by Suspense
  const resource = resourceFactory(query);
  return resource.search.read(query);
};
