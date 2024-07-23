import { WeaponMaterialList } from './materialTypes'

export const swordData: WeaponMaterialList[] = [
  {
    id: 1,
    name: 'Buster Sword III',
    category: 'sword',
    derivated: 'Guardian',
    materials: [
      { name: 'Dragonite Ore', quantity: 5 },
      { name: 'Machalite Ore', quantity: 10 },
    ],
    zenny: 5000,
  },
  // 他の剣データをここに追加
]
