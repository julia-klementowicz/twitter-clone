import { IconType } from 'react-icons';

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
}

function SidebarItem({ label, href, icon: Icon, onClick }: SidebarItemProps) {
  return (
    <div className='flex flex-row items-center'>
      <div className='relative h-14 w-14 rounded-full lg:hidden flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer'>
        <Icon size={28} color='white' />
      </div>
      <div className='relative rounded-full lg:flex hidden items-center gap-4 p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer'>
        <Icon size={24} color='white' />
        <p className='hidden lg:block text-xl'>{label}</p>
      </div>
    </div>
  );
}
export default SidebarItem;
