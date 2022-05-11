import { BsPlus, BsFillLightningFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa'; 

function SideBar() {
  return (
    <div className="fixed top-0 left-0 flex flex-col 
    w-16 m-0 h-screen bg-slate-400 text-gray-50 shadow-sm">
      <SideBarIcon icon={<FaFire size="28"/>} text="Its Lit" />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} text="Mount Olympus" />
      <SideBarIcon icon={<FaPoo size="20" />} text = "Why you still hovering" />
      <SideBarIcon icon={<BsPlus size="32" />} text="Add Server"/>
    </div>
  )
}

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div className="sidebar-icon group">
    {icon}

    <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);


export default SideBar