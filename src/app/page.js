





import Featured from "@/Components/Featured";
import Hero from "@/Components/Hero";
import TopBreeds from "@/Components/TopBreeds";
export default function Home() {
  return (
   <div className="text-7xl text-amber-50">
    <Hero></Hero>
  <div className="p-5 w-28/30 mx-auto">
      <Featured></Featured>
  </div>


  {/* Qurbani Tips */}
  <div className="max-w-4xl bg-base-200 hover:shadow-2xl mx-auto my-15 mt-5 p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl text-black font-semibold mb-4">🐄 Qurbani Tips</h2>

    <ul className="list-disc text-lg p-2 space-y-2 text-gray-700">
      <li>Choose a healthy animal without defects</li>
      <li>Check proper age before booking</li>
      <li>Ensure vaccination and health records</li>
      <li>Avoid overcrowded or unsafe farms</li>
      <li>Book early for better options</li>
    </ul>
  </div>
<TopBreeds></TopBreeds>
</div>

  );
}
