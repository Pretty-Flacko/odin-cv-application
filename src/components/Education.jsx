import { useState } from "react";

function Education() {
  const [formData, setFormData] = useState({
    school: "",
    title: "",
    date: "",
  });

  const [isEditing, setIsEditing] = useState(true);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsEditing(false);
  }

  function handleEdit() {
    setIsEditing(true);
  }

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
