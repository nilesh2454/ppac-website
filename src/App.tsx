import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

// Lazily load page components
const Home = lazy(() => import("./pages/Home"));
const Activities = lazy(() => import("./pages/Activities"));
const PlacementInfo = lazy(() => import("./pages/PlacementInfo"));
const Companies = lazy(() => import("./pages/Companies"));
const StudyMaterials = lazy(() => import("./pages/StudyMaterials"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Alumni = lazy(() => import("./pages/Alumni"));
const Notifications = lazy(() => import("./pages/Notifications"));
const RegisterAlumni = lazy(() => import("./pages/RegisterAlumni"));

// Admin Imports (also lazy loaded)
const AdminLogin = lazy(() => import("./admin/pages/AdminLogin"));
const AdminLayout = lazy(() => import("./admin/components/AdminLayout"));
const ProtectedRoute = lazy(() => import("./admin/components/ProtectedRoute"));
const Dashboard = lazy(() => import("./admin/pages/Dashboard"));
const ManageNotifications = lazy(() => import("./admin/pages/ManageNotifications"));
const ManageStudyMaterials = lazy(() => import("./admin/pages/ManageStudyMaterials"));
const ManageActivities = lazy(() => import("./admin/pages/ManageActivities"));
const ManageAlumni = lazy(() => import("./admin/pages/ManageAlumni"));
const ManageGallery = lazy(() => import("./admin/pages/ManageGallery"));

// Context Providers
import { NotificationsProvider } from "./context/NotificationsContext";

const queryClient = new QueryClient();

// Loading Fallback Component
const PageLoader = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="text-xl font-semibold">Loading...</div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <NotificationsProvider>
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Main Website Routes */}
              <Route path="/*" element={
                <Layout>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/activities" element={<Activities />} />
                    <Route path="/placement-info" element={<PlacementInfo />} />
                    <Route path="/companies" element={<Companies />} />
                    <Route path="/study-materials" element={<StudyMaterials />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/alumni" element={<Alumni />} />
                    <Route path="/register-alumni" element={<RegisterAlumni />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Layout>
              } />

              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<ProtectedRoute />}>
                <Route path="" element={<AdminLayout />}>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="notifications" element={<ManageNotifications />} />
                  <Route path="materials" element={<ManageStudyMaterials />} />
                  <Route path="activities" element={<ManageActivities />} />
                  <Route path="alumni" element={<ManageAlumni />} />
                  <Route path="gallery" element={<ManageGallery />} />
                </Route>
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </NotificationsProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
