import { useDispatch, useSelector } from "react-redux";
import TextButton from "../text-button";
import { RootState } from "../provider/store";
import { setSelectedKpis, setSelectedKpisType } from "../provider/slices/dashboard-page-slice";

export default function KpiSelection() {
    const dispatch = useDispatch();
    const kpis = useSelector((state: RootState) => state.dashboard.kpis);
    const selectedType = useSelector((state: RootState) => state.dashboard.selectedKpisType);

    if (!kpis || !selectedType) return null;

    return (
        <div className="flex items-center justify-center gap-x-[24px] py-[6px] px-[12px] rounded-full bg-white/5">
            <TextButton
                label="Retenção"
                backgroundColor="#F6F8FC1A"
                isActive={false}
            />
            <TextButton
                label="Conversão"
                backgroundColor={selectedType === "conversion" ?  "#2DB3C8": "#F6F8FC1A"}
                onClick={() => {
                        dispatch(setSelectedKpisType("conversion"));
                        dispatch(setSelectedKpis(kpis?.conversionTrend))
                    }
                }
            />
            <TextButton
                label="Churn"
                backgroundColor="#F6F8FC1A"
                isActive={false} 
            />
            <TextButton
                label="ARPU"
                backgroundColor={selectedType === "arpu" ?  "#2DB3C8": "#F6F8FC1A"}
                onClick={() => {
                    dispatch(setSelectedKpisType("arpu"));
                    dispatch(setSelectedKpis(kpis?.arpuTrend));
                }}
            />
        </div>
    );
}