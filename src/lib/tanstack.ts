import { cache } from 'react';
import { QueryClient } from '@tanstack/react-query';

// React의 cache를 사용하여 요청별로 QueryClient 인스턴스 유지
export const getQueryClient = cache(() => new QueryClient());
