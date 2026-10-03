const Products = () => {
  const tabs = [
    { label: 'Стандарт', active: true },
    { label: 'Бизнес', active: false },
    { label: 'Премиум', active: false },
    { label: 'Эксклюзив', active: false },
  ]

  const specs = [
    'Системная глубина 60/60 мм',
    'Ширина стеклопакета 24/31 мм',
    'Воздушные камеры 3',
    'Теплосопротивление 0,70 м2С/Вт',
  ]

  return (
    <section id="products" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-2xl font-bold text-center text-slate-800 mb-10">
          Продукция
        </h2>

        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {tabs.map(({ label, active }) => (
            <button
              key={label}
              className={`text-base cursor-pointer transition ${
                active
                  ? 'bg-orange-500 text-white px-5 py-2 rounded'
                  : 'text-slate-700 hover:text-orange-500'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 bg-white rounded-md overflow-hidden">
          <img src="src/assets/L.png" alt="" className="w-full h-full object-cover" />

          <div className="p-10 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-orange-500 mb-6">
              Rehau Blitz New
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed mb-8">
              Сохраняют тепло в доме, защищают от шума и вписываются в любой
              интерьер. Практичный выбор
            </p>

            <ul className="space-y-4">
              {specs.map((spec) => (
                <li key={spec} className="text-base text-slate-800">
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products