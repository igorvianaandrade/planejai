import {
  type SimulationFormData,
  type SimulationRecord,
} from '@/data/simulation'

const LOCAL_STORAGE_KEY = 'simulation-data'

export const useSimulationStorage = () => {
  const saveFormData = (formData: SimulationFormData) => {
    const id = crypto.randomUUID()
    const dataHistory = new Date().toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
    const record: SimulationRecord = { ...formData, id, dataHistory }

    const storage = localStorage.getItem(LOCAL_STORAGE_KEY)
    const savedData = storage ? (JSON.parse(storage) as SimulationRecord[]) : []

    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify([...savedData, record]),
    )

    return id
  }

  const getFormData = (id: string) => {
    const storage = localStorage.getItem(LOCAL_STORAGE_KEY)

    if (!storage) {
      return null
    }

    const savedData = JSON.parse(storage) as SimulationRecord[]
    return savedData.find((record) => record.id === id) || null
  }

  const updateSimulation = (id: string, data: SimulationRecord) => {
    const storage = localStorage.getItem(LOCAL_STORAGE_KEY)
    const savedData = storage ? (JSON.parse(storage) as SimulationRecord[]) : []

    const updated = savedData.map((record) =>
      record.id === id ? { ...data } : record,
    )

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated))
  }

  // 🔹 Nova função para obter todas as simulações
  const getAllSimulations = () => {
    const storage = localStorage.getItem(LOCAL_STORAGE_KEY)
    return storage ? (JSON.parse(storage) as SimulationRecord[]) : []
  }

  // 🔹 Excluir uma simulação pelo id
  const deleteSimulation = (id: string) => {
    const storage = localStorage.getItem(LOCAL_STORAGE_KEY)
    const savedData = storage ? (JSON.parse(storage) as SimulationRecord[]) : []

    const filtered = savedData.filter((record) => record.id !== id)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(filtered))
  }

  return {
    saveFormData,
    getFormData,
    updateSimulation,
    getAllSimulations,
    deleteSimulation,
  }
}
