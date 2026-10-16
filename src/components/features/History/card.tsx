import { Button } from '@/components/shared/Button'
import { Divider } from '@/components/shared/Divider'
import { formatCurrencyMask } from '@/utils/currency'

import { SquareArrowOutUpRight, Trash2, type LucideIcon } from 'lucide-react'

interface HistoryCardProps {
  goalName: string // Nome da meta
  goalAmount: string // Custo da meta
  goalDeadline: string // Data limite (ex: 24/02/2026)
  safeMonth: string // Economia mensal
  onDelete?: () => void
  onViewDetails?: () => void
  dataHistory: string // Data do histórico (ex: 24/02/2026)
  icon: LucideIcon
}

export const HistoryCard = ({
  icon: Icon,
  goalName,
  goalAmount,
  goalDeadline,
  safeMonth,
  onDelete,
  onViewDetails,
  dataHistory: dataHistory,
}: HistoryCardProps) => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)] sm:p-8">
      <div className="grid grid-cols-1 gap-4 text-gray-700 sm:grid-cols-2 lg:grid-cols-12">
        {/* Ícone */}
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-200 lg:col-span-1">
          <Icon size={25} className="text-primary" />
        </div>

        {/* Nome da meta + data */}
        <div className="flex flex-col lg:col-span-3">
          <h2 className="text-xl font-bold text-gray-800">{goalName}</h2>
          <span className="text-sm text-gray-500">{dataHistory}</span>
        </div>

        {/* Custo da meta */}
        <div className="flex flex-col lg:col-span-2">
          <span className="text-sm font-semibold text-gray-400">
            CUSTO DA META
          </span>
          <span className="text-lg font-semibold">
            {'R$ ' + formatCurrencyMask(goalAmount)}
          </span>
        </div>

        {/* Prazo */}
        <div className="flex flex-col lg:col-span-2">
          <span className="text-sm font-semibold text-gray-400">PRAZO</span>
          <span className="text-lg font-semibold">{goalDeadline} meses</span>
        </div>

        {/* Economia mensal */}
        <div className="flex flex-col lg:col-span-2">
          <span className="text-sm font-semibold text-gray-400">
            ECONOMIA MENSAL
          </span>
          <span className="text-lg font-semibold">
            {'R$ ' + formatCurrencyMask(safeMonth)}
          </span>
        </div>

        {/* Ações */}
        <div className="flex items-center justify-start sm:justify-end lg:col-span-2">
          <Divider
            orientation="vertical"
            spacing={8}
            className="hidden sm:block"
          />

          <Button
            onClick={onDelete}
            variant="ghost"
            className="text-red-600 transition-colors hover:text-red-800"
          >
            <Trash2 size={25} />
          </Button>
          <Button
            variant="secondary"
            icon={SquareArrowOutUpRight}
            onClick={onViewDetails}
          >
            <span className="hidden sm:inline">Ver detalhes</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
