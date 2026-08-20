const features = [
    {
        title: "Professional Templates",
        description:
            "Start with a polished template designed for creative professionals.",
    },
    {
        title: "Easy Customization",
        description:
            "Customize your portfolio to match your work, style, and personal brand.",
    },
    {
        title: "Showcase Your Work",
        description:
            "Organize your projects and present your creative work professionally.",
    },
];

function Features() {
    return (
        <section>
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-4xl font-bold mb-4">Everything you need to showcase your work</h1>
                <p className="text-lg mb-8">Everything you need to create, customize, and share a portfolio that represents your work.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div className="bg-gray-100 p-6 rounded-lg" key={feature.title}>
                            <h2 className="text-xl font-bold mb-4">{feature.title}</h2>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;