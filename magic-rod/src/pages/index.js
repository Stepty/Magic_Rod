import GraphHolder from "@/components/GraphHolder";
import ButtonHolder from "@/components/ButtonHolder";
import Header from "@/components/Header";

export default function Home() {

  return (
    <main class="bg-teal-500 border-2 border-black p-8 h-screen w-screen flex flex-col">
      {/* <p>{newItem.data1} {newItem.data2}</p> */}
      <Header />
      <div class="flex-grow flex flex-col justify-content ">
      <GraphHolder />
        <ButtonHolder />

      </div>
    </main>
  );
}
