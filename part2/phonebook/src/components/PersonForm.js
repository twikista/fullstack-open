import React from "react";

const PersonForm = ({
  submitHandler,
  nameHandler,
  newName,
  phoneNumberHandler,
  newNumber,
}) => {
  return (
    <form onSubmit={submitHandler}>
      <div>
        number:
        <input
          type="text"
          onChange={nameHandler}
          value={newName}
          placeholder="Enter name"
          name="name"
        />
      </div>
      <div>
        name:{" "}
        <input
          type="number"
          onChange={phoneNumberHandler}
          value={newNumber}
          placeholder="Enter phone number"
          name="phonenumber"
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
