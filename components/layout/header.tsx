'use client';

import { paths } from "@/paths";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const getTitle = () => {
        if (pathname === paths.home()) return 'Visão 360º';
        if (pathname === paths.dashboard()) return 'Dashboard';
        return '';
    };

    return (
        <div className="w-full h-[var(--header-height)] bg-[#20273E]">
            <div className="ml-[var(--side-menu-width)] px-[40px] flex items-center h-full">
            <span className="font-semibold text-[20px] leading-[24px] text-[#F6F8FC]">
                {getTitle()}
            </span>
            </div>
        </div>
    );
}
