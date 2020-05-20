import React, { useState, useEffect } from "react";
import "./Edit.css";

function Edit(props) {
  const { name, sqlObj, setSqlObj } = props;
  const numberType = ["SISO", "LANTHI", "SOTC", "HOCKI", "DIEMTHI"];
  const [id, setId] = useState("");
  const [value, setValue] = useState("");

  const [date, setDate] = useState(new Date("2000-02-06"));

  useEffect(() => {
    if (numberType.includes(id))
      setSqlObj({ ...sqlObj, [name]: parseFloat(value) });
    else if (id === "NGSINH") setSqlObj({ ...sqlObj, [name]: date });
    else setSqlObj({ ...sqlObj, [name]: value });
  }, [value, date]);

  const handleTypes = (e) => {
    const { id, value } = e.target;
    setId(id);
    if (id === "NGSINH") {
      const date = new Date(value);
      const dateString =
        date.getUTCFullYear() +
        "/" +
        ("0" + (date.getUTCMonth() + 1)).slice(-2) +
        "/" +
        ("0" + date.getUTCDate()).slice(-2);
      console.log(dateString);
      setDate(new Date(value));
    }
    setValue(value);
  };

  return (
    <div>
      <label htmlFor={name}>{name}:</label>
      <input
        type={name === "NGSINH" ? "date" : "text"}
        id={name}
        name={name}
        placeholder="Enter value..."
        onChange={(e) => handleTypes(e)}
        value={value}
      />
    </div>
  );
}

export default Edit;
