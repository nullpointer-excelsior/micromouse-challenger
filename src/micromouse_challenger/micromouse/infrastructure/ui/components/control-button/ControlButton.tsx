
export default function ControlButton({ onClick, text }){
  return (
    <button className="bg-red-900 p-1 m-1 rounded w-16" onClick={onClick}>
      {text}
    </button>
  );
};

