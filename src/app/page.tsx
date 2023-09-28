import Map from "@/components/map/Map";
import Earth from "@/components/three/Earth";
import DataObject from "@/lib/DataObject";
import { DataObjectType } from "@/lib/DataObjectType";
const Page = async () => {
  // const goodEntries = DataObject.filter((entry)=>
  // entry.dataQuality === 1
  // )
  // console.log(goodEntries.length);

  const modalIsLoaded = async(progress:number) => {
    console.log(progress);

  }

  return (
    <div className="w-full mx-auto h-screen">

        {/* <Earth/> */}
        {/* <Map locations={DataObject}/> */}

    </div>
  );
};

export default Page;
