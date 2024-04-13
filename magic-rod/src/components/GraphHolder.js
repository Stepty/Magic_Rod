import Graph from "./Graph";


export default function GraphHolder() {

  return (
    <div className="bg-white pt-20 p-4 rounded shadow-lg flex justify-between flex-grow">
      <iframe
        src="https://www.youtube.com/embed/7ghSziUQnhs?autoplay=1"
        allowFullScreen=""
        allow="autoplay"
        className="w-1/8"
      />
      <Graph />
      <iframe
        src="https://www.youtube.com/embed/7ghSziUQnhs?autoplay=1"
        allowFullScreen=""
        allow="autoplay"
        className="w-1/8"
      />
    </div>
  );
}