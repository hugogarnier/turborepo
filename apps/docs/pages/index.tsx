import Head from "next/head";
import { Button } from "ui";

const Doc = () => {
  return (
    <>
      <Head>
        <title>Doc App</title>
      </Head>

      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex space-x-3 items-center">
          <h1 className="font-bold text-lg">Doc</h1>
          <Button />
        </div>
      </div>
    </>
  );
};

export default Doc;
