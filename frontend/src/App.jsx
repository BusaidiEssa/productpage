import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage.jsx"; // Verify this matches the exact case and spelling
import CreatePage from "./pages/Createpage.jsx";
import Navbar from "./components/Navbar";
import { useColorModeValue } from "@chakra-ui/color-mode";

function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
