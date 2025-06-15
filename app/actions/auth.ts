'use server';

import { login } from '@/api/api';
import { cookies } from 'next/headers';

export async function serverLogin() {
  try {
    const data = await login();
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log(data);

    //const cookieStore = cookies();

    // cookieStore.set({
    //   name: 'token',
    //   value: data.token,
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === 'production',
    //   sameSite: 'lax',
    //   path: '/',
    //   maxAge: 60 * 60 * 24, // 1 dia
    // });

    return { user: data.user };
  } catch (error) {
    console.error('Login error:', error);
    throw new Error('Failed to login');
  }
}