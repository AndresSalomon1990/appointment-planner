import React from "react";

export const ContactPicker = ({ name, contactNames, onChange }) => {
  return (
    <select name={name} onChange={onChange} value={''}>
      <option value={''} key={-1}>No contact selected</option>
      {contactNames.map((contact, index) => <option value={contact} key={`${contact}-${index}`}>{contact}</option>)}
    </select>
  );
};