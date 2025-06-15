import { Action } from "@/api/types/actions";

type ActionDisplayProps = {
    action: Action;
}

export default function ActionDisplay({ action }: ActionDisplayProps) {
    function formatTimeAgo(timestamp: string): string {
        const now = new Date();
        const past = new Date(timestamp);

        const diffInMs = now.getTime() - past.getTime();
        const diffInSec = Math.floor(diffInMs / 1000);
        const diffInMin = Math.floor(diffInSec / 60);
        const diffInHours = Math.floor(diffInMin / 60);
        const diffInDays = Math.floor(diffInHours / 24);

        if (diffInMin < 1) return 'agora mesmo';
        if (diffInMin < 60) return `${diffInMin} min atrás`;
        if (diffInHours < 24) return `${diffInHours}h atrás`;

        return `${diffInDays}d atrás`;
      }

    return (
        <div className="flex flex-col">
            <span className="font-normal text-xs text-[#EFF6FF80] leading-4 mb-[4px]">
                {formatTimeAgo(action.timestamp)}
            </span>
            <span className="font-normal text-[14px] text-[#EFF6FF] leading-[16px] mb-[4px]">
                {action.description}
            </span>
            <span className="font-normal text-xs text-[#EFF6FF80] opacity-50 leading-4">
                Tempo na página 3min e 42 seg
            </span>
        </div>
    );
}