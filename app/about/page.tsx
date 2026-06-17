import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold">About Page</h1>
        <p>This is the About page of our application.</p>
      </main>
      <Footer />
    </>
  );
}