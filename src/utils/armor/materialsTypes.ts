export type Material = {
  name: string
  quantity: number
  drop?: string[]
}

export type Armor = {
  name: string
  materials: Material[]
  skill?: Skill[]
}

export type Skill = {
  name: string
  level: number
}

export type Derivation = {
  name: string
  armors: Armor[]
}

export type ArmorType = {
  type: string
  derivations: Derivation[]
}
