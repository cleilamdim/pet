"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CheckCircle, Loader2, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const verifySession = async () => {
      if (!sessionId) {
        setError("Sessão de pagamento não encontrada");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/stripe/verify-session?session_id=${sessionId}`);
        const data = await response.json();

        if (data.error) {
          setError(data.error);
        }
      } catch (err) {
        console.error("Error verifying session:", err);
      } finally {
        setLoading(false);
      }
    };

    verifySession();
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {loading ? (
            <div className="py-16">
              <Loader2 className="w-16 h-16 text-emerald-500 animate-spin mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                A verificar pagamento...
              </h2>
              <p className="text-gray-500">
                Por favor aguarde enquanto confirmamos a sua subscrição.
              </p>
            </div>
          ) : error ? (
            <div className="py-16">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚠️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Algo aconteceu
              </h2>
              <p className="text-gray-500 mb-8">{error}</p>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Voltar aos planos
              </Link>
            </div>
          ) : (
            <div className="py-8">
              {/* Success Icon */}
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-emerald-500" />
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                🎉 Pagamento bem-sucedido!
              </h1>
              <p className="text-gray-500 text-lg mb-8">
                Obrigado pela sua subscrição! Agora pode aproveitar todas as
                funcionalidades do PetDiet Pro.
              </p>

              {/* What's Next */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-8 text-left">
                <h2 className="text-lg font-bold text-gray-900 mb-4">
                  O que acontece agora?
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      Recebeu um email de confirmação com os detalhes da sua subscrição
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      O acesso ao plano escolhido foi ativado imediatamente
                    </span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                  Ir para o Dashboard
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
                >
                  Ver Artigos
                </Link>
              </div>

              {/* Help */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-gray-500 text-sm">
                  Precisa de ajuda?{" "}
                  <a
                    href="mailto:support@petdietpro.com"
                    className="text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    Contacte-nos
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
