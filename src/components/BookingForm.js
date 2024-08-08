// now let's design booking form

import React from 'react';

const BookingForm = (props) => {
    const [date, setDate] = useSate(:"");
    const [times, setTimes] = useSate("");
    const [guests, setGuest] = useSate("");
    const [occasion, setOccassion] = useSate("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
        
    }
   
    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
    return (
        <header>
            <section>
                <form>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose Date</label>
                            <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} type='date' required/>
                        </div>
                        
                        {/* for time selection */}
                        <div>
                        <label htmlFor='book-time'>Choose Time:</label>
                        <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)}>
                            <option value="">Select a Time</option>
                            {
                                props.avaailableTimes.avaailableTimes.map(avaailableTimes => {return <option key= 
                                    {avaailableTimes}>{availableTimes}</option>})
                            }
                        </select>
                        </div>
                        {/* for number of guests */}
                        <div>
                        <label htmlFor='book-guests'>Number of Guests:</label>
                        <input id="book-guests" min='1' value={guests} onChange={(e) => setGuest(e.target.value)}/>
                        </div>
                    
                    {/* Octation field */}
                    <div>
                    <label htmlFor='book-occassion'>Occassion:</label>
                    <select id='book-occassion' key={occasion} key={occasion} onChange={(e) => setOccassion(e.target.value)}>
                            <option value="">Birthday</option>
                            <option value="">Anniversary</option>
                        </select>
                    </div>
                    {/* submit button */}
                    <div className='btnReceive'>
                        <input aria-label='On Click' type='submit' value={"Make Your Reservation"}/>
                    </div>
                    </fieldset>

                </form>
            </section>
        </header>
    ):
}:

export default BookingForm;