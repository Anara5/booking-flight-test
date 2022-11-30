import { useState, useEffect } from 'react';
import './App.css';
import SearchForm from './components/searchForm/SearchForm';

function App(): JSX.Element {

    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Flight Tracker</h1>
        </header>

        <div className='App-body'>
          <SearchForm />

        </div>

      </div>
    );
  }

export default App;
