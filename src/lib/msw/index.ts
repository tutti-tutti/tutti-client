export const initMsw = async () => {
  if (typeof window === 'undefined') {
    const { server } = await import('./server');
    server.listen();
  } else {
    const { worker } = await import('./worker');
    await worker.start();
  }
};
