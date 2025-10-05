import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Session } from "@supabase/supabase-js";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Report from "./pages/Report";
import Games from "./pages/Games";
import Check from "./pages/Check";
import Articles from "./pages/Articles";
import Settings from "./pages/Settings";
import SpeciesGuide from "./pages/SpeciesGuide";
import QuizSelection from "./pages/QuizSelection";
import QuizQuestion from "./pages/QuizQuestion";
import WildGuess from "./pages/WildGuess";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children, session }: { children: React.ReactNode; session: Session | null }) => {
  if (!session) {
    return <Navigate to="/auth" replace />;
  }
  return <>{children}</>;
};

const App = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setLoading(false);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="animate-pulse text-primary text-xl font-semibold">Loading WildCall...</div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={session ? <Navigate to="/" replace /> : <Auth />} />
            <Route
              path="/"
              element={
                <ProtectedRoute session={session}>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/report"
              element={
                <ProtectedRoute session={session}>
                  <Report />
                </ProtectedRoute>
              }
            />
            <Route
              path="/games"
              element={
                <ProtectedRoute session={session}>
                  <Games />
                </ProtectedRoute>
              }
            />
            <Route
              path="/check"
              element={
                <ProtectedRoute session={session}>
                  <Check />
                </ProtectedRoute>
              }
            />
            <Route
              path="/articles"
              element={
                <ProtectedRoute session={session}>
                  <Articles />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute session={session}>
                  <Settings />
                </ProtectedRoute>
              }
            />
            <Route
              path="/species-guide"
              element={
                <ProtectedRoute session={session}>
                  <SpeciesGuide />
                </ProtectedRoute>
              }
            />
            <Route
              path="/quiz-selection"
              element={
                <ProtectedRoute session={session}>
                  <QuizSelection />
                </ProtectedRoute>
              }
            />
            <Route
              path="/quiz-question"
              element={
                <ProtectedRoute session={session}>
                  <QuizQuestion />
                </ProtectedRoute>
              }
            />
            <Route
              path="/wild-guess"
              element={
                <ProtectedRoute session={session}>
                  <WildGuess />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
