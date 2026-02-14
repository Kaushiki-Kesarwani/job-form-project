import { useState } from "react";
import "./App.css";

function App() {
  const [gen, setGen] = useState("male");
  const [city, setCity] = useState("Gurgaon");
  const [course, setCourse] = useState("BCA");
  const [experience, setExperience] = useState("5 yrs");
  const [apply, setApply] = useState("Apply");
  return (
    <>
      <h1>Software Engineer - Internship</h1>

      <div className="info">
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          placeholder="Enter name"
          id="name"
          className="detail bg"
        />
      </div>

      <div className="info">
        <label htmlFor="email">E-mail : </label>
        <input
          type="text"
          placeholder="E-mail"
          id="email"
          className="detail bg"
        />
      </div>

      <div className="info">
        <label htmlFor="contact">Contact no : </label>
        <input
          type="text"
          placeholder="Phone number "
          id="contact"
          className="detail h2 bg"
        />
      </div>

      <h3>Select Gender</h3>
      <div className="gen">
        <div>
          <input
            type="radio"
            id="male"
            name="gender"
            onChange={(e) => setGen(e.target.value)}
            checked={gen == "male"}
            value="male"
          />
          <label htmlFor="male">male</label>
        </div>

        <div>
          <input
            type="radio"
            id="female"
            name="gender"
            onChange={(e) => setGen(e.target.value)}
            checked={gen == "female"}
            value="female"
          />
          <label htmlFor="female">female</label>
        </div>

        <div>
          <input
            type="radio"
            name="gender"
            id="other"
            onChange={(e) => setGen(e.target.value)}
            checked={gen == "other"}
            value="other"
          />
          <label htmlFor="other">other</label>
        </div>

        <div>
          <input
            type="radio"
            name="gender"
            id="notSpecified"
            onChange={(e) => setGen(e.target.value)}
            checked={gen == "notSpecified"}
            value="not specified"
          />
          <label htmlFor="notSpecified">not specified</label>
        </div>
      </div>

      <h2 className="h2">Selected Gender : {gen}</h2>

      <h3>Select city</h3>
      <select
        id="city"
        defaultValue="Gurgaon"
        onChange={(e) => setCity(e.target.value)}
        className="select bg"
      >
        <option value="Delhi">Delhi</option>
        <option value="Kolkata">Kolkata</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Chandigardh">Chandigardh</option>
        <option value="Goa">Goa</option>
        <option value="Gurgaon">Gurgaon</option>
        <option value="Noida">Noida</option>
        <option value="Gujrat">Gujrat</option>
      </select>

      <h2 className="h2">Selected City : {city}</h2>

      <h3>Select Specialization</h3>
      <select
        id="Specialization"
        defaultValue="BCA"
        onChange={(e) => setCourse(e.target.value)}
        className="select bg"
      >
        <option value="BCA">BCA</option>
        <option value="B.tech">B.tech</option>
        <option value="MCA">MCA</option>
        <option value="PGDCA">PGDCA</option>
        <option value="DCA">DCA</option>
        <option value="CA">CA</option>
      </select>

      <h2 className="h2">Selected Specialization : {course}</h2>

      <h3>Select Experience</h3>
      <select
        id="Experience"
        className="select bg"
        onChange={(e) => setExperience(e.target.value)}
        defaultValue="5 yrs"
      >
        <option value="Fresher">Fresher</option>
        <option value="0 yrs">0 yrs</option>
        <option value="1 yrs">1 yrs</option>
        <option value="2 yrs">2 yrs</option>
        <option value="3 yrs">3 yrs</option>
        <option value="4 yrs">4 yrs</option>
        <option value="5 yrs">5 yrs</option>
        <option value="6 yrs">6 yrs</option>
      </select>

      <h2 className="h2">Selected Experience : {experience}</h2>

      <button className="btn" onClick={() => setApply("Applied")}>
        {apply}
      </button>

      <div className="newbtn">
        <p>Confirm if your application is submitted : </p>
        <button onClick={() => alert("Application Submitted Succesfully!")}>
          Yes
        </button>
        <button onClick={() => alert("Application not Submitted !")}>No</button>
      </div>
    </>
  );
}

export default App;
