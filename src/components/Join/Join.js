import React from "react";
import useInput from "../../hooks/useInput";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";

import Button from "@material-ui/core/Button";
import "./Join.css";

function Join() {
  const [name, bindName] = useInput("");
  const [pass, bindPass] = useInput("");

  return (
    <div className="join-container">
      <header className="join-header">
        <h1>
          <FontAwesomeIcon icon={faSmile} /> My DB
        </h1>
      </header>
      <form>
        <div className="join-main">
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter username..."
              required
              {...bindName}
            />
          </div>
          <div className="form-control">
            <label htmlFor="pass">Pass</label>
            <input
              type="password"
              name="pass"
              id="pass"
              placeholder="Enter pass..."
              required
              {...bindPass}
            />
          </div>
          <Link
            to={`/db?name=${name}&pass=${pass}`}
            onClick={(e) => (!name || !pass ? e.preventDefault() : null)}
          >
            <Button
              className="btn"
              variant="contained"
              color="secondary"
              type="submit"
              item
              xs={5}
            >
              Connect
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Join;
