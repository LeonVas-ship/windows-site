const Services = () => {
  const services = [
    {
      title: 'Установка пластиковых окон',
      text: 'Устанавливаем пластиковые окна Rehau от проверенного производителя с гарантией качества',
      img: 'src/assets/окно.png',
    },
    {
      title: 'Остекление балконов и лоджий',
      text: 'Занимаемся остеклением и отделкой балконов и лоджий. Теплое и холодное остекление, изготовление выносов и крыш. Беремся за сложные объекты',
      img: 'src/assets/остекление балконов.png',
    },
    {
      title: 'Остекление коттеджей и дач',
      text: 'Остекление и отделка под ключ: от коттеджей и дач до террас и беседок. Выделяем личного технолога под каждый объект',
      img: 'src/assets/остекление дач.png',
    },
    {
      title: 'Остекление корпоративных объектов',
      text: 'Реализуем сложные проекты по остеклению торговых центров, ресторанов, производственных помещений и офисов',
      img: 'src/assets/остекление корпо.png',
    },
  ]

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-2xl font-bold text-center text-slate-800 mb-12">
          Наши услуги
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map(({ title, text, img }) => (
            <div
              key={title}
              className="border border-orange-400 rounded-md p-7 transition hover:shadow-lg cursor-pointer"
            >
              <div className="flex items-center gap-5 mb-5">
                <div className="w-20 h-20 shrink-0 flex items-center justify-center">
                  <img src={img} alt="" className="w-full h-full object-contain" />
                </div>
                <h4 className="text-lg font-bold text-slate-800 leading-tight max-w-200px">
                  {title}
                </h4>
              </div>

              
              <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services