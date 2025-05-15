"use client"

import { MdArrowBack } from "react-icons/md"

// Ícones de medalha
const GoldMedal = () => (
  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-400 text-amber-800">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path
        fillRule="evenodd"
        d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.937 6.937 0 006.229 6.71c.15 1.074.206 2.166.166 3.266-.048 1.323-.046 2.653.096 3.944.028.212.187.37.401.37h.15c.33-.428.647-.813.947-1.058a11.59 11.59 0 01-2.4-2.718c-.396-.64-.795-1.28-1.2-1.92a.75.75 0 00-1.248.832c.398.591.783 1.23 1.207 1.87 1.453 2.115 2.575 3.67 3.583 4.543.196.168.43.301.671.301h.15c.241 0 .475-.133.671-.301 1.008-.873 2.13-2.428 3.582-4.543.425-.64.81-1.279 1.208-1.87a.75.75 0 00-1.248-.832c-.405.64-.804 1.28-1.2 1.92a11.591 11.591 0 01-2.4 2.718c.3.245.618.63.947 1.058h.15c.213 0 .373-.158.401-.37.142-1.291.144-2.621.096-3.944-.04-1.1.016-2.192.166-3.266a6.937 6.937 0 006.229-6.71.75.75 0 00-.584-.86c-1.012-.212-2.036-.394-3.071-.543v-.858a.75.75 0 00-.75-.75H5.916a.75.75 0 00-.75.75z"
        clipRule="evenodd"
      />
    </svg>
  </div>
)

const SilverMedal = () => (
  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-300 text-gray-600">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path
        fillRule="evenodd"
        d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.937 6.937 0 006.229 6.71c.15 1.074.206 2.166.166 3.266-.048 1.323-.046 2.653.096 3.944.028.212.187.37.401.37h.15c.33-.428.647-.813.947-1.058a11.59 11.59 0 01-2.4-2.718c-.396-.64-.795-1.28-1.2-1.92a.75.75 0 00-1.248.832c.398.591.783 1.23 1.207 1.87 1.453 2.115 2.575 3.67 3.583 4.543.196.168.43.301.671.301h.15c.241 0 .475-.133.671-.301 1.008-.873 2.13-2.428 3.582-4.543.425-.64.81-1.279 1.208-1.87a.75.75 0 00-1.248-.832c-.405.64-.804 1.28-1.2 1.92a11.591 11.591 0 01-2.4 2.718c.3.245.618.63.947 1.058h.15c.213 0 .373-.158.401-.37.142-1.291.144-2.621.096-3.944-.04-1.1.016-2.192.166-3.266a6.937 6.937 0 006.229-6.71.75.75 0 00-.584-.86c-1.012-.212-2.036-.394-3.071-.543v-.858a.75.75 0 00-.75-.75H5.916a.75.75 0 00-.75.75z"
        clipRule="evenodd"
      />
    </svg>
  </div>
)

const BronzeMedal = () => (
  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-600 text-amber-900">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path
        fillRule="evenodd"
        d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.937 6.937 0 006.229 6.71c.15 1.074.206 2.166.166 3.266-.048 1.323-.046 2.653.096 3.944.028.212.187.37.401.37h.15c.33-.428.647-.813.947-1.058a11.59 11.59 0 01-2.4-2.718c-.396-.64-.795-1.28-1.2-1.92a.75.75 0 00-1.248.832c.398.591.783 1.23 1.207 1.87 1.453 2.115 2.575 3.67 3.583 4.543.196.168.43.301.671.301h.15c.241 0 .475-.133.671-.301 1.008-.873 2.13-2.428 3.582-4.543.425-.64.81-1.279 1.208-1.87a.75.75 0 00-1.248-.832c-.405.64-.804 1.28-1.2 1.92a11.591 11.591 0 01-2.4 2.718c.3.245.618.63.947 1.058h.15c.213 0 .373-.158.401-.37.142-1.291.144-2.621.096-3.944-.04-1.1.016-2.192.166-3.266a6.937 6.937 0 006.229-6.71.75.75 0 00-.584-.86c-1.012-.212-2.036-.394-3.071-.543v-.858a.75.75 0 00-.75-.75H5.916a.75.75 0 00-.75.75z"
        clipRule="evenodd"
      />
    </svg>
  </div>
)

// Dados dos produtos
const produtos = [
  {
    ranking: 1,
    nome: "6x E-book Emagrecimento",
    valor: "R$ 8.499,19",
    vendas: 41,
  },
  {
    ranking: 2,
    nome: "6xMensalidade do Curso ",
    valor: "R$ 3.278,56",
    vendas: 36,
  },
  {
    ranking: 3,
    nome: "4x Curso do Ruyter",
    valor: "R$ 1.684,71",
    vendas: 28,
  },
  {
    ranking: 4,
    nome: "7x Infoprodutos",
    valor: "R$ 325,05",
    vendas: 17,
  },
  {
    ranking: 5,
    nome: "4x Pdfs",
    valor: "R$ 313,14",
    vendas: 15,
  },
  {
    ranking: 6,
    nome: "1 Pote de Fenoril",
    valor: "R$ 310,00",
    vendas: 12,
  },
]

// Componente de ranking
const RankingIndicator = ({ ranking }: { ranking: number }) => {
  if (ranking === 1) return <GoldMedal />
  if (ranking === 2) return <SilverMedal />
  if (ranking === 3) return <BronzeMedal />
  return <div className="flex items-center justify-center w-6 h-6 text-gray-500 font-medium">{ranking}</div>
}

export default function TopVenndas() {
  return (
    <div className="rounded-xl bg-white w-full max-w-[350px] h-[344px] border border-blue-400/50 p-6 flex overflow-hidden scrollbar-hide flex-col items-start justify-start">
      <div className="flex items-center justify-between w-full mb-4">
        <span className="text-black text-xl tracking-tight font-medium">Ranking de Produtos</span>
        <MdArrowBack size={22} className="text-black mr-2.5" />
      </div>

      {/* Cabeçalho da tabela */}
      <div className="w-full grid grid-cols-4 gap-2 text-sm text-gray-500 pb-2">
        <div>Ranking</div>
        <div>Produto</div>
        <div>Valor</div>
        <div>Vendas</div>
      </div>

      {/* Corpo da tabela */}
      <div className="w-full flex-grow overflow-y-auto scrollbar-hide">
        {produtos.map((produto, index) => (
          <div
            key={index}
            className={`w-full grid grid-cols-[30px_1fr_100px_30px] gap-2 py-3 text-sm ${
              index % 2 === 1 ? "bg-gray-50" : ""
            }`}
          >
            <div className="flex items-center justify-start">
              <RankingIndicator ranking={produto.ranking} />
            </div>
            <div className="font-medium text-gray-900">{produto.nome}</div>
            <div className="text-right text-gray-700">{produto.valor}</div>
            <div className="text-right text-gray-700">{produto.vendas}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
