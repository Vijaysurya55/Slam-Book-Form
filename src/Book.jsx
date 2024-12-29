import React from "react";
import "./Book.css";

class Book extends React.Component {
  render() {
    return (
      <>
        <body>
          <form className="container">
            <fieldset className="fieldset"><legend className="legend">SLAMBOOK</legend>
            <div className="form-group">
              <label htmlFor="name">NAME</label>
              <input type="text" id="name" name="name" placeholder="Enter name" />
            </div>
            <div className="form-group">
              <label htmlFor="dob">D.O.B</label>
              <input type="date" id="dob" name="dob" />
            </div>
            <div className="form-group">
              <label htmlFor="nickname">NICKNAME</label>
              <input type="text" id="nickname" name="nickname" placeholder="Enter nickname" />
            </div>
            <div className="form-group">
              <label htmlFor="address">ADDRESS</label>
              <input type="text" id="address" name="address" placeholder="Enter address" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">PHONE</label>
              <input type="text" id="phone" name="phone" placeholder="Enter phone number" />
            </div>
            <div className="form-group">
              <label htmlFor="gender">GENDER</label>
              <div className="radio-group">
                <label>
                  <input type="radio" name="gender" value="male" /> Male
                </label>
                <label>
                  <input type="radio" name="gender" value="female" /> Female
                </label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="memo">MEMORIES</label>
              <textarea
                className="textarea"
                id="memo"
                name="memo"
                rows="3"
                placeholder="Enter your special memories"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="favactor">Favourite <br></br>actor(s):</label>
              <div className="checkbox-group">
                <label>
                  <input type="checkbox" /> Vijay
                </label>
                <label>
                  <input type="checkbox" /> Ajith
                </label>
                <label>
                  <input type="checkbox" /> Kamal
                </label>
                <label>
                  <input type="checkbox" /> Rajini
                </label>
                <label>
                  <input type="checkbox" /> Siva
                </label>
                <label>
                  <input type="checkbox" /> Dhanush
                </label>
                <label>
                  <input type="checkbox" /> Surya
                </label>
              </div>
            </div>
            <div className="form-group">
                <label htmlFor="school">School</label>
                <select className="dropdown" name="school" id="school">
                  <option value="">Select School</option>
                  <option value="1">Everest matric Hr. Sec. school</option>
                  <option value="2">Mahatma matric Hr. Sec. school</option>
                  <option value="3">Auxilium matric Hr. Sec. school</option>
                </select>
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
            </fieldset>
          </form>
        </body>
      </>
    );
  }
}

export default Book;
