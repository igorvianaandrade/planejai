import { Button } from '@/components/shared/Button'
import { Divider } from '@/components/shared/Divider'
import { formatCurrencyMask } from '@/utils/currency'

import { SquareArrowOutUpRight, Trash2, type LucideIcon } from 'lucide-react'

interface HistoryCardProps {
  goalName: string // Nome da meta
  goalAmount: string // Custo da meta
  goalDeadline: string // Data limite (ex: 24/02/2026)
  goalPeriod: string // Prazo em meses (ex: 12)
  safeMonth: string // Economia mensal
  onDelete?: () => void
  onViewDetails?: () => void
  icon: LucideIcon
}

export const HistoryCard = ({
  icon: Icon,
  goalName,
  goalAmount,
  goalDeadline,
  goalPeriod,
  safeMonth,
  onDelete,
  onViewDetails,
}: HistoryCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)] sm:p-2">
      {/* Cabeçalho */}
      <div className="grid grid-cols-8 gap-2 text-gray-700 sm:grid-cols-8">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gray-200">
          <Icon size={25} className="text-primary" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-gray-800">{goalName}</h2>
          <span className="text-sm text-gray-500">{goalDeadline}</span>
        </div>

        {/* Informações da meta */}
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-400">
            CUSTO DA META
          </span>
          <span className="text-lg font-semibold">
            {'R$ ' + formatCurrencyMask(goalAmount)}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-400">PRAZO</span>
          <span className="text-lg font-semibold">{goalPeriod} meses</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-400">
            ECONOMIA MENSAL
          </span>
          <span className="text-lg font-semibold">
            {'R$ ' + formatCurrencyMask(safeMonth)}
          </span>
        </div>

        {/* Ações */}
        <Divider
          orientation="vertical"
          spacing={2}
          className="hidden sm:block"
        />

        <div className="flex flex-col">
          <Button
            onClick={onDelete}
            variant="ghost"
            className="text-red-600 transition-colors hover:text-red-800"
          >
            <Trash2 size={25} />
          </Button>
        </div>
        <div className="flex flex-col">
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
