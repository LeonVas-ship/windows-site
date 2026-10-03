const Hero = () => {
  const features = [
    {
      text: 'Современные окна и балконные конструкции по доступным ценам',
      img: 'src/assets/icon-1.png.png',
    },
    {
      text: 'Квалифицированный подход к решению задач любой сложности',
      img: 'src/assets/feature-2.png.png',
    },
    {
      text: 'Гарантия высочайшего качества нашей продукции',
      img: 'src/assets/feature-3.png.png',
    },
  ]

  return (
    <section className="relative text-white py-16 overflow-hidden">
      
<div
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
/>

      
      <div className="absolute inset-0 bg-slate-900/70" />

      <div className="relative max-w-7xl mx-auto px-5 grid lg:grid-cols-[1fr_400px] gap-16 items-center">
        
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-1">
            Окна Хаус -
          </h1>
          <h2 className="text-3xl md:text-4xl font-light leading-snug mb-14 max-w-xl">
            Профессиональный подход<br />к остеклению
          </h2>

          
          <div className="grid grid-cols-3 gap-6 max-w-2xl">
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

        
        <div className="bg-white text-slate-800 rounded-md p-8 shadow-2xl">
          <h3 className="text-base font-bold text-center mb-6 text-slate-800">
            Вызвать замерщика на дом
          </h3>

          <input
            type="text"
            placeholder="Представьтесь, пожалуйста"
            className="w-full bg-gray-100 border-0 rounded px-4 py-3 text-sm mb-3 placeholder-gray-500 focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Номер телефона"
            className="w-full bg-gray-100 border-0 rounded px-4 py-3 text-sm mb-3 placeholder-gray-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full bg-gray-100 border-0 rounded px-4 py-3 text-sm mb-4 placeholder-gray-500 focus:outline-none"
          />

          <label className="flex items-start gap-3 mb-6 select-none cursor-pointer">
            <input
              type="checkbox"
              className="mt-0.5 w-4 h-4 accent-orange-500 shrink-0 cursor-pointer"
            />
            <span className="text-xs text-gray-600 leading-snug">
              Согласен на обработку персональных данных в соответствии с{' '}
              <a href="#" className="text-blue-600 underline cursor-pointer">
                политикой конфиденциальности
              </a>
            </span>
          </label>

          <button className="w-full cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded transition">
            Отправить заявку
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero