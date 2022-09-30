import "./App.css";
import MainNav from "./components/MainNav";
import DesignSystem from "./pages/DesignSystem";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <MainNav />
                <Routes>
                    <Route path="/design" element={<DesignSystem />} />
                    <Route index element={<Homepage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
