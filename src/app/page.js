import Content from "./components/Content";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="max-w-screen min-h-screen flex">
      <div className="w-[10vw] lg:w-[5vw]">
        <Navbar />
      </div>
      <div className="w-[90vw] lg:w-[95vw] flex flex-col">
        <Header />
        <Filter />
        <Content />
      </div>
    </main>
  );
}
