import { useSubStore } from "@/client/hooks";

const Test1 = () => {
  const { username } = useSubStore("global");
  return <>Test1----{username}</>;
};

export default Test1;
