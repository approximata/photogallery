export const preziLoaded = (prezi) => {
  return {
    type: 'PREZI_LOADED',
    prezi,
  };
};

export const fetchPrezises = (dispatch) => {
  const myInit = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    mode: 'no-cors',
    cache: 'default' };
    const myRequest = 'http://localhost:3000/api';
    fetch(myRequest, myInit)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
         dispatch(preziLoaded(data));
      });
  return {
    type: 'PREZI_LOADING',
  };
};

export const setSearchFilter = (filter) => {
  return {
    type: 'SET_SEARCH_VISIBILITY',
    filter,
  };
};

export const setSort = (value) => {
  return {
    type: 'SET_SORT',
    value,
  };
};
