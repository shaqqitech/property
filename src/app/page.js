import Filter from "./components/Filter";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="max-w-screen min-h-screen flex">
      <div className="w-[5vw]">
        <Navbar />
      </div>
      <div className="w-[95vw] flex flex-col">
        <Header />
        <Filter />
      </div>
    </main>
  );
}
