'use client'
import { BiWorld } from 'react-icons/bi'
import { LuLayoutDashboard } from 'react-icons/lu'
import useNavSelector from '@/store/useNavSelector'


const Nav = () => {

  const selectedNav = useNavSelector(state => state.selectedNav)
  const setSelectedNav = useNavSelector((state) => state.setSelectedNav);

  console.log(selectedNav);





  return (
    <div className='flex flex-col justify-evenly bg-white border border-black'>
      <LuLayoutDashboard
        className="text-red-400 text-3xl"
        onClick={() => {
          setSelectedNav('dashboard');
        }}
      />
      <BiWorld
        className="text-red-400 text-3xl"
        onClick={() => {
          setSelectedNav('map');
        }}
      />
    </div>
  )
}

export default Nav
