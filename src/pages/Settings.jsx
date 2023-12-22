import React from "react";
import "../styles/settings.css";
import axios from 'axios'

const Settings = () => {

  const sendData = async ()=>{
    try {
      
      const liveIn = document.getElementById('add_1').value;
      const street = document.getElementById('add_2').value;

      const email = document.getElementById('email').value;
      const phoneNumber = document.getElementById('num').value;
      const dateOfBirth = document.getElementById('dob').value;
      const gender = document.getElementById('gender').value;
      const address = street + ', ' + liveIn;
      
      const formData = { address , email, phoneNumber, dateOfBirth, gender };
      
      const response = await axios.post('http://localhost:8000/addData', formData);
      if(response.status){
        alert('data added successfully');
      }
      
    } catch (error) {

      console.error('Error:', error.message);
      
    }
  }
  return (
    <div className="settings">
      <div className="settings__wrapper">
        <h2 className="settings__title">Settings</h2>

        <div className="settings__top">

          <button className="setting__btn active__btn">Profile</button>
        </div>

        <div className="details__form">
          <h2 className="profile__title">Profile</h2>
          <p className="profile__desc">
            Add personal details here
          </p>
          
            <div className="form__group">
              <div>
                <label>Live in</label>
                <input type="text" placeholder="Mumbai, India" id="add_1" />
              </div>

              <div>
                <label>Address</label>
                <input type="text" placeholder="Enter address" id="add_2"/>
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Email</label>
                <input type="email" placeholder="example@gmail.com" id="email"/>
              </div>

              <div>
                <label>Phone Number</label>
                <input type="number" placeholder="+91 17*******" id="num"/>
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Date of Birth</label>
                <input type="date" placeholder="dd/mm/yyyy" id="dob"/>
              </div>

              <div>
                <label>Gender</label>
                <input type="text" placeholder="Enter your Gender" id="gender"/>
              </div>
            </div>

            <div className="form__group">

              <div className="profile__img-btns">
                
                <button className="update__btn" onClick={sendData}>Submit</button>
              </div>
              
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Settings;
