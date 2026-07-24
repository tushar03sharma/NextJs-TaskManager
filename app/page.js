'use client'

import { useState } from 'react'

export default function HomePage() {
  const [title, setTitle] = useState('Design landing page')
  const [status, setStatus] = useState('Not started')

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-xl rounded-xl bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
        <h1 className="text-2xl font-bold text-slate-900">{status}</h1>
        <button
          onClick={() => setTitle('Review code')}
          className="mt-4 rounded bg-slate-900 px-4 py-2 text-white"
        >
          Change task
        </button>
        <button onClick={()=>{setStatus('In progress')}}
        className="mt-4 rounded bg-slate-900 px-4 py-2 text-white"
        >Start Task</button>
       <button onClick={()=>{setStatus('Compelted')}}
        className="mt-4 rounded bg-slate-900 px-4 py-2 text-white"
        > Task</button>

      </div>
    </main>
  )
}