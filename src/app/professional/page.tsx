import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Stethoscope, Star, Clock, CheckCircle, Video, MessageCircle, Calendar, Award } from "lucide-react";

const vets = [
  {
    id: 1,
    name: "Dr. Pedro Alves",
    specialty: "Nutrição Clínica Veterinária",
    experience: "12 anos",
    rating: 4.9,
    reviews: 234,
    price: "€45/consulta",
    available: true,
    languages: ["Português", "Inglês"],
    certifications: ["ECVCN", "RCVS"],
    bio: "Especialista em nutrição clínica com foco em doenças metabólicas e obesidade em cães e gatos.",
    emoji: "👨‍⚕️",
    nextSlot: "Hoje, 15:00",
  },
  {
    id: 2,
    name: "Dra. Ana Costa",
    specialty: "Medicina Felina & Nutrição",
    experience: "8 anos",
    rating: 4.8,
    reviews: 189,
    price: "€40/consulta",
    available: true,
    languages: ["Português", "Espanhol"],
    certifications: ["ABVP Felino", "ISVMA"],
    bio: "Especialista em medicina felina com vasta experiência em dietas terapêuticas para gatos com doenças renais e hepáticas.",
    emoji: "👩‍⚕️",
    nextSlot: "Amanhã, 10:00",
  },
  {
    id: 3,
    name: "Dr. Miguel Santos",
    specialty: "Toxicologia & Nutrição Preventiva",
    experience: "15 anos",
    rating: 5.0,
    reviews: 312,
    price: "€55/consulta",
    available: false,
    languages: ["Português", "Inglês", "Francês"],
    certifications: ["ECVCP", "ACVIM"],
    bio: "Referência em toxicologia veterinária e nutrição preventiva. Autor de vários artigos científicos sobre alimentação animal.",
    emoji: "👨‍🔬",
    nextSlot: "Próxima semana",
  },
  {
    id: 4,
    name: "Dra. Sofia Ferreira",
    specialty: "Nutrição Esportiva & Reabilitação",
    experience: "6 anos",
    rating: 4.7,
    reviews: 98,
    price: "€38/consulta",
    available: true,
    languages: ["Português"],
    certifications: ["CCRP", "ISVMA"],
    bio: "Especializada em nutrição para animais atletas e em recuperação pós-cirúrgica. Trabalha com cães de desporto e competição.",
    emoji: "👩‍⚕️",
    nextSlot: "Hoje, 17:30",
  },
];

