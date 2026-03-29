import React from "react";

// Example placeholders for your UI components
// You will replace these with your real components later
const Navbar = () => (
  <nav className="bg-primary text-white p-4 font-bold">LocalConnect Navbar</nav>
);

const Hero = () => (
  <section className="text-center py-20 bg-muted">
    <h1 className="text-4xl font-bold mb-4">Welcome to LocalConnect</h1>
    <p className="text-lg text-foreground">Connect with local businesses easily.</p>
    <button className="mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90">
      Get Started
    </button>
  </section>
);

const Features = () => (
  <section className="py-16 px-4 max-w-4xl mx-auto grid gap-8 md:grid-cols-3">
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <h2 className="font-bold text-xl mb-2">Feature 1</h2>
      <p>Details about this feature of your business listing platform.</p>
    </div>
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <h2 className="font-bold text-xl mb-2">Feature 2</h2>
      <p>Details about another feature here.</p>
    </div>
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <h2 className="font-bold text-xl mb-2">Feature 3</h2>
      <p>And another feature here.</p>
    </div>
  </section>
);

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
};

export default Index;
