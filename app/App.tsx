
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ProjectWizardProvider } from './context/ProjectWizardContext';

// Layouts
import AdminLayout from './app/admin/layout';
import EngineeringLayout from './app/editor/layout';
import PublicNavbar from './components/layout/PublicNavbar';
import Footer from './components/layout/Footer';

// Pages
import LandingPage from './app/page';
import Login from './app/auth/login/page';
import Register from './app/auth/register/page';
import ForgotPassword from './app/auth/forgot-password/page';
import AdminDashboard from './app/admin/dashboard/page';
import EditorVisual from './app/editor/visual/page';
import EditorCode from './app/editor/code/page';
import SiteMapper from './app/editor/mapper/page';
import LiveInspector from './app/editor/inspect/page';
import SEOFilesGenerator from './app/seo/generator/page';
import DatabaseGenerator from './app/database/generator/page';
import InfrastructurePage from './app/admin/infrastructure/page';
import FinancialPage from './app/admin/financial/page';
import UsersPage from './app/admin/users/page';
import ClientPortal from './app/client/portal/page';
import WizardLayout from './app/client/new-project/layout';
import WizardStep1 from './app/client/new-project/step-1/page';
import WizardStep2 from './app/client/new-project/step-2/page';
import WizardStep3 from './app/client/new-project/step-3/page';
import WizardStep4 from './app/client/new-project/step-4/page';
import WizardReview from './app/client/new-project/review/page';

const AuthGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return null;
  if (!user) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

const PublicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-[#090b14] text-white flex flex-col">
    <PublicNavbar />
    <main className="flex-1">{children}</main>
    <Footer variant="public" />
  </div>
);

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ProjectWizardProvider>
        <Routes>
          {/* Rotas Públicas */}
          <Route path="/" element={<PublicLayout><LandingPage /></PublicLayout>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Fluxo de Novo Projeto (Wizard) */}
          <Route path="/client/new-project" element={<AuthGuard><WizardLayout /></AuthGuard>}>
            <Route path="step-1" element={<WizardStep1 />} />
            <Route path="step-2" element={<WizardStep2 />} />
            <Route path="step-3" element={<WizardStep3 />} />
            <Route path="step-4" element={<WizardStep4 />} />
            <Route path="review" element={<WizardReview />} />
          </Route>

          {/* Área Administrativa e Negócios */}
          <Route path="/admin/*" element={
            <AuthGuard>
              <AdminLayout>
                <Routes>
                  <Route path="dashboard" element={<AdminDashboard />} />
                  <Route path="infrastructure" element={<InfrastructurePage />} />
                  <Route path="financial" element={<FinancialPage />} />
                  <Route path="users" element={<UsersPage />} />
                </Routes>
              </AdminLayout>
            </AuthGuard>
          } />

          {/* Área Global de Geradores e SEO */}
          <Route path="/seo/generator" element={<AuthGuard><SEOFilesGenerator /></AuthGuard>} />
          <Route path="/database/generator" element={<AuthGuard><DatabaseGenerator /></AuthGuard>} />

          {/* Área do Cliente */}
          <Route path="/client/portal" element={
            <AuthGuard>
              <AdminLayout>
                <ClientPortal />
              </AdminLayout>
            </AuthGuard>
          } />

          {/* Área de Engenharia (Imersiva) */}
          <Route path="/editor/*" element={
            <AuthGuard>
              <EngineeringLayout>
                <Routes>
                  <Route path="visual" element={<EditorVisual />} />
                  <Route path="code" element={<EditorCode />} />
                  <Route path="mapper" element={<SiteMapper />} />
                  <Route path="inspect" element={<LiveInspector />} />
                </Routes>
              </EngineeringLayout>
            </AuthGuard>
          } />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ProjectWizardProvider>
    </AuthProvider>
  );
};

export default App;
