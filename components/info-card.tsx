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
                width={24}
                height={24}
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
