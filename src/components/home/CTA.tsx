import Button from "../common/Button";

const CTA = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-4 py-16 text-center">
        <h2>Ready to showcase your work?</h2>
        <p>
            Create your professional portfolio and start sharing your work.
        </p>
        <Button text="Get Started" color="black" size="large" />
      </div>
    </section>
  );
};

export default CTA;
