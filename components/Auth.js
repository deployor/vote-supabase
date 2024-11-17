"use client";

import { useState } from "react";
import { supabase } from "../utils/supabaseClient";

export default function Auth() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const signInWithMicrosoft = async () => {
        try {
            setLoading(true);
            setError(null);
            const { error } = await supabase.auth.signInWithOAuth({
                provider: "azure",
                options: {
                    redirectTo: `${window.location.origin}/callback`,
                    queryParams: {
                        prompt: "select_account",
                    },
                },
            });
            if (error) throw error;
        } catch (error) {
            setError("Authentication failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
            <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-xl p-8 space-y-8 border border-gray-700">
                {/* ... existing header and description ... */}

                {error && (
                    <div className="bg-red-500/10 border border-red-500/50 text-red-500 rounded-md p-3 text-sm">
                        {error}
                    </div>
                )}

                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold text-white">Bean Vote 2024</h1>
                    <p className="text-gray-400 text-sm">Annual Bean Preference Survey</p>
                </div>
                <div className="flex justify-center my-20">
                    <img src="/images/Logo.png" alt="Logo" className="w-1/4 h-auto"/>
                </div>

                <div className="space-y-4">
                    <p className="text-gray-300">
                        Vote for your favorite beans!
                    </p>

                    <div className="bg-gray-700/50 rounded-lg p-4 space-y-2">
                        <h2 className="text-white font-medium">How to Vote:</h2>
                        <ol className="text-gray-300 text-sm list-decimal list-inside space-y-1">
                            <li>Sign in with your school Microsoft account</li>
                            <li>Select your beans</li>
                            <li>Submit your vote (one vote per person)</li>
                        </ol>
                    </div>
                </div>

                <button
                    onClick={signInWithMicrosoft}
                    disabled={loading}
                    className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                    {loading ? (
                        <span>Signing in...</span>
                    ) : (
                        <>
                            <span>Sign in with Microsoft</span>
                        </>
                    )}
                </button>

                <p className="text-sm text-gray-400 text-center">
                    Note: You can only vote once. <br/> <br/>
                    Your vote is completely anonymous. <br/> <br/>
                    See <a href="/privacy" className="text-blue-500 underline">/privacy</a> for more info! <br/>
                </p>
            </div>
        </div>
    );
}
