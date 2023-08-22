import React from 'react';
import { Header } from './components/Header/Header';
import { Searchbar } from './components/Searchbar/Searchbar';
import { Sidebar } from './components/Sidebar/Sidebar';
// import { Videolist } from './components/Videolist/Videolist';

function App() {
  return (
    <>
    <Header />
    <Searchbar />
    {/* <Videolist /> */}
    <Sidebar />
    </>
  );
}
export default App;