import { useState } from "react";
import useForm from "../hooks/useForm";

function GeneralInfo() {
  const { formData, isEditing, handleChange, handleSubmit, handleEdit } =
    useForm({
      name: "",
      email: "",
      phone: "",
    });

  return (
    <section>
      <h2>General Information</h2>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Phone: {formData.phone}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </section>
  );
}

export default GeneralInfo;
