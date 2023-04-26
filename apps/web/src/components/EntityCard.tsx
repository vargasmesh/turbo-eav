import { FunctionalComponent } from "preact";

export type EntityProps = {
  entity: {
    id: number;
    name: string;
  };
};

export const EntityCard: FunctionalComponent<EntityProps> = ({ entity }) => {
  return (
    <div class="bg-white md:max-w-sm rounded-xl p-6 shadow-2xl font-mono animate-slide-in">
      <div>
        <span class="text-gray-500">ID: </span>
        {entity.id}
      </div>
      <div>
        <span class="text-gray-500">Entity: </span>
        <span class="font-semibold">{entity.name}</span>
      </div>
    </div>
  );
};
