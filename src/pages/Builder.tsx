import { useParams } from "react-router-dom";
import { useState } from "react";
import { templates } from "../data/templates";


function Builder() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [bio, setBio] = useState("");
  const [isPreview, setIsPreview] = useState(false);
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projects, setProjects] = useState<
    { name: string; description: string }[]
  >([]);
  const [projectError, setProjectError] = useState("");

  const addSkill = () => {
    if (skill.trim() === "") return;
    setSkills([...skills, skill.trim()]);
    setSkill("");
  };
  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));

  };

  const addProject = () => {
    if (
      projectName.trim() === "" ||
      projectDescription.trim() === ""
    ) {
      setProjectError("Please fill in all project fields.");
      return;
    }
    setProjectError("");
    setProjects([
      ...projects, {
        name: projectName.trim(),
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

          <button onClick={() => setIsPreview(!isPreview)} className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white">{isPreview ? "Back to Editor" : "Preview"}</button>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-6 lg:grid-cols-[240px_1fr]">

        {/* Sidebar */}
        {!isPreview && (
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
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-900">
                  Personal Information
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  Tell visitors about yourself.
                </p>
              </div>
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
              <div className="mb-4 mt-8">
                <h3 className="text-sm font-semibold text-gray-900">
                  Skills
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  Add skills you want to showcase.
                </p>
              </div>


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
              <div className="mb-4 mt-8">
                <h3 className="text-sm font-semibold text-gray-900">
                  Projects
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  Add your best work and projects.
                </p>
              </div>
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
              <button type="button" onClick={addProject} className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white">Add Project</button>

            </div>

          </aside>
        )}

        {/* Preview */}
        <section className={`min-h-[600px] rounded-xl border bg-white p-8 ${isPreview ? "w-full lg:col-span-2" : ""}`}>
          <div className="min-h-[500px] border border-dashed border-gray-300 p-8">
            <div className="mx-auto max-w-4xl">
              <section className="border-b pb-10 text-center">
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-400">
                  Portfolio
                </p>
                <h2 className={`text-4xl font-bold tracking-tight  ${
    selectedTemplate?.id === "creative-studio"
      ? "text-purple-600"
      : selectedTemplate?.id === "motion-portfolio"
      ? "text-orange-500"
      : "text-blue-600"
  }`}>
                  {name || "Your Name"}
                </h2>

                <p className="mt-3 text-lg font-medium text-gray-600">
                  {title || "Your Professional Title"}
                </p>
                <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-500">
                  {bio || "Your short professional bio will appear here."}
                </p>
              </section>
              <section className="mt-12">
                <h3 className="text-2xl font-bold">
                  Skills
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Tools and technologies I work with.
                </p>
                {skills.length === 0 ? (
                  <p className="mt-6 text-sm text-gray-400">No skills added yet.</p>
                ) : (
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                       className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium ${
                          selectedTemplate?.id === "creative-studio"
                          ?"bg-purple-50 text-purple-700 border-purple-200"
                          : selectedTemplate?.id === "motion-portfolio"
                          ? "bg-orange-50 text-orange-700 border-orange-200"
                          : "bg-gray-50 text-gray-700 border-gray-200"
                        }`}
                      >
                        {skill}
                        <button
                          type="button"
                          onClick={() => removeSkill(skill)}
                          className="font-bold text-gray-400 hover:text-red-500 ml-2"
                        >
                          ×
                        </button>

                      </span>
                    ))}
                  </div>
                )}
              </section>
              <section className="mt-16 w-full border-t pt-10">
                <div className="text-center">
                  <h3 className="text-2xl font-bold">Projects</h3>
                  <p className="mt-2 text-sm text-gray-500">A selection of my recent work.</p>
                  </div>
                  {projects.length === 0 ? (
                    <p className="mt-3 text-center text-sm text-gray-400">No projects added yet.</p>
                  ) : (
                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    {projects.map((project) => (
                      <div key={project.name} className="rounded-xl border bg-gray-50 p-6 text-left transition-shadow hover:shadow-md">
                        <h4 className="font-bold text-lg">{project.name}</h4>
                        <p className="mt-3 text-sm leading-6 text-gray-500">{project.description}</p>
                        <button
                          type="button"
                          onClick={() => removeProject(project.name)}
                          className="mt-5 rounded-lg border px-3 py-1.5 text-sm font-medium text-gray-600 transition hover:border-red-300 hover:text-red-500">
                          Remove
                        </button>
                      </div>
                    ))
                    }
                  </div>
                )}
        </section>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

export default Builder;