
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const location = useLocation();
  const { toast } = useToast();

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else if (prefersDark) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
    
    toast({
      title: `${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)} mode activated`,
      description: `You've switched to ${newTheme} mode.`,
      duration: 1500
    });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link to="/" className="font-bold text-xl text-primary">
              GDPR Cookie Consent Generator
            </Link>
          </div>
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu}></div>

      <aside className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'} border-r border-gray-200 dark:border-gray-700 shadow-lg`}>
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-lg text-primary">Menu</h2>
            <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              <X size={20} />
            </button>
          </div>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className={`block px-4 py-2 rounded-md transition-colors ${location.pathname === '/' ? 'bg-primary text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className={`block px-4 py-2 rounded-md transition-colors ${location.pathname === '/terms' ? 'bg-primary text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                onClick={toggleMenu}
              >
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className={`block px-4 py-2 rounded-md transition-colors ${location.pathname === '/privacy' ? 'bg-primary text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                onClick={toggleMenu}
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`block px-4 py-2 rounded-md transition-colors ${location.pathname === '/about' ? 'bg-primary text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                onClick={toggleMenu}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/how-to-use"
                className={`block px-4 py-2 rounded-md transition-colors ${location.pathname === '/how-to-use' ? 'bg-primary text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                onClick={toggleMenu}
              >
                How to Use
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <div className="ad-space h-20 w-full bg-gray-200 dark:bg-gray-800"></div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} GDPR Cookie Consent Generator. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link to="/privacy" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
