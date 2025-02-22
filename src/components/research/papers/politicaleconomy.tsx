import { Link } from "react-router-dom";

export default function PoliticalEconomyPage() {
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
            Political Economy
          </h1>

         

          <div>
            <section className="space-y-4  font-outfit">
              <p className="text-[#000000] text-justify font-normal leading-relaxed">
                Early in my career, my work in political economy reflected my
                geometric training under Herb Scarf. Barry Nalebuff and I
                explored optimal location games, producing two papers on social
                choice and one on imperfect competition. These papers offer a
                logic for the emergence of policies appealing to the mean voter,
                rather than the classical median voter, a concept that has been
                surprisingly underexplored empirically. Social science, as
                always, progresses at a glacial pace.
              </p>
              <p className="text-[#000000] text-justify font-normal leading-relaxed">
                Our follow-up paper, <i className="font-light">“Competition among Institutions”</i>,
                highlighted the limits of geometric intuition. It modeled
                self-selection into communities where institutional rules are
                determined by their members. The results, intriguingly linked to
                algebraic topology (e.g., the “hairy ball theorem”), underscored
                the profound complexity of modeling such systems. I see this as
                a warning: equilibrium models often lead to analytic dead-ends.
                Progress demands a dynamic approach grounded in patterns
                observed in engineered data. Someone needs to face head-on the
                challenge of engineering new forms of data for strategic
                settings.
              </p>
            </section>

            <section className="mt-4">
  <h2 className="text-xl text-[#000000] font-bold font-outfit">
    References
  </h2>
  <ol className="list-decimal pl-4 text-[#000000] space-y-2 font-outfit font-justify">
  <li>
    Caplin, A. and B. Nalebuff,{" "}
    <strong>
      <a href="https://www.jstor.org/stable/1912699" target="_blank" rel="noopener noreferrer" className="hover:underline">
        “On 64% Majority Rule”.
      </a>
    </strong>
    <i className="font-light"> Econometrica, pp. 787-815, 1988.</i>
    <p>
      Extends Black’s (1948) single-peaked preference result to multi-dimensional settings, showing conditions under which the mean voter’s most-preferred outcome is unbeatable with a 64%-majority rule.
    </p>
  </li>
  <li>
    Caplin, A. and B. Nalebuff,{" "}
    <strong>
      <a href="https://www.jstor.org/stable/2938238" target="_blank" rel="noopener noreferrer" className="hover:underline">
        “Aggregation and Social Choice: A Mean Voter Theorem”.
      </a>
    </strong>
    <i className="font-light"> Econometrica, pp. 1-24, 1991.</i>
    <p>
      Generalizes results on 64%-majority rule and identifies the mean voter’s most preferred position as an alternative to the median voter. Introduces a mathematical aggregation theorem with broad economic applications.
    </p>
  </li>
  <li>
    Caplin, A. and B. Nalebuff,{" "}
    <strong>
      <a href="https://link.springer.com/book/10.1007/978-1-349-24262-7" target="_blank" rel="noopener noreferrer" className="hover:underline">
        “Competition among Institutions”.
      </a>
    </strong>
    <i className="font-light"> Journal of Economic Theory, 72(2), pp. 306-342, 1997.</i>
    <p>
      Models group formation and institutional policy as mutually dependent. Highlights the algebraic nature of equilibrium existence in multi-dimensional, multi-institutional settings, suggesting deeper connections between economic and political environments.
    </p>
  </li>
  <li>
    Caplin, A., and R. Lowrance,{" "}
    <strong>
      <a href="https://www.aeaweb.org/articles?id=10.1257/aer.104.5.77" target="_blank" rel="noopener noreferrer" className="hover:underline">
        “The Mortgage Mess, the Press, and the Politics of Inattention”.
      </a>
    </strong>
    <i className="font-light"> American Economic Review Papers and Proceeding, 2014.</i>
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
