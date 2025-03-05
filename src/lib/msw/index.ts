export const initMsw = async () => {
  if (typeof window !== 'undefined') return;

  const { server } = await import('./server');
  server.listen();
};
