import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Activities from "./pages/Activities";
import PlacementInfo from "./pages/PlacementInfo";
import Companies from "./pages/Companies";
import StudyMaterials from "./pages/StudyMaterials";
import Leaderboard from "./pages/Leaderboard";
import Gallery from "./pages/Gallery";
import Alumni from "./pages/Alumni";
import Notifications from "./pages/Notifications";
import NotFound from "./pages/NotFound";
import RegisterAlumni from "./pages/RegisterAlumni";
import UserProfile from "./components/auth/UserProfile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/placement-info" element={<PlacementInfo />} />
              <Route path="/companies" element={<Companies />} />
              <Route path="/study-materials" element={<StudyMaterials />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/alumni" element={<Alumni />} />
              <Route path="/register-alumni" element={<RegisterAlumni />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;