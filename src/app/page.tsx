import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import {
  PawPrint,
  Calculator,
  Leaf,
  ShoppingBag,
  Pill,
  Download,
  Stethoscope,
  BookOpen,
  Shield,
  CheckCircle,
  Star,
  ArrowRight,
  Zap,
  Heart,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: PawPrint,
    title: "Dados do Pet",
    description:
      "Registe todos os dados do seu animal: raça, peso, idade, condição de saúde e histórico alimentar.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: Calculator,
    title: "Cálculo Calórico",
    description:
      "Calcule automaticamente as necessidades calóricas diárias com base no peso, atividade e objetivos do seu pet.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: Leaf,
    title: "Nutrientes Críticos",
    description:
      "Monitorize proteínas, gorduras, vitaminas e minerais essenciais para a saúde do seu animal.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    icon: ShoppingBag,
    title: "Fontes de Alimentos",
    description:
      "Base de dados completa de alimentos seguros e perigosos para cães, gatos e outros animais.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    icon: Pill,
    title: "Suplementação",
    description:
      "Guia de suplementos recomendados por veterinários para complementar a dieta do seu pet.",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
  },
  {
    icon: Download,
    title: "Download / Visual",
    description:
      "Exporte relatórios em PDF com gráficos detalhados da evolução nutricional do seu animal.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
  {
    icon: Stethoscope,
    title: "Consulta Profissional",
    description:
      "Conecte-se com veterinários nutricionistas certificados para orientação personalizada.",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
  {
    icon: BookOpen,
    title: "Blog / Conteúdo",
    description:
      "Artigos, dicas e novidades sobre nutrição animal escritos por especialistas.",
    color: "text-teal-400",
    bg: "bg-teal-400/10",
  },
  {
    icon: Shield,
    title: "Aviso Legal",
    description:
      "Transparência total sobre responsabilidades, limitações e uso correto da plataforma.",
    color: "text-red-400",
    bg: "bg-red-400/10",
  },
];

const testimonials = [
  {
    name: "Ana Silva",
    pet: "Tutora do Max (Golden Retriever)",
    text: "O PetDiet Pro transformou a alimentação do meu cão. Perdi 3kg em 2 meses com o plano personalizado!",
    stars: 5,
    avatar: "AS",
  },
  {
    name: "Carlos Mendes",
    pet: "Tutor da Luna (Gata Persa)",
    text: "Finalmente consigo controlar os nutrientes da minha gata de forma simples. Os relatórios são incríveis!",
    stars: 5,
    avatar: "CM",
  },
  {
    name: "Maria João",
    pet: "Tutora do Bolinha (Coelho)",
    text: "Não sabia que havia tantos alimentos perigosos para coelhos. Esta app salvou a vida do meu Bolinha!",
    stars: 5,
    avatar: "MJ",
  },
];

const stats = [
  { value: "50K+", label: "Pets Registados" },
  { value: "98%", label: "Satisfação" },
  { value: "200+", label: "Veterinários Parceiros" },
  { value: "15+", label: "Países" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">
                A plataforma #1 de nutrição para pets
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Controle a{" "}
              <span className="gradient-text">Dieta do Seu Pet</span>
              {" "}com Precisão Científica
            </h1>

            <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto">
              Cálculo calórico automático, monitorização de nutrientes, guia de alimentos e
              suplementação — tudo numa plataforma intuitiva para cuidar melhor do seu animal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/pricing"
                className="btn-primary text-white font-semibold px-8 py-4 rounded-xl text-lg flex items-center justify-center gap-2"
              >
                Começar Gratuitamente
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/dashboard"
                className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors border border-slate-600 flex items-center justify-center gap-2"
              >
                Ver Demo
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-500 text-sm">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Sem compromisso</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Cancele quando quiser</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Pagamento seguro</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="mt-16 relative max-w-4xl mx-auto">
            <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6 shadow-2xl">
              {/* Mock Dashboard */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-slate-500 text-sm">PetDiet Pro – Dashboard</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                {[
                  { label: "Calorias Hoje", value: "420 kcal", icon: "🔥", color: "text-orange-400" },
                  { label: "Proteína", value: "28g / 32g", icon: "💪", color: "text-blue-400" },
                  { label: "Hidratação", value: "85%", icon: "💧", color: "text-cyan-400" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-slate-900 rounded-xl p-4">
                    <div className="text-2xl mb-1">{stat.icon}</div>
                    <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-slate-500 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="bg-slate-900 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-slate-300 text-sm font-medium">Progresso Nutricional – Max 🐕</span>
                  <span className="text-emerald-400 text-xs">Hoje</span>
                </div>
                <div className="space-y-2">
                  {[
                    { label: "Proteínas", pct: 87, color: "bg-blue-500" },
                    { label: "Gorduras", pct: 65, color: "bg-yellow-500" },
                    { label: "Carboidratos", pct: 45, color: "bg-purple-500" },
                    { label: "Vitaminas", pct: 92, color: "bg-emerald-500" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <span className="text-slate-400 text-xs w-24">{item.label}</span>
                      <div className="flex-1 bg-slate-700 rounded-full h-2">
                        <div
                          className={`${item.color} h-2 rounded-full`}
                          style={{ width: `${item.pct}%` }}
                        />
                      </div>
                      <span className="text-slate-400 text-xs w-8">{item.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-slate-700 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Tudo o que o seu pet precisa
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Uma plataforma completa com todas as ferramentas para garantir a saúde e bem-estar do seu animal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="card-hover bg-slate-800 border border-slate-700 rounded-2xl p-6"
                >
                  <div className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Como funciona?
            </h2>
            <p className="text-slate-400 text-lg">
              Em apenas 3 passos simples, comece a cuidar melhor do seu pet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Registe o seu Pet",
                desc: "Adicione os dados do seu animal: nome, espécie, raça, peso, idade e condição de saúde.",
                icon: "🐾",
              },
              {
                step: "02",
                title: "Receba o Plano",
                desc: "O nosso algoritmo calcula automaticamente as necessidades calóricas e nutricionais personalizadas.",
                icon: "📊",
              },
              {
                step: "03",
                title: "Acompanhe a Evolução",
                desc: "Registe as refeições diárias e veja relatórios detalhados da saúde nutricional do seu pet.",
                icon: "📈",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <div className="text-emerald-400 font-bold text-sm mb-2">PASSO {item.step}</div>
                <h3 className="text-white font-semibold text-xl mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              O que dizem os nossos utilizadores
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{t.name}</div>
                    <div className="text-slate-500 text-xs">{t.pet}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-emerald-500/30 rounded-3xl p-12">
            <Heart className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              O seu pet merece o melhor
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
              Junte-se a mais de 50.000 tutores que já confiam no PetDiet Pro para cuidar da saúde dos seus animais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="btn-primary text-white font-semibold px-8 py-4 rounded-xl text-lg flex items-center justify-center gap-2"
              >
                Ver Planos e Preços
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-slate-500 text-sm mt-4">
              A partir de €10/semana · Cancele quando quiser
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer Banner */}
      <section className="py-6 px-4 bg-amber-500/10 border-y border-amber-500/20">
        <div className="max-w-7xl mx-auto flex items-start gap-3">
          <Shield className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <p className="text-amber-200/80 text-sm">
            <strong className="text-amber-400">Aviso Legal:</strong> O PetDiet Pro é uma ferramenta de apoio e não substitui a consulta veterinária profissional.
            Sempre consulte um médico veterinário antes de fazer alterações significativas na dieta do seu animal.{" "}
            <Link href="/legal" className="underline hover:text-amber-300">
              Saiba mais
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
