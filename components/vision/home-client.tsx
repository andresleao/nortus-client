'use client';
export const dynamic = "force-static";

import ClassificationSection from '@/components/vision/classification/classification-section';
import IaSugestionSection from '@/components/vision/ia-suggestion/ia-sugestion-section';
import SimulationCardsSection from '@/components/vision/simulation-cards-section';
import UserSection from '@/components/vision/user/user-section';
import { useEffect, useState } from 'react';
import { AppSpinner } from '@/components/app-spinner';
import { useDispatch } from 'react-redux';
import { getClient, login } from '@/api/api';
import { setUser } from '@/components/provider/slices/auth-slice';
import { setClient } from '../provider/slices/vision-page-slice';
import Cookies from 'js-cookie';

export default function HomeClient() {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            localStorage.removeItem('user');

            const data = await login();
            const client = await getClient();

            Cookies.set('token', data.token, {
                expires: 7,
                secure: true,
                sameSite: 'strict',
            });

            localStorage.setItem('user', JSON.stringify(data.user));

            setIsLoading(false);

            dispatch(setUser(data.user));
            dispatch(setClient(client));
        };
        fetchData();
    }, [dispatch]);

    if (isLoading) {
        return <AppSpinner fullScreen />
    }

    return (
        <div className="mt-[--header-height] pt-[47px] mb-[40px] w-full 2lx:ml-0 px-6 pb-6">
            <div className="flex flex-col 2xl:flex-row items-center 2xl:items-start gap-6 2xl:gap-o">
                <UserSection />
                <div className="flex flex-col lg:ml-6 w-full">
                    <div className="flex flex-col xxl-row gap-x-6 mb-[40px] items-center justify-center xxl-mt">
                        <IaSugestionSection />
                        <SimulationCardsSection />
                    </div>
                    <div className="flex justify-center 2xl:justify-start">
                        <ClassificationSection />
                    </div>
                </div>
            </div>
        </div>
    );
}
