import Separator from "../../separator";
import ProfileInfoFeature from "./profile-info-feature";

type ProfileInfoFeatureProps = {
    profiles: string[];
}

export default function ProfileSection({ profiles }: ProfileInfoFeatureProps) {
    return (
        <>
            <div className="flex flex-col px-6">
                <span className="font-medium text-base leading-4">
                    Perfil
                </span>
                <div className="flex flex-wrap gap-4 mt-[24px]">
                    {profiles.map((p, i) => <ProfileInfoFeature key={i} title={p} />)}
                </div>
            </div>
            <Separator marginVertical={"my-6"} />
        </>
    );
}