type ProfileInfoFeatureProps = {
    title: string
}

export default function ProfileInfoFeature({ title }: ProfileInfoFeatureProps) {
    return (
        <div className="rounded-[100px] pt-1 pr-2 pb-1 pl-2 bg-[#1876D2]">
            <span className="font-medium text-xs leading-4">
                {title}
            </span>
        </div>
    );
}