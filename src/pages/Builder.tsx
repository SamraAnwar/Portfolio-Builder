import { useParams } from "react-router-dom";
import { useState } from "react";
import { templates } from "../data/templates";


function Builder() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [bio, setBio] = useState("");
const [skill, setSkill] = useState("");
const [skills, setSkills] = useState<string[]>([]);
const [projectName, setProjectName] = useState("");
const [projectDescription, setProjectDescription] = useState("");
const [projects, setProjects] = useState<
  { name: string; description: string }[]
>([]);
const [projectError, setProjectError] = useState("");

const addSkill = () =>{
  if (skill.trim() === "")return;
  setSkills([...skills,skill.trim()]);
  setSkill("");
};
const removeSkill = (skillToRemove: string) => {
  setSkills(skills.filter((skill) => skill !== skillToRemove));

};

const addProject = () => {
  if (
    projectName.trim() ==="" ||
    projectDescription.trim() ===""
  ){
    setProjectError("Please fill in all project fields.");
    return;
  }
  setProjectError("");
  setProjects([
    ...projects,{
      name:projectName.trim(),
      description: projectDescription.trim(),
    },
  ]);
  setProjectName("");
  setProjectDescription("");
};

const removeProject = (projectName: string) => {
  setProjects(
    projects.filter((project) => project.name !== projectName)
  );
};

  const { templateId } = useParams();
  const selectedTemplate = templates.find(
    (template) => template.id === templateId
  );
  return (
    <main className="min-h-screen bg-neutral-100">
      <header className="border-b bg-white px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <h1 className="text-xl font-bold">
            Portfolio Builder
          </h1>

          <button className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white">
            Preview
          </button>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-6 lg:grid-cols-[240px_1fr]">

        {/* Sidebar */}
        <aside className="rounded-xl border bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Selected Template
          </p>

          <h2 className="mt-2 text-lg font-bold">
            {selectedTemplate?.name}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {selectedTemplate?.category}
          </p>
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">
              Your Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-black"
            />
            <label className="block text-sm font-medium text-gray-700 mt-4">Your Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Graphic Designer" className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-black" />
            <label className="block text-sm font-medium text-gray-700 mt-4">Your Bio</label>
            <textarea value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Tell us about yourself" className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-black" />
            <label className="block text-sm font-medium text-gray-700 mt-4">Skills</label>
          
            <input
              type="text"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              placeholder="Enter a skill"
              className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-black"
            />
            <button
            type="button"
              onClick={addSkill}
              className="mt-2 rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white"
            >
              Add 
            </button>
            <label className="block text-sm font-medium text-gray-700 mt-4">Project Name</label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Enter project name"
              className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-black"
            />
            <label className="block text-sm font-medium text-gray-700 mt-4">Project Description</label>
            <textarea
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              placeholder="Enter project description"
              className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-black"
            />
            {projectError && (
              <p className="mt-2 text-sm text-red-500">{projectError}</p>
            )}
            <button type ="button" onClick ={addProject} className ="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white">Add Project</button>
           
          </div>

        </aside>

        {/* Preview */}
        <section className="min-h-[600px] rounded-xl border bg-white p-8">
          <div className="flex min-h-[500px] items-center justify-center border border-dashed border-gray-300">
            <div className="text-center">
              <h2 className="text-3xl font-bold">
                {name || "Your Name"}
              </h2>

           <p className="mt-2 text-lg font-medium text-gray-600">
  {title || "Your Professional Title"}
</p>
<p className="mt-4 max-w-md text-gray-500">
  {bio || "Your short professional bio will appear here."}
</p>
<h3 className="mt-6 text-lg font-semibold">
  Skills
</h3>
{skills.length === 0 && (
  <p className="mt-3 text-sm text-gray-400">No skills added yet.</p>
)}
<div className="mt-3 flex flex-wrap justify-center gap-2">
  {skills.map((skill) => (
    <span
      key={skill}
      className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
    >
      {skill}
       <button
        type="button"
        onClick={() => removeSkill(skill)}
        className="font-bold text-gray-500 hover:text-red-500 ml-2"
      >
        ×
      </button>

    </span>
  ))}
</div>
<div className="mt-8 w-full">
  <h3 className="text-xl font-bold">Projects</h3>
  {projects.length === 0 && (
    <p className="mt-3 text-sm text-gray-400">No projects added yet.</p>
  )}
  <div className="mt-4 grid gap-4 md:grid-cols-2">
    {projects.map((project) => (
      <div key={project.name} className="rounded-lg border bg-white p-4 text-left">
        <h4 className="font-semibold">{project.name}</h4>
        <p className="mt-2 text-sm text-gray-500">{project.description}</p>
        <button
          type="button"
          onClick={() => removeProject(project.name)}
          className="mt-4 rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600"
        >
          Remove 
        </button>
      </div>
    ))
    }
  </div>
</div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

export default Builder;