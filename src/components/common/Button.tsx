type ButtonProps = {
  text: string;
  color: "blue" | "black" | "red" |"green";
  size: "small" | "medium" | "large"
};

const colorClasses = {
  blue: "bg-blue-500 hover:bg-blue-600",
  black: "bg-black hover:bg-neutral-800",
  red: "bg-red-500 hover:bg-red-600",
  green: "bg-green-500 hover:bg-green-600",
};

const sizeClasses = {
  small: "text-sm py-2 px-4",
  medium: "text-base py-3 px-6",
  large: "text-lg py-4 px-8",
};

function Button({ text, color, size }: ButtonProps) {
  return (
    <button
      className={`rounded-xl font-semibold text-white transition ${colorClasses[color]} ${sizeClasses[size]}`}
    >
      {text}
    </button>
  );
}

export default Button;