import { useState } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  fullName?: string;
  email?: string;
  location?: string;
  age?: number | string;
  profile?: string;
  education?: string;
  economicsCourses?: string;
  highestEconomicsCourse?: string;
  furtherTraining?: string;
  motivation?: string;
  [key: string]: boolean | string | number | undefined;
}

const steps = [
  "Basic Information",
  "Education and Professional Background",
  "Interests",
];

export default function Questionnaire() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
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

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const chaptersRead = [];
    for (let i = 1; i <= 10; i++) {
      const chapterKey = `chapter_${i}`;
      if (formData[chapterKey]) {
        chaptersRead.push(`Chapter ${i}: ${steps[i - 1]}`);
      }
    }
    const templateParams = {
      from_name: formData.fullName,
      email: formData.email,
      location: formData.location,
      age: formData.age,
      profile: formData.profile,
      education: formData.education,
      economicsCourses: formData.economicsCourses,
      highestEconomicsCourse: formData.highestEconomicsCourse,
      furtherTraining: formData.furtherTraining,
      motivation: formData.motivation,
      chaptersRead: chaptersRead.join("\n"), // Join chapters by line breaks for plain text
      date: new Date().toLocaleDateString(),
    };

    // Ensure templateParams follows the correct type
    emailjs
      .send(
        "service_n8gwbrr", // Service ID
        "template_hyjfabv", // Template ID
        templateParams, // Form data
        "s17P9tfVREIA2zuD-" // User ID from EmailJS
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setIsSubmitted(true); // Show success message
          setIsError(false); // Reset error state
        },
        (error) => {
          console.error("Error sending email:", error.text);
          setIsSubmitted(false);
          setIsError(true); // Show error message
        }
      );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Allow Enter inside textarea but not elsewhere
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold font-outfit mb-6">Questionnaire</h1>
        <ProgressBar steps={steps} currentStep={currentStep} />
        <form onKeyDown={handleKeyDown} className="mt-8">
          {currentStep === 0 && (
            <BasicInfo
              formData={formData}
              handleInputChange={handleInputChange}
            />
          )}
          {currentStep === 1 && (
            <EducationBackground
              formData={formData}
              handleInputChange={handleInputChange}
            />
          )}
          {currentStep === 2 && (
            <Interests
              formData={formData}
              handleInputChange={handleInputChange}
            />
          )}

          <div className="mt-8 flex justify-between">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 0}
              className="px-4 py-2 bg-white border border-[#000000] text-black rounded disabled:opacity-50"
            >
              Previous
            </button>
            {currentStep === steps.length - 1 ? (
              <button
                type="button" // <== CHANGED FROM type="submit"
                onClick={(e) => handleSubmit(e)}
                className="px-4 py-2 bg-black text-white rounded"
              >
                Submit
              </button>
            ) : (
              <button
                type="button"
                onClick={nextStep}
                className="px-4 py-2 bg-black text-white rounded"
              >
                Next
              </button>
            )}
          </div>
        </form>
        {isSubmitted && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 border border-green-400 rounded">
            ✅ Thank you for Completing the form and it was successfully
            submitted! 🎉
          </div>
        )}

        {/* Error Message */}
        {isError && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 border border-red-400 rounded">
            ❌ Oops! Something went wrong. Please try again.
          </div>
        )}
      </div>
    </div>
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
    profile?: string;
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
      <h2 className="text-2xl font-semibold">
        6.1.1 About You: Part 1: Basic Information
      </h2>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            1. Full Name:
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName || ""}
            onChange={handleInputChange}
            className="mt-1 block w-full focus:outline-none px-2 py-2 border rounded-lg border-[#000000]  shadow-sm focus:border-black focus:ring-black"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
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
            className="mt-1 focus:outline-none px-2 py-2 border rounded-lg border-[#000000]  block w-full  shadow-sm focus:border-black focus:ring-black"
          />
        </div>
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
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
            className="mt-1 focus:outline-none block w-full px-2 py-2 border rounded-lg border-[#000000] shadow-sm focus:border-black focus:ring-black"
          />
        </div>
        <div>
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700"
          >
            4. Age:
          </label>
          <input
            type="number"
            id="age"
            name="age"
            required
            value={formData.age || ""}
            onChange={handleInputChange}
            className="mt-1 focus:outline-none block w-full px-2 py-2 border rounded-lg border-[#000000] shadow-sm focus:border-black focus:ring-black"
          />
        </div>
        <div>
          <label
            htmlFor="profile"
            className="block text-sm font-medium text-gray-700"
          >
            5. CV, LinkedIn or Professional Profile (optional):
          </label>
          <input
            type="text"
            id="profile"
            name="profile"
            value={formData.profile || ""}
            onChange={handleInputChange}
            className="mt-1 block w-full focus:outline-none px-2 py-2 border rounded-lg border-[#000000] shadow-sm focus:border-black focus:ring-black"
          />
        </div>
      </div>
    </div>
  );
};

