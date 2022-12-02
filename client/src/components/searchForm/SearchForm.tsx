import { useState } from 'react';
import './SearchForm.css';
import { SearchFormProps } from '../interface';

const SearchForm = ({ setBackendData }: SearchFormProps) => {
    const [active, setActive] = useState(false);
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [depat, setDepat] = useState('');

    const toggleRadioOneWay = () => {
        setActive(false);
    };
    const toggleRadioRoundTrip = () => {
        setActive(true);
    };

    const searchFlight = () => {
        fetch(`/api/?from=${from}&to=${to}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => {
            setBackendData(data);
        });
    };


    const handled = (e: any) => {
        e.preventDefault();
        if (from && to && depat) {
            searchFlight();
        }
    };

    return (
        <>
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
                        onChange={(e) => {setFrom(e.target.value)}}
                        />
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
                        onChange={(e) => {setTo(e.target.value)}}
                         />
                    </div>
                </div>

                <div className='form-destinations'>
                    <div className='form-group'>
                        <label htmlFor='depart'>Depart </label>
                        <input type='date' className='form-control' id='depart'
                        onChange={(e) => setDepat(e.target.value)}
                        />
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
                    <button type='submit' className='btn btn-primary' onClick={e => handled(e)}>Search</button>
                </div>
            </form>
        </div>
        </>
    );
}

export default SearchForm;