export default function Navbar() {
  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between">
      <h1 className="font-bold">My App</h1>

      <div className="space-x-4">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
}