import Separator from "../../separator";
import ProfileInfoFeature from "./profile-info-feature";

export default function ProfileSection() {
    return (
        <>
            <div className="flex flex-col px-6">
                <span className="font-medium text-base leading-4">
                    Perfil
                </span>
                <div className="flex flex-wrap gap-4 mt-[24px]">
                    <ProfileInfoFeature title="Família com filhos" />
                    <ProfileInfoFeature title="Profissional liberal" />
                    <ProfileInfoFeature title="Investidor" />
                </div>
            </div>
            <Separator marginVertical={"my-6"} />
        </>
    );
}