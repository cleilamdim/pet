"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CheckCircle, Shield, Zap, Star, CreditCard, Loader2 } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";

// Initialize Stripe (use your publishable key)
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "pk_test_placeholder"
);

// Currency conversion rates (base: EUR)
const currencies: Record<string, { symbol: string; rate: number; name: string }> = {
  EUR: { symbol: "€", rate: 1, name: "Euro" },
  USD: { symbol: "$", rate: 1.08, name: "US Dollar" },
  GBP: { symbol: "£", rate: 0.86, name: "British Pound" },
  BRL: { symbol: "R$", rate: 5.5, name: "Real Brasileiro" },
  AOA: { symbol: "Kz", rate: 900, name: "Kwanza Angolano" },
  MZN: { symbol: "MT", rate: 69, name: "Metical Moçambicano" },
  CVE: { symbol: "$", rate: 110, name: "Escudo Cabo-verdiano" },
  CAD: { symbol: "CA$", rate: 1.47, name: "Canadian Dollar" },
  AUD: { symbol: "A$", rate: 1.65, name: "Australian Dollar" },
  CHF: { symbol: "CHF", rate: 0.96, name: "Swiss Franc" },
  JPY: { symbol: "¥", rate: 162, name: "Japanese Yen" },
  CNY: { symbol: "¥", rate: 7.8, name: "Chinese Yuan" },
  INR: { symbol: "₹", rate: 90, name: "Indian Rupee" },
  MXN: { symbol: "$", rate: 18.5, name: "Mexican Peso" },
  ZAR: { symbol: "R", rate: 20, name: "South African Rand" },
};

// Country to currency mapping
const countryCurrency: Record<string, string> = {
  PT: "EUR", ES: "EUR", FR: "EUR", DE: "EUR", IT: "EUR", NL: "EUR",
  BE: "EUR", AT: "EUR", FI: "EUR", IE: "EUR", GR: "EUR", LU: "EUR",
  US: "USD", CA: "CAD", AU: "AUD", GB: "GBP", CH: "CHF",
  BR: "BRL", AO: "AOA", MZ: "MZN", CV: "CVE",
  JP: "JPY", CN: "CNY", IN: "INR", MX: "MXN", ZA: "ZAR",
};

const plans = [
  {
    id: "weekly",
    name: "Semanal",
    basePrice: 10,
    period: "semana",
    periodShort: "/sem",
    description: "Perfeito para experimentar a plataforma",
    popular: false,
    features: [
      "1 perfil de pet",
      "Cálculo calórico básico",
      "Monitorização de nutrientes",
      "Base de dados de alimentos",
      "Suporte por email",
    ],
  },
  {
    id: "monthly",
    name: "Mensal",
    basePrice: 100,
    period: "mês",
    periodShort: "/mês",
    description: "A escolha mais popular para tutores dedicados",
    popular: true,
    features: [
      "3 perfis de pets",
      "Cálculo calórico avançado",
      "Monitorização completa de nutrientes",
      "Base de dados completa de alimentos",
      "Guia de suplementação",
      "Relatórios em PDF",
      "Suporte prioritário",
      "Acesso ao blog premium",
    ],
  },
  {
    id: "yearly",
    name: "Anual",
    basePrice: 800,
    period: "ano",
    periodShort: "/ano",
    description: "Melhor valor — poupe 2 meses!",
    popular: false,
    savings: "Poupe €400",
    features: [
      "Pets ilimitados",
      "Todas as funcionalidades",
      "Consulta veterinária mensal",
      "Relatórios avançados",
      "Exportação de dados",
      "Suporte 24/7",
      "Acesso antecipado a novas funcionalidades",
      "Desconto em produtos parceiros",
    ],
  },
];

function formatPrice(basePrice: number, currency: string): string {
  const curr = currencies[currency] || currencies.EUR;
  const converted = basePrice * curr.rate;

  if (currency === "JPY" || currency === "CNY") {
    return `${curr.symbol}${Math.round(converted).toLocaleString()}`;
  }
  if (converted >= 1000) {
    return `${curr.symbol}${Math.round(converted).toLocaleString()}`;
  }
  return `${curr.symbol}${converted.toFixed(0)}`;
}

