export default function Tooltip({ message, children }) {
  return (
    <div class="group relative flex justify-center">
      {children}
      <span class="absolute top-12 px-2 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
        {message}
      </span>
    </div>
  );
}
