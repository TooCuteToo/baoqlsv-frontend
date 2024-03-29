import React, { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const bind = {
    onChange: (e) => setValue(e.target.value),
  };

  return [value, bind];
}

export default useInput;
