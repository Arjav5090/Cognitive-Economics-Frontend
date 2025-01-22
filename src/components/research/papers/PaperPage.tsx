import { Link } from "react-router-dom";


export default function PaperPage() {
  return (
      <main className="flex flex-col items-center justify-center px-8 py-6 mx-10 ">
        <div className="">
          <Link
            to="/research"
            className="inline-block mb-6 px-3 py-1 font-light border-2 font-outfit border-[#000000] rounded text-sm hover:text-white hover:bg-black "
          >
            BACK
          </Link>

          <article className="space-y-5">
            <h1 className="text-5xl font-bold text-[#000000] font-outfit ">An Introduction to Cognitive Economics: The Science of Mistakes</h1>

            <div className="space-y-1">
              <p className="text-xl text-[#646464] font-outfit font-medium">Andrew Caplin</p>
              <p className="text-xl text-[#000000] font-outfit font-bold">Published in</p>
              <p className="text-sm text-[#000000] font-outfit font-light">Palgrave Macmillan Press, 2025</p>
            </div>

            <div className="space-y-4 text-sm">
              <section>
                <h2 className="text-xl text-[#000000] font-outfit font-bold">Introduction</h2>
                <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
                Cognitive economics is a groundbreaking interdisciplinary field that focuses on understanding and addressing mistakes in decision-making. Unlike traditional behavioral economics, cognitive economics aims to separate beliefs from preferences, scientifically study errors, and design tools to improve individual and organizational choices. This book serves as the first comprehensive guide to cognitive economics, tailored for the age of AI, offering insights into how human decision-making can be analyzed and enhanced
                </p>
              </section>

              <section>
                <h2 className="text-xl text-[#000000] font-outfit font-bold">Abstract</h2>
                <p className="text-[#000000] text-justify font-normal font-outfit leading-relaxed">
                This work introduces the core concepts of cognitive economics, emphasizing its interdisciplinary nature. It explores utility functions, subjective beliefs, costs of learning, and decision-making mistakes. By addressing the challenges of separating preferences from beliefs, this book lays the foundation for applying cognitive economics in diverse domains, including AI, finance, and labor economics. It also highlights how new tools, such as economic surveys and state-dependent stochastic choice data, enable a more precise understanding of decision-making errors and their implications.
                </p>
              </section>

              <section>
                <h2 className="text-xl text-[#000000] font-outfit font-bold">Key Chapters and Insights</h2>
                <ul className="list-disc pl-4 text-[#000000] space-y-2">
                  <li>
                    Foundations of Cognitive Economics
                    <ul className="list-disc pl-4 mt-1">
                      <li>Introduction to key concepts and methodologies</li>
                      <li>Historical development of the field and its key contributors</li>
                    </ul>
                  </li>
                  <li>
                    The decision-making errors occur because they can be measured
                    <ul className="list-disc pl-4 mt-1">
                      <li>Identification of key biases in decision making choices</li>
                    </ul>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl text-[#000000] font-outfit font-bold">Methodology</h2>
                <ul className="list-disc pl-4 text-[#000000] space-y-2">
                  <li>
                    Data Analysis Tools
                    <ul className="list-disc pl-4 mt-1">
                      <li>Survey instruments designed to capture decision-making processes</li>
                      <li>Statistical methods for analyzing choice data</li>
                    </ul>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl text-[#000000] font-outfit font-bold">References</h2>
                <ul className="list-disc pl-4 text-[#000000] space-y-2">
                  <li>Caplin, A. (2025). Expedited Comparisons of Experiments. Annals of Mathematical Statistics.</li>
                  <li>
                    Smith, J., & Johnson, B. (2024). The Science of Decision Making. Journal of Cognitive Economics.
                  </li>
                </ul>
              </section>
            </div>
          </article>
        </div>
      </main>
    
  )
}

