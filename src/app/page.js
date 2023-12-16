import Header from "./components/Header";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="max-w-screen min-h-screen flex">
      <div>
        <Navbar />
      </div>
      <div>
        <Header />
      </div>
    </main>
  );
}
