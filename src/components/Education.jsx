import { useState } from "react";
import useForm from "../hooks/useForm";

function Education() {
  const { formData, isEditing, handleChange, handleSubmit, handleEdit } =
    useForm({
      school: "",
      title: "",
      date: "",
    });

  return (
    <section>
      <h2>Education</h2>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label>
            School
            <input
              type="text"
              name="school"
              value={formData.school}
              onChange={handleChange}
            />
          </label>
          <label>
            Title of Study
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </label>
          <label>
            Date of Study
            <input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>School: {formData.school}</p>
          <p>Title: {formData.title}</p>
          <p>Date: {formData.date}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </section>
  );
}

export default Education;
