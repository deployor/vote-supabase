'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../utils/supabaseClient';

export default function Callback() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let isMounted = true;

    const handleCallback = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (!isMounted) return;
        if (error) throw error;
        if (session) {
          router.replace('/');
        }
      } catch (error) {
        console.error('Auth error:', error);
        if (isMounted) {
          router.replace('/');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    handleCallback();
    return () => {
      isMounted = false;
    };
  }, [router]);

  if (!mounted) return null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      {loading ? (
        <div className="text-white">Processing login...</div>
      ) : (
        <div className="text-white">Redirecting...</div>
      )}
    </div>
  );
}