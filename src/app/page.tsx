import Earth from "@/components/Earth";
import { PrismaClient } from "@prisma/client";

const Page = async () => {
  // const prisma = new PrismaClient();

  // const cities = await prisma.dataEntry.findMany({
  //   where: {
  //     cityName: "Aberdeen",
  //   },
  // });
  // console.log(cities.length);

  return (
    <div className="w-full mx-auto h-screen border">{/* <Earth /> */}</div>
  );
};

export default Page;
