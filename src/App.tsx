import { useState, useEffect } from 'react';
import {
  GraduationCap,
  Code,
  Server,
  Monitor,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  Calendar,
  DollarSign,
  Rocket,
  BookOpen,
  Gift
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll('section');
    sections[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-3">
        {[...Array(10)].map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToSection(i)}
            className={`block w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === i
                ? 'bg-emerald-600 scale-125'
                : 'bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to section ${i + 1}`}
          />
        ))}
      </div>

      {/* Section 1: Hero - Best Choice */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 opacity-70" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000" />

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="mb-8 inline-block">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg">
              <GraduationCap className="inline-block mr-2 w-6 h-6" />
              YouSoft IT Academy
            </div>
          </div>

          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent leading-tight">
            IT ni o'rganish uchun
            <br />
            eng zo'r tanlov
          </h1>

          <p className="text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Zamonaviy ta'lim, professional ustozlar va amaliy loyihalar bilan
            <span className="font-semibold text-emerald-700"> kelajagingizni </span>
            bugun yarating
          </p>

          <div className="flex gap-6 justify-center flex-wrap">
            <button
              onClick={() => scrollToSection(1)}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Batafsil tanishish
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection(3)}
              className="bg-white text-emerald-700 px-10 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-emerald-200"
            >
              Tariflar
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-emerald-700 mb-2">500+</div>
              <div className="text-slate-600 font-medium">O'quvchilar</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-emerald-700 mb-2">4</div>
              <div className="text-slate-600 font-medium">Yo'nalishlar</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-emerald-700 mb-2">100%</div>
              <div className="text-slate-600 font-medium">Amaliy darslар</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: About YouSoft */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-emerald-100 text-emerald-700 px-6 py-2 rounded-full font-semibold mb-6">
              Biz haqimizda
            </div>
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              YouSoft IT Academy tarixi
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full -mr-32 -mt-32 opacity-50" />

            <div className="relative z-10">
              <div className="flex items-start gap-8 mb-12">
                <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-6 rounded-2xl shadow-xl">
                  <Calendar className="w-12 h-12 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-slate-800 mb-4">
                    2025 yil 10-aprel
                  </h3>
                  <p className="text-xl text-slate-600 leading-relaxed">
                    YouSoft IT Academy o'z faoliyatini boshladi. Bizning maqsadimiz -
                    Yoshlarga zamonaviy IT bilimlarni o'rgatish va ularni professional
                    dasturchilarga aylantirishdir.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl">
                  <Users className="w-10 h-10 text-emerald-600 mb-4" />
                  <h4 className="text-2xl font-bold text-slate-800 mb-3">
                    Ko'plab o'quvchilar
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    Tashkil topganidan buyon yuzlab o'quvchilarni professional
                    dasturchilar darajasiga olib chiqib kelmoqdamiz
                  </p>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl">
                  <Award className="w-10 h-10 text-teal-600 mb-4" />
                  <h4 className="text-2xl font-bold text-slate-800 mb-3">
                    Professional ta'lim
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    Zamonaviy o'quv dasturi va tajribali ustozlar bilan
                    o'quvchilarimizning kelajagini bugun shakllantiramiz
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-2xl text-center">
                <p className="text-2xl font-semibold">
                  Hozirgi kungacha
                  <span className="text-3xl font-bold mx-2">500+</span>
                  o'quvchini o\'qitib kelmoqdamiz
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Directions */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className="inline-block bg-emerald-100 text-emerald-700 px-6 py-2 rounded-full font-semibold mb-6">
              Ta'lim yo'nalishlari
            </div>
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Bizning yo'nalishlarimiz
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              O'zingizga mos yo'nalishni tanlang va professional dasturchi bo'ling
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Computer Literacy */}
            <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-white">
                <Monitor className="w-16 h-16 mb-4" />
                <h3 className="text-3xl font-bold mb-2">Kompyuter savodxonligi</h3>
                <p className="text-blue-100">Kompyuter asoslarini o'rganing</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">Windows operatsion tizimi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">Microsoft Office dasturlari</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">Internet va tarmoqlar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">Xavfsizlik asoslari</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Frontend */}
            <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-8 text-white">
                <Code className="w-16 h-16 mb-4" />
                <h3 className="text-3xl font-bold mb-2">Frontend</h3>
                <p className="text-emerald-100">Veb-saytlar yarating</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">HTML, CSS, JavaScript</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">React.js framework</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">Responsive dizayn</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">Real loyihalar</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Backend */}
            <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 p-8 text-white">
                <Server className="w-16 h-16 mb-4" />
                <h3 className="text-3xl font-bold mb-2">Backend</h3>
                <p className="text-orange-100">Server dasturlash</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">PHP va Laravel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">Database boshqaruvi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">RESTful API yaratish</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">Authentication & Security</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Backend Pro */}
            <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-8 text-white">
                <Rocket className="w-16 h-16 mb-4" />
                <h3 className="text-3xl font-bold mb-2">Backend Pro</h3>
                <p className="text-purple-100">Linux Server + Docker</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">Linux server boshqaruvi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">Docker containerization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">CI/CD pipeline</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">Cloud deployment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Pricing */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className="inline-block bg-emerald-100 text-emerald-700 px-6 py-2 rounded-full font-semibold mb-6">
              Narxlar
            </div>
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Har bir yo'nalish uchun tariflar
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Qulay to'lov sharoitlari va sifatli ta'lim
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Computer Literacy Pricing */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  Kompyuter<br />savodxonligi
                </h3>
              </div>

              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-blue-600 mb-2">
                  300,000
                  <span className="text-2xl text-slate-600"> so'm</span>
                </div>
                <p className="text-slate-600">oyiga</p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>3 oylik kurs</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>Haftada 3 kun</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>Sertifikat</span>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                Ro'yxatdan o'tish
              </button>
            </div>

            {/* Frontend Pricing */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl shadow-2xl p-8 border-4 border-emerald-300 transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  <Star className="inline w-4 h-4 mr-1" />
                  OMMABOP
                </div>
              </div>

              <div className="text-center mb-6 mt-4">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Code className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  Frontend
                </h3>
              </div>

              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-emerald-600 mb-2">
                  600,000
                  <span className="text-2xl text-slate-600"> so'm</span>
                </div>
                <p className="text-slate-600">oyiga</p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>6 oylik kurs</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>Haftada 3 kun</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>Portfolio loyihalar</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>Sertifikat</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl font-semibold hover:shadow-xl transition-all">
                Ro'yxatdan o'tish
              </button>
            </div>

            {/* Backend Pricing */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-orange-100 hover:border-orange-300 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="bg-orange-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Server className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  Backend
                </h3>
              </div>

              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-orange-600 mb-2">
                  700,000
                  <span className="text-2xl text-slate-600"> so'm</span>
                </div>
                <p className="text-slate-600">oyiga</p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <span>6 oylik kurs</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <span>Haftada 3 kun</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <span>Real loyihalar</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <span>Sertifikat</span>
                </div>
              </div>

              <button className="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors">
                Ro'yxatdan o'tish
              </button>
            </div>

            {/* Backend Pro Pricing */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-purple-100 hover:border-purple-300 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  Backend Pro
                </h3>
              </div>

              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-purple-600 mb-2">
                  900,000
                  <span className="text-2xl text-slate-600"> so'm</span>
                </div>
                <p className="text-slate-600">oyiga</p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span>8 oylik kurs</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span>Haftada 3 kun</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span>Enterprise loyihalar</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span>Sertifikat</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-xl transition-all">
                Ro'yxatdan o'tish
              </button>
            </div>
          </div>

          <div className="mt-12 text-center bg-white rounded-2xl shadow-lg p-8">
            <DollarSign className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <p className="text-xl text-slate-700 font-medium">
              Bo'lib-bo'lib to'lash imkoniyati mavjud
              <span className="text-emerald-600 font-bold"> • </span>
              Chegirmalar tizimi
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Salary Statistics */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className="inline-block bg-emerald-100 text-emerald-700 px-6 py-2 rounded-full font-semibold mb-6">
              Statistika
            </div>
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Bitiruvchilar oylik maoshi
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Yo'nalishlarni bitirgan dasturchilаr hozirgi kunda qancha oylik olib ishlashmoqda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Frontend Salary */}
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl shadow-2xl p-10 text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                  <Code className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">Frontend Developer</h3>
                  <p className="text-emerald-100">6 oylik kurs</p>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-6">
                <div className="text-center">
                  <div className="text-6xl font-bold mb-2">4-8 mln</div>
                  <p className="text-xl text-emerald-100">so'm / oyiga</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <span className="font-medium">Junior level:</span>
                  <span className="text-xl font-bold">4-5 mln so'm</span>
                </div>
                <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <span className="font-medium">Middle level:</span>
                  <span className="text-xl font-bold">6-8 mln so'm</span>
                </div>
              </div>
            </div>

            {/* Backend Salary */}
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl shadow-2xl p-10 text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                  <Server className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">Backend Developer</h3>
                  <p className="text-orange-100">6 oylik kurs</p>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-6">
                <div className="text-center">
                  <div className="text-6xl font-bold mb-2">5-10 mln</div>
                  <p className="text-xl text-orange-100">so'm / oyiga</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <span className="font-medium">Junior level:</span>
                  <span className="text-xl font-bold">5-7 mln so'm</span>
                </div>
                <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <span className="font-medium">Middle level:</span>
                  <span className="text-xl font-bold">8-10 mln so'm</span>
                </div>
              </div>
            </div>

            {/* Backend Pro Salary */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl shadow-2xl p-10 text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                  <Rocket className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">Backend Pro Developer</h3>
                  <p className="text-purple-100">8 oylik kurs</p>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-6">
                <div className="text-center">
                  <div className="text-6xl font-bold mb-2">8-15 mln</div>
                  <p className="text-xl text-purple-100">so'm / oyiga</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <span className="font-medium">Junior level:</span>
                  <span className="text-xl font-bold">8-10 mln so'm</span>
                </div>
                <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <span className="font-medium">Middle level:</span>
                  <span className="text-xl font-bold">12-15 mln so'm</span>
                </div>
              </div>
            </div>

            {/* Computer Literacy Career */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl shadow-2xl p-10 text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                  <Monitor className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">Kompyuter savodxonligi</h3>
                  <p className="text-blue-100">3 oylik kurs</p>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-6">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">IT sohasi uchun</div>
                  <p className="text-xl text-blue-100">boshlang'ich poydevor</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <p className="font-medium text-center">
                    Офис xodimi, ma'muriy ishlar va keyingi IT yo'nalishlarga tayyorgarlik
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-10 text-center">
            <TrendingUp className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              Maosh doimiy o'sib boradi!
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Tajriba ortishi bilan dasturchining maoshi yil sayin 30-50% ga oshib boradi.
              3-5 yillik tajribaga ega Senior dasturchlar oyiga
              <span className="font-bold text-emerald-600"> 20-30 million so'm </span>
              va undan ko'proq maosh olishadi.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Roadmap */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-5xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className="inline-block bg-emerald-100 text-emerald-700 px-6 py-2 rounded-full font-semibold mb-6">
              Yo'l xaritasi
            </div>
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Dasturchi bo'lish uchun roadmap
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Bosqichma-bosqich professional dasturchiga aylaning
            </p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-600 via-teal-600 to-cyan-600" />

            {/* Steps */}
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative flex gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-xl z-10">
                  1
                </div>
                <div className="flex-1 bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">Yo'nalish tanlash</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    O'zingizga mos IT yo'nalishni tanlang: Frontend, Backend yoki Backend Pro.
                    Har bir yo'nalish o'zining kelajagi va imkoniyatlariga ega.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-lg font-medium">Frontend</span>
                    <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-lg font-medium">Backend</span>
                    <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg font-medium">Backend Pro</span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-xl z-10">
                  2
                </div>
                <div className="flex-1 bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">O'qishni boshlash</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    YouSoft IT Academy ga ro'yxatdan o'ting. Professional ustozlar bilan
                    zamonaviy o'quv dasturi asosida ta'lim oling.
                  </p>
                  <div className="flex items-center gap-4">
                    <BookOpen className="w-8 h-8 text-teal-600" />
                    <span className="text-slate-700 font-medium">Haftada 3 kun • Amaliy darslar</span>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-xl z-10">
                  3
                </div>
                <div className="flex-1 bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">Amaliy loyihalar</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    O'rganayotgan davrda real loyihalar ustida ishlang. Portfolio to'plang
                    va tajriba orttiring.
                  </p>
                  <div className="flex items-center gap-4">
                    <Code className="w-8 h-8 text-cyan-600" />
                    <span className="text-slate-700 font-medium">5-10 ta real loyiha</span>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-xl z-10">
                  4
                </div>
                <div className="flex-1 bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">Sertifikat olish</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Kursni muvaffaqiyatli yakunlang va YouSoft IT Academy sertifikatiga ega bo'ling.
                  </p>
                  <div className="flex items-center gap-4">
                    <Award className="w-8 h-8 text-blue-600" />
                    <span className="text-slate-700 font-medium">Rasmiy sertifikat</span>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative flex gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-xl z-10">
                  5
                </div>
                <div className="flex-1 bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">Ish topish</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Portfolio va sertifikat bilan ish qidiring. CV tayyorlash va intervyuga
                    tayyorgarlik ko'rishda yordam beramiz.
                  </p>
                  <div className="flex items-center gap-4">
                    <Users className="w-8 h-8 text-purple-600" />
                    <span className="text-slate-700 font-medium">Ish topishda yordam</span>
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="relative flex gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-xl z-10">
                  6
                </div>
                <div className="flex-1 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl shadow-2xl p-8">
                  <h3 className="text-2xl font-bold mb-3">Professional dasturchi!</h3>
                  <p className="leading-relaxed mb-4">
                    Siz endi professional dasturchisiz! Yuqori oylik, masofaviy ish
                    imkoniyatlari va doimiy rivojlanish yo'lingiz ochiq.
                  </p>
                  <div className="flex items-center gap-4">
                    <Rocket className="w-8 h-8" />
                    <span className="font-medium">Muvaffaqiyatli karyera boshlanadi!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Benefits */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className="inline-block bg-emerald-100 text-emerald-700 px-6 py-2 rounded-full font-semibold mb-6">
              Imtiyozlar
            </div>
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              YouSoft beradigan imtiyozlar
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Biz talabalarimizga eng yaxshi sharoitlarni taqdim etamiz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Kichik guruhlar
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Har bir guruhda 8-12 ta o'quvchi. Bu har bir talabaga individual yondashuv
                va maksimal e'tibor berish imkonini beradi.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Tajribali ustozlar
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Barcha ustozlarimiz 5+ yillik tajribaga ega professional dasturchlar.
                Ular nazariy bilim bilan birga amaliy tajribalarini ham ulashadi.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Amaliy loyihalar
              </h3>
              <p className="text-slate-600 leading-relaxed">
                O'qish davomida 5-10 ta real loyihalar ustida ishlaysiz. Bu sizning
                portfoliongizni to'ldiradi va ishga joylashishni osonlashtiradi.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Zamonaviy o'quv materiallari
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Eng so'nggi texnologiyalar va eng yangi dasturlash tillarining versiyalari
                asosida o'qitamiz. Video darslar va maxsus o'quv materiallari.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-br from-teal-500 to-cyan-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Chegirmalar tizimi
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Do'stingiz bilan kelganlar uchun 10% chegirma. Bir nechta kursga yozilsangiz
                qo'shimcha bonuslar. Bo'lib-bo'lib to'lash imkoniyati.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-br from-yellow-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Rasmiy sertifikat
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Kursni muvaffaqiyatli tugatganingizdan so'ng YouSoft IT Academy tomonidan
                tasdiqlovchi rasmiy sertifikat olasiz.
              </p>
            </div>

            {/* Benefit 7 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Ish topishda yordam
              </h3>
              <p className="text-slate-600 leading-relaxed">
                CV yozish, intervyuga tayyorgarlik va ish beruvchilar bilan bog'lanishda
                to'liq yordam beramiz. Career consulting xizmati.
              </p>
            </div>

            {/* Benefit 8 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-br from-pink-500 to-rose-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Doimiy qo'llab-quvvatlash
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Kurs tugaganidan keyin ham ustozlar bilan aloqada qolish imkoniyati.
                Telegram guruhda doimiy maslahatlar va yangiliklar.
              </p>
            </div>

            {/* Benefit 9 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Qulay o'quv muhiti
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Zamonaviy jihozlar bilan ta'minlangan qulay o'quv xonalari. Erkin Wi-Fi,
                konditsioner va barcha qulayliklar.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl shadow-2xl p-12 text-white text-center">
            <Star className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-4xl font-bold mb-4">
              YouSoft IT Academy - Eng yaxshi tanlov!
            </h3>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Biz sizning muvaffaqiyatingiz uchun barcha imkoniyatlarni yaratamiz.
              Professional ta'lim, qulay sharoitlar va katta kelajak sizi kutmoqda!
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: Contact Info */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-5xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className="inline-block bg-emerald-100 text-emerald-700 px-6 py-2 rounded-full font-semibold mb-6">
              Bog'lanish
            </div>
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Bizga qo'shiling!
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional dasturchiga aylanish yo'lingizni bugun boshlang
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-10">
              <h3 className="text-3xl font-bold text-slate-800 mb-8">Bog'lanish ma'lumotlari</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-xl">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 mb-1">Telefon raqam</div>
                    <div className="text-slate-600">+998 94 821 33 00</div>
                    <div className="text-slate-600">+998 91 123 57 83</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-xl">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 mb-1">Manzil</div>
                    <div className="text-slate-600">Farg'ona viloyati,Farg'ona shahar</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-xl">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 mb-1">Ish vaqti</div>
                    <div className="text-slate-600">Dushanba - Shanba: 8:00 - 19:00</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-xl">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 mb-1">Email</div>
                    <div className="text-slate-600">eliyorbektojimatov8807@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl shadow-2xl p-10 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  Hoziroq boshlang!
                </h3>
                <p className="text-xl leading-relaxed mb-8">
                  Kelajagingizni o'zgartiring va professional dasturchi bo'ling.
                  Biz sizga yordam beramiz!
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0" />
                    <span className="text-lg">Bepul konsultatsiya</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0" />
                    <span className="text-lg">Sinov darsiga taklif</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0" />
                    <span className="text-lg">To'liq ma'lumot berish</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-white text-emerald-700 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-colors shadow-lg">
                  Ro'yxatdan o'tish
                </button>
                <button className="w-full bg-emerald-700 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-800 transition-colors border-2 border-white">
                  Telegram kanalimiz
                </button>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white rounded-3xl shadow-xl p-10 text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Ijtimoiy tarmoqlarda kuzating
            </h3>
            <div className="flex justify-center gap-6">
              <button className="bg-blue-500 text-white w-14 h-14 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors shadow-lg">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
              </button>
              <button className="bg-blue-600 text-white w-14 h-14 rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </button>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white w-14 h-14 rounded-xl flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-colors shadow-lg">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </button>
              <button className="bg-red-600 text-white w-14 h-14 rounded-xl flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: FAQ / Additional Info */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className="inline-block bg-emerald-100 text-emerald-700 px-6 py-2 rounded-full font-semibold mb-6">
              Savol-Javoblar
            </div>
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Tez-tez beriladigan savollar
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Sizni qiziqtiradigan savollarning javoblarini toping
            </p>
          </div>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                O'qishni boshlash uchun nima kerak?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                O'qishni boshlash uchun kompyuter asoslari haqida minimal bilim yetarli.
                Barcha kerakli bilim va ko'nikmalarni kurs davomida o'rganasiz. Faqat
                o'rganishga bo'lgan ishtiyoq va kompyuter/noutbuk kerak.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Darslar qanday o'tkaziladi?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Darslar offline formatda o'tkaziladi. Haftada 3 kun, har bir dars 2 soatdan.
                Darslarning 70% amaliy mashg'ulotlar, 30% nazariya. Har bir mavzudan keyin
                mustaqil topshiriqlar beriladi.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Kursni tugatganimdan keyin ish topamanmi?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Kursni muvaffaqiyatli tugatganingizdan so'ng sizda portfolio, sertifikat va
                real tajriba bo'ladi. Biz ish topishda CV tayyorlash, intervyuga tayyorgarlik
                ko'rishda yordam beramiz. Ko'plab kompaniyalar bilan hamkorlikdamiz.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                To'lovni bo'lib-bo'lib to'lash mumkinmi?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Ha, albatta. To'lovni oyma-oy to'lash mumkin. Bundan tashqari, do'stingiz
                bilan kelganlar uchun 10% chegirma beramiz. Batafsil ma'lumot uchun biz
                bilan bog'laning.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Yoshim 30 dan oshgan, o'qisha olamanmi?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Albatta! Bizda yosh chegarasi yo'q. Dasturlashni har qanday yoshda o'rganish
                mumkin. Bizning o'quvchilarimiz orasida 16 yoshdan 45 yoshgacha bo'lgan
                talabalar bor va hammasi muvaffaqiyatli o'qishmoqda.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Ingliz tilini bilmasam bo'ladimi?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Boshlang'ich darajada ingliz tili bilmasangiz ham o'qishni boshlashingiz mumkin.
                Barcha darslar o'zbek tilida o'tkaziladi. Lekin dasturlashda ingliz tili juda
                foydali, shuning uchun kurs davomida kerakli ingliz terminlarini o'rganasiz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Thank You */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse animation-delay-2000" />

        <div className="relative z-10 text-center max-w-5xl mx-auto text-white">
          <div className="mb-12">
            <div className="inline-block bg-white/20 backdrop-blur-sm p-8 rounded-full mb-8">
              <Star className="w-24 h-24" />
            </div>
          </div>

          <h2 className="text-7xl font-bold mb-8 leading-tight">
            E'tiboringiz uchun rahmat!
          </h2>

          <p className="text-3xl mb-12 max-w-3xl mx-auto leading-relaxed">
            YouSoft IT Academy - sizning kelajagingizga sarmoya
          </p>

          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-12 mb-12 max-w-3xl mx-auto">
            <p className="text-2xl leading-relaxed mb-8">
              Professional dasturchi bo'lish orzusini amalga oshiring.
              Biz sizga bu yo'lda hamroh bo'lamiz!
            </p>

            <div className="flex gap-6 justify-center flex-wrap">
              <button
                onClick={() => scrollToSection(7)}
                className="bg-white text-emerald-700 px-12 py-5 rounded-xl font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                Hoziroq qo'shiling
              </button>
              <button
                onClick={() => scrollToSection(0)}
                className="bg-emerald-700 text-white px-12 py-5 rounded-xl font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-2 border-white"
              >
                Boshiga qaytish
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-xl">Mamnun o'quvchilar</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-5xl font-bold mb-2">4</div>
              <div className="text-xl">Professional yo'nalishlar</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-xl">Amaliy ta'lim</div>
            </div>
          </div>

          <div className="mt-16">
            <p className="text-2xl font-semibold mb-4">
              YouSoft IT Academy
            </p>
            <p className="text-xl opacity-90">
              Tashkil topgan: 10-aprel, 2025
            </p>
            <p className="text-xl opacity-90 mt-2">
              Kelajagingiz bizning qo'llarimizda ishonchli!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
