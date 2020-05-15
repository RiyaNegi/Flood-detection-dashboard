import React from "react";

const Rivers = props => {
  let river = props.river;

  return (
    <div>
      <div>
        <input
          type="checkbox"
          name="river"
          value="Ganga"
          onChange={props.onRadioChange}
          checked={river.filter(val => val.includes("Ganga")).length}
        />
        <label style={{ fontWeight: 600 }}>Ganga </label>
      </div>

      <div>
        <input
          type="checkbox"
          name="river"
          value="Godavari"
          onChange={props.onRadioChange}
          checked={river.filter(val => val.includes("Godavari")).length}
        />
        <label style={{ fontWeight: 600 }}>Godavari</label>
      </div>

      <div>
        <input
          type="checkbox"
          name="river"
          value="Narmada"
          onChange={props.onRadioChange}
          checked={river.filter(val => val.includes("Narmada")).length}
        />
        <label style={{ fontWeight: 600 }}>Narmada</label>
      </div>
    </div>
  );
};

export default Rivers;
