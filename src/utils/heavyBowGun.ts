import { WeaponType } from './materialsTypes'

const greatsword: WeaponType = {
  type: 'ヘヴィボウガン',
  derivations: [
    {
      name: '防衛隊系',
      weapons: [
        {
          name: '防衛隊機関式重弩Ⅰ',
          materials: [{ name: '鉄鉱石', quantity: 1 }],
        },
        {
          name: '防衛隊機関式重弩Ⅱ',
          materials: [{ name: '蛮顎竜の鱗', quantity: 1 }],
        },
        {
          name: '防衛隊機関式重弩Ⅲ',
          materials: [{ name: '勇気の証', quantity: 1 }],
        },
        {
          name: '防衛隊機関式重弩Ⅳ',
          materials: [{ name: '桜火竜の上鱗', quantity: 1 }],
        },
        {
          name: '防衛隊機関式重弩Ⅴ',
          materials: [{ name: '不滅の龍鱗', quantity: 1 }],
        },
      ],
    },
    {
      name: '鉱石素材系',
      weapons: [
        {
          name: 'アイアンアサルトⅠ',
          materials: [{ name: '鉄鉱石', quantity: 2 }],
        },
        {
          name: 'アイアンアサルトⅡ',
          materials: [
            { name: '大地の結晶', quantity: 2 },
            { name: '鉄鉱石', quantity: 5 },
            { name: 'マカライト鉱石', quantity: 2 },
          ],
        },
        {
          name: 'アイアンアサルトⅢ',
          materials: [
            { name: '大地の結晶', quantity: 2 },
            { name: '鉄鉱石', quantity: 5 },
            { name: 'マカライト鉱石', quantity: 2 },
          ],
        },
        {
          name: 'スティールアサルトⅠ',
          materials: [
            { name: 'マカライト鉱石', quantity: 5 },
            { name: '竜骨【中】', quantity: 2 },
            { name: 'ドラグライト鉱石', quantity: 2 },
          ],
        },
        {
          name: 'スティールアサルトⅡ',
          materials: [
            { name: 'マカライト鉱石', quantity: 10 },
            { name: 'ドラグライト鉱石', quantity: 5 },
            { name: '上竜骨', quantity: 2 },
            { name: '深海の結晶', quantity: 2 },
          ],
        },
        {
          name: 'スティールアサルトⅢ',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 5 },
            { name: 'カブレライト鉱石', quantity: 8 },
            { name: '龍脈の結晶', quantity: 2 },
          ],
        },
        {
          name: 'クロムアサルトⅠ',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 10 },
            { name: 'カブレライト鉱石', quantity: 5 },
            { name: '龍脈の結晶', quantity: 3 },
            { name: 'ユニオン鉱石', quantity: 8 },
          ],
        },
        {
          name: 'クロムアサルトⅡ',
          materials: [
            { name: '古龍の血', quantity: 2 },
            { name: '獄炎石', quantity: 1 },
            { name: 'カブレライト鉱石', quantity: 20 },
            { name: 'ユニオン鉱石', quantity: 13 },
          ],
        },
        {
          name: 'フェイタルアサルトⅠ',
          materials: [
            { name: 'カブレライト鉱石', quantity: 4 },
            { name: '霊脈の結晶', quantity: 2 },
            { name: 'グラシスメタル', quantity: 1 },
            { name: 'エルトライト鉱石', quantity: 2 },
          ],
        },
        {
          name: 'フェイタルアサルトⅡ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 2 },
            { name: 'エルトライト鉱石', quantity: 4 },
            { name: '重竜骨', quantity: 3 },
            { name: 'デプスライト鉱石', quantity: 2 },
          ],
        },
        {
          name: 'フェイタルアサルトⅢ',
          materials: [
            { name: '古龍の浄血', quantity: 3 },
            { name: 'メランジェ鉱石', quantity: 3 },
            { name: 'エルトライト鉱石', quantity: 6 },
            { name: 'ピュアクリスタル', quantity: 1 },
          ],
        },
        {
          name: 'アイシクルアサルトⅠ',
          materials: [
            { name: '凍てついた氷骨', quantity: 3 },
            { name: '瞬間凍結袋', quantity: 4 },
            { name: '氷牙竜の剛爪', quantity: 3 },
            { name: '氷牙竜の重殻', quantity: 4 },
          ],
        },
        {
          name: 'アイシクルアサルトⅡ',
          materials: [
            { name: '琥珀色の重牙', quantity: 3 },
            { name: '漆黒の氷刃爪', quantity: 2 },
            { name: '大竜玉', quantity: 1 },
            { name: '氷牙竜の重棘', quantity: 3 },
          ],
        },
        {
          name: 'ゲェレラスフィーネ',
          materials: [
            { name: '氷牙竜チケット', quantity: 3 },
            { name: '白銀の氷刃牙', quantity: 3 },
            { name: '氷河を砕く剣爪', quantity: 1 },
            { name: 'グラシスメタル', quantity: 5 },
          ],
        },
        {
          name: 'ネルガルグレア',
          materials: [
            { name: '滅尽龍の再生殻', quantity: 4 },
            { name: '滅尽龍の尻尾', quantity: 2 },
            { name: '滅尽龍の堅殻', quantity: 2 },
            { name: '滅尽龍の尖爪', quantity: 3 },
          ],
        },
        {
          name: '撃滅の砲火',
          materials: [
            { name: '滅尽龍の宝玉', quantity: 1 },
            { name: '滅尽龍の尖爪', quantity: 5 },
            { name: '滅尽龍の大角', quantity: 5 },
            { name: '冥灯龍の幽角', quantity: 2 },
          ],
        },
        {
          name: '撃滅の砲火【戦】',
          materials: [
            { name: '殲滅の大剛角', quantity: 3 },
            { name: '滅尽龍の剛爪', quantity: 4 },
            { name: '無窮の新生殻', quantity: 5 },
            { name: '古龍の大宝玉', quantity: 1 },
          ],
        },
        {
          name: 'アクアアサルトⅠ',
          materials: [
            { name: '大地の結晶', quantity: 3 },
            { name: '泥魚竜の鱗', quantity: 3 },
            { name: '泥魚竜の甲殻', quantity: 1 },
            { name: '水袋', quantity: 1 },
          ],
        },
        {
          name: 'アクアアサルトⅡ',
          materials: [
            { name: '咬魚の皮', quantity: 3 },
            { name: '泥魚竜の牙', quantity: 2 },
            { name: '泥魚竜のヒレ', quantity: 3 },
            { name: 'ドラグライト鉱石', quantity: 5 },
          ],
        },
        {
          name: 'アクアアサルトⅢ',
          materials: [
            { name: '咬魚のヒゲ', quantity: 3 },
            { name: '泥魚竜の牙', quantity: 4 },
            { name: '上竜骨', quantity: 2 },
            { name: '深海の結晶', quantity: 3 },
          ],
        },
        {
          name: 'ウォーターキャノンⅠ',
          materials: [
            { name: '泥魚竜の上鱗', quantity: 3 },
            { name: '泥魚竜の堅殻', quantity: 2 },
            { name: '咬魚の上皮', quantity: 5 },
            { name: 'カブレライト鉱石', quantity: 5 },
          ],
        },
        {
          name: 'ウォーターキャノンⅡ',
          materials: [
            { name: '泥魚竜の上ヒレ', quantity: 4 },
            { name: '大水袋', quantity: 3 },
            { name: '咬魚の大ヒゲ', quantity: 3 },
            { name: 'ユニオン鉱石', quantity: 5 },
          ],
        },
        {
          name: 'ウォーターキャノンⅢ',
          materials: [
            { name: '古龍の血', quantity: 3 },
            { name: '竜玉', quantity: 1 },
            { name: '泥魚竜の上ヒレ', quantity: 6 },
            { name: '泥魚竜の鋭牙', quantity: 5 },
          ],
        },
        {
          name: 'ウォーターキャノンⅣ',
          materials: [
            { name: '咬魚の厚皮', quantity: 2 },
            { name: '泥魚竜の厚鱗', quantity: 3 },
            { name: '泥魚竜の重牙', quantity: 1 },
            { name: '泥魚竜の特上ヒレ', quantity: 1 },
          ],
        },
        {
          name: 'ナイトメアキャノンⅠ',
          materials: [
            { name: 'ゴム質の重殻', quantity: 2 },
            { name: '卒倒昏睡袋', quantity: 1 },
            { name: '浮眠竜の厚毛皮', quantity: 3 },
            { name: '浮眠竜の剛翼', quantity: 2 },
          ],
        },
        {
          name: 'ナイトメアキャノンⅡ',
          materials: [
            { name: '黒角竜の重甲', quantity: 2 },
            { name: '大竜玉', quantity: 1 },
            { name: '浮眠竜の剛翼', quantity: 3 },
            { name: '浮眠竜の厚鱗', quantity: 5 },
          ],
        },
        {
          name: 'ヒドゥンスナイパー',
          materials: [
            { name: 'メランジェ鉱石', quantity: 1 },
            { name: '迅竜の厚鱗', quantity: 3 },
            { name: '迅竜の重牙', quantity: 2 },
            { name: '迅竜の重尾棘', quantity: 2 },
          ],
        },
        {
          name: 'ヒドゥンスナイパー改',
          materials: [
            { name: '迅竜の天鱗', quantity: 1 },
            { name: '迅竜の靭尾', quantity: 1 },
            { name: '迅竜の剛刃翼', quantity: 4 },
            { name: '雷顎竜の重牙', quantity: 3 },
          ],
        },
        {
          name: '夜砲【黒風】',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '迅竜の重牙', quantity: 4 },
            { name: '迅竜の剛刃翼', quantity: 4 },
            { name: '闇を食む牙', quantity: 2 },
          ],
        },
        {
          name: 'イルミナルアサルトⅠ',
          materials: [
            { name: '眩鳥の鱗', quantity: 3 },
            { name: '眩鳥の爪', quantity: 2 },
            { name: '眩鳥の発光膜', quantity: 1 },
          ],
        },
        {
          name: 'イルミナルアサルトⅡ',
          materials: [
            { name: 'とがった爪', quantity: 3 },
            { name: '眩鳥の爪', quantity: 3 },
            { name: '眩鳥の発光膜', quantity: 2 },
            { name: '風漂竜の尾膜', quantity: 2 },
          ],
        },
        {
          name: 'アルマデステリオⅠ',
          materials: [
            { name: 'ライトクリスタル', quantity: 1 },
            { name: '眩鳥の上鱗', quantity: 5 },
            { name: '眩鳥の尖爪', quantity: 3 },
            { name: '眩鳥の閃光膜', quantity: 1 },
          ],
        },
        {
          name: 'アルマデステリオⅡ',
          materials: [
            { name: '眩鳥の尖爪', quantity: 4 },
            { name: '眩鳥の閃光膜', quantity: 2 },
            { name: '鋭利な爪', quantity: 5 },
            { name: '風漂竜の翼', quantity: 2 },
          ],
        },
        {
          name: 'アルマデステリオⅢ',
          materials: [
            { name: '鳥竜玉', quantity: 1 },
            { name: '眩鳥の尖爪', quantity: 5 },
            { name: '眩鳥の閃光膜', quantity: 3 },
            { name: '鋼龍の翼', quantity: 2 },
          ],
        },
        {
          name: 'エイム＝デステリオⅠ',
          materials: [
            { name: '強靭な爪', quantity: 2 },
            { name: '眩鳥の輝光膜', quantity: 1 },
            { name: '眩鳥の剛爪', quantity: 1 },
            { name: '眩鳥の厚鱗', quantity: 2 },
          ],
        },
        {
          name: 'エイム＝デステリオⅡ',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '眩鳥の輝光膜', quantity: 1 },
            { name: '眩鳥の剛爪', quantity: 2 },
            { name: '風漂竜の剛爪', quantity: 2 },
          ],
        },
        {
          name: '王砲ライゴウ',
          materials: [
            { name: '雷電袋', quantity: 3 },
            { name: '雷狼竜の雷電殻', quantity: 2 },
            { name: '雷狼竜の重殻', quantity: 5 },
            { name: '雷狼竜の剛爪', quantity: 3 },
          ],
        },
        {
          name: '王砲ライゴウ改',
          materials: [
            { name: '雷狼竜の雷電毛', quantity: 4 },
            { name: '雷狼竜の剛角', quantity: 3 },
            { name: '雷狼竜の天玉', quantity: 1 },
            { name: '超電雷光虫', quantity: 5 },
          ],
        },
        {
          name: '王牙砲【震雷】',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '雷狼竜の雷電殻', quantity: 5 },
            { name: '雷狼竜の剛角', quantity: 2 },
            { name: '霊脈の剛竜骨', quantity: 5 },
          ],
        },
        {
          name: 'ロゼッテス',
          materials: [
            { name: '風漂竜の鱗', quantity: 4 },
            { name: '風漂竜の爪', quantity: 3 },
            { name: '氷結袋', quantity: 2 },
          ],
        },
        {
          name: 'ロゼッテス改',
          materials: [
            { name: '風漂竜の上鱗', quantity: 5 },
            { name: '凍結袋', quantity: 2 },
            { name: '風漂竜の尖爪', quantity: 3 },
            { name: '風漂竜の翼', quantity: 3 },
          ],
        },
        {
          name: 'レイ＝ロゼッテス',
          materials: [
            { name: '鋼龍の尖爪', quantity: 2 },
            { name: '風漂竜の上皮', quantity: 3 },
            { name: '風漂竜の尖爪', quantity: 5 },
            { name: '風漂竜の宝玉', quantity: 1 },
          ],
        },
        {
          name: 'レイ＝ロゼッテス改',
          materials: [
            { name: '凍てついた氷骨', quantity: 4 },
            { name: '風漂竜の剛爪', quantity: 3 },
            { name: '風漂竜の厚鱗', quantity: 4 },
            { name: '風漂竜の重尾膜', quantity: 1 },
          ],
        },
        {
          name: 'ブリーナ＝ロゼッテス',
          materials: [
            { name: '漆黒の氷刃爪', quantity: 2 },
            { name: '瞬間凍結袋', quantity: 4 },
            { name: '氷霜をまとう皮', quantity: 5 },
            { name: '冷厳なる翼', quantity: 2 },
          ],
        },
        {
          name: 'フランツ＝グレイシア',
          materials: [
            { name: '漆黒の氷刃爪', quantity: 4 },
            { name: '冰龍の剛爪', quantity: 2 },
            { name: '風漂竜の天鱗', quantity: 1 },
            { name: '冷厳なる翼', quantity: 2 },
          ],
        },
        {
          name: 'ジャグラスアサルトⅠ',
          materials: [
            { name: '賊竜の鱗', quantity: 3 },
            { name: '賊竜の皮', quantity: 1 },
            { name: '賊竜の爪', quantity: 1 },
            { name: 'とがった爪', quantity: 1 },
          ],
        },
        {
          name: 'ジャグラスアサルトⅡ',
          materials: [
            { name: '賊竜のたてがみ', quantity: 2 },
            { name: '賊竜の爪', quantity: 2 },
            { name: '眩鳥の爪', quantity: 3 },
            { name: 'サンゴの紅骨', quantity: 2 },
          ],
        },
        {
          name: 'ジャグラスアサルトⅢ',
          materials: [
            { name: '賊竜の鱗', quantity: 5 },
            { name: '賊竜のたてがみ', quantity: 3 },
            { name: '賊竜の爪', quantity: 3 },
            { name: '上竜骨', quantity: 3 },
          ],
        },
        {
          name: 'ジャグラスキャノンⅠ',
          materials: [
            { name: '賊竜のたてがみ', quantity: 6 },
            { name: '賊竜の上鱗', quantity: 6 },
            { name: '賊竜の尖爪', quantity: 4 },
            { name: '鋭利な爪', quantity: 5 },
          ],
        },
        {
          name: 'ジャグラスキャノンⅡ',
          materials: [
            { name: '堅竜骨', quantity: 4 },
            { name: '賊竜の上皮', quantity: 6 },
            { name: '賊竜の尖爪', quantity: 6 },
            { name: '眩鳥の尖爪', quantity: 5 },
          ],
        },
        {
          name: '牙竜重弩【暴食】',
          materials: [
            { name: '賊竜の上皮', quantity: 6 },
            { name: '賊竜の尖爪', quantity: 8 },
            { name: 'ノヴァクリスタル', quantity: 1 },
            { name: '屍套龍の尖爪', quantity: 2 },
          ],
        },
        {
          name: '牙竜重弩【暴食】改',
          materials: [
            { name: 'ジャグラスの厚鱗', quantity: 2 },
            { name: '賊竜の大たてがみ', quantity: 2 },
            { name: '賊竜の剛爪', quantity: 1 },
            { name: '賊竜の厚鱗', quantity: 2 },
          ],
        },
        {
          name: '牙竜重弩【大暴食】',
          materials: [
            { name: '強靭な爪', quantity: 3 },
            { name: '重竜骨', quantity: 3 },
            { name: '賊竜の剛爪', quantity: 3 },
            { name: '痺賊竜の厚皮', quantity: 3 },
          ],
        },
        {
          name: '牙竜重弩【大暴食】改',
          materials: [
            { name: '賊竜の厚鱗', quantity: 4 },
            { name: '賊竜の剛爪', quantity: 2 },
            { name: '賊竜の大たてがみ', quantity: 3 },
            { name: '幻鳥竜玉', quantity: 1 },
          ],
        },
        {
          name: 'レックスハウル',
          materials: [
            { name: '頑強な重骨', quantity: 5 },
            { name: '轟竜の厚鱗', quantity: 4 },
            { name: '轟竜の剛爪', quantity: 3 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: 'レックスハウル改',
          materials: [
            { name: '轟竜の重牙', quantity: 4 },
            { name: '轟竜の靭尾', quantity: 1 },
            { name: '轟竜の天鱗', quantity: 1 },
            { name: '堅牢な黒巻き角', quantity: 2 },
          ],
        },
        {
          name: 'カーサスハウリング',
          materials: [
            { name: '大竜玉', quantity: 1 },
            { name: '黒轟竜の厚鱗', quantity: 5 },
            { name: '黒轟竜の重牙', quantity: 3 },
            { name: '黒轟竜の剛爪', quantity: 3 },
          ],
        },
        {
          name: 'ブレイズアサルトⅠ',
          materials: [
            { name: '蛮顎竜の鱗', quantity: 3 },
            { name: '蛮顎竜の牙', quantity: 2 },
            { name: '火炎袋', quantity: 1 },
          ],
        },
        {
          name: 'ブレイズアサルトⅡ',
          materials: [
            { name: '火竜の骨髄', quantity: 1 },
            { name: '蛮顎竜の牙', quantity: 4 },
            { name: '蛮顎竜の尻尾', quantity: 1 },
            { name: '蛮顎竜の鼻骨', quantity: 1 },
          ],
        },
        {
          name: 'フラムエルテルマ',
          materials: [
            { name: '蛮顎竜の逆鱗', quantity: 1 },
            { name: '爆炎袋', quantity: 3 },
            { name: '蛮顎竜の上鱗', quantity: 5 },
            { name: '蛮顎竜の鋭牙', quantity: 4 },
          ],
        },
        {
          name: '蛮顎重弩フラムテルマ',
          materials: [
            { name: '炎王龍のたてがみ', quantity: 2 },
            { name: '蛮顎竜の鋭牙', quantity: 6 },
            { name: '蛮顎竜の大鼻骨', quantity: 2 },
            { name: '蛮顎竜の宝玉', quantity: 1 },
          ],
        },
        {
          name: '蛮顎重弩フラムテルマ改',
          materials: [
            { name: 'エルトライト鉱石', quantity: 3 },
            { name: '蛮顎竜の重牙', quantity: 1 },
            { name: '蛮顎竜の厚鱗', quantity: 2 },
            { name: '業炎袋', quantity: 1 },
          ],
        },
        {
          name: '雷顎重弩ドネルテルマ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 2 },
            { name: '剛竜骨', quantity: 3 },
            { name: '雷顎竜の厚鱗', quantity: 2 },
            { name: '雷顎竜の重牙', quantity: 1 },
          ],
        },
        {
          name: '雷顎重弩ドネルテルマ改',
          materials: [
            { name: '雷顎竜の厚毛皮', quantity: 3 },
            { name: '雷顎竜の重鼻骨', quantity: 2 },
            { name: '雷顎竜の靭尾', quantity: 1 },
            { name: '雷電袋', quantity: 3 },
          ],
        },
        {
          name: '蛮雷重弩カーリテルマ',
          materials: [
            { name: '雷顎竜の厚毛皮', quantity: 5 },
            { name: '雷顎竜の重牙', quantity: 3 },
            { name: '雷顎竜の天鱗', quantity: 1 },
            { name: '幻獣の銀たてがみ', quantity: 2 },
          ],
        },
      ],
    },
    {
      name: '骨素材系',
      weapons: [
        {
          name: 'ボーンシューターⅠ',
          materials: [{ name: '竜骨【小】', quantity: 1 }],
        },
        {
          name: 'ボーンシューターⅡ',
          materials: [{ name: '竜骨【小】', quantity: 2 }],
        },
        {
          name: 'ボーンシューターⅢ',
          materials: [
            { name: '太古の大骨', quantity: 1 },
            { name: '竜骨【中】', quantity: 2 },
          ],
        },
        {
          name: 'ヘビィシューターⅠ',
          materials: [
            { name: '強固な岩骨', quantity: 2 },
            { name: '竜骨【大】', quantity: 1 },
            { name: '竜骨【中】', quantity: 5 },
          ],
        },
        {
          name: 'ヘビィシューターⅡ',
          materials: [
            { name: '竜骨【大】', quantity: 1 },
            { name: '頑丈な骨', quantity: 4 },
            { name: '上竜骨', quantity: 2 },
          ],
        },
        {
          name: 'ヘビィシューターⅢ',
          materials: [
            { name: '上竜骨', quantity: 2 },
            { name: '尖竜骨', quantity: 2 },
            { name: '上質な堅骨', quantity: 2 },
          ],
        },
        {
          name: 'パワーシューターⅠ',
          materials: [
            { name: '堅竜骨', quantity: 4 },
            { name: '尖竜骨', quantity: 6 },
            { name: '上質な堅骨', quantity: 10 },
          ],
        },
        {
          name: 'パワーシューターⅡ',
          materials: [
            { name: '堅竜骨', quantity: 6 },
            { name: '古龍骨', quantity: 4 },
            { name: '上質な堅骨', quantity: 20 },
            { name: 'いにしえの龍骨', quantity: 1 },
          ],
        },
        {
          name: 'カルティブラスターⅠ',
          materials: [
            { name: '堅竜骨', quantity: 4 },
            { name: '上質な堅骨', quantity: 4 },
            { name: '頑強な重骨', quantity: 2 },
            { name: '凍てついた氷骨', quantity: 1 },
          ],
        },
        {
          name: 'カルティブラスターⅡ',
          materials: [
            { name: '頑強な重骨', quantity: 4 },
            { name: 'モンスターの特濃', quantity: 2 },
            { name: '剛竜骨', quantity: 2 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: 'カルティブラスターⅢ',
          materials: [
            { name: '頑強な重骨', quantity: 6 },
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '剛竜骨', quantity: 4 },
            { name: '太古龍骨', quantity: 3 },
          ],
        },
        {
          name: 'アイスエクレール',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '氷晶の厚龍鱗', quantity: 5 },
            { name: '冰龍の剛爪', quantity: 3 },
            { name: '冰龍の靭尾', quantity: 1 },
          ],
        },
        {
          name: '氷督バルカ',
          materials: [
            { name: '冰龍の冠角', quantity: 4 },
            { name: '冰龍の剛爪', quantity: 4 },
            { name: '冰龍の零玉', quantity: 1 },
            { name: '地啼竜の慈爪', quantity: 3 },
          ],
        },
        {
          name: 'ディアシューターⅠ',
          materials: [
            { name: '角竜の牙', quantity: 2 },
            { name: 'ねじれた角', quantity: 1 },
            { name: '角竜の甲殻', quantity: 4 },
            { name: '上竜骨', quantity: 3 },
          ],
        },
        {
          name: 'ディアシューターⅡ',
          materials: [
            { name: '角竜の背甲', quantity: 4 },
            { name: '角竜の尾甲', quantity: 2 },
            { name: '尖竜骨', quantity: 4 },
            { name: '角竜の骨髄', quantity: 1 },
          ],
        },
        {
          name: 'デュエルスタッブ',
          materials: [
            { name: '角竜の延髄', quantity: 1 },
            { name: '角竜の堅殻', quantity: 6 },
            { name: '角竜の堅甲', quantity: 5 },
            { name: '上質なねじれた角', quantity: 3 },
          ],
        },
        {
          name: 'ネロディアーカ',
          materials: [
            { name: '竜玉', quantity: 1 },
            { name: '黒角竜の堅甲', quantity: 2 },
            { name: '黒角竜の堅殻', quantity: 4 },
            { name: '上質な黒巻き角', quantity: 1 },
          ],
        },
        {
          name: 'カーディアーカ',
          materials: [
            { name: 'いにしえの龍骨', quantity: 2 },
            { name: '黒角竜の堅殻', quantity: 6 },
            { name: '上質な黒巻き角', quantity: 3 },
            { name: '冥灯龍の尻尾', quantity: 2 },
          ],
        },
        {
          name: 'カーディアーカ改',
          materials: [
            { name: '堅牢なねじれた角', quantity: 3 },
            { name: '黒角竜の重殻', quantity: 6 },
            { name: '黒角竜の重甲', quantity: 5 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: '角王砲ダムディアーカ',
          materials: [
            { name: '堅牢な黒巻き角', quantity: 3 },
            { name: '剛竜骨', quantity: 3 },
            { name: '黒角竜の重殻', quantity: 3 },
            { name: '大竜玉', quantity: 1 },
          ],
        },
      ],
    },
    {
      name: '龍骨系',
      weapons: [
        {
          name: '龍骨砲Ⅰ',
          materials: [
            { name: 'いびつな狂骨', quantity: 5 },
            { name: '強固な岩骨', quantity: 5 },
            { name: '太古の大骨', quantity: 5 },
            { name: 'サンゴの紅骨', quantity: 5 },
          ],
        },
        {
          name: '龍骨砲Ⅱ',
          materials: [
            { name: '竜骨【大】', quantity: 8 },
            { name: '頑丈な骨', quantity: 8 },
            { name: '上竜骨', quantity: 6 },
          ],
        },
        {
          name: '龍骨砲Ⅲ',
          materials: [
            { name: '古龍骨', quantity: 10 },
            { name: '竜玉', quantity: 1 },
            { name: 'いにしえの龍骨', quantity: 2 },
            { name: '荒々しい蛮骨', quantity: 4 },
          ],
        },
        {
          name: '龍封じの砲筒Ⅰ',
          materials: [
            { name: '頑強な重骨', quantity: 6 },
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '剛竜骨', quantity: 3 },
            { name: '重竜骨', quantity: 4 },
          ],
        },
        {
          name: '龍封じの砲筒Ⅱ',
          materials: [
            { name: '剛竜骨', quantity: 4 },
            { name: '太古龍骨', quantity: 6 },
            { name: '大竜玉', quantity: 1 },
            { name: '溶岩竜の特上ヒレ', quantity: 2 },
          ],
        },
        {
          name: '回光返照ー天道ー',
          materials: [
            { name: '地啼竜の慈鱗', quantity: 6 },
            { name: '地啼竜の慈眼殻', quantity: 2 },
            { name: '地啼竜の慈爪', quantity: 4 },
            { name: '地啼竜の顕玉', quantity: 1 },
          ],
        },
        {
          name: 'クイックキャスト',
          materials: [
            { name: 'ライトクリスタル', quantity: 1 },
            { name: '幻獣の雷角', quantity: 3 },
            { name: '幻獣の皮', quantity: 3 },
            { name: '幻獣の尾', quantity: 1 },
          ],
        },
        {
          name: 'クイックキャスト',
          materials: [
            { name: '幻獣の雷角', quantity: 4 },
            { name: '幻獣のたてがみ', quantity: 4 },
            { name: '龍脈の結晶', quantity: 5 },
            { name: '幻獣の上皮', quantity: 5 },
          ],
        },
        {
          name: 'クイックシャフト',
          materials: [
            { name: 'ノヴァクリスタル', quantity: 2 },
            { name: '冥灯龍の白殻', quantity: 4 },
            { name: '幻獣の雷尾', quantity: 3 },
            { name: '幻獣の蒼角', quantity: 6 },
          ],
        },
        {
          name: 'ライジングシャフト',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '幻獣の銀たてがみ', quantity: 3 },
            { name: '幻獣の特上皮', quantity: 4 },
            { name: '幻獣の剛蒼角', quantity: 3 },
          ],
        },
        {
          name: 'マグダ・ゲミトゥスⅠ',
          materials: [
            { name: '熔山龍の熱鱗', quantity: 4 },
            { name: '熔山龍のマグマ', quantity: 4 },
            { name: '熔山龍の岩殻', quantity: 8 },
            { name: '熔山龍の宝玉', quantity: 1 },
          ],
        },
        {
          name: 'マグダ・ゲミトゥスⅡ',
          materials: [
            { name: '獄炎石', quantity: 3 },
            { name: '熔山龍の背甲', quantity: 2 },
            { name: '熔山龍の胸殻', quantity: 2 },
            { name: '冥灯龍の白殻', quantity: 4 },
          ],
        },
        {
          name: '熔山大砲マグダゲミド',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '龍脈の重竜骨', quantity: 6 },
            { name: '龍脈の剛竜骨', quantity: 5 },
            { name: '龍脈の古龍骨', quantity: 3 },
          ],
        },
        {
          name: 'ヒュドロスライモス',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '溟龍の特上皮', quantity: 5 },
            { name: '溟龍の剛爪', quantity: 4 },
            { name: '溟龍の幻曜ヒゲ', quantity: 2 },
          ],
        },
      ],
    },
    {
      name: '黒鋼系',
      weapons: [
        {
          name: '黒鋼の砲筒Ⅰ',
          materials: [
            { name: '大地の結晶', quantity: 10 },
            { name: 'ライトクリスタル', quantity: 1 },
            { name: '深海の結晶', quantity: 10 },
            { name: '龍脈の結晶', quantity: 10 },
          ],
        },
        {
          name: '黒鋼の砲筒Ⅱ',
          materials: [
            { name: '獄炎石', quantity: 1 },
            { name: '竜玉', quantity: 1 },
            { name: 'カブレライト鉱石', quantity: 10 },
            { name: 'ユニオン鉱石', quantity: 5 },
          ],
        },
        {
          name: 'テオ＝アーティレリ',
          materials: [
            { name: '炎王龍のたてがみ', quantity: 2 },
            { name: '炎王龍の堅殻', quantity: 5 },
            { name: '炎龍の塵粉', quantity: 4 },
            { name: '炎龍の尖爪', quantity: 2 },
          ],
        },
        {
          name: 'テオ＝フランマルス',
          materials: [
            { name: '炎王龍の尖角', quantity: 5 },
            { name: '炎龍の尖爪', quantity: 2 },
            { name: '炎龍の宝玉', quantity: 1 },
            { name: '冥灯龍の幽鱗', quantity: 5 },
          ],
        },
        {
          name: 'テオフランロンガ',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '炎王龍の大たてがみ', quantity: 4 },
            { name: '炎王龍の剛角', quantity: 5 },
            { name: '炎龍の剛爪', quantity: 4 },
          ],
        },
        {
          name: 'ゼノ＝ジィカ',
          materials: [
            { name: '冥灯龍の白殻', quantity: 6 },
            { name: '冥灯龍の幽爪', quantity: 4 },
            { name: '冥灯龍の幽玉', quantity: 1 },
            { name: '冥灯龍の尻尾', quantity: 2 },
          ],
        },
        {
          name: 'ゼノ＝ジィカ改',
          materials: [
            { name: '赤龍の重殻', quantity: 8 },
            { name: '裂光の龍脈殻', quantity: 7 },
            { name: '赤龍の剛角', quantity: 4 },
            { name: '赤龍の剛爪', quantity: 6 },
          ],
        },
      ],
    },
    {
      name: '恐暴竜系',
      weapons: [
        {
          name: '暴食の重弩',
          materials: [
            { name: '恐暴竜の黒鱗', quantity: 6 },
            { name: '恐暴竜の大牙', quantity: 3 },
            { name: '恐暴竜の鉤爪', quantity: 2 },
            { name: '恐暴竜の唾液', quantity: 2 },
          ],
        },
        {
          name: 'アンフィニグラ',
          materials: [
            { name: '恐暴竜の大牙', quantity: 5 },
            { name: '恐暴竜の頭殻', quantity: 2 },
            { name: '恐暴竜の宝玉', quantity: 1 },
            { name: '古龍の血', quantity: 5 },
          ],
        },
        {
          name: '業重弩ファミン',
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
          name: 'エンプレスカノン',
          materials: [
            { name: '炎妃龍のたてがみ', quantity: 3 },
            { name: '炎妃龍の宝玉', quantity: 1 },
            { name: '炎妃龍の尖角', quantity: 3 },
            { name: '炎妃龍の上鱗', quantity: 4 },
          ],
        },
        {
          name: 'エンプレスカノン・冥灯',
          materials: [
            { name: '冥灯龍の幽角', quantity: 3 },
            { name: '冥灯龍の幽玉', quantity: 1 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の尻尾', quantity: 2 },
          ],
        },
        {
          name: 'エンプレスカノン・滅尽',
          materials: [
            { name: '滅尽龍の宝玉', quantity: 1 },
            { name: '滅尽龍の大角', quantity: 3 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の翼', quantity: 3 },
          ],
        },
        {
          name: 'エンプレスカノン・炎妃',
          materials: [
            { name: '炎王龍の尖角', quantity: 3 },
            { name: '爆鱗竜の宝玉', quantity: 1 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の尖角', quantity: 2 },
          ],
        },
        {
          name: '魂焔の龍砲・炎妃',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '炎妃龍の厚鱗', quantity: 4 },
            { name: '炎妃龍の剛角', quantity: 4 },
            { name: '炎妃龍の大たてがみ', quantity: 4 },
          ],
        },
        {
          name: '魂焔の龍砲・滅尽',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '殲滅の大剛角', quantity: 3 },
            { name: '無窮の新生殻', quantity: 3 },
            { name: '炎妃龍の厚鱗', quantity: 4 },
          ],
        },
        {
          name: '魂焔の龍砲・冥灯',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '炎妃龍の厚鱗', quantity: 5 },
            { name: '炎妃龍の靭尾', quantity: 1 },
            { name: '霊脈の古龍骨', quantity: 6 },
          ],
        },
      ],
    },
    {
      name: '金獅子系',
      weapons: [
        {
          name: '金獅子砲Ⅰ',
          materials: [
            { name: '金獅子の尖角', quantity: 2 },
            { name: '金獅子の黒毛', quantity: 4 },
            { name: '黄金の毛', quantity: 3 },
            { name: 'ユニオン鉱石', quantity: 8 },
          ],
        },
        {
          name: '金獅子砲Ⅱ',
          materials: [
            { name: '勇気の証G', quantity: 1 },
            { name: '金獅子の尻尾', quantity: 2 },
            { name: '堅牢な巨骨', quantity: 2 },
          ],
        },
        {
          name: '金獅子砲【重雷】',
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
      name: '金獅子派生改',
      weapons: [
        {
          name: '鬼神雷砲【獣神】',
          materials: [
            { name: '黄金の煌毛', quantity: 5 },
            { name: '金獅子の怒髪天', quantity: 2 },
            { name: '羅刹の金剛角', quantity: 3 },
            { name: 'ラージャンハート', quantity: 1 },
          ],
        },
      ],
    },
    {
      name: '獄狼竜系',
      weapons: [
        {
          name: '獄砲リュウコウ',
          materials: [
            { name: '獄狼竜の滅龍毛', quantity: 2 },
            { name: '獄狼竜の滅龍殻', quantity: 2 },
            { name: '獄狼竜の剛角', quantity: 1 },
            { name: '獄狼竜の剛爪', quantity: 1 },
          ],
        },
        {
          name: '狼邪砲【獣獄】',
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
          name: '砕光の極砲',
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
          name: 'カオスウイング',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '煌黒龍の凶爪', quantity: 3 },
            { name: '天を統べる角', quantity: 1 },
            { name: '煌黒龍の天鱗', quantity: 3 },
          ],
        },
        {
          name: '黒翼弩アルバダス',
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
          name: 'ヴォルキャノン',
          materials: [
            { name: '黒龍の厚鱗', quantity: 3 },
            { name: '黒龍の重胸殻', quantity: 1 },
            { name: '黒龍の剛角', quantity: 1 },
            { name: '黒龍の邪眼', quantity: 1 },
          ],
        },
        {
          name: 'ヴォルバスター',
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
          name: 'ギルドパレスライフル',
          materials: [
            { name: 'グラシスメタル', quantity: 5 },
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '琥珀色の重牙', quantity: 2 },
            { name: '祭典チケット', quantity: 2 },
          ],
        },
        {
          name: '宮廷儀仗【輝星】',
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
