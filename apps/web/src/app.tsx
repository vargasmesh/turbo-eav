import { trpc } from "./trpc";
import { Navbar } from "./components/Navbar";
import { EntityCard } from "./components/EntityCard";
import ArrowIcon from "~icons/heroicons/chevron-double-down-20-solid";

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
        <div className="flex flex-col gap-10 py-10">
          {entitiesQuery.data?.pages.map((page) => {
            return page.items.map((e) => {
              return <EntityCard entity={e} />;
            });
          })}
        </div>
        {entitiesQuery.hasNextPage && (
          <div className="flex items-center justify-center py-2">
            <div className="transition-all hover:scale-110">
              <button
                className="p-4 rounded-full bg-white shadow-lg shadow-cyan-800"
                onClick={() => entitiesQuery.fetchNextPage()}
              >
                <ArrowIcon />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
