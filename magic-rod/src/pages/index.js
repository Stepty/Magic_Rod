import GraphHolder from "@/components/GraphHolder";
import ButtonHolder from "@/components/ButtonHolder";
import Header from "@/components/Header";

export default function Home() {

  return (
    <main class="border-2 p-8 h-screen w-screen flex flex-col">
      {/* <p>{newItem.data1} {newItem.data2}</p> */}
      <Header />
      <div class="border-2 flex-grow flex flex-col justify-content ">
        <ButtonHolder />
        <GraphHolder />

      </div>
    </main>
  );
}
