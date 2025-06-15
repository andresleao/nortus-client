import Image from "next/image";
import ProductDisplay from "./product-display";
import Separator from "../../separator";
import { Product } from "@/api/types/product";

type ProductsPriceDisplayProps = {
    products: Product[];
}

export default function ProductsPriceDisplay({ products }: ProductsPriceDisplayProps) {
    return (
        <>
            <div className="flex flex-col w-full px-6">
                <div className="flex justify-between mb-6">
                    <span className="font-medium text-base leading-4 text-[#F6F8FC]">
                        Produtos
                    </span>
                    <Image
                        src="/plus.svg"
                        alt="ícone do operador somar"
                        height={0}
                        width={0}
                        style={{ width: '16px', height: 'auto' }}
                        priority
                    />
                </div>
                {products.map(p => <ProductDisplay key={p.name} product={p} />)}
            </div>
            <Separator marginVertical={"mt-4 mb-6"} />
        </>
    );
}