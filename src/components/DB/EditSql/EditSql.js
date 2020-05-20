import React from "react";
import "./EditSql.css";
import EditForm from "./EditForm";

function EditSql(props) {
  return (
    <div id="edit-container">
      <EditForm {...props} />
    </div>
  );
}

export default EditSql;
