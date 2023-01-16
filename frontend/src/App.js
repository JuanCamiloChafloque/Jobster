import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./screens/Error";
import Landing from "./screens/Landing";
import Register from "./screens/Register";
import AddJob from "./screens/Dashboard/AddJob";
import AllJobs from "./screens/Dashboard/AllJobs";
import Profile from "./screens/Dashboard/Profile";
import Stats from "./screens/Dashboard/Stats";
import SharedLayout from "./screens/Dashboard/SharedLayout";
import ProtectedRoute from "./screens/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
