import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppContext } from './context/contextApi'

import Header from "./components/Header";
import Feed from "./components/Feed";
// import LeftNav from "./components/LeftNav";
// import LeftNavmenuItem from "./components/LeftNavmenuItem"
import SearchResult from "./components/SearchResult";
// import SearchResultVideoCard from "./components/SearchResultVideoCard"
// import SuggestionVideoCard from "./components/SuggestionVideoCard";
// import VideoCard from "./components/VideoCard"
import VideoDetails from "./components/VideoDetails"

const App = () => {
  return (
    <AppContext><div>
      hello 
    </div></AppContext>
  )
}

export default App

