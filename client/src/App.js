import "./App.css";
import Chat from "./Chat";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TinderCards from "./TinderCards";
import SignUp from "./pages/SignUp";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/signup" element={<SignUp/>}/>
          <Route
            path="/"
            element={
              <>
                <Header />
                <TinderCards />
              </>
            }
          />
          <Route
            path="/chat"
            element={
              <>
                <Header backButton={true} />
                <Chat />
              </>
            }
          />
        </Routes>
      </Router>
      {/* Header */}

      {/* TInder Cards */}
      {/* Buttons at bottom */}

      {/* Chat Screen */}
      {/* Individual chats */}
    </div>
  );
}

export default App;
