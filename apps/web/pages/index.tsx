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
          <h5 className="font-mono font-bold text-xl">Science of Chemstry</h5>
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
