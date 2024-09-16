import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RootLayout from "./layout";
import { Home } from "./pages/home/Home";
import { Listing } from "./pages/listing/Listing";
import { AddListing } from "./pages/addListing/AddListing";

function App() {
  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing/:id" element={<Listing />} />
          <Route path="/listing/add" element={<AddListing />} />
        </Routes>
      </RootLayout>
    </Router>
  );
}

export default App;
