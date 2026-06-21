import { useState } from "react";
import useForm from "../hooks/useForm";

function Experience() {
  const { formData, isEditing, handleChange, handleSubmit, handleEdit } =
    useForm({
      company: "",
      position: "",
      responsibilities: "",
      from: "",
      until: "",
    });

  return (
    <section className="section">
      <h2>Experience</h2>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label>
            Company
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </label>
          <label>
            Position
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
            />
          </label>
          <label>
            Responsibilites
            <input
              type="text"
              name="responsibilities"
              value={formData.responsibilities}
              onChange={handleChange}
            />
          </label>
          <label>
            From
            <input
              type="date"
              name="from"
              value={formData.from}
              onChange={handleChange}
            />
          </label>
          <label>
            Until
            <input
              type="date"
              name="until"
              value={formData.until}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>
            <strong>Company</strong>: {formData.company}
          </p>
          <p>
            <strong>Position</strong>: {formData.position}
          </p>
          <p>
            <strong>Responsibilities</strong>: {formData.responsibilities}
          </p>
          <p>
            <strong>From</strong>: {formData.from}
          </p>
          <p>
            <strong>Until</strong>: {formData.until}
          </p>

          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </section>
  );
}

export default Experience;
