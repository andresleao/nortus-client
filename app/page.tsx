import IaSugestionSection from '@/components/vision/ia-suggestion/ia-sugestion-section';
import UserSection from '@/components/vision/user/user-section';

export default function Home() {
  return (
    <div className="mt-[--header-height] pt-[47px] flex flex-col items-center w-full">
      <div className="flex items-start">
        <UserSection />
        <IaSugestionSection/>
      </div>
    </div>
  );
}
