import { WeaponType } from './materialsTypes'

const greatsword: WeaponType = {
  type: '弓',
  derivations: [
    {
      name: '防衛隊系',
      weapons: [],
    },
    {
      name: '鉱石素材系',
      weapons: [],
    },
    {
      name: '骨素材系',
      weapons: [],
    },
    {
      name: '龍骨系系',
      weapons: [],
    },
    {
      name: '黒鋼系',
      weapons: [],
    },
    {
      name: 'ハンターボウ系',
      weapons: [],
    },
    {
      name: 'アーロイ系',
      weapons: [
        {
          name: 'アーロイの弓',
          materials: [
            { name: '蛮顎竜の逆鱗', quantity: 1 },
            { name: '尖竜骨', quantity: 5 },
            { name: '蛮顎竜の鋭牙', quantity: 3 },
            { name: 'ノラ族義勇兵の証', quantity: 2 },
          ],
        },
        {
          name: 'アーロイの戦弓',
          materials: [
            { name: '古龍骨', quantity: 3 },
            { name: '竜玉', quantity: 1 },
            { name: '蛮顎竜の上鱗', quantity: 7 },
            { name: 'ノラ族義勇兵の証', quantity: 3 },
          ],
        },
        {
          name: 'アーロイの戦弓(逸品)',
          materials: [
            { name: '恐暴竜の厚黒鱗', quantity: 6 },
            { name: '極悪な牙', quantity: 2 },
            { name: '恐暴竜の剛鉤爪', quantity: 3 },
            { name: 'デーモンチケット', quantity: 2 },
          ],
        },
      ],
    },
    {
      name: '恐暴竜系',
      weapons: [],
    },
    {
      name: '炎妃龍系',
      weapons: [],
    },
    {
      name: '金獅子系',
      weapons: [],
    },
    {
      name: '金獅子派生改',
      weapons: [],
    },
    {
      name: '獄狼竜系',
      weapons: [],
    },
    {
      name: '臨界ブラキ',
      weapons: [],
    },
    {
      name: '煌黒龍',
      weapons: [],
    },
    {
      name: 'ミラボレアス',
      weapons: [],
    },
    {
      name: '蒼世ノ龍弓',
      weapons: [],
    },
    {
      name: 'ギルドパレス系',
      weapons: [],
    },
  ],
}

export default greatsword
