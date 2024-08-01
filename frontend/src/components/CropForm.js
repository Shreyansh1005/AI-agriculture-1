import React, { useState } from 'react';
import axios from 'axios';
import './formStyle.css';

const CropForm = () => {
    const [name, setName] = useState('');
    const [temperature, setTemperature] = useState('');
    const [humidity, setHumidity] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        const cropData = { name, temperature, humidity };

        try {
            const response = await axios.post('https://ai-agriculture-backend.onrender.com'
, cropData);
            console.log(response.data);
        } catch (error) {
            console.error('Error submitting crop data:', error);
        }
    };

    return (
        <div className="form-container">
            <h1>Add Crop</h1>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="Crop Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Temperature"
                    value={temperature}
                    onChange={(e) => setTemperature(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Humidity"
                    value={humidity}
                    onChange={(e) => setHumidity(e.target.value)}
                />
            
            <button type='submit' id='form-button'>
  <div class="svg-wrapper-1">
    <div class="svg-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
      </svg>
    </div>
  </div>
  <span>Submit</span>
</button></form>
        </div>
    );
};

export default CropForm;
