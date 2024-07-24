import { WeaponType } from './materialsTypes'

const greatsword: WeaponType = {
  type: 'ランス',
  derivations: [
    {
      name: '防衛隊系',
      weapons: [
        {
          name: '防衛隊広刃型長槍Ⅰ',
          materials: [{ name: '鉄鉱石', quantity: 1 }],
        },
        {
          name: '防衛隊広刃型長槍Ⅱ',
          materials: [{ name: '蛮顎竜の鱗', quantity: 1 }],
        },
        {
          name: '防衛隊広刃型長槍Ⅲ',
          materials: [{ name: '勇気の証', quantity: 1 }],
        },
        {
          name: '防衛隊広刃型長槍Ⅳ',
          materials: [{ name: '桜火竜の上鱗', quantity: 1 }],
        },
        {
          name: '防衛隊広刃型長槍Ⅴ',
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
      name: 'バベル系',
      weapons: [
        {
          name: 'バベル',
          materials: [
            { name: 'ノヴァクリスタル', quantity: 1 },
            { name: '狩猟王のコイン', quantity: 5 },
            { name: 'ガマルコイン', quantity: 4 },
            { name: 'レウスコイン', quantity: 4 },
          ],
        },
        {
          name: 'エルダーバベル',
          materials: [
            { name: '竜玉', quantity: 2 },
            { name: '撃龍王のコイン', quantity: 5 },
            { name: '飛竜コイン', quantity: 4 },
            { name: '獣竜コイン', quantity: 4 },
          ],
        },
        {
          name: 'ロストバベル',
          materials: [
            { name: 'ディノコイン', quantity: 2 },
            { name: 'ナルガコイン', quantity: 2 },
            { name: 'バフバロコイン', quantity: 2 },
            { name: '英雄王のコイン', quantity: 1 },
          ],
        },
      ],
    },
    {
      name: '恐暴竜系',
      weapons: [
        {
          name: '悲哀の重鎗',
          materials: [
            { name: '恐暴竜の黒鱗', quantity: 6 },
            { name: '恐暴竜の大牙', quantity: 3 },
            { name: '恐暴竜の鉤爪', quantity: 2 },
            { name: '恐暴竜の唾液', quantity: 2 },
          ],
        },
        {
          name: 'アトロシスタワー',
          materials: [
            { name: '恐暴竜の大牙', quantity: 5 },
            { name: '恐暴竜の頭殻', quantity: 2 },
            { name: '恐暴竜の宝玉', quantity: 1 },
            { name: '古龍の血', quantity: 5 },
          ],
        },
        {
          name: '業鎗ベルゼベリスク',
          materials: [
            { name: '極悪な牙', quantity: 3 },
            { name: '恐暴竜の滅鱗', quantity: 1 },
            { name: 'ドス黒い血', quantity: 3 },
            { name: '恐暴竜の剛鉤爪', quantity: 2 },
          ],
        },
      ],
    },
    {
      name: '炎妃龍系',
      weapons: [
        {
          name: 'エンプレスランス',
          materials: [
            { name: '炎妃龍のたてがみ', quantity: 3 },
            { name: '炎妃龍の宝玉', quantity: 1 },
            { name: '炎妃龍の尖角', quantity: 3 },
            { name: '炎妃龍の上鱗', quantity: 4 },
          ],
        },
        {
          name: 'エンプレスランス・冥灯',
          materials: [
            { name: '冥灯龍の幽角', quantity: 3 },
            { name: '冥灯龍の幽玉', quantity: 1 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の尻尾', quantity: 2 },
          ],
        },
        {
          name: 'エンプレスランス・滅尽',
          materials: [
            { name: '滅尽龍の宝玉', quantity: 1 },
            { name: '滅尽龍の大角', quantity: 3 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の翼', quantity: 3 },
          ],
        },
        {
          name: 'エンプレスランス・炎妃',
          materials: [
            { name: '炎王龍の尖角', quantity: 3 },
            { name: '爆鱗竜の宝玉', quantity: 1 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の尖角', quantity: 2 },
          ],
        },
        {
          name: '魂焔の龍槍・炎妃',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '炎妃龍の厚鱗', quantity: 4 },
            { name: '炎妃龍の剛角', quantity: 4 },
            { name: '炎妃龍の大たてがみ', quantity: 4 },
          ],
        },
        {
          name: '魂焔の龍刃・滅尽',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '殲滅の大剛角', quantity: 3 },
            { name: '無窮の新生殻', quantity: 3 },
            { name: '炎妃龍の厚鱗', quantity: 4 },
          ],
        },
        {
          name: '魂焔の龍刃・冥灯',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '炎妃龍の厚鱗', quantity: 4 },
            { name: '炎妃龍の靭尾', quantity: 2 },
            { name: '霊脈の古龍骨', quantity: 5 },
          ],
        },
      ],
    },
    {
      name: '団旗槍【流星】系',
      weapons: [
        {
          name: '団旗槍【流星】',
          materials: [
            { name: '火竜の翼膜', quantity: 2 },
            { name: '頑丈な骨', quantity: 5 },
            { name: '麻痺袋', quantity: 2 },
            { name: '1期団チケット', quantity: 1 },
          ],
        },
        {
          name: '団旗槍【導きの星】',
          materials: [
            { name: '火竜の翼', quantity: 2 },
            { name: '強力麻痺袋', quantity: 3 },
            { name: '勇気の証G', quantity: 1 },
            { name: '1期団チケット', quantity: 2 },
          ],
        },
        {
          name: '継承の団旗槍【輝星】',
          materials: [
            { name: '濃縮麻痺袋', quantity: 4 },
            { name: '覇王の証', quantity: 1 },
            { name: '溟龍の剛翼', quantity: 3 },
            { name: '調査団チケットG', quantity: 2 },
          ],
        },
      ],
    },
    {
      name: '団旗槍【順風】系',
      weapons: [
        {
          name: '団旗槍【順風】',
          materials: [
            { name: '頑丈な骨', quantity: 3 },
            { name: '睡眠袋', quantity: 2 },
            { name: '風漂竜の皮', quantity: 3 },
            { name: '感謝チケット', quantity: 3 },
          ],
        },
        {
          name: '団旗槍【順風満帆】',
          materials: [
            { name: '昏睡袋', quantity: 3 },
            { name: '風漂竜の上皮', quantity: 3 },
            { name: '勇気の証G', quantity: 1 },
            { name: '感謝チケット', quantity: 5 },
          ],
        },
        {
          name: '絆の団旗槍【疾風】',
          materials: [
            { name: '卒倒昏睡袋', quantity: 4 },
            { name: '覇王の証', quantity: 1 },
            { name: '溟龍の幻曜ヒゲ', quantity: 3 },
            { name: '調査団チケットG', quantity: 2 },
          ],
        },
      ],
    },
    {
      name: '金獅子系',
      weapons: [
        {
          name: '鬼槍ラージャン',
          materials: [
            { name: '金獅子の重牙', quantity: 2 },
            { name: '金獅子の剛爪', quantity: 1 },
            { name: '金獅子の剛角', quantity: 1 },
            { name: '金獅子の黒荒毛', quantity: 2 },
          ],
        },
        {
          name: '大鬼槍ラージャン',
          materials: [
            { name: '金獅子の重牙', quantity: 7 },
            { name: '金獅子の剛角', quantity: 3 },
            { name: '黄金の煌毛', quantity: 3 },
            { name: '歴戦の煌毛', quantity: 3 },
          ],
        },
      ],
    },
    {
      name: '獄狼竜系',
      weapons: [
        {
          name: '獄界の戦槍',
          materials: [
            { name: '獄狼竜の滅龍毛', quantity: 2 },
            { name: '獄狼竜の滅龍殻', quantity: 2 },
            { name: '獄狼竜の剛角', quantity: 1 },
            { name: '獄狼竜の剛爪', quantity: 1 },
          ],
        },
        {
          name: '獄界の戦槍改',
          materials: [
            { name: '獄狼竜の剛角', quantity: 2 },
            { name: '獄狼竜の剛爪', quantity: 5 },
            { name: '獄狼竜の天玉', quantity: 1 },
            { name: '歴戦の滅龍殻', quantity: 3 },
          ],
        },
      ],
    },
    {
      name: '臨界ブラキ',
      weapons: [
        {
          name: '砕光の噴槍',
          materials: [
            { name: '不壊の黒曜甲', quantity: 4 },
            { name: '砕竜の撃滅拳', quantity: 3 },
            { name: '砕竜の弾頭殻', quantity: 1 },
            { name: '不滅の炉心殻', quantity: 1 },
          ],
        },
      ],
    },
    {
      name: '煌黒龍',
      weapons: [
        {
          name: '煌黒の鋭槍',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '煌黒龍の凶爪', quantity: 3 },
            { name: '天を統べる角', quantity: 1 },
            { name: '煌黒龍の天鱗', quantity: 3 },
          ],
        },
        {
          name: '煌黒槍アルトラス',
          materials: [
            { name: '煌黒龍の凶爪', quantity: 2 },
            { name: '煌黒龍の邪翼', quantity: 1 },
            { name: '天を統べる角', quantity: 2 },
            { name: '瑠璃色の龍神玉', quantity: 1 },
          ],
        },
      ],
    },
    {
      name: 'ミラボレアス',
      weapons: [
        {
          name: '黒龍槍',
          materials: [
            { name: '黒龍の厚鱗', quantity: 3 },
            { name: '黒龍の重胸殻', quantity: 1 },
            { name: '黒龍の剛角', quantity: 1 },
            { name: '黒龍の邪眼', quantity: 1 },
          ],
        },
        {
          name: '真・黒龍槍',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '黒龍の重胸殻', quantity: 2 },
            { name: '黒龍の剛角', quantity: 2 },
            { name: '黒龍の邪眼', quantity: 1 },
          ],
        },
      ],
    },
    {
      name: 'ギルドパレス系',
      weapons: [
        {
          name: 'ギルドパレスタワー',
          materials: [
            { name: 'グラシスメタル', quantity: 5 },
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '琥珀色の重牙', quantity: 2 },
            { name: '祭典チケット', quantity: 2 },
          ],
        },
        {
          name: '宮廷麗槍【賢星】',
          materials: [
            { name: '古龍の浄血', quantity: 3 },
            { name: '太古龍骨', quantity: 5 },
            { name: '溟龍の剛爪', quantity: 3 },
            { name: '英雄王のコイン', quantity: 1 },
          ],
        },
      ],
    },
  ],
}

export default greatsword
