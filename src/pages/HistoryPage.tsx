import { HistoryHero } from '@/components/features/History'
import { SimulationHistory } from '@/components/features/History/list'

export function HistoryPage() {
  return (
    <main className="mx-auto px-6 py-8 sm:py-14">
      <HistoryHero />
      <SimulationHistory />
    </main>
  )
}
