import { ArmorType } from './materialsTypes'

const ex: ArmorType = {
  type: 'EX',
  derivations: [
    {
      name: 'EXドラゴンα',
      armors: [
        {
          name: 'EXドラゴンヘッドα',
          materials: [
            { name: '黒龍の重殻', quantity: 3 },
            { name: '黒龍の剛角', quantity: 1 },
            { name: '黒龍の邪眼', quantity: 1 },
            { name: '獄狼竜の天玉', quantity: 1 },
          ],
          skill: [
            { name: '気絶耐性', level: 3 },
            { name: 'ガード性能', level: 3 },
          ],
        },
        {
          name: 'EXドラゴンハイドα',
          materials: [
            { name: '黒龍の重殻', quantity: 3 },
            { name: '黒龍の重胸殻', quantity: 3 },
            { name: '黒龍の邪眼', quantity: 2 },
            { name: '瑠璃色の龍神玉', quantity: 1 },
          ],
          skill: [
            { name: '弱点特効', level: 1 },
            { name: '回避性能', level: 2 },
          ],
        },
        {
          name: 'EXドラゴンクロウα',
          materials: [
            { name: '黒龍の重殻', quantity: 3 },
            { name: '黒龍の厚鱗', quantity: 3 },
            { name: '黒龍の剛角', quantity: 2 },
            { name: 'ラージャンハート', quantity: 1 },
          ],
          skill: [
            { name: '弱点特効', level: 1 },
            { name: '匠', level: 3 },
          ],
        },
        {
          name: 'EXドラゴンスパインα',
          materials: [
            { name: '黒龍の重殻', quantity: 3 },
            { name: '黒龍の剛翼', quantity: 2 },
            { name: '黒龍の重胸殻', quantity: 2 },
            { name: '不滅の炉心殻', quantity: 1 },
          ],
          skill: [
            { name: '見切り', level: 3 },
            { name: '弱点特効', level: 1 },
          ],
        },
        {
          name: 'EXドラゴンフットα',
          materials: [
            { name: '黒龍の重殻', quantity: 3 },
            { name: '黒龍の厚鱗', quantity: 4 },
            { name: '黒龍の剛翼', quantity: 2 },
            { name: '古龍の大宝玉', quantity: 1 },
          ],
          skill: [
            { name: '回避性能', level: 1 },
            { name: '匠', level: 2 },
          ],
        },
      ],
    },
    {
      name: 'EXドラゴンβ',
      armors: [
        {
          name: 'EXドラゴンヘッドβ',
          materials: [
            { name: '黒龍の重殻', quantity: 3 },
            { name: '黒龍の剛角', quantity: 1 },
            { name: '黒龍の邪眼', quantity: 1 },
            { name: '獄狼竜の天玉', quantity: 1 },
          ],
          skill: [{ name: '気絶耐性', level: 3 }],
        },
        {
          name: 'EXドラゴンハイドβ',
          materials: [
            { name: '黒龍の重殻', quantity: 3 },
            { name: '黒龍の重胸殻', quantity: 3 },
            { name: '黒龍の邪眼', quantity: 2 },
            { name: '瑠璃色の龍神玉', quantity: 1 },
          ],
          skill: [
            { name: '弱点特効', level: 1 },
            { name: '回避性能', level: 1 },
          ],
        },
        {
          name: 'EXドラゴンクロウβ',
          materials: [
            { name: '黒龍の重殻', quantity: 3 },
            { name: '黒龍の厚鱗', quantity: 3 },
            { name: '黒龍の剛角', quantity: 2 },
            { name: 'ラージャンハート', quantity: 1 },
          ],
          skill: [{ name: '弱点特効', level: 1 }],
        },
        {
          name: 'EXドラゴンスパインβ',
          materials: [
            { name: '黒龍の重殻', quantity: 3 },
            { name: '黒龍の剛翼', quantity: 2 },
            { name: '黒龍の重胸殻', quantity: 2 },
            { name: '不滅の炉心殻', quantity: 1 },
          ],
          skill: [{ name: '見切り', level: 2 }],
        },
        {
          name: 'EXドラゴンフットβ',
          materials: [
            { name: '黒龍の重殻', quantity: 3 },
            { name: '黒龍の厚鱗', quantity: 4 },
            { name: '黒龍の剛翼', quantity: 2 },
            { name: '古龍の大宝玉', quantity: 1 },
          ],
          skill: [{ name: '回避性能', level: 1 }],
        },
      ],
    },
    {
      name: '',
      armors: [
        {
          name: '',
          materials: [
            { name: '', quantity: 3 },
            { name: '', quantity: 1 },
          ],
          skill: [{ name: '', level: 2 }],
        },
        {
          name: 'レザーベストα',
          materials: [
            { name: '', quantity: 2 },
            { name: '', quantity: 1 },
          ],
          skill: [{ name: '', level: 1 }],
        },
        {
          name: '',
          materials: [
            { name: '', quantity: 2 },
            { name: '', quantity: 1 },
          ],
          skill: [{ name: '', level: 1 }],
        },
        {
          name: '',
          materials: [
            { name: '', quantity: 2 },
            { name: '', quantity: 1 },
          ],
          skill: [{ name: '', level: 1 }],
        },
        {
          name: '',
          materials: [
            { name: '', quantity: 2 },
            { name: '', quantity: 1 },
          ],
          skill: [{ name: '', level: 1 }],
        },
      ],
    },
  ],
}

export default ex
