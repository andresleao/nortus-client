import ContentContainer from "../content-container";
import Separator from "../separator";

export default function CapturedPhrasesSection() {
    return (
        <>
            <div className="flex flex-col w-full px-6">
                <div className="mb-6">
                    <span className="font-medium text-base leading-4 text-[#F6F8FC]">
                        Frases captadas
                    </span>
                </div>
                <div className="flex flex-col gap-y-4">
                    <ContentContainer />
                    <ContentContainer />
                </div>
            </div>
            <Separator marginVertical={"my-6"} />
        </>
    );
}