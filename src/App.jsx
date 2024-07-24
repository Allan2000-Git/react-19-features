import { Suspense } from "react";
import "./App.css";
import PostsByUse from "./components/data-fetching-by-use";

function App() {
  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
      <div>
        <PostsByUse />
      </div>
    </Suspense>
    </main>
  );
}

export default App;