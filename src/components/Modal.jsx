import { X } from 'lucide-react'

const Modal = ({ open, onClose }) => {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-200 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative bg-white dark:bg-slate-800 rounded-lg p-7 w-[90%] max-w-md">
        <button onClick={onClose} className="absolute top-3 right-4 text-gray-400 hover:text-gray-700">
          <X size={22} />
        </button>
        <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-5">
          Отправить заявку
        </h3>
        <form onSubmit={(e) => { e.preventDefault(); onClose() }}>
          <input type="text" placeholder="Представьтесь пожалуста" className="w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-700 text-slate-800 dark:text-white rounded px-3 py-2 text-sm mb-2" required />
          <input type="tel" placeholder="Номер телефона" className="w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-700 text-slate-800 dark:text-white rounded px-3 py-2 text-sm mb-3" required />
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded transition">
            Отправить
          </button>
        </form>
      </div>
    </div>
  )
}

export default Modal