import { trpc } from "./trpc";
import { Navbar } from "./components/Navbar";
import { EntityCard } from "./components/EntityCard";
import ArrowIcon from "~icons/heroicons/chevron-double-down-20-solid";
import { useMemo } from "preact/hooks";

export function App() {
  const entitiesQuery = trpc.listEntities.useInfiniteQuery(
    {},
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );

  const entities = useMemo(
    () => entitiesQuery.data?.pages.flatMap((page) => page.items),
    [entitiesQuery.data]
  );

  return (
    <div>
      <Navbar />
      <div class="container mx-auto px-6 overflow-y-auto scrollbar-hide">
        <div class="flex flex-col gap-10 py-10">
          {entities?.map((entity) => (
            <EntityCard entity={entity} />
          ))}
        </div>
        {entitiesQuery.hasNextPage && (
          <div class="flex items-center justify-center py-2">
            <div class="transition-all hover:scale-110">
              <button
                class="p-4 rounded-full bg-white shadow-lg shadow-cyan-800"
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
