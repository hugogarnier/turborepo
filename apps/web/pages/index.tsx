import Head from "next/head";
import { Button, Card, Navbar } from "ui";

const menuList = [
  { title: "Test", href: "#" },
  { title: "Test", href: "#" },
  { title: "Test", href: "#" },
  { title: "Test", href: "#" },
];

const Web = () => {
  return (
    <>
      <Head>
        <title>Web App</title>
      </Head>
      <div className="">
        <div className="mx-10">
          <div className="flex flex-col w-full justify-center m-auto">
            <Navbar menuList={menuList} />
            <div className="flex flex-col space-x-3 items-center mt-32">
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
        </div>
      </div>
    </>
  );
};

export default Web;
