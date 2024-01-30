import { Counter, Static } from "library";

export default function Home() {
  return (
    <main style={{textAlign: 'center'}}>
      <Static />
      {/* Once the Counter component is added, it all breaks */}
      <Counter />
    </main>
  );
}
