import { LoadingScreen } from "@/components/LoadingScreen";
import { MainLayout } from "@/layouts/MainLayout";
import { Home } from "@/pages/Home";

function App() {
  return (
    <>
      <LoadingScreen />
      <MainLayout>
        <Home />
      </MainLayout>
    </>
  );
}

export default App;
