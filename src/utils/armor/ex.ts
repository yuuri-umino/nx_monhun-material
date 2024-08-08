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
      name: 'EXエスカドラα',
      armors: [
        {
          name: 'EXエスカドラワイズα',
          materials: [
            { name: '煌黒龍の天殻', quantity: 2 },
            { name: '煌黒龍の天鱗', quantity: 2 },
            { name: '天を統べる角', quantity: 2 },
            { name: '煌黒龍の凶爪', quantity: 2 },
          ],
          skill: [
            { name: '逆恨み', level: 3 },
            { name: '見切り', level: 2 },
          ],
        },
        {
          name: 'EXエスカドラソウルα',
          materials: [
            { name: '煌黒龍の天殻', quantity: 3 },
            { name: '煌黒龍の天鱗', quantity: 3 },
            { name: '煌黒龍の邪翼', quantity: 1 },
            { name: '煌黒龍の凶爪', quantity: 2 },
          ],
          skill: [
            { name: '体力増強', level: 3 },
            { name: '逆恨み', level: 2 },
          ],
        },
        {
          name: 'EXエスカドラアムズα',
          materials: [
            { name: '煌黒龍の天殻', quantity: 2 },
            { name: '煌黒龍の天鱗', quantity: 3 },
            { name: '煌黒龍の邪翼', quantity: 1 },
            { name: '煌黒龍の妖尾', quantity: 2 },
          ],
          skill: [
            { name: '攻撃', level: 3 },
            { name: '強化持続', level: 3 },
          ],
        },
        {
          name: 'EXエスカドラマイトα',
          materials: [
            { name: '煌黒龍の天殻', quantity: 3 },
            { name: '煌黒龍の邪翼', quantity: 2 },
            { name: '天を統べる角', quantity: 1 },
            { name: '瑠璃色の龍神玉', quantity: 1 },
          ],
          skill: [
            { name: '防御', level: 4 },
            { name: '龍耐性', level: 3 },
          ],
        },
        {
          name: 'EXエスカドラスケルα',
          materials: [
            { name: '煌黒龍の天殻', quantity: 3 },
            { name: '煌黒龍の天鱗', quantity: 2 },
            { name: '煌黒龍の妖尾', quantity: 1 },
            { name: '古龍の大宝玉', quantity: 1 },
          ],
          skill: [
            { name: '防御', level: 3 },
            { name: '龍属性攻撃強化', level: 4 },
          ],
        },
      ],
    },
    {
      name: 'EXエスカドラβ',
      armors: [
        {
          name: 'EXエスカドラワイズβ',
          materials: [
            { name: '煌黒龍の天殻', quantity: 2 },
            { name: '煌黒龍の天鱗', quantity: 2 },
            { name: '天を統べる角', quantity: 2 },
            { name: '煌黒龍の凶爪', quantity: 2 },
          ],
          skill: [
            { name: '逆恨み', level: 3 },
            { name: '見切り', level: 1 },
          ],
        },
        {
          name: 'EXエスカドラソウルβ',
          materials: [
            { name: '煌黒龍の天殻', quantity: 3 },
            { name: '煌黒龍の天鱗', quantity: 3 },
            { name: '煌黒龍の邪翼', quantity: 1 },
            { name: '煌黒龍の凶爪', quantity: 2 },
          ],
          skill: [
            { name: '攻撃', level: 3 },
            { name: '強化持続', level: 1 },
          ],
        },
        {
          name: 'EXエスカドラアムズβ',
          materials: [
            { name: '煌黒龍の天殻', quantity: 2 },
            { name: '煌黒龍の天鱗', quantity: 3 },
            { name: '煌黒龍の邪翼', quantity: 1 },
            { name: '煌黒龍の妖尾', quantity: 2 },
          ],
          skill: [{ name: '攻撃', level: 3 }],
        },
        {
          name: 'EXエスカドラマイトβ',
          materials: [
            { name: '煌黒龍の天殻', quantity: 3 },
            { name: '煌黒龍の邪翼', quantity: 2 },
            { name: '天を統べる角', quantity: 1 },
            { name: '瑠璃色の龍神玉', quantity: 1 },
          ],
          skill: [
            { name: '防御', level: 3 },
            { name: '龍耐性', level: 3 },
          ],
        },
        {
          name: 'EXエスカドラスケルβ',
          materials: [
            { name: '煌黒龍の天殻', quantity: 3 },
            { name: '煌黒龍の天鱗', quantity: 2 },
            { name: '煌黒龍の妖尾', quantity: 1 },
            { name: '古龍の大宝玉', quantity: 1 },
          ],
          skill: [{ name: '防御', level: 3 }],
        },
      ],
    },
    {
      name: 'EXオルムングα',
      armors: [
        {
          name: 'EXオルムングヘルムα',
          materials: [
            { name: '氷牙竜チケット', quantity: 1 },
            { name: '銀雪を冠した毛皮', quantity: 2 },
            { name: '氷河を砕く剣爪', quantity: 1 },
            { name: '瞬間凍結袋', quantity: 3 },
          ],
          skill: [
            { name: '見切り', level: 2 },
            { name: '納刀術', level: 1 },
          ],
        },
        {
          name: 'EXオルムングメイルα',
          materials: [
            { name: '氷牙竜チケット', quantity: 1 },
            { name: '銀雪を冠した毛皮', quantity: 4 },
            { name: '白銀の氷刃牙', quantity: 2 },
            { name: 'ピュアクリスタル', quantity: 1 },
          ],
          skill: [
            { name: '攻撃', level: 3 },
            { name: '抜刀術【技】', level: 1 },
          ],
        },
        {
          name: 'EXオルムングアームα',
          materials: [
            { name: '氷牙竜チケット', quantity: 1 },
            { name: '銀雪を冠した毛皮', quantity: 2 },
            { name: '白銀の氷刃牙', quantity: 1 },
            { name: '氷河を砕く剣爪', quantity: 1 },
          ],
          skill: [
            { name: '見切り', level: 2 },
            { name: 'KO術', level: 2 },
          ],
        },
        {
          name: 'EXオルムングコイルα',
          materials: [
            { name: '氷牙竜チケット', quantity: 1 },
            { name: '銀雪を冠した毛皮', quantity: 3 },
            { name: '氷河を砕く剣爪', quantity: 1 },
            { name: 'グラシスメタル', quantity: 4 },
          ],
          skill: [{ name: '納刀術', level: 1 }],
        },
        {
          name: 'EXオルムンググリーヴα',
          materials: [
            { name: '氷牙竜チケット', quantity: 1 },
            { name: '銀雪を冠した毛皮', quantity: 2 },
            { name: '白銀の氷刃牙', quantity: 2 },
            { name: '大竜玉', quantity: 1 },
          ],
          skill: [
            { name: '攻撃', level: 1 },
            { name: 'KO術', level: 3 },
          ],
        },
      ],
    },
    {
      name: 'EXオルムングβ',
      armors: [
        {
          name: 'EXオルムングヘルムβ',
          materials: [
            { name: '氷牙竜チケット', quantity: 1 },
            { name: '銀雪を冠した毛皮', quantity: 2 },
            { name: '氷河を砕く剣爪', quantity: 1 },
            { name: '瞬間凍結袋', quantity: 3 },
          ],
          skill: [{ name: '見切り', level: 2 }],
        },
        {
          name: 'EXオルムングメイルβ',
          materials: [
            { name: '氷牙竜チケット', quantity: 1 },
            { name: '銀雪を冠した毛皮', quantity: 4 },
            { name: '白銀の氷刃牙', quantity: 2 },
            { name: 'ピュアクリスタル', quantity: 1 },
          ],
          skill: [{ name: '攻撃', level: 3 }],
        },
        {
          name: 'EXオルムングアームβ',
          materials: [
            { name: '氷牙竜チケット', quantity: 1 },
            { name: '銀雪を冠した毛皮', quantity: 2 },
            { name: '白銀の氷刃牙', quantity: 1 },
            { name: '氷河を砕く剣爪', quantity: 1 },
          ],
          skill: [{ name: '見切り', level: 2 }],
        },
        {
          name: 'EXオルムングコイルβ',
          materials: [
            { name: '氷牙竜チケット', quantity: 1 },
            { name: '銀雪を冠した毛皮', quantity: 3 },
            { name: '氷河を砕く剣爪', quantity: 1 },
            { name: 'グラシスメタル', quantity: 4 },
          ],
          skill: [{ name: '納刀術', level: 1 }],
        },
        {
          name: 'EXオルムンググリーヴβ',
          materials: [
            { name: '氷牙竜チケット', quantity: 1 },
            { name: '銀雪を冠した毛皮', quantity: 2 },
            { name: '白銀の氷刃牙', quantity: 2 },
            { name: '大竜玉', quantity: 1 },
          ],
          skill: [{ name: '攻撃', level: 1 }],
        },
      ],
    },
    {
      name: 'EXアンガルダα',
      armors: [
        {
          name: 'EXアンガルダヘルムα',
          materials: [
            { name: '地啼龍の厳岩殻', quantity: 4 },
            { name: '地啼龍の慈鱗', quantity: 3 },
            { name: '地啼龍の慈眼殻', quantity: 1 },
            { name: '雌火竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '体力回復量UP', level: 2 },
            { name: '破壊王', level: 1 },
          ],
        },
        {
          name: 'EXアンガルダメイルα',
          materials: [
            { name: '地啼龍の厳岩殻', quantity: 4 },
            { name: '地啼龍の慈鱗', quantity: 3 },
            { name: '地啼龍の慈爪', quantity: 3 },
            { name: '兇爪竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '災禍転福', level: 2 },
            { name: '体力増強', level: 1 },
          ],
        },
        {
          name: 'EXアンガルダアームα',
          materials: [
            { name: '地啼龍の厳岩殻', quantity: 4 },
            { name: '地啼龍の慈爪', quantity: 2 },
            { name: '地啼龍の慈眼殻', quantity: 2 },
            { name: '地啼龍の顕玉', quantity: 1 },
          ],
          skill: [
            { name: '超会心', level: 2 },
            { name: '災禍転福', level: 1 },
          ],
        },
        {
          name: 'EXアンガルダコイルα',
          materials: [
            { name: '地啼龍の厳岩殻', quantity: 4 },
            { name: '地啼龍の慈鱗', quantity: 2 },
            { name: '地啼龍の散華石', quantity: 3 },
            { name: '大竜玉', quantity: 1 },
          ],
          skill: [
            { name: '体力増強', level: 2 },
            { name: '体力回復量UP', level: 1 },
          ],
        },
        {
          name: 'EXアンガルダグリーヴα',
          materials: [
            { name: '地啼龍の厳岩殻', quantity: 4 },
            { name: '地啼龍の慈鱗', quantity: 2 },
            { name: '地啼龍の散華石', quantity: 3 },
            { name: '幻鳥竜玉', quantity: 1 },
          ],
          skill: [
            { name: '破壊王', level: 2 },
            { name: '防御', level: 2 },
          ],
        },
      ],
    },
    {
      name: 'EXアンガルダβ',
      armors: [
        {
          name: 'EXアンガルダヘルムβ',
          materials: [
            { name: '地啼龍の厳岩殻', quantity: 4 },
            { name: '地啼龍の慈鱗', quantity: 3 },
            { name: '地啼龍の慈眼殻', quantity: 1 },
            { name: '雌火竜の天鱗', quantity: 1 },
          ],
          skill: [{ name: '体力回復量UP', level: 2 }],
        },
        {
          name: 'EXアンガルダメイルβ',
          materials: [
            { name: '地啼龍の厳岩殻', quantity: 4 },
            { name: '地啼龍の慈鱗', quantity: 3 },
            { name: '地啼龍の慈爪', quantity: 3 },
            { name: '兇爪竜の天鱗', quantity: 1 },
          ],
          skill: [{ name: '災禍転福', level: 2 }],
        },
        {
          name: 'EXアンガルダアームβ',
          materials: [
            { name: '地啼龍の厳岩殻', quantity: 4 },
            { name: '地啼龍の慈爪', quantity: 2 },
            { name: '地啼龍の慈眼殻', quantity: 2 },
            { name: '地啼龍の顕玉', quantity: 1 },
          ],
          skill: [{ name: '超会心', level: 2 }],
        },
        {
          name: 'EXアンガルダコイルβ',
          materials: [
            { name: '地啼龍の厳岩殻', quantity: 4 },
            { name: '地啼龍の慈鱗', quantity: 2 },
            { name: '地啼龍の散華石', quantity: 3 },
            { name: '大竜玉', quantity: 1 },
          ],
          skill: [{ name: '体力増強', level: 2 }],
        },
        {
          name: 'EXアンガルダグリーヴβ',
          materials: [
            { name: '地啼龍の厳岩殻', quantity: 4 },
            { name: '地啼龍の慈鱗', quantity: 2 },
            { name: '地啼龍の散華石', quantity: 3 },
            { name: '幻鳥竜玉', quantity: 1 },
          ],
          skill: [
            { name: '破壊王', level: 1 },
            { name: '防御', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXジャナフα',
      armors: [
        {
          name: 'EXジャナフヘルムα',
          materials: [
            { name: '蛮顎竜の厚毛皮', quantity: 2 },
            { name: '蛮顎竜の厚鱗', quantity: 2 },
            { name: '蛮顎竜の靭尾', quantity: 1 },
            { name: '業炎袋', quantity: 3 },
          ],
          skill: [
            { name: '火属性攻撃強化', level: 2 },
            { name: '火耐性', level: 1 },
          ],
        },
        {
          name: 'EXジャナフメイルα',
          materials: [
            { name: '蛮顎竜の厚毛皮', quantity: 2 },
            { name: '蛮顎竜の重牙', quantity: 1 },
            { name: '蛮顎竜の重鼻骨', quantity: 2 },
            { name: '強竜骨', quantity: 3 },
          ],
          skill: [
            { name: 'ランナー', level: 2 },
            { name: '特殊射撃強化', level: 1 },
          ],
        },
        {
          name: 'EXジャナフアームα',
          materials: [
            { name: '蛮顎竜の厚毛皮', quantity: 2 },
            { name: '蛮顎竜の厚鱗', quantity: 2 },
            { name: '業炎袋', quantity: 2 },
            { name: 'エルトライト鉱石', quantity: 5 },
          ],
          skill: [
            { name: '特殊射撃強化', level: 1 },
            { name: '火属性攻撃強化', level: 2 },
          ],
        },
        {
          name: 'EXジャナフコイルα',
          materials: [
            { name: '蛮顎竜の厚毛皮', quantity: 2 },
            { name: '蛮顎竜の厚鱗', quantity: 1 },
            { name: '蛮顎竜の重牙', quantity: 2 },
            { name: '強靭な爪', quantity: 2 },
          ],
          skill: [
            { name: '火耐性', level: 2 },
            { name: '砲術', level: 1 },
          ],
        },
        {
          name: 'EXジャナフグリーヴα',
          materials: [
            { name: '蛮顎竜の厚毛皮', quantity: 2 },
            { name: '蛮顎竜の厚鱗', quantity: 1 },
            { name: '蛮顎竜の重鼻骨', quantity: 1 },
            { name: '強竜骨', quantity: 2 },
          ],
          skill: [
            { name: '砲術', level: 2 },
            { name: 'ランナー', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXジャナフβ',
      armors: [
        {
          name: 'EXジャナフヘルムβ',
          materials: [
            { name: '蛮顎竜の厚毛皮', quantity: 2 },
            { name: '蛮顎竜の厚鱗', quantity: 2 },
            { name: '蛮顎竜の靭尾', quantity: 1 },
            { name: '業炎袋', quantity: 3 },
          ],
          skill: [{ name: '火属性攻撃強化', level: 2 }],
        },
        {
          name: 'EXジャナフメイルβ',
          materials: [
            { name: '蛮顎竜の厚毛皮', quantity: 2 },
            { name: '蛮顎竜の重牙', quantity: 1 },
            { name: '蛮顎竜の重鼻骨', quantity: 2 },
            { name: '強竜骨', quantity: 3 },
          ],
          skill: [
            { name: 'ランナー', level: 1 },
            { name: '特殊射撃強化', level: 1 },
          ],
        },
        {
          name: 'EXジャナフアームβ',
          materials: [
            { name: '蛮顎竜の厚毛皮', quantity: 2 },
            { name: '蛮顎竜の厚鱗', quantity: 2 },
            { name: '業炎袋', quantity: 2 },
            { name: 'エルトライト鉱石', quantity: 5 },
          ],
          skill: [
            { name: '特殊射撃強化', level: 1 },
            { name: '火属性攻撃強化', level: 1 },
          ],
        },
        {
          name: 'EXジャナフコイルβ',
          materials: [
            { name: '蛮顎竜の厚毛皮', quantity: 2 },
            { name: '蛮顎竜の厚鱗', quantity: 1 },
            { name: '蛮顎竜の重牙', quantity: 2 },
            { name: '強靭な爪', quantity: 2 },
          ],
          skill: [{ name: '火耐性', level: 2 }],
        },
        {
          name: 'EXジャナフグリーヴβ',
          materials: [
            { name: '蛮顎竜の厚毛皮', quantity: 2 },
            { name: '蛮顎竜の厚鱗', quantity: 1 },
            { name: '蛮顎竜の重鼻骨', quantity: 1 },
            { name: '強竜骨', quantity: 2 },
          ],
          skill: [{ name: '砲術', level: 2 }],
        },
      ],
    },
    {
      name: 'EXジャナールα',
      armors: [
        {
          name: 'EXジャナールヘルムα',
          materials: [
            { name: '雷顎竜の厚毛皮', quantity: 3 },
            { name: '雷顎竜の厚鱗', quantity: 2 },
            { name: '雷顎竜の靭尾', quantity: 1 },
            { name: '雷電袋', quantity: 3 },
          ],
          skill: [
            { name: '弱点特効', level: 1 },
            { name: '死中に活', level: 1 },
          ],
        },
        {
          name: 'EXジャナールメイルα',
          materials: [
            { name: '雷顎竜の厚毛皮', quantity: 3 },
            { name: '雷顎竜の厚鱗', quantity: 2 },
            { name: '雷顎竜の重鼻骨', quantity: 1 },
            { name: '雷電袋', quantity: 2 },
          ],
          skill: [
            { name: 'ひるみ軽減', level: 1 },
            { name: '気絶耐性', level: 2 },
          ],
        },
        {
          name: 'EXジャナールアームα',
          materials: [
            { name: '雷顎竜の厚毛皮', quantity: 3 },
            { name: '雷顎竜の厚鱗', quantity: 2 },
            { name: '雷顎竜の重牙', quantity: 1 },
            { name: '剛竜骨', quantity: 2 },
          ],
          skill: [
            { name: 'アイテム使用強化', level: 2 },
            { name: '雷属性攻撃強化', level: 2 },
          ],
        },
        {
          name: 'EXジャナールコイルα',
          materials: [
            { name: '雷顎竜の厚毛皮', quantity: 3 },
            { name: '雷顎竜の重牙', quantity: 1 },
            { name: '雷顎竜の重鼻骨', quantity: 2 },
            { name: '雷顎竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '弱点特効', level: 2 },
            { name: 'アイテム使用強化', level: 1 },
          ],
        },
        {
          name: 'EXジャナールグリーヴα',
          materials: [
            { name: '雷顎竜の厚毛皮', quantity: 3 },
            { name: '雷顎竜の厚鱗', quantity: 2 },
            { name: '雷顎竜の重牙', quantity: 2 },
            { name: '剛竜骨', quantity: 3 },
          ],
          skill: [
            { name: '雷属性攻撃強化', level: 2 },
            { name: '特殊射撃強化', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXジャナールβ',
      armors: [
        {
          name: 'EXジャナールヘルムβ',
          materials: [
            { name: '雷顎竜の厚毛皮', quantity: 3 },
            { name: '雷顎竜の厚鱗', quantity: 2 },
            { name: '雷顎竜の靭尾', quantity: 1 },
            { name: '雷電袋', quantity: 3 },
          ],
          skill: [{ name: '弱点特効', level: 1 }],
        },
        {
          name: 'EXジャナールメイルβ',
          materials: [
            { name: '雷顎竜の厚毛皮', quantity: 3 },
            { name: '雷顎竜の厚鱗', quantity: 2 },
            { name: '雷顎竜の重鼻骨', quantity: 1 },
            { name: '雷電袋', quantity: 2 },
          ],
          skill: [
            { name: 'ひるみ軽減', level: 1 },
            { name: '気絶耐性', level: 1 },
          ],
        },
        {
          name: 'EXジャナールアームβ',
          materials: [
            { name: '雷顎竜の厚毛皮', quantity: 3 },
            { name: '雷顎竜の厚鱗', quantity: 2 },
            { name: '雷顎竜の重牙', quantity: 1 },
            { name: '剛竜骨', quantity: 2 },
          ],
          skill: [{ name: 'アイテム使用強化', level: 2 }],
        },
        {
          name: 'EXジャナールコイルβ',
          materials: [
            { name: '雷顎竜の厚毛皮', quantity: 3 },
            { name: '雷顎竜の重牙', quantity: 1 },
            { name: '雷顎竜の重鼻骨', quantity: 2 },
            { name: '雷顎竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '弱点特効', level: 1 },
            { name: 'アイテム使用強化', level: 1 },
          ],
        },
        {
          name: 'EXジャナールグリーヴβ',
          materials: [
            { name: '雷顎竜の厚毛皮', quantity: 3 },
            { name: '雷顎竜の厚鱗', quantity: 2 },
            { name: '雷顎竜の重牙', quantity: 2 },
            { name: '剛竜骨', quantity: 3 },
          ],
          skill: [{ name: '雷属性攻撃強化', level: 2 }],
        },
      ],
    },
    {
      name: 'EXラヴィーナα',
      armors: [
        {
          name: 'EXラヴィーナヘルムα',
          materials: [
            { name: '冰龍の重殻', quantity: 3 },
            { name: '氷晶の厚龍鱗', quantity: 2 },
            { name: '冰龍の冠角', quantity: 1 },
            { name: '太古龍骨', quantity: 3 },
          ],
          skill: [
            { name: '精霊の加護', level: 2 },
            { name: '災禍転福', level: 1 },
          ],
        },
        {
          name: 'EXラヴィーナメイルα',
          materials: [
            { name: '冰龍の重殻', quantity: 3 },
            { name: '冰龍の剛翼', quantity: 3 },
            { name: '冰龍の剛爪', quantity: 2 },
            { name: '風漂竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '納刀術', level: 2 },
            { name: '抜刀術【技】', level: 1 },
          ],
        },
        {
          name: 'EXラヴィーナアームα',
          materials: [
            { name: '冰龍の重殻', quantity: 3 },
            { name: '冰龍の剛翼', quantity: 2 },
            { name: '冰龍の冠角', quantity: 2 },
            { name: '冰龍の零玉', quantity: 1 },
          ],
          skill: [
            { name: '納刀術', level: 1 },
            { name: 'ひるみ軽減', level: 2 },
          ],
        },
        {
          name: 'EXラヴィーナコイルα',
          materials: [
            { name: '冰龍の重殻', quantity: 3 },
            { name: '氷晶の厚龍鱗', quantity: 2 },
            { name: '冰龍の剛爪', quantity: 2 },
            { name: '古龍の浄血', quantity: 2 },
          ],
          skill: [
            { name: 'ひるみ軽減', level: 1 },
            { name: '災禍転福', level: 1 },
          ],
        },
        {
          name: 'EXラヴィーナグリーヴα',
          materials: [
            { name: '冰龍の重殻', quantity: 3 },
            { name: '氷晶の厚龍鱗', quantity: 3 },
            { name: '冰龍の靭尾', quantity: 1 },
            { name: '惨爪竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '抜刀術【技】', level: 2 },
            { name: '災禍転福', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXラヴィーナβ',
      armors: [
        {
          name: 'EXラヴィーナヘルムβ',
          materials: [
            { name: '冰龍の重殻', quantity: 3 },
            { name: '氷晶の厚龍鱗', quantity: 2 },
            { name: '冰龍の冠角', quantity: 1 },
            { name: '太古龍骨', quantity: 3 },
          ],
          skill: [{ name: '精霊の加護', level: 2 }],
        },
        {
          name: 'EXラヴィーナメイルβ',
          materials: [
            { name: '冰龍の重殻', quantity: 3 },
            { name: '冰龍の剛翼', quantity: 3 },
            { name: '冰龍の剛爪', quantity: 2 },
            { name: '風漂竜の天鱗', quantity: 1 },
          ],
          skill: [{ name: '納刀術', level: 2 }],
        },
        {
          name: 'EXラヴィーナアームβ',
          materials: [
            { name: '冰龍の重殻', quantity: 3 },
            { name: '冰龍の剛翼', quantity: 2 },
            { name: '冰龍の冠角', quantity: 2 },
            { name: '冰龍の零玉', quantity: 1 },
          ],
          skill: [
            { name: '納刀術', level: 1 },
            { name: 'ひるみ軽減', level: 1 },
          ],
        },
        {
          name: 'EXラヴィーナコイルβ',
          materials: [
            { name: '冰龍の重殻', quantity: 3 },
            { name: '氷晶の厚龍鱗', quantity: 2 },
            { name: '冰龍の剛爪', quantity: 2 },
            { name: '古龍の浄血', quantity: 2 },
          ],
          skill: [{ name: 'ひるみ軽減', level: 1 }],
        },
        {
          name: 'EXラヴィーナグリーヴβ',
          materials: [
            { name: '冰龍の重殻', quantity: 3 },
            { name: '氷晶の厚龍鱗', quantity: 3 },
            { name: '冰龍の靭尾', quantity: 1 },
            { name: '惨爪竜の天鱗', quantity: 1 },
          ],
          skill: [{ name: '抜刀術【技】', level: 2 }],
        },
      ],
    },
    {
      name: 'EXガルルガα',
      armors: [
        {
          name: 'EXガルルガヘルムα',
          materials: [
            { name: '黒狼鳥の重殻', quantity: 2 },
            { name: '黒狼鳥の銀狼毛', quantity: 2 },
            { name: 'イカしたクチバシ', quantity: 1 },
            { name: '朽ちた結晶', quantity: 3 },
          ],
          skill: [
            { name: '見切り', level: 2 },
            { name: '逆恨み', level: 1 },
          ],
        },
        {
          name: 'EXガルルガメイルα',
          materials: [
            { name: '黒狼鳥の重殻', quantity: 2 },
            { name: '黒狼鳥の厚鱗', quantity: 2 },
            { name: '黒狼鳥の剛翼', quantity: 3 },
            { name: '草むした大骨', quantity: 3 },
          ],
          skill: [
            { name: '耳栓', level: 2 },
            { name: '見切り', level: 2 },
          ],
        },
        {
          name: 'EXガルルガアームα',
          materials: [
            { name: '黒狼鳥の重殻', quantity: 2 },
            { name: '黒狼鳥の銀狼毛', quantity: 2 },
            { name: '黒狼鳥の地獄耳', quantity: 2 },
            { name: '傷痕の紫甲殻', quantity: 3 },
          ],
          skill: [{ name: '耳栓', level: 3 }],
        },
        {
          name: 'EXガルルガコイルα',
          materials: [
            { name: '黒狼鳥の重殻', quantity: 2 },
            { name: '黒狼鳥の剛翼', quantity: 2 },
            { name: '黒狼鳥の靭尾', quantity: 1 },
            { name: '鳥竜玉', quantity: 1 },
          ],
          skill: [
            { name: '逆恨み', level: 2 },
            { name: '毒属性強化', level: 2 },
          ],
        },
        {
          name: 'EXガルルガグリーヴα',
          materials: [
            { name: '黒狼鳥の重殻', quantity: 2 },
            { name: '黒狼鳥の厚鱗', quantity: 2 },
            { name: '黒狼鳥の銀狼毛', quantity: 5 },
            { name: '龍脈の強竜骨', quantity: 5 },
          ],
          skill: [
            { name: '見切り', level: 2 },
            { name: '貫通弾・竜の一矢強化', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXガルルガβ',
      armors: [
        {
          name: 'EXガルルガヘルムβ',
          materials: [
            { name: '黒狼鳥の重殻', quantity: 2 },
            { name: '黒狼鳥の銀狼毛', quantity: 2 },
            { name: 'イカしたクチバシ', quantity: 1 },
            { name: '朽ちた結晶', quantity: 3 },
          ],
          skill: [
            { name: '見切り', level: 1 },
            { name: '逆恨み', level: 1 },
          ],
        },
        {
          name: 'EXガルルガメイルβ',
          materials: [
            { name: '黒狼鳥の重殻', quantity: 2 },
            { name: '黒狼鳥の厚鱗', quantity: 2 },
            { name: '黒狼鳥の剛翼', quantity: 3 },
            { name: '草むした大骨', quantity: 3 },
          ],
          skill: [
            { name: '耳栓', level: 1 },
            { name: '見切り', level: 2 },
          ],
        },
        {
          name: 'EXガルルガアームβ',
          materials: [
            { name: '黒狼鳥の重殻', quantity: 2 },
            { name: '黒狼鳥の銀狼毛', quantity: 2 },
            { name: '黒狼鳥の地獄耳', quantity: 2 },
            { name: '傷痕の紫甲殻', quantity: 3 },
          ],
          skill: [{ name: '耳栓', level: 2 }],
        },
        {
          name: 'EXガルルガコイルβ',
          materials: [
            { name: '黒狼鳥の重殻', quantity: 2 },
            { name: '黒狼鳥の剛翼', quantity: 2 },
            { name: '黒狼鳥の靭尾', quantity: 1 },
            { name: '鳥竜玉', quantity: 1 },
          ],
          skill: [{ name: '逆恨み', level: 2 }],
        },
        {
          name: 'EXガルルガグリーヴβ',
          materials: [
            { name: '黒狼鳥の重殻', quantity: 2 },
            { name: '黒狼鳥の厚鱗', quantity: 2 },
            { name: '黒狼鳥の銀狼毛', quantity: 5 },
            { name: '龍脈の強竜骨', quantity: 5 },
          ],
          skill: [
            { name: '見切り', level: 2 },
            { name: '貫通弾・竜の一矢強化', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXラヴァα',
      armors: [
        {
          name: 'EXラヴァヘルムα',
          materials: [
            { name: '溶岩竜の重殻', quantity: 2 },
            { name: '溶岩竜の厚鱗', quantity: 2 },
            { name: '溶岩竜の重牙', quantity: 1 },
            { name: 'ガストドンの重殻', quantity: 3 },
          ],
          skill: [
            { name: '火属性攻撃強化', level: 2 },
            { name: '納刀術', level: 1 },
          ],
        },
        {
          name: 'EXラヴァメイルα',
          materials: [
            { name: '溶岩竜の重殻', quantity: 2 },
            { name: '溶岩竜の厚鱗', quantity: 1 },
            { name: '業炎袋', quantity: 6 },
            { name: '重竜骨', quantity: 4 },
          ],
          skill: [
            { name: '火属性攻撃強化', level: 3 },
            { name: '熱ダメージ無効', level: 1 },
          ],
        },
        {
          name: 'EXラヴァアームα',
          materials: [
            { name: '溶岩竜の重殻', quantity: 2 },
            { name: '溶岩竜の重牙', quantity: 2 },
            { name: '溶岩竜の特上ヒレ', quantity: 1 },
            { name: '大竜玉', quantity: 1 },
          ],
          skill: [
            { name: 'フルチャージ', level: 2 },
            { name: '体力回復量UP', level: 1 },
          ],
        },
        {
          name: 'EXラヴァコイルα',
          materials: [
            { name: '溶岩竜の重殻', quantity: 2 },
            { name: '溶岩竜の厚鱗', quantity: 1 },
            { name: '溶岩竜の特上ヒレ', quantity: 2 },
            { name: 'メランジェ鉱石', quantity: 4 },
          ],
          skill: [
            { name: '納刀術', level: 2 },
            { name: '体力回復量UP', level: 2 },
          ],
        },
        {
          name: 'EXラヴァグリーヴα',
          materials: [
            { name: '溶岩竜の重殻', quantity: 2 },
            { name: '溶岩竜の厚鱗', quantity: 2 },
            { name: '溶岩竜の特上ヒレ', quantity: 1 },
            { name: 'エルトライト鉱石', quantity: 8 },
          ],
          skill: [
            { name: '散弾・剛射強化', level: 1 },
            { name: '火属性攻撃強化', level: 2 },
          ],
        },
      ],
    },
    {
      name: 'EXラヴァβ',
      armors: [
        {
          name: 'EXラヴァヘルムβ',
          materials: [
            { name: '溶岩竜の重殻', quantity: 2 },
            { name: '溶岩竜の厚鱗', quantity: 2 },
            { name: '溶岩竜の重牙', quantity: 1 },
            { name: 'ガストドンの重殻', quantity: 3 },
          ],
          skill: [
            { name: '火属性攻撃強化', level: 1 },
            { name: '納刀術', level: 1 },
          ],
        },
        {
          name: 'EXラヴァメイルβ',
          materials: [
            { name: '溶岩竜の重殻', quantity: 2 },
            { name: '溶岩竜の厚鱗', quantity: 1 },
            { name: '業炎袋', quantity: 6 },
            { name: '重竜骨', quantity: 4 },
          ],
          skill: [
            { name: '火属性攻撃強化', level: 2 },
            { name: '熱ダメージ無効', level: 1 },
          ],
        },
        {
          name: 'EXラヴァアームβ',
          materials: [
            { name: '溶岩竜の重殻', quantity: 2 },
            { name: '溶岩竜の重牙', quantity: 2 },
            { name: '溶岩竜の特上ヒレ', quantity: 1 },
            { name: '大竜玉', quantity: 1 },
          ],
          skill: [
            { name: 'フルチャージ', level: 1 },
            { name: '体力回復量UP', level: 1 },
          ],
        },
        {
          name: 'EXラヴァコイルβ',
          materials: [
            { name: '溶岩竜の重殻', quantity: 2 },
            { name: '溶岩竜の厚鱗', quantity: 1 },
            { name: '溶岩竜の特上ヒレ', quantity: 2 },
            { name: 'メランジェ鉱石', quantity: 4 },
          ],
          skill: [
            { name: '納刀術', level: 2 },
            { name: '体力回復量UP', level: 1 },
          ],
        },
        {
          name: 'EXラヴァグリーヴβ',
          materials: [
            { name: '溶岩竜の重殻', quantity: 2 },
            { name: '溶岩竜の厚鱗', quantity: 2 },
            { name: '溶岩竜の特上ヒレ', quantity: 1 },
            { name: 'エルトライト鉱石', quantity: 8 },
          ],
          skill: [
            { name: '散弾・剛射強化', level: 1 },
            { name: '火属性攻撃強化', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXガンキンα',
      armors: [
        {
          name: 'EXガンキンヘルムα',
          materials: [
            { name: '爆鎚竜の重殻', quantity: 2 },
            { name: '爆鎚竜の厚鱗', quantity: 2 },
            { name: '爆鎚竜の重耐熱殻', quantity: 1 },
            { name: '獄炎石', quantity: 2 },
          ],
          skill: [
            { name: '爆破やられ耐性', level: 2 },
            { name: 'ひるみ軽減', level: 1 },
          ],
        },
        {
          name: 'EXガンキンメイルα',
          materials: [
            { name: '爆鎚竜の重殻', quantity: 2 },
            { name: '爆鎚竜の重顎', quantity: 1 },
            { name: '爆鎚竜の重耐熱殻', quantity: 1 },
            { name: '大竜玉', quantity: 1 },
          ],
          skill: [
            { name: '破壊王', level: 2 },
            { name: '爆破やられ耐性', level: 1 },
          ],
        },
        {
          name: 'EXガンキンアームα',
          materials: [
            { name: '爆鎚竜の重殻', quantity: 2 },
            { name: '爆鎚竜の厚鱗', quantity: 1 },
            { name: '爆鎚竜の重耐熱殻', quantity: 1 },
            { name: '溶岩塊', quantity: 4 },
          ],
          skill: [
            { name: 'ガード性能', level: 2 },
            { name: '防御力DOWN耐性', level: 2 },
          ],
        },
        {
          name: 'EXガンキンコイルα',
          materials: [
            { name: '爆鎚竜の重殻', quantity: 2 },
            { name: '爆鎚竜の厚鱗', quantity: 2 },
            { name: '爆鎚竜の重顎', quantity: 1 },
            { name: '重竜骨', quantity: 4 },
          ],
          skill: [
            { name: '破壊王', level: 1 },
            { name: 'ガード性能', level: 1 },
          ],
        },
        {
          name: 'EXガンキングリーヴα',
          materials: [
            { name: '爆鎚竜の重殻', quantity: 2 },
            { name: '爆鎚竜の厚鱗', quantity: 1 },
            { name: '爆鎚竜の延髄', quantity: 2 },
            { name: '頑強な重骨', quantity: 5 },
          ],
          skill: [
            { name: 'ガード性能', level: 2 },
            { name: '攻めの守勢', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXガンキンβ',
      armors: [
        {
          name: 'EXガンキンヘルムβ',
          materials: [
            { name: '爆鎚竜の重殻', quantity: 2 },
            { name: '爆鎚竜の厚鱗', quantity: 2 },
            { name: '爆鎚竜の重耐熱殻', quantity: 1 },
            { name: '獄炎石', quantity: 2 },
          ],
          skill: [{ name: '爆破やられ耐性', level: 2 }],
        },
        {
          name: 'EXガンキンメイルβ',
          materials: [
            { name: '爆鎚竜の重殻', quantity: 2 },
            { name: '爆鎚竜の重顎', quantity: 1 },
            { name: '爆鎚竜の重耐熱殻', quantity: 1 },
            { name: '大竜玉', quantity: 1 },
          ],
          skill: [{ name: '破壊王', level: 2 }],
        },
        {
          name: 'EXガンキンアームβ',
          materials: [
            { name: '爆鎚竜の重殻', quantity: 2 },
            { name: '爆鎚竜の厚鱗', quantity: 1 },
            { name: '爆鎚竜の重耐熱殻', quantity: 1 },
            { name: '溶岩塊', quantity: 4 },
          ],
          skill: [
            { name: 'ガード性能', level: 2 },
            { name: '防御力DOWN耐性', level: 1 },
          ],
        },
        {
          name: 'EXガンキンコイルβ',
          materials: [
            { name: '爆鎚竜の重殻', quantity: 2 },
            { name: '爆鎚竜の厚鱗', quantity: 2 },
            { name: '爆鎚竜の重顎', quantity: 1 },
            { name: '重竜骨', quantity: 4 },
          ],
          skill: [{ name: '破壊王', level: 1 }],
        },
        {
          name: 'EXガンキングリーヴβ',
          materials: [
            { name: '爆鎚竜の重殻', quantity: 2 },
            { name: '爆鎚竜の厚鱗', quantity: 1 },
            { name: '爆鎚竜の延髄', quantity: 2 },
            { name: '頑強な重骨', quantity: 5 },
          ],
          skill: [{ name: 'ガード性能', level: 2 }],
        },
      ],
    },
    {
      name: 'EXガロンα',
      armors: [
        {
          name: 'EXガロンヘルムα',
          materials: [
            { name: '惨爪竜の強硬筋', quantity: 2 },
            { name: '惨爪竜の厚鱗', quantity: 1 },
            { name: '惨爪竜の重牙', quantity: 1 },
            { name: 'いびつな狂骨', quantity: 3 },
          ],
          skill: [
            { name: '裂傷耐性', level: 2 },
            { name: '見切り', level: 2 },
          ],
        },
        {
          name: 'EXガロンメイルα',
          materials: [
            { name: '惨爪竜の強硬筋', quantity: 2 },
            { name: '惨爪竜の厚鱗', quantity: 2 },
            { name: '惨爪竜の靭尾', quantity: 1 },
            { name: 'カンタロスの斬羽', quantity: 2 },
          ],
          skill: [
            { name: '砥石使用高速化', level: 2 },
            { name: '裂傷耐性', level: 1 },
          ],
        },
        {
          name: 'EXガロンアームα',
          materials: [
            { name: '惨爪竜の強硬筋', quantity: 2 },
            { name: '惨爪竜の剛爪', quantity: 1 },
            { name: '惨爪竜の重牙', quantity: 2 },
            { name: 'モンスターの特濃', quantity: 4 },
          ],
          skill: [
            { name: '体術', level: 2 },
            { name: '見切り', level: 1 },
          ],
        },
        {
          name: 'EXガロンコイルα',
          materials: [
            { name: '惨爪竜の強硬筋', quantity: 2 },
            { name: '惨爪竜の厚鱗', quantity: 2 },
            { name: '惨爪竜の重牙', quantity: 1 },
            { name: '重竜骨', quantity: 4 },
          ],
          skill: [
            { name: '見切り', level: 3 },
            { name: '砥石使用高速化', level: 1 },
          ],
        },
        {
          name: 'EXガロングリーヴα',
          materials: [
            { name: '惨爪竜の強硬筋', quantity: 2 },
            { name: '惨爪竜の剛爪', quantity: 2 },
            { name: '惨爪竜の靭尾', quantity: 1 },
            { name: 'いにしえの巨龍骨', quantity: 1 },
          ],
          skill: [
            { name: '納刀術', level: 2 },
            { name: '見切り', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXガロンβ',
      armors: [
        {
          name: 'EXガロンヘルムβ',
          materials: [
            { name: '惨爪竜の強硬筋', quantity: 2 },
            { name: '惨爪竜の厚鱗', quantity: 1 },
            { name: '惨爪竜の重牙', quantity: 1 },
            { name: 'いびつな狂骨', quantity: 3 },
          ],
          skill: [
            { name: '裂傷耐性', level: 2 },
            { name: '見切り', level: 1 },
          ],
        },
        {
          name: 'EXガロンメイルβ',
          materials: [
            { name: '惨爪竜の強硬筋', quantity: 2 },
            { name: '惨爪竜の厚鱗', quantity: 2 },
            { name: '惨爪竜の靭尾', quantity: 1 },
            { name: 'カンタロスの斬羽', quantity: 2 },
          ],
          skill: [{ name: '砥石使用高速化', level: 2 }],
        },
        {
          name: 'EXガロンアームβ',
          materials: [
            { name: '惨爪竜の強硬筋', quantity: 2 },
            { name: '惨爪竜の剛爪', quantity: 1 },
            { name: '惨爪竜の重牙', quantity: 2 },
            { name: 'モンスターの特濃', quantity: 4 },
          ],
          skill: [
            { name: '体術', level: 1 },
            { name: '見切り', level: 1 },
          ],
        },
        {
          name: 'EXガロンコイルβ',
          materials: [
            { name: '惨爪竜の強硬筋', quantity: 2 },
            { name: '惨爪竜の厚鱗', quantity: 2 },
            { name: '惨爪竜の重牙', quantity: 1 },
            { name: '重竜骨', quantity: 4 },
          ],
          skill: [{ name: '見切り', level: 2 }],
        },
        {
          name: 'EXガロングリーヴβ',
          materials: [
            { name: '惨爪竜の強硬筋', quantity: 2 },
            { name: '惨爪竜の剛爪', quantity: 2 },
            { name: '惨爪竜の靭尾', quantity: 1 },
            { name: 'いにしえの巨龍骨', quantity: 1 },
          ],
          skill: [
            { name: '納刀術', level: 1 },
            { name: '見切り', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXデスガロンα',
      armors: [
        {
          name: 'EXデスガロンヘルムα',
          materials: [
            { name: '兇爪竜の強硬筋', quantity: 3 },
            { name: '兇爪竜の剛爪', quantity: 3 },
            { name: '兇爪竜の靭尾', quantity: 1 },
            { name: '兇爪竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '力の解放', level: 2 },
            { name: '整備', level: 1 },
          ],
        },
        {
          name: 'EXデスガロンメイルα',
          materials: [
            { name: '兇爪竜の強硬筋', quantity: 3 },
            { name: '兇爪竜の剛爪', quantity: 2 },
            { name: '兇爪竜の重牙', quantity: 2 },
            { name: 'カンタロスの斬羽', quantity: 4 },
          ],
          skill: [
            { name: '見切り', level: 3 },
            { name: '龍耐性', level: 2 },
          ],
        },
        {
          name: 'EXデスガロンアームα',
          materials: [
            { name: '兇爪竜の強硬筋', quantity: 3 },
            { name: '兇爪竜の厚鱗', quantity: 3 },
            { name: '兇爪竜の重牙', quantity: 2 },
            { name: 'ギルオスの厚鱗', quantity: 4 },
          ],
          skill: [
            { name: '強化持続', level: 1 },
            { name: '龍属性攻撃強化', level: 2 },
          ],
        },
        {
          name: 'EXデスガロンコイルα',
          materials: [
            { name: '兇爪竜の強硬筋', quantity: 3 },
            { name: '兇爪竜の厚鱗', quantity: 2 },
            { name: '兇爪竜の重牙', quantity: 3 },
            { name: '剛竜骨', quantity: 4 },
          ],
          skill: [
            { name: '龍属性攻撃強化', level: 2 },
            { name: '力の解放', level: 1 },
          ],
        },
        {
          name: 'EXデスガロングリーヴα',
          materials: [
            { name: '兇爪竜の強硬筋', quantity: 3 },
            { name: '兇爪竜の厚鱗', quantity: 2 },
            { name: '兇爪竜の靭尾', quantity: 1 },
            { name: '強靭な爪', quantity: 3 },
          ],
          skill: [
            { name: '整備', level: 2 },
            { name: '強化持続', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXデスガロンβ',
      armors: [
        {
          name: 'EXデスガロンヘルムβ',
          materials: [
            { name: '兇爪竜の強硬筋', quantity: 3 },
            { name: '兇爪竜の剛爪', quantity: 3 },
            { name: '兇爪竜の靭尾', quantity: 1 },
            { name: '兇爪竜の天鱗', quantity: 1 },
          ],
          skill: [{ name: '力の解放', level: 2 }],
        },
        {
          name: 'EXデスガロンメイルβ',
          materials: [
            { name: '兇爪竜の強硬筋', quantity: 3 },
            { name: '兇爪竜の剛爪', quantity: 2 },
            { name: '兇爪竜の重牙', quantity: 2 },
            { name: 'カンタロスの斬羽', quantity: 4 },
          ],
          skill: [
            { name: '見切り', level: 2 },
            { name: '龍耐性', level: 1 },
          ],
        },
        {
          name: 'EXデスガロンアームβ',
          materials: [
            { name: '兇爪竜の強硬筋', quantity: 3 },
            { name: '兇爪竜の厚鱗', quantity: 3 },
            { name: '兇爪竜の重牙', quantity: 2 },
            { name: 'ギルオスの厚鱗', quantity: 4 },
          ],
          skill: [
            { name: '強化持続', level: 1 },
            { name: '龍属性攻撃強化', level: 1 },
          ],
        },
        {
          name: 'EXデスガロンコイルβ',
          materials: [
            { name: '兇爪竜の強硬筋', quantity: 3 },
            { name: '兇爪竜の厚鱗', quantity: 2 },
            { name: '兇爪竜の重牙', quantity: 3 },
            { name: '剛竜骨', quantity: 4 },
          ],
          skill: [{ name: '龍属性攻撃強化', level: 2 }],
        },
        {
          name: 'EXデスガロングリーヴβ',
          materials: [
            { name: '兇爪竜の強硬筋', quantity: 3 },
            { name: '兇爪竜の厚鱗', quantity: 2 },
            { name: '兇爪竜の靭尾', quantity: 1 },
            { name: '強靭な爪', quantity: 3 },
          ],
          skill: [{ name: '整備', level: 2 }],
        },
      ],
    },
    {
      name: 'EXキリンα',
      armors: [
        {
          name: 'EXキリンホーンα',
          materials: [
            { name: '幻獣の銀たてがみ', quantity: 3 },
            { name: '幻獣の特上皮', quantity: 1 },
            { name: '幻獣の剛蒼角', quantity: 2 },
            { name: '斬竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: 'ランナー', level: 2 },
            { name: '精霊の加護', level: 2 },
          ],
        },
        {
          name: 'EXキリンベストα',
          materials: [
            { name: '幻獣の銀たてがみ', quantity: 3 },
            { name: '幻獣の特上皮', quantity: 1 },
            { name: '幻獣の靭雷尾', quantity: 3 },
            { name: '砕竜の天殻', quantity: 1 },
          ],
          skill: [
            { name: '見切り', level: 3 },
            { name: '精霊の加護', level: 1 },
          ],
        },
        {
          name: 'EXキリンアームロングα',
          materials: [
            { name: '幻獣の銀たてがみ', quantity: 3 },
            { name: '幻獣の特上皮', quantity: 2 },
            { name: '幻獣の靭雷尾', quantity: 2 },
            { name: 'いにしえの巨龍骨', quantity: 1 },
          ],
          skill: [
            { name: '雷属性攻撃強化', level: 3 },
            { name: 'ランナー', level: 1 },
          ],
        },
        {
          name: 'EXキリンフープα',
          materials: [
            { name: '幻獣の銀たてがみ', quantity: 3 },
            { name: '幻獣の特上皮', quantity: 2 },
            { name: '古龍の浄血', quantity: 1 },
            { name: 'ピュアクリスタル', quantity: 1 },
          ],
          skill: [
            { name: '属性やられ耐性', level: 2 },
            { name: '属性解放/装填拡張', level: 1 },
          ],
        },
        {
          name: 'EXキリンレガースα',
          materials: [
            { name: '幻獣の銀たてがみ', quantity: 3 },
            { name: '幻獣の剛蒼角', quantity: 2 },
            { name: '幻獣の靭雷尾', quantity: 2 },
            { name: '古龍の大宝玉', quantity: 1 },
          ],
          skill: [
            { name: '属性解放/装填拡張', level: 2 },
            { name: '見切り', level: 2 },
          ],
        },
      ],
    },
    {
      name: 'EXキリンβ',
      armors: [
        {
          name: 'EXキリンホーンβ',
          materials: [
            { name: '幻獣の銀たてがみ', quantity: 3 },
            { name: '幻獣の特上皮', quantity: 1 },
            { name: '幻獣の剛蒼角', quantity: 2 },
            { name: '斬竜の天鱗', quantity: 1 },
          ],
          skill: [{ name: 'ランナー', level: 2 }],
        },
        {
          name: 'EXキリンベストβ',
          materials: [
            { name: '幻獣の銀たてがみ', quantity: 3 },
            { name: '幻獣の特上皮', quantity: 1 },
            { name: '幻獣の靭雷尾', quantity: 3 },
            { name: '砕竜の天殻', quantity: 1 },
          ],
          skill: [
            { name: '見切り', level: 2 },
            { name: '精霊の加護', level: 1 },
          ],
        },
        {
          name: 'EXキリンアームロングβ',
          materials: [
            { name: '幻獣の銀たてがみ', quantity: 3 },
            { name: '幻獣の特上皮', quantity: 2 },
            { name: '幻獣の靭雷尾', quantity: 2 },
            { name: 'いにしえの巨龍骨', quantity: 1 },
          ],
          skill: [{ name: '雷属性攻撃強化', level: 3 }],
        },
        {
          name: 'EXキリンフープβ',
          materials: [
            { name: '幻獣の銀たてがみ', quantity: 3 },
            { name: '幻獣の特上皮', quantity: 2 },
            { name: '古龍の浄血', quantity: 1 },
            { name: 'ピュアクリスタル', quantity: 1 },
          ],
          skill: [{ name: '属性やられ耐性', level: 2 }],
        },
        {
          name: 'EXキリンレガースβ',
          materials: [
            { name: '幻獣の銀たてがみ', quantity: 3 },
            { name: '幻獣の剛蒼角', quantity: 2 },
            { name: '幻獣の靭雷尾', quantity: 2 },
            { name: '古龍の大宝玉', quantity: 1 },
          ],
          skill: [{ name: '属性解放/装填拡張', level: 2 }],
        },
      ],
    },
    {
      name: 'EXクシャナα',
      armors: [
        {
          name: 'EXクシャナアンクα',
          materials: [
            { name: '鋼龍の重殻', quantity: 4 },
            { name: '鋼の厚龍鱗', quantity: 3 },
            { name: '鋼龍の剛爪', quantity: 1 },
            { name: '大竜玉', quantity: 1 },
          ],
          skill: [
            { name: '氷属性攻撃強化', level: 2 },
            { name: '回避性能', level: 2 },
          ],
        },
        {
          name: 'EXクシャナディールα',
          materials: [
            { name: '鋼龍の重殻', quantity: 4 },
            { name: '鋼龍の剛翼', quantity: 3 },
            { name: '鋼龍の靭尾', quantity: 2 },
            { name: '古龍の浄血', quantity: 6 },
          ],
          skill: [{ name: '匠', level: 3 }],
        },
        {
          name: 'EXクシャナハトゥーα',
          materials: [
            { name: '鋼龍の重殻', quantity: 4 },
            { name: '鋼龍の剛翼', quantity: 3 },
            { name: '鋼龍の剛角', quantity: 2 },
            { name: '古龍の大宝玉', quantity: 1 },
          ],
          skill: [{ name: '回避性能', level: 3 }],
        },
        {
          name: 'EXクシャナアンダα',
          materials: [
            { name: '鋼龍の重殻', quantity: 4 },
            { name: '鋼の厚龍鱗', quantity: 3 },
            { name: '鋼龍の剛角', quantity: 1 },
            { name: '琥珀色の重牙', quantity: 3 },
          ],
          skill: [
            { name: '氷属性攻撃強化', level: 3 },
            { name: '回避距離UP', level: 1 },
          ],
        },
        {
          name: 'EXクシャナペイルα',
          materials: [
            { name: '鋼龍の重殻', quantity: 4 },
            { name: '鋼龍の剛爪', quantity: 2 },
            { name: '鋼龍の靭尾', quantity: 1 },
            { name: '迅竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '回避距離UP', level: 2 },
            { name: '匠', level: 2 },
          ],
        },
      ],
    },
    {
      name: 'EXクシャナβ',
      armors: [
        {
          name: 'EXクシャナアンクβ',
          materials: [
            { name: '鋼龍の重殻', quantity: 4 },
            { name: '鋼の厚龍鱗', quantity: 3 },
            { name: '鋼龍の剛爪', quantity: 1 },
            { name: '大竜玉', quantity: 1 },
          ],
          skill: [
            { name: '氷属性攻撃強化', level: 2 },
            { name: '回避性能', level: 1 },
          ],
        },
        {
          name: 'EXクシャナディールβ',
          materials: [
            { name: '鋼龍の重殻', quantity: 4 },
            { name: '鋼龍の剛翼', quantity: 3 },
            { name: '鋼龍の靭尾', quantity: 2 },
            { name: '古龍の浄血', quantity: 6 },
          ],
          skill: [{ name: '匠', level: 2 }],
        },
        {
          name: 'EXクシャナハトゥーβ',
          materials: [
            { name: '鋼龍の重殻', quantity: 4 },
            { name: '鋼龍の剛翼', quantity: 3 },
            { name: '鋼龍の剛角', quantity: 2 },
            { name: '古龍の大宝玉', quantity: 1 },
          ],
          skill: [{ name: '回避性能', level: 2 }],
        },
        {
          name: 'EXクシャナアンダβ',
          materials: [
            { name: '鋼龍の重殻', quantity: 4 },
            { name: '鋼の厚龍鱗', quantity: 3 },
            { name: '鋼龍の剛角', quantity: 1 },
            { name: '琥珀色の重牙', quantity: 3 },
          ],
          skill: [{ name: '氷属性攻撃強化', level: 3 }],
        },
        {
          name: 'EXクシャナペイルβ',
          materials: [
            { name: '鋼龍の重殻', quantity: 4 },
            { name: '鋼龍の剛爪', quantity: 2 },
            { name: '鋼龍の靭尾', quantity: 1 },
            { name: '迅竜の天鱗', quantity: 1 },
          ],
          skill: [{ name: '回避距離UP', level: 2 }],
        },
      ],
    },
    {
      name: 'EXクルルα',
      armors: [
        {
          name: 'EXクルルヘルムα',
          materials: [
            { name: '掻鳥の厚皮', quantity: 2 },
            { name: '掻鳥の厚鱗', quantity: 1 },
            { name: '掻鳥の特大飾り羽', quantity: 1 },
            { name: 'ジャグラスの厚鱗', quantity: 2 },
          ],
          skill: [
            { name: 'スリンガー装填数UP', level: 2 },
            { name: '超会心', level: 1 },
          ],
        },
        {
          name: 'EXクルルメイルα',
          materials: [
            { name: '掻鳥の厚皮', quantity: 2 },
            { name: '掻鳥の特大飾り羽', quantity: 1 },
            { name: '掻鳥の巨大クチバシ', quantity: 1 },
            { name: 'ジャグラスの厚鱗', quantity: 1 },
          ],
          skill: [
            { name: 'スタミナ急速回復', level: 1 },
            { name: '見切り', level: 2 },
          ],
        },
        {
          name: 'EXクルルアームα',
          materials: [
            { name: '掻鳥の厚皮', quantity: 2 },
            { name: '掻鳥の厚鱗', quantity: 1 },
            { name: 'エルトライト鉱石', quantity: 3 },
          ],
          skill: [
            { name: '超会心', level: 1 },
            { name: '運搬の達人', level: 1 },
          ],
        },
        {
          name: 'EXクルルコイルα',
          materials: [
            { name: '掻鳥の厚皮', quantity: 2 },
            { name: '掻鳥の巨大クチバシ', quantity: 1 },
            { name: 'ジャグラスの厚鱗', quantity: 1 },
          ],
          skill: [
            { name: 'アイテム使用強化', level: 2 },
            { name: '見切り', level: 1 },
          ],
        },
        {
          name: 'EXクルルグリーヴα',
          materials: [
            { name: '掻鳥の厚皮', quantity: 2 },
            { name: '掻鳥の厚鱗', quantity: 1 },
            { name: 'ジャグラスの厚鱗', quantity: 2 },
          ],
          skill: [
            { name: '見切り', level: 2 },
            { name: 'アイテム使用強化', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXクルルβ',
      armors: [
        {
          name: 'EXクルルヘルム',
          materials: [
            { name: '掻鳥の厚皮', quantity: 2 },
            { name: '掻鳥の厚鱗', quantity: 1 },
            { name: '掻鳥の特大飾り羽', quantity: 1 },
            { name: 'ジャグラスの厚鱗', quantity: 2 },
          ],
          skill: [{ name: 'スリンガー装填数UP', level: 2 }],
        },
        {
          name: 'EXクルルメイル',
          materials: [
            { name: '掻鳥の厚皮', quantity: 2 },
            { name: '掻鳥の特大飾り羽', quantity: 1 },
            { name: '掻鳥の巨大クチバシ', quantity: 1 },
            { name: 'ジャグラスの厚鱗', quantity: 1 },
          ],
          skill: [
            { name: 'スタミナ急速回復', level: 1 },
            { name: '見切り', level: 1 },
          ],
        },
        {
          name: 'EXクルルアーム',
          materials: [
            { name: '掻鳥の厚皮', quantity: 2 },
            { name: '掻鳥の厚鱗', quantity: 1 },
            { name: 'エルトライト鉱石', quantity: 3 },
          ],
          skill: [{ name: '超会心', level: 1 }],
        },
        {
          name: 'EXクルルコイル',
          materials: [
            { name: '掻鳥の厚皮', quantity: 2 },
            { name: '掻鳥の巨大クチバシ', quantity: 1 },
            { name: 'ジャグラスの厚鱗', quantity: 1 },
          ],
          skill: [{ name: 'アイテム使用強化', level: 2 }],
        },
        {
          name: 'EXクルルグリーヴ',
          materials: [
            { name: '掻鳥の厚皮', quantity: 2 },
            { name: '掻鳥の厚鱗', quantity: 1 },
            { name: 'ジャグラスの厚鱗', quantity: 2 },
          ],
          skill: [
            { name: '見切り', level: 1 },
            { name: 'アイテム使用強化', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXジュラα',
      armors: [
        {
          name: 'EXジュラヘルム',
          materials: [
            { name: '泥魚竜の重殻', quantity: 1 },
            { name: '泥魚竜の重牙', quantity: 2 },
            { name: '泥魚竜の特上ヒレ', quantity: 1 },
            { name: '咬魚の鋼ヒゲ', quantity: 1 },
          ],
          skill: [
            { name: '力の解放', level: 2 },
            { name: '集中', level: 1 },
          ],
        },
        {
          name: 'EXジュラメイル',
          materials: [
            { name: '泥魚竜の重殻', quantity: 1 },
            { name: '泥魚竜の厚鱗', quantity: 2 },
            { name: '咬魚の厚皮', quantity: 2 },
          ],
          skill: [
            { name: '力の解放', level: 1 },
            { name: '水属性攻撃強化', level: 2 },
          ],
        },
        {
          name: 'EXジュラアーム',
          materials: [
            { name: '泥魚竜の重殻', quantity: 1 },
            { name: '泥魚竜の厚鱗', quantity: 1 },
            { name: '強竜骨', quantity: 2 },
          ],
          skill: [
            { name: '水属性攻撃強化', level: 2 },
            { name: '氷耐性', level: 1 },
          ],
        },
        {
          name: 'EXジュラコイル',
          materials: [
            { name: '泥魚竜の重殻', quantity: 1 },
            { name: '泥魚竜の厚鱗', quantity: 1 },
            { name: '特大水袋', quantity: 2 },
          ],
          skill: [
            { name: '氷耐性', level: 2 },
            { name: '力の解放', level: 1 },
          ],
        },
        {
          name: 'EXジュラグリーヴ',
          materials: [
            { name: '泥魚竜の重殻', quantity: 1 },
            { name: '泥魚竜の重牙', quantity: 1 },
            { name: '泥魚竜の特上ヒレ', quantity: 2 },
          ],
          skill: [
            { name: '集中', level: 2 },
            { name: '水属性攻撃強化', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXジュラβ',
      armors: [
        {
          name: 'EXジュラヘルムβ',
          materials: [
            { name: '泥魚竜の重殻', quantity: 1 },
            { name: '泥魚竜の重牙', quantity: 1 },
            { name: '泥魚竜の特上ヒレ', quantity: 1 },
            { name: '咬魚の鋼ヒゲ', quantity: 1 },
          ],
          skill: [
            { name: '力の解放', level: 1 },
            { name: '集中', level: 1 },
          ],
        },
        {
          name: 'EXジュラメイルβ',
          materials: [
            { name: '泥魚竜の重殻', quantity: 1 },
            { name: '泥魚竜の厚鱗', quantity: 2 },
            { name: '咬魚の厚皮', quantity: 2 },
          ],
          skill: [
            { name: '力の解放', level: 1 },
            { name: '水属性攻撃強化', level: 1 },
          ],
        },
        {
          name: 'EXジュラアームβ',
          materials: [
            { name: '泥魚竜の重殻', quantity: 1 },
            { name: '泥魚竜の厚鱗', quantity: 1 },
            { name: '強竜骨', quantity: 2 },
          ],
          skill: [{ name: '水属性攻撃強化', level: 2 }],
        },
        {
          name: 'EXジュラコイルβ',
          materials: [
            { name: '泥魚竜の重殻', quantity: 1 },
            { name: '泥魚竜の厚鱗', quantity: 1 },
            { name: '特大水袋', quantity: 2 },
          ],
          skill: [{ name: '氷耐性', level: 2 }],
        },
        {
          name: 'EXジュラグリーヴβ',
          materials: [
            { name: '泥魚竜の重殻', quantity: 1 },
            { name: '泥魚竜の重牙', quantity: 1 },
            { name: '泥魚竜の特上ヒレ', quantity: 2 },
          ],
          skill: [
            { name: '集中', level: 1 },
            { name: '水属性攻撃強化', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXジンオウα',
      armors: [
        {
          name: 'EXジンオウヘルムα',
          materials: [
            { name: '雷狼竜の雷電毛', quantity: 3 },
            { name: '雷狼竜の雷電殻', quantity: 2 },
            { name: '雷狼竜の剛角', quantity: 2 },
            { name: '雷狼竜の天玉', quantity: 1 },
          ],
          skill: [
            { name: '強化持続', level: 2 },
            { name: '超会心', level: 1 },
          ],
        },
        {
          name: 'EXジンオウメイルα',
          materials: [
            { name: '雷狼竜の雷電毛', quantity: 3 },
            { name: '雷狼竜の重殻', quantity: 2 },
            { name: '雷狼竜の剛爪', quantity: 2 },
            { name: '深緑の大骨', quantity: 3 },
          ],
          skill: [
            { name: '力の解放', level: 3 },
            { name: '通常弾・通常矢強化', level: 1 },
          ],
        },
        {
          name: 'EXジンオウアームα',
          materials: [
            { name: '雷狼竜の雷電毛', quantity: 3 },
            { name: '雷狼竜の重殻', quantity: 2 },
            { name: '雷狼竜の靭尾', quantity: 1 },
            { name: '超電雷光虫', quantity: 3 },
          ],
          skill: [
            { name: '回復速度', level: 2 },
            { name: '力の解放', level: 2 },
          ],
        },
        {
          name: 'EXジンオウコイルα',
          materials: [
            { name: '雷狼竜の雷電毛', quantity: 3 },
            { name: '雷狼竜の重殻', quantity: 2 },
            { name: '雷狼竜の剛角', quantity: 1 },
            { name: '森林の結晶', quantity: 3 },
          ],
          skill: [
            { name: '強化持続', level: 1 },
            { name: '雷属性攻撃強化', level: 2 },
          ],
        },
        {
          name: 'EXジンオウグリーヴα',
          materials: [
            { name: '雷狼竜の雷電毛', quantity: 3 },
            { name: '雷狼竜の剛爪', quantity: 2 },
            { name: '雷狼竜の雷電殻', quantity: 3 },
            { name: '超電雷光虫', quantity: 3 },
          ],
          skill: [
            { name: '雷属性攻撃強化', level: 3 },
            { name: '力の解放', level: 2 },
          ],
        },
      ],
    },
    {
      name: 'EXジンオウβ',
      armors: [
        {
          name: 'EXジンオウヘルムβ',
          materials: [
            { name: '雷狼竜の雷電毛', quantity: 3 },
            { name: '雷狼竜の雷電殻', quantity: 2 },
            { name: '雷狼竜の剛角', quantity: 2 },
            { name: '雷狼竜の天玉', quantity: 1 },
          ],
          skill: [
            { name: '強化持続', level: 1 },
            { name: '超会心', level: 1 },
          ],
        },
        {
          name: 'EXジンオウメイルβ',
          materials: [
            { name: '雷狼竜の雷電毛', quantity: 3 },
            { name: '雷狼竜の重殻', quantity: 2 },
            { name: '雷狼竜の剛爪', quantity: 2 },
            { name: '深緑の大骨', quantity: 3 },
          ],
          skill: [{ name: '力の解放', level: 3 }],
        },
        {
          name: 'EXジンオウアームβ',
          materials: [
            { name: '雷狼竜の雷電毛', quantity: 3 },
            { name: '雷狼竜の重殻', quantity: 2 },
            { name: '雷狼竜の靭尾', quantity: 1 },
            { name: '超電雷光虫', quantity: 3 },
          ],
          skill: [
            { name: '回復速度', level: 1 },
            { name: '力の解放', level: 2 },
          ],
        },
        {
          name: 'EXジンオウコイルβ',
          materials: [
            { name: '雷狼竜の雷電毛', quantity: 3 },
            { name: '雷狼竜の重殻', quantity: 2 },
            { name: '雷狼竜の剛角', quantity: 1 },
            { name: '森林の結晶', quantity: 3 },
          ],
          skill: [{ name: '強化持続', level: 1 }],
        },
        {
          name: 'EXジンオウグリーヴβ',
          materials: [
            { name: '雷狼竜の雷電毛', quantity: 3 },
            { name: '雷狼竜の剛爪', quantity: 2 },
            { name: '雷狼竜の雷電殻', quantity: 3 },
            { name: '超電雷光虫', quantity: 3 },
          ],
          skill: [
            { name: '雷属性攻撃強化', level: 1 },
            { name: '力の解放', level: 2 },
          ],
        },
      ],
    },
    {
      name: 'EXゴクオウα',
      armors: [
        {
          name: 'EXゴクオウヘルムα',
          materials: [
            { name: '獄狼竜の滅龍毛', quantity: 3 },
            { name: '獄狼竜の重殻', quantity: 2 },
            { name: '獄狼竜の剛角', quantity: 1 },
            { name: '蝕龍蟲', quantity: 5 },
          ],
          skill: [
            { name: '力の解放', level: 3 },
            { name: '耐震', level: 2 },
          ],
        },
        {
          name: 'EXゴクオウメイルα',
          materials: [
            { name: '獄狼竜の滅龍毛', quantity: 3 },
            { name: '獄狼竜の重殻', quantity: 2 },
            { name: '獄狼竜の靭尾', quantity: 1 },
            { name: '凍結された氷骨', quantity: 3 },
          ],
          skill: [
            { name: '風圧耐性', level: 3 },
            { name: 'ひるみ軽減', level: 2 },
          ],
        },
        {
          name: 'EXゴクオウアームα',
          materials: [
            { name: '獄狼竜の滅龍毛', quantity: 3 },
            { name: '獄狼竜の剛爪', quantity: 2 },
            { name: '獄狼竜の滅龍殻', quantity: 3 },
            { name: '大竜玉', quantity: 1 },
          ],
          skill: [
            { name: '破壊王', level: 2 },
            { name: '龍属性攻撃強化', level: 3 },
          ],
        },
        {
          name: 'EXゴクオウコイルα',
          materials: [
            { name: '獄狼竜の滅龍毛', quantity: 3 },
            { name: '獄狼竜の滅龍殻', quantity: 2 },
            { name: '獄狼竜の剛角', quantity: 2 },
            { name: '獄狼竜の天玉', quantity: 1 },
          ],
          skill: [
            { name: '力の解放', level: 3 },
            { name: '耳栓', level: 2 },
          ],
        },
        {
          name: 'EXゴクオウグリーヴα',
          materials: [
            { name: '獄狼竜の滅龍毛', quantity: 3 },
            { name: '獄狼竜の重殻', quantity: 2 },
            { name: '獄狼竜の剛爪', quantity: 2 },
            { name: '氷雪の結晶', quantity: 3 },
          ],
          skill: [
            { name: '集中', level: 2 },
            { name: '龍封力強化', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXゴクオウβ',
      armors: [
        {
          name: 'EXゴクオウヘルムβ',
          materials: [
            { name: '獄狼竜の滅龍毛', quantity: 3 },
            { name: '獄狼竜の重殻', quantity: 2 },
            { name: '獄狼竜の剛角', quantity: 1 },
            { name: '蝕龍蟲', quantity: 5 },
          ],
          skill: [
            { name: '力の解放', level: 3 },
            { name: '耐震', level: 1 },
          ],
        },
        {
          name: 'EXゴクオウメイルβ',
          materials: [
            { name: '獄狼竜の滅龍毛', quantity: 3 },
            { name: '獄狼竜の重殻', quantity: 2 },
            { name: '獄狼竜の靭尾', quantity: 1 },
            { name: '凍結された氷骨', quantity: 3 },
          ],
          skill: [
            { name: '風圧耐性', level: 3 },
            { name: 'ひるみ軽減', level: 1 },
          ],
        },
        {
          name: 'EXゴクオウアームβ',
          materials: [
            { name: '獄狼竜の滅龍毛', quantity: 3 },
            { name: '獄狼竜の剛爪', quantity: 2 },
            { name: '獄狼竜の滅龍殻', quantity: 3 },
            { name: '大竜玉', quantity: 1 },
          ],
          skill: [{ name: '破壊王', level: 2 }],
        },
        {
          name: 'EXゴクオウコイルβ',
          materials: [
            { name: '獄狼竜の滅龍毛', quantity: 3 },
            { name: '獄狼竜の滅龍殻', quantity: 2 },
            { name: '獄狼竜の剛角', quantity: 2 },
            { name: '獄狼竜の天玉', quantity: 1 },
          ],
          skill: [
            { name: '力の解放', level: 3 },
            { name: '耳栓', level: 1 },
          ],
        },
        {
          name: 'EXゴクオウグリーヴβ',
          materials: [
            { name: '獄狼竜の滅龍毛', quantity: 3 },
            { name: '獄狼竜の重殻', quantity: 2 },
            { name: '獄狼竜の剛爪', quantity: 2 },
            { name: '氷雪の結晶', quantity: 3 },
          ],
          skill: [{ name: '集中', level: 2 }],
        },
      ],
    },
    {
      name: 'EXゾラマグナα',
      armors: [
        {
          name: 'EXゾラマグナヘッドα',
          materials: [
            { name: '龍脈の強竜骨', quantity: 2 },
            { name: 'ひび割れた結晶', quantity: 3 },
            { name: '風化した岩骨', quantity: 3 },
            { name: '覇王の証', quantity: 1 },
          ],
          skill: [
            { name: 'ひるみ軽減', level: 1 },
            { name: '砲術', level: 2 },
          ],
        },
        {
          name: 'EXゾラマグナハイドα',
          materials: [
            { name: '龍脈の重竜骨', quantity: 3 },
            { name: '色あせた結晶', quantity: 3 },
            { name: '鮮やかな紅骨', quantity: 3 },
            { name: '覇王の証', quantity: 1 },
          ],
          skill: [
            { name: '耐震', level: 2 },
            { name: '砲術', level: 2 },
          ],
        },
        {
          name: 'EXゾラマグナクロウα',
          materials: [
            { name: '龍脈の剛竜骨', quantity: 4 },
            { name: '朽ちた結晶', quantity: 3 },
            { name: '草むした大骨', quantity: 3 },
            { name: '覇王の証', quantity: 1 },
          ],
          skill: [
            { name: 'ひるみ軽減', level: 2 },
            { name: '満足感', level: 1 },
          ],
        },
        {
          name: 'EXゾラマグナスパインα',
          materials: [
            { name: '龍脈の強竜骨', quantity: 2 },
            { name: '太古龍骨', quantity: 2 },
            { name: '古龍の浄血', quantity: 3 },
            { name: '覇王の証', quantity: 1 },
          ],
          skill: [
            { name: '耐震', level: 1 },
            { name: '砲術', level: 1 },
          ],
        },
        {
          name: 'EXゾラマグナフットα',
          materials: [
            { name: '龍脈の強竜骨', quantity: 2 },
            { name: 'ゆがんだ結晶', quantity: 3 },
            { name: '異形の狂骨', quantity: 3 },
            { name: '覇王の証', quantity: 1 },
          ],
          skill: [
            { name: '耳栓', level: 1 },
            { name: '匠', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXゾラマグナβ',
      armors: [
        {
          name: 'EXゾラマグナヘッドβ',
          materials: [
            { name: '龍脈の強竜骨', quantity: 2 },
            { name: 'ひび割れた結晶', quantity: 3 },
            { name: '風化した岩骨', quantity: 3 },
            { name: '覇王の証', quantity: 1 },
          ],
          skill: [{ name: 'ひるみ軽減', level: 1 }],
        },
        {
          name: 'EXゾラマグナハイドβ',
          materials: [
            { name: '龍脈の重竜骨', quantity: 3 },
            { name: '色あせた結晶', quantity: 3 },
            { name: '鮮やかな紅骨', quantity: 3 },
            { name: '覇王の証', quantity: 1 },
          ],
          skill: [{ name: '耐震', level: 2 }],
        },
        {
          name: 'EXゾラマグナクロウβ',
          materials: [
            { name: '龍脈の剛竜骨', quantity: 4 },
            { name: '朽ちた結晶', quantity: 3 },
            { name: '草むした大骨', quantity: 3 },
            { name: '覇王の証', quantity: 1 },
          ],
          skill: [{ name: 'ひるみ軽減', level: 2 }],
        },
        {
          name: 'EXゾラマグナスパインβ',
          materials: [
            { name: '龍脈の強竜骨', quantity: 2 },
            { name: '太古龍骨', quantity: 2 },
            { name: '古龍の浄血', quantity: 3 },
            { name: '覇王の証', quantity: 1 },
          ],
          skill: [{ name: '耐震', level: 1 }],
        },
        {
          name: 'EXゾラマグナフットβ',
          materials: [
            { name: '龍脈の強竜骨', quantity: 2 },
            { name: 'ゆがんだ結晶', quantity: 3 },
            { name: '異形の狂骨', quantity: 3 },
            { name: '覇王の証', quantity: 1 },
          ],
          skill: [{ name: '耳栓', level: 1 }],
        },
      ],
    },
    {
      name: 'EXツィツィα',
      armors: [
        {
          name: 'EXツィツィヘルムα',
          materials: [
            { name: '眩鳥の厚皮', quantity: 2 },
            { name: '眩鳥の剛爪', quantity: 1 },
            { name: '眩鳥の輝光膜', quantity: 1 },
            { name: 'シャムオスの厚鱗', quantity: 2 },
          ],
          skill: [
            { name: '属性解放/装填拡張', level: 1 },
            { name: '気絶耐性', level: 1 },
          ],
        },
        {
          name: 'EXツィツィメイルα',
          materials: [
            { name: '眩鳥の厚皮', quantity: 2 },
            { name: '眩鳥の厚鱗', quantity: 1 },
            { name: '眩鳥の輝光膜', quantity: 1 },
            { name: 'シャムオスの厚鱗', quantity: 1 },
          ],
          skill: [
            { name: '体術', level: 2 },
            { name: '水属性攻撃強化', level: 2 },
          ],
        },
        {
          name: 'EXツィツィアームα',
          materials: [
            { name: '眩鳥の厚皮', quantity: 2 },
            { name: '眩鳥の厚鱗', quantity: 1 },
            { name: '眩鳥の輝光膜', quantity: 1 },
            { name: 'デプスライト鉱石', quantity: 2 },
          ],
          skill: [
            { name: '気絶耐性', level: 2 },
            { name: '広域化', level: 2 },
          ],
        },
        {
          name: 'EXツィツィコイルα',
          materials: [
            { name: '眩鳥の厚皮', quantity: 2 },
            { name: '眩鳥の厚鱗', quantity: 1 },
            { name: '眩鳥の剛爪', quantity: 1 },
            { name: 'シャムオスの厚鱗', quantity: 1 },
          ],
          skill: [
            { name: '広域化', level: 2 },
            { name: '水属性攻撃強化', level: 2 },
          ],
        },
        {
          name: 'EXツィツィグリーヴα',
          materials: [
            { name: '眩鳥の厚皮', quantity: 2 },
            { name: '眩鳥の厚鱗', quantity: 1 },
            { name: '眩鳥の剛爪', quantity: 1 },
            { name: 'デプスライト鉱石', quantity: 2 },
          ],
          skill: [
            { name: '睡眠耐性', level: 2 },
            { name: '広域化', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXツィツィβ',
      armors: [
        {
          name: 'EXツィツィヘルムβ',
          materials: [
            { name: '眩鳥の厚皮', quantity: 2 },
            { name: '眩鳥の剛爪', quantity: 1 },
            { name: '眩鳥の輝光膜', quantity: 1 },
            { name: 'シャムオスの厚鱗', quantity: 2 },
          ],
          skill: [{ name: '属性解放/装填拡張', level: 1 }],
        },
        {
          name: 'EXツィツィメイルβ',
          materials: [
            { name: '眩鳥の厚皮', quantity: 2 },
            { name: '眩鳥の厚鱗', quantity: 1 },
            { name: '眩鳥の輝光膜', quantity: 1 },
            { name: 'シャムオスの厚鱗', quantity: 1 },
          ],
          skill: [
            { name: '体術', level: 1 },
            { name: '水属性攻撃強化', level: 1 },
          ],
        },
        {
          name: 'EXツィツィアームβ',
          materials: [
            { name: '眩鳥の厚皮', quantity: 2 },
            { name: '眩鳥の厚鱗', quantity: 1 },
            { name: '眩鳥の輝光膜', quantity: 1 },
            { name: 'デプスライト鉱石', quantity: 2 },
          ],
          skill: [
            { name: '気絶耐性', level: 2 },
            { name: '広域化', level: 1 },
          ],
        },
        {
          name: 'EXツィツィコイルβ',
          materials: [
            { name: '眩鳥の厚皮', quantity: 2 },
            { name: '眩鳥の厚鱗', quantity: 1 },
            { name: '眩鳥の剛爪', quantity: 1 },
            { name: 'シャムオスの厚鱗', quantity: 1 },
          ],
          skill: [{ name: '広域化', level: 2 }],
        },
        {
          name: 'EXツィツィグリーヴβ',
          materials: [
            { name: '眩鳥の厚皮', quantity: 2 },
            { name: '眩鳥の厚鱗', quantity: 1 },
            { name: '眩鳥の剛爪', quantity: 1 },
            { name: 'デプスライト鉱石', quantity: 2 },
          ],
          skill: [
            { name: '睡眠耐性', level: 1 },
            { name: '広域化', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXディアブロα',
      armors: [
        {
          name: 'EXディアブロヘルムα',
          materials: [
            { name: '角竜の重甲', quantity: 2 },
            { name: '角竜の重殻', quantity: 1 },
            { name: '堅牢なねじれた角', quantity: 1 },
            { name: '大竜玉', quantity: 1 },
          ],
          skill: [
            { name: '抜刀術【技】', level: 2 },
            { name: 'KO術', level: 1 },
          ],
        },
        {
          name: 'EXディアブロメイルα',
          materials: [
            { name: '角竜の重甲', quantity: 2 },
            { name: '角竜の重殻', quantity: 2 },
            { name: '角竜の延髄', quantity: 2 },
            { name: '重竜骨', quantity: 2 },
          ],
          skill: [
            { name: 'KO術', level: 2 },
            { name: '火事場力', level: 2 },
          ],
        },
        {
          name: 'EXディアブロアームα',
          materials: [
            { name: '角竜の重甲', quantity: 2 },
            { name: '角竜の重殻', quantity: 2 },
            { name: '角竜の重尾甲', quantity: 2 },
            { name: 'ケストドンの重殻', quantity: 2 },
          ],
          skill: [
            { name: '火事場力', level: 3 },
            { name: '耐震', level: 1 },
          ],
        },
        {
          name: 'EXディアブロコイルα',
          materials: [
            { name: '角竜の重甲', quantity: 2 },
            { name: '角竜の重殻', quantity: 1 },
            { name: '堅牢なねじれた角', quantity: 1 },
            { name: 'ケストドンの重殻', quantity: 3 },
          ],
          skill: [
            { name: 'ランナー', level: 2 },
            { name: '抜刀術【技】', level: 1 },
          ],
        },
        {
          name: 'EXディアブログリーヴα',
          materials: [
            { name: '角竜の重甲', quantity: 1 },
            { name: '角竜の重殻', quantity: 1 },
            { name: '角竜の重尾甲', quantity: 1 },
            { name: '重竜骨', quantity: 5 },
          ],
          skill: [
            { name: '耐震', level: 2 },
            { name: 'KO術', level: 2 },
          ],
        },
      ],
    },
    {
      name: 'EXディアブロβ',
      armors: [
        {
          name: 'EXディアブロヘルムβ',
          materials: [
            { name: '角竜の重甲', quantity: 2 },
            { name: '角竜の重殻', quantity: 1 },
            { name: '堅牢なねじれた角', quantity: 1 },
            { name: '大竜玉', quantity: 1 },
          ],
          skill: [{ name: '抜刀術【技】', level: 2 }],
        },
        {
          name: 'EXディアブロメイルβ',
          materials: [
            { name: '角竜の重甲', quantity: 2 },
            { name: '角竜の重殻', quantity: 2 },
            { name: '角竜の延髄', quantity: 2 },
            { name: '重竜骨', quantity: 2 },
          ],
          skill: [
            { name: 'KO術', level: 2 },
            { name: '火事場力', level: 1 },
          ],
        },
        {
          name: 'EXディアブロアームβ',
          materials: [
            { name: '角竜の重甲', quantity: 2 },
            { name: '角竜の重殻', quantity: 2 },
            { name: '角竜の重尾甲', quantity: 2 },
            { name: 'ケストドンの重殻', quantity: 2 },
          ],
          skill: [
            { name: '火事場力', level: 2 },
            { name: '耐震', level: 1 },
          ],
        },
        {
          name: 'EXディアブロコイルβ',
          materials: [
            { name: '角竜の重甲', quantity: 2 },
            { name: '角竜の重殻', quantity: 1 },
            { name: '堅牢なねじれた角', quantity: 1 },
            { name: 'ケストドンの重殻', quantity: 3 },
          ],
          skill: [{ name: 'ランナー', level: 2 }],
        },
        {
          name: 'EXディアブログリーヴβ',
          materials: [
            { name: '角竜の重甲', quantity: 1 },
            { name: '角竜の重殻', quantity: 1 },
            { name: '角竜の重尾甲', quantity: 1 },
            { name: '重竜骨', quantity: 5 },
          ],
          skill: [
            { name: '耐震', level: 2 },
            { name: 'KO術', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXディアネロα',
      armors: [
        {
          name: 'EXディアネロヘルムα',
          materials: [
            { name: '黒角竜の重甲', quantity: 3 },
            { name: '黒角竜の重殻', quantity: 2 },
            { name: '堅牢な黒巻き角', quantity: 1 },
            { name: '剛竜骨', quantity: 2 },
          ],
          skill: [
            { name: '破壊王', level: 2 },
            { name: '逆恨み', level: 1 },
          ],
        },
        {
          name: 'EXディアネロメイルα',
          materials: [
            { name: '黒角竜の重甲', quantity: 3 },
            { name: '黒角竜の重殻', quantity: 1 },
            { name: '堅牢な黒巻き角', quantity: 1 },
            { name: '剛竜骨', quantity: 4 },
          ],
          skill: [
            { name: '逆恨み', level: 2 },
            { name: 'ランナー', level: 1 },
          ],
        },
        {
          name: 'EXディアネロアームα',
          materials: [
            { name: '黒角竜の重甲', quantity: 3 },
            { name: '黒角竜の重殻', quantity: 2 },
            { name: '角竜の重尾甲', quantity: 2 },
            { name: '強靭な爪', quantity: 3 },
          ],
          skill: [
            { name: 'KO術', level: 2 },
            { name: 'ランナー', level: 1 },
          ],
        },
        {
          name: 'EXディアネロコイルα',
          materials: [
            { name: '黒角竜の重甲', quantity: 3 },
            { name: '黒角竜の重殻', quantity: 1 },
            { name: '堅牢な黒巻き角', quantity: 1 },
            { name: '大地を穿つ剛角', quantity: 1 },
          ],
          skill: [
            { name: 'KO術', level: 2 },
            { name: '破壊王', level: 1 },
          ],
        },
        {
          name: 'EXディアネログリーヴα',
          materials: [
            { name: '黒角竜の重甲', quantity: 3 },
            { name: '黒角竜の重殻', quantity: 2 },
            { name: '角竜の重尾甲', quantity: 1 },
            { name: '大竜玉', quantity: 1 },
          ],
          skill: [
            { name: '逆恨み', level: 2 },
            { name: 'KO術', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXディアネロβ',
      armors: [
        {
          name: 'EXディアネロヘルムβ',
          materials: [
            { name: '黒角竜の重甲', quantity: 3 },
            { name: '黒角竜の重殻', quantity: 2 },
            { name: '堅牢な黒巻き角', quantity: 1 },
            { name: '剛竜骨', quantity: 2 },
          ],
          skill: [{ name: '破壊王', level: 2 }],
        },
        {
          name: 'EXディアネロメイルβ',
          materials: [
            { name: '黒角竜の重甲', quantity: 3 },
            { name: '黒角竜の重殻', quantity: 1 },
            { name: '堅牢な黒巻き角', quantity: 1 },
            { name: '剛竜骨', quantity: 4 },
          ],
          skill: [
            { name: '逆恨み', level: 1 },
            { name: 'ランナー', level: 1 },
          ],
        },
        {
          name: 'EXディアネロアームβ',
          materials: [
            { name: '黒角竜の重甲', quantity: 3 },
            { name: '黒角竜の重殻', quantity: 2 },
            { name: '角竜の重尾甲', quantity: 2 },
            { name: '強靭な爪', quantity: 3 },
          ],
          skill: [
            { name: 'KO術', level: 1 },
            { name: 'ランナー', level: 1 },
          ],
        },
        {
          name: 'EXディアネロコイルβ',
          materials: [
            { name: '黒角竜の重甲', quantity: 3 },
            { name: '黒角竜の重殻', quantity: 1 },
            { name: '堅牢な黒巻き角', quantity: 1 },
            { name: '大地を穿つ剛角', quantity: 1 },
          ],
          skill: [{ name: 'KO術', level: 2 }],
        },
        {
          name: 'EXディアネログリーヴβ',
          materials: [
            { name: '黒角竜の重甲', quantity: 3 },
            { name: '黒角竜の重殻', quantity: 2 },
            { name: '角竜の重尾甲', quantity: 1 },
            { name: '大竜玉', quantity: 1 },
          ],
          skill: [{ name: '逆恨み', level: 2 }],
        },
      ],
    },
    {
      name: 'EXレックスα',
      armors: [
        {
          name: 'EXレックスヘルムα',
          materials: [
            { name: '轟竜の重殻', quantity: 2 },
            { name: '轟竜の重牙', quantity: 1 },
            { name: '轟竜の剛爪', quantity: 1 },
            { name: '大竜玉', quantity: 1 },
          ],
          skill: [
            { name: '攻撃', level: 2 },
            { name: '耳栓', level: 2 },
          ],
        },
        {
          name: 'EXレックスメイルα',
          materials: [
            { name: '轟竜の重殻', quantity: 2 },
            { name: '轟竜の剛爪', quantity: 2 },
            { name: '轟竜の靭尾', quantity: 1 },
            { name: 'ランゴスタの斬羽', quantity: 3 },
          ],
          skill: [
            { name: '耳栓', level: 2 },
            { name: '満足感', level: 1 },
          ],
        },
        {
          name: 'EXレックスアームα',
          materials: [
            { name: '轟竜の重殻', quantity: 2 },
            { name: '轟竜の厚鱗', quantity: 1 },
            { name: '轟竜の重牙', quantity: 2 },
            { name: '強靭な爪', quantity: 3 },
          ],
          skill: [
            { name: '早食い', level: 2 },
            { name: '攻撃', level: 2 },
          ],
        },
        {
          name: 'EXレックスコイルα',
          materials: [
            { name: '轟竜の重殻', quantity: 2 },
            { name: '轟竜の厚鱗', quantity: 2 },
            { name: '轟竜の重牙', quantity: 1 },
            { name: '頑強な重骨', quantity: 5 },
          ],
          skill: [
            { name: '耳栓', level: 1 },
            { name: '満足感', level: 1 },
          ],
        },
        {
          name: 'EXレックスグリーヴα',
          materials: [
            { name: '轟竜の重殻', quantity: 2 },
            { name: '轟竜の厚鱗', quantity: 2 },
            { name: '轟竜の剛爪', quantity: 1 },
            { name: '重竜骨', quantity: 3 },
          ],
          skill: [
            { name: '早食い', level: 1 },
            { name: '満足感', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXレックスβ',
      armors: [
        {
          name: 'EXレックスヘルムβ',
          materials: [
            { name: '轟竜の重殻', quantity: 2 },
            { name: '轟竜の重牙', quantity: 1 },
            { name: '轟竜の剛爪', quantity: 1 },
            { name: '大竜玉', quantity: 1 },
          ],
          skill: [
            { name: '攻撃', level: 2 },
            { name: '耳栓', level: 1 },
          ],
        },
        {
          name: 'EXレックスメイルβ',
          materials: [
            { name: '轟竜の重殻', quantity: 2 },
            { name: '轟竜の剛爪', quantity: 2 },
            { name: '轟竜の靭尾', quantity: 1 },
            { name: 'ランゴスタの斬羽', quantity: 3 },
          ],
          skill: [{ name: '耳栓', level: 2 }],
        },
        {
          name: 'EXレックスアームβ',
          materials: [
            { name: '轟竜の重殻', quantity: 2 },
            { name: '轟竜の厚鱗', quantity: 1 },
            { name: '轟竜の重牙', quantity: 2 },
            { name: '強靭な爪', quantity: 3 },
          ],
          skill: [
            { name: '早食い', level: 2 },
            { name: '攻撃', level: 1 },
          ],
        },
        {
          name: 'EXレックスコイルβ',
          materials: [
            { name: '轟竜の重殻', quantity: 2 },
            { name: '轟竜の厚鱗', quantity: 2 },
            { name: '轟竜の重牙', quantity: 1 },
            { name: '頑強な重骨', quantity: 5 },
          ],
          skill: [{ name: '耳栓', level: 1 }],
        },
        {
          name: 'EXレックスグリーヴβ',
          materials: [
            { name: '轟竜の重殻', quantity: 2 },
            { name: '轟竜の厚鱗', quantity: 2 },
            { name: '轟竜の剛爪', quantity: 1 },
            { name: '重竜骨', quantity: 3 },
          ],
          skill: [{ name: '早食い', level: 1 }],
        },
      ],
    },
    {
      name: 'EXレックスロアα',
      armors: [
        {
          name: 'EXレックスロアヘルムα',
          materials: [
            { name: '黒轟竜の重殻', quantity: 3 },
            { name: '黒轟竜の厚鱗', quantity: 2 },
            { name: '黒轟竜の重牙', quantity: 2 },
            { name: 'ゆがんだ結晶', quantity: 5 },
          ],
          skill: [
            { name: '攻撃', level: 3 },
            { name: '満足感', level: 1 },
          ],
        },
        {
          name: 'EXレックスロアメイルα',
          materials: [
            { name: '黒轟竜の重殻', quantity: 3 },
            { name: '黒轟竜の厚鱗', quantity: 2 },
            { name: '黒轟竜の重牙', quantity: 3 },
            { name: '龍脈に侵されし狂骨', quantity: 3 },
          ],
          skill: [
            { name: '攻撃', level: 3 },
            { name: '弱点特効', level: 1 },
          ],
        },
        {
          name: 'EXレックスロアアームα',
          materials: [
            { name: '黒轟竜の重殻', quantity: 3 },
            { name: '黒轟竜の厚鱗', quantity: 2 },
            { name: '黒轟竜の剛爪', quantity: 2 },
            { name: '異形の狂骨', quantity: 3 },
          ],
          skill: [
            { name: '体力増強', level: 3 },
            { name: '攻撃', level: 2 },
          ],
        },
        {
          name: 'EXレックスロアコイルα',
          materials: [
            { name: '黒轟竜の重殻', quantity: 3 },
            { name: '黒轟竜の剛爪', quantity: 3 },
            { name: '轟竜の靭尾', quantity: 1 },
            { name: '黄昏の結晶', quantity: 3 },
          ],
          skill: [
            { name: '体力回復量UP', level: 3 },
            { name: '弱点特効', level: 1 },
          ],
        },
        {
          name: 'EXレックスロアグリーヴα',
          materials: [
            { name: '黒轟竜の重殻', quantity: 3 },
            { name: '黒轟竜の重牙', quantity: 2 },
            { name: '黒轟竜の剛爪', quantity: 2 },
            { name: '轟竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '挑戦者', level: 3 },
            { name: '弱点特効', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXレックスロアβ',
      armors: [
        {
          name: 'EXレックスロアヘルムβ',
          materials: [
            { name: '黒轟竜の重殻', quantity: 3 },
            { name: '黒轟竜の厚鱗', quantity: 2 },
            { name: '黒轟竜の重牙', quantity: 2 },
            { name: 'ゆがんだ結晶', quantity: 5 },
          ],
          skill: [
            { name: '攻撃', level: 2 },
            { name: '満足感', level: 1 },
          ],
        },
        {
          name: 'EXレックスロアメイルβ',
          materials: [
            { name: '黒轟竜の重殻', quantity: 3 },
            { name: '黒轟竜の厚鱗', quantity: 2 },
            { name: '黒轟竜の重牙', quantity: 3 },
            { name: '龍脈に侵されし狂骨', quantity: 3 },
          ],
          skill: [
            { name: '攻撃', level: 2 },
            { name: '弱点特効', level: 1 },
          ],
        },
        {
          name: 'EXレックスロアアームβ',
          materials: [
            { name: '黒轟竜の重殻', quantity: 3 },
            { name: '黒轟竜の厚鱗', quantity: 2 },
            { name: '黒轟竜の剛爪', quantity: 2 },
            { name: '異形の狂骨', quantity: 3 },
          ],
          skill: [
            { name: '体力増強', level: 2 },
            { name: '攻撃', level: 2 },
          ],
        },
        {
          name: 'EXレックスロアコイルβ',
          materials: [
            { name: '黒轟竜の重殻', quantity: 3 },
            { name: '黒轟竜の剛爪', quantity: 3 },
            { name: '轟竜の靭尾', quantity: 1 },
            { name: '黄昏の結晶', quantity: 3 },
          ],
          skill: [
            { name: '体力回復量UP', level: 2 },
            { name: '弱点特効', level: 1 },
          ],
        },
        {
          name: 'EXレックスロアグリーヴβ',
          materials: [
            { name: '黒轟竜の重殻', quantity: 3 },
            { name: '黒轟竜の重牙', quantity: 2 },
            { name: '黒轟竜の剛爪', quantity: 2 },
            { name: '轟竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '挑戦者', level: 2 },
            { name: '弱点特効', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXディノα',
      armors: [
        {
          name: 'EXディノヘルムα',
          materials: [
            { name: '斬竜の重殻', quantity: 2 },
            { name: '斬竜の重牙', quantity: 2 },
            { name: '斬竜の獄炎状殻', quantity: 1 },
            { name: '斬竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '集中', level: 2 },
            { name: '匠', level: 1 },
          ],
        },
        {
          name: 'EXディノメイルα',
          materials: [
            { name: '斬竜の重殻', quantity: 2 },
            { name: '斬竜の重牙', quantity: 1 },
            { name: '赤熱した熔炉嚢', quantity: 2 },
            { name: '獄炎石', quantity: 2 },
          ],
          skill: [
            { name: '強化持続', level: 2 },
            { name: '渾身', level: 1 },
          ],
        },
        {
          name: 'EXディノアームα',
          materials: [
            { name: '斬竜の重殻', quantity: 2 },
            { name: '斬竜の獄炎状殻', quantity: 2 },
            { name: '斬竜の断剣尾', quantity: 1 },
            { name: 'ピュアクリスタル', quantity: 1 },
          ],
          skill: [
            { name: '渾身', level: 2 },
            { name: '集中', level: 1 },
          ],
        },
        {
          name: 'EXディノコイルα',
          materials: [
            { name: '斬竜の重殻', quantity: 2 },
            { name: '斬竜の厚鱗', quantity: 2 },
            { name: '斬竜の重牙', quantity: 1 },
            { name: '赤熱した熔炉嚢', quantity: 2 },
          ],
          skill: [
            { name: '渾身', level: 2 },
            { name: '通常弾・通常矢強化', level: 1 },
          ],
        },
        {
          name: 'EXディノグリーヴα',
          materials: [
            { name: '斬竜の重殻', quantity: 2 },
            { name: '斬竜の厚鱗', quantity: 1 },
            { name: '斬竜の獄炎状殻', quantity: 2 },
            { name: '赤熱した熔炉嚢', quantity: 2 },
          ],
          skill: [
            { name: '匠', level: 2 },
            { name: '熱ダメージ無効', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXディノβ',
      armors: [
        {
          name: 'EXディノヘルムβ',
          materials: [
            { name: '斬竜の重殻', quantity: 2 },
            { name: '斬竜の重牙', quantity: 2 },
            { name: '斬竜の獄炎状殻', quantity: 1 },
            { name: '斬竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '集中', level: 1 },
            { name: '匠', level: 1 },
          ],
        },
        {
          name: 'EXディノメイルβ',
          materials: [
            { name: '斬竜の重殻', quantity: 2 },
            { name: '斬竜の重牙', quantity: 1 },
            { name: '赤熱した熔炉嚢', quantity: 2 },
            { name: '獄炎石', quantity: 2 },
          ],
          skill: [
            { name: '強化持続', level: 1 },
            { name: '渾身', level: 1 },
          ],
        },
        {
          name: 'EXディノアームβ',
          materials: [
            { name: '斬竜の重殻', quantity: 2 },
            { name: '斬竜の獄炎状殻', quantity: 2 },
            { name: '斬竜の断剣尾', quantity: 1 },
            { name: 'ピュアクリスタル', quantity: 1 },
          ],
          skill: [
            { name: '渾身', level: 1 },
            { name: '集中', level: 1 },
          ],
        },
        {
          name: 'EXディノコイルβ',
          materials: [
            { name: '斬竜の重殻', quantity: 2 },
            { name: '斬竜の厚鱗', quantity: 2 },
            { name: '斬竜の重牙', quantity: 1 },
            { name: '赤熱した熔炉嚢', quantity: 2 },
          ],
          skill: [{ name: '渾身', level: 2 }],
        },
        {
          name: 'EXディノグリーヴβ',
          materials: [
            { name: '斬竜の重殻', quantity: 2 },
            { name: '斬竜の厚鱗', quantity: 1 },
            { name: '斬竜の獄炎状殻', quantity: 2 },
            { name: '赤熱した熔炉嚢', quantity: 2 },
          ],
          skill: [{ name: '匠', level: 2 }],
        },
      ],
    },
    {
      name: 'EXディノイエロα',
      armors: [
        {
          name: 'EXディノイエロヘルムα',
          materials: [
            { name: '硫斬竜の重殻', quantity: 3 },
            { name: '硫斬竜の厚鱗', quantity: 2 },
            { name: '硫斬竜の剣山状殻', quantity: 3 },
            { name: '削られた硫晶片', quantity: 3 },
          ],
          skill: [
            { name: '渾身', level: 2 },
            { name: '瘴気耐性', level: 2 },
          ],
        },
        {
          name: 'EXディノイエロメイルα',
          materials: [
            { name: '硫斬竜の重殻', quantity: 3 },
            { name: '硫斬竜の重牙', quantity: 3 },
            { name: '硫斬竜の剣山状殻', quantity: 2 },
            { name: '斬竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '匠', level: 2 },
            { name: 'スタミナ急速回復', level: 1 },
          ],
        },
        {
          name: 'EXディノイエロアームα',
          materials: [
            { name: '硫斬竜の重殻', quantity: 3 },
            { name: '硫斬竜の重牙', quantity: 2 },
            { name: '削られた硫晶片', quantity: 2 },
            { name: '剛竜骨', quantity: 4 },
          ],
          skill: [
            { name: '気絶耐性', level: 2 },
            { name: '匠', level: 1 },
          ],
        },
        {
          name: 'EXディノイエロコイルα',
          materials: [
            { name: '硫斬竜の重殻', quantity: 3 },
            { name: '硫斬竜の厚鱗', quantity: 3 },
            { name: '硫斬竜の重牙', quantity: 2 },
            { name: '削られた硫晶片', quantity: 3 },
          ],
          skill: [
            { name: '匠', level: 2 },
            { name: '防御力DOWN耐性', level: 2 },
          ],
        },
        {
          name: 'EXディノイエログリーヴα',
          materials: [
            { name: '硫斬竜の重殻', quantity: 3 },
            { name: '硫斬竜の剣山状殻', quantity: 3 },
            { name: '硫斬竜の断剣尾', quantity: 1 },
            { name: '大竜玉', quantity: 1 },
          ],
          skill: [
            { name: '渾身', level: 2 },
            { name: 'スタミナ急速回復', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXディノイエロβ',
      armors: [
        {
          name: 'EXディノイエロヘルムβ',
          materials: [
            { name: '硫斬竜の重殻', quantity: 3 },
            { name: '硫斬竜の厚鱗', quantity: 2 },
            { name: '硫斬竜の剣山状殻', quantity: 3 },
            { name: '削られた硫晶片', quantity: 3 },
          ],
          skill: [
            { name: '渾身', level: 1 },
            { name: '瘴気耐性', level: 2 },
          ],
        },
        {
          name: 'EXディノイエロメイルβ',
          materials: [
            { name: '硫斬竜の重殻', quantity: 3 },
            { name: '硫斬竜の重牙', quantity: 3 },
            { name: '硫斬竜の剣山状殻', quantity: 2 },
            { name: '斬竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '匠', level: 1 },
            { name: 'スタミナ急速回復', level: 1 },
          ],
        },
        {
          name: 'EXディノイエロアームβ',
          materials: [
            { name: '硫斬竜の重殻', quantity: 3 },
            { name: '硫斬竜の重牙', quantity: 2 },
            { name: '削られた硫晶片', quantity: 2 },
            { name: '剛竜骨', quantity: 4 },
          ],
          skill: [{ name: '気絶耐性', level: 2 }],
        },
        {
          name: 'EXディノイエロコイルβ',
          materials: [
            { name: '硫斬竜の重殻', quantity: 3 },
            { name: '硫斬竜の厚鱗', quantity: 3 },
            { name: '硫斬竜の重牙', quantity: 2 },
            { name: '削られた硫晶片', quantity: 3 },
          ],
          skill: [{ name: '匠', level: 2 }],
        },
        {
          name: 'EXディノイエログリーヴβ',
          materials: [
            { name: '硫斬竜の重殻', quantity: 3 },
            { name: '硫斬竜の剣山状殻', quantity: 3 },
            { name: '硫斬竜の断剣尾', quantity: 1 },
            { name: '大竜玉', quantity: 1 },
          ],
          skill: [{ name: '渾身', level: 1 }],
        },
      ],
    },
    {
      name: 'EXカイザーα',
      armors: [
        {
          name: 'EXカイザークラウンα',
          materials: [
            { name: '炎王龍の重殻', quantity: 3 },
            { name: '炎王龍の大たてがみ', quantity: 2 },
            { name: '炎王龍の剛角', quantity: 2 },
            { name: '古龍の大宝玉', quantity: 1 },
          ],
          skill: [
            { name: '力の解放', level: 2 },
            { name: '見切り', level: 2 },
          ],
        },
        {
          name: 'EXカイザーメイルα',
          materials: [
            { name: '炎王龍の重殻', quantity: 3 },
            { name: '炎王龍の大たてがみ', quantity: 4 },
            { name: '炎王龍の靭尾', quantity: 1 },
            { name: '太古龍骨', quantity: 5 },
          ],
          skill: [
            { name: '力の解放', level: 1 },
            { name: '特殊射撃強化', level: 2 },
          ],
        },
        {
          name: 'EXカイザーアームα',
          materials: [
            { name: '炎王龍の重殻', quantity: 3 },
            { name: '獄炎の厚龍鱗', quantity: 3 },
            { name: '炎王龍の剛角', quantity: 1 },
            { name: '雷顎竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '弱点特効', level: 2 },
            { name: '熱ダメージ無効', level: 1 },
          ],
        },
        {
          name: 'EXカイザーコイルα',
          materials: [
            { name: '炎王龍の重殻', quantity: 3 },
            { name: '獄炎の厚龍鱗', quantity: 3 },
            { name: '炎龍の剛翼', quantity: 1 },
            { name: '古龍の浄血', quantity: 3 },
          ],
          skill: [
            { name: '爆破属性強化', level: 2 },
            { name: '弱点特効', level: 1 },
          ],
        },
        {
          name: 'EXカイザーグリーヴα',
          materials: [
            { name: '炎王龍の重殻', quantity: 3 },
            { name: '炎龍の剛爪', quantity: 2 },
            { name: '炎龍の剛翼', quantity: 2 },
            { name: '蛮顎竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '力の解放', level: 2 },
            { name: '爆破属性強化', level: 2 },
          ],
        },
      ],
    },
    {
      name: 'EXカイザーβ',
      armors: [
        {
          name: 'EXカイザークラウンβ',
          materials: [
            { name: '炎王龍の重殻', quantity: 3 },
            { name: '炎王龍の大たてがみ', quantity: 2 },
            { name: '炎王龍の剛角', quantity: 2 },
            { name: '古龍の大宝玉', quantity: 1 },
          ],
          skill: [
            { name: '力の解放', level: 1 },
            { name: '見切り', level: 2 },
          ],
        },
        {
          name: 'EXカイザーメイルβ',
          materials: [
            { name: '炎王龍の重殻', quantity: 3 },
            { name: '炎王龍の大たてがみ', quantity: 4 },
            { name: '炎王龍の靭尾', quantity: 1 },
            { name: '太古龍骨', quantity: 5 },
          ],
          skill: [{ name: '力の解放', level: 1 }],
        },
        {
          name: 'EXカイザーアームβ',
          materials: [
            { name: '炎王龍の重殻', quantity: 3 },
            { name: '獄炎の厚龍鱗', quantity: 3 },
            { name: '炎王龍の剛角', quantity: 1 },
            { name: '雷顎竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '弱点特効', level: 1 },
            { name: '熱ダメージ無効', level: 1 },
          ],
        },
        {
          name: 'EXカイザーコイルβ',
          materials: [
            { name: '炎王龍の重殻', quantity: 3 },
            { name: '獄炎の厚龍鱗', quantity: 3 },
            { name: '炎龍の剛翼', quantity: 1 },
            { name: '古龍の浄血', quantity: 3 },
          ],
          skill: [{ name: '爆破属性強化', level: 2 }],
        },
        {
          name: 'EXカイザーグリーヴβ',
          materials: [
            { name: '炎王龍の重殻', quantity: 3 },
            { name: '炎龍の剛爪', quantity: 2 },
            { name: '炎龍の剛翼', quantity: 2 },
            { name: '蛮顎竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '力の解放', level: 2 },
            { name: '爆破属性強化', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXギルオスα',
      armors: [
        {
          name: 'EXギルオスヘルムα',
          materials: [
            { name: '痺賊竜の厚皮', quantity: 2 },
            { name: '痺賊竜の重牙', quantity: 1 },
            { name: '濃縮麻痺袋', quantity: 1 },
            { name: 'いびつな狂骨', quantity: 2 },
          ],
          skill: [
            { name: '笛吹き名人', level: 2 },
            { name: '麻痺耐性', level: 1 },
          ],
        },
        {
          name: 'EXギルオスメイルα',
          materials: [
            { name: '痺賊竜の厚皮', quantity: 2 },
            { name: '痺賊竜の厚鱗', quantity: 2 },
            { name: '痺賊竜の重頭巾', quantity: 1 },
            { name: 'ギルオスの厚鱗', quantity: 2 },
          ],
          skill: [
            { name: '麻痺耐性', level: 2 },
            { name: '属性解放/装填拡張', level: 1 },
          ],
        },
        {
          name: 'EXギルオスアームα',
          materials: [
            { name: '痺賊竜の厚皮', quantity: 2 },
            { name: '痺賊竜の厚鱗', quantity: 2 },
            { name: '痺賊竜の重頭巾', quantity: 1 },
            { name: 'いびつな狂骨', quantity: 2 },
          ],
          skill: [
            { name: '属性解放/装填拡張', level: 1 },
            { name: '瘴気耐性', level: 2 },
          ],
        },
        {
          name: 'EXギルオスコイルα',
          materials: [
            { name: '痺賊竜の厚皮', quantity: 2 },
            { name: '痺賊竜の靭尾', quantity: 2 },
            { name: '濃縮麻痺袋', quantity: 1 },
            { name: 'ギルオスの厚鱗', quantity: 1 },
          ],
          skill: [
            { name: '瘴気環境適応', level: 1 },
            { name: '麻痺属性強化', level: 2 },
          ],
        },
        {
          name: 'EXギルオスグリーヴα',
          materials: [
            { name: '痺賊竜の厚皮', quantity: 2 },
            { name: '痺賊竜の重牙', quantity: 2 },
            { name: '痺賊竜の厚鱗', quantity: 2 },
            { name: 'ギルオスの厚鱗', quantity: 1 },
          ],
          skill: [
            { name: '麻痺属性強化', level: 2 },
            { name: '属性解放/装填拡張', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXギルオスβ',
      armors: [
        {
          name: 'EXギルオスヘルムβ',
          materials: [
            { name: '痺賊竜の厚皮', quantity: 2 },
            { name: '痺賊竜の重牙', quantity: 1 },
            { name: '濃縮麻痺袋', quantity: 1 },
            { name: 'いびつな狂骨', quantity: 2 },
          ],
          skill: [{ name: '笛吹き名人', level: 2 }],
        },
        {
          name: 'EXギルオスメイルβ',
          materials: [
            { name: '痺賊竜の厚皮', quantity: 2 },
            { name: '痺賊竜の厚鱗', quantity: 2 },
            { name: '痺賊竜の重頭巾', quantity: 1 },
            { name: 'ギルオスの厚鱗', quantity: 2 },
          ],
          skill: [{ name: '麻痺耐性', level: 2 }],
        },
        {
          name: 'EXギルオスアームβ',
          materials: [
            { name: '痺賊竜の厚皮', quantity: 2 },
            { name: '痺賊竜の厚鱗', quantity: 2 },
            { name: '痺賊竜の重頭巾', quantity: 1 },
            { name: 'いびつな狂骨', quantity: 2 },
          ],
          skill: [
            { name: '属性解放/装填拡張', level: 1 },
            { name: '瘴気耐性', level: 1 },
          ],
        },
        {
          name: 'EXギルオスコイルβ',
          materials: [
            { name: '痺賊竜の厚皮', quantity: 2 },
            { name: '痺賊竜の靭尾', quantity: 2 },
            { name: '濃縮麻痺袋', quantity: 1 },
            { name: 'ギルオスの厚鱗', quantity: 1 },
          ],
          skill: [{ name: '瘴気環境適応', level: 1 }],
        },
        {
          name: 'EXギルオスグリーヴβ',
          materials: [
            { name: '痺賊竜の厚皮', quantity: 2 },
            { name: '痺賊竜の重牙', quantity: 2 },
            { name: '痺賊竜の厚鱗', quantity: 2 },
            { name: 'ギルオスの厚鱗', quantity: 1 },
          ],
          skill: [{ name: '麻痺属性強化', level: 2 }],
        },
      ],
    },
    {
      name: 'EXジャグラスα',
      armors: [
        {
          name: 'EXジャグラスヘルムα',
          materials: [
            { name: '賊竜の厚皮', quantity: 1 },
            { name: '賊竜の厚鱗', quantity: 3 },
            { name: '強竜骨', quantity: 2 },
            { name: 'ジャグラスの厚鱗', quantity: 1 },
          ],
          skill: [
            { name: '早食い', level: 2 },
            { name: '攻撃', level: 2 },
          ],
        },
        {
          name: 'EXジャグラスメイルα',
          materials: [
            { name: '賊竜の厚皮', quantity: 1 },
            { name: '賊竜の厚鱗', quantity: 1 },
            { name: '賊竜の剛爪', quantity: 1 },
            { name: 'ジャグラスの厚鱗', quantity: 1 },
          ],
          skill: [
            { name: '回避距離UP', level: 1 },
            { name: '攻撃', level: 2 },
          ],
        },
        {
          name: 'EXジャグラスアームα',
          materials: [
            { name: '賊竜の厚皮', quantity: 1 },
            { name: '賊竜の大たてがみ', quantity: 2 },
            { name: '賊竜の剛爪', quantity: 1 },
            { name: '強靭な爪', quantity: 2 },
          ],
          skill: [
            { name: '回避距離UP', level: 2 },
            { name: '体力回復量UP', level: 1 },
          ],
        },
        {
          name: 'EXジャグラスコイルα',
          materials: [
            { name: '賊竜の厚皮', quantity: 1 },
            { name: '賊竜の厚鱗', quantity: 1 },
            { name: '賊竜の大たてがみ', quantity: 1 },
            { name: 'ジャグラスの厚鱗', quantity: 1 },
          ],
          skill: [
            { name: '体力回復量UP', level: 1 },
            { name: '早食い', level: 1 },
          ],
        },
        {
          name: 'EXジャグラスグリーヴα',
          materials: [
            { name: '賊竜の厚皮', quantity: 1 },
            { name: '賊竜の厚鱗', quantity: 1 },
            { name: '賊竜の大たてがみ', quantity: 1 },
            { name: 'ジャグラスの厚鱗', quantity: 1 },
          ],
          skill: [
            { name: '満足感', level: 1 },
            { name: '体力回復量UP', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXジャグラスβ',
      armors: [
        {
          name: 'EXジャグラスヘルムβ',
          materials: [
            { name: '賊竜の厚皮', quantity: 1 },
            { name: '賊竜の厚鱗', quantity: 3 },
            { name: '強竜骨', quantity: 2 },
            { name: 'ジャグラスの厚鱗', quantity: 1 },
          ],
          skill: [
            { name: '早食い', level: 1 },
            { name: '攻撃', level: 1 },
          ],
        },
        {
          name: 'EXジャグラスメイルβ',
          materials: [
            { name: '賊竜の厚皮', quantity: 1 },
            { name: '賊竜の厚鱗', quantity: 1 },
            { name: '賊竜の剛爪', quantity: 1 },
            { name: 'ジャグラスの厚鱗', quantity: 1 },
          ],
          skill: [
            { name: '回避距離UP', level: 1 },
            { name: '攻撃', level: 1 },
          ],
        },
        {
          name: 'EXジャグラスアームβ',
          materials: [
            { name: '賊竜の厚皮', quantity: 1 },
            { name: '賊竜の大たてがみ', quantity: 2 },
            { name: '賊竜の剛爪', quantity: 1 },
            { name: '強靭な爪', quantity: 2 },
          ],
          skill: [
            { name: '回避距離UP', level: 1 },
            { name: '体力回復量UP', level: 1 },
          ],
        },
        {
          name: 'EXジャグラスコイルβ',
          materials: [
            { name: '賊竜の厚皮', quantity: 1 },
            { name: '賊竜の厚鱗', quantity: 1 },
            { name: '賊竜の大たてがみ', quantity: 1 },
            { name: 'ジャグラスの厚鱗', quantity: 1 },
          ],
          skill: [{ name: '体力回復量UP', level: 1 }],
        },
        {
          name: 'EXジャグラスグリーヴβ',
          materials: [
            { name: '賊竜の厚皮', quantity: 1 },
            { name: '賊竜の厚鱗', quantity: 1 },
            { name: '賊竜の大たてがみ', quantity: 1 },
            { name: 'ジャグラスの厚鱗', quantity: 1 },
          ],
          skill: [{ name: '満足感', level: 1 }],
        },
      ],
    },
    {
      name: 'EXガマルα',
      armors: [
        {
          name: 'EXガマルヘルムα',
          materials: [
            { name: '岩賊竜の厚皮', quantity: 2 },
            { name: '岩賊竜の厚鱗', quantity: 1 },
            { name: '岩賊竜の大顎', quantity: 1 },
            { name: 'メランジェ鉱石', quantity: 1 },
          ],
          skill: [
            { name: '爆破やられ耐性', level: 2 },
            { name: 'ボマー', level: 1 },
          ],
        },
        {
          name: 'EXガマルメイルα',
          materials: [
            { name: '岩賊竜の厚皮', quantity: 2 },
            { name: '岩賊竜の靭尾', quantity: 1 },
            { name: '岩賊竜の大顎', quantity: 1 },
            { name: 'ガストドンの重殻', quantity: 2 },
          ],
          skill: [
            { name: '爆破属性強化', level: 2 },
            { name: '砲術', level: 1 },
          ],
        },
        {
          name: 'EXガマルアームα',
          materials: [
            { name: '岩賊竜の厚皮', quantity: 2 },
            { name: '岩賊竜の厚鱗', quantity: 2 },
            { name: '岩賊竜の剛爪', quantity: 1 },
            { name: 'ガストドンの重殻', quantity: 1 },
          ],
          skill: [
            { name: 'ボマー', level: 2 },
            { name: '爆破属性強化', level: 1 },
          ],
        },
        {
          name: 'EXガマルコイルα',
          materials: [
            { name: '岩賊竜の厚皮', quantity: 2 },
            { name: '岩賊竜の厚鱗', quantity: 2 },
            { name: '岩賊竜の大顎', quantity: 1 },
            { name: 'エルトライト鉱石', quantity: 2 },
          ],
          skill: [
            { name: '砲術', level: 2 },
            { name: '爆破やられ耐性', level: 1 },
          ],
        },
        {
          name: 'EXガマルグリーヴα',
          materials: [
            { name: '岩賊竜の厚皮', quantity: 2 },
            { name: '岩賊竜の靭尾', quantity: 1 },
            { name: '岩賊竜の剛爪', quantity: 2 },
            { name: 'メランジェ鉱石', quantity: 1 },
          ],
          skill: [
            { name: '砲弾装填数UP', level: 1 },
            { name: '爆破属性強化', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXガマルβ',
      armors: [
        {
          name: 'EXガマルヘルムβ',
          materials: [
            { name: '岩賊竜の厚皮', quantity: 2 },
            { name: '岩賊竜の厚鱗', quantity: 1 },
            { name: '岩賊竜の大顎', quantity: 1 },
            { name: 'メランジェ鉱石', quantity: 1 },
          ],
          skill: [{ name: '爆破やられ耐性', level: 2 }],
        },
        {
          name: 'EXガマルメイルβ',
          materials: [
            { name: '岩賊竜の厚皮', quantity: 2 },
            { name: '岩賊竜の靭尾', quantity: 1 },
            { name: '岩賊竜の大顎', quantity: 1 },
            { name: 'ガストドンの重殻', quantity: 2 },
          ],
          skill: [{ name: '爆破属性強化', level: 2 }],
        },
        {
          name: 'EXガマルアームβ',
          materials: [
            { name: '岩賊竜の厚皮', quantity: 2 },
            { name: '岩賊竜の厚鱗', quantity: 2 },
            { name: '岩賊竜の剛爪', quantity: 1 },
            { name: 'ガストドンの重殻', quantity: 1 },
          ],
          skill: [
            { name: 'ボマー', level: 1 },
            { name: '爆破属性強化', level: 1 },
          ],
        },
        {
          name: 'EXガマルコイルβ',
          materials: [
            { name: '岩賊竜の厚皮', quantity: 2 },
            { name: '岩賊竜の厚鱗', quantity: 2 },
            { name: '岩賊竜の大顎', quantity: 1 },
            { name: 'エルトライト鉱石', quantity: 2 },
          ],
          skill: [{ name: '砲術', level: 2 }],
        },
        {
          name: 'EXガマルグリーヴβ',
          materials: [
            { name: '岩賊竜の厚皮', quantity: 2 },
            { name: '岩賊竜の靭尾', quantity: 1 },
            { name: '岩賊竜の剛爪', quantity: 2 },
            { name: 'メランジェ鉱石', quantity: 1 },
          ],
          skill: [{ name: '砲弾装填数UP', level: 1 }],
        },
      ],
    },
    {
      name: 'EXカガチα',
      armors: [
        {
          name: 'EXカガチヘルムα',
          materials: [
            { name: '飛雷竜の厚毛皮', quantity: 2 },
            { name: '飛雷竜の雷光針', quantity: 2 },
            { name: '飛雷竜の剛爪', quantity: 1 },
            { name: 'モンスターの特濃', quantity: 3 },
          ],
          skill: [
            { name: '体術', level: 2 },
            { name: '回避距離UP', level: 1 },
          ],
        },
        {
          name: 'EXカガチメイルα',
          materials: [
            { name: '飛雷竜の厚毛皮', quantity: 2 },
            { name: '飛雷竜の厚鱗', quantity: 2 },
            { name: '飛雷竜の厚皮膜', quantity: 1 },
          ],
          skill: [
            { name: 'ジャンプ鉄人', level: 1 },
            { name: '体術', level: 1 },
          ],
        },
        {
          name: 'EXカガチアームα',
          materials: [
            { name: '飛雷竜の厚毛皮', quantity: 2 },
            { name: '飛雷竜の厚鱗', quantity: 1 },
            { name: '飛雷竜の剛爪', quantity: 2 },
            { name: '雷電袋', quantity: 2 },
          ],
          skill: [
            { name: '回避距離UP', level: 2 },
            { name: '雷属性攻撃強化', level: 2 },
          ],
        },
        {
          name: 'EXカガチコイルα',
          materials: [
            { name: '飛雷竜の厚毛皮', quantity: 2 },
            { name: '飛雷竜の厚鱗', quantity: 2 },
            { name: '雷電袋', quantity: 1 },
          ],
          skill: [
            { name: '雷属性攻撃強化', level: 2 },
            { name: '雷耐性', level: 1 },
          ],
        },
        {
          name: 'EXカガチグリーヴα',
          materials: [
            { name: '飛雷竜の厚毛皮', quantity: 2 },
            { name: '飛雷竜の厚皮膜', quantity: 2 },
            { name: '飛雷竜の雷光針', quantity: 1 },
          ],
          skill: [
            { name: '雷耐性', level: 2 },
            { name: '体術', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXカガチβ',
      armors: [
        {
          name: 'EXカガチヘルムβ',
          materials: [
            { name: '飛雷竜の厚毛皮', quantity: 2 },
            { name: '飛雷竜の雷光針', quantity: 2 },
            { name: '飛雷竜の剛爪', quantity: 1 },
            { name: 'モンスターの特濃', quantity: 3 },
          ],
          skill: [
            { name: '体術', level: 1 },
            { name: '回避距離UP', level: 1 },
          ],
        },
        {
          name: 'EXカガチメイルβ',
          materials: [
            { name: '飛雷竜の厚毛皮', quantity: 2 },
            { name: '飛雷竜の厚鱗', quantity: 2 },
            { name: '飛雷竜の厚皮膜', quantity: 1 },
          ],
          skill: [{ name: 'ジャンプ鉄人', level: 1 }],
        },
        {
          name: 'EXカガチアームβ',
          materials: [
            { name: '飛雷竜の厚毛皮', quantity: 2 },
            { name: '飛雷竜の厚鱗', quantity: 1 },
            { name: '飛雷竜の剛爪', quantity: 2 },
            { name: '雷電袋', quantity: 2 },
          ],
          skill: [
            { name: '回避距離UP', level: 1 },
            { name: '雷属性攻撃強化', level: 2 },
          ],
        },
        {
          name: 'EXカガチコイルβ',
          materials: [
            { name: '飛雷竜の厚毛皮', quantity: 2 },
            { name: '飛雷竜の厚鱗', quantity: 2 },
            { name: '雷電袋', quantity: 1 },
          ],
          skill: [{ name: '雷属性攻撃強化', level: 2 }],
        },
        {
          name: 'EXカガチグリーヴβ',
          materials: [
            { name: '飛雷竜の厚毛皮', quantity: 2 },
            { name: '飛雷竜の厚皮膜', quantity: 2 },
            { name: '飛雷竜の雷光針', quantity: 1 },
          ],
          skill: [{ name: '雷耐性', level: 2 }],
        },
      ],
    },
    {
      name: 'EXベニカガチα',
      armors: [
        {
          name: 'EXベニカガチヘルムα',
          materials: [
            { name: '飛毒竜の厚毛皮', quantity: 3 },
            { name: '飛毒竜の猛毒針', quantity: 2 },
            { name: '飛毒竜の剛爪', quantity: 1 },
            { name: 'ウルグの厚毛皮', quantity: 2 },
          ],
          skill: [
            { name: '回避距離UP', level: 2 },
            { name: '麻痺属性強化', level: 1 },
          ],
        },
        {
          name: 'EXベニカガチメイルα',
          materials: [
            { name: '飛毒竜の厚毛皮', quantity: 2 },
            { name: '飛毒竜の厚鱗', quantity: 2 },
            { name: '飛毒竜の厚皮膜', quantity: 1 },
          ],
          skill: [
            { name: '納刀術', level: 1 },
            { name: '回避距離UP', level: 1 },
          ],
        },
        {
          name: 'EXベニカガチアームα',
          materials: [
            { name: '飛毒竜の厚毛皮', quantity: 2 },
            { name: '飛毒竜の厚鱗', quantity: 1 },
            { name: '飛毒竜の剛爪', quantity: 2 },
            { name: '劇烈毒袋', quantity: 1 },
          ],
          skill: [
            { name: '毒属性強化', level: 2 },
            { name: '回避性能', level: 1 },
          ],
        },
        {
          name: 'EXベニカガチコイルα',
          materials: [
            { name: '飛毒竜の厚毛皮', quantity: 2 },
            { name: '飛毒竜の厚鱗', quantity: 1 },
            { name: '飛毒竜の厚皮膜', quantity: 2 },
            { name: '劇烈毒袋', quantity: 2 },
          ],
          skill: [
            { name: '体術', level: 1 },
            { name: '納刀術', level: 1 },
          ],
        },
        {
          name: 'EXベニカガチグリーヴα',
          materials: [
            { name: '飛毒竜の厚毛皮', quantity: 2 },
            { name: '飛毒竜の厚皮膜', quantity: 1 },
            { name: '飛毒竜の猛毒針', quantity: 1 },
            { name: 'ウルグの厚毛皮', quantity: 3 },
          ],
          skill: [
            { name: '回避性能', level: 1 },
            { name: '体術', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXベニカガチβ',
      armors: [
        {
          name: 'EXベニカガチヘルムβ',
          materials: [
            { name: '飛毒竜の厚毛皮', quantity: 3 },
            { name: '飛毒竜の猛毒針', quantity: 2 },
            { name: '飛毒竜の剛爪', quantity: 1 },
            { name: 'ウルグの厚毛皮', quantity: 2 },
          ],
          skill: [
            { name: '回避距離UP', level: 1 },
            { name: '麻痺属性強化', level: 1 },
          ],
        },
        {
          name: 'EXベニカガチメイルβ',
          materials: [
            { name: '飛毒竜の厚毛皮', quantity: 2 },
            { name: '飛毒竜の厚鱗', quantity: 2 },
            { name: '飛毒竜の厚皮膜', quantity: 1 },
          ],
          skill: [{ name: '納刀術', level: 1 }],
        },
        {
          name: 'EXベニカガチアームβ',
          materials: [
            { name: '飛毒竜の厚毛皮', quantity: 2 },
            { name: '飛毒竜の厚鱗', quantity: 1 },
            { name: '飛毒竜の剛爪', quantity: 2 },
            { name: '劇烈毒袋', quantity: 1 },
          ],
          skill: [
            { name: '毒属性強化', level: 1 },
            { name: '回避性能', level: 1 },
          ],
        },
        {
          name: 'EXベニカガチコイルβ',
          materials: [
            { name: '飛毒竜の厚毛皮', quantity: 2 },
            { name: '飛毒竜の厚鱗', quantity: 1 },
            { name: '飛毒竜の厚皮膜', quantity: 2 },
            { name: '劇烈毒袋', quantity: 2 },
          ],
          skill: [{ name: '体術', level: 1 }],
        },
        {
          name: 'EXベニカガチグリーヴβ',
          materials: [
            { name: '飛毒竜の厚毛皮', quantity: 2 },
            { name: '飛毒竜の厚皮膜', quantity: 1 },
            { name: '飛毒竜の猛毒針', quantity: 1 },
            { name: 'ウルグの厚毛皮', quantity: 3 },
          ],
          skill: [{ name: '回避性能', level: 1 }],
        },
      ],
    },
    {
      name: 'EXエンプレスα',
      armors: [
        {
          name: 'EXエンプレスセクターα',
          materials: [
            { name: '炎妃龍の重殻', quantity: 3 },
            { name: '炎妃龍の大たてがみ', quantity: 3 },
            { name: '炎妃龍の剛角', quantity: 2 },
            { name: '古龍の大宝玉', quantity: 1 },
          ],
          skill: [
            { name: '整備', level: 2 },
            { name: '攻めの守勢', level: 2 },
          ],
        },
        {
          name: 'EXエンプレスメイルα',
          materials: [
            { name: '炎妃龍の重殻', quantity: 3 },
            { name: '炎妃龍の剛翼', quantity: 3 },
            { name: '炎妃龍の大たてがみ', quantity: 2 },
            { name: '泰然たる結晶', quantity: 3 },
          ],
          skill: [
            { name: 'フルチャージ', level: 2 },
            { name: '広域化', level: 2 },
          ],
        },
        {
          name: 'EXエンプレスアームα',
          materials: [
            { name: '炎妃龍の重殻', quantity: 3 },
            { name: '炎妃龍の厚鱗', quantity: 3 },
            { name: '炎妃龍の靭尾', quantity: 1 },
            { name: '龍脈の古龍骨', quantity: 6 },
          ],
          skill: [
            { name: '整備', level: 2 },
            { name: '爆破属性強化', level: 2 },
          ],
        },
        {
          name: 'EXエンプレスコイルα',
          materials: [
            { name: '炎妃龍の重殻', quantity: 3 },
            { name: '炎妃龍の厚鱗', quantity: 3 },
            { name: '炎妃龍の剛角', quantity: 1 },
            { name: '炎龍の塵粉', quantity: 4 },
          ],
          skill: [
            { name: '体力増強', level: 2 },
            { name: '爆破属性強化', level: 2 },
          ],
        },
        {
          name: 'EXエンプレスグリーヴα',
          materials: [
            { name: '炎妃龍の重殻', quantity: 6 },
            { name: '炎妃龍の厚鱗', quantity: 2 },
            { name: '炎妃龍の剛翼', quantity: 2 },
            { name: '龍脈に鍛えられし岩骨', quantity: 3 },
          ],
          skill: [
            { name: '広域化', level: 3 },
            { name: '整備', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXエンプレスβ',
      armors: [
        {
          name: 'EXエンプレスセクターβ',
          materials: [
            { name: '炎妃龍の重殻', quantity: 3 },
            { name: '炎妃龍の大たてがみ', quantity: 3 },
            { name: '炎妃龍の剛角', quantity: 2 },
            { name: '古龍の大宝玉', quantity: 1 },
          ],
          skill: [{ name: '整備', level: 2 }],
        },
        {
          name: 'EXエンプレスメイルβ',
          materials: [
            { name: '炎妃龍の重殻', quantity: 3 },
            { name: '炎妃龍の剛翼', quantity: 3 },
            { name: '炎妃龍の大たてがみ', quantity: 2 },
            { name: '泰然たる結晶', quantity: 3 },
          ],
          skill: [
            { name: 'フルチャージ', level: 1 },
            { name: '広域化', level: 2 },
          ],
        },
        {
          name: 'EXエンプレスアームβ',
          materials: [
            { name: '炎妃龍の重殻', quantity: 3 },
            { name: '炎妃龍の厚鱗', quantity: 3 },
            { name: '炎妃龍の靭尾', quantity: 1 },
            { name: '龍脈の古龍骨', quantity: 6 },
          ],
          skill: [
            { name: '整備', level: 2 },
            { name: '爆破属性強化', level: 1 },
          ],
        },
        {
          name: 'EXエンプレスコイルβ',
          materials: [
            { name: '炎妃龍の重殻', quantity: 3 },
            { name: '炎妃龍の厚鱗', quantity: 3 },
            { name: '炎妃龍の剛角', quantity: 1 },
            { name: '炎龍の塵粉', quantity: 4 },
          ],
          skill: [{ name: '体力増強', level: 2 }],
        },
        {
          name: 'EXエンプレスグリーヴβ',
          materials: [
            { name: '炎妃龍の重殻', quantity: 6 },
            { name: '炎妃龍の厚鱗', quantity: 2 },
            { name: '炎妃龍の剛翼', quantity: 2 },
            { name: '龍脈に鍛えられし岩骨', quantity: 3 },
          ],
          skill: [
            { name: '広域化', level: 2 },
            { name: '整備', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXナルガα',
      armors: [
        {
          name: 'EXナルガヘルムα',
          materials: [
            { name: '迅竜の豪黒毛', quantity: 2 },
            { name: '迅竜の重牙', quantity: 1 },
            { name: '迅竜の重尾棘', quantity: 2 },
            { name: '咬魚の鋼ヒゲ', quantity: 2 },
          ],
          skill: [
            { name: 'フルチャージ', level: 2 },
            { name: '貫通弾・竜の一矢強化', level: 1 },
          ],
        },
        {
          name: 'EXナルガメイルα',
          materials: [
            { name: '迅竜の豪黒毛', quantity: 2 },
            { name: '迅竜の厚鱗', quantity: 1 },
            { name: '迅竜の靭尾', quantity: 1 },
            { name: '咬魚の厚皮', quantity: 3 },
          ],
          skill: [
            { name: '回避性能', level: 2 },
            { name: 'しゃがみ移動速度UP', level: 1 },
          ],
        },
        {
          name: 'EXナルガアームα',
          materials: [
            { name: '迅竜の豪黒毛', quantity: 2 },
            { name: '迅竜の厚鱗', quantity: 1 },
            { name: '迅竜の重牙', quantity: 2 },
            { name: '極上の毛皮', quantity: 4 },
          ],
          skill: [
            { name: 'スタミナ急速回復', level: 2 },
            { name: '潜伏', level: 2 },
          ],
        },
        {
          name: 'EXナルガコイルα',
          materials: [
            { name: '迅竜の豪黒毛', quantity: 2 },
            { name: '迅竜の剛刃翼', quantity: 2 },
            { name: '迅竜の靭尾', quantity: 1 },
            { name: '迅竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '回避性能', level: 2 },
            { name: 'スタミナ急速回復', level: 1 },
          ],
        },
        {
          name: 'EXナルガグリーヴα',
          materials: [
            { name: '迅竜の豪黒毛', quantity: 2 },
            { name: '迅竜の厚鱗', quantity: 2 },
            { name: '迅竜の剛刃翼', quantity: 1 },
            { name: 'ランゴスタの斬羽', quantity: 3 },
          ],
          skill: [
            { name: '回避性能', level: 1 },
            { name: 'フルチャージ', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXナルガβ',
      armors: [
        {
          name: 'EXナルガヘルムβ',
          materials: [
            { name: '迅竜の豪黒毛', quantity: 2 },
            { name: '迅竜の重牙', quantity: 1 },
            { name: '迅竜の重尾棘', quantity: 2 },
            { name: '咬魚の鋼ヒゲ', quantity: 2 },
          ],
          skill: [
            { name: 'フルチャージ', level: 1 },
            { name: '貫通弾・竜の一矢強化', level: 1 },
          ],
        },
        {
          name: 'EXナルガメイルβ',
          materials: [
            { name: '迅竜の豪黒毛', quantity: 2 },
            { name: '迅竜の厚鱗', quantity: 1 },
            { name: '迅竜の靭尾', quantity: 1 },
            { name: '咬魚の厚皮', quantity: 3 },
          ],
          skill: [{ name: '回避性能', level: 2 }],
        },
        {
          name: 'EXナルガアームβ',
          materials: [
            { name: '迅竜の豪黒毛', quantity: 2 },
            { name: '迅竜の厚鱗', quantity: 1 },
            { name: '迅竜の重牙', quantity: 2 },
            { name: '極上の毛皮', quantity: 4 },
          ],
          skill: [{ name: 'スタミナ急速回復', level: 2 }],
        },
        {
          name: 'EXナルガコイルβ',
          materials: [
            { name: '迅竜の豪黒毛', quantity: 2 },
            { name: '迅竜の剛刃翼', quantity: 2 },
            { name: '迅竜の靭尾', quantity: 1 },
            { name: '迅竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '回避性能', level: 1 },
            { name: 'スタミナ急速回復', level: 1 },
          ],
        },
        {
          name: 'EXナルガグリーヴβ',
          materials: [
            { name: '迅竜の豪黒毛', quantity: 2 },
            { name: '迅竜の厚鱗', quantity: 2 },
            { name: '迅竜の剛刃翼', quantity: 1 },
            { name: 'ランゴスタの斬羽', quantity: 3 },
          ],
          skill: [{ name: '回避性能', level: 1 }],
        },
      ],
    },
    {
      name: 'EXテンタクルα',
      armors: [
        {
          name: 'EXテンタクルヘルムα',
          materials: [
            { name: '溟龍の特上皮', quantity: 2 },
            { name: '溟龍の剛爪', quantity: 3 },
            { name: '太古龍骨', quantity: 5 },
            { name: '爆鎚竜の天殻', quantity: 1 },
          ],
          skill: [
            { name: '体術', level: 3 },
            { name: '渾身', level: 1 },
          ],
        },
        {
          name: 'EXテンタクルメイルα',
          materials: [
            { name: '溟龍の特上皮', quantity: 2 },
            { name: '溟龍の剛爪', quantity: 2 },
            { name: '溟龍の幻曜ヒゲ', quantity: 1 },
            { name: '氷霜をまとう皮', quantity: 3 },
          ],
          skill: [
            { name: '属性やられ耐性', level: 2 },
            { name: '整備', level: 1 },
          ],
        },
        {
          name: 'EXテンタクルアームα',
          materials: [
            { name: '溟龍の特上皮', quantity: 2 },
            { name: '溟龍の剛翼', quantity: 2 },
            { name: '溟龍の幻曜ヒゲ', quantity: 1 },
            { name: '幻鳥竜玉', quantity: 1 },
          ],
          skill: [
            { name: '整備', level: 2 },
            { name: '渾身', level: 1 },
          ],
        },
        {
          name: 'EXテンタクルコイルα',
          materials: [
            { name: '溟龍の特上皮', quantity: 2 },
            { name: '溟龍の幻曜ヒゲ', quantity: 2 },
            { name: '溟龍の靭尾', quantity: 1 },
            { name: '古龍の大宝玉', quantity: 1 },
          ],
          skill: [
            { name: '体術', level: 2 },
            { name: 'スタミナ急速回復', level: 1 },
          ],
        },
        {
          name: 'EXテンタクルグリーヴα',
          materials: [
            { name: '溟龍の特上皮', quantity: 2 },
            { name: '溟龍の剛翼', quantity: 2 },
            { name: '古龍の浄血', quantity: 3 },
            { name: '雌火竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: 'スタミナ急速回復', level: 2 },
            { name: '属性やられ耐性', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXテンタクルβ',
      armors: [
        {
          name: 'EXテンタクルヘルムβ',
          materials: [
            { name: '溟龍の特上皮', quantity: 2 },
            { name: '溟龍の剛爪', quantity: 3 },
            { name: '太古龍骨', quantity: 5 },
            { name: '爆鎚竜の天殻', quantity: 1 },
          ],
          skill: [
            { name: '体術', level: 2 },
            { name: '渾身', level: 1 },
          ],
        },
        {
          name: 'EXテンタクルメイルβ',
          materials: [
            { name: '溟龍の特上皮', quantity: 2 },
            { name: '溟龍の剛爪', quantity: 2 },
            { name: '溟龍の幻曜ヒゲ', quantity: 1 },
            { name: '氷霜をまとう皮', quantity: 3 },
          ],
          skill: [
            { name: '属性やられ耐性', level: 1 },
            { name: '整備', level: 1 },
          ],
        },
        {
          name: 'EXテンタクルアームβ',
          materials: [
            { name: '溟龍の特上皮', quantity: 2 },
            { name: '溟龍の剛翼', quantity: 2 },
            { name: '溟龍の幻曜ヒゲ', quantity: 1 },
            { name: '幻鳥竜玉', quantity: 1 },
          ],
          skill: [{ name: '整備', level: 2 }],
        },
        {
          name: 'EXテンタクルコイルβ',
          materials: [
            { name: '溟龍の特上皮', quantity: 2 },
            { name: '溟龍の幻曜ヒゲ', quantity: 2 },
            { name: '溟龍の靭尾', quantity: 1 },
            { name: '古龍の大宝玉', quantity: 1 },
          ],
          skill: [
            { name: '体術', level: 1 },
            { name: 'スタミナ急速回復', level: 1 },
          ],
        },
        {
          name: 'EXテンタクルグリーヴβ',
          materials: [
            { name: '溟龍の特上皮', quantity: 2 },
            { name: '溟龍の剛翼', quantity: 2 },
            { name: '古龍の浄血', quantity: 3 },
            { name: '雌火竜の天鱗', quantity: 1 },
          ],
          skill: [{ name: 'スタミナ急速回復', level: 2 }],
        },
      ],
    },
    {
      name: 'EXウルムーα',
      armors: [
        {
          name: 'EXウルムーヘルムα',
          materials: [
            { name: '浮空竜の厚毛皮', quantity: 2 },
            { name: '浮空竜の厚鱗', quantity: 2 },
            { name: 'ゴム質の重殻', quantity: 2 },
          ],
          skill: [
            { name: 'スタミナ急速回復', level: 2 },
            { name: '風圧耐性', level: 1 },
          ],
        },
        {
          name: 'EXウルムーメイルα',
          materials: [
            { name: '浮空竜の厚毛皮', quantity: 2 },
            { name: '浮空竜の厚鱗', quantity: 2 },
            { name: '強竜骨', quantity: 3 },
          ],
          skill: [
            { name: '乗り名人', level: 1 },
            { name: '砲術', level: 1 },
          ],
        },
        {
          name: 'EXウルムーアームα',
          materials: [
            { name: '浮空竜の厚毛皮', quantity: 2 },
            { name: '浮空竜の剛翼', quantity: 1 },
            { name: 'デプスライト鉱石', quantity: 3 },
          ],
          skill: [
            { name: '砲術', level: 2 },
            { name: '風圧耐性', level: 1 },
          ],
        },
        {
          name: 'EXウルムーコイルα',
          materials: [
            { name: '浮空竜の厚毛皮', quantity: 2 },
            { name: '浮空竜の厚鱗', quantity: 2 },
            { name: '浮空竜の剛翼', quantity: 1 },
          ],
          skill: [
            { name: '精霊の加護', level: 2 },
            { name: '風圧耐性', level: 1 },
          ],
        },
        {
          name: 'EXウルムーグリーヴα',
          materials: [
            { name: '浮空竜の厚毛皮', quantity: 2 },
            { name: '浮空竜の剛翼', quantity: 2 },
            { name: 'ゴム質の重殻', quantity: 3 },
          ],
          skill: [
            { name: '風圧耐性', level: 2 },
            { name: 'スタミナ急速回復', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXウルムーβ',
      armors: [
        {
          name: 'EXウルムーヘルムβ',
          materials: [
            { name: '浮空竜の厚毛皮', quantity: 2 },
            { name: '浮空竜の厚鱗', quantity: 2 },
            { name: 'ゴム質の重殻', quantity: 2 },
          ],
          skill: [{ name: 'スタミナ急速回復', level: 2 }],
        },
        {
          name: 'EXウルムーメイルβ',
          materials: [
            { name: '浮空竜の厚毛皮', quantity: 2 },
            { name: '浮空竜の厚鱗', quantity: 2 },
            { name: '強竜骨', quantity: 3 },
          ],
          skill: [{ name: '乗り名人', level: 1 }],
        },
        {
          name: 'EXウルムーアームβ',
          materials: [
            { name: '浮空竜の厚毛皮', quantity: 2 },
            { name: '浮空竜の剛翼', quantity: 1 },
            { name: 'デプスライト鉱石', quantity: 3 },
          ],
          skill: [
            { name: '砲術', level: 1 },
            { name: '風圧耐性', level: 1 },
          ],
        },
        {
          name: 'EXウルムーコイルβ',
          materials: [
            { name: '浮空竜の厚毛皮', quantity: 2 },
            { name: '浮空竜の厚鱗', quantity: 2 },
            { name: '浮空竜の剛翼', quantity: 1 },
          ],
          skill: [
            { name: '精霊の加護', level: 1 },
            { name: '風圧耐性', level: 1 },
          ],
        },
        {
          name: 'EXウルムーグリーヴβ',
          materials: [
            { name: '浮空竜の厚毛皮', quantity: 2 },
            { name: '浮空竜の剛翼', quantity: 2 },
            { name: 'ゴム質の重殻', quantity: 3 },
          ],
          skill: [{ name: '風圧耐性', level: 2 }],
        },
      ],
    },
    {
      name: 'EXウルムメアα',
      armors: [
        {
          name: 'EXウルムメアヘルムα',
          materials: [
            { name: '浮眠竜の厚毛皮', quantity: 2 },
            { name: '浮眠竜の厚鱗', quantity: 1 },
            { name: 'ゴム質の重殻', quantity: 3 },
          ],
          skill: [
            { name: '弱点特効', level: 1 },
            { name: '広域化', level: 1 },
          ],
        },
        {
          name: 'EXウルムメアメイルα',
          materials: [
            { name: '浮眠竜の厚毛皮', quantity: 2 },
            { name: '浮眠竜の厚鱗', quantity: 2 },
            { name: '卒倒昏睡袋', quantity: 3 },
          ],
          skill: [
            { name: '広域化', level: 2 },
            { name: '渾身', level: 1 },
          ],
        },
        {
          name: 'EXウルムメアアームα',
          materials: [
            { name: '浮眠竜の厚毛皮', quantity: 2 },
            { name: '浮眠竜の剛翼', quantity: 1 },
            { name: '強竜骨', quantity: 3 },
          ],
          skill: [
            { name: '渾身', level: 1 },
            { name: '睡眠属性強化', level: 1 },
          ],
        },
        {
          name: 'EXウルムメアコイルα',
          materials: [
            { name: '浮眠竜の厚毛皮', quantity: 2 },
            { name: '浮眠竜の厚鱗', quantity: 2 },
            { name: '浮眠竜の剛翼', quantity: 2 },
          ],
          skill: [
            { name: '睡眠属性強化', level: 2 },
            { name: '広域化', level: 1 },
          ],
        },
        {
          name: 'EXウルムメアグリーヴα',
          materials: [
            { name: '浮眠竜の厚毛皮', quantity: 2 },
            { name: '浮眠竜の剛翼', quantity: 1 },
            { name: 'ゴム質の重殻', quantity: 1 },
          ],
          skill: [
            { name: '睡眠耐性', level: 2 },
            { name: '広域化', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXウルムメアβ',
      armors: [
        {
          name: 'EXウルムメアヘルムβ',
          materials: [
            { name: '浮眠竜の厚毛皮', quantity: 2 },
            { name: '浮眠竜の厚鱗', quantity: 1 },
            { name: 'ゴム質の重殻', quantity: 3 },
          ],
          skill: [{ name: '弱点特効', level: 1 }],
        },
        {
          name: 'EXウルムメアメイルβ',
          materials: [
            { name: '浮眠竜の厚毛皮', quantity: 2 },
            { name: '浮眠竜の厚鱗', quantity: 2 },
            { name: '卒倒昏睡袋', quantity: 3 },
          ],
          skill: [{ name: '広域化', level: 2 }],
        },
        {
          name: 'EXウルムメアアームβ',
          materials: [
            { name: '浮眠竜の厚毛皮', quantity: 2 },
            { name: '浮眠竜の剛翼', quantity: 1 },
            { name: '強竜骨', quantity: 3 },
          ],
          skill: [{ name: '渾身', level: 1 }],
        },
        {
          name: 'EXウルムメアコイルβ',
          materials: [
            { name: '浮眠竜の厚毛皮', quantity: 2 },
            { name: '浮眠竜の厚鱗', quantity: 2 },
            { name: '浮眠竜の剛翼', quantity: 2 },
          ],
          skill: [{ name: '睡眠属性強化', level: 2 }],
        },
        {
          name: 'EXウルムメアグリーヴβ',
          materials: [
            { name: '浮眠竜の厚毛皮', quantity: 2 },
            { name: '浮眠竜の剛翼', quantity: 1 },
            { name: 'ゴム質の重殻', quantity: 1 },
          ],
          skill: [{ name: '睡眠耐性', level: 2 }],
        },
      ],
    },
    {
      name: 'EXバフバロα',
      armors: [
        {
          name: 'EXバフバロヘルムα',
          materials: [
            { name: '猛牛竜の重甲', quantity: 2 },
            { name: '猛牛竜の巨大な角', quantity: 1 },
            { name: 'ガウシカの角', quantity: 2 },
          ],
          skill: [
            { name: '逆恨み', level: 2 },
            { name: 'キノコ大好き', level: 1 },
          ],
        },
        {
          name: 'EXバフバロメイルα',
          materials: [
            { name: '猛牛竜の重甲', quantity: 2 },
            { name: '猛牛竜の重殻', quantity: 2 },
            { name: '猛牛竜の巨大な角', quantity: 1 },
            { name: '極上の毛皮', quantity: 2 },
          ],
          skill: [
            { name: '早食い', level: 1 },
            { name: '攻めの守勢', level: 1 },
          ],
        },
        {
          name: 'EXバフバロアームα',
          materials: [
            { name: '猛牛竜の重甲', quantity: 2 },
            { name: '猛牛竜の重殻', quantity: 2 },
            { name: '猛牛竜の靭尾', quantity: 1 },
          ],
          skill: [
            { name: '攻めの守勢', level: 1 },
            { name: '体力増強', level: 2 },
          ],
        },
        {
          name: 'EXバフバロコイルα',
          materials: [
            { name: '猛牛竜の重甲', quantity: 2 },
            { name: '猛牛竜の重殻', quantity: 1 },
            { name: '凍てついた氷骨', quantity: 2 },
          ],
          skill: [
            { name: 'キノコ大好き', level: 1 },
            { name: '攻めの守勢', level: 1 },
          ],
        },
        {
          name: 'EXバフバログリーヴα',
          materials: [
            { name: '猛牛竜の重甲', quantity: 2 },
            { name: '猛牛竜の重殻', quantity: 1 },
            { name: '猛牛竜の巨大な角', quantity: 1 },
          ],
          skill: [
            { name: 'キノコ大好き', level: 1 },
            { name: '早食い', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXバフバロβ',
      armors: [
        {
          name: 'EXバフバロヘルムβ',
          materials: [
            { name: '猛牛竜の重甲', quantity: 2 },
            { name: '猛牛竜の巨大な角', quantity: 1 },
            { name: 'ガウシカの角', quantity: 2 },
          ],
          skill: [{ name: '逆恨み', level: 2 }],
        },
        {
          name: 'EXバフバロメイルβ',
          materials: [
            { name: '猛牛竜の重甲', quantity: 2 },
            { name: '猛牛竜の重殻', quantity: 2 },
            { name: '猛牛竜の巨大な角', quantity: 1 },
            { name: '極上の毛皮', quantity: 2 },
          ],
          skill: [{ name: '早食い', level: 1 }],
        },
        {
          name: 'EXバフバロアームβ',
          materials: [
            { name: '猛牛竜の重甲', quantity: 2 },
            { name: '猛牛竜の重殻', quantity: 2 },
            { name: '猛牛竜の靭尾', quantity: 1 },
          ],
          skill: [
            { name: '攻めの守勢', level: 1 },
            { name: '体力増強', level: 1 },
          ],
        },
        {
          name: 'EXバフバロコイルβ',
          materials: [
            { name: '猛牛竜の重甲', quantity: 2 },
            { name: '猛牛竜の重殻', quantity: 1 },
            { name: '凍てついた氷骨', quantity: 2 },
          ],
          skill: [{ name: 'キノコ大好き', level: 1 }],
        },
        {
          name: 'EXバフバログリーヴβ',
          materials: [
            { name: '猛牛竜の重甲', quantity: 2 },
            { name: '猛牛竜の重殻', quantity: 1 },
            { name: '猛牛竜の巨大な角', quantity: 1 },
          ],
          skill: [{ name: 'キノコ大好き', level: 1 }],
        },
      ],
    },
    {
      name: 'EXプケプケα',
      armors: [
        {
          name: 'EXプケプケヘルムα',
          materials: [
            { name: '毒妖鳥の重殻', quantity: 2 },
            { name: '毒妖鳥の剛翼', quantity: 1 },
            { name: '毒妖鳥の特大喉袋', quantity: 1 },
          ],
          skill: [
            { name: '環境利用の知識', level: 2 },
            { name: '毒耐性', level: 1 },
          ],
        },
        {
          name: 'EXプケプケメイルα',
          materials: [
            { name: '毒妖鳥の重殻', quantity: 2 },
            { name: '毒妖鳥の厚鱗', quantity: 2 },
            { name: '毒妖鳥の特大喉袋', quantity: 1 },
          ],
          skill: [
            { name: 'アイテム使用強化', level: 2 },
            { name: 'フルチャージ', level: 1 },
          ],
        },
        {
          name: 'EXプケプケアームα',
          materials: [
            { name: '毒妖鳥の重殻', quantity: 2 },
            { name: '毒妖鳥の厚鱗', quantity: 2 },
            { name: '強竜骨', quantity: 2 },
            { name: 'メランジェ鉱石', quantity: 2 },
          ],
          skill: [
            { name: 'フルチャージ', level: 2 },
            { name: '環境利用の知識', level: 1 },
          ],
        },
        {
          name: 'EXプケプケコイルα',
          materials: [
            { name: '毒妖鳥の重殻', quantity: 2 },
            { name: '毒妖鳥の靭尾', quantity: 1 },
            { name: '毒妖鳥の剛翼', quantity: 1 },
            { name: '劇烈毒袋', quantity: 2 },
          ],
          skill: [
            { name: '毒属性強化', level: 2 },
            { name: 'アイテム使用強化', level: 1 },
          ],
        },
        {
          name: 'EXプケプケグリーヴα',
          materials: [
            { name: '毒妖鳥の重殻', quantity: 2 },
            { name: '毒妖鳥の厚鱗', quantity: 2 },
            { name: '毒妖鳥の特大喉袋', quantity: 1 },
          ],
          skill: [
            { name: '毒耐性', level: 2 },
            { name: '毒属性強化', level: 2 },
          ],
        },
      ],
    },
    {
      name: 'EXプケプケβ',
      armors: [
        {
          name: 'EXプケプケヘルムβ',
          materials: [
            { name: '毒妖鳥の重殻', quantity: 2 },
            { name: '毒妖鳥の剛翼', quantity: 1 },
            { name: '毒妖鳥の特大喉袋', quantity: 1 },
          ],
          skill: [{ name: '環境利用の知識', level: 2 }],
        },
        {
          name: 'EXプケプケメイルβ',
          materials: [
            { name: '毒妖鳥の重殻', quantity: 2 },
            { name: '毒妖鳥の厚鱗', quantity: 2 },
            { name: '毒妖鳥の特大喉袋', quantity: 1 },
          ],
          skill: [
            { name: 'アイテム使用強化', level: 1 },
            { name: 'フルチャージ', level: 1 },
          ],
        },
        {
          name: 'EXプケプケアームβ',
          materials: [
            { name: '毒妖鳥の重殻', quantity: 2 },
            { name: '毒妖鳥の厚鱗', quantity: 2 },
            { name: '強竜骨', quantity: 2 },
            { name: 'メランジェ鉱石', quantity: 2 },
          ],
          skill: [
            { name: 'フルチャージ', level: 1 },
            { name: '環境利用の知識', level: 1 },
          ],
        },
        {
          name: 'EXプケプケコイルβ',
          materials: [
            { name: '毒妖鳥の重殻', quantity: 2 },
            { name: '毒妖鳥の靭尾', quantity: 1 },
            { name: '毒妖鳥の剛翼', quantity: 1 },
            { name: '劇烈毒袋', quantity: 2 },
          ],
          skill: [
            { name: '毒属性強化', level: 1 },
            { name: 'アイテム使用強化', level: 1 },
          ],
        },
        {
          name: 'EXプケプケグリーヴβ',
          materials: [
            { name: '毒妖鳥の重殻', quantity: 2 },
            { name: '毒妖鳥の厚鱗', quantity: 2 },
            { name: '毒妖鳥の特大喉袋', quantity: 1 },
          ],
          skill: [{ name: '毒耐性', level: 2 }],
        },
      ],
    },
    {
      name: 'EXプケラグーナα',
      armors: [
        {
          name: 'EXプケラグーナヘルムα',
          materials: [
            { name: '水妖鳥の重殻', quantity: 2 },
            { name: '水妖鳥の剛翼', quantity: 2 },
            { name: '水妖鳥の特大喉袋', quantity: 2 },
            { name: '特大水袋', quantity: 2 },
          ],
          skill: [
            { name: '抜刀術【技】', level: 2 },
            { name: 'アイテム使用強化', level: 1 },
          ],
        },
        {
          name: 'EXプケラグーナメイルα',
          materials: [
            { name: '水妖鳥の重殻', quantity: 2 },
            { name: '水妖鳥の厚鱗', quantity: 2 },
            { name: '強竜骨', quantity: 3 },
          ],
          skill: [
            { name: '強化持続', level: 1 },
            { name: '抜刀術【技】', level: 1 },
          ],
        },
        {
          name: 'EXプケラグーナアームα',
          materials: [
            { name: '水妖鳥の重殻', quantity: 2 },
            { name: '水妖鳥の厚鱗', quantity: 2 },
            { name: 'デプスライト鉱石', quantity: 2 },
          ],
          skill: [
            { name: '破壊王', level: 1 },
            { name: '強化持続', level: 1 },
          ],
        },
        {
          name: 'EXプケラグーナコイルα',
          materials: [
            { name: '水妖鳥の重殻', quantity: 2 },
            { name: '水妖鳥の厚鱗', quantity: 2 },
            { name: '水妖鳥の特大喉袋', quantity: 1 },
          ],
          skill: [
            { name: '水属性攻撃強化', level: 2 },
            { name: '破壊王', level: 1 },
          ],
        },
        {
          name: 'EXプケラグーナグリーヴα',
          materials: [
            { name: '水妖鳥の重殻', quantity: 2 },
            { name: '水妖鳥の靭尾', quantity: 1 },
            { name: '毒妖鳥の剛翼', quantity: 1 },
            { name: '特大水袋', quantity: 2 },
          ],
          skill: [
            { name: 'アイテム使用強化', level: 2 },
            { name: '水属性攻撃強化', level: 2 },
          ],
        },
      ],
    },
    {
      name: 'EXプケラグーナβ',
      armors: [
        {
          name: 'EXプケラグーナヘルムβ',
          materials: [
            { name: '水妖鳥の重殻', quantity: 2 },
            { name: '水妖鳥の剛翼', quantity: 2 },
            { name: '水妖鳥の特大喉袋', quantity: 2 },
            { name: '特大水袋', quantity: 2 },
          ],
          skill: [
            { name: '抜刀術【技】', level: 1 },
            { name: 'アイテム使用強化', level: 1 },
          ],
        },
        {
          name: 'EXプケラグーナメイルβ',
          materials: [
            { name: '水妖鳥の重殻', quantity: 2 },
            { name: '水妖鳥の厚鱗', quantity: 2 },
            { name: '強竜骨', quantity: 3 },
          ],
          skill: [{ name: '強化持続', level: 1 }],
        },
        {
          name: 'EXプケラグーナアームβ',
          materials: [
            { name: '水妖鳥の重殻', quantity: 2 },
            { name: '水妖鳥の厚鱗', quantity: 2 },
            { name: 'デプスライト鉱石', quantity: 2 },
          ],
          skill: [{ name: '破壊王', level: 1 }],
        },
        {
          name: 'EXプケラグーナコイルβ',
          materials: [
            { name: '水妖鳥の重殻', quantity: 2 },
            { name: '水妖鳥の厚鱗', quantity: 2 },
            { name: '水妖鳥の特大喉袋', quantity: 1 },
          ],
          skill: [
            { name: '水属性攻撃強化', level: 1 },
            { name: '破壊王', level: 1 },
          ],
        },
        {
          name: 'EXプケラグーナグリーヴβ',
          materials: [
            { name: '水妖鳥の重殻', quantity: 2 },
            { name: '水妖鳥の靭尾', quantity: 1 },
            { name: '毒妖鳥の剛翼', quantity: 1 },
            { name: '特大水袋', quantity: 2 },
          ],
          skill: [{ name: 'アイテム使用強化', level: 2 }],
        },
      ],
    },
    {
      name: 'EXブラキα',
      armors: [
        {
          name: 'EXブラキヘルムα',
          materials: [
            { name: '砕竜の重黒曜甲', quantity: 2 },
            { name: '砕竜の重殻', quantity: 1 },
            { name: '砕竜の重頭殻', quantity: 2 },
            { name: '砕竜の天殻', quantity: 1 },
          ],
          skill: [
            { name: '挑戦者', level: 2 },
            { name: '砲弾装填数UP', level: 1 },
          ],
        },
        {
          name: 'EXブラキメイルα',
          materials: [
            { name: '砕竜の重黒曜甲', quantity: 2 },
            { name: '砕竜の剛鉄拳', quantity: 1 },
            { name: '砕竜の重頭殻', quantity: 1 },
            { name: '重竜骨', quantity: 5 },
          ],
          skill: [
            { name: 'スタミナ奪取', level: 2 },
            { name: '挑戦者', level: 1 },
          ],
        },
        {
          name: 'EXブラキアームα',
          materials: [
            { name: '砕竜の重黒曜甲', quantity: 2 },
            { name: '砕竜の重殻', quantity: 2 },
            { name: '砕竜の剛鉄拳', quantity: 1 },
            { name: '光る粘菌', quantity: 3 },
          ],
          skill: [
            { name: '挑戦者', level: 2 },
            { name: '爆破やられ耐性', level: 2 },
          ],
        },
        {
          name: 'EXブラキコイルα',
          materials: [
            { name: '砕竜の重黒曜甲', quantity: 2 },
            { name: '砕竜の重頭殻', quantity: 1 },
            { name: '砕竜の靭尾', quantity: 1 },
            { name: '光る粘菌', quantity: 3 },
          ],
          skill: [
            { name: '爆破属性強化', level: 2 },
            { name: 'スタミナ奪取', level: 1 },
          ],
        },
        {
          name: 'EXブラキグリーヴα',
          materials: [
            { name: '砕竜の重黒曜甲', quantity: 2 },
            { name: '砕竜の重殻', quantity: 1 },
            { name: '砕竜の剛鉄拳', quantity: 2 },
            { name: 'バルノスの剛爪', quantity: 4 },
          ],
          skill: [
            { name: '挑戦者', level: 2 },
            { name: '砲術', level: 2 },
          ],
        },
      ],
    },
    {
      name: 'EXブラキβ',
      armors: [
        {
          name: 'EXブラキヘルムβ',
          materials: [
            { name: '砕竜の重黒曜甲', quantity: 2 },
            { name: '砕竜の重殻', quantity: 1 },
            { name: '砕竜の重頭殻', quantity: 2 },
            { name: '砕竜の天殻', quantity: 1 },
          ],
          skill: [{ name: '挑戦者', level: 2 }],
        },
        {
          name: 'EXブラキメイルβ',
          materials: [
            { name: '砕竜の重黒曜甲', quantity: 2 },
            { name: '砕竜の剛鉄拳', quantity: 1 },
            { name: '砕竜の重頭殻', quantity: 1 },
            { name: '重竜骨', quantity: 5 },
          ],
          skill: [
            { name: 'スタミナ奪取', level: 1 },
            { name: '挑戦者', level: 1 },
          ],
        },
        {
          name: 'EXブラキアームβ',
          materials: [
            { name: '砕竜の重黒曜甲', quantity: 2 },
            { name: '砕竜の重殻', quantity: 2 },
            { name: '砕竜の剛鉄拳', quantity: 1 },
            { name: '光る粘菌', quantity: 3 },
          ],
          skill: [
            { name: '挑戦者', level: 2 },
            { name: '爆破やられ耐性', level: 1 },
          ],
        },
        {
          name: 'EXブラキコイルβ',
          materials: [
            { name: '砕竜の重黒曜甲', quantity: 2 },
            { name: '砕竜の重頭殻', quantity: 1 },
            { name: '砕竜の靭尾', quantity: 1 },
            { name: '光る粘菌', quantity: 3 },
          ],
          skill: [{ name: '爆破属性強化', level: 2 }],
        },
        {
          name: 'EXブラキグリーヴβ',
          materials: [
            { name: '砕竜の重黒曜甲', quantity: 2 },
            { name: '砕竜の重殻', quantity: 1 },
            { name: '砕竜の剛鉄拳', quantity: 2 },
            { name: 'バルノスの剛爪', quantity: 4 },
          ],
          skill: [
            { name: '挑戦者', level: 2 },
            { name: '砲術', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXブランα',
      armors: [
        {
          name: 'EXブランヘルムα',
          materials: [
            { name: '凍魚竜の重殻', quantity: 2 },
            { name: '凍魚竜の厚鱗', quantity: 2 },
            { name: '凍魚竜の特上ヒレ', quantity: 1 },
          ],
          skill: [
            { name: '水場・深雪適応', level: 2 },
            { name: '耳栓', level: 1 },
          ],
        },
        {
          name: 'EXブランメイルα',
          materials: [
            { name: '凍魚竜の重殻', quantity: 2 },
            { name: '凍魚竜の厚鱗', quantity: 2 },
            { name: '凍魚竜の剛角', quantity: 1 },
          ],
          skill: [
            { name: 'スタミナ急速回復', level: 1 },
            { name: '氷属性攻撃強化', level: 2 },
          ],
        },
        {
          name: 'EXブランアームα',
          materials: [
            { name: '凍魚竜の重殻', quantity: 2 },
            { name: '凍魚竜の剛角', quantity: 2 },
            { name: '瞬間凍結袋', quantity: 1 },
          ],
          skill: [
            { name: '氷属性攻撃強化', level: 2 },
            { name: '体力増強', level: 2 },
          ],
        },
        {
          name: 'EXブランコイルα',
          materials: [
            { name: '凍魚竜の重殻', quantity: 2 },
            { name: '凍魚竜の厚鱗', quantity: 1 },
            { name: '瞬間凍結袋', quantity: 2 },
          ],
          skill: [
            { name: '体力増強', level: 2 },
            { name: '耳栓', level: 2 },
          ],
        },
        {
          name: 'EXブラングリーヴα',
          materials: [
            { name: '凍魚竜の重殻', quantity: 2 },
            { name: '凍魚竜の剛角', quantity: 1 },
            { name: '凍魚竜の特上ヒレ', quantity: 2 },
            { name: 'グラシスメタル', quantity: 3 },
          ],
          skill: [
            { name: '耳栓', level: 2 },
            { name: '氷属性攻撃強化', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXブランβ',
      armors: [
        {
          name: 'EXブランヘルムβ',
          materials: [
            { name: '凍魚竜の重殻', quantity: 2 },
            { name: '凍魚竜の厚鱗', quantity: 2 },
            { name: '凍魚竜の特上ヒレ', quantity: 1 },
          ],
          skill: [{ name: '水場・深雪適応', level: 2 }],
        },
        {
          name: 'EXブランメイルβ',
          materials: [
            { name: '凍魚竜の重殻', quantity: 2 },
            { name: '凍魚竜の厚鱗', quantity: 2 },
            { name: '凍魚竜の剛角', quantity: 1 },
          ],
          skill: [{ name: 'スタミナ急速回復', level: 1 }],
        },
        {
          name: 'EXブランアームβ',
          materials: [
            { name: '凍魚竜の重殻', quantity: 2 },
            { name: '凍魚竜の剛角', quantity: 2 },
            { name: '瞬間凍結袋', quantity: 1 },
          ],
          skill: [{ name: '氷属性攻撃強化', level: 2 }],
        },
        {
          name: 'EXブランコイルβ',
          materials: [
            { name: '凍魚竜の重殻', quantity: 2 },
            { name: '凍魚竜の厚鱗', quantity: 1 },
            { name: '瞬間凍結袋', quantity: 2 },
          ],
          skill: [
            { name: '体力増強', level: 2 },
            { name: '耳栓', level: 1 },
          ],
        },
        {
          name: 'EXブラングリーヴβ',
          materials: [
            { name: '凍魚竜の重殻', quantity: 2 },
            { name: '凍魚竜の剛角', quantity: 1 },
            { name: '凍魚竜の特上ヒレ', quantity: 2 },
            { name: 'グラシスメタル', quantity: 3 },
          ],
          skill: [{ name: '耳栓', level: 2 }],
        },
      ],
    },
    {
      name: 'EXベリオα',
      armors: [
        {
          name: 'EXベリオヘルムα',
          materials: [
            { name: '氷牙竜の厚毛皮', quantity: 2 },
            { name: '琥珀色の重牙', quantity: 1 },
            { name: '氷牙竜の重棘', quantity: 3 },
            { name: 'ウルグの厚毛皮', quantity: 2 },
          ],
          skill: [
            { name: '回避距離UP', level: 2 },
            { name: '強化持続', level: 1 },
          ],
        },
        {
          name: 'EXベリオメイルα',
          materials: [
            { name: '氷牙竜の厚毛皮', quantity: 2 },
            { name: '氷牙竜の重殻', quantity: 2 },
            { name: '氷牙竜の剛爪', quantity: 1 },
            { name: '凍てついた氷骨', quantity: 2 },
          ],
          skill: [
            { name: '強化持続', level: 1 },
            { name: '体術', level: 1 },
          ],
        },
        {
          name: 'EXベリオアームα',
          materials: [
            { name: '氷牙竜の厚毛皮', quantity: 2 },
            { name: '氷牙竜の重殻', quantity: 1 },
            { name: '氷牙竜の靭尾', quantity: 1 },
            { name: '強靭な爪', quantity: 3 },
          ],
          skill: [
            { name: '体力回復量UP', level: 2 },
            { name: '体術', level: 2 },
          ],
        },
        {
          name: 'EXベリオコイルα',
          materials: [
            { name: '氷牙竜の厚毛皮', quantity: 2 },
            { name: '氷牙竜の重殻', quantity: 2 },
            { name: '氷牙竜の重棘', quantity: 2 },
            { name: 'ウルグの厚毛皮', quantity: 2 },
          ],
          skill: [
            { name: '納刀術', level: 1 },
            { name: '体力回復量UP', level: 1 },
          ],
        },
        {
          name: 'EXベリオグリーヴα',
          materials: [
            { name: '氷牙竜の厚毛皮', quantity: 2 },
            { name: '琥珀色の重牙', quantity: 2 },
            { name: '氷牙竜の剛爪', quantity: 1 },
            { name: '大竜玉', quantity: 1 },
          ],
          skill: [
            { name: '体術', level: 2 },
            { name: '納刀術', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXベリオβ',
      armors: [
        {
          name: 'EXベリオヘルムβ',
          materials: [
            { name: '氷牙竜の厚毛皮', quantity: 2 },
            { name: '琥珀色の重牙', quantity: 1 },
            { name: '氷牙竜の重棘', quantity: 3 },
            { name: 'ウルグの厚毛皮', quantity: 2 },
          ],
          skill: [
            { name: '回避距離UP', level: 1 },
            { name: '強化持続', level: 1 },
          ],
        },
        {
          name: 'EXベリオメイルβ',
          materials: [
            { name: '氷牙竜の厚毛皮', quantity: 2 },
            { name: '氷牙竜の重殻', quantity: 2 },
            { name: '氷牙竜の剛爪', quantity: 1 },
            { name: '凍てついた氷骨', quantity: 2 },
          ],
          skill: [{ name: '強化持続', level: 1 }],
        },
        {
          name: 'EXベリオアームβ',
          materials: [
            { name: '氷牙竜の厚毛皮', quantity: 2 },
            { name: '氷牙竜の重殻', quantity: 1 },
            { name: '氷牙竜の靭尾', quantity: 1 },
            { name: '強靭な爪', quantity: 3 },
          ],
          skill: [
            { name: '体力回復量UP', level: 2 },
            { name: '体術', level: 1 },
          ],
        },
        {
          name: 'EXベリオコイルβ',
          materials: [
            { name: '氷牙竜の厚毛皮', quantity: 2 },
            { name: '氷牙竜の重殻', quantity: 2 },
            { name: '氷牙竜の重棘', quantity: 2 },
            { name: 'ウルグの厚毛皮', quantity: 2 },
          ],
          skill: [{ name: '納刀術', level: 1 }],
        },
        {
          name: 'EXベリオグリーヴβ',
          materials: [
            { name: '氷牙竜の厚毛皮', quantity: 2 },
            { name: '琥珀色の重牙', quantity: 2 },
            { name: '氷牙竜の剛爪', quantity: 1 },
            { name: '大竜玉', quantity: 1 },
          ],
          skill: [
            { name: '体術', level: 1 },
            { name: '納刀術', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXボロスα',
      armors: [
        {
          name: 'EXボロスヘルムα',
          materials: [
            { name: '土砂竜の重甲', quantity: 2 },
            { name: '土砂竜の重殻', quantity: 2 },
            { name: '強竜骨', quantity: 3 },
            { name: '豊沃なドロ', quantity: 2 },
          ],
          skill: [
            { name: 'ガード性能', level: 2 },
            { name: 'ランナー', level: 1 },
          ],
        },
        {
          name: 'EXボロスメイルα',
          materials: [
            { name: '土砂竜の重甲', quantity: 2 },
            { name: '土砂竜の重殻', quantity: 2 },
            { name: '豊沃なドロ', quantity: 2 },
          ],
          skill: [
            { name: 'スタミナ奪取', level: 2 },
            { name: '挑戦者', level: 1 },
          ],
        },
        {
          name: 'EXボロスアームα',
          materials: [
            { name: '土砂竜の重甲', quantity: 2 },
            { name: '土砂竜の靭尾', quantity: 1 },
            { name: 'ケストドンの重殻', quantity: 2 },
          ],
          skill: [
            { name: 'ランナー', level: 1 },
            { name: 'ガード性能', level: 1 },
          ],
        },
        {
          name: 'EXボロスコイルα',
          materials: [
            { name: '土砂竜の重甲', quantity: 2 },
            { name: '土砂竜の重頭殻', quantity: 1 },
            { name: '土砂竜の剛爪', quantity: 1 },
            { name: '豊沃なドロ', quantity: 1 },
          ],
          skill: [
            { name: '挑戦者', level: 2 },
            { name: 'ガード性能', level: 1 },
          ],
        },
        {
          name: 'EXボロスグリーヴα',
          materials: [
            { name: '土砂竜の重甲', quantity: 2 },
            { name: '土砂竜の重殻', quantity: 2 },
            { name: '土砂竜の剛爪', quantity: 1 },
          ],
          skill: [
            { name: '気絶耐性', level: 2 },
            { name: 'ランナー', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXボロスβ',
      armors: [
        {
          name: 'EXボロスヘルムβ',
          materials: [
            { name: '土砂竜の重甲', quantity: 2 },
            { name: '土砂竜の重殻', quantity: 2 },
            { name: '強竜骨', quantity: 3 },
            { name: '豊沃なドロ', quantity: 2 },
          ],
          skill: [{ name: 'ガード性能', level: 2 }],
        },
        {
          name: 'EXボロスメイルβ',
          materials: [
            { name: '土砂竜の重甲', quantity: 2 },
            { name: '土砂竜の重殻', quantity: 2 },
            { name: '豊沃なドロ', quantity: 2 },
          ],
          skill: [{ name: 'スタミナ奪取', level: 2 }],
        },
        {
          name: 'EXボロスアームβ',
          materials: [
            { name: '土砂竜の重甲', quantity: 2 },
            { name: '土砂竜の靭尾', quantity: 1 },
            { name: 'ケストドンの重殻', quantity: 2 },
          ],
          skill: [{ name: 'ランナー', level: 1 }],
        },
        {
          name: 'EXボロスコイルβ',
          materials: [
            { name: '土砂竜の重甲', quantity: 2 },
            { name: '土砂竜の重頭殻', quantity: 1 },
            { name: '土砂竜の剛爪', quantity: 1 },
            { name: '豊沃なドロ', quantity: 1 },
          ],
          skill: [{ name: '挑戦者', level: 2 }],
        },
        {
          name: 'EXボロスグリーヴβ',
          materials: [
            { name: '土砂竜の重甲', quantity: 2 },
            { name: '土砂竜の重殻', quantity: 2 },
            { name: '土砂竜の剛爪', quantity: 1 },
          ],
          skill: [{ name: '気絶耐性', level: 2 }],
        },
      ],
    },
    {
      name: 'EXマムガイラα',
      armors: [
        {
          name: 'EXマムガイラヘルムα',
          materials: [
            { name: '爛輝龍の重金鱗', quantity: 4 },
            { name: '爛輝龍の重金殻', quantity: 2 },
            { name: '爛輝龍の重金巻角', quantity: 2 },
            { name: '金色の龍神玉', quantity: 1 },
          ],
          skill: [
            { name: '満足感', level: 1 },
            { name: '属性解放/装填拡張', level: 3 },
          ],
        },
        {
          name: 'EXマムガイラメイルα',
          materials: [
            { name: '爛輝龍の重金鱗', quantity: 4 },
            { name: '爛輝龍の重金殻', quantity: 2 },
            { name: '爛輝龍の重金塊', quantity: 5 },
            { name: '爛輝龍の重金巻角', quantity: 3 },
          ],
          skill: [
            { name: '早食い', level: 3 },
            { name: '満足感', level: 1 },
          ],
        },
        {
          name: 'EXマムガイラアームα',
          materials: [
            { name: '爛輝龍の重金鱗', quantity: 4 },
            { name: '爛輝龍の重金殻', quantity: 2 },
            { name: '爛輝龍の重金尾殻', quantity: 2 },
            { name: '古龍の大宝玉', quantity: 1 },
          ],
          skill: [
            { name: '超会心', level: 1 },
            { name: '広域化', level: 3 },
          ],
        },
        {
          name: 'EXマムガイラコイルα',
          materials: [
            { name: '爛輝龍の重金鱗', quantity: 4 },
            { name: '爛輝龍の重金尾殻', quantity: 2 },
            { name: '爛輝龍の重金塊', quantity: 5 },
            { name: '爛輝龍の重金巻角', quantity: 2 },
          ],
          skill: [
            { name: 'フルチャージ', level: 2 },
            { name: '満足感', level: 1 },
          ],
        },
        {
          name: 'EXマムガイラグリーヴα',
          materials: [
            { name: '爛輝龍の重金殻', quantity: 3 },
            { name: '爛輝龍の重金尾殻', quantity: 3 },
            { name: '爛輝龍の重金巻角', quantity: 4 },
            { name: '金色の龍神玉', quantity: 1 },
          ],
          skill: [
            { name: '超会心', level: 2 },
            { name: 'フルチャージ', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXマムガイラβ',
      armors: [
        {
          name: 'EXマムガイラヘルムβ',
          materials: [
            { name: '爛輝龍の重金鱗', quantity: 4 },
            { name: '爛輝龍の重金殻', quantity: 2 },
            { name: '爛輝龍の重金巻角', quantity: 2 },
            { name: '金色の龍神玉', quantity: 1 },
          ],
          skill: [{ name: '満足感', level: 1 }],
        },
        {
          name: 'EXマムガイラメイルβ',
          materials: [
            { name: '爛輝龍の重金鱗', quantity: 4 },
            { name: '爛輝龍の重金殻', quantity: 2 },
            { name: '爛輝龍の重金塊', quantity: 5 },
            { name: '爛輝龍の重金巻角', quantity: 3 },
          ],
          skill: [{ name: '早食い', level: 3 }],
        },
        {
          name: 'EXマムガイラアームβ',
          materials: [
            { name: '爛輝龍の重金鱗', quantity: 4 },
            { name: '爛輝龍の重金殻', quantity: 2 },
            { name: '爛輝龍の重金尾殻', quantity: 2 },
            { name: '古龍の大宝玉', quantity: 1 },
          ],
          skill: [{ name: '超会心', level: 1 }],
        },
        {
          name: 'EXマムガイラコイルβ',
          materials: [
            { name: '爛輝龍の重金鱗', quantity: 4 },
            { name: '爛輝龍の重金尾殻', quantity: 2 },
            { name: '爛輝龍の重金塊', quantity: 5 },
            { name: '爛輝龍の重金巻角', quantity: 2 },
          ],
          skill: [{ name: 'フルチャージ', level: 2 }],
        },
        {
          name: 'EXマムガイラグリーヴβ',
          materials: [
            { name: '爛輝龍の重金殻', quantity: 3 },
            { name: '爛輝龍の重金尾殻', quantity: 3 },
            { name: '爛輝龍の重金巻角', quantity: 4 },
            { name: '金色の龍神玉', quantity: 1 },
          ],
          skill: [{ name: '超会心', level: 2 }],
        },
      ],
    },
    {
      name: 'EX龍紋ヲ刻マレシ封α',
      armors: [
        {
          name: 'EX龍紋ヲ刻マレシ封冠α',
          materials: [
            { name: '赤龍の剛角', quantity: 3 },
            { name: '赤龍の厚鱗', quantity: 4 },
            { name: '赤龍の剛翼', quantity: 6 },
            { name: 'ジオニウム結晶体', quantity: 1 },
          ],
          skill: [
            { name: '回避性能', level: 2 },
            { name: '超会心', level: 1 },
          ],
        },
        {
          name: 'EX龍紋ヲ刻マレシ封鎧α',
          materials: [
            { name: '赤龍の重殻', quantity: 6 },
            { name: '赤龍の剛爪', quantity: 4 },
            { name: '裂光の龍脈殻', quantity: 5 },
            { name: '恐暴竜の滅鱗', quantity: 1 },
          ],
          skill: [
            { name: '属性やられ耐性', level: 2 },
            { name: '超会心', level: 1 },
          ],
        },
        {
          name: 'EX龍紋ヲ刻マレシ封甲α',
          materials: [
            { name: '赤龍の厚鱗', quantity: 7 },
            { name: '赤龍の重殻', quantity: 6 },
            { name: '裂光の龍脈殻', quantity: 5 },
            { name: '雷狼竜の天玉', quantity: 1 },
          ],
          skill: [
            { name: '属性やられ耐性', level: 1 },
            { name: '渾身', level: 1 },
          ],
        },
        {
          name: 'EX龍紋ヲ刻マレシ封帯α',
          materials: [
            { name: '赤龍の厚鱗', quantity: 7 },
            { name: '赤龍の重殻', quantity: 6 },
            { name: '赤龍の剛角', quantity: 5 },
            { name: '冰龍の零玉', quantity: 1 },
          ],
          skill: [
            { name: '回避性能', level: 2 },
            { name: '渾身', level: 1 },
          ],
        },
        {
          name: 'EX龍紋ヲ刻マレシ封靴α',
          materials: [
            { name: '赤龍の重殻', quantity: 6 },
            { name: '赤龍の剛翼', quantity: 4 },
            { name: '赤龍の重尾', quantity: 3 },
            { name: '古龍の大宝玉', quantity: 1 },
          ],
          skill: [
            { name: '超会心', level: 1 },
            { name: '渾身', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EX龍紋ヲ刻マレシ封β',
      armors: [
        {
          name: 'EX龍紋ヲ刻マレシ封冠β',
          materials: [
            { name: '赤龍の剛角', quantity: 3 },
            { name: '赤龍の厚鱗', quantity: 4 },
            { name: '赤龍の剛翼', quantity: 6 },
            { name: 'ジオニウム結晶体', quantity: 1 },
          ],
          skill: [
            { name: '回避性能', level: 1 },
            { name: '超会心', level: 1 },
          ],
        },
        {
          name: 'EX龍紋ヲ刻マレシ封鎧β',
          materials: [
            { name: '赤龍の重殻', quantity: 6 },
            { name: '赤龍の剛爪', quantity: 4 },
            { name: '裂光の龍脈殻', quantity: 5 },
            { name: '恐暴竜の滅鱗', quantity: 1 },
          ],
          skill: [
            { name: '属性やられ耐性', level: 1 },
            { name: '超会心', level: 1 },
          ],
        },
        {
          name: 'EX龍紋ヲ刻マレシ封甲β',
          materials: [
            { name: '赤龍の厚鱗', quantity: 7 },
            { name: '赤龍の重殻', quantity: 6 },
            { name: '裂光の龍脈殻', quantity: 5 },
            { name: '雷狼竜の天玉', quantity: 1 },
          ],
          skill: [{ name: '属性やられ耐性', level: 1 }],
        },
        {
          name: 'EX龍紋ヲ刻マレシ封帯β',
          materials: [
            { name: '赤龍の厚鱗', quantity: 7 },
            { name: '赤龍の重殻', quantity: 6 },
            { name: '赤龍の剛角', quantity: 5 },
            { name: '冰龍の零玉', quantity: 1 },
          ],
          skill: [{ name: '回避性能', level: 2 }],
        },
        {
          name: 'EX龍紋ヲ刻マレシ封靴β',
          materials: [
            { name: '赤龍の重殻', quantity: 6 },
            { name: '赤龍の剛翼', quantity: 4 },
            { name: '赤龍の重尾', quantity: 3 },
            { name: '古龍の大宝玉', quantity: 1 },
          ],
          skill: [{ name: '超会心', level: 1 }],
        },
      ],
    },
    {
      name: 'EX金色ノ添髪α',
      armors: [
        {
          name: 'EX金色ノ添髪α',
          materials: [
            { name: '金獅子の黒荒毛', quantity: 4 },
            { name: '金獅子の剛角', quantity: 2 },
            { name: '金獅子の尻尾', quantity: 1 },
            { name: '黄金の煌毛', quantity: 2 },
          ],
          skill: [
            { name: '弱点特効', level: 2 },
            { name: '匠', level: 2 },
          ],
        },
        {
          name: 'EX金色ノ羽織α',
          materials: [
            { name: '金獅子の黒荒毛', quantity: 4 },
            { name: '金獅子の剛爪', quantity: 2 },
            { name: '金獅子の重牙', quantity: 3 },
            { name: 'ピュアクリスタル', quantity: 1 },
          ],
          skill: [
            { name: '逆恨み', level: 2 },
            { name: '砥石使用高速化', level: 2 },
          ],
        },
        {
          name: 'EX金色ノ篭手α',
          materials: [
            { name: '金獅子の黒荒毛', quantity: 4 },
            { name: '金獅子の剛角', quantity: 1 },
            { name: '金獅子の剛爪', quantity: 2 },
            { name: '金獅子の尻尾', quantity: 1 },
          ],
          skill: [
            { name: '逆恨み', level: 1 },
            { name: '匠', level: 2 },
          ],
        },
        {
          name: 'EX金色ノ帯α',
          materials: [
            { name: '金獅子の黒荒毛', quantity: 4 },
            { name: '金獅子の剛角', quantity: 1 },
            { name: '金獅子の重牙', quantity: 4 },
            { name: '黄金の煌毛', quantity: 1 },
          ],
          skill: [
            { name: '弱点特効', level: 1 },
            { name: '匠', level: 1 },
          ],
        },
        {
          name: 'EX金色ノ袴α',
          materials: [
            { name: '金獅子の黒荒毛', quantity: 4 },
            { name: '金獅子の剛爪', quantity: 2 },
            { name: '金獅子の尻尾', quantity: 1 },
            { name: '強竜骨', quantity: 6 },
          ],
          skill: [
            { name: '逆恨み', level: 2 },
            { name: '攻撃', level: 2 },
          ],
        },
      ],
    },
    {
      name: 'EX金色ノ添髪β',
      armors: [
        {
          name: 'EX金色ノ添髪β',
          materials: [
            { name: '金獅子の黒荒毛', quantity: 4 },
            { name: '金獅子の剛角', quantity: 2 },
            { name: '金獅子の尻尾', quantity: 1 },
            { name: '黄金の煌毛', quantity: 2 },
          ],
          skill: [{ name: '弱点特効', level: 2 }],
        },
        {
          name: 'EX金色ノ羽織β',
          materials: [
            { name: '金獅子の黒荒毛', quantity: 4 },
            { name: '金獅子の剛爪', quantity: 2 },
            { name: '金獅子の重牙', quantity: 3 },
            { name: 'ピュアクリスタル', quantity: 1 },
          ],
          skill: [{ name: '逆恨み', level: 2 }],
        },
        {
          name: 'EX金色ノ篭手β',
          materials: [
            { name: '金獅子の黒荒毛', quantity: 4 },
            { name: '金獅子の剛角', quantity: 1 },
            { name: '金獅子の剛爪', quantity: 2 },
            { name: '金獅子の尻尾', quantity: 1 },
          ],
          skill: [{ name: '逆恨み', level: 1 }],
        },
        {
          name: 'EX金色ノ帯β',
          materials: [
            { name: '金獅子の黒荒毛', quantity: 4 },
            { name: '金獅子の剛角', quantity: 1 },
            { name: '金獅子の重牙', quantity: 4 },
            { name: '黄金の煌毛', quantity: 1 },
          ],
          skill: [{ name: '弱点特効', level: 1 }],
        },
        {
          name: 'EX金色ノ袴β',
          materials: [
            { name: '金獅子の黒荒毛', quantity: 4 },
            { name: '金獅子の剛爪', quantity: 2 },
            { name: '金獅子の尻尾', quantity: 1 },
            { name: '強竜骨', quantity: 6 },
          ],
          skill: [
            { name: '逆恨み', level: 2 },
            { name: '攻撃', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXバルキンヘルムα',
      armors: [
        {
          name: 'EXバルキンヘルムα',
          materials: [
            { name: '骨鎚竜の重殻', quantity: 2 },
            { name: '骨鎚竜の厚鱗', quantity: 1 },
            { name: '大竜骨塊', quantity: 2 },
            { name: 'モンスターの特濃', quantity: 3 },
          ],
          skill: [
            { name: '耐震', level: 2 },
            { name: 'KO術', level: 1 },
          ],
        },
        {
          name: 'EXバルキンメイルα',
          materials: [
            { name: '骨鎚竜の重殻', quantity: 2 },
            { name: '骨鎚竜の重油殻', quantity: 1 },
            { name: '卒倒昏睡袋', quantity: 2 },
          ],
          skill: [
            { name: '睡眠属性強化', level: 1 },
            { name: '裂傷耐性', level: 1 },
          ],
        },
        {
          name: 'EXバルキンアームα',
          materials: [
            { name: '骨鎚竜の重殻', quantity: 2 },
            { name: '骨鎚竜の厚鱗', quantity: 2 },
            { name: '骨鎚竜の重油殻', quantity: 1 },
            { name: '卒倒昏睡袋', quantity: 1 },
          ],
          skill: [
            { name: '睡眠属性強化', level: 2 },
            { name: 'ガード性能', level: 1 },
          ],
        },
        {
          name: 'EXバルキンコイルα',
          materials: [
            { name: '骨鎚竜の重殻', quantity: 2 },
            { name: '骨鎚竜の重油殻', quantity: 1 },
            { name: '大竜骨塊', quantity: 1 },
            { name: '頑強な重骨', quantity: 3 },
          ],
          skill: [
            { name: 'ガード性能', level: 2 },
            { name: '睡眠耐性', level: 2 },
          ],
        },
        {
          name: 'EXバルキングリーヴα',
          materials: [
            { name: '骨鎚竜の重殻', quantity: 2 },
            { name: '骨鎚竜の厚鱗', quantity: 1 },
            { name: '大竜骨塊', quantity: 2 },
            { name: '強竜骨', quantity: 4 },
          ],
          skill: [
            { name: '裂傷耐性', level: 2 },
            { name: 'ガード性能', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXバルキンヘルムβ',
      armors: [
        {
          name: 'EXバルキンヘルムβ',
          materials: [
            { name: '骨鎚竜の重殻', quantity: 2 },
            { name: '骨鎚竜の厚鱗', quantity: 1 },
            { name: '大竜骨塊', quantity: 2 },
            { name: 'モンスターの特濃', quantity: 3 },
          ],
          skill: [{ name: '耐震', level: 2 }],
        },
        {
          name: 'EXバルキンメイルβ',
          materials: [
            { name: '骨鎚竜の重殻', quantity: 2 },
            { name: '骨鎚竜の重油殻', quantity: 1 },
            { name: '卒倒昏睡袋', quantity: 2 },
          ],
          skill: [{ name: '睡眠属性強化', level: 1 }],
        },
        {
          name: 'EXバルキンアームβ',
          materials: [
            { name: '骨鎚竜の重殻', quantity: 2 },
            { name: '骨鎚竜の厚鱗', quantity: 2 },
            { name: '骨鎚竜の重油殻', quantity: 1 },
            { name: '卒倒昏睡袋', quantity: 1 },
          ],
          skill: [
            { name: '睡眠属性強化', level: 1 },
            { name: 'ガード性能', level: 1 },
          ],
        },
        {
          name: 'EXバルキンコイルβ',
          materials: [
            { name: '骨鎚竜の重殻', quantity: 2 },
            { name: '骨鎚竜の重油殻', quantity: 1 },
            { name: '大竜骨塊', quantity: 1 },
            { name: '頑強な重骨', quantity: 3 },
          ],
          skill: [{ name: 'ガード性能', level: 2 }],
        },
        {
          name: 'EXバルキングリーヴβ',
          materials: [
            { name: '骨鎚竜の重殻', quantity: 2 },
            { name: '骨鎚竜の厚鱗', quantity: 1 },
            { name: '大竜骨塊', quantity: 2 },
            { name: '強竜骨', quantity: 4 },
          ],
          skill: [{ name: '裂傷耐性', level: 2 }],
        },
      ],
    },
    {
      name: 'EXレイアヘルムα',
      armors: [
        {
          name: 'EXレイアヘルムα',
          materials: [
            { name: '雌火竜の重殻', quantity: 2 },
            { name: '雌火竜の厚鱗', quantity: 2 },
            { name: '雌火竜の厚翼膜', quantity: 2 },
          ],
          skill: [
            { name: '体力増強', level: 2 },
            { name: '毒属性強化', level: 1 },
          ],
        },
        {
          name: 'EXレイアメイルα',
          materials: [
            { name: '雌火竜の重殻', quantity: 2 },
            { name: '雌火竜の厚翼膜', quantity: 1 },
            { name: 'エルトライト鉱石', quantity: 5 },
          ],
          skill: [
            { name: '植生学', level: 2 },
            { name: '体力回復量UP', level: 1 },
          ],
        },
        {
          name: 'EXレイアアームα',
          materials: [
            { name: '雌火竜の重殻', quantity: 2 },
            { name: '雌火竜の厚鱗', quantity: 2 },
            { name: '雌火竜の秘棘', quantity: 1 },
          ],
          skill: [
            { name: '毒属性強化', level: 2 },
            { name: '植生学', level: 1 },
          ],
        },
        {
          name: 'EXレイアコイルα',
          materials: [
            { name: '雌火竜の重殻', quantity: 2 },
            { name: '雌火竜の厚鱗', quantity: 1 },
            { name: '強竜骨', quantity: 4 },
          ],
          skill: [
            { name: '毒耐性', level: 2 },
            { name: '体力増強', level: 1 },
          ],
        },
        {
          name: 'EXレイアグリーヴα',
          materials: [
            { name: '雌火竜の重殻', quantity: 2 },
            { name: '雌火竜の厚翼膜', quantity: 1 },
            { name: '業炎袋', quantity: 3 },
          ],
          skill: [
            { name: '体力回復量UP', level: 2 },
            { name: '毒耐性', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXレイアヘルムβ',
      armors: [
        {
          name: 'EXレイアヘルムβ',
          materials: [
            { name: '雌火竜の重殻', quantity: 2 },
            { name: '雌火竜の厚鱗', quantity: 2 },
            { name: '雌火竜の厚翼膜', quantity: 2 },
          ],
          skill: [
            { name: '体力増強', level: 1 },
            { name: '毒属性強化', level: 1 },
          ],
        },
        {
          name: 'EXレイアメイルβ',
          materials: [
            { name: '雌火竜の重殻', quantity: 2 },
            { name: '雌火竜の厚翼膜', quantity: 1 },
            { name: 'エルトライト鉱石', quantity: 5 },
          ],
          skill: [
            { name: '植生学', level: 1 },
            { name: '体力回復量UP', level: 1 },
          ],
        },
        {
          name: 'EXレイアアームβ',
          materials: [
            { name: '雌火竜の重殻', quantity: 2 },
            { name: '雌火竜の厚鱗', quantity: 2 },
            { name: '雌火竜の秘棘', quantity: 1 },
          ],
          skill: [{ name: '毒属性強化', level: 2 }],
        },
        {
          name: 'EXレイアコイルβ',
          materials: [
            { name: '雌火竜の重殻', quantity: 2 },
            { name: '雌火竜の厚鱗', quantity: 1 },
            { name: '強竜骨', quantity: 4 },
          ],
          skill: [
            { name: '毒耐性', level: 1 },
            { name: '体力増強', level: 1 },
          ],
        },
        {
          name: 'EXレイアグリーヴβ',
          materials: [
            { name: '雌火竜の重殻', quantity: 2 },
            { name: '雌火竜の厚翼膜', quantity: 1 },
            { name: '業炎袋', quantity: 3 },
          ],
          skill: [{ name: '体力回復量UP', level: 2 }],
        },
      ],
    },
    {
      name: 'EXリオハートα',
      armors: [
        {
          name: 'EXリオハートヘルムα',
          materials: [
            { name: '桜火竜の重殻', quantity: 3 },
            { name: '桜火竜の厚鱗', quantity: 1 },
            { name: '雌火竜の厚翼膜', quantity: 2 },
            { name: 'モンスターの特濃', quantity: 2 },
          ],
          skill: [
            { name: '回避距離UP', level: 2 },
            { name: 'クライマー', level: 1 },
          ],
        },
        {
          name: 'EXリオハートメイルα',
          materials: [
            { name: '桜火竜の重殻', quantity: 3 },
            { name: '桜火竜の厚鱗', quantity: 1 },
            { name: '雌火竜の厚翼膜', quantity: 1 },
            { name: 'シャムオスの厚鱗', quantity: 3 },
          ],
          skill: [
            { name: '整備', level: 2 },
            { name: '匠', level: 1 },
          ],
        },
        {
          name: 'EXリオハートアームα',
          materials: [
            { name: '桜火竜の重殻', quantity: 2 },
            { name: '桜火竜の厚鱗', quantity: 2 },
            { name: '雌火竜の秘棘', quantity: 1 },
            { name: 'ピュアクリスタル', quantity: 1 },
          ],
          skill: [
            { name: '風圧耐性', level: 2 },
            { name: '匠', level: 1 },
          ],
        },
        {
          name: 'EXリオハートコイルα',
          materials: [
            { name: '桜火竜の重殻', quantity: 2 },
            { name: '桜火竜の厚鱗', quantity: 1 },
            { name: '強竜骨', quantity: 4 },
            { name: 'メランジェ鉱石', quantity: 3 },
          ],
          skill: [
            { name: '匠', level: 1 },
            { name: '毒耐性', level: 2 },
          ],
        },
        {
          name: 'EXリオハートグリーヴα',
          materials: [
            { name: '桜火竜の重殻', quantity: 2 },
            { name: '桜火竜の厚鱗', quantity: 2 },
            { name: '雌火竜の厚翼膜', quantity: 1 },
            { name: '業炎袋', quantity: 3 },
          ],
          skill: [
            { name: '整備', level: 1 },
            { name: '風圧耐性', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXリオハートβ',
      armors: [
        {
          name: 'EXリオハートヘルムβ',
          materials: [
            { name: '桜火竜の重殻', quantity: 3 },
            { name: '桜火竜の厚鱗', quantity: 1 },
            { name: '雌火竜の厚翼膜', quantity: 2 },
            { name: 'モンスターの特濃', quantity: 2 },
          ],
          skill: [{ name: '回避距離UP', level: 2 }],
        },
        {
          name: 'EXリオハートメイルβ',
          materials: [
            { name: '桜火竜の重殻', quantity: 3 },
            { name: '桜火竜の厚鱗', quantity: 1 },
            { name: '雌火竜の厚翼膜', quantity: 1 },
            { name: 'シャムオスの厚鱗', quantity: 3 },
          ],
          skill: [{ name: '整備', level: 2 }],
        },
        {
          name: 'EXリオハートアームβ',
          materials: [
            { name: '桜火竜の重殻', quantity: 2 },
            { name: '桜火竜の厚鱗', quantity: 2 },
            { name: '雌火竜の秘棘', quantity: 1 },
            { name: 'ピュアクリスタル', quantity: 1 },
          ],
          skill: [{ name: '風圧耐性', level: 2 }],
        },
        {
          name: 'EXリオハートコイルβ',
          materials: [
            { name: '桜火竜の重殻', quantity: 2 },
            { name: '桜火竜の厚鱗', quantity: 1 },
            { name: '強竜骨', quantity: 4 },
            { name: 'メランジェ鉱石', quantity: 3 },
          ],
          skill: [
            { name: '匠', level: 1 },
            { name: '毒耐性', level: 1 },
          ],
        },
        {
          name: 'EXリオハートグリーヴβ',
          materials: [
            { name: '桜火竜の重殻', quantity: 2 },
            { name: '桜火竜の厚鱗', quantity: 2 },
            { name: '雌火竜の厚翼膜', quantity: 1 },
            { name: '業炎袋', quantity: 3 },
          ],
          skill: [{ name: '整備', level: 1 }],
        },
      ],
    },
    {
      name: 'EXゴールドルナα',
      armors: [
        {
          name: 'EXゴールドルナヘルムα',
          materials: [
            { name: '金火竜の重殻', quantity: 4 },
            { name: '金火竜の厚鱗', quantity: 2 },
            { name: '火竜の煌液', quantity: 1 },
            { name: '大竜玉', quantity: 1 },
          ],
          skill: [
            { name: '体力増強', level: 2 },
            { name: '毒属性強化', level: 2 },
          ],
        },
        {
          name: 'EXゴールドルナメイルα',
          materials: [
            { name: '金火竜の重殻', quantity: 4 },
            { name: '金火竜の厚鱗', quantity: 2 },
            { name: '金火竜の秘棘', quantity: 1 },
            { name: '龍脈の剛竜骨', quantity: 8 },
          ],
          skill: [
            { name: '精霊の加護', level: 2 },
            { name: '逆恨み', level: 1 },
          ],
        },
        {
          name: 'EXゴールドルナアームα',
          materials: [
            { name: '金火竜の重殻', quantity: 4 },
            { name: '金火竜の厚鱗', quantity: 2 },
            { name: '火竜の煌液', quantity: 2 },
            { name: '雌火竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '逆恨み', level: 2 },
            { name: '毒属性強化', level: 2 },
          ],
        },
        {
          name: 'EXゴールドルナコイルα',
          materials: [
            { name: '金火竜の重殻', quantity: 4 },
            { name: '金火竜の厚鱗', quantity: 2 },
            { name: '金火竜の秘棘', quantity: 2 },
            { name: '導きの結晶【荒地】', quantity: 3 },
          ],
          skill: [
            { name: '精霊の加護', level: 3 },
            { name: '体力増強', level: 1 },
          ],
        },
        {
          name: 'EXゴールドルナグリーヴα',
          materials: [
            { name: '金火竜の重殻', quantity: 4 },
            { name: '金火竜の厚鱗', quantity: 2 },
            { name: '火竜の煌液', quantity: 3 },
            { name: '導きの龍骨【荒地】', quantity: 3 },
          ],
          skill: [
            { name: '弱点特効', level: 2 },
            { name: '散弾・剛射強化', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXゴールドルナβ',
      armors: [
        {
          name: 'EXゴールドルナヘルムβ',
          materials: [
            { name: '金火竜の重殻', quantity: 4 },
            { name: '金火竜の厚鱗', quantity: 2 },
            { name: '火竜の煌液', quantity: 1 },
            { name: '大竜玉', quantity: 1 },
          ],
          skill: [{ name: '体力増強', level: 2 }],
        },
        {
          name: 'EXゴールドルナメイルβ',
          materials: [
            { name: '金火竜の重殻', quantity: 4 },
            { name: '金火竜の厚鱗', quantity: 2 },
            { name: '金火竜の秘棘', quantity: 1 },
            { name: '龍脈の剛竜骨', quantity: 8 },
          ],
          skill: [{ name: '精霊の加護', level: 2 }],
        },
        {
          name: 'EXゴールドルナアームβ',
          materials: [
            { name: '金火竜の重殻', quantity: 4 },
            { name: '金火竜の厚鱗', quantity: 2 },
            { name: '火竜の煌液', quantity: 2 },
            { name: '雌火竜の天鱗', quantity: 1 },
          ],
          skill: [{ name: '逆恨み', level: 2 }],
        },
        {
          name: 'EXゴールドルナコイルβ',
          materials: [
            { name: '金火竜の重殻', quantity: 4 },
            { name: '金火竜の厚鱗', quantity: 2 },
            { name: '金火竜の秘棘', quantity: 2 },
            { name: '導きの結晶【荒地】', quantity: 3 },
          ],
          skill: [{ name: '精霊の加護', level: 3 }],
        },
        {
          name: 'EXゴールドルナグリーヴβ',
          materials: [
            { name: '金火竜の重殻', quantity: 4 },
            { name: '金火竜の厚鱗', quantity: 2 },
            { name: '火竜の煌液', quantity: 3 },
            { name: '導きの龍骨【荒地】', quantity: 3 },
          ],
          skill: [{ name: '弱点特効', level: 2 }],
        },
      ],
    },
    {
      name: 'EXレウスα',
      armors: [
        {
          name: 'EXレウスヘルムα',
          materials: [
            { name: '火竜の重殻', quantity: 2 },
            { name: '火竜の厚鱗', quantity: 4 },
            { name: '火竜の剛翼爪', quantity: 2 },
            { name: '火竜の延髄', quantity: 2 },
          ],
          skill: [
            { name: '攻撃', level: 2 },
            { name: '火属性攻撃強化', level: 2 },
          ],
        },
        {
          name: 'EXレウスメイルα',
          materials: [
            { name: '火竜の重殻', quantity: 2 },
            { name: '火竜の剛翼', quantity: 2 },
            { name: '火竜の靭尾', quantity: 1 },
            { name: '火竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '弱点特効', level: 2 },
            { name: '火属性攻撃強化', level: 1 },
          ],
        },
        {
          name: 'EXレウスアームα',
          materials: [
            { name: '火竜の重殻', quantity: 2 },
            { name: '火竜の厚鱗', quantity: 1 },
            { name: '火竜の靭尾', quantity: 1 },
            { name: '重竜骨', quantity: 4 },
          ],
          skill: [
            { name: 'ジャンプ鉄人', level: 1 },
            { name: '弱点特効', level: 1 },
          ],
        },
        {
          name: 'EXレウスコイルα',
          materials: [
            { name: '火竜の重殻', quantity: 2 },
            { name: '火竜の厚鱗', quantity: 2 },
            { name: '火竜の剛翼', quantity: 2 },
            { name: '業炎袋', quantity: 3 },
          ],
          skill: [
            { name: '火属性攻撃強化', level: 2 },
            { name: '集中', level: 2 },
          ],
        },
        {
          name: 'EXレウスグリーヴα',
          materials: [
            { name: '火竜の重殻', quantity: 2 },
            { name: '火竜の剛翼', quantity: 1 },
            { name: '火竜の剛翼爪', quantity: 2 },
            { name: '業炎袋', quantity: 3 },
          ],
          skill: [
            { name: 'スリンガー装填数UP', level: 2 },
            { name: '攻撃', level: 2 },
          ],
        },
      ],
    },
    {
      name: 'EXレウスβ',
      armors: [
        {
          name: 'EXレウスヘルムβ',
          materials: [
            { name: '火竜の重殻', quantity: 2 },
            { name: '火竜の厚鱗', quantity: 4 },
            { name: '火竜の剛翼爪', quantity: 2 },
            { name: '火竜の延髄', quantity: 2 },
          ],
          skill: [{ name: '攻撃', level: 2 }],
        },
        {
          name: 'EXレウスメイルβ',
          materials: [
            { name: '火竜の重殻', quantity: 2 },
            { name: '火竜の剛翼', quantity: 2 },
            { name: '火竜の靭尾', quantity: 1 },
            { name: '火竜の天鱗', quantity: 1 },
          ],
          skill: [{ name: '弱点特効', level: 2 }],
        },
        {
          name: 'EXレウスアームβ',
          materials: [
            { name: '火竜の重殻', quantity: 2 },
            { name: '火竜の厚鱗', quantity: 1 },
            { name: '火竜の靭尾', quantity: 1 },
            { name: '重竜骨', quantity: 4 },
          ],
          skill: [{ name: 'ジャンプ鉄人', level: 1 }],
        },
        {
          name: 'EXレウスコイルβ',
          materials: [
            { name: '火竜の重殻', quantity: 2 },
            { name: '火竜の厚鱗', quantity: 2 },
            { name: '火竜の剛翼', quantity: 2 },
            { name: '業炎袋', quantity: 3 },
          ],
          skill: [{ name: '火属性攻撃強化', level: 2 }],
        },
        {
          name: 'EXレウスグリーヴβ',
          materials: [
            { name: '火竜の重殻', quantity: 2 },
            { name: '火竜の剛翼', quantity: 1 },
            { name: '火竜の剛翼爪', quantity: 2 },
            { name: '業炎袋', quantity: 3 },
          ],
          skill: [
            { name: 'スリンガー装填数UP', level: 2 },
            { name: '攻撃', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXリオソウルα',
      armors: [
        {
          name: 'EXリオソウルヘルムα',
          materials: [
            { name: '蒼火竜の重殻', quantity: 3 },
            { name: '蒼火竜の厚鱗', quantity: 2 },
            { name: '火竜の剛翼爪', quantity: 2 },
            { name: '重竜骨', quantity: 5 },
          ],
          skill: [
            { name: '超会心', level: 1 },
            { name: 'クライマー', level: 1 },
          ],
        },
        {
          name: 'EXリオソウルメイルα',
          materials: [
            { name: '蒼火竜の重殻', quantity: 3 },
            { name: '蒼火竜の厚鱗', quantity: 1 },
            { name: '蒼火竜の靭尾', quantity: 1 },
            { name: 'メランジェ鉱石', quantity: 4 },
          ],
          skill: [
            { name: '属性解放/装填拡張', level: 1 },
            { name: '破壊王', level: 1 },
          ],
        },
        {
          name: 'EXリオソウルアームα',
          materials: [
            { name: '蒼火竜の重殻', quantity: 3 },
            { name: '蒼火竜の剛翼', quantity: 2 },
            { name: '火竜の剛翼爪', quantity: 1 },
            { name: 'バルノスの剛爪', quantity: 2 },
          ],
          skill: [
            { name: '破壊王', level: 2 },
            { name: '風圧耐性', level: 1 },
          ],
        },
        {
          name: 'EXリオソウルコイルα',
          materials: [
            { name: '蒼火竜の重殻', quantity: 3 },
            { name: '蒼火竜の厚鱗', quantity: 2 },
            { name: '蒼火竜の剛翼', quantity: 1 },
            { name: '翼竜の特上皮', quantity: 3 },
          ],
          skill: [
            { name: '風圧耐性', level: 2 },
            { name: '貫通弾・竜の一矢強化', level: 1 },
          ],
        },
        {
          name: 'EXリオソウルグリーヴα',
          materials: [
            { name: '蒼火竜の重殻', quantity: 3 },
            { name: '蒼火竜の剛翼', quantity: 1 },
            { name: '蒼火竜の靭尾', quantity: 1 },
            { name: '火竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '超会心', level: 1 },
            { name: '風圧耐性', level: 2 },
          ],
        },
      ],
    },
    {
      name: 'EXリオソウルβ',
      armors: [
        {
          name: 'EXリオソウルヘルムβ',
          materials: [
            { name: '蒼火竜の重殻', quantity: 3 },
            { name: '蒼火竜の厚鱗', quantity: 2 },
            { name: '火竜の剛翼爪', quantity: 2 },
            { name: '重竜骨', quantity: 5 },
          ],
          skill: [{ name: '超会心', level: 1 }],
        },
        {
          name: 'EXリオソウルメイルβ',
          materials: [
            { name: '蒼火竜の重殻', quantity: 3 },
            { name: '蒼火竜の厚鱗', quantity: 1 },
            { name: '蒼火竜の靭尾', quantity: 1 },
            { name: 'メランジェ鉱石', quantity: 4 },
          ],
          skill: [{ name: '属性解放/装填拡張', level: 1 }],
        },
        {
          name: 'EXリオソウルアームβ',
          materials: [
            { name: '蒼火竜の重殻', quantity: 3 },
            { name: '蒼火竜の剛翼', quantity: 2 },
            { name: '火竜の剛翼爪', quantity: 1 },
            { name: 'バルノスの剛爪', quantity: 2 },
          ],
          skill: [
            { name: '破壊王', level: 1 },
            { name: '風圧耐性', level: 1 },
          ],
        },
        {
          name: 'EXリオソウルコイルβ',
          materials: [
            { name: '蒼火竜の重殻', quantity: 3 },
            { name: '蒼火竜の厚鱗', quantity: 2 },
            { name: '蒼火竜の剛翼', quantity: 1 },
            { name: '翼竜の特上皮', quantity: 3 },
          ],
          skill: [{ name: '風圧耐性', level: 2 }],
        },
        {
          name: 'EXリオソウルグリーヴβ',
          materials: [
            { name: '蒼火竜の重殻', quantity: 3 },
            { name: '蒼火竜の剛翼', quantity: 1 },
            { name: '蒼火竜の靭尾', quantity: 1 },
            { name: '火竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '超会心', level: 1 },
            { name: '風圧耐性', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXシルバーソルα',
      armors: [
        {
          name: 'EXシルバーソルヘルムα',
          materials: [
            { name: '銀火竜の重殻', quantity: 4 },
            { name: '銀火竜の厚鱗', quantity: 3 },
            { name: '銀火竜の剛翼', quantity: 2 },
            { name: '火竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '風圧耐性', level: 2 },
            { name: '火属性攻撃強化', level: 2 },
          ],
        },
        {
          name: 'EXシルバーソルメイルα',
          materials: [
            { name: '銀火竜の重殻', quantity: 4 },
            { name: '銀火竜の剛翼', quantity: 4 },
            { name: '火竜の煌液', quantity: 3 },
            { name: '導きの龍骨【陸珊瑚】', quantity: 3 },
          ],
          skill: [
            { name: '超会心', level: 2 },
            { name: '火属性攻撃強化', level: 2 },
          ],
        },
        {
          name: 'EXシルバーソルアームα',
          materials: [
            { name: '銀火竜の重殻', quantity: 6 },
            { name: '銀火竜の剛翼', quantity: 3 },
            { name: '銀火竜の靭尾', quantity: 1 },
            { name: '龍脈の剛竜骨', quantity: 8 },
          ],
          skill: [
            { name: 'スリンガー装填数UP', level: 3 },
            { name: '風圧耐性', level: 1 },
          ],
        },
        {
          name: 'EXシルバーソルコイルα',
          materials: [
            { name: '銀火竜の重殻', quantity: 4 },
            { name: '銀火竜の厚鱗', quantity: 3 },
            { name: '火竜の煌液', quantity: 2 },
            { name: '導きの結晶【陸珊瑚】', quantity: 3 },
          ],
          skill: [
            { name: '風圧耐性', level: 2 },
            { name: '超会心', level: 1 },
          ],
        },
        {
          name: 'EXシルバーソルグリーヴα',
          materials: [
            { name: '銀火竜の重殻', quantity: 6 },
            { name: '銀火竜の厚鱗', quantity: 3 },
            { name: '銀火竜の靭尾', quantity: 1 },
            { name: '大竜玉', quantity: 1 },
          ],
          skill: [
            { name: 'スリンガー装填数UP', level: 2 },
            { name: '火属性攻撃強化', level: 2 },
          ],
        },
      ],
    },
    {
      name: 'EXシルバーソルβ',
      armors: [
        {
          name: 'EXシルバーソルヘルムβ',
          materials: [
            { name: '銀火竜の重殻', quantity: 4 },
            { name: '銀火竜の厚鱗', quantity: 3 },
            { name: '銀火竜の剛翼', quantity: 2 },
            { name: '火竜の天鱗', quantity: 1 },
          ],
          skill: [{ name: '風圧耐性', level: 2 }],
        },
        {
          name: 'EXシルバーソルメイルβ',
          materials: [
            { name: '銀火竜の重殻', quantity: 4 },
            { name: '銀火竜の剛翼', quantity: 4 },
            { name: '火竜の煌液', quantity: 3 },
            { name: '導きの龍骨【陸珊瑚】', quantity: 3 },
          ],
          skill: [{ name: '超会心', level: 2 }],
        },
        {
          name: 'EXシルバーソルアームβ',
          materials: [
            { name: '銀火竜の重殻', quantity: 6 },
            { name: '銀火竜の剛翼', quantity: 3 },
            { name: '銀火竜の靭尾', quantity: 1 },
            { name: '龍脈の剛竜骨', quantity: 8 },
          ],
          skill: [{ name: 'スリンガー装填数UP', level: 3 }],
        },
        {
          name: 'EXシルバーソルコイルβ',
          materials: [
            { name: '銀火竜の重殻', quantity: 4 },
            { name: '銀火竜の厚鱗', quantity: 3 },
            { name: '火竜の煌液', quantity: 2 },
            { name: '導きの結晶【陸珊瑚】', quantity: 3 },
          ],
          skill: [
            { name: '風圧耐性', level: 1 },
            { name: '超会心', level: 1 },
          ],
        },
        {
          name: 'EXシルバーソルグリーヴβ',
          materials: [
            { name: '銀火竜の重殻', quantity: 6 },
            { name: '銀火竜の厚鱗', quantity: 3 },
            { name: '銀火竜の靭尾', quantity: 1 },
            { name: '大竜玉', quantity: 1 },
          ],
          skill: [{ name: 'スリンガー装填数UP', level: 2 }],
        },
      ],
    },
    {
      name: 'EXギエナα',
      armors: [
        {
          name: 'EXギエナヘルムα',
          materials: [
            { name: '風漂竜の厚皮', quantity: 2 },
            { name: '風漂竜の厚鱗', quantity: 2 },
            { name: '風漂竜の剛翼', quantity: 1 },
            { name: 'シャムオスの厚鱗', quantity: 3 },
          ],
          skill: [
            { name: '精霊の加護', level: 2 },
            { name: '氷属性攻撃強化', level: 2 },
          ],
        },
        {
          name: 'EXギエナメイルα',
          materials: [
            { name: '風漂竜の厚皮', quantity: 2 },
            { name: '風漂竜の剛翼', quantity: 2 },
            { name: '風漂竜の剛爪', quantity: 1 },
            { name: 'ピュアクリスタル', quantity: 1 },
          ],
          skill: [
            { name: '回避性能', level: 2 },
            { name: '精霊の加護', level: 2 },
          ],
        },
        {
          name: 'EXギエナアームα',
          materials: [
            { name: '風漂竜の厚皮', quantity: 2 },
            { name: '風漂竜の厚鱗', quantity: 1 },
            { name: '風漂竜の剛爪', quantity: 2 },
            { name: '強靭な爪', quantity: 3 },
          ],
          skill: [
            { name: '飛燕', level: 1 },
            { name: '回避性能', level: 2 },
          ],
        },
        {
          name: 'EXギエナコイルα',
          materials: [
            { name: '風漂竜の厚皮', quantity: 2 },
            { name: '風漂竜の厚鱗', quantity: 1 },
            { name: '風漂竜の重尾膜', quantity: 2 },
            { name: '瞬間凍結袋', quantity: 3 },
          ],
          skill: [
            { name: '氷属性攻撃強化', level: 2 },
            { name: '風圧耐性', level: 2 },
          ],
        },
        {
          name: 'EXギエナグリーヴα',
          materials: [
            { name: '風漂竜の厚皮', quantity: 2 },
            { name: '風漂竜の剛翼', quantity: 1 },
            { name: '風漂竜の重尾膜', quantity: 1 },
            { name: '翼竜の特上皮', quantity: 3 },
          ],
          skill: [
            { name: '氷耐性', level: 2 },
            { name: '抜刀術【技】', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXギエナβ',
      armors: [
        {
          name: 'EXギエナヘルムβ',
          materials: [
            { name: '風漂竜の厚皮', quantity: 2 },
            { name: '風漂竜の厚鱗', quantity: 2 },
            { name: '風漂竜の剛翼', quantity: 1 },
            { name: 'シャムオスの厚鱗', quantity: 3 },
          ],
          skill: [{ name: '精霊の加護', level: 2 }],
        },
        {
          name: 'EXギエナメイルβ',
          materials: [
            { name: '風漂竜の厚皮', quantity: 2 },
            { name: '風漂竜の剛翼', quantity: 2 },
            { name: '風漂竜の剛爪', quantity: 1 },
            { name: 'ピュアクリスタル', quantity: 1 },
          ],
          skill: [
            { name: '回避性能', level: 2 },
            { name: '精霊の加護', level: 1 },
          ],
        },
        {
          name: 'EXギエナアームβ',
          materials: [
            { name: '風漂竜の厚皮', quantity: 2 },
            { name: '風漂竜の厚鱗', quantity: 1 },
            { name: '風漂竜の剛爪', quantity: 2 },
            { name: '強靭な爪', quantity: 3 },
          ],
          skill: [
            { name: '飛燕', level: 1 },
            { name: '回避性能', level: 1 },
          ],
        },
        {
          name: 'EXギエナコイルβ',
          materials: [
            { name: '風漂竜の厚皮', quantity: 2 },
            { name: '風漂竜の厚鱗', quantity: 1 },
            { name: '風漂竜の重尾膜', quantity: 2 },
            { name: '瞬間凍結袋', quantity: 3 },
          ],
          skill: [
            { name: '氷属性攻撃強化', level: 2 },
            { name: '風圧耐性', level: 1 },
          ],
        },
        {
          name: 'EXギエナグリーヴβ',
          materials: [
            { name: '風漂竜の厚皮', quantity: 2 },
            { name: '風漂竜の剛翼', quantity: 1 },
            { name: '風漂竜の重尾膜', quantity: 1 },
            { name: '翼竜の特上皮', quantity: 3 },
          ],
          skill: [{ name: '氷耐性', level: 2 }],
        },
      ],
    },
    {
      name: 'EX斉天α',
      armors: [
        {
          name: 'EX斉天ノ添髪α',
          materials: [
            { name: '金獅子の怒髪天', quantity: 2 },
            { name: '羅刹の金剛角', quantity: 1 },
            { name: '黄金の煌毛', quantity: 1 },
            { name: 'ラージャンハート', quantity: 1 },
          ],
          skill: [
            { name: '耳栓', level: 3 },
            { name: '火事場力', level: 3 },
          ],
        },
        {
          name: 'EX斉天ノ衣α',
          materials: [
            { name: '金獅子の怒髪天', quantity: 2 },
            { name: '羅刹の金剛角', quantity: 1 },
            { name: '金獅子の剛角', quantity: 1 },
            { name: '古龍の大宝玉', quantity: 1 },
          ],
          skill: [
            { name: '渾身', level: 3 },
            { name: '耳栓', level: 2 },
          ],
        },
        {
          name: 'EX斉天ノ篭手α',
          materials: [
            { name: '金獅子の怒髪天', quantity: 2 },
            { name: '金獅子の剛爪', quantity: 3 },
            { name: '黄金の煌毛', quantity: 2 },
            { name: '雷顎竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: 'スタミナ急速回復', level: 2 },
            { name: '防御', level: 3 },
          ],
        },
        {
          name: 'EX斉天ノ帯α',
          materials: [
            { name: '金獅子の怒髪天', quantity: 2 },
            { name: '羅刹の金剛角', quantity: 1 },
            { name: '金獅子の剛爪', quantity: 5 },
            { name: '冰龍の零玉', quantity: 1 },
          ],
          skill: [
            { name: '渾身', level: 2 },
            { name: '火事場力', level: 2 },
          ],
        },
        {
          name: 'EX斉天ノ具足α',
          materials: [
            { name: '金獅子の怒髪天', quantity: 2 },
            { name: '金獅子の剛角', quantity: 2 },
            { name: '黄金の煌毛', quantity: 3 },
            { name: '大竜玉', quantity: 1 },
          ],
          skill: [
            { name: '体力増強', level: 3 },
            { name: '火事場力', level: 2 },
          ],
        },
      ],
    },
    {
      name: 'EX斉天β',
      armors: [
        {
          name: 'EX斉天ノ添髪β',
          materials: [
            { name: '金獅子の怒髪天', quantity: 2 },
            { name: '羅刹の金剛角', quantity: 1 },
            { name: '黄金の煌毛', quantity: 1 },
            { name: 'ラージャンハート', quantity: 1 },
          ],
          skill: [
            { name: '耳栓', level: 3 },
            { name: '火事場力', level: 1 },
          ],
        },
        {
          name: 'EX斉天ノ衣β',
          materials: [
            { name: '金獅子の怒髪天', quantity: 2 },
            { name: '羅刹の金剛角', quantity: 1 },
            { name: '金獅子の剛角', quantity: 1 },
            { name: '古龍の大宝玉', quantity: 1 },
          ],
          skill: [{ name: '渾身', level: 3 }],
        },
        {
          name: 'EX斉天ノ篭手β',
          materials: [
            { name: '金獅子の怒髪天', quantity: 2 },
            { name: '金獅子の剛爪', quantity: 3 },
            { name: '黄金の煌毛', quantity: 2 },
            { name: '雷顎竜の天鱗', quantity: 1 },
          ],
          skill: [{ name: 'スタミナ急速回復', level: 2 }],
        },
        {
          name: 'EX斉天ノ帯β',
          materials: [
            { name: '金獅子の怒髪天', quantity: 2 },
            { name: '羅刹の金剛角', quantity: 1 },
            { name: '金獅子の剛爪', quantity: 5 },
            { name: '冰龍の零玉', quantity: 1 },
          ],
          skill: [{ name: '渾身', level: 2 }],
        },
        {
          name: 'EX斉天ノ具足β',
          materials: [
            { name: '金獅子の怒髪天', quantity: 2 },
            { name: '金獅子の剛角', quantity: 2 },
            { name: '黄金の煌毛', quantity: 3 },
            { name: '大竜玉', quantity: 1 },
          ],
          skill: [{ name: '体力増強', level: 3 }],
        },
      ],
    },
    {
      name: 'EXプライドα',
      armors: [
        {
          name: 'EXプライドヘルムα',
          materials: [
            { name: '紅蓮にゆれる銀殻', quantity: 3 },
            { name: '凝縮された爆腺液', quantity: 2 },
            { name: '天を焦がす銀翼', quantity: 3 },
            { name: '爆鱗竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '耳栓', level: 2 },
            { name: '爆破属性強化', level: 2 },
          ],
        },
        {
          name: 'EXプライドメイルα',
          materials: [
            { name: '紅蓮にゆれる銀殻', quantity: 3 },
            { name: '爆鱗竜の厚鱗', quantity: 3 },
            { name: '凝縮された爆腺液', quantity: 2 },
            { name: '剛竜骨', quantity: 5 },
          ],
          skill: [
            { name: 'ガード性能', level: 2 },
            { name: '爆破やられ耐性', level: 2 },
          ],
        },
        {
          name: 'EXプライドアームα',
          materials: [
            { name: '紅蓮にゆれる銀殻', quantity: 3 },
            { name: '天を焦がす銀翼', quantity: 1 },
            { name: '爆鱗竜の重尾', quantity: 1 },
            { name: '大地を穿つ剛角', quantity: 1 },
          ],
          skill: [
            { name: '抜刀術【技】', level: 2 },
            { name: '耳栓', level: 1 },
          ],
        },
        {
          name: 'EXプライドコイルα',
          materials: [
            { name: '紅蓮にゆれる銀殻', quantity: 3 },
            { name: '爆鱗竜の厚鱗', quantity: 2 },
            { name: '爆鱗竜の剛爪', quantity: 3 },
            { name: '堅牢なねじれた角', quantity: 2 },
          ],
          skill: [
            { name: 'ボマー', level: 2 },
            { name: '抜刀術【技】', level: 1 },
          ],
        },
        {
          name: 'EXプライドグリーヴα',
          materials: [
            { name: '紅蓮にゆれる銀殻', quantity: 3 },
            { name: '爆鱗竜の厚鱗', quantity: 2 },
            { name: '天を焦がす銀翼', quantity: 2 },
            { name: '轟竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '耳栓', level: 2 },
            { name: 'ジャンプ鉄人', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXプライドβ',
      armors: [
        {
          name: 'EXプライドヘルムβ',
          materials: [
            { name: '紅蓮にゆれる銀殻', quantity: 3 },
            { name: '凝縮された爆腺液', quantity: 2 },
            { name: '天を焦がす銀翼', quantity: 3 },
            { name: '爆鱗竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '耳栓', level: 2 },
            { name: '爆破属性強化', level: 1 },
          ],
        },
        {
          name: 'EXプライドメイルβ',
          materials: [
            { name: '紅蓮にゆれる銀殻', quantity: 3 },
            { name: '爆鱗竜の厚鱗', quantity: 3 },
            { name: '凝縮された爆腺液', quantity: 2 },
            { name: '剛竜骨', quantity: 5 },
          ],
          skill: [{ name: 'ガード性能', level: 2 }],
        },
        {
          name: 'EXプライドアームβ',
          materials: [
            { name: '紅蓮にゆれる銀殻', quantity: 3 },
            { name: '天を焦がす銀翼', quantity: 1 },
            { name: '爆鱗竜の重尾', quantity: 1 },
            { name: '大地を穿つ剛角', quantity: 1 },
          ],
          skill: [{ name: '抜刀術【技】', level: 2 }],
        },
        {
          name: 'EXプライドコイルβ',
          materials: [
            { name: '紅蓮にゆれる銀殻', quantity: 3 },
            { name: '爆鱗竜の厚鱗', quantity: 2 },
            { name: '爆鱗竜の剛爪', quantity: 3 },
            { name: '堅牢なねじれた角', quantity: 2 },
          ],
          skill: [{ name: 'ボマー', level: 2 }],
        },
        {
          name: 'EXプライドグリーヴβ',
          materials: [
            { name: '紅蓮にゆれる銀殻', quantity: 3 },
            { name: '爆鱗竜の厚鱗', quantity: 2 },
            { name: '天を焦がす銀翼', quantity: 2 },
            { name: '轟竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '耳栓', level: 1 },
            { name: 'ジャンプ鉄人', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXヴァルファーα',
      armors: [
        {
          name: 'EXヴァルファーヘルムα',
          materials: [
            { name: '屍套龍の重殻', quantity: 3 },
            { name: '闇を食む牙', quantity: 1 },
            { name: '屍套龍の剛爪', quantity: 3 },
            { name: '古龍の大宝玉', quantity: 1 },
          ],
          skill: [
            { name: 'フルチャージ', level: 2 },
            { name: '龍属性攻撃強化', level: 2 },
          ],
        },
        {
          name: 'EXヴァルファーメイルα',
          materials: [
            { name: '屍套龍の重殻', quantity: 3 },
            { name: '死屍の厚龍鱗', quantity: 2 },
            { name: '死屍を紡いだ被膜', quantity: 3 },
            { name: '古龍の浄血', quantity: 2 },
          ],
          skill: [
            { name: '回復速度', level: 2 },
            { name: '龍属性攻撃強化', level: 2 },
          ],
        },
        {
          name: 'EXヴァルファーアームα',
          materials: [
            { name: '屍套龍の重殻', quantity: 3 },
            { name: '屍套龍の剛翼', quantity: 2 },
            { name: '闇を食む牙', quantity: 2 },
            { name: '太古龍骨', quantity: 5 },
          ],
          skill: [
            { name: '体力回復量UP', level: 2 },
            { name: '早食い', level: 1 },
          ],
        },
        {
          name: 'EXヴァルファーコイルα',
          materials: [
            { name: '屍套龍の重殻', quantity: 3 },
            { name: '死屍の厚龍鱗', quantity: 2 },
            { name: '屍套龍の剛翼', quantity: 4 },
            { name: '死屍を紡いだ被膜', quantity: 2 },
          ],
          skill: [
            { name: '早食い', level: 2 },
            { name: 'フルチャージ', level: 1 },
          ],
        },
        {
          name: 'EXヴァルファーグリーヴα',
          materials: [
            { name: '屍套龍の重殻', quantity: 3 },
            { name: '死屍の厚龍鱗', quantity: 3 },
            { name: '屍套龍の重尾', quantity: 1 },
            { name: '死屍を紡いだ被膜', quantity: 2 },
          ],
          skill: [
            { name: '瘴気耐性', level: 2 },
            { name: '龍属性攻撃強化', level: 2 },
          ],
        },
      ],
    },
    {
      name: 'EXヴァルファーβ',
      armors: [
        {
          name: 'EXヴァルファーヘルムβ',
          materials: [
            { name: '屍套龍の重殻', quantity: 3 },
            { name: '闇を食む牙', quantity: 1 },
            { name: '屍套龍の剛爪', quantity: 3 },
            { name: '古龍の大宝玉', quantity: 1 },
          ],
          skill: [{ name: 'フルチャージ', level: 2 }],
        },
        {
          name: 'EXヴァルファーメイルβ',
          materials: [
            { name: '屍套龍の重殻', quantity: 3 },
            { name: '死屍の厚龍鱗', quantity: 2 },
            { name: '死屍を紡いだ被膜', quantity: 3 },
            { name: '古龍の浄血', quantity: 2 },
          ],
          skill: [
            { name: '回復速度', level: 2 },
            { name: '龍属性攻撃強化', level: 1 },
          ],
        },
        {
          name: 'EXヴァルファーアームβ',
          materials: [
            { name: '屍套龍の重殻', quantity: 3 },
            { name: '屍套龍の剛翼', quantity: 2 },
            { name: '闇を食む牙', quantity: 2 },
            { name: '太古龍骨', quantity: 5 },
          ],
          skill: [{ name: '体力回復量UP', level: 2 }],
        },
        {
          name: 'EXヴァルファーコイルβ',
          materials: [
            { name: '屍套龍の重殻', quantity: 3 },
            { name: '死屍の厚龍鱗', quantity: 2 },
            { name: '屍套龍の剛翼', quantity: 4 },
            { name: '死屍を紡いだ被膜', quantity: 2 },
          ],
          skill: [{ name: '早食い', level: 2 }],
        },
        {
          name: 'EXヴァルファーグリーヴβ',
          materials: [
            { name: '屍套龍の重殻', quantity: 3 },
            { name: '死屍の厚龍鱗', quantity: 3 },
            { name: '屍套龍の重尾', quantity: 1 },
            { name: '死屍を紡いだ被膜', quantity: 2 },
          ],
          skill: [{ name: '瘴気耐性', level: 2 }],
        },
      ],
    },
    {
      name: 'EXゾークα',
      armors: [
        {
          name: 'EXゾークヘルムα',
          materials: [
            { name: '滅尽龍の重殻', quantity: 3 },
            { name: '殲滅の大剛角', quantity: 3 },
            { name: '無窮の新生殻', quantity: 4 },
            { name: '斬竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '渾身', level: 2 },
            { name: 'スタミナ急速回復', level: 1 },
          ],
        },
        {
          name: 'EXゾークメイルα',
          materials: [
            { name: '滅尽龍の重殻', quantity: 3 },
            { name: '滅尽龍の剛爪', quantity: 3 },
            { name: '無窮の新生殻', quantity: 2 },
            { name: '迅竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: 'スタミナ急速回復', level: 2 },
            { name: '渾身', level: 1 },
          ],
        },
        {
          name: 'EXゾークアームα',
          materials: [
            { name: '滅尽龍の重殻', quantity: 3 },
            { name: '不滅の厚龍鱗', quantity: 2 },
            { name: '滅尽龍の重尾', quantity: 1 },
            { name: '砕竜の天殻', quantity: 1 },
          ],
          skill: [
            { name: '挑戦者', level: 2 },
            { name: '攻撃', level: 2 },
          ],
        },
        {
          name: 'EXゾークコイルα',
          materials: [
            { name: '滅尽龍の重殻', quantity: 3 },
            { name: '不滅の厚龍鱗', quantity: 1 },
            { name: '殲滅の大剛角', quantity: 2 },
            { name: '火竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '攻撃', level: 3 },
            { name: '耳栓', level: 1 },
          ],
        },
        {
          name: 'EXゾークグリーヴα',
          materials: [
            { name: '滅尽龍の重殻', quantity: 3 },
            { name: '不滅の厚龍鱗', quantity: 2 },
            { name: '無窮の新生殻', quantity: 2 },
            { name: '爆鱗竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '耳栓', level: 2 },
            { name: '挑戦者', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXゾークβ',
      armors: [
        {
          name: 'EXゾークヘルムβ',
          materials: [
            { name: '滅尽龍の重殻', quantity: 3 },
            { name: '殲滅の大剛角', quantity: 3 },
            { name: '無窮の新生殻', quantity: 4 },
            { name: '斬竜の天鱗', quantity: 1 },
          ],
          skill: [{ name: '渾身', level: 2 }],
        },
        {
          name: 'EXゾークメイルβ',
          materials: [
            { name: '滅尽龍の重殻', quantity: 3 },
            { name: '滅尽龍の剛爪', quantity: 3 },
            { name: '無窮の新生殻', quantity: 2 },
            { name: '迅竜の天鱗', quantity: 1 },
          ],
          skill: [{ name: 'スタミナ急速回復', level: 2 }],
        },
        {
          name: 'EXゾークアームβ',
          materials: [
            { name: '滅尽龍の重殻', quantity: 3 },
            { name: '不滅の厚龍鱗', quantity: 2 },
            { name: '滅尽龍の重尾', quantity: 1 },
            { name: '砕竜の天殻', quantity: 1 },
          ],
          skill: [
            { name: '挑戦者', level: 2 },
            { name: '攻撃', level: 1 },
          ],
        },
        {
          name: 'EXゾークコイルβ',
          materials: [
            { name: '滅尽龍の重殻', quantity: 3 },
            { name: '不滅の厚龍鱗', quantity: 1 },
            { name: '殲滅の大剛角', quantity: 2 },
            { name: '火竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '攻撃', level: 2 },
            { name: '耳栓', level: 1 },
          ],
        },
        {
          name: 'EXゾークグリーヴβ',
          materials: [
            { name: '滅尽龍の重殻', quantity: 3 },
            { name: '不滅の厚龍鱗', quantity: 2 },
            { name: '無窮の新生殻', quantity: 2 },
            { name: '爆鱗竜の天鱗', quantity: 1 },
          ],
          skill: [{ name: '耳栓', level: 2 }],
        },
      ],
    },
    {
      name: 'EXグリードα',
      armors: [
        {
          name: 'EXグリードヘルムα',
          materials: [
            { name: '恐暴竜の厚黒皮', quantity: 3 },
            { name: '恐暴竜の厚黒鱗', quantity: 2 },
            { name: '極悪な牙', quantity: 2 },
            { name: '兇爪竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '破壊王', level: 1 },
            { name: '匠', level: 2 },
          ],
        },
        {
          name: 'EXグリードメイルα',
          materials: [
            { name: '恐暴竜の厚黒皮', quantity: 3 },
            { name: '極悪な牙', quantity: 4 },
            { name: '恐暴竜の重尾', quantity: 1 },
            { name: '恐暴竜の滅鱗', quantity: 1 },
          ],
          skill: [
            { name: '早食い', level: 1 },
            { name: '匠', level: 2 },
          ],
        },
        {
          name: 'EXグリードアームα',
          materials: [
            { name: '恐暴竜の厚黒皮', quantity: 3 },
            { name: '恐暴竜の厚黒鱗', quantity: 2 },
            { name: 'ドス黒い血', quantity: 3 },
            { name: '剛竜骨', quantity: 5 },
          ],
          skill: [
            { name: 'スタミナ奪取', level: 2 },
            { name: '破壊王', level: 1 },
          ],
        },
        {
          name: 'EXグリードコイルα',
          materials: [
            { name: '恐暴竜の厚黒皮', quantity: 3 },
            { name: 'ドス黒い血', quantity: 3 },
            { name: '恐暴竜の剛鉤爪', quantity: 1 },
            { name: '火竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: 'スタミナ奪取', level: 2 },
            { name: '匠', level: 1 },
          ],
        },
        {
          name: 'EXグリードグリーヴα',
          materials: [
            { name: '恐暴竜の厚黒皮', quantity: 3 },
            { name: '恐暴竜の厚黒鱗', quantity: 2 },
            { name: '恐暴竜の剛鉤爪', quantity: 1 },
            { name: 'いにしえの巨龍骨', quantity: 1 },
          ],
          skill: [
            { name: '早食い', level: 2 },
            { name: 'スタミナ奪取', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXグリードβ',
      armors: [
        {
          name: 'EXグリードヘルムβ',
          materials: [
            { name: '恐暴竜の厚黒皮', quantity: 3 },
            { name: '恐暴竜の厚黒鱗', quantity: 2 },
            { name: '極悪な牙', quantity: 2 },
            { name: '兇爪竜の天鱗', quantity: 1 },
          ],
          skill: [{ name: '破壊王', level: 1 }],
        },
        {
          name: 'EXグリードメイルβ',
          materials: [
            { name: '恐暴竜の厚黒皮', quantity: 3 },
            { name: '極悪な牙', quantity: 4 },
            { name: '恐暴竜の重尾', quantity: 1 },
            { name: '恐暴竜の滅鱗', quantity: 1 },
          ],
          skill: [{ name: '早食い', level: 1 }],
        },
        {
          name: 'EXグリードアームβ',
          materials: [
            { name: '恐暴竜の厚黒皮', quantity: 3 },
            { name: '恐暴竜の厚黒鱗', quantity: 2 },
            { name: 'ドス黒い血', quantity: 3 },
            { name: '剛竜骨', quantity: 5 },
          ],
          skill: [{ name: 'スタミナ奪取', level: 2 }],
        },
        {
          name: 'EXグリードコイルβ',
          materials: [
            { name: '恐暴竜の厚黒皮', quantity: 3 },
            { name: 'ドス黒い血', quantity: 3 },
            { name: '恐暴竜の剛鉤爪', quantity: 1 },
            { name: '火竜の天鱗', quantity: 1 },
          ],
          skill: [{ name: 'スタミナ奪取', level: 2 }],
        },
        {
          name: 'EXグリードグリーヴβ',
          materials: [
            { name: '恐暴竜の厚黒皮', quantity: 3 },
            { name: '恐暴竜の厚黒鱗', quantity: 2 },
            { name: '恐暴竜の剛鉤爪', quantity: 1 },
            { name: 'いにしえの巨龍骨', quantity: 1 },
          ],
          skill: [
            { name: '早食い', level: 1 },
            { name: 'スタミナ奪取', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXブリーナα',
      armors: [
        {
          name: 'EXブリーナヘルムα',
          materials: [
            { name: '氷霜をまとう皮', quantity: 3 },
            { name: '風漂竜の厚鱗', quantity: 2 },
            { name: '漆黒の氷刃爪', quantity: 1 },
            { name: 'グラシスメタル', quantity: 5 },
          ],
          skill: [
            { name: '腹減り耐性', level: 2 },
            { name: '回避距離UP', level: 1 },
          ],
        },
        {
          name: 'EXブリーナメイルα',
          materials: [
            { name: '氷霜をまとう皮', quantity: 3 },
            { name: '風漂竜の厚鱗', quantity: 2 },
            { name: '冷厳なる翼', quantity: 2 },
            { name: '風漂竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '集中', level: 2 },
            { name: 'ランナー', level: 1 },
          ],
        },
        {
          name: 'EXブリーナアームα',
          materials: [
            { name: '氷霜をまとう皮', quantity: 3 },
            { name: '風漂竜の厚鱗', quantity: 2 },
            { name: '冷厳なる翼', quantity: 1 },
            { name: 'ピュアクリスタル', quantity: 1 },
          ],
          skill: [
            { name: '抜刀術【技】', level: 2 },
            { name: '腹減り耐性', level: 1 },
          ],
        },
        {
          name: 'EXブリーナコイルα',
          materials: [
            { name: '氷霜をまとう皮', quantity: 3 },
            { name: '風漂竜の厚鱗', quantity: 2 },
            { name: '冷厳なる翼', quantity: 1 },
            { name: '瞬間凍結袋', quantity: 4 },
          ],
          skill: [
            { name: '回避距離UP', level: 2 },
            { name: '集中', level: 1 },
          ],
        },
        {
          name: 'EXブリーナグリーヴα',
          materials: [
            { name: '氷霜をまとう皮', quantity: 3 },
            { name: '風漂竜の厚鱗', quantity: 2 },
            { name: '漆黒の氷刃爪', quantity: 2 },
            { name: '凍てついた氷骨', quantity: 3 },
          ],
          skill: [
            { name: 'ランナー', level: 2 },
            { name: '散弾・剛射強化', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'EXブリーナβ',
      armors: [
        {
          name: 'EXブリーナヘルムβ',
          materials: [
            { name: '氷霜をまとう皮', quantity: 3 },
            { name: '風漂竜の厚鱗', quantity: 2 },
            { name: '漆黒の氷刃爪', quantity: 1 },
            { name: 'グラシスメタル', quantity: 5 },
          ],
          skill: [{ name: '腹減り耐性', level: 2 }],
        },
        {
          name: 'EXブリーナメイルβ',
          materials: [
            { name: '氷霜をまとう皮', quantity: 3 },
            { name: '風漂竜の厚鱗', quantity: 2 },
            { name: '冷厳なる翼', quantity: 2 },
            { name: '風漂竜の天鱗', quantity: 1 },
          ],
          skill: [{ name: '集中', level: 2 }],
        },
        {
          name: 'EXブリーナアームβ',
          materials: [
            { name: '氷霜をまとう皮', quantity: 3 },
            { name: '風漂竜の厚鱗', quantity: 2 },
            { name: '冷厳なる翼', quantity: 1 },
            { name: 'ピュアクリスタル', quantity: 1 },
          ],
          skill: [{ name: '抜刀術【技】', level: 2 }],
        },
        {
          name: 'EXブリーナコイルβ',
          materials: [
            { name: '氷霜をまとう皮', quantity: 3 },
            { name: '風漂竜の厚鱗', quantity: 2 },
            { name: '冷厳なる翼', quantity: 1 },
            { name: '瞬間凍結袋', quantity: 4 },
          ],
          skill: [{ name: '回避距離UP', level: 2 }],
        },
        {
          name: 'EXブリーナグリーヴβ',
          materials: [
            { name: '氷霜をまとう皮', quantity: 3 },
            { name: '風漂竜の厚鱗', quantity: 2 },
            { name: '漆黒の氷刃爪', quantity: 2 },
            { name: '凍てついた氷骨', quantity: 3 },
          ],
          skill: [{ name: 'ランナー', level: 2 }],
        },
      ],
    },
    {
      name: 'EXブラキウムα',
      armors: [
        {
          name: 'EXブラキウムヘルムα',
          materials: [
            { name: '不壊の黒曜甲', quantity: 2 },
            { name: '砕竜の弾頭殻', quantity: 1 },
            { name: '砕竜の撃滅拳', quantity: 2 },
            { name: '古龍の大宝玉', quantity: 1 },
          ],
          skill: [
            { name: '弱点特効', level: 1 },
            { name: 'ガード性能', level: 2 },
          ],
        },
        {
          name: 'EXブラキウムメイルα',
          materials: [
            { name: '不壊の黒曜甲', quantity: 2 },
            { name: '砕竜の弾頭殻', quantity: 1 },
            { name: '臨界極まる粘菌', quantity: 3 },
            { name: '砕竜の天殻', quantity: 1 },
          ],
          skill: [
            { name: '挑戦者', level: 2 },
            { name: '爆破属性強化', level: 2 },
          ],
        },
        {
          name: 'EXブラキウムアームα',
          materials: [
            { name: '不壊の黒曜甲', quantity: 2 },
            { name: '砕竜の撃滅拳', quantity: 2 },
            { name: '臨界極まる粘菌', quantity: 3 },
            { name: '地啼龍の顕玉', quantity: 1 },
          ],
          skill: [
            { name: '挑戦者', level: 2 },
            { name: '砲術', level: 3 },
          ],
        },
        {
          name: 'EXブラキウムコイルα',
          materials: [
            { name: '不壊の黒曜甲', quantity: 2 },
            { name: '砕竜の撃滅拳', quantity: 2 },
            { name: '砕竜の靭尾', quantity: 1 },
            { name: '爆鱗竜の天鱗', quantity: 1 },
          ],
          skill: [
            { name: '挑戦者', level: 3 },
            { name: '砲術', level: 2 },
          ],
        },
        {
          name: 'EXブラキウムグリーヴα',
          materials: [
            { name: '不壊の黒曜甲', quantity: 2 },
            { name: '砕竜の弾頭殻', quantity: 2 },
            { name: '臨界極まる粘菌', quantity: 3 },
            { name: '不滅の炉心殻', quantity: 1 },
          ],
          skill: [
            { name: '弱点特効', level: 2 },
            { name: '砥石使用高速化', level: 3 },
          ],
        },
      ],
    },
    {
      name: 'EXブラキウムβ',
      armors: [
        {
          name: 'EXブラキウムヘルムβ',
          materials: [
            { name: '不壊の黒曜甲', quantity: 2 },
            { name: '砕竜の弾頭殻', quantity: 1 },
            { name: '砕竜の撃滅拳', quantity: 2 },
            { name: '古龍の大宝玉', quantity: 1 },
          ],
          skill: [{ name: '弱点特効', level: 1 }],
        },
        {
          name: 'EXブラキウムメイルβ',
          materials: [
            { name: '不壊の黒曜甲', quantity: 2 },
            { name: '砕竜の弾頭殻', quantity: 1 },
            { name: '臨界極まる粘菌', quantity: 3 },
            { name: '砕竜の天殻', quantity: 1 },
          ],
          skill: [{ name: '挑戦者', level: 2 }],
        },
        {
          name: 'EXブラキウムアームβ',
          materials: [
            { name: '不壊の黒曜甲', quantity: 2 },
            { name: '砕竜の撃滅拳', quantity: 2 },
            { name: '臨界極まる粘菌', quantity: 3 },
            { name: '地啼龍の顕玉', quantity: 1 },
          ],
          skill: [{ name: '挑戦者', level: 2 }],
        },
        {
          name: 'EXブラキウムコイルβ',
          materials: [
            { name: '不壊の黒曜甲', quantity: 2 },
            { name: '砕竜の撃滅拳', quantity: 2 },
            { name: '砕竜の靭尾', quantity: 1 },
            { name: '爆鱗竜の天鱗', quantity: 1 },
          ],
          skill: [{ name: '挑戦者', level: 3 }],
        },
        {
          name: 'EXブラキウムグリーヴβ',
          materials: [
            { name: '不壊の黒曜甲', quantity: 2 },
            { name: '砕竜の弾頭殻', quantity: 2 },
            { name: '臨界極まる粘菌', quantity: 3 },
            { name: '不滅の炉心殻', quantity: 1 },
          ],
          skill: [{ name: '弱点特効', level: 2 }],
        },
      ],
    },
  ],
}

export default ex
