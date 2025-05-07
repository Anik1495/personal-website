import React from "react";
import { Link } from "react-router-dom";

const MITSolvePost = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <Link to="/" className="text-cvblue text-sm">← Back to Home</Link>
        <h1 className="text-3xl font-bold mt-4 mb-4">
          💡Just wrapped up a proposal writing for MIT SOLVE x The Trinity Challenge
        </h1>
        <p className="text-gray-600 mb-6">May 2, 2025</p>
        <img
          src={`${import.meta.env.BASE_URL}activities/SOLVE.jpeg`}
          alt="MIT Solve Proposal"
          className="rounded-lg mb-6"
        />

        <div className="space-y-5 text-gray-800 text-lg">
          <p>
            Solving global health challenges demands more than ideas—it requires bold, scalable, tech-enabled solutions. That’s where <a href="https://solve.mit.edu/" className="underline text-cvblue" target="_blank" rel="noopener noreferrer">MIT SOLVE</a> steps in. Each year, it connects innovators with funders and experts to support breakthrough ideas tackling urgent global issues. A recent call, launched with The Trinity Challenge, focused on improving access to life-saving antibiotics in low- and middle-income countries (LMICs).
          </p>

          <h2 className="text-xl font-semibold">🧑‍💼 Who Can Apply?</h2>
          <p>
            Anyone with a solution in development like individuals, startups, nonprofits, universities can apply. Formal registration isn’t required, but your project must be past the concept phase. Solutions may be at the proof-of-concept, pilot, growth, or scale-ready stage. You can adapt existing technologies as long as you explain their progress and potential.
          </p>

          <h2 className="text-xl font-semibold">🛠 What Kind of Projects Are Eligible?</h2>
          <p>
            Eligibility depends on that year’s antibiotic-related theme. For instance, the current call (closing May 1, 2025) centers on stock control and detection of substandard/falsified antibiotics in LMICs. While future themes may change, the core requirement is the same: use technology (like AI, mobile apps, sensors, or community-based data tools) to create public value through open-source tools or affordable services.
          </p>

          <h2 className="text-xl font-semibold">💻 How to Describe the Technology?</h2>
          <p>
            Applicants must answer short, essay-style questions explaining what the solution does, who it helps, what stage it’s in, and what makes it innovative (<a href="https://lnkd.in/gAwUTjcU" className="underline text-cvblue" target="_blank" rel="noopener noreferrer">sample proposal</a>). You must also outline potential risks, your mitigation strategy, and include any evidence of progress—data, test results, or a working prototype. MIT Solve favors solutions already tested in the real world. A public YouTube video of your solution is required so judges can see it in action.
          </p>

          <h2 className="text-xl font-semibold">📊 Budget and Funding Plan</h2>
          <p>
            Tech is central to the mission, so be clear about how your system works and uses data to drive impact. You must also submit a two-year budget plan based on a £500,000 award—60% of which must be spent in LMICs. It should include direct/indirect costs, overhead (max 10%), and scale-down plans for a £250,000 award. Mention any additional funding secured or planned.
          </p>

          <h2 className="text-xl font-semibold">👥 Team and Partnerships</h2>
          <p>
            Finally, you’ll need to present your team—highlighting the lead, their expertise, and why your group is equipped to deliver impact. This is your chance to show your understanding of the target community and the strength of your collaborations. If you’re working with NGOs, universities, or tech partners, explain their roles clearly.
          </p>

          <h2 className="text-xl font-semibold">✅ Final Thoughts</h2>
          <p>
            MIT Solve seeks impactful, tech-driven solutions to global health challenges. Strong applications are clear, evidence-backed, and focused on real change. If your solution is ready to scale, SOLVE offers the platform to accelerate its impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MITSolvePost;
