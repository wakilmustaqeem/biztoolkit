import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-10">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-gray-800 font-semibold">BizToolkit</p>
          <p className="text-sm text-gray-500">Free business calculators for freelancers and small businesses.</p>
        </div>
        <nav className="flex gap-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/#calculators" className="hover:text-blue-600">Calculators</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/disclaimer" className="hover:text-blue-600">Disclaimer</Link>
          <Link href="/privacy" className="hover:text-blue-600">Privacy</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </nav>
      </div>
      <div className="text-center text-sm text-gray-400 pb-4">
        © {new Date().getFullYear()} BizToolkit. All rights reserved.
      </div>
    </footer>
  );
}
