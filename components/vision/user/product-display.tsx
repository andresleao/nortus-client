import Image from "next/image";
import Indicator from "../../indicator";

export default function ProductDisplay() {
    return (
        <div className="flex justify-between mb-[16px]">
            <div className="flex items-center">
                <Indicator color="#00DC04" />
                <span className="font-normal text-sm leading-4 text-[#EFF6FF] ml-4">
                    Seguro automóvel
                </span>
            </div>
            <div className="flex items-center justify-center">
                <span className="font-semibold text-sm leading-4 mr-4">
                    R$ 185,90/mês
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