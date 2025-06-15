import Image from "next/image";

type InfoCardProps = {
    src: string,
    alt: string,
    title: string
}

export default function InfoCard({
    src,
    alt,
    title
}: InfoCardProps ) {
  return (
        <div className="flex flex-col justify-center items-center">
            <Image
                src={src}
                alt={alt}
                width={0}
                height={0}
                style={{ width: '24px', height: 'auto' }}
                priority
            />
            <div>
                <span className="font-normal text-xs leading-4">
                    {title}
                </span>
            </div>
        </div>
    );
}
