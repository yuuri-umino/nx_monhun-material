import { WeaponType } from './materialsTypes'

const greatsword: WeaponType = {
  type: '大剣',
  derivations: [
    {
      name: '防衛隊系',
      weapons: [
        {
          name: '防衛隊炎刃型大剣Ⅰ',
          materials: [{ name: '鉄鉱石', quantity: 1 }],
        },
        {
          name: '防衛隊炎刃型大剣Ⅱ',
          materials: [{ name: '蛮顎竜の鱗', quantity: 1 }],
        },
        {
          name: '防衛隊炎刃型大剣Ⅲ',
          materials: [{ name: '勇気の証', quantity: 1 }],
        },
        {
          name: '防衛隊炎刃型大剣Ⅳ',
          materials: [{ name: '桜火竜の上鱗', quantity: 1 }],
        },
        {
          name: '防衛隊炎刃型大剣Ⅴ',
          materials: [{ name: '不滅の龍鱗', quantity: 1 }],
        },
      ],
    },
    {
      name: '鉱石素材系',
      weapons: [
        {
          name: 'バスターソードⅢ',
          materials: [
            { name: '大地の結晶', quantity: 2 },
            { name: '鉄鉱石', quantity: 5 },
            { name: 'マカライト鉱石', quantity: 2 },
          ],
        },
        {
          name: 'バスターブレイドⅠ',
          materials: [
            { name: 'マカライト鉱石', quantity: 5 },
            { name: '竜骨【中】', quantity: 2 },
            { name: 'ドラグライト鉱石', quantity: 2 },
          ],
        },
        {
          name: 'バスターブレイドⅡ',
          materials: [
            { name: 'マカライト鉱石', quantity: 10 },
            { name: 'ドラグライト鉱石', quantity: 5 },
            { name: '上竜骨', quantity: 2 },
            { name: '深海の結晶', quantity: 2 },
          ],
        },
        {
          name: 'バスターブレイドⅢ',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 5 },
            { name: 'カブレライト鉱石', quantity: 8 },
            { name: '龍脈の結晶', quantity: 2 },
          ],
        },
        {
          name: 'クロームレイザーⅠ',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 10 },
            { name: 'カブレライト鉱石', quantity: 5 },
            { name: '龍脈の結晶', quantity: 3 },
            { name: 'ユニオン鉱石', quantity: 8 },
          ],
        },
        {
          name: 'クロームレイザーⅡ',
          materials: [
            { name: '古龍の血', quantity: 2 },
            { name: '獄炎石', quantity: 1 },
            { name: 'カブレライト鉱石', quantity: 20 },
            { name: 'ユニオン鉱石', quantity: 13 },
          ],
        },
        {
          name: 'クロームデスサイズⅠ',
          materials: [
            { name: 'カブレライト鉱石', quantity: 4 },
            { name: '霊脈の結晶', quantity: 2 },
            { name: 'グラシスメタル', quantity: 1 },
            { name: 'エルトライト鉱石', quantity: 2 },
          ],
        },
        {
          name: 'クロームデスサイズⅡ',
          materials: [
            { name: 'メランジェ鉱', quantity: 2 },
            { name: 'エルトライト鉱石', quantity: 4 },
            { name: '重竜骨', quantity: 3 },
            { name: 'デプスライト鉱石', quantity: 2 },
          ],
        },
        {
          name: 'クロームデスサイズⅢ',
          materials: [
            { name: '古龍の浄血', quantity: 3 },
            { name: 'メランジェ鉱', quantity: 3 },
            { name: 'エルトライト鉱石', quantity: 6 },
            { name: 'ピュアクリスタル', quantity: 1 },
          ],
        },
        {
          name: 'ネルガルジャッジ',
          materials: [
            { name: '滅尽龍の再生殻', quantity: 4 },
            { name: '滅尽龍の尻尾', quantity: 2 },
            { name: '滅尽龍の堅殻', quantity: 2 },
            { name: '滅尽龍の尖爪', quantity: 3 },
          ],
        },
        {
          name: '滅鬼の凶器',
          materials: [
            { name: '滅尽龍の宝玉', quantity: 1 },
            { name: '滅尽龍の尻尾', quantity: 5 },
            { name: '滅尽龍の尖爪', quantity: 5 },
            { name: '滅尽龍の幽角', quantity: 2 },
          ],
        },
        {
          name: '滅鬼の凶器【断】',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '殲滅の大剛角', quantity: 3 },
            { name: '無窮の新生殻', quantity: 5 },
            { name: '滅尽龍の剛爪', quantity: 4 },
          ],
        },
        {
          name: 'サンダーブレイドⅠ',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 5 },
            { name: '電気袋×', quantity: 1 },
            { name: '飛雷竜の爪', quantity: 2 },
            { name: '飛雷竜の電極', quantity: 1 },
          ],
        },
        {
          name: 'サンダーブレイドⅡ',
          materials: [
            { name: '上竜骨', quantity: 2 },
            { name: '深海の結晶', quantity: 3 },
            { name: '飛雷竜の電極針', quantity: 2 },
            { name: '飛雷竜の皮膜', quantity: 2 },
          ],
        },
        {
          name: 'ライトニングパニッシュⅠ',
          materials: [
            { name: 'ランゴスタの薄羽', quantity: 3 },
            { name: '飛雷竜の上毛皮', quantity: 3 },
            { name: '飛雷竜の上鱗', quantity: 4 },
            { name: 'カブレライト鉱石', quantity: 5 },
          ],
        },
        {
          name: 'ライトニングパニッシュⅡ',
          materials: [
            { name: '飛雷竜の皮膜', quantity: 4 },
            { name: '飛雷竜の雷極針', quantity: 2 },
            { name: '電撃袋', quantity: 3 },
            { name: 'ユニオン鉱石', quantity: 5 },
          ],
        },
        {
          name: 'ライトニングパニッシュⅢ',
          materials: [
            { name: '古龍の血', quantity: 3 },
            { name: '竜玉', quantity: 1 },
            { name: '飛雷竜の雷極針', quantity: 4 },
            { name: '飛雷竜の尖爪', quantity: 6 },
          ],
        },
        {
          name: 'ライトニングパニッシュⅣ',
          materials: [
            { name: '飛雷竜の厚毛皮', quantity: 2 },
            { name: '飛雷竜の剛爪', quantity: 1 },
            { name: '飛雷竜の厚鱗', quantity: 2 },
            { name: '雷電袋', quantity: 1 },
          ],
        },
        {
          name: '迅雷の断裂斧Ⅰ',
          materials: [
            { name: '雷電袋', quantity: 3 },
            { name: '雷狼竜の雷電殻', quantity: 2 },
            { name: '雷狼竜の重殻', quantity: 5 },
            { name: '雷狼竜の剛爪', quantity: 3 },
          ],
        },
        {
          name: '迅雷の断裂斧Ⅱ',
          materials: [
            { name: '雷狼竜の雷電毛', quantity: 4 },
            { name: '雷狼竜の剛角', quantity: 3 },
            { name: '雷狼竜の天玉', quantity: 1 },
            { name: '超電雷光虫', quantity: 5 },
          ],
        },
        {
          name: 'フリーズブレイドⅠ',
          materials: [
            { name: '深海の結晶', quantity: 3 },
            { name: '風漂竜の鱗', quantity: 4 },
            { name: '風漂竜の爪', quantity: 3 },
            { name: '氷結袋', quantity: 2 },
          ],
        },
        {
          name: 'フリーズブレイドⅡ',
          materials: [
            { name: '風漂竜の翼膜', quantity: 3 },
            { name: 'シャムオスの上鱗', quantity: 5 },
            { name: '風漂竜の尾膜', quantity: 2 },
            { name: 'カブレライト鉱石', quantity: 5 },
          ],
        },
        {
          name: 'フロストブレイズⅠ',
          materials: [
            { name: 'ユニオン鉱石', quantity: 5 },
            { name: '風漂竜の上鱗', quantity: 5 },
            { name: '凍結袋', quantity: 3 },
            { name: '風漂竜の翼', quantity: 3 },
          ],
        },
        {
          name: 'フロストブレイズⅡ',
          materials: [
            { name: '古龍の血', quantity: 3 },
            { name: '竜玉', quantity: 1 },
            { name: '風漂竜の上皮', quantity: 3 },
          ],
        },
        {
          name: 'アイシクルファング',
          materials: [
            { name: '凍てついた氷骨', quantity: 3 },
            { name: '瞬間凍結袋', quantity: 4 },
            { name: '氷牙竜の剛爪', quantity: 3 },
            { name: '氷牙竜の重殻', quantity: 4 },
          ],
        },
        {
          name: 'アイシクルファング改',
          materials: [
            { name: '琥珀色の重牙', quantity: 3 },
            { name: '漆黒の氷刃爪', quantity: 2 },
            { name: '大竜玉', quantity: 1 },
            { name: '氷牙竜の重棘', quantity: 3 },
          ],
        },
        {
          name: 'フロストブレイズⅢ',
          materials: [
            { name: 'グラシスメタル', quantity: 2 },
            { name: 'エルトライト鉱石', quantity: 4 },
            { name: 'ウルグの厚毛皮', quantity: 3 },
            { name: '瞬間凍結袋', quantity: 1 },
          ],
        },
        {
          name: 'グラシュバリエ',
          materials: [
            { name: '琥珀色の重牙', quantity: 2 },
            { name: '太古龍骨', quantity: 5 },
            { name: '氷牙竜の剛爪', quantity: 4 },
            { name: '冰龍の剛爪', quantity: 2 },
          ],
        },
        {
          name: 'グラシュオグル',
          materials: [
            { name: '大竜玉', quantity: 1 },
            { name: '氷牙竜チケット', quantity: 2 },
            { name: '白銀の氷刃牙', quantity: 3 },
            { name: '氷河を砕く剣爪', quantity: 3 },
          ],
        },
        {
          name: 'ジャグラスブレイドⅠ',
          materials: [
            { name: '賊竜の鱗', quantity: 3 },
            { name: '賊竜の皮', quantity: 1 },
            { name: '賊竜の爪', quantity: 1 },
            { name: 'とがった爪', quantity: 1 },
          ],
        },
        {
          name: 'ジャグラスブレイドⅡ',
          materials: [
            { name: '賊竜のたてがみ', quantity: 2 },
            { name: '賊竜の爪', quantity: 3 },
            { name: '眩鳥の爪', quantity: 2 },
            { name: 'サンゴの紅骨', quantity: 2 },
          ],
        },
        {
          name: 'ジャグラスブレイドⅢ',
          materials: [
            { name: '賊竜の鱗', quantity: 5 },
            { name: '賊竜のたてがみ', quantity: 3 },
            { name: '賊竜の爪', quantity: 3 },
            { name: '上竜骨', quantity: 3 },
          ],
        },
        {
          name: 'ジャグラスハッカーⅠ',
          materials: [
            { name: '賊竜のたてがみ', quantity: 6 },
            { name: '賊竜の上鱗', quantity: 6 },
            { name: '賊竜の尖爪', quantity: 4 },
            { name: '鋭利な爪', quantity: 5 },
          ],
        },
        {
          name: 'ジャグラスハッカーⅡ',
          materials: [
            { name: 'ジャグラスの上皮', quantity: 6 },
            { name: '堅竜骨', quantity: 4 },
            { name: '賊竜の尖爪', quantity: 6 },
            { name: '眩鳥の尖爪', quantity: 5 },
          ],
        },
        {
          name: 'ジャグラスハッカーⅢ',
          materials: [
            { name: '賊竜の上皮', quantity: 6 },
            { name: '賊竜の尖爪', quantity: 8 },
            { name: 'ノヴァクリスタル', quantity: 1 },
            { name: '屍套龍の尖爪', quantity: 2 },
          ],
        },
        {
          name: 'ジャグラスデスクロウⅠ',
          materials: [
            { name: 'ジャグラスの厚鱗', quantity: 2 },
            { name: '賊竜の大たてがみ', quantity: 2 },
            { name: '賊竜の剛爪', quantity: 1 },
            { name: '賊竜の厚鱗', quantity: 2 },
          ],
        },
        {
          name: 'ジャグラスデスクロウⅡ',
          materials: [
            { name: '強靭な爪', quantity: 3 },
            { name: '重竜骨', quantity: 3 },
            { name: '賊竜の剛爪', quantity: 3 },
            { name: '賊竜の厚皮', quantity: 3 },
          ],
        },
        {
          name: '巨牛の大斧Ⅰ',
          materials: [
            { name: '強竜骨', quantity: 3 },
            { name: '猛牛竜の巨大な角', quantity: 1 },
            { name: '猛牛竜の重殻', quantity: 2 },
            { name: '猛牛竜の重甲', quantity: 2 },
          ],
        },
        {
          name: '巨牛の大斧Ⅱ',
          materials: [
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '剛竜骨', quantity: 3 },
            { name: '猛牛竜の巨大な角', quantity: 3 },
            { name: '猛牛竜の靭尾', quantity: 2 },
          ],
        },
        {
          name: 'ギルオスブレイドⅠ',
          materials: [
            { name: '痺賊竜の鱗', quantity: 3 },
            { name: '痺賊竜の牙', quantity: 1 },
          ],
        },
        {
          name: 'マラドハディードⅠ',
          materials: [
            { name: '痺賊竜の尻尾', quantity: 2 },
            { name: '痺賊竜の上鱗', quantity: 5 },
            { name: '痺賊竜の鋭牙', quantity: 3 },
            { name: 'ギルオスの上鱗', quantity: 6 },
          ],
        },
        {
          name: 'マラドハディードⅡ',
          materials: [
            { name: '角竜の延髄', quantity: 1 },
            { name: '痺賊竜の大頭巾', quantity: 2 },
            { name: '痺賊竜の鋭牙', quantity: 4 },
            { name: '強力麻痺袋', quantity: 4 },
          ],
        },
        {
          name: 'マラドハディードⅢ',
          materials: [
            { name: '鳥竜玉', quantity: 1 },
            { name: '痺賊竜の大頭巾', quantity: 3 },
            { name: '痺賊竜の鋭牙', quantity: 5 },
            { name: '屍套龍の鋭牙', quantity: 2 },
            { name: 'ギルオスの麻痺牙', quantity: 3 },
          ],
        },
        {
          name: 'ギルオスブレイドⅡ',
          materials: [
            { name: '角竜の牙', quantity: 2 },
            { name: '痺賊竜の頭巾殻', quantity: 2 },
            { name: '痺賊竜の牙', quantity: 3 },
            { name: '麻痺袋', quantity: 2 },
          ],
        },
        {
          name: 'ナーガ＝メクサラⅠ',
          materials: [
            { name: '強靭な爪', quantity: 2 },
            { name: '濃縮麻痺袋', quantity: 2 },
            { name: '痺賊竜の重牙', quantity: 2 },
            { name: '痺賊竜の靭尾', quantity: 1 },
          ],
        },
        {
          name: 'ナーガ＝メクサラⅡ',
          materials: [
            { name: '幻鳥竜玉', quantity: 1 },
            { name: '惨爪竜の重牙', quantity: 2 },
            { name: '痺賊竜の厚鱗', quantity: 4 },
            { name: '痺賊竜の重頭巾', quantity: 2 },
          ],
        },
        {
          name: 'ヒドゥンブレイズⅠ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 1 },
            { name: '迅竜の厚鱗', quantity: 3 },
            { name: '迅竜の重牙', quantity: 2 },
            { name: '迅竜の重尾棘', quantity: 2 },
          ],
        },
        {
          name: 'ヒドゥンブレイズⅡ',
          materials: [
            { name: '迅竜の天鱗', quantity: 1 },
            { name: '迅竜の靭尾', quantity: 2 },
            { name: '迅竜の剛刃翼', quantity: 3 },
            { name: '雷顎竜の重牙', quantity: 2 },
          ],
        },
        {
          name: 'ラヴァブレイズⅠ',
          materials: [
            { name: '溶岩竜の鋭牙', quantity: 2 },
            { name: '溶岩竜の上ヒレ', quantity: 2 },
            { name: '溶岩竜の上鱗', quantity: 4 },
          ],
        },
        {
          name: 'ラヴァブレイズⅡ',
          materials: [
            { name: '炎王龍のたてがみ', quantity: 2 },
            { name: '溶岩竜の鋭牙', quantity: 3 },
            { name: '溶岩竜の上ヒレ', quantity: 3 },
            { name: '竜玉', quantity: 1 },
          ],
        },
        {
          name: '火砕剣Ⅰ',
          materials: [
            { name: 'バルノスの剛爪', quantity: 2 },
            { name: '溶岩竜の厚鱗', quantity: 3 },
            { name: '溶岩竜の重牙', quantity: 2 },
            { name: '溶岩竜の特上ヒレ', quantity: 1 },
          ],
        },
        {
          name: '火砕剣Ⅱ',
          materials: [
            { name: '剛竜骨', quantity: 3 },
            { name: '蒼火竜の重殻', quantity: 2 },
            { name: '溶岩竜の重牙', quantity: 2 },
            { name: '溶岩竜の特上ヒレ', quantity: 2 },
          ],
        },
        {
          name: 'ディノブレイズⅠ',
          materials: [
            { name: 'エルトライト鉱石', quantity: 6 },
            { name: '斬竜の厚鱗', quantity: 4 },
            { name: '斬竜の重牙', quantity: 2 },
            { name: '赤熱した溶炉嚢', quantity: 2 },
          ],
        },
        {
          name: 'ディノブレイズⅡ',
          materials: [
            { name: '兇爪竜の重牙', quantity: 2 },
            { name: '斬竜の獄炎状殻', quantity: 3 },
            { name: '斬竜の断剣尾', quantity: 2 },
            { name: '斬竜の天鱗', quantity: 1 },
          ],
        },
        {
          name: 'ブルームブレイドⅠ',
          materials: [
            { name: '毒袋', quantity: 1 },
            { name: '毒妖鳥の鱗', quantity: 3 },
            { name: '毒妖鳥の羽根', quantity: 2 },
          ],
        },
        {
          name: 'ブルームブレイドⅡ',
          materials: [
            { name: '毒妖鳥の尻尾', quantity: 1 },
            { name: '毒妖鳥の喉袋', quantity: 2 },
            { name: '深海の結晶', quantity: 3 },
            { name: '毒妖鳥の甲殻', quantity: 3 },
          ],
        },
        {
          name: 'ブルームブレイドⅢ',
          materials: [
            { name: '毒袋', quantity: 2 },
            { name: '毒妖鳥の喉袋', quantity: 2 },
            { name: '毒妖鳥の羽根', quantity: 4 },
            { name: '上竜骨', quantity: 2 },
          ],
        },
        {
          name: 'ダチュラヘルスパインⅠ',
          materials: [
            { name: '強竜骨', quantity: 2 },
            { name: '劇烈毒袋', quantity: 2 },
            { name: '毒妖鳥の剛翼', quantity: 2 },
            { name: '毒妖鳥の厚鱗', quantity: 3 },
          ],
        },
        {
          name: 'ダチュラヘルスパインⅡ',
          materials: [
            { name: '重竜骨', quantity: 3 },
            { name: '毒妖鳥の靭尾', quantity: 1 },
            { name: '毒妖鳥の特大喉袋', quantity: 1 },
            { name: '雌火竜の秘棘', quantity: 2 },
          ],
        },
        {
          name: 'ニュクスレイザーⅠ',
          materials: [
            { name: 'ゴム質の重殻', quantity: 2 },
            { name: '卒倒昏睡袋', quantity: 1 },
            { name: '浮眠竜の厚毛皮', quantity: 3 },
            { name: '浮眠竜の剛翼', quantity: 2 },
          ],
        },
        {
          name: 'ニュクスレイザーⅡ',
          materials: [
            { name: '黒角竜の重甲', quantity: 2 },
            { name: '大竜玉', quantity: 1 },
            { name: '浮空竜の厚鱗', quantity: 5 },
            { name: '浮眠竜の剛翼', quantity: 3 },
          ],
        },
        {
          name: 'フレイムブレイドⅠ',
          materials: [
            { name: '火竜の骨髄', quantity: 1 },
            { name: '火竜の翼膜', quantity: 2 },
            { name: '火炎袋', quantity: 2 },
            { name: '火竜の鱗', quantity: 1 },
          ],
        },
        {
          name: 'フレイムブレイドⅡ',
          materials: [
            { name: '火竜の尻尾', quantity: 2 },
            { name: '火竜の逆鱗', quantity: 1 },
            { name: '火竜の鱗', quantity: 6 },
            { name: '爆炎袋', quantity: 3 },
          ],
        },
        {
          name: 'レッドウィング',
          materials: [
            { name: '火竜の延髄', quantity: 1 },
            { name: '火竜の堅殻', quantity: 4 },
            { name: '火竜の上鱗', quantity: 6 },
            { name: '火竜の翼', quantity: 2 },
          ],
        },
        {
          name: 'ブルーウィング',
          materials: [
            { name: '竜玉', quantity: 1 },
            { name: '蒼火竜の上鱗', quantity: 6 },
            { name: '蒼火竜の堅殻', quantity: 4 },
            { name: '蒼火竜の翼', quantity: 3 },
          ],
        },
        {
          name: '煌剣リオレウス',
          materials: [
            { name: '炎王龍の尖角', quantity: 2 },
            { name: '火竜の紅玉', quantity: 1 },
            { name: '蒼火竜の上鱗', quantity: 8 },
            { name: '蒼火竜の尻尾', quantity: 3 },
          ],
        },
        {
          name: '煌剣リオレウス改',
          materials: [
            { name: '火竜の厚鱗', quantity: 6 },
            { name: '火竜の剛翼', quantity: 2 },
            { name: '火竜の剛翼爪', quantity: 4 },
            { name: '火竜の重殻', quantity: 4 },
          ],
        },
        {
          name: '輝剣リオレウス',
          materials: [
            { name: '銀火竜の重殻', quantity: 4 },
            { name: '銀火竜の厚鱗', quantity: 8 },
            { name: '火竜の煌液', quantity: 2 },
            { name: '銀火竜の靭尾', quantity: 3 },
          ],
        },
      ],
    },
    {
      name: '骨素材系',
      weapons: [
        {
          name: 'ボーンブレイドⅠ',
          materials: [{ name: '竜骨【小】', quantity: 1 }],
        },
        {
          name: 'ボーンブレイドⅡ',
          materials: [{ name: '竜骨【小】', quantity: 2 }],
        },
        {
          name: 'ボーンブレイドⅢ',
          materials: [
            { name: '太古の大骨', quantity: 1 },
            { name: '竜骨【中】', quantity: 2 },
          ],
        },
        {
          name: 'ボーンスラッシャーⅠ',
          materials: [
            { name: '強固な岩骨', quantity: 2 },
            { name: '竜骨【大】', quantity: 1 },
            { name: '竜骨【中】', quantity: 5 },
          ],
        },
        {
          name: 'ボーンスラッシャーⅡ',
          materials: [
            { name: '竜骨【大】', quantity: 1 },
            { name: '頑丈な骨', quantity: 4 },
            { name: '上竜骨', quantity: 2 },
          ],
        },
        {
          name: 'ボーンスラッシャーⅢ',
          materials: [
            { name: '上竜骨', quantity: 2 },
            { name: '尖竜骨', quantity: 2 },
            { name: '上質な堅骨', quantity: 2 },
          ],
        },
        {
          name: 'オオアギトⅠ',
          materials: [
            { name: '堅竜骨', quantity: 4 },
            { name: '尖竜骨', quantity: 6 },
            { name: '上質な堅骨', quantity: 10 },
          ],
        },
        {
          name: 'オオアギトⅡ',
          materials: [
            { name: '堅竜骨', quantity: 6 },
            { name: '古龍骨', quantity: 4 },
            { name: '上質な堅骨', quantity: 20 },
            { name: 'いにしえの龍骨', quantity: 1 },
          ],
        },
        {
          name: '大鬼のアギトⅠ',
          materials: [
            { name: '堅竜骨', quantity: 4 },
            { name: '上質な堅骨', quantity: 4 },
            { name: '頑強な重骨', quantity: 2 },
            { name: '凍てついた氷骨', quantity: 1 },
          ],
        },
        {
          name: '大鬼のアギトⅡ',
          materials: [
            { name: '頑強な重骨', quantity: 4 },
            { name: 'モンスターの特濃', quantity: 2 },
            { name: '剛竜骨', quantity: 2 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: '大鬼のアギトⅢ',
          materials: [
            { name: '頑強な重骨', quantity: 4 },
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '剛竜骨', quantity: 4 },
          ],
        },
        {
          name: 'アイスウィング',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '氷晶の厚龍鱗', quantity: 4 },
            { name: '冰龍の剛爪', quantity: 2 },
            { name: '冰龍の靭尾', quantity: 2 },
          ],
        },
        {
          name: '氷翼セラフィード',
          materials: [
            { name: '冰龍の冠角', quantity: 4 },
            { name: '冰龍の剛爪', quantity: 4 },
            { name: '冰龍の零玉', quantity: 1 },
            { name: '地啼竜の慈爪', quantity: 3 },
          ],
        },
        {
          name: 'ティガノアギト',
          materials: [
            { name: '頑強な重骨', quantity: 5 },
            { name: '轟竜の厚鱗', quantity: 4 },
            { name: '轟竜の剛爪', quantity: 3 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: 'ティガノアギト改',
          materials: [
            { name: '轟竜の重牙', quantity: 3 },
            { name: '轟竜の靭尾', quantity: 2 },
            { name: '轟竜の天鱗', quantity: 1 },
            { name: '堅牢な黒巻き角', quantity: 1 },
          ],
        },
        {
          name: '轟大剣【王虎】',
          materials: [
            { name: '古龍の浄血', quantity: 5 },
            { name: '轟竜の重牙', quantity: 2 },
            { name: '轟竜の重殻', quantity: 4 },
            { name: '鋼龍の剛爪', quantity: 2 },
          ],
        },
        {
          name: 'カーサスブレイド',
          materials: [
            { name: '大竜玉', quantity: 1 },
            { name: '黒轟竜の厚鱗', quantity: 5 },
            { name: '黒轟竜の重牙', quantity: 2 },
            { name: '黒轟竜の剛爪', quantity: 3 },
          ],
        },
        {
          name: '吼大剣【荒咬】',
          materials: [
            { name: '轟竜の天鱗', quantity: 1 },
            { name: '黒轟竜の重牙', quantity: 3 },
            { name: '黒轟竜の剛爪', quantity: 4 },
            { name: '歴戦の黒アギト', quantity: 5 },
          ],
        },
        {
          name: 'ハザクラキス',
          materials: [
            { name: '死屍の龍鱗', quantity: 6 },
            { name: '屍套龍の尖爪', quantity: 4 },
            { name: '屍套龍の鋭牙', quantity: 5 },
            { name: '屍套龍の被膜', quantity: 4 },
          ],
        },
        {
          name: 'モンストロの憤怒',
          materials: [
            { name: '冥灯龍の幽幕', quantity: 3 },
            { name: '屍套龍の尖爪', quantity: 6 },
            { name: '屍套龍の尻尾', quantity: 2 },
            { name: '屍套龍の宝玉', quantity: 1 },
          ],
        },
        {
          name: 'モンストロの狂気',
          materials: [
            { name: '屍套龍の剛爪', quantity: 3 },
            { name: '闇を食む牙', quantity: 2 },
            { name: '死屍の厚龍鱗', quantity: 5 },
            { name: '死屍を紡いだ被膜', quantity: 3 },
          ],
        },
        {
          name: 'ドネス＝モンストロ',
          materials: [
            { name: '屍套龍の剛爪', quantity: 5 },
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '屍套龍の重尾', quantity: 2 },
            { name: '地啼竜の慈爪', quantity: 2 },
          ],
        },
        {
          name: 'フラムエルへレヴ改',
          materials: [
            { name: '蛮顎竜の逆鱗', quantity: 1 },
            { name: '爆炎袋', quantity: 3 },
            { name: '蛮顎竜の上鱗', quantity: 5 },
            { name: '蛮顎竜の鋭牙', quantity: 4 },
          ],
        },
        {
          name: '蛮顎大剣フラムへレヴ',
          materials: [
            { name: '蛮顎竜の上毛皮', quantity: 4 },
            { name: '蛮顎竜の大鼻骨', quantity: 2 },
            { name: '蛮顎竜の宝玉', quantity: 1 },
            { name: '屍套龍の鋭牙', quantity: 5 },
          ],
        },
        {
          name: '蛮顎大剣フラムへレヴ改',
          materials: [
            { name: 'エルトライト鉱石', quantity: 3 },
            { name: '蛮顎竜の重牙', quantity: 1 },
            { name: '蛮顎竜の厚鱗', quantity: 2 },
            { name: '業炎袋', quantity: 1 },
          ],
        },
        {
          name: '蛮炎大剣ロギンヘレヴ',
          materials: [
            { name: '蛮顎竜の重鼻骨', quantity: 2 },
            { name: '蒼火竜の重殻', quantity: 2 },
            { name: '蛮顎竜の厚毛皮', quantity: 3 },
            { name: '蛮顎竜の靭尾', quantity: 1 },
          ],
        },
        {
          name: '雷顎大剣ドネルへレヴ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 2 },
            { name: '剛竜骨', quantity: 3 },
            { name: '雷顎竜の厚鱗', quantity: 2 },
            { name: '雷顎竜の重牙', quantity: 1 },
          ],
        },
        {
          name: '雷顎大剣ドネルへレヴ改',
          materials: [
            { name: '雷顎竜の厚毛皮', quantity: 3 },
            { name: '雷顎竜の重鼻骨', quantity: 2 },
            { name: '雷顎竜の靭尾', quantity: 1 },
            { name: '雷電袋', quantity: 3 },
          ],
        },
        {
          name: '蛮雷大剣カーリへレヴ',
          materials: [
            { name: '雷顎竜の厚毛皮', quantity: 5 },
            { name: '雷顎竜の重牙', quantity: 3 },
            { name: '雷顎竜の天鱗', quantity: 1 },
            { name: '幻獣の銀たてがみ', quantity: 2 },
          ],
        },
        {
          name: 'アクアスラッシャーⅠ',
          materials: [
            { name: '強固な岩骨', quantity: 2 },
            { name: '泥魚竜の鱗', quantity: 3 },
            { name: '泥魚竜の甲殻', quantity: 1 },
            { name: '水袋', quantity: 1 },
          ],
        },
        {
          name: 'アクアスラッシャーⅡ',
          materials: [
            { name: '咬魚の皮', quantity: 3 },
            { name: '泥魚竜の牙', quantity: 2 },
            { name: '泥魚竜のヒレ', quantity: 3 },
            { name: '頑丈な骨', quantity: 5 },
          ],
        },
        {
          name: 'アクアスラッシャーⅢ',
          materials: [
            { name: '咬魚のヒゲ', quantity: 3 },
            { name: '泥魚竜の牙', quantity: 4 },
            { name: '上竜骨', quantity: 2 },
          ],
        },
        {
          name: 'ウォーターゴーレムⅠ',
          materials: [
            { name: '泥魚竜の上鱗', quantity: 3 },
            { name: '泥魚竜の堅殻', quantity: 2 },
            { name: '咬魚の上皮', quantity: 5 },
            { name: '上質な堅骨', quantity: 5 },
          ],
        },
        {
          name: 'ウォーターゴーレムⅡ',
          materials: [
            { name: '堅竜骨', quantity: 3 },
            { name: '泥魚竜の上ヒレ', quantity: 4 },
            { name: '大水袋', quantity: 3 },
            { name: '咬魚の大ヒゲ', quantity: 3 },
          ],
        },
        {
          name: 'ウォーターゴーレムⅢ',
          materials: [
            { name: '古龍骨', quantity: 4 },
            { name: '竜玉', quantity: 1 },
            { name: '泥魚竜の上ヒレ', quantity: 6 },
            { name: '泥魚竜の鋭牙', quantity: 5 },
          ],
        },
        {
          name: 'ウォーターゴーレムⅣ',
          materials: [
            { name: '咬魚の厚皮', quantity: 2 },
            { name: '泥魚竜の厚鱗', quantity: 3 },
            { name: '泥魚竜の重牙', quantity: 1 },
            { name: '泥魚竜の特上ヒレ', quantity: 1 },
          ],
        },
        {
          name: 'ラグーナゴーレムⅠ',
          materials: [
            { name: '水妖鳥の剛翼', quantity: 2 },
            { name: '水妖鳥の厚鱗', quantity: 3 },
            { name: 'デプスライト鉱石', quantity: 2 },
            { name: '特大水袋', quantity: 2 },
          ],
        },
        {
          name: 'ラグーナゴーレムⅡ',
          materials: [
            { name: '剛竜骨', quantity: 3 },
            { name: '水妖鳥の靭尾', quantity: 1 },
            { name: '水妖鳥の特大喉袋', quantity: 1 },
            { name: '硫斬竜の重牙', quantity: 2 },
          ],
        },
        {
          name: 'ブランスラッシャーⅠ',
          materials: [
            { name: '凍てついた氷骨', quantity: 1 },
            { name: '凍魚竜の厚鱗', quantity: 3 },
            { name: '凍魚竜の剛角', quantity: 1 },
            { name: '凍魚竜の特上ヒレ', quantity: 1 },
          ],
        },
        {
          name: 'ブランスラッシャーⅡ',
          materials: [
            { name: '凍魚竜の特上ヒレ', quantity: 2 },
            { name: '瞬間凍結袋', quantity: 2 },
            { name: '大竜玉', quantity: 1 },
            { name: '氷霜をまとう皮', quantity: 2 },
          ],
        },
        {
          name: 'ドラグロバスターⅠ',
          materials: [
            { name: '土砂竜の甲殻', quantity: 3 },
            { name: '土砂竜の爪', quantity: 1 },
            { name: '土砂竜の背甲', quantity: 2 },
          ],
        },
        {
          name: 'ドラグロバスターⅡ',
          materials: [
            { name: 'ケストドンの甲殻', quantity: 3 },
            { name: '土砂竜の尻尾', quantity: 1 },
            { name: '土砂竜の爪', quantity: 2 },
            { name: 'ドラグライト鉱石', quantity: 3 },
          ],
        },
        {
          name: 'ドラグロバスターⅢ',
          materials: [
            { name: '土砂竜の爪', quantity: 4 },
            { name: '土砂竜の頭殻', quantity: 2 },
            { name: '角竜の甲殻', quantity: 3 },
            { name: '上竜骨', quantity: 3 },
          ],
        },
        {
          name: 'ボルボギガンテⅠ',
          materials: [
            { name: 'ケストドンの重殻', quantity: 2 },
            { name: '土砂竜の剛爪', quantity: 1 },
            { name: '土砂竜の重殻', quantity: 2 },
            { name: '土砂竜の重甲', quantity: 2 },
          ],
        },
        {
          name: 'ボルボギガンテⅡ',
          materials: [
            { name: '角竜の重殻', quantity: 2 },
            { name: '重竜骨', quantity: 3 },
            { name: '土砂竜の剛爪', quantity: 2 },
            { name: '土砂竜の重頭殻', quantity: 1 },
          ],
        },
        {
          name: 'ザルファシュレッダーⅠ',
          materials: [
            { name: '削られた硫晶片', quantity: 4 },
            { name: '硫斬竜の剣山状殻', quantity: 2 },
            { name: '硫斬竜の重牙', quantity: 2 },
            { name: '硫斬竜の断剣尾', quantity: 2 },
          ],
        },
        {
          name: 'ザルファシュレッダーⅡ',
          materials: [
            { name: '斬竜の天鱗', quantity: 1 },
            { name: '硫斬竜の剣山状殻', quantity: 3 },
            { name: '硫斬竜の重牙', quantity: 4 },
            { name: '屍套龍の剛爪', quantity: 2 },
          ],
        },
        {
          name: 'スパイクブレイドⅠ',
          materials: [
            { name: '骨鎚竜の鱗', quantity: 4 },
            { name: '睡眠袋', quantity: 2 },
            { name: '竜骨塊', quantity: 2 },
          ],
        },
        {
          name: 'スパイクブレイドⅡ',
          materials: [
            { name: '上竜骨', quantity: 3 },
            { name: '骨鎚竜の黒油殻', quantity: 2 },
            { name: '骨鎚竜の骨髄', quantity: 1 },
            { name: '竜骨塊', quantity: 3 },
          ],
        },
        {
          name: '削岩剣ラドバルキンⅠ',
          materials: [
            { name: '強竜骨', quantity: 3 },
            { name: '骨鎚竜の厚鱗', quantity: 2 },
            { name: '骨鎚竜の重殻', quantity: 2 },
            { name: '卒倒昏睡袋', quantity: 1 },
          ],
        },
        {
          name: '削岩剣ラドバルキンⅡ',
          materials: [
            { name: '頑強な重骨', quantity: 5 },
            { name: '剛竜骨', quantity: 3 },
            { name: '骨鎚竜の重油殻', quantity: 2 },
            { name: '大竜骨塊', quantity: 3 },
          ],
        },
        {
          name: 'ディオスブレイド',
          materials: [
            { name: 'メランジェ鉱石', quantity: 3 },
            { name: '砕竜の重殻', quantity: 4 },
            { name: '砕竜の重頭殻', quantity: 2 },
            { name: '光る粘菌', quantity: 3 },
          ],
        },
        {
          name: '爆大剣ブリーブレイド',
          materials: [
            { name: '砕竜の重黒曜甲', quantity: 4 },
            { name: '砕竜の重頭殻', quantity: 3 },
            { name: '砕竜の天殻', quantity: 1 },
            { name: '凝縮された爆腺液', quantity: 3 },
          ],
        },
      ],
    },
    {
      name: '龍骨系系',
      weapons: [
        {
          name: '龍骨大剣Ⅰ',
          materials: [
            { name: 'いびつな狂骨', quantity: 5 },
            { name: '強固な岩骨', quantity: 5 },
            { name: '太古の大骨', quantity: 5 },
            { name: 'サンゴの紅骨', quantity: 5 },
          ],
        },
        {
          name: '龍骨大剣Ⅱ',
          materials: [
            { name: '竜骨【大】', quantity: 8 },
            { name: '頑丈な骨', quantity: 8 },
            { name: '上竜骨', quantity: 6 },
          ],
        },
        {
          name: '龍骨大剣Ⅲ',
          materials: [
            { name: '古龍骨', quantity: 10 },
            { name: '竜玉', quantity: 1 },
            { name: 'いにしえの龍骨', quantity: 21 },
            { name: '荒々しい蛮骨', quantity: 4 },
          ],
        },
        {
          name: '龍封じの大剣Ⅰ',
          materials: [
            { name: '頑強な重骨', quantity: 6 },
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '剛竜骨', quantity: 3 },
            { name: '重竜骨', quantity: 4 },
          ],
        },
        {
          name: '龍封じの大剣Ⅱ',
          materials: [
            { name: '剛竜骨', quantity: 4 },
            { name: '太古龍骨', quantity: 6 },
            { name: '大竜玉', quantity: 1 },
            { name: '溶岩竜の特上ヒレ', quantity: 2 },
          ],
        },
        {
          name: '無相法身ー不動ー',
          materials: [
            { name: '地啼竜の慈鱗', quantity: 6 },
            { name: '地啼竜の慈眼殻', quantity: 2 },
            { name: '地啼竜の慈爪', quantity: 4 },
            { name: '地啼竜の顕玉', quantity: 1 },
          ],
        },
        {
          name: '召雷剣',
          materials: [
            { name: 'ライトクリスタル', quantity: 1 },
            { name: '幻獣の雷角', quantity: 3 },
            { name: '幻獣の皮', quantity: 3 },
            { name: '幻獣の尾', quantity: 1 },
          ],
        },
        {
          name: '召雷剣【麒麟】',
          materials: [
            { name: '幻獣のたてがみ', quantity: 4 },
            { name: '龍脈の結晶', quantity: 5 },
            { name: '幻獣の上皮', quantity: 5 },
            { name: '幻獣の蒼角', quantity: 4 },
          ],
        },
        {
          name: '召雷剣【麒麟王】',
          materials: [
            { name: 'ノヴァクリスタル', quantity: 2 },
            { name: '冥灯龍の白殻', quantity: 4 },
            { name: '幻獣の雷尾', quantity: 3 },
            { name: '幻獣の蒼角', quantity: 5 },
          ],
        },
        {
          name: '召雷剣【麒麟帝】',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '幻獣の銀たてがみ', quantity: 3 },
            { name: '幻獣の特上皮', quantity: 4 },
            { name: '幻獣の剛蒼角', quantity: 3 },
          ],
        },
        {
          name: 'マグダ・ポテスタスⅠ',
          materials: [
            { name: '熔山龍の熱鱗', quantity: 4 },
            { name: '熔山龍のマグマ', quantity: 4 },
            { name: '熔山龍の岩殻', quantity: 8 },
            { name: '熔山龍の宝玉', quantity: 1 },
          ],
        },
        {
          name: 'マグダ・ポテスタスⅡ',
          materials: [
            { name: '獄炎石', quantity: 3 },
            { name: '熔山龍の背甲', quantity: 2 },
            { name: '熔山龍の胸殻', quantity: 2 },
            { name: '冥灯龍の白殻', quantity: 4 },
          ],
        },
        {
          name: '熔山剣マグダポテス',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '龍脈の重竜骨', quantity: 6 },
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
          name: '黒鋼の大剣Ⅰ',
          materials: [
            { name: '大地の結晶', quantity: 10 },
            { name: 'ライトクリスタル', quantity: 1 },
            { name: '深海の結晶', quantity: 10 },
            { name: '龍脈の結晶', quantity: 10 },
          ],
        },
        {
          name: '黒鋼の大剣Ⅱ',
          materials: [
            { name: '獄炎石', quantity: 1 },
            { name: '竜玉', quantity: 1 },
            { name: 'カブレライト鉱石', quantity: 10 },
            { name: 'ユニオン鉱石', quantity: 5 },
          ],
        },
        {
          name: '鋼氷大剣',
          materials: [
            { name: '鋼龍の堅殻', quantity: 5 },
            { name: '鋼龍の尻尾', quantity: 2 },
            { name: '鋼龍の尖爪', quantity: 3 },
            { name: '鋼龍の翼', quantity: 4 },
          ],
        },
        {
          name: 'ダオラ＝デグニダル',
          materials: [
            { name: '鋼龍の尖角', quantity: 5 },
            { name: '鋼龍の宝玉', quantity: 1 },
            { name: '冥灯龍の幽翼', quantity: 2 },
            { name: '鋼龍の尖爪', quantity: 4 },
          ],
        },
        {
          name: 'ダオラ＝ディグリベグ',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '鋼の厚龍鱗', quantity: 5 },
            { name: '鋼龍の剛爪', quantity: 4 },
            { name: '鋼龍の剛角', quantity: 5 },
          ],
        },
        {
          name: 'ゼノ＝マーリク',
          materials: [
            { name: '冥灯龍の白殻', quantity: 6 },
            { name: '冥灯龍の幽爪', quantity: 4 },
            { name: '冥灯龍の幽玉', quantity: 1 },
            { name: '冥灯龍の尻尾', quantity: 2 },
          ],
        },
        {
          name: 'ゼノ＝マーリク改',
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
      name: 'リュウノアギト系',
      weapons: [
        {
          name: 'リュウノアギト',
          materials: [
            { name: 'ノヴァクリスタル', quantity: 1 },
            { name: '狩猟王のコイン', quantity: 5 },
            { name: 'ボロスコイン', quantity: 4 },
            { name: 'レウスコイン', quantity: 4 },
          ],
        },
        {
          name: 'リュウノアギト【大牙】',
          materials: [
            { name: '竜玉', quantity: 2 },
            { name: '撃龍王のコイン', quantity: 5 },
            { name: '飛竜コイン', quantity: 4 },
            { name: '獣竜コイン', quantity: 4 },
          ],
        },
        {
          name: 'リュウノアギト【絶牙】',
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
          name: 'ベルセルクソード',
          materials: [
            { name: '恐暴竜の黒鱗', quantity: 6 },
            { name: '恐暴竜の大牙', quantity: 3 },
            { name: '恐暴竜の鉤爪', quantity: 2 },
            { name: '恐暴竜の唾液', quantity: 2 },
          ],
        },
        {
          name: 'アングイッシュ',
          materials: [
            { name: '恐暴竜の大牙', quantity: 5 },
            { name: '恐暴竜の頭殻', quantity: 2 },
            { name: '恐暴竜の宝玉', quantity: 1 },
            { name: '古龍の血', quantity: 5 },
          ],
        },
        {
          name: '業剣グルンディング',
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
      name: '竜熱機関系',
      weapons: [
        {
          name: '竜熱機関式【鋼翼】',
          materials: [
            { name: '火竜の骨髄', quantity: 2 },
            { name: 'ドラグライト鉱石', quantity: 7 },
            { name: '浮空竜の翼膜', quantity: 2 },
            { name: '名匠の設計図', quantity: 2 },
          ],
        },
        {
          name: '竜熱機関式【鋼翼】改',
          materials: [
            { name: '古龍の血', quantity: 2 },
            { name: '獄炎石', quantity: 5 },
            { name: '竜玉', quantity: 1 },
            { name: '名匠の設計図', quantity: 3 },
          ],
        },
        {
          name: '爆熱機関式【銀翼】',
          materials: [
            { name: '天を焦がす銀翼', quantity: 3 },
            { name: '爆鱗竜の天鱗', quantity: 1 },
            { name: '爆鱗竜の厚鱗', quantity: 4 },
            { name: '黒鷲の図面', quantity: 2 },
          ],
        },
      ],
    },
    {
      name: '炎妃龍系',
      weapons: [
        {
          name: 'エンプレスガレア',
          materials: [
            { name: '炎妃龍のたてがみ', quantity: 3 },
            { name: '炎妃龍の宝玉', quantity: 1 },
            { name: '炎妃龍の尖角', quantity: 3 },
            { name: '炎妃龍の上鱗', quantity: 4 },
          ],
        },
        {
          name: 'エンプレスガレア・冥灯',
          materials: [
            { name: '冥灯龍の幽角', quantity: 3 },
            { name: '冥灯龍の幽玉', quantity: 1 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の尻尾', quantity: 2 },
          ],
        },
        {
          name: 'エンプレスガレア・滅尽',
          materials: [
            { name: '滅尽龍の宝玉', quantity: 1 },
            { name: '滅尽龍の大角', quantity: 3 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の翼', quantity: 3 },
          ],
        },
        {
          name: 'エンプレスガレア・炎妃',
          materials: [
            { name: '炎王龍の尖角', quantity: 3 },
            { name: '爆鱗竜の宝玉', quantity: 1 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の尖角', quantity: 2 },
          ],
        },
        {
          name: '魂焔の剛剣・炎妃',
          materials: [
            { name: '古龍の大宝玉', quantity: 4 },
            { name: '炎妃龍の厚鱗', quantity: 3 },
            { name: '炎妃龍の剛角', quantity: 2 },
            { name: '炎妃龍の大たてがみ', quantity: 1 },
          ],
        },
        {
          name: '魂焔の剛剣・滅尽',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '殲滅の大剛角', quantity: 3 },
            { name: '無窮の新生殻', quantity: 3 },
            { name: '炎妃龍の厚鱗', quantity: 4 },
          ],
        },
        {
          name: '魂焔の剛剣・冥灯',
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
      name: 'レイトウマグロ系',
      weapons: [
        {
          name: 'レイトウマグロ',
          materials: [
            { name: 'グラシスメタル', quantity: 2 },
            { name: '強竜骨', quantity: 3 },
            { name: '瞬間凍結袋', quantity: 3 },
            { name: 'レイトウチケット', quantity: 1 },
          ],
        },
        {
          name: 'レイトウ本マグロ',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '重竜骨', quantity: 5 },
            { name: '瞬間凍結袋', quantity: 4 },
            { name: 'レイトウチケット', quantity: 2 },
          ],
        },
        {
          name: '瞬間レイトウ本マグロ',
          materials: [
            { name: '剛竜骨', quantity: 6 },
            { name: '瞬間凍結袋', quantity: 5 },
            { name: '覇王の証', quantity: 2 },
            { name: 'レイトウチケット', quantity: 2 },
          ],
        },
      ],
    },
    {
      name: '金獅子系',
      weapons: [
        {
          name: '鬼金棒',
          materials: [
            { name: '金獅子の重牙', quantity: 2 },
            { name: '金獅子の剛爪', quantity: 1 },
            { name: '金獅子の剛角', quantity: 1 },
            { name: '金獅子の黒荒毛', quantity: 2 },
          ],
        },
        {
          name: '大鬼金棒',
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
          name: '鬼神金棒【猿魔王】',
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
          name: '獄界の断罪斧',
          materials: [
            { name: '獄狼竜の滅龍毛', quantity: 2 },
            { name: '獄狼竜の滅龍殻', quantity: 2 },
            { name: '獄狼竜の剛角', quantity: 1 },
            { name: '獄狼竜の剛爪', quantity: 1 },
          ],
        },
        {
          name: '獄界の断罪斧改',
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
      name: '臨海ブラキ',
      weapons: [
        {
          name: '砕光の撃剣',
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
          name: '煌黒の大剣',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '煌黒龍の凶爪', quantity: 3 },
            { name: '天を統べる角', quantity: 1 },
            { name: '煌黒龍の天鱗', quantity: 3 },
          ],
        },
        {
          name: '煌黒大剣アルレボ',
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
          name: 'ミラブレイド',
          materials: [
            { name: '黒龍の厚鱗', quantity: 3 },
            { name: '黒龍の重胸殻', quantity: 1 },
            { name: '黒龍の剛角', quantity: 1 },
            { name: '黒龍の邪眼', quantity: 1 },
          ],
        },
        {
          name: 'ブラックミラブレイド',
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
          name: 'ギルドパレスプレート',
          materials: [
            { name: 'グラシスメタル', quantity: 5 },
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '琥珀色の重牙', quantity: 2 },
            { name: '祭典チケット', quantity: 2 },
          ],
        },
        {
          name: '宮廷王剣【金星】',
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
