import { client } from "./trpc.client";
import { useState } from "preact/hooks";

export function App() {
  const [message, setMessage] = useState("");

  client.helloWorld.query().then((data) => {
    setMessage(() => data);
  });

  return <>{message}</>;
}
