import { trpc } from "./trpc";
import { Navbar } from "./components/Navbar";
import { EntityCard } from "./components/EntityCard";

export function App() {
  const entitiesQuery = trpc.listEntities.useInfiniteQuery(
    {},
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );

  return (
    <div className="h-screen">
      <Navbar />
      <div className="container mx-auto px-6 overflow-y-auto h-[calc(100vh-3.5rem)] scrollbar-hide">
        <div className="flex flex-col gap-10 py-12">
          {entitiesQuery.data?.pages.map((page) => {
            return page.items.map((e) => {
              return <EntityCard entity={e} />;
            });
          })}
        </div>
      </div>
    </div>
  );
}
