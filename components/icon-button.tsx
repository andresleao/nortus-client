import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

type IconButtonProps = {
  src: string;
  alt: string;
  href?: string;
  isActive?: boolean;
  backgroundColor?: string;
  radius?: string;
  size?: string;
  iconSize?: number;
};

export default function IconButton({
    src,
    alt,
    href,
    isActive = false,
    backgroundColor,
    radius = "rounded-[12px]",
    size = "w-16 h-[60px]",
    iconSize = 24
}: IconButtonProps) {
    const buttonClasses = clsx(
        radius,
        size,
        "flex items-center justify-center transition-all duration-200",
        {
            "bg-[#1876D2] [filter:drop-shadow(0_0_10px_#1876D2)]": isActive,
            "bg-white/5": !isActive,
            "cursor-pointer": href
        },
    );

    if (!href) {
        return (
            <div
            className={buttonClasses}
            style={ backgroundColor ? { backgroundColor } : undefined }
            >
            <Image src={src} alt={alt} width={iconSize} height={iconSize} priority />
            </div>
        );
    }

    return (
        <Link href={href} className={buttonClasses}>
            <Image src={src} alt={alt} width={iconSize} height={iconSize} priority />
        </Link>
    );
}
