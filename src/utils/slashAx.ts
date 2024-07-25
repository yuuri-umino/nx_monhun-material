import { WeaponType } from './materialsTypes'

const greatsword: WeaponType = {
  type: 'スラッシュアックス',
  derivations: [
    {
      name: '防衛隊系',
      weapons: [
        {
          name: '防衛隊変形式剣斧Ⅰ',
          materials: [{ name: '鉄鉱石', quantity: 1 }],
        },
        {
          name: '防衛隊変形式剣斧Ⅱ',
          materials: [{ name: '蛮顎竜の鱗', quantity: 1 }],
        },
        {
          name: '防衛隊変形式剣斧Ⅲ',
          materials: [{ name: '勇気の証', quantity: 1 }],
        },
        {
          name: '防衛隊変形式剣斧Ⅳ',
          materials: [{ name: '桜火竜の上鱗', quantity: 1 }],
        },
        {
          name: '防衛隊変形式剣斧Ⅴ',
          materials: [{ name: '不滅の龍鱗', quantity: 1 }],
        },
      ],
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
      name: 'ギルドパレス系',
      weapons: [],
    },
  ],
}

export default greatsword
