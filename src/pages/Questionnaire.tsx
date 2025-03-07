import { ChangeEvent, useState } from "react";
import { Helmet } from "react-helmet-async";

interface FormData {
  fullName?: string;
  email?: string;
  location?: string;
  age?: number | string;
  highestEducationField?: string;
  workStatus?: string;
  interestDescription?: string;
  selectedChapters?: string[];
  selectedBooks?: string[];
  motivation?: string;
  participationPreferences?: string[];
  proposalTitle?: string;
  proposalSummary?: string;
  proposalFile?: File | null;
  [key: string]: string | number | boolean | string[] | File | undefined | null;
}

const steps = ["About You", "Your Interest", "Participate in Growth"];

const Loader = () => (
  <div className="inline-block w-5 h-5 border-4 border-t-white border-gray-400 rounded-full animate-spin"></div>
);

const Modal = ({
  message,
  isOpen,
  onClose,
}: {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <p className="text-center text-lg">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-black text-white py-2 rounded-lg"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default function Questionnaire() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const [errorMessage] = useState<string | null>(null);
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const isStepValid = (step: number): boolean => {
    const data = formData;
    const isValid = true;

    if (step === 0) {
      // Check if any required field is missing
      if (
        !data.fullName ||
        !data.email ||
        !data.location ||
        !data.age ||
        !data.highestEducationField ||
        !data.workStatus
      ) {
        setIsError(true);
        return false;
      }
    } else if (step === 1) {
      if (
        !data.interestDescription ||
        (data.selectedChapters?.length ?? 0) === 0
      ) {
        setIsError(true);
        return false;
      }
    } else if (step === 2) {
      if (
        (data.participationPreferences?.length ?? 0) === 0 ||
        !data.proposalTitle ||
        !data.proposalSummary
      ) {
        setIsError(true);
        return false;
      }
    }

    return isValid;
  };

  const nextStep = () => {
    if (isStepValid(currentStep)) {
      setLoading(true); // ✅ Show loader
      setTimeout(() => {
        setIsError(false);
        if (currentStep < steps.length - 1) {
          setCurrentStep(currentStep + 1);
        }
        setLoading(false); // ✅ Hide loader
      }, 500); // Simulate brief delay
    }
  };

  const prevStep = () => {
    setLoading(true); // ✅ Show loader
    setTimeout(() => {
      if (currentStep > 0) {
        setIsError(false);
        setCurrentStep(currentStep - 1);
      }
      setLoading(false); // ✅ Hide loader
    }, 500);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    const newValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (!isStepValid(currentStep)) {
      setIsError(true);
      return;
    }

    const formDataToSend = new FormData();
    setLoading(true);

    formDataToSend.append("name", String(formData.fullName));
    formDataToSend.append("email", String(formData.email));
    formDataToSend.append("location", String(formData.location));
    formDataToSend.append("age", String(formData.age));
    formDataToSend.append("education", String(formData.highestEducationField));
    formDataToSend.append("workStatus", String(formData.workStatus));
    formDataToSend.append(
      "interestInCognitiveEconomics",
      String(formData.interestDescription)
    );

    // Convert arrays to JSON strings
    formDataToSend.append(
      "selectedChapters",
      JSON.stringify(formData.selectedChapters || [])
    );
    formDataToSend.append(
      "selectedBooks",
      JSON.stringify(formData.selectedBooks || [])
    );
    formDataToSend.append(
      "participationPreferences",
      JSON.stringify(formData.participationPreferences || [])
    );

    formDataToSend.append(
      "proposalTitle",
      String(formData.proposalTitle || "")
    );
    formDataToSend.append(
      "proposalSummary",
      String(formData.proposalSummary || "")
    );

    // Ensure the file is correctly added
    if (formData.proposalFile instanceof File) {
      formDataToSend.append("proposalFile", formData.proposalFile);
    }

    try {
      const response = await fetch(
        "https://cognitive-economics-backend-2e54eec5231c.herokuapp.com/api/forms/submit",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (!response.ok) throw new Error("Failed to submit");
      setModalMessage("✅ Your form has been successfully submitted!");
      setIsModalOpen(true);
      setIsSubmitted(true);
      setIsError(false);
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitted(false);
      setIsError(true);
      setModalMessage("❌ Something went wrong. Please try again.");
      setIsModalOpen(true);
    } finally {
      setLoading(false); // ✅ Hide loader after submission
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Allow Enter inside textarea but not elsewhere
    }
  };
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked, value } = e.target;

    // Ensure that selectedChapters and selectedBooks are arrays before modifying them
    setFormData((prevFormData) => {
      const currentValues = (prevFormData[name] as string[]) || [];

      return {
        ...prevFormData,
        [name]: checked
          ? [...currentValues, value] // Add the selected chapter or book
          : currentValues.filter((item) => item !== value), // Remove if unchecked
      };
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0], // Dynamically update the field (proposalFile or others)
      }));
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);

    if (isSubmitted) {
      setFormData({});
      setCurrentStep(0);
    }
  };
  return (
    <>
      <Helmet>
        <title>Questionnaire | Cognitive Economics</title>
        <meta
          name="description"
          content="Participate in the Cognitive Economics questionnaire to contribute to research, business innovation, and education."
        />
      </Helmet>
      <div className="min-h-screen bg-white text-black">
        <div className="max-w-7xl mx-auto p-6">
          <h1 className="text-3xl font-bold font-outfit mb-6">Questionnaire</h1>
          <ProgressBar steps={steps} currentStep={currentStep} />
          <Modal
            message={modalMessage || ""}
            isOpen={isModalOpen}
            onClose={closeModal}
          />
          <form onKeyDown={handleKeyDown} className="mt-8">
            {currentStep === 0 && (
              <BasicInfo
                formData={formData}
                handleInputChange={handleInputChange}
              />
            )}
            {currentStep === 1 && (
              <InterestCognitiveEconomics
                formData={formData}
                handleInputChange={handleInputChange}
                handleCheckboxChange={handleCheckboxChange}
              />
            )}
            {currentStep === 2 && (
              <GrowthCognitiveEconomics
                formData={formData}
                handleInputChange={handleInputChange}
                handleCheckboxChange={handleCheckboxChange}
                handleFileChange={handleFileChange}
              />
            )}
            {isError && !errorMessage && (
              <div className="mt-4 p-4 bg-red-100 text-red-700 border border-red-400 rounded">
                ❌ Please fill in all required fields before proceeding to the
                next step.
              </div>
            )}

            <div className="mt-8 flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 0 || loading}
                className="px-4 py-2 bg-white border border-black text-black rounded disabled:opacity-50 flex items-center justify-center"
              >
                {loading ? <Loader /> : "Previous"}
              </button>
              <button
                type="button"
                onClick={
                  currentStep === steps.length - 1 ? handleSubmit : nextStep
                }
                disabled={loading}
                className="px-4 py-2 bg-black text-white rounded flex items-center justify-center"
              >
                {loading ? (
                  <Loader />
                ) : currentStep === steps.length - 1 ? (
                  "Submit"
                ) : (
                  "Next"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

interface ProgressBarProps {
  steps: string[];
  currentStep: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ steps, currentStep }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-2">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`text-sm ${
              index <= currentStep ? "text-black" : "text-gray-400"
            }`}
          >
            {step}
          </div>
        ))}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-black h-2.5 rounded-full"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

interface BasicInfoProps {
  formData: {
    fullName?: string;
    email?: string;
    location?: string;
    age?: number | string;
    highestEducationField?: string;
    workStatus?: string;
  };
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const BasicInfo: React.FC<BasicInfoProps> = ({
  formData,
  handleInputChange,
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Part 1: About You</h2>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-black"
          >
            1. Name:
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName || ""}
            onChange={handleInputChange}
            className="mt-1 block w-full px-2 py-2 border rounded-lg border-black shadow-sm focus:border-black focus:ring-black"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-black"
          >
            2. Email Address:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email || ""}
            onChange={handleInputChange}
            className="mt-1 block w-full px-2 py-2 border rounded-lg border-black shadow-sm focus:border-black focus:ring-black"
          />
        </div>

        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-black"
          >
            3. Location (City/State, Country):
          </label>
          <input
            type="text"
            id="location"
            name="location"
            required
            value={formData.location || ""}
            onChange={handleInputChange}
            className="mt-1 block w-full px-2 py-2 border rounded-lg border-black shadow-sm focus:border-black focus:ring-black"
          />
        </div>

        <div>
          <label htmlFor="age" className="block text-sm font-medium text-black">
            4. Age:
          </label>
          <input
            type="number"
            id="age"
            name="age"
            required
            value={formData.age || ""}
            onChange={handleInputChange}
            inputMode="numeric" // Helps mobile users get a numeric keyboard
            pattern="[0-9]*"
            className="mt-1 block w-full px-2 py-2 border rounded-lg border-black shadow-sm focus:border-black focus:ring-black"
          />
        </div>

        <div>
          <label
            htmlFor="highestEducationField"
            className="block text-sm font-medium text-black"
          >
            5. What is your highest educational qualification and in what field?
          </label>
          <input
            type="text"
            id="highestEducationField"
            name="highestEducationField"
            required
            value={formData.highestEducationField || ""}
            onChange={handleInputChange}
            className="mt-1 block w-full px-2 py-2 border rounded-lg border-black shadow-sm focus:border-black focus:ring-black"
          />
        </div>

        <div>
          <label
            htmlFor="workStatus"
            className="block text-sm font-medium text-black"
          >
            6. Are you currently working for pay (Y/N), and if so, how would you
            describe your line of work?
          </label>
          <input
            type="text"
            id="workStatus"
            name="workStatus"
            required
            value={formData.workStatus || ""}
            onChange={handleInputChange}
            className="mt-1 block w-full px-2 py-2 border rounded-lg border-black shadow-sm focus:border-black focus:ring-black"
          />
        </div>
      </div>
    </div>
  );
};

interface InterestCognitiveEconomicsProps {
  formData: {
    interestDescription?: string;
    selectedChapters?: string[];
    selectedBooks?: string[];
  };
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InterestCognitiveEconomics: React.FC<InterestCognitiveEconomicsProps> = ({
  formData,
  handleInputChange,
  handleCheckboxChange,
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">
        Part 2: Your Interest in Cognitive Economics
      </h2>

      {/* Question 1 */}
      <div>
        <label
          htmlFor="interestDescription"
          className="block text-sm font-medium text-black"
        >
          1. In your own words, briefly describe how you found out about
          cognitive economics and why it interests you:
        </label>
        <textarea
          id="interestDescription"
          name="interestDescription"
          rows={4}
          value={formData.interestDescription || ""}
          onChange={handleInputChange}
          className="mt-1 block w-full px-2 py-2 border rounded-lg border-black shadow-sm focus:border-black focus:ring-black"
        />
      </div>

      {/* Question 2 */}
      <div>
        <p className="text-sm font-medium text-black">
          2. Please pick out those chapters of{" "}
          <i>Introduction to Cognitive Economics</i> that are of particular
          interest to you and explain why:
        </p>
        {[
          "Chapter 1: Introduction to Cognitive Economics",
          "Chapter 2: Cognitive Household Finance",
          "Chapter 3: Measuring and Minimizing Mistakes",
          "Chapter 4: Cognitive Economics at Work",
          "Chapter 5: Cognitive Capital and Human-AI Interactions",
          "Chapter 6: Work Skills for the Cognitive Economy",
          "Chapter 7: Cognitive Economics of Teaching",
          "Chapter 8: Cognitive Economics Takes Off",
          "Chapter 9: Next Steps in Research, Business, and Policy",
          "Chapter 10: Accelerating Cognitive Economics: Why Now, and How?",
        ].map((chapter) => (
          <div key={chapter} className="flex items-center gap-2">
            <input
              type="checkbox"
              id={chapter}
              name="selectedChapters"
              value={chapter}
              checked={formData.selectedChapters?.includes(chapter) || false}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label htmlFor={chapter} className="text-sm my-2">
              {chapter}
            </label>
          </div>
        ))}
      </div>

      {/* Question 3 */}
      <div>
        <p className="text-sm font-medium text-black">
          3. I have several other books on cognitive economics in the planning
          stages. Please indicate any that would be of particular interest to
          you:
        </p>
        {[
          "Shared Equity - Reimagining and Rebuilding Housing Finance Through Cognitive Economics: This book will focus on shared equity mortgages, which are currently being designed using cognitive economic principles. It outlines the thirty year process that led to their development. It outlines how they can address housing affordability, risk-sharing, and financial stability. It points to other markets in which cognitive economic research is needed to benefit households.",
          "Human-AI Collaboration - How Cognitive Economics can Revolutionize Healthcare: This book explores how cognitive economics can enhance human-AI collaboration in medical decision-making, aiming to reduce medical errors. It includes research studies illustrating the practical application of cognitive economic principles in healthcare.",
          "Clarity in Action - Improving Evidence-Based Communication: Building on cognitive economics, this book addresses how clear communication improves decision-making in policy, business, and personal contexts. It provides practical frameworks, case studies, and tools for enhancing communication.",
          "Career Disruption and Worker Preparedness in the Age of AI: This book examines how workers perceive career risks from AI-driven changes and how cognitive economics can help prepare them. It explores strategies for improving worker resilience, from policy interventions to decision-making skills.",
          "Teaching Cognitive Economics - A How-To Guide for Educators: This book provides educators with tools to teach cognitive economics effectively. It includes a framework for creating courses, sample syllabi, lecture materials, exercises, and strategies for engaging students in scientific thinking about decision-making and human behavior.",
        ].map((book) => {
          const [boldText, rest] = book.split(": ");
          return (
            <div key={book} className="flex items-center font-outfit gap-2">
              <input
                type="checkbox"
                id={book}
                name="selectedBooks"
                value={book}
                checked={formData.selectedBooks?.includes(book) || false}
                onChange={handleCheckboxChange}
                className="mr-3"
              />
              <label htmlFor={book} className="text-sm text-justify my-2">
                <span className="font-bold">{boldText}:</span> {rest}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const GrowthCognitiveEconomics: React.FC<{
  formData: FormData;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleCheckboxChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({
  formData,
  handleInputChange,
  handleCheckboxChange,
  handleFileChange,
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">
        Part 3: Participate in the Growth of Cognitive Economics
      </h2>

      <div>
        <label className="block text-sm font-medium text-black">
          1. Preferred Participation (select all that apply):
        </label>
        <div className="space-y-2">
          {[
            "Purely Informational: I would like to keep current and learn more about cognitive economics as it progresses",
            "Forming a Research Innovation Partnership: I would like to participate in or fund research in cognitive economics on key topics",
            "Forming a Business Innovation Partnership: I would like to partner in developing socially beneficial business models or innovations aligned with cognitive economic principles",
            "Forming a Regulatory Innovation Partnership: I would like to partner in integrating cognitive insights to upgrade regulatory frameworks for the age of AI",
            "Forming an Education Innovation Partnership: I would like to partner in developing cognitive economic methods for upgrading education for the age of AI",
          ].map((option) => {
            const [boldText, rest] = option.split(": ");
            return (
              <div key={option} className="flex items-center font-outfit mt-1">
                <input
                  type="checkbox"
                  id={option}
                  name="participationPreferences"
                  value={option}
                  checked={
                    formData.participationPreferences?.includes(option) || false
                  }
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor={option} className="text-sm my-1">
                  <span className="font-bold">{boldText}:</span> {rest}
                </label>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <label
          htmlFor="proposalTitle"
          className="block text-sm font-medium text-black"
        >
          (a) Proposal Title:
        </label>
        <input
          type="text"
          id="proposalTitle"
          name="proposalTitle"
          value={formData.proposalTitle || ""}
          onChange={handleInputChange}
          className="mt-1 block w-full px-2 py-2 border rounded-lg border-black shadow-sm focus:border-black focus:ring-black"
        />
      </div>

      <div>
        <label
          htmlFor="proposalSummary"
          className="block text-sm font-medium text-black"
        >
          (b) Summary (Max 200 words):
        </label>
        <textarea
          id="proposalSummary"
          name="proposalSummary"
          rows={4}
          value={formData.proposalSummary || ""}
          onChange={handleInputChange}
          className="mt-1 block w-full px-2 py-2 border rounded-lg border-black shadow-sm focus:border-black focus:ring-black"
        />
      </div>

      <div>
        <label
          htmlFor="proposalFile"
          className="block text-sm font-medium text-black"
        >
          (c) Supporting Documentation:
        </label>
        <div className="flex items-center mt-2">
          <label
            htmlFor="proposalFile"
            className="cursor-pointer bg-black border border-black text-white px-4 py-2 rounded-l-lg hover:bg-gray-700 transition-colors"
          >
            Choose File
          </label>
          <input
            type="file"
            id="proposalFile"
            name="proposalFile"
            onChange={handleFileChange}
            className="hidden"
          />
          <span className="flex-grow px-4 py-2 border border-l-0 rounded-r-lg border-black bg-white">
            {formData.proposalFile
              ? formData.proposalFile.name
              : "No file chosen"}
          </span>
        </div>
      </div>
    </div>
  );
};
