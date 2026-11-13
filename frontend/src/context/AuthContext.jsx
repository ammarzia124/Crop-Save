import { createContext, useContext, useEffect, useState } from 'react';
// import { supabase } from '../lib/supabase'; // ponytail: disabled auth, re-enable when Supabase configured

const AuthContext = createContext(null);

// ponytail: mock user bypasses auth - add real Supabase when needed
const MOCK_USER = {
  id: 'demo-user',
  email: 'demo@cropsave.app',
  user_metadata: { full_name: 'Demo User' }
};

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(MOCK_USER);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Skip Supabase auth - using mock user
    setLoading(false);
  }, []);

  const logout = async () => {
    // No-op for mock auth
  };

  const displayName = user?.user_metadata?.full_name
    || user?.email?.split('@')[0]
    || 'Researcher';

  return (
    <AuthContext.Provider value={{ user, loading, logout, displayName }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
