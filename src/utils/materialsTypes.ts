export type Material = {
  name: string
  quantity: number
  drop?: string[]
}

export type Weapon = {
  name: string
  materials: Material[]
}

export type Derivation = {
  name: string
  weapons: Weapon[]
}

export type WeaponType = {
  type: string
  derivations: Derivation[]
}
