import Graph from "./Graph";


export default function GraphHolder() {

  return (
    <div className="bg-white p-4 rounded shadow-lg flex justify-center flex-grow">
      <Graph />
      <iframe
        src="https://www.youtube.com/embed/7ghSziUQnhs?autoplay=1"
        allowFullScreen=""
        allow="autoplay"
      />
    </div>
  );
}