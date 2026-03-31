export default function Home() {
  return (
    <main className="bg-[#131313] text-[#e5e2e1]">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-6xl font-bold text-yellow-400">Maaloof Saeed</h1>
        <p className="mt-4 text-xl">UI/UX Designer & Full-Stack Developer</p>

        <p className="mt-4 max-w-xl text-gray-400">
          Building intuitive and practical digital products by combining design thinking with development.
        </p>

        <div className="mt-6 text-sm text-gray-400">
          <p>📍 Malé, Maldives</p>
          <p>📞 7219390</p>
          <p>✉️ maaloofsaeed@gmail.com</p>
        </div>

        <div className="mt-6 flex gap-4">
          <a href="https://github.com/ararasan" className="text-yellow-400">GitHub</a>
          <a href="https://www.figma.com/design/u1cPx2zVwBbpLdG0NFZ6FV/Untitled?node-id=10-3&t=VXxMRfYWaK2UbmDf-1" className="text-yellow-400">Figma</a>
        </div>
      </section>

      {/* PROJECT */}
      <section id="projects" className="py-20 px-6">
        <h2 className="text-3xl text-center font-bold text-yellow-400">Project</h2>

        <div className="max-w-5xl mx-auto mt-10 bg-gray-900 p-8">
          <p className="text-sm text-gray-500 mb-2">Personal Project</p>
          <h3 className="text-2xl font-bold">Boat Booking Web Application</h3>

          <p className="text-gray-400 mt-4">
            A full-stack booking platform designed to simplify boat reservations with a focus on usability and smooth user experience.
          </p>

          <ul className="mt-4 text-sm text-gray-400 space-y-1">
            <li>• Built using Next.js</li>
            <li>• Designed responsive booking interfaces</li>
            <li>• Integrated Supabase & PostgreSQL</li>
            <li>• Managed application logic and user interactions</li>
            <li>• Focused on layout clarity and UX improvements</li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-yellow-400">Contact</h2>
        <p className="text-gray-400 mt-4">Open to UI/UX internship opportunities</p>

        <p className="mt-4">maaloofsaeed@gmail.com</p>
        <p>7219390</p>

        <div className="mt-4 flex justify-center gap-4">
          <a href="https://github.com/ararasan" className="text-yellow-400">GitHub</a>
          <a href="https://www.figma.com/design/u1cPx2zVwBbpLdG0NFZ6FV/Untitled?node-id=10-3&t=VXxMRfYWaK2UbmDf-1" className="text-yellow-400">Figma</a>
        </div>
      </section>

    </main>
  );
}