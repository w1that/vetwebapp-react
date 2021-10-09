import React, { useState } from "react";
import { toast } from "react-toastify";
import { GenusService } from "../api/genusService";

function AdminConsole() {
  const [input, setInput] = useState("");

  function addGenusHandler() {
    const genusService = new GenusService();
    genusService
      .add({ name: input })
      .then((response) =>
        toast.success("başarıyla eklendi: " + response.data.message)
      );
  }
  return (
    <div>
      <div style={{ padding: "1em", background: "gray" }}>
        <h4>genus name</h4>
        <input onChange={(e) => setInput(e.target.value)}></input>
        <button onClick={addGenusHandler}>add</button>
      </div>
    </div>
  );
}

export default AdminConsole;
