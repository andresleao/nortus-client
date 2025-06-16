import { IARecommendation } from "@/api/types/ia-recommendation";

type RecommendedOfferAreaProps = {
    recommendedOffer: IARecommendation
}

export default function RecommendedOfferArea({ recommendedOffer }: RecommendedOfferAreaProps) {
    return (
        <>
            <div className="px-6 pt-6">
                <span className="font-semibold text-[18px] leading-[16px]">
                    Oferta recomendada
                </span>
                <p className="font-normal text-[14px] leading-[16px] mt-[8px] mb-[24px]">
                    {recommendedOffer.plan}
                </p>
            </div>
            <div>
                <div className="flex gap-[40px] px-6">
                    <div className="flex flex-col gap-y-[8px]">
                        <span className="font-semibold text-[12px] leading-[16px] text-white/50">
                            Valor recomendado
                        </span>
                        <span className="font-semibold text-[20px] leading-[16px]">
                            {`R$ ${recommendedOffer.value}/mês`}
                        </span>
                    </div>
                    <div className="flex flex-col gap-y-[8px]">
                        <span className="font-semibold text-[12px] leading-[16px] text-white/50">
                            Probabilidade de conversão
                        </span>
                        <span className="font-semibold text-[20px] leading-[16px] text-[#00DC04]">
                            {`${recommendedOffer.conversionProbability}%`}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}