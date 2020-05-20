import React, { useEffect, useState, useRef } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import "./db.css";

import { CSSTransitionGroup } from "react-transition-group";
import { Fade } from "react-animation-components";
import GridContainer from "./GridContainer/GridContainer";

import Header from "../Header/Header";
import EditSql from "./EditSql/EditSql";

let socket;

function DB({ location }) {
  const [request, setRequest] = useState("select * from DIEM");
  const [columnName, setColumnName] = useState([]);
  const [isEdit, setEdit] = useState(false);
  const [value, setValue] = useState([]);
  const [tableName, setTable] = useState("KHOA");
  const requests = [
    "KHOA",
    "LOP",
    "SINHVIEN",
    "GIANGVIEN",
    "MONHOC",
    "DIEM",
    "GIANGDAY",
  ];

  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    socket = io(ENDPOINT);
    const { name, pass } = queryString.parse(location.search);

    socket.emit("join", { name, pass }, (error) => {
      if (error) return alert(error);
    });

    return () => {
      socket.emit("disconnect");
      socket.disconnect();
    };
  }, [ENDPOINT, location.search]);

  const handleRequest = (e) => {
    const { innerText } = e.target;
    setTable(requests.find((name) => name === innerText));
    setRequest("select * from " + innerText);
  };

  const handleEdit = (e) => setEdit(!isEdit);

  useEffect(() => {
    socket.emit("getRequest", request);
  }, [request]);

  useEffect(() => {
    socket.on("getData", ({ colNames, values }) => {
      setColumnName([...colNames]);
      setValue([...values]);
    });
  }, []);

  return (
    <React.Fragment>
      <Header
        handleRequest={handleRequest}
        requests={requests}
        handleEdit={handleEdit}
      />

      {isEdit ? (
        <EditSql
          columnName={columnName}
          socket={socket}
          handleEdit={handleEdit}
          tableName={tableName}
        />
      ) : columnName.length !== 0 ? (
        <div className="chat-container">
          <GridContainer
            columnName={columnName}
            value={value}
            length={columnName.length}
          />
        </div>
      ) : null}
    </React.Fragment>
  );
}

export default React.memo(DB);