export default function PricingPage() {
  const [currency, setCurrency] = useState("EUR");
  const [loading, setLoading] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<"stripe" | "paypal">("stripe");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    // Detect user's country via IP geolocation
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        const countryCode = data.country_code;
        const detectedCurrency = countryCurrency[countryCode] || "EUR";
        setCurrency(detectedCurrency);
      })
      .catch(() => {
        // Fallback to EUR
        setCurrency("EUR");
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSubscribe = async (planId: string) => {
    if (paymentMethod === "paypal") {
      alert(
        `PayPal em breve! Por enquanto, use o Stripe para pagamento seguro.`
      );
      return;
    }

    setIsProcessing(true);
    setSelectedPlan(planId);

    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          planId,
          currency: currency.toLowerCase(),
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else if (data.error) {
        alert(`Erro: ${data.error}`);
      } else {
        alert("Erro ao processar pagamento. Tente novamente.");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Erro de conexão. Verifique a sua internet e tente novamente.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Planos e <span className="gradient-text">Preços</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-6">
              Escolha o plano ideal para cuidar do seu pet. Cancele quando quiser, sem compromisso.
            </p>

            {/* Currency Selector */}
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <span className="text-gray-500 text-sm">Moeda:</span>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-white border border-gray-300 text-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500"
              >
                {Object.entries(currencies).map(([code, info]) => (
                  <option key={code} value={code}>
                    {code} – {info.name}
                  </option>
                ))}
              </select>
              {loading && (
                <span className="text-gray-400 text-xs">Detectando moeda local...</span>
              )}
              {!loading && (
                <span className="text-emerald-600 text-xs flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  Moeda detectada automaticamente
                </span>
              )}
            </div>
          </div>

          {/* Payment Method Toggle */}
          <div className="flex justify-center mb-10">
            <div className="bg-gray-100 border border-gray-200 rounded-xl p-1 flex gap-1">
              <button
                onClick={() => setPaymentMethod("stripe")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  paymentMethod === "stripe"
                    ? "bg-emerald-500 text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <CreditCard className="w-4 h-4" />
                Stripe
              </button>
              <button
                onClick={() => setPaymentMethod("paypal")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  paymentMethod === "paypal"
                    ? "bg-blue-500 text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <span className="font-bold text-xs">PP</span>
                PayPal
              </button>
            </div>
          </div>

          {/* Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl border p-8 flex flex-col ${
                  plan.popular
                    ? "bg-gradient-to-b from-emerald-50 to-white border-emerald-300 pulse-glow"
                    : "bg-white border-gray-200 shadow-sm"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3 fill-white" />
                      MAIS POPULAR
                    </div>
                  </div>
                )}

                {plan.savings && (
                  <div className="absolute -top-4 right-4">
                    <div className="bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      {plan.savings}
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-gray-900 font-bold text-xl mb-1">{plan.name}</h3>
                  <p className="text-gray-500 text-sm">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold text-gray-900">
                      {formatPrice(plan.basePrice, currency)}
                    </span>
                    <span className="text-gray-400 text-sm mb-1">{plan.periodShort}</span>
                  </div>
                  {currency !== "EUR" && (
                    <div className="text-gray-400 text-xs mt-1">
                      ≈ €{plan.basePrice} / {plan.period}
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleSubscribe(plan.id)}
                  disabled={isProcessing}
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                    plan.popular
                      ? "btn-primary text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200"
                  } ${isProcessing ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {isProcessing && selectedPlan === plan.id ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      A processar...
                    </span>
                  ) : paymentMethod === "stripe" ? (
                    "💳 Pagar com Stripe"
                  ) : (
                    "🔵 Pagar com PayPal"
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Payment Security */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-emerald-500" />
              <h3 className="text-gray-900 font-semibold text-lg">Pagamento 100% Seguro</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "🔒",
                  title: "Encriptação SSL",
                  desc: "Todos os dados são encriptados com SSL 256-bit",
                },
                {
                  icon: "💳",
                  title: "Stripe",
                  desc: "Processamento seguro via Stripe – padrão PCI DSS",
                },
                {
                  icon: "🔵",
                  title: "PayPal",
                  desc: "Pague com a sua conta PayPal de forma segura",
                },
                {
                  icon: "↩️",
                  title: "Reembolso",
                  desc: "Garantia de reembolso em 7 dias sem perguntas",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="text-gray-900 font-medium text-sm">{item.title}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-gray-900 font-bold text-2xl text-center mb-8">
              Perguntas Frequentes
            </h3>
            <div className="space-y-4">
              {[
                {
                  q: "Posso cancelar a qualquer momento?",
                  a: "Sim! Pode cancelar a sua subscrição a qualquer momento sem penalizações. O acesso mantém-se até ao fim do período pago.",
                },
                {
                  q: "Como funciona a detecção de moeda?",
                  a: "Detectamos automaticamente a sua localização e mostramos os preços na moeda do seu país. Pode sempre alterar manualmente.",
                },
                {
                  q: "Os preços incluem IVA?",
                  a: "Os preços apresentados não incluem IVA. O IVA aplicável será calculado no checkout conforme a sua localização.",
                },
                {
                  q: "Posso mudar de plano?",
                  a: "Sim, pode fazer upgrade ou downgrade do seu plano a qualquer momento. A diferença será calculada proporcionalmente.",
                },
                {
                  q: "Os dados do meu pet são seguros?",
                  a: "Absolutamente. Todos os dados são encriptados e nunca partilhados com terceiros. Consulte a nossa política de privacidade.",
                },
              ].map((faq) => (
                <div key={faq.q} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <h4 className="text-gray-900 font-medium mb-2">{faq.q}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
