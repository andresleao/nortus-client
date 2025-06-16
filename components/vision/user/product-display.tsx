import Image from "next/image";
import Indicator from "../../indicator";
import { Product } from "@/api/types/product";

type ProductDisplayProps = {
    product: Product;
}

export default function ProductDisplay({ product }: ProductDisplayProps) {
    return (
        <div className="flex justify-between mb-[16px]">
            <div className="flex items-center">
                <Indicator
                    color={product.status === "ativo" ? "#00DC04": "#DC3300"}
                />
                <span className="font-normal text-sm leading-4 text-[#EFF6FF] ml-4">
                    {product.name}
                </span>
            </div>
            <div className="flex items-center justify-center">
                <span className="font-semibold text-sm leading-4 mr-4">
                    {`R$ ${product.price}/mês`}
                </span>
                <Image
                    src="/open.svg"
                    alt="ícone do operador somar"
                    height={0}
                    width={0}
                    style={{ width: '16px', height: 'auto' }}
                    priority
                />
            </div>
        </div>
    );
}