import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx"; // Verify this matches the exact case and spelling
import Createpage from "./pages/Createpage.jsx";
import Navbar from "./components/Navbar";
import { useColorModeValue } from "@chakra-ui/color-mode";

function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<Createpage />} />
      </Routes>
    </Box>
  );
}

export default App;
