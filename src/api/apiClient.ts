import { AppRouter } from 'mye-apis';
import { createTRPCClient, httpBatchLink } from '@trpc/client';

export const client = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/trpc',
      async headers() {
        return {
          authorization: getAuthToken(),
        };
      },
    }),
  ],
});

function getAuthToken() {
  return localStorage.getItem('authToken') ?? '';
}
