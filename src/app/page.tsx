import Earth from "@/components/Earth";
import DataObject from '@/lib/DataObject'
import { DataObjectType } from "@/lib/DataObjectType";
const Page = async () => {

  // const goodEntries = DataObject.filter((entry)=>
  // entry.dataQuality === 1
  // )
  // console.log(goodEntries.length);


  return (
    <div className="w-full mx-auto h-screen border">{/* <Earth /> */}</div>
  );
};

export default Page;
