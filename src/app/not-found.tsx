import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Tool not found</h2>
        <p className="text-gray-500 mb-6">
          This tool might have been removed or the URL is incorrect.
        </p>
        <Link
          href="/"
          className="bg-brand-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-700 transition-colors"
        >
          Browse all tools
        </Link>
      </div>
    </main>
  );
}
