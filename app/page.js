function TaskCard({ title  , priority}) {
  return (
    <section className="rounded-xl bg-white p-4 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      <p className="text-sm text-slate-600">{priority} priority</p>
    </section>
  )
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-2xl space-y-4">
        <TaskCard title="Design landing page" priority="High"/>
        <TaskCard title="Review code" priority="Low" />
      </div>
    </main>
  )
}