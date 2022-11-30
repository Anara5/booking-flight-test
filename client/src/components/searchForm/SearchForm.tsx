import { SetStateAction, useEffect, useState } from 'react';
import './SearchForm.css';
import { FlightProps } from '../interface';

function SearchForm (): JSX.Element {
    
    const [searchTerm, setSearchTerm] = useState('');
    const [active, setActive] = useState(false);
    const [backendData, setBackendData] = useState<FlightProps[]>([]);

    const toggleRadioOneWay = () => {
        setActive(false);
    };
    const toggleRadioRoundTrip = () => {
        setActive(true);
    };

    const handleChange = (e: { preventDefault: () => void; target: { value: SetStateAction<string>; }; }) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    };

    const searchFlight = async (from: any, to: any) => {
        fetch(`api/from/${from}/to/${to}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((res) => res.json())
        .then((data) => {
            setBackendData(data);
            console.log(data);
        });
    };

    useEffect(() => {
        searchFlight('Amsterdam', 'Oslo');
    }, []);




    return (
        <div className='search-form'>
            <form className='search-form-inputs'>
                <div className='form-radio'>
                    <div onClick={toggleRadioOneWay}>
                        <input type='radio' name='trip' value='one-way' />
                        <label>One Way</label>
                    </div>
                    <div onClick={toggleRadioRoundTrip}>
                        <input type='radio' name='trip' value='round-trip' />
                        <label>Round Trip</label>
                    </div>
                </div>

                <div className='form-destinations'>
                    <div className='form-group'>
                        <label htmlFor='from'>From </label>
                        <input 
                        type='text' 
                        className='form-control'
                        id='from'
                        name='from'
                        placeholder='Enter departure city'
                        list='dataListOptions'
                        onChange={handleChange}
                        />
                        <datalist id='dataListOptions'>
                            {backendData.map((item, index) => (
                                <option key={index} />
                            ))}
                        </datalist>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='to'>To </label>
                        <input 
                        type='text'
                        className='form-control' 
                        id='to'
                        name='to'
                        placeholder='Enter destination city'
                        list='dataListOptions'
                        onChange={handleChange}
                         />
                         <datalist id='dataListOptions'>
                            {backendData.map((item, index) => (
                                <option key={index} />
                            ))}
                        </datalist>
                    </div>
                </div>

                <div className='form-destinations'>
                    <div className='form-group'>
                        <label htmlFor='depart'>Depart </label>
                        <input type='date' className='form-control' id='depart' />
                    </div>
                    {active ? (
                        <div className='form-group'>
                            <label htmlFor='return'>Return </label>
                            <input type='date' className='form-control' id='return' />
                        </div>
                    ) : 'One way' }
                    
                </div>

                <div className='form-passengers'>
                    <label>Adult (12+) </label>
                    <input type='radio' name='adult' />

                    <label>Child (0-12) </label>
                    <input type='radio' name='adult' />
                </div>

                <div className='form-button'>
                    <button type='submit' className='btn btn-primary'>Search</button>
                </div>
            </form>
        </div>
    );
}

export default SearchForm;