const consultationTypes = [
  {
    icon: Video,
    title: "Videochamada",
    desc: "Consulta por vídeo em tempo real com o veterinário",
    duration: "30-60 min",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: MessageCircle,
    title: "Chat Assíncrono",
    desc: "Envie fotos, vídeos e perguntas, receba resposta em 24h",
    duration: "Resposta em 24h",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: Calendar,
    title: "Acompanhamento",
    desc: "Plano de acompanhamento mensal com check-ins regulares",
    duration: "Mensal",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
];

export default function ProfessionalPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-4">
              <Stethoscope className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">Consulta Profissional</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Fale com um <span className="gradient-text">Veterinário</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Conecte-se com veterinários nutricionistas certificados para orientação personalizada
              sobre a dieta do seu pet.
            </p>
          </div>

          {/* Why Professional */}
          <div className="bg-gradient-to-br from-blue-500/10 to-emerald-500/10 border border-blue-500/20 rounded-2xl p-8 mb-12">
            <h2 className="text-white font-bold text-xl mb-6 text-center">
              Por que consultar um profissional?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  icon: "🎯",
                  title: "Plano Personalizado",
                  desc: "Dieta adaptada às necessidades específicas do seu animal",
                },
                {
                  icon: "🔬",
                  title: "Base Científica",
                  desc: "Recomendações baseadas em evidência científica atual",
                },
                {
                  icon: "⚕️",
                  title: "Condições Especiais",
                  desc: "Suporte para animais com doenças crónicas ou alergias",
                },
                {
                  icon: "📊",
                  title: "Monitorização",
                  desc: "Acompanhamento da evolução e ajuste do plano",
                },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="text-white font-medium text-sm mb-1">{item.title}</div>
                  <div className="text-slate-400 text-xs">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Consultation Types */}
          <div className="mb-12">
            <h2 className="text-white font-bold text-2xl mb-6">Tipos de Consulta</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {consultationTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <div key={type.title} className="bg-slate-800 border border-slate-700 rounded-xl p-5">
                    <div className={`w-10 h-10 ${type.bg} rounded-xl flex items-center justify-center mb-3`}>
                      <Icon className={`w-5 h-5 ${type.color}`} />
                    </div>
                    <h3 className="text-white font-semibold mb-1">{type.title}</h3>
                    <p className="text-slate-400 text-sm mb-2">{type.desc}</p>
                    <span className={`text-xs font-medium ${type.color}`}>{type.duration}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Veterinarians */}
          <div className="mb-12">
            <h2 className="text-white font-bold text-2xl mb-6">Os Nossos Especialistas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {vets.map((vet) => (
                <div
                  key={vet.id}
                  className={`card-hover bg-slate-800 border rounded-2xl p-6 ${
                    vet.available ? "border-slate-700" : "border-slate-700 opacity-75"
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">{vet.emoji}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-white font-bold text-lg">{vet.name}</h3>
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded-full ${
                            vet.available
                              ? "bg-emerald-500/20 text-emerald-400"
                              : "bg-slate-700 text-slate-500"
                          }`}
                        >
                          {vet.available ? "Disponível" : "Indisponível"}
                        </span>
                      </div>
                      <div className="text-emerald-400 text-sm">{vet.specialty}</div>
                      <div className="flex items-center gap-3 mt-1">
                        <div className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                          <span className="text-white text-sm font-medium">{vet.rating}</span>
                          <span className="text-slate-500 text-xs">({vet.reviews})</span>
                        </div>
                        <span className="text-slate-500 text-xs">•</span>
                        <span className="text-slate-400 text-xs">{vet.experience} experiência</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{vet.bio}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {vet.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded-full flex items-center gap-1"
                      >
                        <Award className="w-3 h-3 text-yellow-400" />
                        {cert}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold">{vet.price}</div>
                      {vet.available && (
                        <div className="text-slate-500 text-xs flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Próximo slot: {vet.nextSlot}
                        </div>
                      )}
                    </div>
                    <button
                      disabled={!vet.available}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                        vet.available
                          ? "btn-primary text-white"
                          : "bg-slate-700 text-slate-500 cursor-not-allowed"
                      }`}
                    >
                      {vet.available ? "Agendar" : "Indisponível"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How it works */}
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 mb-12">
            <h2 className="text-white font-bold text-2xl mb-8 text-center">Como Funciona</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Escolha o Especialista", desc: "Selecione o veterinário com base na especialidade e disponibilidade", icon: "🔍" },
                { step: "2", title: "Agende a Consulta", desc: "Escolha o horário que melhor se adapta à sua agenda", icon: "📅" },
                { step: "3", title: "Prepare-se", desc: "Partilhe os dados do seu pet e as suas dúvidas antecipadamente", icon: "📋" },
                { step: "4", title: "Consulta Online", desc: "Realize a consulta por vídeo ou chat e receba o plano personalizado", icon: "💻" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Included in subscription */}
          <div className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-emerald-500/30 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-6 h-6 text-emerald-400" />
              <h2 className="text-white font-bold text-xl">Incluído no Plano Anual</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "1 consulta veterinária por mês incluída",
                "Acesso prioritário a especialistas",
                "Relatórios partilhados automaticamente com o veterinário",
                "Histórico completo de consultas",
                "Planos nutricionais personalizados",
                "Suporte entre consultas via chat",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <a
                href="/pricing"
                className="btn-primary text-white text-sm font-semibold px-6 py-3 rounded-xl inline-block"
              >
                Ver Plano Anual →
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
