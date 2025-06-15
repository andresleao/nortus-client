import RadialChart from "@/components/charts/radial-chart";

export default function RadialChartDisplay() {
    return (
        <div className="bg-white/5 rounded-[16px] flex flex-col pb-[16px] w-[332px] h-[216px]">
            <div className="flex justify-center pt-6">
                <RadialChart />
            </div>
            <div className="flex flex-col items-center -mt-[70px]">
                <span className="text-[32px]">💎</span>
                <span  className="font-semibold text-[18px] leading-[16px] text-[#FCFAED] opacity-50">
                    Premium
                </span>
            </div>
            <div className="flex justify-between mt-[30px] px-4">
                <div className="flex flex-col gap-y-[8px]">
                    <span className="text-white/50 text-[10px] font-semibold leading-[16px]">
                        Life time value
                    </span>
                    <span className="font-semibold text-[20px] leading-[16px]">
                        R$ 24.580,00
                    </span>
                </div>
                <div className="h-full border-l border-white/10" />
                <div className="flex flex-col gap-y-[8px]">
                    <span className="text-white/50 text-[10px] font-semibold leading-[16px]">
                        Probabilidade de churn
                    </span>
                    <span className="text-[#00DC04] font-semibold text-[20px] leading-[16px]">
                        11%
                    </span>
                </div>
            </div>
        </div>
    );
}