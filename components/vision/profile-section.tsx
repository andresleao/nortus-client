import ProfileInfoFeature from "./profile-info-feature";

export default function ProfileSection() {
    return (
        <div className="flex flex-wrap gap-4 px-6">
            <ProfileInfoFeature title="Família com filhos" />
            <ProfileInfoFeature title="Profissional liberal"/>
            <ProfileInfoFeature title="Investidor" />
        </div>
    );
}