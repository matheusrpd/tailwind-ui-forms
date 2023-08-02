import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/matheusrpd.png"
        alt=""
        className="h-10 w-10 rounded-full"
      />

      <div className="flex flex-col overflow-hidden">
        <span className="text-sm font-semibold text-zinc-700">
          Matheus Allan
        </span>
        <span className="truncate text-sm text-zinc-500">
          matheusrpd@gmail.com
        </span>
      </div>

      <button
        type="button"
        className="ml-auto rounded p-2 transition-colors hover:bg-zinc-50"
      >
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
