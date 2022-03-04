const getSearchParams = (filter) => {
  const params = new URLSearchParams();
  for (let key of Object.keys(filter)) {
    if (filter[key] !== null) {
      params.append(key, filter[key]);
    }
  }
  return params;
};

export { getSearchParams };