interface EducationBackgroundProps {
  formData: {
    education?: string;
    economicsCourses?: string;
    highestEconomicsCourse?: string;
    furtherTraining?: string;
  };
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const EducationBackground: React.FC<EducationBackgroundProps> = ({
  formData,
  handleInputChange,
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">
        Part 2: Education and Professional Background
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            1. Highest Level of Education:
          </label>
          <div className="mt-2 space-y-2">
            {[
              "High School",
              "Bachelor's Degree",
              "Master's Degree",
              "Doctorate",
              "Other",
            ].map((option) => (
              <div key={option} className="flex items-center">
                <input
                  id={option}
                  name="education"
                  type="radio"
                  value={option}
                  checked={formData.education === option}
                  onChange={handleInputChange}
                  className="focus:ring-black h-4 w-4 text-black border-gray-300"
                />
                <label
                  htmlFor={option}
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div>
          <label
            htmlFor="economicsCourses"
            className="block text-sm font-medium text-gray-700"
          >
            2. Have you taken any courses in economics? (Y/N)
          </label>
          <input
            type="text"
            id="economicsCourses"
            name="economicsCourses"
            value={formData.economicsCourses || ""}
            onChange={handleInputChange}
            className="mt-1 block w-full focus:outline-none px-2 py-2 border rounded-lg border-[#000000] shadow-sm focus:border-black focus:ring-black"
          />
        </div>
        <div>
          <label
            htmlFor="highestEconomicsCourse"
            className="block text-sm font-medium text-gray-700"
          >
            3. Highest formal economics course:
          </label>
          <input
            type="text"
            id="highestEconomicsCourse"
            name="highestEconomicsCourse"
            value={formData.highestEconomicsCourse || ""}
            onChange={handleInputChange}
            className="mt-1 block w-full focus:outline-none px-2 py-2 border rounded-lg border-[#000000] shadow-sm focus:border-black focus:ring-black"
          />
        </div>
        <div>
          <label
            htmlFor="furtherTraining"
            className="block text-sm font-medium text-gray-700"
          >
            4. Are you planning on furthering training in economics?
          </label>
          <input
            type="text"
            id="furtherTraining"
            name="furtherTraining"
            value={formData.furtherTraining || ""}
            onChange={handleInputChange}
            className="mt-1 block w-full focus:outline-none px-2 py-2 border rounded-lg border-[#000000]  shadow-sm focus:border-black focus:ring-black"
          />
        </div>
        {/* Add more fields for work status, type of work, etc. */}
      </div>
    </div>
  );
};

interface InterestsProps {
  formData: FormData;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const Interests: React.FC<InterestsProps> = ({
  formData,
  handleInputChange,
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Part 3: Interests</h2>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="motivation"
            className="block text-sm font-medium text-gray-700"
          >
            1. Motivation for interest in cognitive economics in your own words:
          </label>
          <textarea
            id="motivation"
            name="motivation"
            rows={4}
            value={formData.motivation || ""}
            onChange={handleInputChange}
            className="mt-1 block w-full focus:outline-none px-2 py-2 border rounded-lg border-[#000000] shadow-sm focus:border-black focus:ring-black"
          ></textarea>
        </div>

        {/* You can add more fields for other interests as necessary */}
      </div>
    </div>
  );
};
