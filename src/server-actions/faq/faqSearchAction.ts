'use server';

import { FAQS_ENDPOINTS } from '@/constants';
import { redirect } from 'next/navigation';

export const faqSearchAction = async (formData: FormData) => {
  const query = formData.get('faqQuery')?.toString().trim();

  if (!query) return;

  redirect(`${FAQS_ENDPOINTS.BASE}?query=${encodeURIComponent(query)}`);
};
