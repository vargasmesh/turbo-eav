import { trpc } from "./trpc";

export function App() {
  const entitiesQuery = trpc.listEntities.useQuery();

  return (
    <>
      {entitiesQuery.data?.map((e) => {
        return <div key={e.id}>{e.name}</div>;
      })}
    </>
  );
}
