import { Article, Home } from "./pages";
import { Route, Routes, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Cursor from "./components/Cursor";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    document.body.style["overflow-y"] = "hidden";
    setTimeout(() => {
      setIsLoading(false);
      document.body.style["overflow-y"] = "auto";
    }, 3000);
  }, []);

  return (
    <div className="App">
      {/* <Cursor /> */}
      {isLoading && (
        <>
          <div className="loader">
            <video width={100} height={100} autoPlay muted loop>
              <source src="src/assets/loader.mp4" type="video/mp4"></source>
            </video>
          </div>
        </>
      )}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/article/:id" element={<Article />}></Route>
      </Routes>
    </div>
  );
}

export default App;
