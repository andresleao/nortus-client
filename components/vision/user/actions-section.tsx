import { Action } from "@/api/types/actions";
import ActionDisplay from "./action-display";

type ActionsSectionProps = {
    actions: Action[];
}

export default function ActionsSection({ actions }: ActionsSectionProps) {
    return (
        <div className="flex flex-col w-full px-6">
            <div className="mb-6">
                <span className="font-medium text-base leading-4 text-[#F6F8FC]">
                    Ações no App
                </span>
            </div>
            <div className="flex flex-col gap-y-4">
                {actions.map((a, i) => <ActionDisplay key={i} action={a} />)}
            </div>
        </div>
    );
}