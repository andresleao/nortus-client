export default function RecommendedOfferArea() {
    return (
        <>
            <div className="px-6 pt-6">
                <span className="font-semibold text-[18px] leading-[16px]">
                    Oferta recomendada
                </span>
                <p className="font-normal text-[14px] leading-[16px] mt-[8px] mb-[24px]">
                    Seguro de vida individual com cobertura por doenças graves
                </p>
            </div>
            <div>
                <div className="flex gap-[40px] px-6">
                    <div className="flex flex-col gap-y-[8px]">
                        <span className="font-semibold text-[12px] leading-[16px] text-white/50">
                            Valor recomendado
                        </span>
                        <span className="font-semibold text-[20px] leading-[16px]">
                            R$ 127,50/mês
                        </span>
                    </div>
                    <div className="flex flex-col gap-y-[8px]">
                        <span className="font-semibold text-[12px] leading-[16px] text-white/50">
                            Probabilidade de conversão
                        </span>
                        <span className="font-semibold text-[20px] leading-[16px] text-[#00DC04]">
                            78%
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}