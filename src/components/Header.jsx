const Header = () => {
  const links = [
    { label: 'Услуги', href: '#services' },
    { label: 'Продукция', href: '#products', active: true },
    { label: 'О компании', href: '#' },
    { label: 'Портфолио', href: '#' },
    { label: 'Вопрос-ответ', href: '#' },
    { label: 'Контакты', href: '#footer' },
  ]

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between gap-6">

        
        <img src="src/assets/heroBg.png" alt="" />

        <nav>
          <ul className="flex gap-7 text-sm text-slate-700">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`cursor-pointer transition hover:text-orange-500 ${
                    link.active ? 'text-orange-500' : ''
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button className="flex items-center gap-2 cursor-pointer bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-5 py-2.5 rounded transition">
            <img src="src/assets/заявка на земер.png" alt="" />
            Заявка на замер
          </button>
          <button className="flex items-center gap-2 cursor-pointer bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium px-5 py-2.5 rounded transition">
            <img src="src/assets/заказать расчёт.png" alt="" />
            Заказать расчёт
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header