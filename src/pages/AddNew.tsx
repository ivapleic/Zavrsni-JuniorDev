import { useState } from "react";
import "../styles/AddNew.css";
import axios from "axios";

function AddNew() {
  const [newAnimal, setNewAnimal] = useState({
    name: "",
    type: "",
    years: "",
    gender: "",
    chip: false,
    adopted: false,
    image: "",
    examination: "",
    description: "",
  });

  const handleChange = (event: any) => {
    const { name, type, checked, value } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setNewAnimal({ ...newAnimal, [name]: newValue });
  };

  const handleSubmit = async (e: any) => {
    alert("USPJEŠNO STE DODALI NOVU ŽIVOTINJU NA POPIS!");
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/animals",
        newAnimal,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setNewAnimal({
        name: "",
        type: "",
        years: "",
        gender: "",
        chip: false,
        adopted: false,
        image: "",
        examination: "",
        description: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="add-new">
      <div className="heading">
        {" "}
        <h1>Dodaj novu životinju</h1>
      </div>
      <form className="form-add-new" onSubmit={handleSubmit}>
        <div className="text-add">
          <h2>Ispunite podatke za novu životinju</h2>
        </div>
        <div className="first-two-divs">
          <div className="first-div">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={newAnimal.name}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Type:
              <select
                name="type"
                value={newAnimal.type}
                onChange={handleChange}
              >
                <option value="">---</option>
                <option value="pas">pas</option>
                <option value="mačka">mačka</option>
                <option value="zec">zec</option>
              </select>
            </label>
            <br />
            <br />
            <label>
              Gender:
              <select
                name="gender"
                value={newAnimal.gender}
                onChange={handleChange}
              >
                <option value="">---</option>
                <option value="mužjak">mužjak</option>
                <option value="ženka">ženka</option>
              </select>
            </label>
            <br />
            <label>
              Years:
              <input
                type="text"
                name="years"
                value={newAnimal.years}
                onChange={handleChange}
              />
            </label>
            <br />
          </div>
          <div className="second-div">
            <label>
              Last examination:
              <input
                type="date"
                name="examination"
                value={newAnimal.examination}
                onChange={handleChange}
              />
            </label>

            <br />
            <label>
              Chip:
              <input
                type="checkbox"
                name="chip"
                checked={newAnimal.chip}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Image URL:
              <input
                type="text"
                name="image"
                value={newAnimal.image}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Napomena:
              <input
                type="textbox"
                name="description"
                value={newAnimal.description}
                onChange={handleChange}
                className="napomena"
              />
            </label>
            <br />
          </div>
        </div>
        <button type="submit">Dodaj životinju</button>
      </form>
    </div>
  );
}

export default AddNew;
