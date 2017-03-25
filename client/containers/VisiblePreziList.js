import { connect } from 'react-redux';
import PreziList from '../prescomponents/PreziList';

const searchEngie = (prezi, search) => {
  let searchedValue = prezi.filter(element => element.title.indexOf(search) >= 0);
  return searchedValue;
};

const sortList = (prezi, sort) => {
  if (sort === 1) {
    let sortedList = prezi.sort(function(a, b) {
      let  dateA = new Date(a.createdAt);
      let dateB = new Date(b.createdAt)
      return dateA - dateB;
    });
    return sortedList;
  } else {
    return prezi;
  }
};

const mapStateToProps = (state) => {
  return {
    prezises: sortList(searchEngie(state.prezi, state.searchReducer), state.sortReducer),
  };
};

const VisiblePreziList = connect(mapStateToProps, null)(PreziList);

export default VisiblePreziList;
