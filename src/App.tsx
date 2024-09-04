import "./App.css";
import BasicCard from "./Cards/BasicCard";
import DialogBubbleCard from "./Cards/DialogBubbleCard";
import DialogBubbleCardV2 from "./Cards/DialogBubbleCardV2";

function App() {
  return (
    <main className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Testimonial Cards</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center">
        {/* TODO: masonry layout */}
        <BasicCard />
        <DialogBubbleCard />
        <DialogBubbleCardV2 />
      </div>
    </main>
  );
}

export default App;
