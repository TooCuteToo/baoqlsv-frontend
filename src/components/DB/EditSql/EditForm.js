import React, { useState } from "react";
import Edit from "./Edit";

function initialObj(columnName) {
  const obj = {};
  columnName.map((name) => {
    obj[name] = 5;
  });
  return obj;
}

function EditForm(props) {
  const { columnName, socket, handleEdit, tableName } = props;
  const [sqlObj, setSqlObj] = useState(() => initialObj(columnName));

  console.log(sqlObj);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("insertSql", tableName, sqlObj);
    handleEdit();
  };

  const handleRemove = (e) => {
    e.preventDefault();
    socket.emit("removeSql", tableName, sqlObj);
    handleEdit();
  };

  return (
    <div>
      <form>
        {columnName.map((name) => (
          <Edit key={name} name={name} sqlObj={sqlObj} setSqlObj={setSqlObj} />
        ))}
        <input type="submit" value="Submit" onClick={(e) => handleSubmit(e)} />
        <input type="submit" value="Delete" onClick={(e) => handleRemove(e)} />
      </form>
    </div>
  );
}

export default EditForm;
