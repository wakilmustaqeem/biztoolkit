import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <Link href="/" className="text-xl font-bold text-gray-900">
            BizToolkit
          </Link>
          <p className="text-sm text-gray-500">Simple Business Calculators</p>
        </div>
        <nav className="flex gap-4 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/#calculators" className="hover:text-blue-600">Calculators</Link>
        </nav>
      </div>
    </header>
  );
}
