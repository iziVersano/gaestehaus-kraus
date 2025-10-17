import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication disabled for local development
// This prevents unwanted redirects to the Base44 domain during development
export const base44 = createClient({
  appId: "68e3ca6c644715df95305a8d",
  requiresAuth: false // Disabled for local development to prevent redirects
});
