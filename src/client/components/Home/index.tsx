import { request } from "@/client/helpers";
import { UserSchema } from "@/shared";
import { useEffect } from "react";

const Home = () => {
  const getUser = async () => {
    const data = await request.post<any, UserSchema>("/user/getUser");
    console.log("user", data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return <>Home</>;
};

export default Home;
