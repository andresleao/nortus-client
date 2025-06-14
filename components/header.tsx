export default function Header() {
    return (
      <div className="w-full h-[var(--header-height)] bg-[#20273E]">
        <div className="ml-[var(--side-menu-width)] px-[40px] flex items-center h-full">
          <span className="font-semibold text-[20px] leading-[24px] text-[#F6F8FC]">
            Visão 360º
          </span>
        </div>
      </div>
    );
  }