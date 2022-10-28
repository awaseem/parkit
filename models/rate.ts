const RATES = [
  {
    id: '12EF',
    value: 20
  }
]

export function getRate() {
  return RATES[0]
}

export function getRateById(id: string) {
  return RATES.find(rate => rate.id === id)
}