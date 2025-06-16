export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Welcome to Our Component Library
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          A collection of modern, reusable UI components built with Next.js and Tailwind CSS
        </p>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {[
          {
            title: 'Modern Design',
            description: 'Clean and contemporary UI components that follow the latest design trends',
            icon: '🎨',
          },
          {
            title: 'Fully Responsive',
            description: 'All components are mobile-first and work perfectly on any device',
            icon: '📱',
          },
          {
            title: 'Customizable',
            description: 'Easy to customize and extend with your own styles and themes',
            icon: '⚙️',
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-gray-50 rounded-3xl">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Start building beautiful interfaces with our component library today.
        </p>
        <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors">
          Get Started
        </button>
      </section>
    </div>
  );
} 