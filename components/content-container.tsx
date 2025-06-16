type ContentContainerProps = {
    phrase: string;
}

export default function ContentContainer({ phrase }: ContentContainerProps) {
    return (
        <div className="rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px] p-[12px] bg-white/5">
            <div>
                <span className="font-normal text-[14px] leading-[16px] text-[#EFF6FF] mb-[8px]">
                    {phrase}
                </span>
            </div>
            <span className="font-semibold text-xs leading-4 text-[#EFF6FF] opacity-50">
                Atendimento do dia 12/05/2025
            </span>
        </div>
    );
}