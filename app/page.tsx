export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-4xl font-bold text-center">
            Welcome to Next.js 15
          </h1>

          <p className="text-xl text-center text-gray-600">
            Built with Tesslate Studio
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl mt-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors">
              <h2 className="text-lg font-semibold mb-2">📚 Docs</h2>
              <p className="text-gray-600">
                Learn about Next.js 15 features and API routes
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors">
              <h2 className="text-lg font-semibold mb-2">⚡ Fast</h2>
              <p className="text-gray-600">
                Hot reload with React Server Components
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors">
              <h2 className="text-lg font-semibold mb-2">🎨 Tailwind</h2>
              <p className="text-gray-600">
                Utility-first CSS framework included
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors">
              <h2 className="text-lg font-semibold mb-2">🔷 TypeScript</h2>
              <p className="text-gray-600">
                Full type safety out of the box
              </p>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <a
              href="/api/hello"
              className="rounded-lg border border-gray-300 bg-gray-100 px-5 py-3 hover:bg-gray-200 transition-colors"
              target="_blank"
            >
              Test API Route →
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
