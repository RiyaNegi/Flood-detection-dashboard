import React from "react";

const Rivers = props => {
  let river = props.river;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ fontWeight: 600 }}>
        Filter Rivers
        <hr style={{ borderTop: "2px solid rgba(0,0,0,.1)" }} />
        <div>
          <input
            type="checkbox"
            name="river"
            value="Ganga"
            onChange={props.onRadioChange}
            checked={river.filter(val => val.includes("Ganga")).length}
          />
          <label style={{ fontWeight: 400 }}>Ganga </label>
        </div>
        <div>
          <input
            type="checkbox"
            name="river"
            value="Godavari"
            onChange={props.onRadioChange}
            checked={river.filter(val => val.includes("Godavari")).length}
          />
          <label style={{ fontWeight: 400 }}>Godavari</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="river"
            value="Narmada"
            onChange={props.onRadioChange}
            checked={river.filter(val => val.includes("Narmada")).length}
          />
          <label style={{ fontWeight: 400 }}>Narmada</label>
        </div>
      </div>
      <div>
        <p style={{ fontSize: 16 }}>
          Select rivers to change flood levels in
          <br /> the map for the respective date.
        </p>
      </div>
    </div>
  );
};

export default Rivers;
