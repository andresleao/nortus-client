import ContentContainer from "@/components/content-container";
import Separator from "@/components/separator";

type CapturedPhrasesSectionProps = {
    phrases: string[];
}

export default function CapturedPhrasesSection({ phrases }: CapturedPhrasesSectionProps) {
    return (
        <>
            <div className="flex flex-col w-full px-6">
                <div className="mb-6">
                    <span className="font-medium text-base leading-4 text-[#F6F8FC]">
                        Frases captadas
                    </span>
                </div>
                <div className="flex flex-col gap-y-4">
                   {phrases.map((p, i) =>  <ContentContainer key={i} phrase={p} />)}
                </div>
            </div>
            <Separator marginVertical={"my-6"} />
        </>
    );
}