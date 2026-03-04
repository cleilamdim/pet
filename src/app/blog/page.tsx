import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { BookOpen, Clock, User, Tag, ArrowRight } from "lucide-react";

const posts = [
  {
    id: 1,
    slug: "dieta-raw-para-caes",
    title: "Dieta BARF para Cães: O que é e como implementar com segurança",
    excerpt:
      "A dieta BARF (Biologically Appropriate Raw Food) tem ganho popularidade entre tutores. Saiba os benefícios, riscos e como fazer a transição de forma segura.",
    category: "Nutrição Canina",
    author: "Dr. Pedro Alves",
    authorRole: "Médico Veterinário",
    date: "28 Fev 2024",
    readTime: "8 min",
    image: "🐕",
    tags: ["BARF", "Dieta Natural", "Cães"],
    featured: true,
  },
  {
    id: 2,
    slug: "nutrição-gatos-idosos",
    title: "Nutrição para Gatos Idosos: Adaptando a Dieta com a Idade",
    excerpt:
      "À medida que os gatos envelhecem, as suas necessidades nutricionais mudam. Descubra como ajustar a alimentação para garantir qualidade de vida na terceira idade.",
    category: "Nutrição Felina",
    author: "Dra. Ana Costa",
    authorRole: "Especialista em Felinos",
    date: "25 Fev 2024",
    readTime: "6 min",
    image: "🐈",
    tags: ["Gatos", "Idosos", "Nutrição"],
    featured: false,
  },
  {
    id: 3,
    slug: "alimentos-toxicos-pets",
    title: "10 Alimentos Tóxicos para Pets que Deve Conhecer",
    excerpt:
      "Muitos alimentos comuns na nossa cozinha podem ser perigosos ou fatais para cães e gatos. Conheça os principais e saiba como agir em caso de ingestão acidental.",
    category: "Segurança Alimentar",
    author: "Dr. Miguel Santos",
    authorRole: "Toxicologista Veterinário",
    date: "20 Fev 2024",
    readTime: "5 min",
    image: "⚠️",
    tags: ["Toxicidade", "Segurança", "Emergência"],
    featured: false,
  },
  {
    id: 4,
    slug: "obesidade-canina",
    title: "Obesidade em Cães: Causas, Riscos e Como Tratar",
    excerpt:
      "A obesidade é um dos problemas de saúde mais comuns em cães domésticos. Aprenda a identificar, prevenir e tratar com uma dieta equilibrada e exercício.",
    category: "Saúde e Bem-estar",
    author: "Dra. Sofia Ferreira",
    authorRole: "Nutricionista Veterinária",
    date: "15 Fev 2024",
    readTime: "7 min",
    image: "🏃",
    tags: ["Obesidade", "Peso", "Saúde"],
    featured: false,
  },
  {
    id: 5,
    slug: "suplementos-articulacoes",
    title: "Glucosamina e Condroitina: Vale a Pena Suplementar?",
    excerpt:
      "Os suplementos articulares são muito populares para cães de raças grandes. Analisamos a evidência científica e quando realmente fazem diferença.",
    category: "Suplementação",
    author: "Dr. Pedro Alves",
    authorRole: "Médico Veterinário",
    date: "10 Fev 2024",
    readTime: "6 min",
    image: "💊",
    tags: ["Suplementos", "Articulações", "Raças Grandes"],
    featured: false,
  },
  {
    id: 6,
    slug: "hidratacao-pets",
    title: "A Importância da Hidratação: Quanto Água Precisa o Seu Pet?",
    excerpt:
      "A desidratação é um risco sério para animais de estimação. Saiba como calcular as necessidades hídricas do seu pet e como incentivá-lo a beber mais água.",
    category: "Saúde e Bem-estar",
    author: "Dra. Ana Costa",
    authorRole: "Especialista em Felinos",
    date: "5 Fev 2024",
    readTime: "4 min",
    image: "💧",
    tags: ["Hidratação", "Água", "Saúde"],
    featured: false,
  },
];

const categories = [
  "Todos",
  "Nutrição Canina",
  "Nutrição Felina",
  "Segurança Alimentar",
  "Saúde e Bem-estar",
  "Suplementação",
];

export default function BlogPage() {
  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-4">
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 text-sm font-medium">Blog & Conteúdo</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Nutrição Animal em <span className="gradient-text">Foco</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Artigos, dicas e novidades sobre nutrição e saúde animal escritos por veterinários e especialistas.
            </p>
          </div>

          {/* Categories */}
          <div className="flex gap-2 flex-wrap justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  cat === "Todos"
                    ? "bg-emerald-500 text-white"
                    : "bg-white border border-gray-200 text-gray-500 hover:border-emerald-400 hover:text-emerald-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 rounded-2xl p-8 mb-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  DESTAQUE
                </span>
                <span className="text-gray-500 text-sm">{featuredPost.category}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-6xl mb-4">{featuredPost.image}</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{featuredPost.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="btn-primary text-white text-sm font-semibold px-5 py-2.5 rounded-lg inline-flex items-center gap-2"
                  >
                    Ler Artigo
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                  {featuredPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white border border-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full flex items-center gap-1"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Regular Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="card-hover bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
              >
                <div className="p-6">
                  <div className="text-4xl mb-4">{post.image}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-gray-900 font-semibold text-lg mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-gray-400 text-xs mb-4">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-emerald-600 hover:text-emerald-700 text-sm font-medium flex items-center gap-1 transition-colors"
                  >
                    Ler mais
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-16 bg-gradient-to-br from-emerald-50 to-blue-50 border border-emerald-100 rounded-2xl p-10 text-center">
            <h3 className="text-gray-900 font-bold text-2xl mb-3">
              Receba os melhores artigos na sua caixa de entrada
            </h3>
            <p className="text-gray-500 mb-6">
              Subscreva a nossa newsletter e receba dicas semanais de nutrição animal.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="O seu email"
                className="flex-1 bg-white border border-gray-300 text-gray-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500"
              />
              <button className="btn-primary text-white font-semibold px-6 py-3 rounded-xl text-sm">
                Subscrever
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
