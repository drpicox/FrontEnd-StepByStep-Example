import { connect } from 'react-redux';

import { setSearch } from '../actions';
import { getSearch } from '../selectors';

import Search from '../components/Search';

function mapStateToProps(state) {
  return {
    search: getSearch(state),
  };
}

const mapDispatchToProps = {
  setSearch,
};

const CurrentSearch = connect(mapStateToProps, mapDispatchToProps)(Search);

export default CurrentSearch;
