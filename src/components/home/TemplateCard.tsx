import { useNavigate} from "react-router-dom";
type TemplateCardProps = {
   id: string;
  name: string;
  category: string;
  description: string;
};

function TemplateCard({
    id,
  name,
  category,
  description,
}: TemplateCardProps) {
  const navigate = useNavigate();
  return (
    <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Preview Area */}
      <div className="h-56 bg-neutral-100 p-5">

        <div className="h-full rounded-lg border border-gray-200 bg-white p-4">

          {/* Fake Portfolio Header */}
          <div className="flex items-center justify-between">
            <div className="h-3 w-20 rounded bg-neutral-800"></div>
            <div className="h-3 w-12 rounded bg-neutral-300"></div>
          </div>

          {/* Fake Portfolio Hero */}
          <div className="mt-6">
            <div className="h-4 w-3/4 rounded bg-neutral-800"></div>
            <div className="mt-2 h-3 w-1/2 rounded bg-neutral-300"></div>
          </div>

          {/* Fake Project Blocks */}
          <div className="mt-6 grid grid-cols-3 gap-2">
            <div className="h-16 rounded bg-neutral-800"></div>
            <div className="h-16 rounded bg-red-500"></div>
            <div className="h-16 rounded bg-neutral-300"></div>
          </div>

        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">

        <p className="text-xs font-semibold uppercase tracking-wider text-red-500">
          {category}
        </p>

        <h3 className="mt-2 text-2xl font-bold text-neutral-900">
          {name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {description}
        </p>

        <button onClick={() => navigate(`/builder/${id}`)}   className="mt-5 font-semibold text-neutral-900 transition hover:text-red-500">
          Use Template →
        </button>

      </div>
    </div>
  );
}

export default TemplateCard;