"use client";

import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import { useRouter } from "next/navigation";

const VOTING_ENABLED = true;

export default function Voting({ session }) {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/");
      return;
    }
    fetchOptions();
    checkIfVoted();
  }, [session, router]);

  const fetchOptions = async () => {
    try {
      const { data, error } = await supabase.from("options").select("*");
      if (error) throw error;
      setOptions(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const checkIfVoted = async () => {
    try {
      const { data, error } = await supabase
        .from("votes")
        .select("id")
        .eq("user_id", session.user.id)
        .maybeSingle();

      if (error && error.code !== "PGRST116") {
        throw error;
      }

      if (data) {
        router.push("/thank-you");
      }
    } catch (error) {
      setError("Error checking vote status");
    }
  };

  const submitVote = async () => {
    try {
      setError(null);
      const { error } = await supabase
        .from("votes")
      if (error) throw error;
      router.push("/thank-you");
    } catch (error) {
      setError("Voting failed");
      await supabase.auth.signOut();
      router.push("/?error=voting-failed");
    }
  };

  if (!VOTING_ENABLED) {
    return <p className="text-center">Voting is currently closed.</p>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-xl p-6 space-y-6 border border-gray-700">
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          Cast Your Vote
        </h1>

        <div className="space-y-4">
          <label className="block text-gray-300 text-sm font-medium mb-2">
            Choose an option:
          </label>
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors duration-200"
          >
            <option value="">Select an option</option>
            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={submitVote}
          disabled={!selectedOption}
          className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit Vote
        </button>
      </div>
    </div>
  );
}
