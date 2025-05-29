import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/notebook-hero.jpg')" }}>
      <div className="bg-blue-900 bg-opacity-50">
        <div className="container mx-auto px-6 py-32 text-white text-center">
          <h1 className="text-5xl font-bold">Empowering Bay Area Parents for College Admissions</h1>
          <p className="mt-4 text-lg">Small group (2–3 students) college consulting with personalized mentorship.</p>
          <div className="mt-8 space-x-4">
            <Link href="/contact"><a className="px-6 py-3 bg-accent rounded text-white">Book a Free Consultation</a></Link>
            <Link href="/faq"><a className="px-6 py-3 bg-white rounded text-primary">Ask a Question</a></Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold">One-on-One Counseling</h2>
          <p className="mt-2">Receive personalized guidance tailored to your child’s unique goals.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Small Group Strategy</h2>
          <p className="mt-2">Collaborate in focused groups to enhance admissions outcomes.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold">High School Roadmapping</h2>
          <p className="mt-2">Plan your child’s academic journey for optimal preparation.</p>
        </div>
      </div>
    </div>
  );
}
