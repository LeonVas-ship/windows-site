const Footer = () => {
  const features = [
    {
      text: 'Сертифицированный производитель Rehau',
      img: 'src/assets/серфетикат.png',
    },
    {
      text: 'Инновационный оконный завод',
      img: 'src/assets/icon-1.png.png',
    },
    {
      text: 'Лидер по переработке профилей Rehau в России',
      img: 'src/assets/кубок.png',
    },
    {
      text: 'Высокотехнологичное автоматизированное оборудование',
      img: 'src/assets/высоко рука крч.png',
    },
    {
      text: 'Широкий ассортимент продукции',
      img: 'src/assets/широкий асортимент.png',
    },
  ]

  return (
    <footer id="footer" className="relative text-white py-16 overflow-hidden">

     <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(src/assets/footer-bg.jpg)' }}
        />


      <div className="absolute inset-0 bg-slate-900/70" />

      <div className="relative max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <div className="text-3xl font-bold tracking-[0.15em] mb-2">
            SCHTANDART
          </div>
          <div className="text-sm text-gray-300 tracking-[0.3em] uppercase">
            гарантия качества
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {features.map(({ text, img }) => (
            <div key={text} className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-sm text-gray-200 leading-snug">{text}</div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer