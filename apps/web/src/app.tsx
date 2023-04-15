import { FunctionalComponent } from "preact";
import { trpc } from "./trpc";
import { Navbar } from "./components/Navbar";

type EntityProps = {
  entity: {
    id: number;
    name: string;
  };
};

const Entity: FunctionalComponent<EntityProps> = ({ entity }) => {
  return (
    <div className="bg-white md:max-w-sm rounded-xl p-6 shadow-2xl font-mono">
      <div>
        <span className="text-gray-500">ID: </span>
        {entity.id}
      </div>
      <div>
        <span className="text-gray-500">Entity: </span>
        <span className="font-semibold">{entity.name}</span>
      </div>
    </div>
  );
};

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
              return <Entity entity={e} />;
            });
          })}
        </div>
      </div>
    </div>
  );
}
