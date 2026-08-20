import Button from "../common/Button";

function Hero() {
  return (
    <section>
        <div className="container mx-auto px-4 py-16 text-center">
            <span className="text-sm text-gray-600 uppercase tracking-wide">BUILD YOUR CREATIVE PORTFOLIO</span>
            <h1 className="text-4xl font-bold mb-4">Turn your work into a portfolio that gets noticed.</h1>
            <p className="text-lg mb-8">Create a professional portfolio for your creative work — without starting from zero.</p>
            <Button text="Get Started" color="blue" size="medium" />
        </div>
    </section>
  );
}

export default Hero;