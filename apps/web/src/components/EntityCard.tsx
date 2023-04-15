import { FunctionalComponent } from "preact";

export type EntityProps = {
  entity: {
    id: number;
    name: string;
  };
};

export const EntityCard: FunctionalComponent<EntityProps> = ({ entity }) => {
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