const init = {
    searchQuery: '',
    filterBy: 'all',
  };
  
  const filterReducer = (state = init, action) => {
    switch (action.type) {
      case 'SET_QUERY':
        return {
          ...state,
          searchQuery: action.payload,
        };
      case 'SET_FILTER':
        return {
          ...state,
          filterBy: action.payload,
        };
      default:
        return state;
    }
  };

export const setFilter = filter => ({ type: 'SET_FILTER',payload: filter});
export const setSearchQuery = value => ({ type: 'SET_QUERY', payload: value,});

export default filterReducer
  
  