import { Menu, X } from "lucide-react";
import dropdown from "../../assets/media/dropdown.svg";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface TopicItem {
  title: string;
  href: string;
}

interface TopicSection {
  title: string;
  items: TopicItem[];
}

const topics: TopicSection[] = [
  {
    title: "Introduction to cognitive economics",
    items: [
      { title: "Foundation of cognitive economics", href: "/resources/foundation" },
      { title: "Application in finance and labor economics", href: "/resources/application" },
      { title: "Housing finance and market design : equity", href: "/resources/housing" },
    ],
  },
  {
    title: "Human AI Interactions and earnings in the cognitive economy",
    items: [
      { title: 'Manufacturing "Ground truth"', href: "/resources/manufacturing" },
      { title: "Training the AI", href: "/resources/training" },
      { title: "Human-AI decision making protocols", href: "/resources/protocols" },
      { title: "Training calibration", href: "/resources/calibration" },
      { title: "Preparing workers for the cognitive economy", href: "/resources/workers" },
    ],
  },
];

export function ResourcesSidebar() {
  const [expandedSections, setExpandedSections] = useState<string[]>([topics[0].title]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSection = (title: string) => {
    setExpandedSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="fixed bottom-4 right-4 z-50 md:hidden bg-white p-3 rounded-full shadow-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Overlay for Mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed md:sticky top-0 left-0 z-40 w-72 h-screen bg-white border-r transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="h-full overflow-y-auto p-6">
          <h2 className="text-3xl font-outfit font-bold mb-6">Topics</h2>
          <div className="space-y-4">
            {topics.map((section) => (
              <div className="font-outfit" key={section.title}>
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex items-center gap-3 w-full text-left hover:bg-gray-100 p-3 rounded"
                >
                  <img
                    src={dropdown}
                    alt="Toggle"
                    className={`w-4 h-4 transform transition-transform duration-300 ${
                      expandedSections.includes(section.title) ? "rotate-0" : "rotate-180"
                    }`}
                  />
                  <span className="text-sm font-bold">{section.title}</span>
                </button>
                {expandedSections.includes(section.title) && (
                  <div className="ml-6 space-y-2 mt-2">
                    {section.items.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className={`block text-sm font-light py-1 px-3 hover:bg-gray-100 rounded ${
                          location.pathname === item.href ? "bg-gray-100 font-medium" : ""
                        }`}
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
