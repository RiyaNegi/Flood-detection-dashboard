import React from "react";

const Rivers = props => {
  let river = {};
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <input
          type="checkbox"
          name="river"
          value="Ganga"
          onChange={props.onRadioChange}
        />
        Ganga
      </div>

      <div>
        <input
          type="checkbox"
          name="river"
          value="Godavari"
          onChange={props.onRadioChange}
        />
        Godavari
      </div>

      <div>
        <input
          type="checkbox"
          name="river"
          value="Narmada"
          onChange={props.onRadioChange}
        />
        Narmada
      </div>
    </div>
  );
};

export default Rivers;
