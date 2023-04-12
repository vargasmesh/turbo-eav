import { FunctionalComponent } from "preact";
import { trpc } from "./trpc";

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
  const entitiesQuery = trpc.listEntities.useQuery();

  return (
    <div className="h-screen bg-gradient-to-tr from-[#F3E9EF] to-[#1B6678]">
      <div className="container mx-auto pt-20 px-6">
        <div className="flex flex-col gap-10">
          {entitiesQuery.data?.map((e) => {
            return <Entity entity={e} />;
          })}
        </div>
      </div>
    </div>
  );
}
