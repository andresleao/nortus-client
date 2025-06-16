'use client';

import { useEffect, useState } from "react";
import ChatContainer from "./chat-container";
import { useDispatch } from "react-redux";
import { getConversation } from "@/api/api";
import { AppSpinner } from "../app-spinner";

export default function ChatClient() {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            const chatMessagesData = await getConversation();

            if (chatMessagesData) {
                console.log(chatMessagesData);
                // dispatch(setKpis(kpisData));
                // dispatch(setSelectedKpis(kpisData.arpuTrend));
            }

            setIsLoading(false);

        };
        fetchData();
    }, [dispatch]);

    if (isLoading) {
        return <AppSpinner fullScreen />
    }

    return <div className="mt-[--header-height] pt-[47px] flex flex-col items-center w-full mb-[40px]">
        <ChatContainer />
    </div>
}