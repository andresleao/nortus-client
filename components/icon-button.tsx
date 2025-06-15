import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

type IconButtonProps = {
  src: string;
  alt: string;
  href?: string;
  isActive?: boolean;

};

export default function IconButton({ src, alt, href, isActive = false }: IconButtonProps) {
  const buttonClasses = clsx(
    'w-16 h-[60px] rounded-[12px] flex items-center justify-center transition-all duration-200',
    {
      'bg-[#1876D2] [filter:drop-shadow(0_0_10px_#1876D2)]': isActive,
      'bg-white/5': !isActive,
      'cursor-pointer': href
    }
  );

  if (!href) {
    return (
      <div className={buttonClasses}>
        <Image src={src} alt={alt} width={24} height={24} priority />
      </div>
    );
  }

  return (
    <Link href={href} className={buttonClasses}>
      <Image src={src} alt={alt} width={24} height={24} priority />
    </Link>
  );
}
