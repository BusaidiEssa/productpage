import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx"; // Ensure the case matches the component definition
import CreatePage from "./pages/CreatePage.jsx"; // Ensure the case matches the component definition
import Navbar from "./components/Navbar"; // Verify path and component exist
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
