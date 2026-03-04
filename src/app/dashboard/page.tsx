"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  PawPrint,
  Plus,
  Calculator,
  Leaf,
  ShoppingBag,
  Pill,
  Download,
  BarChart3,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Droplets,
  Flame,
} from "lucide-react";

type Pet = {
  id: number;
  name: string;
  species: string;
  breed: string;
  age: number;
  weight: number;
  emoji: string;
  calories: { consumed: number; target: number };
  nutrients: { protein: number; fat: number; carbs: number; vitamins: number };
  water: number;
};

const mockPets: Pet[] = [
  {
    id: 1,
    name: "Max",
    species: "Cão",
    breed: "Golden Retriever",
    age: 3,
    weight: 28,
    emoji: "🐕",
    calories: { consumed: 420, target: 580 },
    nutrients: { protein: 87, fat: 65, carbs: 45, vitamins: 92 },
    water: 78,
  },
  {
    id: 2,
    name: "Luna",
    species: "Gato",
    breed: "Persa",
    age: 5,
    weight: 4.2,
    emoji: "🐈",
    calories: { consumed: 180, target: 220 },
    nutrients: { protein: 95, fat: 80, carbs: 30, vitamins: 70 },
    water: 55,
  },
];

const recentMeals = [
  { time: "08:00", food: "Ração Premium Adulto", amount: "150g", calories: 210, pet: "Max" },
  { time: "12:00", food: "Frango cozido", amount: "80g", calories: 120, pet: "Max" },
  { time: "09:00", food: "Ração Gato Adulto", amount: "60g", calories: 90, pet: "Luna" },
  { time: "18:00", food: "Atum em água", amount: "40g", calories: 45, pet: "Luna" },
];

const alerts = [
  { type: "warning", message: "Max está abaixo da ingestão calórica diária (72%)", pet: "Max" },
  { type: "info", message: "Luna precisa de mais água hoje (55% do objetivo)", pet: "Luna" },
  { type: "success", message: "Max atingiu o objetivo de proteínas hoje!", pet: "Max" },
];

