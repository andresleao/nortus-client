import Image from 'next/image';

type IconButtonProps = {
  src: string;
  alt: string;
};

export default function IconButton({ src, alt }: IconButtonProps) {
  return (
    <div
      className="
        w-16 h-[60px] rounded-[12px] bg-[#1876D2]
        flex items-center justify-center
        [filter:drop-shadow(0_0_10px_#1876D2)]"
    >
      <Image src={src} alt={alt} width={24} height={24} priority />
    </div>
  );
}
