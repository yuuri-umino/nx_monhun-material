export type ArmorType = {
  type: string
  derivations: Derivation[]
}

export type Derivation = {
  name: string
  armors: Armor[]
}

export type Armor = {
  name: string
  materials: Material[]
  skill?: Skill[]
}
export type Material = {
  name: string
  quantity: number
  drop?: string[]
}

export type Skill = {
  name: string
  level: number
}
