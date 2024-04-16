export function Button({ color, text }) {
    return (
      <button
       
        className={`px-4 py-2 text-white bg-${color}-900 hover:bg-${color}-700 focus:outline-none rounded-md`} style={{fontFamily: "Ojuju, sans-serif"}}
      >
        {text}
      </button>
    );
  }
  