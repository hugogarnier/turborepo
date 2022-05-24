import Head from "next/head";
import { Button, Card } from "ui";

const Web = () => {
  return (
    <>
      <Head>
        <title>Web App</title>
      </Head>

      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex space-x-3 items-center">
          <h1 className="font-bold text-lg">Web</h1>
          <Button />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Web;
