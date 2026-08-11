 import { useState } from "react";

function ProjectForm({ projects, setProjects }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !description || !image) return;

    const newProject = {
      id: Date.now(),
      name: title,
      title: `Project ${projects.length + 1}`,
      description,
      image,
      category: "General",
    };

    setProjects([...projects, newProject]);

    setTitle("");
    setDescription("");
    setImage("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Project</h2>

      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          placeholder="Project title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          placeholder="Project description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <div className="form-group">
        <label>Image URL</label>
        <input
          type="url"
          placeholder="https://example.com/image.jpg"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <button type="submit">Add</button>
    </form>
  );
}

export default ProjectForm;