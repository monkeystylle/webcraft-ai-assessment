import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white text-gray-800">
      <main className="container mx-auto px-4 py-12 space-y-20">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in-down">
            Unlock Your Dog&apos;s Hidden Genius: Transform Any Stubborn Pup
            into an Obedient, Well-Behaved Companion in Just 21 Days!
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
            Discover the Revolutionary &apos;Neural Activation&apos; Training
            System That Uses Ancient Brain-Boosting Games to Eliminate Bad
            Behavior – Without Force or Harsh Methods
          </p>
          <div className="relative animate-fade-in-up w-full max-w-6xl aspect-video">
            <Image
              src="https://picsum.photos/id/42/200/300"
              alt="Happy dog with owner"
              fill
              className="rounded-lg shadow-xl object-cover"
            />
          </div>
        </section>

        {/* Demonstration Section */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-center">
            Watch How It Works:
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Neural Activation', 'Positive Progress', 'Genius Emergence'].map(
              (step, index) => (
                <div
                  key={step}
                  className="bg-white p-6 rounded-lg shadow-md space-y-4 transform transition duration-500 hover:scale-105"
                >
                  <h3 className="text-xl font-semibold">
                    Step {index + 1}: {step}
                  </h3>
                  <p>{getDemonstrationText(index)}</p>
                </div>
              )
            )}
          </div>
        </section>

        {/* Key Features & Benefits */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">
            Key Features & Benefits
          </h2>
          <ul className="grid md:grid-cols-2 gap-6">
            {getFeatures().map((feature, index) => (
              <li
                key={index}
                className="flex items-start space-x-4 transform transition duration-500 hover:translate-x-2"
              >
                <span className="text-2xl">✅</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Proof Points */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {getTestimonials().map((testimonial, index) => (
              <blockquote
                key={index}
                className="bg-white p-6 rounded-lg shadow-md italic transform transition duration-500 hover:scale-105"
              >
                <p className="mb-2">&ldquo;{testimonial.quote}&rdquo;</p>
                <footer className="text-gray-600 font-medium">
                  - {testimonial.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* Exclusive Bonus & CTA */}
        <section className="bg-blue-600 text-white p-8 rounded-lg space-y-6 text-center">
          <h2 className="text-3xl font-bold">Exclusive Bonus</h2>
          <p className="text-xl">FREE Behavior Training Course (\$67 Value)</p>
          <p className="text-2xl font-semibold">
            Limited Time Offer: Get Both Courses for Just \$67 (Regular \$127)
          </p>
          <div>
            <button className="bg-yellow-400 text-blue-900 text-xl font-bold py-4 px-8 rounded-full hover:bg-yellow-300 transition duration-300 transform hover:scale-105 active:scale-95">
              👉 Watch The Neural Activation System In Action Now!
            </button>
          </div>
          <p className="text-sm">
            Don&apos;t wait - limited-time special pricing ends soon!
          </p>
        </section>

        {/* Guarantee */}
        <section className="text-center space-y-4 py-8">
          <h2 className="text-2xl font-bold">Our Guarantee</h2>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed">
            60-Day 100% Money-Back Guarantee: If you&apos;re not amazed by your
            dog&apos;s transformation, we&apos;ll refund every penny.
          </p>
        </section>

        {/* Closing Hook */}
        <section className="text-center space-y-4">
          <p className="text-xl italic">
            &quot;Join thousands of delighted dog owners who&apos;ve discovered
            the secret to unlocking their pet&apos;s true potential. Your
            dog&apos;s genius is waiting to emerge!&quot;
          </p>
          <div className="flex justify-center space-x-4">
            {['USA Today', 'Every Dog Magazine', 'Paw Nation'].map(
              publication => (
                <span key={publication} className="text-sm text-gray-600">
                  {publication}
                </span>
              )
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

function getDemonstrationText(index: number) {
  const texts = [
    "Your dog's brain literally transforms as they engage with our scientifically-designed games. Watch as their eyes light up with understanding!",
    'Follow our structured 7-module system, taking your pup from "Preschool" to "Einstein" level. Each success builds upon the last, creating lasting behavior changes.',
    'Within days, witness your dog: Stop excessive barking, End destructive chewing, Eliminate jumping on guests, Master perfect recall, Develop laser-focus attention',
  ];
  return texts[index];
}

function getFeatures() {
  return [
    '21 Mind-Enhancing Games: Transform training into playful bonding sessions',
    '7 Intelligence-Boosting Modules: Watch your dog progress from basic commands to genius-level skills',
    'Force-Free Methods: Build trust while achieving amazing results',
    'Step-by-Step Video Demonstrations: Never feel lost or confused',
    'Expert Support: Direct access to certified trainer Adrienne Farricelli',
    'Comprehensive Problem-Solving Library: Over 100 solutions for common behavior issues',
  ];
}

function getTestimonials() {
  return [
    {
      quote:
        "My aggressive German Shepherd became the neighborhood's gentlest dog in just 3 weeks!",
      author: 'Hannah T.',
    },
    {
      quote:
        "Finally, a training method that actually works! My puppy's transformation is incredible.",
      author: 'John J.',
    },
  ];
}
