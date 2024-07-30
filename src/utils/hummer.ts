import { WeaponType } from './materialsTypes'

const greatsword: WeaponType = {
  type: 'ハンマー',
  derivations: [
    {
      name: '防衛隊系',
      weapons: [
        {
          name: '防衛隊鋼鉄製戦鎚Ⅰ',
          materials: [{ name: '鉄鉱石', quantity: 1 }],
        },
        {
          name: '防衛隊鋼鉄製戦鎚Ⅱ',
          materials: [{ name: '蛮顎竜の鱗', quantity: 1 }],
        },
        {
          name: '防衛隊鋼鉄製戦鎚Ⅲ',
          materials: [{ name: '勇気の証', quantity: 1 }],
        },
        {
          name: '防衛隊鋼鉄製戦鎚Ⅳ',
          materials: [{ name: '桜火竜の上鱗', quantity: 1 }],
        },
        {
          name: '防衛隊鋼鉄製戦鎚Ⅴ',
          materials: [{ name: '不滅の龍鱗', quantity: 1 }],
        },
      ],
    },
    {
      name: '鉱石素材系',
      weapons: [
        {
          name: 'アイアンハンマーⅠ',
          materials: [{ name: '鉄鉱石', quantity: 1 }],
        },
        {
          name: 'アイアンハンマーⅡ',
          materials: [{ name: '鉄鉱石', quantity: 2 }],
        },
        {
          name: 'アイアンハンマーⅢ',
          materials: [
            { name: '大地の結晶', quantity: 2 },
            { name: '鉄鉱石', quantity: 5 },
            { name: 'マカライト鉱石', quantity: 2 },
          ],
        },
        {
          name: '鬼鉄Ⅰ',
          materials: [
            { name: 'マカライト鉱石', quantity: 5 },
            { name: '竜骨【中】', quantity: 2 },
            { name: 'ドラグライト鉱石', quantity: 2 },
          ],
        },
        {
          name: '鬼鉄Ⅱ',
          materials: [
            { name: 'マカライト鉱石', quantity: 10 },
            { name: 'ドラグライト鉱石', quantity: 5 },
            { name: '上竜骨', quantity: 2 },
            { name: '深海の結晶', quantity: 2 },
          ],
        },
        {
          name: '鬼鉄Ⅲ',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 5 },
            { name: 'カブレライト鉱石', quantity: 8 },
            { name: '龍脈の結晶', quantity: 2 },
          ],
        },
        {
          name: '大鬼鉄Ⅰ',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 10 },
            { name: 'カブレライト鉱石', quantity: 5 },
            { name: '龍脈の結晶', quantity: 3 },
            { name: 'ユニオン鉱石', quantity: 8 },
          ],
        },
        {
          name: '大鬼鉄Ⅱ',
          materials: [
            { name: '古龍の血', quantity: 2 },
            { name: '獄炎石', quantity: 1 },
            { name: 'カブレライト鉱石', quantity: 20 },
            { name: 'ユニオン鉱石', quantity: 13 },
          ],
        },
        {
          name: 'クロガネⅠ',
          materials: [
            { name: 'カブレライト鉱石', quantity: 4 },
            { name: '霊脈の結晶', quantity: 2 },
            { name: 'グラシスメタル', quantity: 1 },
            { name: 'エルトライト鉱石', quantity: 2 },
          ],
        },
        {
          name: 'クロガネⅡ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 2 },
            { name: 'エルトライト鉱石', quantity: 4 },
            { name: '重竜骨', quantity: 3 },
            { name: 'デプスライト鉱石', quantity: 2 },
          ],
        },
        {
          name: 'クロガネⅢ',
          materials: [
            { name: '古龍の浄血', quantity: 3 },
            { name: 'メランジェ鉱石', quantity: 3 },
            { name: 'エルトライト鉱石', quantity: 6 },
            { name: 'ピュアクリスタル', quantity: 1 },
          ],
        },
        {
          name: 'レッドビート',
          materials: [
            { name: '火竜の厚鱗', quantity: 6 },
            { name: '火竜の剛翼', quantity: 2 },
            { name: '火竜の剛翼爪', quantity: 4 },
            { name: '火竜の重殻', quantity: 4 },
          ],
        },
        {
          name: '火竜砕フラカン',
          materials: [
            { name: '火竜の天鱗', quantity: 1 },
            { name: '蒼火竜の剛翼', quantity: 3 },
            { name: '蒼火竜の厚鱗', quantity: 6 },
            { name: '蒼火竜の重殻', quantity: 4 },
          ],
        },
        {
          name: '星砕きプロメテオル',
          materials: [
            { name: '銀火竜の重殻', quantity: 6 },
            { name: '銀火竜の厚鱗', quantity: 8 },
            { name: '火竜の煌液', quantity: 2 },
            { name: '銀火竜の靭尾', quantity: 1 },
          ],
        },
        {
          name: 'ネルガルクラッシュ',
          materials: [
            { name: '滅尽龍の再生殻', quantity: 4 },
            { name: '滅尽龍の尻尾', quantity: 2 },
            { name: '滅尽龍の堅殻', quantity: 2 },
            { name: '滅尽龍の尖爪', quantity: 3 },
          ],
        },
        {
          name: '潰滅の一撃',
          materials: [
            { name: '滅尽龍の宝玉', quantity: 1 },
            { name: '滅尽龍の尖爪', quantity: 5 },
            { name: '滅尽龍の大角', quantity: 5 },
            { name: '冥灯龍の幽角', quantity: 2 },
          ],
        },
        {
          name: '潰滅の一撃【壊】',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '殲滅の大剛角', quantity: 3 },
            { name: '無窮の新生殻', quantity: 5 },
            { name: '滅尽龍の剛爪', quantity: 4 },
          ],
        },
        {
          name: 'フローズンコア',
          materials: [
            { name: 'ライトクリスタル', quantity: 3 },
            { name: '深海の結晶', quantity: 4 },
            { name: '風漂竜の鱗', quantity: 3 },
            { name: '氷結袋', quantity: 4 },
          ],
        },
        {
          name: 'フローズンコア改',
          materials: [
            { name: 'ノヴァクリスタル', quantity: 3 },
            { name: '龍脈の結晶', quantity: 4 },
            { name: '風漂竜の上鱗', quantity: 3 },
            { name: '凍結袋', quantity: 4 },
          ],
        },
        {
          name: 'コキュートス',
          materials: [
            { name: 'ノヴァクリスタル', quantity: 6 },
            { name: '鋼龍の尖爪', quantity: 3 },
            { name: '凍結袋', quantity: 4 },
            { name: '風漂竜の翼', quantity: 3 },
          ],
        },
        {
          name: 'コキュートス改',
          materials: [
            { name: 'グラシスメタル', quantity: 4 },
            { name: '風漂竜の剛爪', quantity: 3 },
            { name: '風漂竜の厚鱗', quantity: 4 },
            { name: '風漂竜の重尾膜', quantity: 1 },
          ],
        },
        {
          name: '氷鉄ハバク',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '漆黒の氷刃爪', quantity: 4 },
            { name: '覇王の証', quantity: 1 },
            { name: '冷厳なる翼', quantity: 2 },
          ],
        },
        {
          name: 'アクアハンマーⅠ',
          materials: [
            { name: '大地の結晶', quantity: 3 },
            { name: '泥魚竜の鱗', quantity: 3 },
            { name: '泥魚竜の甲殻', quantity: 1 },
            { name: '水袋', quantity: 1 },
          ],
        },
        {
          name: 'アクアハンマーⅡ',
          materials: [
            { name: '咬魚の皮', quantity: 3 },
            { name: '泥魚竜の牙', quantity: 2 },
            { name: '泥魚竜のヒレ', quantity: 3 },
            { name: 'ドラグライト鉱石', quantity: 5 },
          ],
        },
        {
          name: 'アクアハンマーⅢ',
          materials: [
            { name: '咬魚のヒゲ', quantity: 3 },
            { name: '泥魚竜の牙', quantity: 4 },
            { name: '上竜骨', quantity: 2 },
            { name: '深海の結晶', quantity: 3 },
          ],
        },
        {
          name: 'ウォーターバッシュⅠ',
          materials: [
            { name: '泥魚竜の上鱗', quantity: 3 },
            { name: '泥魚竜の堅殻', quantity: 2 },
            { name: '咬魚の上皮', quantity: 5 },
            { name: 'カブレライト鉱石', quantity: 5 },
          ],
        },
        {
          name: 'ウォーターバッシュⅡ',
          materials: [
            { name: '泥魚竜の上ヒレ', quantity: 4 },
            { name: '大水袋', quantity: 3 },
            { name: '咬魚の大ヒゲ', quantity: 3 },
            { name: 'ユニオン鉱石', quantity: 5 },
          ],
        },
        {
          name: 'ウォーターバッシュⅢ',
          materials: [
            { name: '古龍の血', quantity: 3 },
            { name: '竜玉', quantity: 1 },
            { name: '泥魚竜の上ヒレ', quantity: 6 },
            { name: '泥魚竜の鋭牙', quantity: 5 },
          ],
        },
        {
          name: 'ウォーターバッシュⅣ',
          materials: [
            { name: '咬魚の厚皮', quantity: 2 },
            { name: '泥魚竜の厚鱗', quantity: 3 },
            { name: '泥魚竜の重牙', quantity: 1 },
            { name: '泥魚竜の特上ヒレ', quantity: 1 },
          ],
        },
        {
          name: 'アクア・フローラ',
          materials: [
            { name: '水妖鳥の剛翼', quantity: 2 },
            { name: '水妖鳥の厚鱗', quantity: 3 },
            { name: 'デプスライト鉱石', quantity: 2 },
            { name: '特大水袋', quantity: 2 },
          ],
        },
        {
          name: 'アクア・フローラ改',
          materials: [
            { name: '剛竜骨', quantity: 3 },
            { name: '水妖鳥の靭尾', quantity: 1 },
            { name: '水妖鳥の特大喉袋', quantity: 1 },
            { name: '硫斬竜の重牙', quantity: 2 },
          ],
        },
        {
          name: 'アクアフローレス',
          materials: [
            { name: '古龍の浄血', quantity: 5 },
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '水妖鳥の特大喉袋', quantity: 2 },
            { name: '溟龍の剛爪', quantity: 4 },
          ],
        },
        {
          name: 'アイシクルバッシュⅠ',
          materials: [
            { name: '凍てついた氷骨', quantity: 3 },
            { name: '瞬間凍結袋', quantity: 4 },
            { name: '氷牙竜の剛爪', quantity: 3 },
            { name: '氷牙竜の重殻', quantity: 4 },
          ],
        },
        {
          name: 'アイシクルバッシュⅡ',
          materials: [
            { name: '琥珀色の重牙', quantity: 3 },
            { name: '漆黒の氷刃爪', quantity: 2 },
            { name: '大竜玉', quantity: 1 },
            { name: '氷牙竜の重棘', quantity: 3 },
          ],
        },
        {
          name: 'ボラリスバッシュ',
          materials: [
            { name: '大竜玉', quantity: 1 },
            { name: '氷牙竜チケット', quantity: 3 },
            { name: '白銀の氷刃牙', quantity: 3 },
            { name: '氷河を砕く剣爪', quantity: 2 },
          ],
        },
        {
          name: 'ギルオスハンマーⅠ',
          materials: [
            { name: '痺賊竜の鱗', quantity: 3 },
            { name: '痺賊竜の牙', quantity: 1 },
            { name: 'ギルオスの麻痺牙', quantity: 3 },
          ],
        },
        {
          name: 'ギルオスハンマーⅡ',
          materials: [
            { name: '角竜の牙', quantity: 2 },
            { name: '痺賊竜の頭巾殻', quantity: 2 },
            { name: '痺賊竜の牙', quantity: 3 },
            { name: '麻痺袋', quantity: 2 },
          ],
        },
        {
          name: 'マラドマトラカⅠ',
          materials: [
            { name: '痺賊竜の尻尾', quantity: 2 },
            { name: '痺賊竜の上鱗', quantity: 5 },
            { name: '痺賊竜の鋭牙', quantity: 3 },
            { name: 'ギルオスの上鱗', quantity: 6 },
          ],
        },
        {
          name: 'マラドマトラカⅡ',
          materials: [
            { name: '角竜の延髄', quantity: 1 },
            { name: '痺賊竜の大頭巾', quantity: 2 },
            { name: '痺賊竜の鋭牙', quantity: 4 },
            { name: '強力麻痺袋', quantity: 4 },
          ],
        },
        {
          name: 'マラドマトラカⅢ',
          materials: [
            { name: '鳥竜玉', quantity: 1 },
            { name: '痺賊竜の大頭巾', quantity: 3 },
            { name: '痺賊竜の鋭牙', quantity: 5 },
            { name: '屍套龍の鋭牙', quantity: 2 },
          ],
        },
        {
          name: 'ナーガ＝マトラカⅠ',
          materials: [
            { name: '強靭な爪', quantity: 2 },
            { name: '濃縮麻痺袋', quantity: 2 },
            { name: '痺賊竜の重牙', quantity: 2 },
            { name: '痺賊竜の靭尾', quantity: 1 },
          ],
        },
        {
          name: 'ナーガ＝マトラカⅡ',
          materials: [
            { name: '幻鳥竜玉', quantity: 1 },
            { name: '惨爪竜の重牙', quantity: 2 },
            { name: '痺賊竜の厚鱗', quantity: 4 },
            { name: '痺賊竜の重頭巾', quantity: 2 },
          ],
        },
        {
          name: 'ニュクスハンマーⅠ',
          materials: [
            { name: 'ゴム質の重殻', quantity: 2 },
            { name: '卒倒昏睡袋', quantity: 1 },
            { name: '浮眠竜の厚毛皮', quantity: 3 },
            { name: '浮眠竜の剛翼', quantity: 2 },
          ],
        },
        {
          name: 'ニュクスハンマーⅡ',
          materials: [
            { name: '黒角竜の重甲', quantity: 2 },
            { name: '大竜玉', quantity: 1 },
            { name: '浮眠竜の剛翼', quantity: 3 },
            { name: '浮眠竜の厚鱗', quantity: 5 },
          ],
        },
        {
          name: 'ブルームハンマーⅠ',
          materials: [
            { name: '毒袋', quantity: 1 },
            { name: '毒妖鳥の鱗', quantity: 3 },
            { name: '毒妖鳥の羽根', quantity: 2 },
          ],
        },
        {
          name: 'ブルームハンマーⅡ',
          materials: [
            { name: '毒妖鳥の尻尾', quantity: 1 },
            { name: '毒妖鳥の喉袋', quantity: 2 },
            { name: '深海の結晶', quantity: 3 },
            { name: '毒妖鳥の甲殻', quantity: 3 },
          ],
        },
        {
          name: 'ブルームハンマーⅢ',
          materials: [
            { name: '毒袋', quantity: 2 },
            { name: '毒妖鳥の喉袋', quantity: 2 },
            { name: '毒妖鳥の羽根', quantity: 4 },
            { name: '上竜骨', quantity: 2 },
          ],
        },
        {
          name: 'ベネ・フロル',
          materials: [
            { name: '毒妖鳥の翼', quantity: 3 },
            { name: '毒妖鳥の上鱗', quantity: 3 },
            { name: '猛毒袋', quantity: 2 },
            { name: '上質な堅骨', quantity: 3 },
          ],
        },
        {
          name: 'ベネ・フローラ',
          materials: [
            { name: '鳥竜玉', quantity: 1 },
            { name: '毒妖鳥の翼', quantity: 6 },
            { name: '毒妖鳥の大喉袋', quantity: 4 },
            { name: '屍套龍の翼', quantity: 2 },
          ],
        },
        {
          name: 'ベネ・フローラ改',
          materials: [
            { name: '強竜骨', quantity: 2 },
            { name: '劇烈毒袋', quantity: 2 },
            { name: '毒妖鳥の剛翼', quantity: 2 },
            { name: '毒妖鳥の厚鱗', quantity: 3 },
          ],
        },
        {
          name: 'ベネ・フローレス',
          materials: [
            { name: '重竜骨', quantity: 3 },
            { name: '毒妖鳥の靭尾', quantity: 1 },
            { name: '毒妖鳥の特大喉袋', quantity: 1 },
            { name: '雌火竜の秘棘', quantity: 2 },
          ],
        },
        {
          name: 'ヒドゥンブレイカー',
          materials: [
            { name: 'メランジェ鉱石', quantity: 1 },
            { name: '迅竜の厚鱗', quantity: 3 },
            { name: '迅竜の重牙', quantity: 2 },
            { name: '迅竜の重尾棘', quantity: 2 },
          ],
        },
        {
          name: 'ヒドゥンブレイカー改',
          materials: [
            { name: '迅竜の天鱗', quantity: 1 },
            { name: '迅竜の靭尾', quantity: 1 },
            { name: '迅竜の剛刃翼', quantity: 4 },
            { name: '雷顎竜の重牙', quantity: 3 },
          ],
        },
        {
          name: '夜行鎚【常闇】',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '迅竜の重牙', quantity: 4 },
            { name: '迅竜の剛刃翼', quantity: 4 },
            { name: '闇を食む牙', quantity: 2 },
          ],
        },
        {
          name: 'サンダーハンマーⅠ',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 5 },
            { name: '電気袋', quantity: 1 },
            { name: '飛雷竜の爪', quantity: 2 },
            { name: '飛雷竜の電極針', quantity: 1 },
          ],
        },
        {
          name: 'サンダーハンマーⅡ',
          materials: [
            { name: '上竜骨', quantity: 2 },
            { name: '深海の結晶', quantity: 3 },
            { name: '飛雷竜の電極針', quantity: 1 },
            { name: '飛雷竜の皮膜', quantity: 2 },
          ],
        },
        {
          name: 'ライトニングバッシュⅠ',
          materials: [
            { name: 'ランゴスタの薄羽', quantity: 3 },
            { name: '飛雷竜の上毛皮', quantity: 3 },
            { name: '飛雷竜の上鱗', quantity: 4 },
            { name: 'カブレライト鉱石', quantity: 5 },
          ],
        },
        {
          name: 'ライトニングバッシュⅡ',
          materials: [
            { name: '飛雷竜の皮膜', quantity: 4 },
            { name: '飛雷竜の雷極針', quantity: 2 },
            { name: '電撃袋', quantity: 3 },
            { name: 'ユニオン鉱石', quantity: 5 },
          ],
        },
        {
          name: 'ライトニングバッシュⅢ',
          materials: [
            { name: '古龍の血', quantity: 3 },
            { name: '竜玉', quantity: 1 },
            { name: '飛雷竜の雷極針', quantity: 4 },
            { name: '飛雷竜の尖爪', quantity: 6 },
          ],
        },
        {
          name: 'ライトニングバッシュⅣ',
          materials: [
            { name: '飛雷竜の厚毛皮', quantity: 2 },
            { name: '飛雷竜の剛爪', quantity: 1 },
            { name: '飛雷竜の厚鱗', quantity: 2 },
            { name: '雷電袋', quantity: 1 },
          ],
        },
        {
          name: '王鎚カミナリ改',
          materials: [
            { name: '雷狼竜の雷電毛', quantity: 4 },
            { name: '雷狼竜の剛角', quantity: 3 },
            { name: '雷狼竜の天玉', quantity: 1 },
            { name: '超電雷光虫', quantity: 5 },
          ],
        },
        {
          name: '王鎚カミナリ',
          materials: [
            { name: '雷電袋', quantity: 3 },
            { name: '雷狼竜の雷電殻', quantity: 2 },
            { name: '雷狼竜の重殻', quantity: 5 },
            { name: '雷狼竜の剛爪', quantity: 3 },
          ],
        },
        {
          name: '王牙鎚【大雷】',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '雷狼竜の雷電殻', quantity: 5 },
            { name: '雷狼竜の剛角', quantity: 2 },
            { name: '霊脈の剛竜骨', quantity: 5 },
          ],
        },
      ],
    },
    {
      name: '骨素材系',
      weapons: [
        {
          name: 'ロックボーンⅠ',
          materials: [{ name: '竜骨【小】', quantity: 1 }],
        },
        {
          name: 'ロックボーンⅡ',
          materials: [{ name: '竜骨【小】', quantity: 2 }],
        },
        {
          name: 'ロックボーンⅢ',
          materials: [
            { name: '太古の大骨', quantity: 1 },
            { name: '竜骨【中】', quantity: 2 },
          ],
        },
        {
          name: 'ヘヴィロックボーンⅠ',
          materials: [
            { name: '強固な岩骨', quantity: 2 },
            { name: '竜骨【大】', quantity: 1 },
            { name: '竜骨【中】', quantity: 5 },
          ],
        },
        {
          name: 'ヘヴィロックボーンⅡ',
          materials: [
            { name: '竜骨【大】', quantity: 1 },
            { name: '頑丈な骨', quantity: 4 },
            { name: '上竜骨', quantity: 2 },
          ],
        },
        {
          name: 'ヘヴィロックボーンⅢ',
          materials: [
            { name: '上竜骨', quantity: 2 },
            { name: '尖竜骨', quantity: 2 },
            { name: '上質な堅骨', quantity: 2 },
          ],
        },
        {
          name: 'グランドロックⅠ',
          materials: [
            { name: '堅竜骨', quantity: 4 },
            { name: '尖竜骨', quantity: 6 },
            { name: '上質な堅骨', quantity: 10 },
          ],
        },
        {
          name: 'グランドロックⅡ',
          materials: [
            { name: '堅竜骨', quantity: 6 },
            { name: '古龍骨', quantity: 4 },
            { name: '上質な堅骨', quantity: 20 },
            { name: 'いにしえの龍骨', quantity: 1 },
          ],
        },
        {
          name: 'ガイアクローザーⅠ',
          materials: [
            { name: '堅竜骨', quantity: 4 },
            { name: '上質な堅骨', quantity: 4 },
            { name: '頑強な重骨', quantity: 2 },
            { name: '凍てついた氷骨', quantity: 1 },
          ],
        },
        {
          name: 'ガイアクローザーⅡ',
          materials: [
            { name: '頑強な重骨', quantity: 4 },
            { name: 'モンスターの特濃', quantity: 2 },
            { name: '剛竜骨', quantity: 2 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: 'ガイアクローザーⅢ',
          materials: [
            { name: '頑強な重骨', quantity: 6 },
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '剛竜骨', quantity: 4 },
            { name: '太古龍骨', quantity: 3 },
          ],
        },
        {
          name: 'アイスシェイカー',
          materials: [
            { name: '氷軍ノースライン', quantity: 1 },
            { name: '冰龍の冠角', quantity: 4 },
            { name: '冰龍の剛爪', quantity: 4 },
            { name: '冰龍の零玉', quantity: 1 },
            { name: '地啼竜の慈爪', quantity: 3 },
          ],
        },
        {
          name: 'ハザクヴラフォス',
          materials: [
            { name: '死屍の龍鱗', quantity: 6 },
            { name: '屍套龍の尖爪', quantity: 4 },
            { name: '屍套龍の鋭牙', quantity: 5 },
            { name: '屍套龍の被膜', quantity: 4 },
          ],
        },
        {
          name: 'デモナスの禍根',
          materials: [
            { name: '冥灯龍の幽幕', quantity: 3 },
            { name: '屍套龍の尖爪', quantity: 6 },
            { name: '屍套龍の尻尾', quantity: 2 },
            { name: '屍套龍の宝玉', quantity: 1 },
          ],
        },
        {
          name: 'デモナスの復讐',
          materials: [
            { name: '屍套龍の剛爪', quantity: 3 },
            { name: '闇を食む牙', quantity: 2 },
            { name: '死屍の厚龍鱗', quantity: 5 },
            { name: '死屍を紡いだ被膜', quantity: 3 },
          ],
        },
        {
          name: 'グラド＝デモナス',
          materials: [
            { name: '屍套龍の剛爪', quantity: 6 },
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '屍套龍の重尾', quantity: 1 },
            { name: '地啼竜の慈爪', quantity: 3 },
          ],
        },
        {
          name: 'ボーンスパイクⅠ',
          materials: [
            { name: '骨鎚竜の鱗', quantity: 4 },
            { name: '睡眠袋', quantity: 2 },
            { name: '竜骨塊', quantity: 2 },
          ],
        },
        {
          name: 'ボーンスパイクⅡ',
          materials: [
            { name: '上竜骨', quantity: 3 },
            { name: '骨鎚竜の黒油殻', quantity: 2 },
            { name: '骨鎚竜の骨髄', quantity: 1 },
            { name: '竜骨塊', quantity: 3 },
          ],
        },
        {
          name: 'バルキンストライクⅠ',
          materials: [
            { name: '尖竜骨', quantity: 3 },
            { name: '骨鎚竜の黒油殻', quantity: 3 },
            { name: '骨鎚竜の堅殻', quantity: 4 },
            { name: '昏睡袋', quantity: 2 },
          ],
        },
        {
          name: 'バルキンストライクⅡ',
          materials: [
            { name: '堅竜骨', quantity: 5 },
            { name: '骨鎚竜の上鱗', quantity: 8 },
            { name: '骨鎚竜の延髄', quantity: 1 },
            { name: '昏睡袋', quantity: 3 },
          ],
        },
        {
          name: 'バルキンストライクⅢ',
          materials: [
            { name: '古龍骨', quantity: 5 },
            { name: '竜玉', quantity: 1 },
            { name: '骨鎚竜の堅殻', quantity: 6 },
            { name: '昏睡袋', quantity: 4 },
          ],
        },
        {
          name: 'バルキンクローザーⅠ',
          materials: [
            { name: '強竜骨', quantity: 3 },
            { name: '骨鎚竜の厚鱗', quantity: 2 },
            { name: '骨鎚竜の重殻', quantity: 2 },
            { name: '卒倒昏睡袋', quantity: 1 },
          ],
        },
        {
          name: 'バルキンクローザーⅡ',
          materials: [
            { name: '頑強な重骨', quantity: 5 },
            { name: '剛竜骨', quantity: 3 },
            { name: '骨鎚竜の重油殻', quantity: 2 },
            { name: '大竜骨塊', quantity: 3 },
          ],
        },
        {
          name: 'バルキンクローザーⅢ',
          materials: [
            { name: '頑強な重骨', quantity: 5 },
            { name: '轟竜の厚鱗', quantity: 4 },
            { name: '轟竜の剛爪', quantity: 3 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: 'ストライプストライク',
          materials: [
            { name: '頑強な重骨', quantity: 5 },
            { name: '轟竜の厚鱗', quantity: 4 },
            { name: '轟竜の剛爪', quantity: 3 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: 'ストライプストライク改',
          materials: [
            { name: '轟竜の重牙', quantity: 4 },
            { name: '轟竜の靭尾', quantity: 1 },
            { name: '轟竜の天鱗', quantity: 1 },
            { name: '堅牢な黒巻き角', quantity: 2 },
          ],
        },
        {
          name: '轟槌【虎丸】',
          materials: [
            { name: '古龍の浄血', quantity: 5 },
            { name: '轟竜の重牙', quantity: 2 },
            { name: '轟竜の重殻', quantity: 4 },
            { name: '鋼龍の剛爪', quantity: 2 },
          ],
        },
        {
          name: 'ブラスブレイカーⅠ',
          materials: [
            { name: '爆鎚竜の顎', quantity: 1 },
            { name: '爆鎚竜の堅殻', quantity: 4 },
            { name: '爆鎚竜の上鱗', quantity: 6 },
            { name: '爆鎚竜の延髄', quantity: 1 },
          ],
        },
        {
          name: 'ブラスブレイカーⅡ',
          materials: [
            { name: '炎王龍の堅殻', quantity: 4 },
            { name: '爆鎚竜の顎', quantity: 2 },
            { name: '爆鎚竜の紅玉', quantity: 1 },
            { name: '爆鎚竜の耐熱殻', quantity: 4 },
          ],
        },
        {
          name: '重甲鎚ガンキンⅠ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 2 },
            { name: '爆鎚竜の厚鱗', quantity: 3 },
            { name: '爆鎚竜の重殻', quantity: 2 },
            { name: '爆鎚竜の重顎', quantity: 1 },
          ],
        },
        {
          name: '重甲鎚ガンキンⅡ',
          materials: [
            { name: '爆鎚竜の重顎', quantity: 1 },
            { name: '爆鎚竜の重耐熱殻', quantity: 2 },
            { name: '爆鎚竜の天殻', quantity: 1 },
            { name: '硫斬竜の重牙', quantity: 2 },
          ],
        },
        {
          name: '灼炎のイシャター',
          materials: [
            { name: 'エルトライト鉱石', quantity: 6 },
            { name: '斬竜の厚鱗', quantity: 4 },
            { name: '斬竜の重牙', quantity: 2 },
            { name: '赤熱した溶炉嚢', quantity: 2 },
          ],
        },
        {
          name: '灼炎のイシャター改',
          materials: [
            { name: '兇爪竜の重牙', quantity: 3 },
            { name: '斬竜の獄炎状殻', quantity: 4 },
            { name: '斬竜の断剣尾', quantity: 1 },
            { name: '斬竜の天鱗', quantity: 1 },
          ],
        },
        {
          name: '斬竜鎚ウルガ',
          materials: [
            { name: '古龍の浄血', quantity: 3 },
            { name: '斬竜の獄炎状殻', quantity: 4 },
            { name: '斬竜の重牙', quantity: 5 },
            { name: '炎龍の剛爪', quantity: 2 },
          ],
        },
        {
          name: 'クルルビークⅠ',
          materials: [
            { name: '掻鳥の鱗', quantity: 3 },
            { name: '掻鳥の皮', quantity: 2 },
            { name: '掻鳥のクチバシ', quantity: 1 },
          ],
        },
        {
          name: 'クルルビークⅡ',
          materials: [
            { name: '強固な岩骨', quantity: 3 },
            { name: '掻鳥の鱗', quantity: 3 },
            { name: '掻鳥の飾り羽', quantity: 2 },
            { name: '掻鳥のクチバシ', quantity: 2 },
          ],
        },
        {
          name: 'クルルビークⅢ',
          materials: [
            { name: 'いびつな狂骨', quantity: 3 },
            { name: '掻鳥の飾り羽', quantity: 4 },
            { name: '掻鳥のクチバシ', quantity: 2 },
            { name: '惨爪竜の爪', quantity: 2 },
          ],
        },
        {
          name: 'ビークインパクトⅠ',
          materials: [
            { name: '掻鳥の上鱗', quantity: 6 },
            { name: '掻鳥の上皮', quantity: 4 },
            { name: '掻鳥の大クチバシ', quantity: 3 },
          ],
        },
        {
          name: 'ビークインパクトⅡ',
          materials: [
            { name: '掻鳥の大飾り羽', quantity: 3 },
            { name: '掻鳥の大クチバシ', quantity: 4 },
            { name: '荒々しい蛮骨', quantity: 3 },
            { name: '惨爪竜の尖爪', quantity: 2 },
          ],
        },
        {
          name: 'ビークインパクトⅢ',
          materials: [
            { name: '掻鳥の大飾り羽', quantity: 4 },
            { name: '掻鳥の大クチバシ', quantity: 5 },
            { name: '鳥竜玉', quantity: 1 },
            { name: '滅尽龍の尖爪', quantity: 2 },
          ],
        },
        {
          name: 'ネスルマクラブⅠ',
          materials: [
            { name: '頑強な重骨', quantity: 2 },
            { name: '掻鳥の巨大クチバシ', quantity: 1 },
            { name: '掻鳥の厚皮', quantity: 2 },
            { name: '掻鳥の厚鱗', quantity: 3 },
          ],
        },
        {
          name: 'ネスルマクラブⅡ',
          materials: [
            { name: '迅竜の重牙', quantity: 2 },
            { name: '重竜骨', quantity: 3 },
            { name: '掻鳥の巨大クチバシ', quantity: 2 },
            { name: '掻鳥の特大飾り羽', quantity: 3 },
          ],
        },
        {
          name: '巨牛の大蹄Ⅰ',
          materials: [
            { name: '強竜骨', quantity: 3 },
            { name: '猛牛竜の巨大な角', quantity: 1 },
            { name: '猛牛竜の重殻', quantity: 2 },
            { name: '猛牛竜の重甲', quantity: 2 },
          ],
        },
        {
          name: '巨牛の大蹄Ⅱ',
          materials: [
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '剛竜骨', quantity: 4 },
            { name: '猛牛竜の巨大な角', quantity: 4 },
            { name: '猛牛竜の靭尾', quantity: 1 },
          ],
        },
        {
          name: '黒羽の凶槌Ⅰ',
          materials: [
            { name: '幻鳥竜玉', quantity: 1 },
            { name: '黒狼鳥の銀狼毛', quantity: 4 },
            { name: '黒狼鳥の厚鱗', quantity: 3 },
            { name: '黒狼鳥の地獄耳', quantity: 2 },
          ],
        },
        {
          name: '黒羽の凶槌Ⅱ',
          materials: [
            { name: '大竜玉', quantity: 1 },
            { name: 'イカしたクチバシ', quantity: 3 },
            { name: '黒狼鳥の剛翼', quantity: 2 },
            { name: '傷痕の紫甲殻', quantity: 3 },
          ],
        },
        {
          name: 'ブロスヘッドⅠ',
          materials: [
            { name: '角竜の牙', quantity: 2 },
            { name: 'ねじれた角', quantity: 1 },
            { name: '角竜の甲殻', quantity: 4 },
            { name: '上竜骨', quantity: 3 },
          ],
        },
        {
          name: 'ブロスヘッドⅡ',
          materials: [
            { name: '角竜の背甲', quantity: 4 },
            { name: '角竜の尾甲', quantity: 2 },
            { name: '尖竜骨', quantity: 4 },
            { name: '角竜の骨髄', quantity: 1 },
          ],
        },
        {
          name: 'ブロスシャッターⅠ',
          materials: [
            { name: '角竜の延髄', quantity: 1 },
            { name: '角竜の堅殻', quantity: 6 },
            { name: '角竜の堅甲', quantity: 5 },
            { name: '上質なねじれた角', quantity: 3 },
          ],
        },
        {
          name: 'ブロスシャッターⅡ',
          materials: [
            { name: '竜玉', quantity: 1 },
            { name: '黒角竜の堅殻', quantity: 4 },
            { name: '上質な黒巻き角', quantity: 3 },
            { name: '滅尽龍の大角', quantity: 2 },
          ],
        },
        {
          name: 'ブロスシャッターⅢ',
          materials: [
            { name: '角竜の重殻', quantity: 6 },
            { name: '角竜の重甲', quantity: 5 },
            { name: '堅牢なねじれた角', quantity: 3 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: 'カオスシャッター',
          materials: [
            { name: '堅牢な黒巻き角', quantity: 3 },
            { name: '剛竜骨', quantity: 3 },
            { name: '黒角竜の重殻', quantity: 3 },
            { name: '大竜玉', quantity: 1 },
          ],
        },
        {
          name: '硫鉄のアルカン',
          materials: [
            { name: '削られた硫晶片', quantity: 4 },
            { name: '硫斬竜の剣山状殻', quantity: 3 },
            { name: '硫斬竜の重牙', quantity: 3 },
            { name: '硫斬竜の断剣尾', quantity: 1 },
          ],
        },
        {
          name: '硫斬鎚アルタミラ',
          materials: [
            { name: '斬竜の天鱗', quantity: 1 },
            { name: '硫斬竜の剣山状殻', quantity: 3 },
            { name: '硫斬竜の重牙', quantity: 4 },
            { name: '屍套龍の剛爪', quantity: 2 },
          ],
        },
        {
          name: 'ドラグロフレームⅠ',
          materials: [
            { name: '土砂竜の甲殻', quantity: 3 },
            { name: '土砂竜の爪', quantity: 1 },
            { name: '土砂竜の背甲', quantity: 2 },
          ],
        },
        {
          name: 'ドラグロフレームⅡ',
          materials: [
            { name: 'ケストドンの甲殻', quantity: 3 },
            { name: '土砂竜の尻尾', quantity: 1 },
            { name: '土砂竜の爪', quantity: 2 },
            { name: 'ドラグライト鉱石', quantity: 3 },
          ],
        },
        {
          name: 'ドラグロフレームⅢ',
          materials: [
            { name: '土砂竜の爪', quantity: 4 },
            { name: '土砂竜の頭殻', quantity: 2 },
            { name: '角竜の甲殻', quantity: 3 },
            { name: '上竜骨', quantity: 3 },
          ],
        },
        {
          name: 'ボルボブレイカーⅠ',
          materials: [
            { name: '土砂竜の鋭爪', quantity: 2 },
            { name: '土砂竜の堅殻', quantity: 3 },
            { name: '土砂竜の堅甲', quantity: 2 },
            { name: 'ケストドンの堅殻', quantity: 5 },
          ],
        },
        {
          name: 'ボルボブレイカーⅡ',
          materials: [
            { name: '角竜の堅殻', quantity: 3 },
            { name: '土砂竜の鋭爪', quantity: 4 },
            { name: '土砂竜の堅殻', quantity: 3 },
            { name: 'ガストドンの堅殻', quantity: 5 },
          ],
        },
        {
          name: 'ボルボブレイカーⅢ',
          materials: [
            { name: '土砂竜の鋭爪', quantity: 5 },
            { name: '土砂竜の堅甲', quantity: 5 },
            { name: '竜玉', quantity: 1 },
            { name: '滅尽龍の大角', quantity: 1 },
          ],
        },
        {
          name: 'ボルボインパクトⅠ',
          materials: [
            { name: 'ケストドンの重殻', quantity: 2 },
            { name: '土砂竜の剛爪', quantity: 1 },
            { name: '土砂竜の重殻', quantity: 2 },
            { name: '土砂竜の重甲', quantity: 2 },
          ],
        },
        {
          name: 'ボルボインパクトⅡ',
          materials: [
            { name: '黒角竜の重殻', quantity: 2 },
            { name: '重竜骨', quantity: 3 },
            { name: '土砂竜の剛爪', quantity: 2 },
            { name: '土砂竜の重頭殻', quantity: 1 },
          ],
        },
        {
          name: 'ディオステイル',
          materials: [
            { name: 'メランジェ鉱石', quantity: 3 },
            { name: '砕竜の重殻', quantity: 4 },
            { name: '砕竜の重頭殻', quantity: 2 },
            { name: '光る粘菌', quantity: 3 },
          ],
        },
        {
          name: '爆鎚ズーニーテイル',
          materials: [
            { name: '砕竜の重黒曜甲', quantity: 4 },
            { name: '砕竜の重頭殻', quantity: 3 },
            { name: '砕竜の天殻', quantity: 1 },
            { name: '凝縮された爆腺液', quantity: 3 },
          ],
        },
        {
          name: 'ブレイズハンマーⅠ',
          materials: [
            { name: '蛮顎竜の鱗', quantity: 3 },
            { name: '蛮顎竜の牙', quantity: 2 },
            { name: '火炎袋', quantity: 1 },
          ],
        },
        {
          name: 'ブレイズハンマーⅡ',
          materials: [
            { name: '火竜の骨髄', quantity: 1 },
            { name: '蛮顎竜の牙', quantity: 4 },
            { name: '蛮顎竜の尻尾', quantity: 1 },
            { name: '蛮顎竜の鼻骨', quantity: 1 },
          ],
        },
        {
          name: 'ジャナフストライクⅠ',
          materials: [
            { name: '蛮顎竜の逆鱗', quantity: 1 },
            { name: '爆炎袋', quantity: 3 },
            { name: '蛮顎竜の上鱗', quantity: 5 },
            { name: '蛮顎竜の鋭牙', quantity: 4 },
          ],
        },
        {
          name: 'ジャナフストライクⅡ',
          materials: [
            { name: '火竜の延髄', quantity: 2 },
            { name: '獄炎石', quantity: 1 },
            { name: '蛮顎竜の上毛皮', quantity: 4 },
            { name: '蛮顎竜の鋭牙', quantity: 5 },
          ],
        },
        {
          name: 'ジャナフストライクⅢ',
          materials: [
            { name: '炎王龍のたてがみ', quantity: 2 },
            { name: '蛮顎竜の鋭牙', quantity: 6 },
            { name: '蛮顎竜の大鼻骨', quantity: 2 },
            { name: '蛮顎竜の宝玉', quantity: 1 },
          ],
        },
        {
          name: '蛮顎竜ノ猛槌Ⅰ',
          materials: [
            { name: 'エルトライト鉱石', quantity: 3 },
            { name: '蛮顎竜の重牙', quantity: 1 },
            { name: '蛮顎竜の厚鱗', quantity: 2 },
            { name: '業炎袋', quantity: 1 },
          ],
        },
        {
          name: '蛮顎竜ノ猛槌Ⅱ',
          materials: [
            { name: '蛮顎竜の重鼻骨', quantity: 2 },
            { name: '蒼火竜の重殻', quantity: 2 },
            { name: '蛮顎竜の厚毛皮', quantity: 3 },
            { name: '蛮顎竜の靭尾', quantity: 1 },
          ],
        },
        {
          name: 'ドンナ＝ジャナールⅠ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 2 },
            { name: '剛竜骨', quantity: 3 },
            { name: '雷顎竜の厚鱗', quantity: 2 },
            { name: '雷顎竜の重牙', quantity: 1 },
          ],
        },
        {
          name: 'ドンナ＝ジャナールⅡ',
          materials: [
            { name: '雷顎竜の厚毛皮', quantity: 3 },
            { name: '雷顎竜の重鼻骨', quantity: 2 },
            { name: '雷顎竜の靭尾', quantity: 1 },
            { name: '雷電袋', quantity: 3 },
          ],
        },
      ],
    },
    {
      name: '龍骨系',
      weapons: [
        {
          name: '龍骨大槌Ⅰ',
          materials: [
            { name: 'いびつな狂骨', quantity: 5 },
            { name: '強固な岩骨', quantity: 5 },
            { name: '太古の大骨', quantity: 5 },
            { name: 'サンゴの紅骨', quantity: 5 },
          ],
        },
        {
          name: '龍骨大槌Ⅱ',
          materials: [
            { name: '竜骨【大】', quantity: 8 },
            { name: '頑丈な骨', quantity: 8 },
            { name: '上竜骨', quantity: 6 },
          ],
        },
        {
          name: '龍骨大槌Ⅲ',
          materials: [
            { name: '古龍骨', quantity: 10 },
            { name: '竜玉', quantity: 1 },
            { name: 'いにしえの龍骨', quantity: 2 },
            { name: '荒々しい蛮骨', quantity: 4 },
          ],
        },
        {
          name: '龍封じの大槌Ⅰ',
          materials: [
            { name: '頑強な重骨', quantity: 6 },
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '剛竜骨', quantity: 3 },
            { name: '重竜骨', quantity: 4 },
          ],
        },
        {
          name: '龍封じの大槌Ⅱ',
          materials: [
            { name: '剛竜骨', quantity: 4 },
            { name: '太古龍骨', quantity: 6 },
            { name: '大竜玉', quantity: 1 },
            { name: '溶岩竜の特上ヒレ', quantity: 2 },
          ],
        },
        {
          name: '明珠在掌ー降魔ー',
          materials: [
            { name: '地啼竜の慈鱗', quantity: 6 },
            { name: '地啼竜の慈眼殻', quantity: 2 },
            { name: '地啼竜の慈爪', quantity: 4 },
            { name: '地啼竜の顕玉', quantity: 1 },
          ],
        },
        {
          name: 'マグダ・フロガ',
          materials: [
            { name: '熔山龍の熱鱗', quantity: 4 },
            { name: '熔山龍のマグマ', quantity: 4 },
            { name: '熔山龍の岩殻', quantity: 8 },
            { name: '熔山龍の宝玉', quantity: 1 },
          ],
        },
        {
          name: '活火激発マグフロガ',
          materials: [
            { name: '獄炎石', quantity: 3 },
            { name: '熔山龍の背甲', quantity: 2 },
            { name: '熔山龍の胸殻', quantity: 2 },
            { name: '冥灯龍の幽角', quantity: 4 },
          ],
        },
        {
          name: '真活火激発マグロガ',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '龍脈の重竜骨', quantity: 5 },
            { name: '龍脈の剛竜骨', quantity: 5 },
            { name: '龍脈の古龍骨', quantity: 3 },
          ],
        },
      ],
    },
    {
      name: '黒鋼系',
      weapons: [
        {
          name: '黒鋼の鎚Ⅰ',
          materials: [
            { name: '大地の結晶', quantity: 10 },
            { name: 'ライトクリスタル', quantity: 1 },
            { name: '深海の結晶', quantity: 10 },
            { name: '龍脈の結晶', quantity: 10 },
          ],
        },
        {
          name: '黒鋼の鎚Ⅱ',
          materials: [
            { name: '獄炎石', quantity: 1 },
            { name: '竜玉', quantity: 1 },
            { name: 'カブレライト鉱石', quantity: 10 },
            { name: 'ユニオン鉱石', quantity: 5 },
          ],
        },
        {
          name: '鋼氷棍',
          materials: [
            { name: '鋼龍の尻尾', quantity: 2 },
            { name: '滅尽龍の堅殻', quantity: 5 },
            { name: '鋼龍の尖爪', quantity: 3 },
            { name: '鋼龍の翼', quantity: 4 },
          ],
        },
        {
          name: 'コロサル＝ダオラ',
          materials: [
            { name: '鋼龍の尖角', quantity: 5 },
            { name: '鋼龍の宝玉', quantity: 1 },
            { name: '冥灯龍の幽翼', quantity: 2 },
            { name: '鋼龍の尖爪', quantity: 4 },
          ],
        },
        {
          name: 'ヒュペル＝ダオラ',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '鋼の厚龍鱗', quantity: 5 },
            { name: '鋼龍の剛爪', quantity: 4 },
            { name: '鋼龍の剛角', quantity: 5 },
          ],
        },
        {
          name: 'ゼノ＝マファガルナ',
          materials: [
            { name: '冥灯龍の白殻', quantity: 6 },
            { name: '冥灯龍の幽爪', quantity: 4 },
            { name: '冥灯龍の幽玉', quantity: 1 },
            { name: '冥灯龍の尻尾', quantity: 2 },
          ],
        },
        {
          name: 'ゼノ＝マファガルナ改',
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
      name: 'ジェイルハンマー系',
      weapons: [
        {
          name: 'ジェイルハンマー',
          materials: [
            { name: 'ノヴァクリスタル', quantity: 1 },
            { name: '狩猟王のコイン', quantity: 5 },
            { name: 'ツィツィコイン', quantity: 4 },
            { name: 'レウスコイン', quantity: 4 },
          ],
        },
        {
          name: 'バインドキューブ',
          materials: [
            { name: '竜玉', quantity: 2 },
            { name: '撃龍王のコイン', quantity: 5 },
            { name: '飛竜コイン', quantity: 4 },
            { name: '獣竜コイン', quantity: 4 },
          ],
        },
        {
          name: 'バインドコフィン',
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
          name: '混沌の鎚',
          materials: [
            { name: '恐暴竜の黒鱗', quantity: 6 },
            { name: '恐暴竜の大牙', quantity: 3 },
            { name: '恐暴竜の鉤爪', quantity: 2 },
            { name: '恐暴竜の唾液', quantity: 2 },
          ],
        },
        {
          name: 'カオスラッシュ',
          materials: [
            { name: '恐暴竜の大牙', quantity: 5 },
            { name: '恐暴竜の頭殻', quantity: 2 },
            { name: '恐暴竜の宝玉', quantity: 1 },
            { name: '古龍の血', quantity: 5 },
          ],
        },
        {
          name: '業鎚ダグザ',
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
          name: 'エンプレスメイス',
          materials: [
            { name: '炎妃龍のたてがみ', quantity: 3 },
            { name: '炎妃龍の宝玉', quantity: 1 },
            { name: '炎妃龍の尖角', quantity: 3 },
            { name: '炎妃龍の上鱗', quantity: 4 },
          ],
        },
        {
          name: 'エンプレスメイス・冥灯',
          materials: [
            { name: '冥灯龍の幽角', quantity: 3 },
            { name: '冥灯龍の幽玉', quantity: 1 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の尻尾', quantity: 2 },
          ],
        },
        {
          name: 'エンプレスメイス・滅尽',
          materials: [
            { name: '滅尽龍の宝玉', quantity: 1 },
            { name: '滅尽龍の大角', quantity: 3 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の翼', quantity: 3 },
          ],
        },
        {
          name: 'エンプレスメイス・炎妃',
          materials: [
            { name: '炎王龍の尖角', quantity: 3 },
            { name: '爆鱗竜の宝玉', quantity: 1 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の尖角', quantity: 2 },
          ],
        },
        {
          name: '魂焔の剛鎚・炎妃',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '炎妃龍の厚鱗', quantity: 4 },
            { name: '炎妃龍の剛角', quantity: 4 },
            { name: '炎妃龍の大たてがみ', quantity: 4 },
          ],
        },
        {
          name: '魂焔の剛鎚・滅尽',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '殲滅の大剛角', quantity: 3 },
            { name: '無窮の新生殻', quantity: 3 },
            { name: '炎妃龍の厚鱗', quantity: 4 },
          ],
        },
        {
          name: '魂焔の剛鎚・冥灯',
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
      name: 'ゴワゴワ系',
      weapons: [
        {
          name: 'ゴワゴワの針山',
          materials: [
            { name: '毒袋', quantity: 2 },
            { name: '頑丈な骨', quantity: 5 },
            { name: '骨鎚竜の鱗', quantity: 3 },
            { name: 'ゴワゴワチケット', quantity: 1 },
          ],
        },
        {
          name: 'ゴワゴワの怨念',
          materials: [
            { name: '猛毒袋', quantity: 3 },
            { name: '骨鎚竜の上鱗', quantity: 3 },
            { name: '勇気の証G', quantity: 1 },
            { name: 'ゴワゴワチケット', quantity: 2 },
          ],
        },
        {
          name: 'ゴワゴワ地獄',
          materials: [
            { name: '劇烈毒袋', quantity: 4 },
            { name: '覇王の証', quantity: 1 },
            { name: '恐暴竜の厚黒皮', quantity: 3 },
            { name: '調査団チケットG', quantity: 2 },
          ],
        },
      ],
    },
    {
      name: '金獅子系',
      weapons: [
        {
          name: '怒髪鎚',
          materials: [
            { name: '金獅子の重牙', quantity: 2 },
            { name: '金獅子の剛爪', quantity: 1 },
            { name: '金獅子の剛角', quantity: 1 },
            { name: '金獅子の黒荒毛', quantity: 2 },
          ],
        },
        {
          name: '怒髪豪ダイラージャン',
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
          name: '鬼神鎚【金鬼】',
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
          name: '獄鎚リュウガク',
          materials: [
            { name: '獄狼竜の滅龍毛', quantity: 2 },
            { name: '獄狼竜の滅龍殻', quantity: 2 },
            { name: '獄狼竜の剛角', quantity: 1 },
            { name: '獄狼竜の剛爪', quantity: 1 },
          ],
        },
        {
          name: '狼牙鎚【食獄】',
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
          name: '砕光の滅鎚',
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
          name: '煌黒の堅鎚',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '煌黒龍の凶爪', quantity: 3 },
            { name: '天を統べる角', quantity: 1 },
            { name: '煌黒龍の天鱗', quantity: 3 },
          ],
        },
        {
          name: '煌黒堅鎚アルメタ',
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
          name: 'ミラバスター',
          materials: [
            { name: '黒龍の厚鱗', quantity: 3 },
            { name: '黒龍の重胸殻', quantity: 1 },
            { name: '黒龍の剛角', quantity: 1 },
            { name: '黒龍の邪眼', quantity: 1 },
          ],
        },
        {
          name: 'ミラデモリッシャー',
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
      name: 'こんがり肉系',
      weapons: [
        {
          name: 'こんがり肉【極上】',
          materials: [
            { name: '森林の結晶', quantity: 5 },
            { name: '龍脈に侵されし狂骨', quantity: 3 },
            { name: '龍脈に眠る大骨', quantity: 3 },
            { name: '食事場チケット【肉】', quantity: 1 },
          ],
        },
        {
          name: 'こんがり肉【特選】',
          materials: [
            { name: '兇爪竜の重牙', quantity: 2 },
            { name: '剛竜骨', quantity: 8 },
            { name: '赤熱した溶炉嚢', quantity: 3 },
            { name: '食事場チケット【肉】', quantity: 2 },
          ],
        },
      ],
    },
    {
      name: 'ギルドパレス系',
      weapons: [
        {
          name: 'ギルドパレスメイス',
          materials: [
            { name: 'グラシスメタル', quantity: 5 },
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '琥珀色の重牙', quantity: 2 },
            { name: '祭典チケット', quantity: 2 },
          ],
        },
        {
          name: '宮廷十字鎚【鍛星】',
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