export default function DashboardPage() {
  const [activePet, setActivePet] = useState<Pet>(mockPets[0]);
  const [activeTab, setActiveTab] = useState("overview");
  const [showAddPet, setShowAddPet] = useState(false);

  const caloriesPct = Math.round((activePet.calories.consumed / activePet.calories.target) * 100);

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <main className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-8 pt-6">
            <div>
              <h1 className="text-2xl font-bold text-white">Dashboard</h1>
              <p className="text-slate-400 text-sm mt-1">Bem-vindo de volta! Aqui está o resumo dos seus pets.</p>
            </div>
            <button
              onClick={() => setShowAddPet(true)}
              className="btn-primary text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Adicionar Pet
            </button>
          </div>

          {/* Pet Selector */}
          <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
            {mockPets.map((pet) => (
              <button
                key={pet.id}
                onClick={() => setActivePet(pet)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all flex-shrink-0 ${
                  activePet.id === pet.id
                    ? "bg-emerald-500/20 border-emerald-500 text-white"
                    : "bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500"
                }`}
              >
                <span className="text-2xl">{pet.emoji}</span>
                <div className="text-left">
                  <div className="font-medium text-sm">{pet.name}</div>
                  <div className="text-xs opacity-70">{pet.breed}</div>
                </div>
              </button>
            ))}
            <button
              onClick={() => setShowAddPet(true)}
              className="flex items-center gap-2 px-4 py-3 rounded-xl border border-dashed border-slate-600 text-slate-500 hover:border-emerald-500 hover:text-emerald-400 transition-all flex-shrink-0"
            >
              <Plus className="w-4 h-4" />
              <span className="text-sm">Novo Pet</span>
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 bg-slate-800 rounded-xl p-1 mb-8 overflow-x-auto">
            {[
              { id: "overview", label: "Visão Geral", icon: BarChart3 },
              { id: "calories", label: "Calorias", icon: Flame },
              { id: "nutrients", label: "Nutrientes", icon: Leaf },
              { id: "foods", label: "Alimentos", icon: ShoppingBag },
              { id: "supplements", label: "Suplementos", icon: Pill },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all flex-shrink-0 ${
                    activeTab === tab.id
                      ? "bg-emerald-500 text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Flame className="w-5 h-5 text-orange-400" />
                    <span className="text-slate-400 text-sm">Calorias</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{activePet.calories.consumed}</div>
                  <div className="text-slate-500 text-xs">de {activePet.calories.target} kcal</div>
                  <div className="mt-3 bg-slate-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${caloriesPct >= 90 ? "bg-emerald-500" : caloriesPct >= 60 ? "bg-yellow-500" : "bg-red-500"}`}
                      style={{ width: `${Math.min(caloriesPct, 100)}%` }}
                    />
                  </div>
                  <div className="text-xs text-slate-500 mt-1">{caloriesPct}% do objetivo</div>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Droplets className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-400 text-sm">Hidratação</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{activePet.water}%</div>
                  <div className="text-slate-500 text-xs">do objetivo diário</div>
                  <div className="mt-3 bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-cyan-500 h-2 rounded-full"
                      style={{ width: `${activePet.water}%` }}
                    />
                  </div>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                    <span className="text-slate-400 text-sm">Peso</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{activePet.weight} kg</div>
                  <div className="text-slate-500 text-xs">Peso atual</div>
                  <div className="text-emerald-400 text-xs mt-2">✓ Peso ideal</div>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <PawPrint className="w-5 h-5 text-purple-400" />
                    <span className="text-slate-400 text-sm">Saúde Geral</span>
                  </div>
                  <div className="text-2xl font-bold text-emerald-400">Boa</div>
                  <div className="text-slate-500 text-xs">Baseado nos dados</div>
                  <div className="text-slate-400 text-xs mt-2">Última atualização: hoje</div>
                </div>
              </div>

              {/* Nutrients Overview */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-emerald-400" />
                  Nutrientes de Hoje – {activePet.name}
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "Proteínas", pct: activePet.nutrients.protein, color: "bg-blue-500", target: "32g", current: "28g" },
                    { label: "Gorduras", pct: activePet.nutrients.fat, color: "bg-yellow-500", target: "18g", current: "12g" },
                    { label: "Carboidratos", pct: activePet.nutrients.carbs, color: "bg-purple-500", target: "40g", current: "18g" },
                    { label: "Vitaminas", pct: activePet.nutrients.vitamins, color: "bg-emerald-500", target: "100%", current: "92%" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-slate-300 text-sm">{item.label}</span>
                        <span className="text-slate-400 text-xs">{item.current} / {item.target}</span>
                      </div>
                      <div className="bg-slate-700 rounded-full h-3">
                        <div
                          className={`${item.color} h-3 rounded-full transition-all`}
                          style={{ width: `${item.pct}%` }}
                        />
                      </div>
                      <div className="text-right text-xs text-slate-500 mt-0.5">{item.pct}%</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Alerts */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4">Alertas e Notificações</h3>
                <div className="space-y-3">
                  {alerts.map((alert, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-3 p-3 rounded-lg ${
                        alert.type === "warning"
                          ? "bg-amber-500/10 border border-amber-500/20"
                          : alert.type === "success"
                          ? "bg-emerald-500/10 border border-emerald-500/20"
                          : "bg-blue-500/10 border border-blue-500/20"
                      }`}
                    >
                      {alert.type === "warning" ? (
                        <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      ) : alert.type === "success" ? (
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      ) : (
                        <Droplets className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      )}
                      <span className="text-slate-300 text-sm">{alert.message}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Meals */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold">Refeições Recentes</h3>
                  <button className="text-emerald-400 text-sm hover:text-emerald-300">+ Adicionar</button>
                </div>
                <div className="space-y-3">
                  {recentMeals.filter(m => m.pet === activePet.name).map((meal, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-slate-700 last:border-0">
                      <div className="flex items-center gap-3">
                        <span className="text-slate-500 text-xs w-12">{meal.time}</span>
                        <div>
                          <div className="text-slate-200 text-sm">{meal.food}</div>
                          <div className="text-slate-500 text-xs">{meal.amount}</div>
                        </div>
                      </div>
                      <div className="text-orange-400 text-sm font-medium">{meal.calories} kcal</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download Report */}
              <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/30 rounded-xl p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold mb-1">Exportar Relatório</h3>
                  <p className="text-slate-400 text-sm">Descarregue um relatório completo em PDF com todos os dados nutricionais.</p>
                </div>
                <button className="btn-primary text-white text-sm font-semibold px-5 py-2.5 rounded-lg flex items-center gap-2 flex-shrink-0">
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
              </div>
            </div>
          )}

          {/* Calories Tab */}
          {activeTab === "calories" && (
            <div className="space-y-6">
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-emerald-400" />
                  Calculadora Calórica – {activePet.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-slate-300 font-medium mb-4">Dados do Pet</h4>
                    <div className="space-y-3">
                      {[
                        { label: "Espécie", value: activePet.species },
                        { label: "Raça", value: activePet.breed },
                        { label: "Idade", value: `${activePet.age} anos` },
                        { label: "Peso", value: `${activePet.weight} kg` },
                        { label: "Nível de Atividade", value: "Moderado" },
                        { label: "Condição", value: "Adulto saudável" },
                      ].map((item) => (
                        <div key={item.label} className="flex justify-between py-2 border-b border-slate-700">
                          <span className="text-slate-400 text-sm">{item.label}</span>
                          <span className="text-white text-sm font-medium">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-slate-300 font-medium mb-4">Necessidades Calculadas</h4>
                    <div className="space-y-4">
                      <div className="bg-slate-900 rounded-xl p-4 text-center">
                        <div className="text-4xl font-bold text-emerald-400">{activePet.calories.target}</div>
                        <div className="text-slate-400 text-sm mt-1">kcal / dia (RER × fator)</div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { label: "RER Base", value: "420 kcal" },
                          { label: "Fator", value: "1.6×" },
                          { label: "Proteína", value: "32g/dia" },
                          { label: "Gordura", value: "18g/dia" },
                        ].map((item) => (
                          <div key={item.label} className="bg-slate-900 rounded-lg p-3 text-center">
                            <div className="text-white font-semibold">{item.value}</div>
                            <div className="text-slate-500 text-xs">{item.label}</div>
                          </div>
                        ))}
                      </div>
                      <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3">
                        <p className="text-amber-200 text-xs">
                          ⚠️ Estes valores são estimativas. Consulte um veterinário para um plano personalizado.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Nutrients Tab */}
          {activeTab === "nutrients" && (
            <div className="space-y-6">
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-emerald-400" />
                  Nutrientes Críticos – {activePet.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      name: "Proteínas",
                      current: "28g",
                      target: "32g",
                      pct: 87,
                      color: "bg-blue-500",
                      status: "Bom",
                      statusColor: "text-blue-400",
                      desc: "Essencial para músculos e sistema imunitário",
                    },
                    {
                      name: "Gorduras",
                      current: "12g",
                      target: "18g",
                      pct: 65,
                      color: "bg-yellow-500",
                      status: "Atenção",
                      statusColor: "text-yellow-400",
                      desc: "Necessária para energia e absorção de vitaminas",
                    },
                    {
                      name: "Cálcio",
                      current: "0.8g",
                      target: "1.0g",
                      pct: 80,
                      color: "bg-emerald-500",
                      status: "Bom",
                      statusColor: "text-emerald-400",
                      desc: "Fundamental para ossos e dentes saudáveis",
                    },
                    {
                      name: "Vitamina D",
                      current: "180 UI",
                      target: "200 UI",
                      pct: 90,
                      color: "bg-orange-500",
                      status: "Ótimo",
                      statusColor: "text-orange-400",
                      desc: "Absorção de cálcio e saúde óssea",
                    },
                    {
                      name: "Ômega-3",
                      current: "0.3g",
                      target: "0.5g",
                      pct: 60,
                      color: "bg-cyan-500",
                      status: "Baixo",
                      statusColor: "text-red-400",
                      desc: "Anti-inflamatório e saúde da pele e pelo",
                    },
                    {
                      name: "Fibra",
                      current: "3g",
                      target: "4g",
                      pct: 75,
                      color: "bg-purple-500",
                      status: "Bom",
                      statusColor: "text-purple-400",
                      desc: "Saúde digestiva e controlo de peso",
                    },
                  ].map((nutrient) => (
                    <div key={nutrient.name} className="bg-slate-900 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">{nutrient.name}</span>
                        <span className={`text-xs font-medium ${nutrient.statusColor}`}>{nutrient.status}</span>
                      </div>
                      <div className="bg-slate-700 rounded-full h-2 mb-2">
                        <div
                          className={`${nutrient.color} h-2 rounded-full`}
                          style={{ width: `${nutrient.pct}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-slate-500 mb-2">
                        <span>{nutrient.current}</span>
                        <span>Meta: {nutrient.target}</span>
                      </div>
                      <p className="text-slate-500 text-xs">{nutrient.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Foods Tab */}
          {activeTab === "foods" && (
            <div className="space-y-6">
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-emerald-400" />
                  Fontes de Alimentos – {activePet.species}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-emerald-400 font-medium mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Alimentos Seguros
                    </h4>
                    <div className="space-y-2">
                      {[
                        { food: "Frango cozido", benefit: "Alta proteína, baixa gordura" },
                        { food: "Arroz branco", benefit: "Fácil digestão, energia" },
                        { food: "Cenoura", benefit: "Vitamina A, fibra" },
                        { food: "Abóbora", benefit: "Fibra, digestão" },
                        { food: "Ovo cozido", benefit: "Proteína completa" },
                        { food: "Salmão cozido", benefit: "Ômega-3, proteína" },
                      ].map((item) => (
                        <div key={item.food} className="flex items-center justify-between bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-3 py-2">
                          <span className="text-slate-200 text-sm">✅ {item.food}</span>
                          <span className="text-slate-500 text-xs">{item.benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-red-400 font-medium mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      Alimentos Perigosos
                    </h4>
                    <div className="space-y-2">
                      {[
                        { food: "Chocolate", risk: "Tóxico – pode ser fatal" },
                        { food: "Uvas/Passas", risk: "Insuficiência renal" },
                        { food: "Cebola/Alho", risk: "Anemia hemolítica" },
                        { food: "Xilitol", risk: "Hipoglicemia grave" },
                        { food: "Abacate", risk: "Toxicidade digestiva" },
                        { food: "Álcool", risk: "Extremamente tóxico" },
                      ].map((item) => (
                        <div key={item.food} className="flex items-center justify-between bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                          <span className="text-slate-200 text-sm">❌ {item.food}</span>
                          <span className="text-red-400 text-xs">{item.risk}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Supplements Tab */}
          {activeTab === "supplements" && (
            <div className="space-y-6">
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                  <Pill className="w-5 h-5 text-emerald-400" />
                  Guia de Suplementação – {activePet.name}
                </h3>
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 mb-6">
                  <p className="text-amber-200 text-sm">
                    ⚠️ <strong>Importante:</strong> Sempre consulte um veterinário antes de iniciar qualquer suplementação. Doses incorretas podem ser prejudiciais.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      name: "Ômega-3 (EPA/DHA)",
                      dose: "250-500mg/dia",
                      benefit: "Saúde da pele, pelo e articulações",
                      priority: "Recomendado",
                      color: "text-emerald-400",
                      bg: "bg-emerald-500/10 border-emerald-500/20",
                    },
                    {
                      name: "Glucosamina",
                      dose: "500mg/dia",
                      benefit: "Saúde articular, especialmente em raças grandes",
                      priority: "Opcional",
                      color: "text-blue-400",
                      bg: "bg-blue-500/10 border-blue-500/20",
                    },
                    {
                      name: "Probióticos",
                      dose: "1 cápsula/dia",
                      benefit: "Saúde digestiva e imunidade",
                      priority: "Recomendado",
                      color: "text-emerald-400",
                      bg: "bg-emerald-500/10 border-emerald-500/20",
                    },
                    {
                      name: "Vitamina E",
                      dose: "100-400 UI/dia",
                      benefit: "Antioxidante, saúde da pele",
                      priority: "Opcional",
                      color: "text-blue-400",
                      bg: "bg-blue-500/10 border-blue-500/20",
                    },
                    {
                      name: "Zinco",
                      dose: "Conforme veterinário",
                      benefit: "Sistema imunitário e cicatrização",
                      priority: "Sob prescrição",
                      color: "text-amber-400",
                      bg: "bg-amber-500/10 border-amber-500/20",
                    },
                    {
                      name: "Vitamina B12",
                      dose: "Conforme veterinário",
                      benefit: "Sistema nervoso e produção de glóbulos vermelhos",
                      priority: "Sob prescrição",
                      color: "text-amber-400",
                      bg: "bg-amber-500/10 border-amber-500/20",
                    },
                  ].map((supp) => (
                    <div key={supp.name} className={`border rounded-xl p-4 ${supp.bg}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">{supp.name}</span>
                        <span className={`text-xs font-medium ${supp.color}`}>{supp.priority}</span>
                      </div>
                      <div className="text-slate-400 text-xs mb-1">Dose: {supp.dose}</div>
                      <div className="text-slate-500 text-xs">{supp.benefit}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Add Pet Modal */}
      {showAddPet && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 w-full max-w-md">
            <h3 className="text-white font-bold text-xl mb-6">Adicionar Novo Pet</h3>
            <div className="space-y-4">
              {[
                { label: "Nome do Pet", placeholder: "Ex: Rex", type: "text" },
                { label: "Espécie", placeholder: "Cão / Gato / Outro", type: "text" },
                { label: "Raça", placeholder: "Ex: Labrador", type: "text" },
                { label: "Idade (anos)", placeholder: "Ex: 3", type: "number" },
                { label: "Peso (kg)", placeholder: "Ex: 15.5", type: "number" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="text-slate-300 text-sm font-medium block mb-1">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full bg-slate-900 border border-slate-600 text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowAddPet(false)}
                className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={() => setShowAddPet(false)}
                className="flex-1 btn-primary text-white py-2.5 rounded-lg text-sm font-medium"
              >
                Adicionar Pet
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
