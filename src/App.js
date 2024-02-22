import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Player from './AppWindows/player';
import Library from './AppWindows/library';
import Liked from './AppWindows/liked';
import Trending from './AppWindows/trending';
import Feed from './AppWindows/feed';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Library/>} />
        <Route path = "/feed" element = {<Feed/>} />
        <Route path = "/liked" element = {<Liked/>} />
        <Route path = "/trending" element = {<Trending/>} />
        <Route path = "/player" element = {<Player/>} />
      </Routes>
    </Router>
  );
}

