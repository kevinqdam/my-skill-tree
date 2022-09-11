import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import Tree, { Skill } from "../components/Tree";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  const skills: Skill[] = [];

  return (
    <>
      <Head>
        <title>My Skill Tree</title>
      </Head>
      <main className="w-screen h-screen">
        <Tree skills={skills}  />
      </main>
    </>
  );
};

export default Home;
