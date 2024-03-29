import { onAuthStateChanged } from "firebase/auth";

import MainLayout from "./layouts/MainLayout";
import { useAppDispatch } from "./redux/hooks";
import { auth } from "./lib/firebase";

import { useEffect } from "react";
import { setLoading, setUser } from "./redux/features/user/userSlice";
import Toaster from "./components/ui/Toaster";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

  return (
    <div>
      <Toaster />
      <MainLayout />
    </div>
  );
}

export default App;
