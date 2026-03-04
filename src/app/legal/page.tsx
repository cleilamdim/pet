import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Shield, AlertTriangle, FileText, Lock, Scale, Info } from "lucide-react";

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4 text-amber-600" />
              <span className="text-amber-700 text-sm font-medium">Informação Legal</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Aviso Legal & <span className="gradient-text">Disclaimer</span>
            </h1>
            <p className="text-gray-500">
              Última atualização: 1 de Março de 2024
            </p>
          </div>

          {/* Quick Nav */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-10">
            <h3 className="text-gray-900 font-medium mb-3">Navegação Rápida</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { href: "#disclaimer", label: "Disclaimer" },
                { href: "#responsabilidade", label: "Responsabilidade" },
                { href: "#uso-informacao", label: "Uso da Informação" },
                { href: "#privacidade", label: "Privacidade" },
                { href: "#termos", label: "Termos de Uso" },
                { href: "#pagamentos", label: "Pagamentos" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="bg-white hover:bg-gray-100 border border-gray-200 text-gray-600 hover:text-gray-900 text-sm px-3 py-1.5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Important Warning */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-amber-700 font-bold text-lg mb-2">Aviso Importante</h3>
                <p className="text-amber-700 leading-relaxed">
                  O PetDiet Pro é uma ferramenta de apoio informativo e <strong>não substitui</strong> a consulta
                  veterinária profissional. Todas as informações fornecidas têm carácter educativo e orientativo.
                  Antes de fazer qualquer alteração significativa na dieta do seu animal, consulte sempre um
                  médico veterinário qualificado.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Disclaimer */}
            <section id="disclaimer" className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
                  <Info className="w-5 h-5 text-red-500" />
                </div>
                <h2 className="text-gray-900 font-bold text-xl">Disclaimer</h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  As informações disponibilizadas no PetDiet Pro são fornecidas &ldquo;tal como estão&rdquo; e destinam-se
                  exclusivamente a fins informativos e educativos. Não constituem aconselhamento veterinário,
                  médico ou nutricional profissional.
                </p>
                <p>
                  Os cálculos calóricos e nutricionais apresentados são estimativas baseadas em fórmulas
                  científicas geralmente aceites, mas podem não ser adequados para todos os animais,
                  especialmente aqueles com condições de saúde específicas, doenças crónicas, gravidez,
                  lactação ou necessidades especiais.
                </p>
                <p>
                  O PetDiet Pro não se responsabiliza por quaisquer danos, lesões ou problemas de saúde
                  resultantes do uso das informações fornecidas nesta plataforma sem supervisão veterinária adequada.
                </p>
                <p>
                  As informações sobre alimentos seguros e perigosos são baseadas em literatura científica
                  disponível, mas podem não ser exaustivas. Em caso de dúvida, consulte sempre um veterinário.
                </p>
              </div>
            </section>

            {/* Responsabilidade */}
            <section id="responsabilidade" className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
                  <Scale className="w-5 h-5 text-orange-500" />
                </div>
                <h2 className="text-gray-900 font-bold text-xl">Responsabilidade</h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <h3 className="text-gray-900 font-semibold">Limitação de Responsabilidade</h3>
                <p>
                  Na máxima extensão permitida pela lei aplicável, o PetDiet Pro, os seus diretores,
                  funcionários, parceiros e fornecedores não serão responsáveis por:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-500 ml-4">
                  <li>Danos diretos, indiretos, incidentais ou consequenciais ao seu animal</li>
                  <li>Perdas financeiras resultantes do uso da plataforma</li>
                  <li>Erros ou omissões no conteúdo fornecido</li>
                  <li>Interrupções ou indisponibilidade do serviço</li>
                  <li>Decisões tomadas com base nas informações da plataforma</li>
                </ul>
                <h3 className="text-gray-900 font-semibold mt-4">Responsabilidade do Utilizador</h3>
                <p>
                  O utilizador é o único responsável pelas decisões tomadas relativamente à alimentação
                  e cuidados do seu animal. Recomendamos fortemente a consulta regular com um médico
                  veterinário, especialmente antes de implementar mudanças dietéticas significativas.
                </p>
              </div>
            </section>

            {/* Uso da Informação */}
            <section id="uso-informacao" className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                  <FileText className="w-5 h-5 text-blue-500" />
                </div>
                <h2 className="text-gray-900 font-bold text-xl">Uso da Informação</h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  As informações e ferramentas disponíveis no PetDiet Pro destinam-se a:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-500 ml-4">
                  <li>Auxiliar tutores a compreender as necessidades nutricionais dos seus animais</li>
                  <li>Fornecer estimativas calóricas como ponto de partida para discussão com veterinários</li>
                  <li>Educar sobre alimentos seguros e perigosos para diferentes espécies</li>
                  <li>Facilitar o acompanhamento da evolução nutricional do animal</li>
                </ul>
                <p>
                  As informações <strong>não devem ser usadas</strong> para:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-500 ml-4">
                  <li>Diagnosticar ou tratar doenças</li>
                  <li>Substituir prescrições veterinárias</li>
                  <li>Tomar decisões médicas sem supervisão profissional</li>
                </ul>
              </div>
            </section>

            {/* Privacidade */}
            <section id="privacidade" className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
                  <Lock className="w-5 h-5 text-emerald-600" />
                </div>
                <h2 className="text-gray-900 font-bold text-xl">Política de Privacidade</h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <h3 className="text-gray-900 font-semibold">Dados Recolhidos</h3>
                <p>Recolhemos os seguintes dados para prestar o serviço:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-500 ml-4">
                  <li>Dados de conta: nome, email, palavra-passe (encriptada)</li>
                  <li>Dados do pet: nome, espécie, raça, peso, idade, histórico alimentar</li>
                  <li>Dados de pagamento: processados de forma segura via Stripe/PayPal (não armazenamos dados de cartão)</li>
                  <li>Dados de uso: páginas visitadas, funcionalidades utilizadas (para melhorar o serviço)</li>
                </ul>
                <h3 className="text-gray-900 font-semibold mt-4">Uso dos Dados</h3>
                <p>Os seus dados são utilizados exclusivamente para:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-500 ml-4">
                  <li>Prestar e melhorar o serviço PetDiet Pro</li>
                  <li>Processar pagamentos</li>
                  <li>Enviar comunicações relacionadas com o serviço (com o seu consentimento)</li>
                </ul>
                <h3 className="text-gray-900 font-semibold mt-4">Os Seus Direitos (RGPD)</h3>
                <p>Ao abrigo do RGPD, tem direito a:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-500 ml-4">
                  <li>Aceder aos seus dados pessoais</li>
                  <li>Corrigir dados incorretos</li>
                  <li>Solicitar a eliminação dos seus dados</li>
                  <li>Portabilidade dos dados</li>
                  <li>Opor-se ao tratamento dos seus dados</li>
                </ul>
                <p>
                  Para exercer estes direitos, contacte-nos em:{" "}
                  <a href="mailto:privacidade@petdietpro.com" className="text-emerald-600 hover:underline">
                    privacidade@petdietpro.com
                  </a>
                </p>
              </div>
            </section>

            {/* Termos de Uso */}
            <section id="termos" className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
                  <FileText className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-gray-900 font-bold text-xl">Termos de Uso</h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Ao utilizar o PetDiet Pro, concorda com os seguintes termos:
                </p>
                <ol className="list-decimal list-inside space-y-3 text-gray-500 ml-4">
                  <li>Utilizará o serviço apenas para fins legais e de acordo com estes termos</li>
                  <li>Não partilhará a sua conta com terceiros</li>
                  <li>Fornecerá informações verdadeiras sobre si e o seu animal</li>
                  <li>Não tentará aceder a áreas restritas ou dados de outros utilizadores</li>
                  <li>Aceita que o serviço pode ser atualizado ou descontinuado com aviso prévio</li>
                  <li>Compreende que as informações são orientativas e não substituem aconselhamento veterinário</li>
                </ol>
                <p className="mt-4">
                  Reservamo-nos o direito de suspender ou terminar contas que violem estes termos.
                </p>
              </div>
            </section>

            {/* Pagamentos */}
            <section id="pagamentos" className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-cyan-50 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-cyan-600" />
                </div>
                <h2 className="text-gray-900 font-bold text-xl">Política de Pagamentos e Reembolsos</h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <h3 className="text-gray-900 font-semibold">Subscrições</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-500 ml-4">
                  <li>Plano Semanal: €10/semana, renovação automática</li>
                  <li>Plano Mensal: €100/mês, renovação automática</li>
                  <li>Plano Anual: €800/ano, renovação automática</li>
                </ul>
                <h3 className="text-gray-900 font-semibold mt-4">Cancelamento</h3>
                <p>
                  Pode cancelar a sua subscrição a qualquer momento através das definições da conta.
                  O acesso mantém-se ativo até ao fim do período pago. Não são emitidos reembolsos
                  parciais por períodos não utilizados, exceto nos casos previstos na lei.
                </p>
                <h3 className="text-gray-900 font-semibold mt-4">Garantia de Reembolso</h3>
                <p>
                  Oferecemos uma garantia de reembolso de 7 dias para novos subscritores. Se não
                  estiver satisfeito, contacte-nos dentro de 7 dias após a primeira subscrição para
                  obter um reembolso completo.
                </p>
                <h3 className="text-gray-900 font-semibold mt-4">Processamento de Pagamentos</h3>
                <p>
                  Os pagamentos são processados de forma segura através da Stripe e PayPal.
                  Não armazenamos dados de cartão de crédito nos nossos servidores.
                </p>
              </div>
            </section>

            {/* Contact */}
            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 text-center">
              <h3 className="text-gray-900 font-semibold mb-2">Dúvidas Legais?</h3>
              <p className="text-gray-500 text-sm mb-4">
                Para questões legais, privacidade ou reclamações, contacte a nossa equipa.
              </p>
              <a
                href="mailto:legal@petdietpro.com"
                className="btn-primary text-white text-sm font-semibold px-5 py-2.5 rounded-lg inline-block"
              >
                legal@petdietpro.com
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
