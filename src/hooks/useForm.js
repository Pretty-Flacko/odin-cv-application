import { useState } from "react";

function useForm(initialState) {
  const [formData, setFormData] = useState(initialState);
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

  return {
    formData,
    isEditing,
    handleChange,
    handleSubmit,
    handleEdit,
  };
}

export default useForm;
