"use client"

import { useState } from "react"
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { TrendingUp } from "lucide-react"
import { ChartContainer } from "@/components/ui/chart"

const generateData = () => {
  const data = []
  const hoursInDay = 24
  const pointsPerHour = 2
  const totalPoints = hoursInDay * pointsPerHour

  for (let i = 0; i < totalPoints; i++) {
    const hour = Math.floor(i / pointsPerHour)
    const minute = (i % pointsPerHour) * 30
    const timeString = `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`
    let value = 30 + Math.sin(i / 5) * 20 + Math.random() * 10
    if (i === 19) value = 70

    data.push({
      time: timeString,
      value: Math.round(value),
      fullTime: timeString,
      formattedTime:
        hour % 12 === 0
          ? hour === 0
            ? "00:00"
            : "12:00"
          : hour === 23 && minute === 30
          ? "23:59"
          : "",
    })
  }

  return data
}

const data = generateData()

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const value = payload[0].value
    return (
      <div className="rounded-md bg-[#111827] p-2 text-white shadow-lg text-xs">
        <p className="mb-0.5 font-medium">Hoje, {label}</p>
        <p className="font-bold">
          R${" "}
          {(value * 1000).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}{" "}
          (+56)
        </p>
      </div>
    )
  }
  return null
}

const CustomizedDot = (props: any) => {
  const { cx, cy, index } = props
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

export function TotalDeVendasChart() {
  const [activeIndex, setActiveIndex] = useState(19)

  const chartConfig = {
    receita: {
      label: "Receita",
      color: "hsl(240, 85%, 60%)",
    },
  }

  return (
    <div className="bg-white dark:bg-neutral-950 border border-black/10 dark:border-white/10 w-[550px] h-[510px] rounded-xl p-6 flex items-center justify-center flex-col overflow-hidden">
      <div className="flex flex-col items-start w-full mb-2 text-center">
        <span className="text-black dark:text-white text-xl tracking-tight font-medium">
          Receita Total
        </span>
      </div>
      <div className="flex items-start justify-between w-full mb-4 text-center">
        <h2 className="text-2xl font-bold">R$ 37.045,25</h2>
        <div className="flex items-center text-xs font-medium text-blue-600 mt-1">
          <TrendingUp className="mr-0.5 h-3 w-3" />
          2,0%
        </div>
      </div>

      <div className="w-full h-full flex items-center justify-center">
        <ChartContainer config={chartConfig} className="w-full h-full flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 5, right: -30, left: -30, bottom: 0 }}
              onMouseMove={(e) => {
                if (e.activeTooltipIndex !== undefined) {
                  setActiveIndex(e.activeTooltipIndex)
                }
              }}
            >
              <defs>
                <linearGradient id="colorReceita" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-receita)"
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-receita)"
                    stopOpacity={0.05}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid
                vertical={false}
                stroke="#f5f5f5"
                strokeDasharray="3 3"
              />
              <XAxis
                dataKey="formattedTime"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10 }}
                domain={[0, 100]}
                ticks={[0, 25, 50, 75, 100]}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={false}
                wrapperStyle={{ outline: "none", zIndex: 100 }}
              />
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
};