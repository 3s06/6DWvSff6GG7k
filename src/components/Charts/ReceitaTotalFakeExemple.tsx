"use client"

import { useState } from "react"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { HiDotsVertical } from "react-icons/hi";
import { TrendingUp } from "lucide-react"

import { ChartContainer } from "@/components/ui/chart"

// Gerar dados simulados para o gráfico
const generateData = () => {
  const data = []
  const hoursInDay = 24
  const pointsPerHour = 2 // 30 minutos de intervalo para reduzir a densidade de pontos
  const totalPoints = hoursInDay * pointsPerHour

  for (let i = 0; i < totalPoints; i++) {
    const hour = Math.floor(i / pointsPerHour)
    const minute = (i % pointsPerHour) * 30
    const timeString = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`

    // Criar um padrão de valores que se assemelha ao gráfico da imagem
    let value = 30 + Math.sin(i / 5) * 20 + Math.random() * 10

    // Adicionar alguns picos específicos
    if (i === 19) value = 70 // Pico por volta das 09:30

    data.push({
      time: timeString,
      value: Math.round(value),
      fullTime: `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`,
      formattedTime: hour % 12 === 0 ? (hour === 0 ? "00:00" : "12:00") : hour === 23 && minute === 30 ? "23:59" : "",
    })
  }

  return data
}

const data = generateData()

// Componente de tooltip personalizado
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const value = payload[0].value
    return (
      <div className="rounded-md bg-[#111827] p-2 text-white shadow-lg text-xs">
        <p className="mb-0.5 font-medium">Hoje, {label}</p>
        <p className="font-bold">
          R$ {(value * 1000).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} (+56)
        </p>
      </div>
    )
  }
  return null
}

// Componente de linha de referência vertical
const CustomizedDot = (props: any) => {
  const { cx, cy, index } = props

  // Mostrar apenas para o ponto específico (09:30)
  if (index === 19) {
    return (
      <g>
        <line x1={cx} y1={0} x2={cx} y2={500} stroke="#6366f1" strokeWidth={1} />
        <circle cx={cx} cy={cy} r={3} fill="#6366f1" />
      </g>
    )
  }
  return null
}

export default function ReceitaTotalFake() {
  const [activeIndex, setActiveIndex] = useState(19) // Índice para 09:30

  const chartConfig = {
    receita: {
      label: "Receita",
      color: "hsl(240, 85%, 60%)",
    },
  }

  return (
    <div className="rounded-xl bg-white w-full max-w-[350px] h-[344px] border border-blue-400/50 p-6 flex overflow-hidden flex-col items-start justify-start">
      <div className="flex items-center justify-between w-full mb-2">
        <span className="text-black text-xl tracking-tight font-medium">Receita Total</span>
        <HiDotsVertical size={22} className="text-black mr-2.5" />
      </div>

      {/* Valor e crescimento */}
      <div className="flex items-end justify-between w-full mb-4">
        <h2 className="text-2xl font-bold">R$ 37.045,25</h2>
        <div className="flex items-center text-xs font-medium text-blue-600">
          <TrendingUp className="mr-0.5 h-3 w-3" />
          2,0%
        </div>
      </div>

      {/* ChartContainer ajustado para o espaço disponível */}
      <div className="w-full flex-grow" style={{ height: "calc(100% - 80px)" }}>
        <ChartContainer config={chartConfig} className="h-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 5, right: 0, left: -20, bottom: 0 }}
              onMouseMove={(e) => {
                if (e.activeTooltipIndex !== undefined) {
                  setActiveIndex(e.activeTooltipIndex)
                }
              }}
            >
              <defs>
                <linearGradient id="colorReceita" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-receita)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="var(--color-receita)" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="#f5f5f5" strokeDasharray="3 3" />
              <XAxis
                dataKey="formattedTime"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10 }}
                padding={{ left: 0, right: 0 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10 }}
                domain={[0, 100]}
                ticks={[0, 25, 50, 75, 100]}
              />
              <Tooltip content={<CustomTooltip />} cursor={false} wrapperStyle={{ outline: "none", zIndex: 100 }} />
              <Area
                type="monotone"
                dataKey="value"
                stroke="var(--color-receita)"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorReceita)"
                activeDot={<CustomizedDot />}
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  )
}
