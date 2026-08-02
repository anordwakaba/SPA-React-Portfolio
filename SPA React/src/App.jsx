 import { useState } from "react";
import "./App.css";

import ProjectHeader from "./components/ProjectHeader";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";

import { StarterProject } from "./Data";

function App() {
  const [projects, setProjects] = useState(StarterProject);
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <ProjectHeader />

      <div className="form-container">
        <ProjectForm
          projects={projects}
          setProjects={setProjects}
        />
      </div>

      <div className="search-container">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />
      </div>

      <div className="project-container">
        <ProjectList projects={filteredProjects} />
      </div>
    </div>
  );
}

export default App;