import Image from "next/image";

export default function ChatContainer() {
    return (
        <div className="rounded-tl-[16px] rounded-tr-[16px] border-white/20 rounded-bl-[16px] bg-[#1876D2] w-[504px] px-[16px] pt-[8px] pb-[12px]">
            <div className="flex flex-col">
                <span className="font-semibold text-[14px] leading-[20px] text-white/50">
                    Ricardo Leite
                </span>
                <p className="font-normal text-[14px] leading-[20px] mt-[8px]">
                    Oi! Tudo certo? Eu tava aqui no app conferindo a parte do meu seguro de celular, e vi que tem outras opções… Fiquei um pouco perdido. Tem alguém pra me ajudar?
                </p>
                <div className="flex gat-[10px] justify-end mt-[4px]">
                    <span className="font-semibold text-[12px] leading-[16px]">
                        12:23
                    </span>
                    <Image
                        src={"/status_chat.svg"}
                        alt={"ícone de seta de check"}
                        width={0}
                        height={0}
                        style={{ width: '16px', height: '16px' }}
                        priority
                    />
                </div>
            </div>
        </div>
    );
}