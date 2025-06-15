import Image from 'next/image';
import IconButton from '@/components/icon-button';
import UserProfile from '@/components/user-profile';

export default function SideMenu() {
  return (
    <div
      className="
                h-screen
                w-[var(--side-menu-width)]
                fixed top-0 left-0
                z-50
                bg-[#20273E]
                rounded-tr-[40px]
                rounded-br-[40px]
                [filter:drop-shadow(4px_0_20px_rgba(0,0,0,0.2))]
                flex flex-col items-center justify-between
                py-10
              "
    >
      <Image
        src="/nortus_logo.svg"
        alt="Nortus logo"
        width={40}
        height={40}
        priority
      />
      <div className="flex flex-col gap-10">
        <IconButton src="/user.svg" alt="Nortus logo" />
        <IconButton src="/graphic.svg" alt="ícone de gráfico" />
        <IconButton src="/dialog.svg" alt="ícone de diálogo" />
      </div>
      <div className="mb-10">
        <UserProfile />
      </div>
    </div>
  );
}
