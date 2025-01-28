import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Import icons
import dropdown from "../../assets/media/dropdown.svg"; // Dropdown arrow icon

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
    title: "Introduction to Cognitive Economics",
    items: [
      {
        title: "Foundation of Cognitive Economics",
        href: "/resources/foundation",
      },
      {
        title: "Application in Finance and Labor Economics",
        href: "/resources/application",
      },
      {
        title: "Housing Finance and Market Design : Equity Sharing",
        href: "/resources/housing",
      },
      {
        title: "An Accelerator for Cognitive Economics",
        href: "/resources/accelerator",
      },
    ],
  },
  {
    title: "Housing Finance and Market Design: Equity Sharing",
    items: [
      {
        title: "Importance and Problems of Housing Finance",
        href: "/resources/importanceandproblem",
      },
      {
        title:
          "The Case for Equity Sharing Mortgages and Lessons from the Journey",
        href: "/resources/caseandlesson",
      },
      {
        title: "Future Directions and Selected References",
        href: "/resources/futureandreferences",
      },
    ],
  },

  {
    title: "Teaching Humans and AIs to collaborate in Medical Decision-Making",
    items: [
      {
        title: 'Cognitive Economics in Human-AI Decision-Making"',
        href: "/resources/manufacturing",
      },
      {
        title: "Training AI and Human-AI Collaboration",
        href: "/resources/training",
      },
      {
        title: "Training Calibration and References",
        href: "/resources/caliberationandreferences",
      },
    ],
  },
  {
    title:
      "Building Resilient Careers for the Cognitive Economy: The Copenhagen Life Panel",
    items: [
      {
        title: "Career Trajectories and the Copenhagen Life Panel",
        href: "/resources/career",
      },
      {
        title: "Preparing Workers for Careers in the Cognitive Economy",
        href: "/resources/preparingworkers",
      },

      {
        title: "Other Ongoing Projects and Lesson with Future Directions",
        href: "/resources/projectsandfuture",
      },
    ],
  },
  {
    title: "Clarity by Design for Business and Policy",
    items: [
      {
        title:
          "Understanding Decision-Making Through Cognitive Economic Curves",
        href: "/resources/decision",
      },
      {
        title: "Applications in Business and Policy",
        href: "/resources/businessandpolicy",
      },
    ],
  },
];

export function ResourcesSidebar() {
  const [expandedSections, setExpandedSections] = useState<string[]>([]); // Start with no sections expanded
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state
  const location = useLocation(); // Get current location

  // Automatically open the sidebar and expand the relevant topic when the route changes
  useEffect(() => {
    // Find the section whose item matches the current route
    const sectionToExpand = topics
      .map((section) =>
        section.items.some((item) => item.href === location.pathname)
          ? section.title
          : null
      )
      .filter((section) => section !== null);

    if (sectionToExpand.length > 0) {
      setExpandedSections([sectionToExpand[0] as string]); // Expand only the matched section
    } else {
      setExpandedSections([]); // If no match, collapse all sections
    }

    setIsSidebarOpen(true); // Automatically open the sidebar when route changes
  }, [location.pathname]); // Trigger when pathname changes

  const toggleSection = (title: string) => {
    setExpandedSections((prev) =>
      prev.includes(title) ? [] : [title] // Close the section if it's already open, otherwise open it
    );
  };

  // Handle resize event to keep the sidebar open on large screens
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
                      expandedSections.includes(section.title)
                        ? "rotate-0"
                        : "rotate-180"
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
                          location.pathname === item.href
                            ? "bg-gray-100 font-medium"
                            : ""
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
