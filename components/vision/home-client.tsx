'use client';

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

export default function HomeClient() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const data = await login();
      const client = await getClient();
      console.log(client);

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
    <div className="mt-[--header-height] pt-[47px] flex justify-center w-full mb-[40px]">
      <UserSection />
      <div className="flex flex-col ml-6">
        <div className="flex gap-x-6 mb-[40px]">
          <IaSugestionSection />
          <SimulationCardsSection />
        </div>
        <ClassificationSection />
      </div>
    </div>
  );
}
