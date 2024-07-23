export type Material = {
  name: string
  quantity: number
}

export type WeaponMaterialList = {
  id: number
  name: string
  category: string
  derivated: string
  materials: Material[]
  zenny: number
}
