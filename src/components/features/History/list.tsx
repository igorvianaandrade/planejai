import { HistoryCard } from '@/components/features/History/card'
import type { SimulationRecord } from '@/data/simulation'
import { useSimulationStorage } from '@/hooks/useSimulationStorage'
import { calcMonthlySavings } from '@/utils/simulation'
import { GoalIcon } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const SimulationHistory = () => {
  const { getAllSimulations, deleteSimulation } = useSimulationStorage()
  const navigate = useNavigate()

  // ✅ inicializa direto com os dados do storage
  const [simulations, setSimulations] = useState<SimulationRecord[]>(() =>
    getAllSimulations(),
  )

  const handleDelete = (id: string) => {
    deleteSimulation(id)
    setSimulations((prev) => prev.filter((sim) => sim.id !== id))
  }

  const messsageConfirmDelete = (id: string) => {
    const confirmDelete = window.confirm(
      'Tem certeza que deseja excluir esta simulação?',
    )
    if (confirmDelete) {
      handleDelete(id)
    }
  }

  return (
    <div>
      {simulations.map((sim) => (
        <HistoryCard
          key={sim.id}
          icon={GoalIcon}
          goalName={sim.goalName}
          goalAmount={sim.goalAmount}
          goalDeadline={sim.goalDeadline}
          safeMonth={calcMonthlySavings(sim).toString()}
          onDelete={() => {
            messsageConfirmDelete(sim.id)
          }}
          onViewDetails={() => {
            void navigate(`/resultado/${sim.id}`)
          }}
          dataHistory={sim.dataHistory}
        />
      ))}
    </div>
  )
}
