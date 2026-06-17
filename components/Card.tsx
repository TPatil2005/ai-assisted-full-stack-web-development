export default function Card() {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-bold">Card Title</h2>

      <p className="mt-2">
        This is a sample card description.
      </p>

      <button className="mt-3 bg-blue-600 text-white px-3 py-2 rounded">
        Learn More
      </button>
    </div>
  );
}