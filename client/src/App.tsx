import { useState } from 'react';
import './App.css';
import SearchForm from './components/searchForm/SearchForm';
import Card from './components/card/Card';
import { FlightData } from './components/interface';

function App(): JSX.Element {

    const [backendData, setBackendData] = useState<FlightData[]>([]);

    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Flight Tracker</h1>
        </header>

        <div className='App-body'>
          <SearchForm setBackendData={setBackendData} />
        </div>

        { <div className='App-body-cards'>
            {
              backendData?.map((flight, i) => {
                return (
                  <Card key={i} flight={flight} />
                );
              })
            }
        </div> }

      </div>
    );
  }

export default App;
