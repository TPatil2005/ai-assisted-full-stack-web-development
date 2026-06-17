import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Login() {
  return (
    <>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold">Login Page</h1>
        <p>Please login to continue.</p>
      </main>
      <Footer />
    </>
  );
}