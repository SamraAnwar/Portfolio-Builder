import TemplateCard from "./TemplateCard";
import { templates } from "../../data/templates";


function TemplatePreview() {
  return (
    <section className="bg-neutral-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-500">
            Templates
          </p>

          <h2 className="mt-3 max-w-2xl text-4xl font-bold text-neutral-900">
            Start with a portfolio that already looks professional.
          </h2>

          <p className="mt-4 max-w-xl text-gray-600">
            Choose a template designed for your creative work and customize it
            to make it yours.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <TemplateCard
              key={template.id}
             id={template.id}
              name={template.name}
              category={template.category}
              description={template.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}


export default TemplatePreview;

















