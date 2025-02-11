import { Link } from "react-router-dom";

export default function PsychologicalFactorsPage() {
  return (
    <main className="flex flex-col items-center justify-center px-4 py-6 font-outfit">
      <div className="max-w-3xl w-full">
        <Link
          to="/research"
          className="inline-block mb-6 px-3 py-1 font-light border-2 border-[#000000] rounded text-sm hover:text-white hover:bg-black"
        >
          BACK
        </Link>

        <article className="space-y-5">
          <h1 className="text-5xl font-bold text-[#000000] font-outfit">
          Social Welfare and Policy
          </h1>

         

          <div >
            <section className="space-y-4 font-outfit">
              <p className="text-[#000000] text-justify font-normal leading-relaxed">
                While exploring how psychological factors influence market
                dynamics, John Leahy and I argued that using market interest
                rates to discount future utility is inconsistent with
                utilitarian principles (<i>“The Social Discount Rate”</i> ). This
                approach privileges the present self over future selves, who
                would likely prefer greater patience in the past.
              </p>
              <p className="text-[#000000] text-justify font-normal leading-relaxed">
              As a social scientist interested in reform, I have proposed several new forms of financial instrument as
well as measures of effective communication, as detailed in the corresponding sections of this website. I am
also deeply interested in educational reform, though pessimistic about meaningful change in the short run.
Another 30 year wait I expect, so let’s set that in motion as soon as possible. On a completely different
note, I am passionate about protecting natural ecosystems, particularly coral reefs like those in Misool and
believe that a powerful desire for legacy may aid in their preservation (<i className="font-light">“Missing Participants”</i> ). Yet another
reason to speed up progress in social science.
              </p>
              
            </section>

            <section className="mt-4">
  <h2 className="text-xl text-[#000000] font-bold font-outfit">
    References
  </h2>
  <ol className="list-decimal pl-4 text-[#000000] space-y-3 font-outfit text-justify">
    <li>
      Caplin, A., and J. Leahy, <strong>“The Social Discount Rate”.</strong> 
      <i className="font-light"> Journal of Political Economy, 1257-1268, 2004.</i>
      <p>
        Argues that the government should adopt a lower discount rate than the market to prioritize future-oriented policies, as market rates reflect overly myopic preferences.
      </p>
    </li>
    <li>
      Caplin, A., and J. Leahy, <strong>“Missing Participants, Missing Markets, and the Social Discount Rate: Borrowing Constraints, Intergenerational Transfers, Altruism and the Desire for Legacy”.</strong> 
      <i className="font-light"> Annual Review of Financial Economics. 2023.</i>
      <p>
        Explores how market rates exclude key participants, leading to suboptimal societal discounting of the future. Introduces desire for legacy as a key force to tap into to increase future orientation.
      </p>
    </li>
    <li>
      Caplin, A., M. Ghandehari, C. Lim, P. Glimcher, and G. Thurston. <strong>“Advancing Environmental Exposure Assessment Science to Benefit Society”.</strong> 
      <i className="font-light"> Nature Communications, 10, no. 1: 1-11, 2019.</i>
      <p>
        Reviews how advances in feasibility of granular pollution measurement can be used to better target environmental policies.
      </p>
    </li>
    <li>
      Caplin, A., and R. Lowrance, <strong>“The Mortgage Mess, the Press, and the Politics of Inattention.”</strong> 
      <i className="font-light"> American Economic Review Papers and Proceedings, 2014.</i>
      <p>
        Critiques the lack of policy accountability and the destructive role of the press in the 2006-2007 housing crisis.
      </p>
    </li>
  </ol>
</section>

          </div>
        </article>
      </div>
    </main>
  );
}
