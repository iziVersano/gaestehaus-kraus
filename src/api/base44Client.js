import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68e3ca6c644715df95305a8d", 
  requiresAuth: true // Ensure authentication is required for all operations
});
