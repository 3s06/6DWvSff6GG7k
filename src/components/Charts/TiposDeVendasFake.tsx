"use client"

import { useState } from "react"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { HiDotsVertical } from "react-icons/hi";
import { ChartContainer } from "@/components/ui/chart"
import { cn } from "@/lib/utils"

// Dados simulados para o gráfico com métodos de pagamento
const data = [
  { time: "10 min atrás", pix: 300, cartao: 150, boleto: 250 },
  { time: "9 min atrás", pix: 200, cartao: 180, boleto: 120 },
  { time: "8 min atrás", pix: 250, cartao: 200, boleto: 30 },
  { time: "7 min atrás", pix: 180, cartao: 150, boleto: 70 },
  { time: "6 min atrás", pix: 200, cartao: 258, boleto: 260 },
  { time: "5 min atrás", pix: 220, cartao: 300, boleto: 280 },
  { time: "4 min atrás", pix: 180, cartao: 250, boleto: 100 },
  { time: "3 min atrás", pix: 250, cartao: 220, boleto: 180 },
  { time: "2 min atrás", pix: 150, cartao: 120, boleto: 50 },
  { time: "Agora", pix: 200, cartao: 150, boleto: 100 },
]

// Configuração personalizada do tooltip
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg bg-[#1a1b26] p-2 text-white shadow-lg text-xs">
        <p className="mb-1 text-xs font-medium">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={`item-${index}`} className="flex items-center gap-1.5 py-0.5">
            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-xs font-medium">{entry.value}</span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

// Componente de métrica
interface MetricProps {
  value: string
  label: string
  color: string
}

function Metric({ value, label, color }: MetricProps) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-lg font-bold">{value}</p>
      <div className={cn("mb-0.5 mt-1 h-1.5 w-8 rounded-full", color)} />
      <p className="text-center text-xs text-gray-600">{label}</p>
    </div>
  )
}

export default function TiposDeVendasFake() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const chartConfig = {
    pix: {
      label: "Pix",
      color: "hsl(220, 100%, 70%)",
    },
    cartao: {
      label: "Cartão",
      color: "hsl(280, 100%, 70%)",
    },
    boleto: {
      label: "Boleto",
      color: "hsl(140, 100%, 70%)",
    },
  }

  return (
    <div className="rounded-xl bg-white w-full max-w-[350px] h-[344px] border border-blue-400/50 p-6 flex overflow-hidden flex-col items-start justify-start">
      <div className="flex items-center justify-between w-full mb-2">
        <span className="text-black text-xl tracking-tight font-medium">Tipo de Vendas</span>
          <HiDotsVertical size={22} className="text-black mr-2.5" />
      </div>

      {/* Gráfico ajustado para o espaço disponível */}
      <div className="w-full" style={{ height: "calc(100% - 100px)" }}>
        <ChartContainer config={chartConfig} className="h-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 5, right: 0, left: -20, bottom: 0 }}
              onMouseMove={(e) => {
                if (e.activeTooltipIndex !== undefined) {
                  setActiveIndex(e.activeTooltipIndex)
                }
              }}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <XAxis
                dataKey="time"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10 }}
                tickFormatter={(value) => {
                  return value === "10 min atrás" || value === "Agora" ? value : ""
                }}
              />
              <YAxis hide domain={[0, 1000]} />
              <Tooltip content={<CustomTooltip />} cursor={false} wrapperStyle={{ outline: "none" }} />
              <Bar dataKey="pix" stackId="a" fill="var(--color-pix)" radius={[0, 0, 0, 0]} />
              <Bar dataKey="cartao" stackId="a" fill="var(--color-cartao)" radius={[0, 0, 0, 0]} />
              <Bar dataKey="boleto" stackId="a" fill="var(--color-boleto)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      {/* Métricas de pagamento */}
      <div className="mt-2 flex justify-between w-full px-1">
        <Metric  value="1,5K" label="Pix" color="bg-[hsl(220,100%,70%)]" />
        <Metric value="980" label="Cartão" color="bg-[hsl(280,100%,70%)]" />
        <Metric value="750" label="Boleto" color="bg-[hsl(140,100%,70%)]" />
      </div>
    </div>
  )
}
