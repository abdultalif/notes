import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Outlet,
} from "react-router-dom";
import "./styles/style.css";
import "./styles/auth.css";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { LanguageProvider } from "./context/Language";
import { ModeProvider } from "./context/Mode";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/ProtectedRoute";
import RedirectIfAuthenticated from "./components/RedirectIfAuthenticated";
import ArchivedNotesPage from "./pages/ArchivedPage";
import AddNotePage from "./pages/AddPage";
import NoteDetailPage from "./pages/NoteDetailPage";

function NotesLayout() {
  return <Outlet />;
}
function App() {
  const queryClient = new QueryClient();

  return (
    <LanguageProvider>
      <ModeProvider>
        <QueryClientProvider client={queryClient}>
          <Router>
            <ConditionalNavbar />
            <Routes>
              <Route
                path="/"
                element={
                  <RedirectIfAuthenticated>
                    <LoginPage />
                  </RedirectIfAuthenticated>
                }
              />
              <Route
                path="/register"
                element={
                  <RedirectIfAuthenticated>
                    <RegisterPage />
                  </RedirectIfAuthenticated>
                }
              />

              <Route
                path="/notes"
                element={
                  <ProtectedRoute>
                    <NotesLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<HomePage />} />
                <Route path="new" element={<AddNotePage />} />
                <Route path="archived" element={<ArchivedNotesPage />} />
                <Route path=":id" element={<NoteDetailPage />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ToastContainer />
          </Router>
        </QueryClientProvider>
      </ModeProvider>
    </LanguageProvider>
  );
}

function ConditionalNavbar() {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/" || location.pathname === "/register";

  return !isAuthPage ? <Navbar /> : null;
}

export default App;
