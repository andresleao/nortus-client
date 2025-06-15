import TextButton from "@/components/text-button";

export default function OptionsSelector() {
    return (
        <div className="flex items-center justify-center gap-x-[24px] py-[6px] px-[12px] rounded-full bg-white/5">
            <TextButton label="NBX" />
            <TextButton label="NBA"/>
            <TextButton label="NBO" />
        </div>
    );
}