export function Button({ text }) {
  return (
    <button
      className={`px-4 py-2 text-white bg-black hover:bg-black focus:outline-none rounded-md`}
      style={{ fontFamily: "Ojuju, sans-serif" }}
    >
      {text}
    </button>
  );
}
