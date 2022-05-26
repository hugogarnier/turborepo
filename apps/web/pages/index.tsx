import Head from "next/head";
import { Button, Card } from "ui";

const Web = () => {
  return (
    <>
      <Head>
        <title>Web App</title>
      </Head>
      <div className="flex flex-col w-full justify-center m-auto">
        <div className="flex flex-col space-x-3 items-center mt-10">
          <h1 className="font-bold text-lg">Web</h1>
          <Button variant="primary">bla</Button>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Web;
