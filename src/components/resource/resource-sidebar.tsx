import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const sectionToExpand = topics
      .map((section) =>
        section.items.some((item) => item.href === location.pathname)
          ? section.title
          : null
      )
      .filter((section) => section !== null);

    if (sectionToExpand.length > 0) {
      setExpandedSections([sectionToExpand[0] as string]);
    } else {
      setExpandedSections([]);
    }

    setIsSidebarOpen(true);
  }, [location.pathname]);

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => (prev.includes(title) ? [] : [title]));
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
      <button
        className="fixed bottom-4 right-4 z-50 md:hidden bg-white p-3 rounded-full shadow-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

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
                      <Link
                        key={item.href}
                        to={item.href}
                        className={`block text-sm font-light py-1 px-3 hover:bg-gray-100 rounded ${
                          location.pathname === item.href
                            ? "bg-gray-100 font-medium"
                            : ""
                        }`}
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        {item.title}
                      </Link>
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
