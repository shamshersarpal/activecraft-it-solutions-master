import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ArtificialIntelligence(){
    return(
        <>
        <Header/>
            <section>
                <div className="max-w-6xl mx-auto px-4 py-12">
  {/* Hero / Header */}
  <header className="mb-12">
    <div className="relative rounded-xl overflow-hidden shadow-lg">
      <img
        src="https://www.activecraft.com/images/art2.jpg"
        alt="Artificial Intelligence"
        className="w-full aspect-video object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
        <div className="p-6 text-white">
          <div className="flex items-center text-sm mb-2 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>1 February</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
            Introduction To Artificial Intelligence.
          </h1>
        </div>
      </div>
    </div>
  </header>
  {/* Main Content + Sidebar TOC on large screens */}
  <div className="md:flex md:space-x-10">
    {/* Article */}
    <article className="prose prose-lg max-w-none flex-1">
      <p className="mb-8">
        This article is mainly focused around the topic of introduction to
        Artificial Intelligence. Here we will explain you all about the
        Artificial Intelligence in two different parts: introduction and what is
        AI?.
      </p>
      <h2 className="font-bold text-[#404A5C] mb-3 text-2xl" id="introduction">Introduction</h2>
      <p className="mb-3">
        Artificial intelligence is a broad field, and far from being isolated to
        computing it encompasses various disciplines like philosophy,
        neuroscience and psychology.
      </p>
      <p className="mb-3">
        It is very important to note though, that instead of just seeking to
        understand intelligence, AI practitioners seek also to build or create
        it.
      </p>
      <p className="mb-8">
        The uses and applications of AI are many and varied, and although many
        think of humanoid robots when we discuss AI, you may be surprised to
        know that we already encounter applied AI in our day-to-day lives.
      </p>
      <h2 className="font-bold text-[#404A5C] mb-3 text-2xl" id="what-is-ai">What Is AI?</h2>
      <p className="mb-3">
        Firstly we would like to say that the term Artificial Intelligence (AI)
        means different things to different people. In fact even the words we
        use to describe the topic are ambiguous.
      </p>
      <p className="mb-3">
        The term artificial can have subtly different meaning; consider what we
        mean when we refer to “artificial light”. This is real light, that has
        been created by a man-made source.
      </p>
      <p className="mb-3">
        It functions exactly as we would expect light to function, and from a
        physicist’s point of view it simply is light. When we refer to
        “artificial grass” however, we use the word artificial to mean something
        subtly different. Artificial grass is not grass.
      </p>
      <p className="mb-3">
        It is not a plant, it is not made of the same material as the plant, and
        it does not share all the properties of real grass. It does however
        perform the main functions of grass adequately, and may often fool
        people into believing that grass is present.
      </p>
      <p className="mb-3">
        The term intelligence is also open to interpretation, and so we end up
        with some very different definitions of what AI actually is.
      </p>
      <p className="mb-3">
        The definitions we come up with however tend to fall into a one of two
        categories – they are either focused on the process used to achieve the
        goal, or on behaviour.
      </p>
      <p className="mb-3">
        For example, Legur &amp; Stubbfield define AI as “The branch of computer
        science that is concerned with the automation of intelligent behaviour”
        whereas Winston defines it as “The study of the computations which make
        it possible to perceive, reason and act.”
      </p>
      <p className="mb-3">
        We also must consider how we measure success, and again there are a
        couple of common standards.
      </p>
      <p className="mb-3">
        We tend to either assess our system when compared to human performance,
        or against an ideal concept of intelligence often referred to in the
        field as “rationality.” A system is rational if it makes the correct
        decisions.
      </p>
      <p className="mb-3">
        Broadly speaking we end up with four acceptable goals in producing AI –
        systems that think like humans, systems that act like humans, systems
        that think rationally, and systems that act rationally.
      </p>
    </article>
    {/* Sticky Table of Contents for larger screens */}
    <aside className="hidden md:block w-64 flex-shrink-0">
      <div className="sticky top-24 bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
        <div className="text-sm font-semibold uppercase text-gray-500 mb-2">
          On this page
        </div>
        <nav className="space-y-2 text-sm">
          <a
            href="#introduction"
            className="block text-[#FF9900] hover:underline"
          >
            Introduction
          </a>
          <a href="#what-is-ai" className="block text-[#FF9900] hover:underline">
            What Is AI?
          </a>
        </nav>
      </div>
    </aside>
  </div>
  {/* Author / footer meta (optional) */}
  <div className="mt-16 flex flex-col sm:flex-row sm:items-center sm:justify-between border-t pt-6 text-sm text-gray-500">
    <div>
      Published on <time dateTime="2021-02-01">1 February</time>
    </div>
    <div className="mt-2 sm:mt-0">
      <span>
        Written by <span className="font-medium">Activecraft</span>
      </span>
    </div>
  </div>
</div>

            </section>
        <Footer/>
        </>
    )
}