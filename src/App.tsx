import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/ui/theme-provider"
import { LanguageProvider } from "./contexts/LanguageContext"
import { Toaster } from "./components/ui/toaster"
import { Portfolio } from "./pages/Portfolio"
import { BlankPage } from "./pages/BlankPage"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="steveceto-theme">
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="*" element={<BlankPage />} />
          </Routes>
        </Router>
        <Toaster />
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
