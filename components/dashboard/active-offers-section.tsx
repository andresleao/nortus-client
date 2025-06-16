import CustomContainer from "@/components/custom-container";
import IconButton from "../icon-button";
import OffersTable from "./offers-table";
import { useSelector } from "react-redux";
import { RootState } from "../provider/store";

export default function ActiveOffersSection() {
    const offers = useSelector((state: RootState) => state.dashboard.offers);

    if (!offers) return null;

    return (
        <CustomContainer width="w-[852px]" margin="mt-[40px]">
            <div className="flex justify-between px-6 pt-[40px] mb-[32px]">
                <span className="font-bold text-[20px] leading-[32px]">
                    Ranking de ofertas ativas
                </span>
                <IconButton
                    src="/search.svg"
                    alt="ícone de lupa"
                    backgroundColor="#1876D2"
                    radius="rounded-full"
                    size="w-[40px] h-[40px]"
                    iconSize={16}
                />
            </div>
            <OffersTable offers={offers} />
        </CustomContainer>
    );
}