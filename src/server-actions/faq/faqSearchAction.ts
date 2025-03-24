'use server';

import { redirect } from 'next/navigation';

export const faqSearchAction = async (formData: FormData) => {
  const query = formData.get('faqQuery')?.toString().trim();

  if (!query) return;

  redirect(`/faq?query=${encodeURIComponent(query)}`);
};
