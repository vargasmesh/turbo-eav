import { trpc } from "./trpc";

export function App() {
  const helloQuery = trpc.helloWorld.useQuery();

  return <>{helloQuery.data}</>;
}
