"use client";

import { useState } from "react";
import Link from "next/link";
import { PawPrint, Eye, EyeOff, Mail, Lock } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-3xl pointer-events-none opacity-50" />

      <div className="w-full max-w-md relative">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center">
              <PawPrint className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">
              Pet<span className="text-emerald-500">Diet</span> Pro
            </span>
          </Link>
        </div>

        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h1 className="text-gray-900 font-bold text-2xl mb-2 text-center">
            {isRegister ? "Criar Conta" : "Bem-vindo de volta"}
          </h1>
          <p className="text-gray-500 text-sm text-center mb-8">
            {isRegister
              ? "Crie a sua conta e comece a cuidar do seu pet"
              : "Entre na sua conta para continuar"}
          </p>

          <form className="space-y-4">
            {isRegister && (
              <div>
                <label className="text-gray-700 text-sm font-medium block mb-1.5">
                  Nome Completo
                </label>
                <input
                  type="text"
                  placeholder="O seu nome"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
            )}

            <div>
              <label className="text-gray-700 text-sm font-medium block mb-1.5">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  placeholder="o.seu@email.com"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-gray-700 text-sm font-medium block mb-1.5">
                Palavra-passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-xl pl-10 pr-10 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {!isRegister && (
              <div className="text-right">
                <a href="#" className="text-emerald-600 hover:text-emerald-700 text-sm">
                  Esqueceu a palavra-passe?
                </a>
              </div>
            )}

            {isRegister && (
              <div className="flex items-start gap-2">
                <input type="checkbox" id="terms" className="mt-1" />
                <label htmlFor="terms" className="text-gray-500 text-xs">
                  Aceito os{" "}
                  <Link href="/legal#termos" className="text-emerald-600 hover:underline">
                    Termos de Uso
                  </Link>{" "}
                  e a{" "}
                  <Link href="/legal#privacidade" className="text-emerald-600 hover:underline">
                    Política de Privacidade
                  </Link>
                </label>
              </div>
            )}

            <button
              type="submit"
              className="w-full btn-primary text-white font-semibold py-3 rounded-xl text-sm mt-2"
            >
              {isRegister ? "Criar Conta" : "Entrar"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-gray-400 text-xs">ou continue com</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 py-2.5 rounded-xl text-sm font-medium transition-colors border border-gray-200">
              <span>🔵</span>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 py-2.5 rounded-xl text-sm font-medium transition-colors border border-gray-200">
              <span>🍎</span>
              Apple
            </button>
          </div>

          {/* Toggle */}
          <p className="text-center text-gray-500 text-sm mt-6">
            {isRegister ? "Já tem conta?" : "Não tem conta?"}{" "}
            <button
              onClick={() => setIsRegister(!isRegister)}
              className="text-emerald-600 hover:text-emerald-700 font-medium"
            >
              {isRegister ? "Entrar" : "Criar conta grátis"}
            </button>
          </p>
        </div>

        {/* Back to home */}
        <div className="text-center mt-6">
          <Link href="/" className="text-gray-400 hover:text-gray-600 text-sm transition-colors">
            ← Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}
