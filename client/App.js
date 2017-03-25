import React from 'react';
import Header from './prescomponents/Header';
import VisiblePreziList from './containers/VisiblePreziList';
import SearchPreziList from './containers/SearchPreziList';
import SortPreziList from './containers/SortPreziList';


const App = () => (
  <div className="app">
    <Header />
    <SearchPreziList />
    <SortPreziList />
    <VisiblePreziList />
  </div>
);

export default App;
