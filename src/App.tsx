import "./App.css";
import BasicCard from "./Cards/BasicCard";
import DialogBubbleCard from "./Cards/DialogBubbleCard";

function App() {
  return (
    <main className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Testimonial Cards</h1>
      <BasicCard />
      <DialogBubbleCard />
    </main>
  );
}

export default App;
