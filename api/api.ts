import axios from 'axios';
import { LoginResponse } from './types/login-response';
import { KpisResponse } from './types/kpis-response';
import { Offer } from './types/offer';
import { Segment } from './types/segment';
import { SegmentsResponse } from './types/segment-response';
import { UserProfile } from './types/user-profile';
import { Chat } from './types/chat';
import { Client } from './types/client';

const api = axios.create({
  baseURL: 'https://loomi.s3.us-east-1.amazonaws.com/mock-api-json',
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function login(): Promise<LoginResponse> {
  try {
    const response = await api.get<LoginResponse>('/auth/login.json');

    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Erro na API: ${error.response.status} - ${error.response.data}`);
    } else {
      throw new Error(error.message);
    }
  }
}

export async function getClient(clientId: number = 1): Promise<Client> {
    try {
      const response = await api.get<Client>(
        `https://loomi.s3.us-east-1.amazonaws.com/mock-api-json/clients/${clientId}.json`
      );
      return response.data;
    } catch (error: any) {
      if (error.response) {
        throw new Error(`Erro na API: ${error.response.status} - ${error.response.data}`);
      } else {
        throw new Error(error.message);
      }
    }
  }

export async function getKpis(): Promise<KpisResponse> {
  try {
    const response = await api.get<KpisResponse>(
      'https://loomi.s3.us-east-1.amazonaws.com/mock-api-json/dashboard/kpis.json'
    );

    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Erro na API: ${error.response.status} - ${error.response.data}`);
    } else {
      throw new Error(error.message);
    }
  }
}

export async function getOffers(): Promise<Offer[]> {
    try {
      const response = await api.get<Offer[]>(
        'https://loomi.s3.us-east-1.amazonaws.com/mock-api-json/dashboard/offers.json'
      );

      return response.data;
    } catch (error: any) {
      if (error.response) {
        throw new Error(`Erro na API: ${error.response.status} - ${error.response.data}`);
      } else {
        throw new Error(error.message);
      }
    }
  }

  export async function getSegments(): Promise<Segment[]> {
    try {
      const response = await api.get<SegmentsResponse>(
        'https://loomi.s3.us-east-1.amazonaws.com/mock-api-json/dashboard/segments.json'
      );

      return response.data.segments;
    } catch (error: any) {
      if (error.response) {
        throw new Error(`Erro na API: ${error.response.status} - ${error.response.data}`);
      } else {
        throw new Error(error.message);
      }
    }
  }

  export async function getUserProfile(userId: number = 1): Promise<UserProfile> {
    try {
      const response = await api.get<UserProfile>(
        `https://loomi.s3.us-east-1.amazonaws.com/mock-api-json/users/${userId}.json`
      );

      return response.data;
    } catch (error: any) {
      if (error.response) {
        throw new Error(`Erro na API: ${error.response.status} - ${error.response.data}`);
      } else {
        throw new Error(error.message);
      }
    }
  }

  export async function getConversation(chatId: number = 1): Promise<Chat[]> {
    try {
      const response = await api.get<Chat[]>(
        `https://loomi.s3.us-east-1.amazonaws.com/mock-api-json/conversations/${chatId}.json`
      );
      return response.data;
    } catch (error: any) {
      if (error.response) {
        throw new Error(`Erro na API: ${error.response.status} - ${error.response.data}`);
      } else {
        throw new Error(error.message);
      }
    }
  }