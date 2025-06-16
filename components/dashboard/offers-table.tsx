import { Offer } from "@/api/types/offer";

type OffersTableProps = {
    offers: Offer[];
}

export default function OffersTable({ offers }: OffersTableProps) {
    return (
        <div className="px-6 pb-6">
            <table className="w-full text-left text-white text-sm rounded-xl bg-white/5">
                <thead className="border-b border-[#3A3F54]">
                    <tr>
                        <th className="py-4 px-6 font-normal text-[14px] leading-[16px] text-white/70">Oferta</th>
                        <th className="py-4 px-6 font-normal text-[14px] leading-[16px] text-white/70">Conversão</th>
                        <th className="py-4 px-6 font-normal text-[14px] leading-[16px] text-white/70">Receita</th>
                        <th className="py-4 px-6 font-normal text-[14px] leading-[16px] text-white/70">Feedback</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-[#3A3F54]">
                    {offers.map((o, i) => (
                        <tr key={i}>
                            <td className="py-4 px-6 font-semibold text-[14px] leading-[16px]">{o.name}</td>
                            <td className="py-4 px-6 font-semibold text-[14px] leading-[16px]">{`${o.conversion}%`}</td>
                            <td className="py-4 px-6 font-semibold text-[14px] leading-[16px]">{`R$ ${o.revenue.toFixed(1)}k`}</td>
                            <td className="py-4 px-6 font-semibold text-[14px] leading-[16px]">{`${o.feedback}/5`}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}