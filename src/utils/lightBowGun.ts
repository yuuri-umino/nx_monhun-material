import { WeaponType } from './materialsTypes'

const greatsword: WeaponType = {
  type: 'ライトボウガン',
  derivations: [
    {
      name: '防衛隊系',
      weapons: [
        {
          name: '防衛隊連装式軽弩Ⅰ',
          materials: [{ name: '鉄鉱石', quantity: 1 }],
        },
        {
          name: '防衛隊連装式軽弩Ⅱ',
          materials: [{ name: '蛮顎竜の鱗', quantity: 1 }],
        },
        {
          name: '防衛隊連装式軽弩Ⅲ',
          materials: [{ name: '勇気の証', quantity: 1 }],
        },
        {
          name: '防衛隊連装式軽弩Ⅳ',
          materials: [{ name: '桜火竜の上鱗', quantity: 1 }],
        },
        {
          name: '防衛隊連装式軽弩Ⅴ',
          materials: [{ name: '不滅の龍鱗', quantity: 1 }],
        },
      ],
    },
    {
      name: '鉱石素材系',
      weapons: [
        {
          name: 'チェーンブリッツⅠ',
          materials: [{ name: '鉄鉱石', quantity: 1 }],
        },
        {
          name: 'チェーンブリッツⅡ',
          materials: [{ name: '鉄鉱石', quantity: 2 }],
        },
        {
          name: 'チェーンブリッツⅢ',
          materials: [
            { name: '大地の結晶', quantity: 2 },
            { name: '鉄鉱石', quantity: 5 },
            { name: 'マカライト鉱石', quantity: 2 },
          ],
        },
        {
          name: 'ハイチェーンブリッツⅠ',
          materials: [
            { name: 'マカライト鉱石', quantity: 5 },
            { name: '竜骨【中】', quantity: 2 },
            { name: 'ドラグライト鉱石', quantity: 2 },
          ],
        },
        {
          name: 'ハイチェーンブリッツⅡ',
          materials: [
            { name: 'マカライト鉱石', quantity: 10 },
            { name: 'ドラグライト鉱石', quantity: 5 },
            { name: '上竜骨', quantity: 2 },
            { name: '深海の結晶', quantity: 2 },
          ],
        },
        {
          name: 'ハイチェーンブリッツⅢ',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 5 },
            { name: 'カブレライト鉱石', quantity: 8 },
            { name: '龍脈の結晶', quantity: 2 },
          ],
        },
        {
          name: 'クロスブリッツⅠ',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 10 },
            { name: 'カブレライト鉱石', quantity: 5 },
            { name: '龍脈の結晶', quantity: 3 },
            { name: 'ユニオン鉱石', quantity: 8 },
          ],
        },
        {
          name: 'クロスブリッツⅡ',
          materials: [
            { name: '古龍の血', quantity: 2 },
            { name: '獄炎石', quantity: 1 },
            { name: 'カブレライト鉱石', quantity: 20 },
            { name: 'ユニオン鉱石', quantity: 13 },
          ],
        },
        {
          name: 'クロスブリッツァⅠ',
          materials: [
            { name: 'カブレライト鉱石', quantity: 4 },
            { name: '霊脈の結晶', quantity: 2 },
            { name: 'グラシスメタル', quantity: 1 },
            { name: 'エルトライト鉱石', quantity: 2 },
          ],
        },
        {
          name: 'クロスブリッツァⅡ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 2 },
            { name: 'エルトライト鉱石', quantity: 4 },
            { name: '重竜骨', quantity: 3 },
            { name: 'デプスライト鉱石', quantity: 2 },
          ],
        },
        {
          name: 'クロスブリッツァⅢ',
          materials: [
            { name: '古龍の浄血', quantity: 3 },
            { name: 'メランジェ鉱石', quantity: 3 },
            { name: 'エルトライト鉱石', quantity: 6 },
            { name: 'ピュアクリスタル', quantity: 1 },
          ],
        },
        {
          name: '黒羽の弩Ⅰ',
          materials: [
            { name: '幻鳥竜玉', quantity: 1 },
            { name: '黒狼鳥の銀狼毛', quantity: 1 },
            { name: '黒狼鳥の厚鱗', quantity: 1 },
            { name: '黒狼鳥の地獄耳', quantity: 1 },
          ],
        },
        {
          name: '黒羽の弩Ⅱ',
          materials: [
            { name: '大竜玉', quantity: 1 },
            { name: 'イカしたクチバシ', quantity: 3 },
            { name: '黒狼鳥の剛翼', quantity: 2 },
            { name: '傷痕の紫甲殻', quantity: 3 },
          ],
        },
        {
          name: 'ネルガルツィエル',
          materials: [
            { name: '滅尽龍の再生殻', quantity: 4 },
            { name: '滅尽龍の尻尾', quantity: 2 },
            { name: '滅尽龍の堅殻', quantity: 2 },
            { name: '滅尽龍の尖爪', quantity: 3 },
          ],
        },
        {
          name: '破滅の引金',
          materials: [
            { name: '滅尽龍の宝玉', quantity: 1 },
            { name: '滅尽龍の尖爪', quantity: 5 },
            { name: '滅尽龍の大角', quantity: 5 },
            { name: '冥灯龍の幽角', quantity: 2 },
          ],
        },
        {
          name: '破滅の引金【悲】',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '殲滅の大剛角', quantity: 3 },
            { name: '無窮の新生殻', quantity: 5 },
            { name: '滅尽龍の剛爪', quantity: 4 },
          ],
        },
        {
          name: 'ウルムーブリッツⅠ',
          materials: [
            { name: '浮空竜の毛皮', quantity: 2 },
            { name: '浮空竜の鱗', quantity: 3 },
            { name: 'ゴム質の甲殻', quantity: 1 },
          ],
        },
        {
          name: 'ウルムーブリッツⅡ',
          materials: [
            { name: '角竜の甲殻', quantity: 3 },
            { name: '浮空竜の翼膜', quantity: 2 },
            { name: 'ゴム質の甲殻', quantity: 3 },
            { name: 'シャムオスの鱗', quantity: 5 },
          ],
        },
        {
          name: 'ウルムーティフォンⅠ',
          materials: [
            { name: '浮空竜の上毛皮', quantity: 4 },
            { name: '浮空竜の上鱗', quantity: 5 },
            { name: 'シャムオスの上鱗', quantity: 5 },
            { name: 'ゴム質の堅殻', quantity: 3 },
          ],
        },
        {
          name: 'ウルムーティフォンⅡ',
          materials: [
            { name: '角竜の延髄', quantity: 2 },
            { name: '浮空竜の翼', quantity: 3 },
            { name: 'ゴム質の堅殻', quantity: 4 },
            { name: 'ノヴァクリスタル', quantity: 1 },
          ],
        },
        {
          name: 'ウルムーティフォンⅢ',
          materials: [
            { name: '古龍骨', quantity: 3 },
            { name: '竜玉', quantity: 1 },
            { name: '浮空竜の上鱗', quantity: 7 },
            { name: 'ゴム質の堅殻', quantity: 5 },
          ],
        },
        {
          name: 'ウルムーティフォンⅣ',
          materials: [
            { name: 'ゴム質の重殻', quantity: 1 },
            { name: 'シャムオスの厚鱗', quantity: 2 },
            { name: '浮空竜の厚毛皮', quantity: 3 },
            { name: '浮空竜の剛翼', quantity: 1 },
          ],
        },
        {
          name: 'ナイトメアシードⅠ',
          materials: [
            { name: 'ゴム質の重殻', quantity: 2 },
            { name: '卒倒昏睡袋', quantity: 1 },
            { name: '浮眠竜の厚毛皮', quantity: 3 },
            { name: '浮眠竜の剛翼', quantity: 2 },
          ],
        },
        {
          name: 'ナイトメアシードⅡ',
          materials: [
            { name: '黒角竜の堅甲', quantity: 2 },
            { name: '大竜玉', quantity: 1 },
            { name: '浮眠竜の剛翼', quantity: 3 },
            { name: '浮眠竜の厚鱗', quantity: 5 },
          ],
        },
        {
          name: 'ディノブリッツ',
          materials: [
            { name: 'エルトライト鉱石', quantity: 6 },
            { name: '斬竜の厚鱗', quantity: 4 },
            { name: '斬竜の重牙', quantity: 2 },
            { name: '赤熱した溶炉嚢', quantity: 2 },
          ],
        },
        {
          name: 'ザルファブリッツⅠ',
          materials: [
            { name: '削られた硫晶片', quantity: 4 },
            { name: '硫斬竜の剣山状殻', quantity: 3 },
            { name: '硫斬竜の重牙', quantity: 3 },
            { name: '硫斬竜の断剣尾', quantity: 1 },
          ],
        },
        {
          name: 'ザルファブリッツⅡ',
          materials: [
            { name: '斬竜の天鱗', quantity: 1 },
            { name: '硫斬竜の剣山状殻', quantity: 3 },
            { name: '硫斬竜の重牙', quantity: 4 },
            { name: '屍套龍の剛爪', quantity: 2 },
          ],
        },
        {
          name: 'バゼルタイフーンⅠ',
          materials: [
            { name: '獄炎石', quantity: 1 },
            { name: '爆鱗竜の尖爪', quantity: 3 },
            { name: '爆鱗竜の上鱗', quantity: 5 },
            { name: '爆鱗竜の爆腺', quantity: 4 },
          ],
        },
        {
          name: 'バゼルタイフーンⅡ',
          materials: [
            { name: '炎龍の塵粉', quantity: 3 },
            { name: '爆鱗竜の尖爪', quantity: 4 },
            { name: '爆鱗竜の翼', quantity: 4 },
            { name: '爆鱗竜の宝玉', quantity: 1 },
          ],
        },
        {
          name: 'バゼルコア',
          materials: [
            { name: 'メランジェ鉱石', quantity: 5 },
            { name: '凝縮された爆腺液', quantity: 3 },
            { name: '爆鱗竜の厚鱗', quantity: 4 },
            { name: '爆鱗竜の剛爪', quantity: 3 },
          ],
        },
        {
          name: 'ジャグラスブリッツⅠ',
          materials: [
            { name: '賊竜の鱗', quantity: 3 },
            { name: '賊竜の皮', quantity: 1 },
            { name: '賊竜の爪', quantity: 1 },
            { name: 'とがった爪', quantity: 1 },
          ],
        },
        {
          name: 'ジャグラスブリッツⅡ',
          materials: [
            { name: '賊竜のたてがみ', quantity: 2 },
            { name: '賊竜の爪', quantity: 2 },
            { name: '眩鳥の爪', quantity: 3 },
            { name: 'サンゴの紅骨', quantity: 2 },
          ],
        },
        {
          name: 'ジャグラスブリッツⅢ',
          materials: [
            { name: '賊竜の鱗', quantity: 5 },
            { name: '賊竜のたてがみ', quantity: 3 },
            { name: '賊竜の爪', quantity: 3 },
            { name: '上竜骨', quantity: 3 },
          ],
        },
        {
          name: 'ジャグラスファイアⅠ',
          materials: [
            { name: '賊竜のたてがみ', quantity: 6 },
            { name: '賊竜の上鱗', quantity: 6 },
            { name: '賊竜の尖爪', quantity: 4 },
            { name: '鋭利な爪', quantity: 5 },
          ],
        },
        {
          name: 'ジャグラスファイアⅡ',
          materials: [
            { name: 'ジャグラスの上皮', quantity: 6 },
            { name: '堅竜骨', quantity: 4 },
            { name: '賊竜の尖爪', quantity: 6 },
            { name: '眩鳥の尖爪', quantity: 5 },
          ],
        },
        {
          name: 'ジャグラスファイアⅢ',
          materials: [
            { name: '賊竜の上皮', quantity: 6 },
            { name: '賊竜の尖爪', quantity: 8 },
            { name: 'ノヴァクリスタル', quantity: 1 },
            { name: '屍套龍の尖爪', quantity: 2 },
          ],
        },
        {
          name: '牙竜弩【風喰】Ⅰ',
          materials: [
            { name: 'ジャグラスの厚鱗', quantity: 2 },
            { name: '賊竜の大たてがみ', quantity: 2 },
            { name: '賊竜の剛爪', quantity: 1 },
            { name: '痺賊竜の厚鱗', quantity: 2 },
          ],
        },
        {
          name: '牙竜弩【風喰】Ⅱ',
          materials: [
            { name: '強靭な爪', quantity: 3 },
            { name: '重竜骨', quantity: 3 },
            { name: '賊竜の剛爪', quantity: 3 },
            { name: '痺賊竜の厚皮', quantity: 3 },
          ],
        },
        {
          name: 'レックスファイアⅠ',
          materials: [
            { name: '頑強な重骨', quantity: 5 },
            { name: '轟竜の厚鱗', quantity: 4 },
            { name: '轟竜の剛爪', quantity: 3 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: 'レックスファイアⅡ',
          materials: [
            { name: '轟竜の重牙', quantity: 4 },
            { name: '轟竜の靭尾', quantity: 1 },
            { name: '轟竜の天鱗', quantity: 1 },
            { name: '堅牢な黒巻き角', quantity: 2 },
          ],
        },
        {
          name: 'カーサスファイア',
          materials: [
            { name: '大竜玉', quantity: 1 },
            { name: '黒轟竜の厚鱗', quantity: 5 },
            { name: '黒轟竜の重牙', quantity: 2 },
            { name: '黒轟竜の剛爪', quantity: 3 },
          ],
        },
        {
          name: 'フレイムブリッツⅠ',
          materials: [
            { name: '火竜の骨髄', quantity: 1 },
            { name: '火竜の翼膜', quantity: 2 },
            { name: '火炎袋', quantity: 2 },
            { name: '火竜の鱗', quantity: 1 },
          ],
        },
        {
          name: 'フレイムブリッツⅡ',
          materials: [
            { name: '火竜の尻尾', quantity: 2 },
            { name: '火竜の逆鱗', quantity: 1 },
            { name: '火竜の鱗', quantity: 6 },
            { name: '爆炎袋', quantity: 3 },
          ],
        },
        {
          name: 'レウスバスターⅠ',
          materials: [
            { name: '火竜の延髄', quantity: 1 },
            { name: '火竜の堅殻', quantity: 4 },
            { name: '火竜の上鱗', quantity: 6 },
            { name: '火竜の翼', quantity: 2 },
          ],
        },
        {
          name: 'レウスバスターⅡ',
          materials: [
            { name: '火竜の紅玉', quantity: 1 },
            { name: '蒼火竜の上鱗', quantity: 6 },
            { name: '蒼火竜の堅殻', quantity: 4 },
            { name: '蒼火竜の翼', quantity: 3 },
          ],
        },
        {
          name: 'レウスバスターⅢ',
          materials: [
            { name: '火竜の厚鱗', quantity: 6 },
            { name: '火竜の剛翼', quantity: 2 },
            { name: '火竜の剛翼爪', quantity: 4 },
            { name: '火竜の重殻', quantity: 4 },
          ],
        },
        {
          name: '蒼炎弩ソウルバスター',
          materials: [
            { name: '火竜の天鱗', quantity: 1 },
            { name: '蒼火竜の剛翼', quantity: 3 },
            { name: '蒼火竜の厚鱗', quantity: 6 },
            { name: '蒼火竜の重殻', quantity: 4 },
          ],
        },
        {
          name: '煌竜弩シルバーレイ',
          materials: [
            { name: '銀火竜の重殻', quantity: 6 },
            { name: '銀火竜の厚鱗', quantity: 8 },
            { name: '火竜の煌液', quantity: 2 },
            { name: '銀火竜の靭尾', quantity: 1 },
          ],
        },
        {
          name: 'サンダーブリッツⅠ',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 5 },
            { name: '電気袋', quantity: 1 },
            { name: '飛雷竜の爪', quantity: 2 },
            { name: '飛雷竜の電極針', quantity: 1 },
          ],
        },
        {
          name: 'サンダーブリッツⅡ',
          materials: [
            { name: '上竜骨', quantity: 2 },
            { name: '深海の結晶', quantity: 3 },
            { name: '飛雷竜の電極針', quantity: 2 },
            { name: '飛雷竜の皮膜', quantity: 2 },
          ],
        },
        {
          name: 'ライトニングブリッツⅠ',
          materials: [
            { name: 'ランゴスタの薄羽', quantity: 3 },
            { name: '飛雷竜の上毛皮', quantity: 3 },
            { name: '飛雷竜の上鱗', quantity: 4 },
            { name: 'カブレライト鉱石', quantity: 5 },
          ],
        },
        {
          name: 'ライトニングブリッツⅡ',
          materials: [
            { name: '飛雷竜の皮膜', quantity: 4 },
            { name: '飛雷竜の雷極針', quantity: 2 },
            { name: '電撃袋', quantity: 3 },
            { name: 'ユニオン鉱石', quantity: 5 },
          ],
        },
        {
          name: 'ライトニングブリッツⅢ',
          materials: [
            { name: '古龍の血', quantity: 3 },
            { name: '竜玉', quantity: 1 },
            { name: '飛雷竜の雷極針', quantity: 4 },
            { name: '飛雷竜の尖爪', quantity: 6 },
          ],
        },
        {
          name: 'ライトニングブリッツⅣ',
          materials: [
            { name: '飛雷竜の厚毛皮', quantity: 2 },
            { name: '飛雷竜の剛爪', quantity: 1 },
            { name: '飛雷竜の厚鱗', quantity: 2 },
            { name: '雷電袋', quantity: 1 },
          ],
        },
        {
          name: '王弩ライカン',
          materials: [
            { name: '雷電袋', quantity: 3 },
            { name: '雷狼竜の雷電殻', quantity: 2 },
            { name: '雷狼竜の重殻', quantity: 5 },
            { name: '雷狼竜の剛爪', quantity: 3 },
          ],
        },
        {
          name: '王弩ライカン改',
          materials: [
            { name: '雷狼竜の雷電毛', quantity: 4 },
            { name: '雷狼竜の剛角', quantity: 3 },
            { name: '雷狼竜の天玉', quantity: 1 },
            { name: '超電雷光虫', quantity: 5 },
          ],
        },
        {
          name: '王牙弩【野雷】',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '雷狼竜の雷電殻', quantity: 5 },
            { name: '雷狼竜の剛角', quantity: 2 },
            { name: '霊脈の剛竜骨', quantity: 5 },
          ],
        },
        {
          name: 'スノウブリッツⅠ',
          materials: [
            { name: '深海の結晶', quantity: 3 },
            { name: '風漂竜の鱗', quantity: 4 },
            { name: '風漂竜の爪', quantity: 3 },
            { name: '氷結袋', quantity: 2 },
          ],
        },
        {
          name: 'スノウブリッツⅡ',
          materials: [
            { name: '風漂竜の翼膜', quantity: 3 },
            { name: 'シャムオスの上鱗', quantity: 5 },
            { name: '風漂竜の尾膜', quantity: 2 },
            { name: 'カブレライト鉱石', quantity: 5 },
          ],
        },
        {
          name: 'フロストブリッツⅠ',
          materials: [
            { name: 'ユニオン鉱石', quantity: 5 },
            { name: '風漂竜の上鱗', quantity: 5 },
            { name: '凍結袋', quantity: 3 },
            { name: '風漂竜の翼', quantity: 3 },
          ],
        },
        {
          name: 'フロストブリッツⅡ',
          materials: [
            { name: '古龍の血', quantity: 3 },
            { name: '竜玉', quantity: 1 },
            { name: '風漂竜の上皮', quantity: 3 },
            { name: '風漂竜の尖爪', quantity: 5 },
          ],
        },
        {
          name: 'フロストブリッツⅢ',
          materials: [
            { name: 'グラシスメタル', quantity: 2 },
            { name: 'エルトライト鉱石', quantity: 4 },
            { name: 'ウルグの厚毛皮', quantity: 3 },
            { name: '瞬間凍結袋', quantity: 1 },
          ],
        },
        {
          name: 'ブリザードカノン',
          materials: [
            { name: '凍てついた氷骨', quantity: 3 },
            { name: '瞬間凍結袋', quantity: 4 },
            { name: '氷牙竜の剛爪', quantity: 3 },
            { name: '氷牙竜の重殻', quantity: 4 },
          ],
        },
        {
          name: 'ブリザードカノン改',
          materials: [
            { name: '琥珀色の重牙', quantity: 3 },
            { name: '漆黒の氷刃爪', quantity: 2 },
            { name: '大竜玉', quantity: 1 },
            { name: '氷牙竜の重棘', quantity: 3 },
          ],
        },
        {
          name: 'ブリザードヘイル',
          materials: [
            { name: '琥珀色の重牙', quantity: 2 },
            { name: '太古龍骨', quantity: 5 },
            { name: '氷牙竜の剛爪', quantity: 4 },
            { name: '冰龍の剛爪', quantity: 2 },
          ],
        },
        {
          name: 'ブリザードガスト',
          materials: [
            { name: '氷牙竜チケット', quantity: 3 },
            { name: '白銀の氷刃牙', quantity: 3 },
            { name: '氷河を砕く剣爪', quantity: 1 },
            { name: 'グラシスメタル', quantity: 5 },
          ],
        },
        {
          name: 'ラグーナブリッツⅠ',
          materials: [
            { name: '水妖鳥の剛翼', quantity: 2 },
            { name: '水妖鳥の厚鱗', quantity: 3 },
            { name: 'デプスライト鉱石', quantity: 2 },
            { name: '特大水袋', quantity: 2 },
          ],
        },
        {
          name: 'ラグーナブリッツⅡ',
          materials: [
            { name: '剛竜骨', quantity: 3 },
            { name: '水妖鳥の靭尾', quantity: 1 },
            { name: '水妖鳥の特大喉袋', quantity: 1 },
            { name: '硫斬竜の重牙', quantity: 2 },
          ],
        },
      ],
    },
    {
      name: '骨素材系',
      weapons: [
        {
          name: 'ハンターライフルⅠ',
          materials: [{ name: '竜骨【小】', quantity: 1 }],
        },
        {
          name: 'ハンターライフルⅡ',
          materials: [{ name: '竜骨【小】', quantity: 2 }],
        },
        {
          name: 'ハンターライフルⅢ',
          materials: [
            { name: '太古の大骨', quantity: 1 },
            { name: '竜骨【中】', quantity: 2 },
          ],
        },
        {
          name: 'パワーライフルⅠ',
          materials: [
            { name: '強固な岩骨', quantity: 2 },
            { name: '竜骨【大】', quantity: 1 },
            { name: '竜骨【中】', quantity: 5 },
          ],
        },
        {
          name: 'パワーライフルⅡ',
          materials: [
            { name: '竜骨【大】', quantity: 1 },
            { name: '頑丈な骨', quantity: 4 },
            { name: '上竜骨', quantity: 2 },
          ],
        },
        {
          name: 'パワーライフルⅢ',
          materials: [
            { name: '上竜骨', quantity: 2 },
            { name: '尖竜骨', quantity: 2 },
            { name: '上質な堅骨', quantity: 2 },
          ],
        },
        {
          name: 'スナイプシューターⅠ',
          materials: [
            { name: '堅竜骨', quantity: 4 },
            { name: '尖竜骨', quantity: 6 },
            { name: '上質な堅骨', quantity: 10 },
          ],
        },
        {
          name: 'スナイプシューターⅡ',
          materials: [
            { name: '堅竜骨', quantity: 6 },
            { name: '古龍骨', quantity: 4 },
            { name: '上質な堅骨', quantity: 20 },
            { name: 'いにしえの龍骨', quantity: 1 },
          ],
        },
        {
          name: 'ブレイクシューターⅠ',
          materials: [
            { name: '堅竜骨', quantity: 4 },
            { name: '上質な堅骨', quantity: 4 },
            { name: '頑強な重骨', quantity: 2 },
            { name: '凍てついた氷骨', quantity: 1 },
          ],
        },
        {
          name: 'ブレイクシューターⅡ',
          materials: [
            { name: '頑強な重骨', quantity: 4 },
            { name: 'モンスターの特濃', quantity: 2 },
            { name: '剛竜骨', quantity: 2 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: 'ブレイクシューターⅢ',
          materials: [
            { name: '頑強な重骨', quantity: 6 },
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '剛竜骨', quantity: 4 },
            { name: '太古龍骨', quantity: 3 },
          ],
        },
        {
          name: 'アイスイーグル',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '氷晶の厚龍鱗', quantity: 5 },
            { name: '冰龍の剛爪', quantity: 3 },
            { name: '冰龍の靭尾', quantity: 1 },
          ],
        },
        {
          name: '氷姫アルマリア',
          materials: [
            { name: '冰龍の冠角', quantity: 4 },
            { name: '冰龍の剛爪', quantity: 4 },
            { name: '冰龍の零玉', quantity: 1 },
            { name: '地啼竜の慈爪', quantity: 3 },
          ],
        },
        {
          name: 'ハザクエリピア',
          materials: [
            { name: '死屍の龍鱗', quantity: 6 },
            { name: '屍套龍の尖爪', quantity: 4 },
            { name: '屍套龍の鋭牙', quantity: 5 },
            { name: '屍套龍の被膜', quantity: 4 },
          ],
        },
        {
          name: 'グルゴレットの叫喚',
          materials: [
            { name: '冥灯龍の幽幕', quantity: 3 },
            { name: '屍套龍の尖爪', quantity: 6 },
            { name: '屍套龍の尻尾', quantity: 2 },
            { name: '屍套龍の宝玉', quantity: 1 },
          ],
        },
        {
          name: 'グルゴレットの絶望',
          materials: [
            { name: '屍套龍の剛爪', quantity: 3 },
            { name: '闇を食む牙', quantity: 2 },
            { name: '死屍の厚龍鱗', quantity: 5 },
            { name: '死屍を紡いだ被膜', quantity: 3 },
          ],
        },
        {
          name: 'ディザ＝グルゴレット',
          materials: [
            { name: '屍套龍の剛爪', quantity: 6 },
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '屍套龍の重尾', quantity: 1 },
            { name: '地啼竜の慈爪', quantity: 3 },
          ],
        },
        {
          name: 'ブレイズライフルⅠ',
          materials: [
            { name: '蛮顎竜の鱗', quantity: 3 },
            { name: '蛮顎竜の牙', quantity: 2 },
            { name: '火炎袋', quantity: 1 },
          ],
        },
        {
          name: 'ブレイズライフルⅡ',
          materials: [
            { name: '火竜の骨髄', quantity: 1 },
            { name: '蛮顎竜の牙', quantity: 4 },
            { name: '蛮顎竜の尻尾', quantity: 1 },
            { name: '蛮顎竜の鼻骨', quantity: 1 },
          ],
        },
        {
          name: 'ジャナフバスターⅠ',
          materials: [
            { name: '蛮顎竜の逆鱗', quantity: 1 },
            { name: '爆炎袋', quantity: 3 },
            { name: '蛮顎竜の上鱗', quantity: 5 },
            { name: '蛮顎竜の鋭牙', quantity: 4 },
          ],
        },
        {
          name: 'ジャナフバスターⅡ',
          materials: [
            { name: '火竜の延髄', quantity: 2 },
            { name: '獄炎石', quantity: 1 },
            { name: '蛮顎竜の上毛皮', quantity: 4 },
            { name: '蛮顎竜の鋭牙', quantity: 5 },
          ],
        },
        {
          name: 'ジャナフバスターⅢ',
          materials: [
            { name: '炎王龍のたてがみ', quantity: 2 },
            { name: '蛮顎竜の鋭牙', quantity: 6 },
            { name: '蛮顎竜の大鼻骨', quantity: 2 },
            { name: '蛮顎竜の宝玉', quantity: 1 },
          ],
        },
        {
          name: 'ジャナフバスターⅣ',
          materials: [
            { name: 'エルトライト鉱石', quantity: 3 },
            { name: '蛮顎竜の重牙', quantity: 1 },
            { name: '蛮顎竜の厚鱗', quantity: 2 },
            { name: '業炎袋', quantity: 1 },
          ],
        },
        {
          name: 'バル＝ジャナールⅠ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 2 },
            { name: '剛竜骨', quantity: 3 },
            { name: '雷顎竜の厚鱗', quantity: 2 },
            { name: '雷顎竜の重牙', quantity: 1 },
          ],
        },
        {
          name: 'バル＝ジャナールⅡ',
          materials: [
            { name: '雷顎竜の厚毛皮', quantity: 3 },
            { name: '雷顎竜の重鼻骨', quantity: 2 },
            { name: '雷顎竜の靭尾', quantity: 1 },
            { name: '雷電袋', quantity: 3 },
          ],
        },
        {
          name: 'マッドライフルⅠ',
          materials: [
            { name: '泥魚竜の鱗', quantity: 3 },
            { name: '泥魚竜の甲殻', quantity: 1 },
            { name: '泥魚竜のヒレ', quantity: 1 },
            { name: '水袋', quantity: 1 },
          ],
        },
        {
          name: 'マッドライフルⅡ',
          materials: [
            { name: '咬魚の皮', quantity: 3 },
            { name: '泥魚竜の甲殻', quantity: 3 },
            { name: '泥魚竜のヒレ', quantity: 3 },
            { name: '痺賊竜の皮', quantity: 2 },
          ],
        },
        {
          name: 'マッドライフルⅢ',
          materials: [
            { name: '咬魚のヒゲ', quantity: 3 },
            { name: '泥魚竜の甲殻', quantity: 3 },
            { name: '泥魚竜の牙', quantity: 4 },
            { name: '上竜骨', quantity: 2 },
          ],
        },
        {
          name: 'シュラムバレットⅠ',
          materials: [
            { name: '泥魚竜の上鱗', quantity: 3 },
            { name: '泥魚竜の堅殻', quantity: 2 },
            { name: '泥魚竜の上ヒレ', quantity: 2 },
            { name: '咬魚の上皮', quantity: 5 },
          ],
        },
        {
          name: 'シュラムバレットⅡ',
          materials: [
            { name: '堅竜骨', quantity: 3 },
            { name: '泥魚竜の上ヒレ', quantity: 4 },
            { name: '大水袋', quantity: 3 },
            { name: '咬魚の大ヒゲ', quantity: 3 },
          ],
        },
        {
          name: 'シュラムバレットⅢ',
          materials: [
            { name: '古龍骨', quantity: 2 },
            { name: '竜玉', quantity: 1 },
            { name: '泥魚竜の上ヒレ', quantity: 6 },
            { name: '泥魚竜の鋭牙', quantity: 5 },
          ],
        },
        {
          name: 'シュラムバレットⅣ',
          materials: [
            { name: '咬魚の厚皮', quantity: 2 },
            { name: '泥魚竜の厚鱗', quantity: 3 },
            { name: '泥魚竜の重牙', quantity: 1 },
            { name: '泥魚竜の特上ヒレ', quantity: 1 },
          ],
        },
        {
          name: 'ブランシューターⅠ',
          materials: [
            { name: '凍てついた氷骨', quantity: 1 },
            { name: '凍魚竜の厚鱗', quantity: 3 },
            { name: '凍魚竜の剛角', quantity: 1 },
            { name: '凍魚竜の特上ヒレ', quantity: 1 },
          ],
        },
        {
          name: 'ブランシューターⅡ',
          materials: [
            { name: '凍魚竜の特上ヒレ', quantity: 2 },
            { name: '瞬間凍結袋', quantity: 2 },
            { name: '大竜玉', quantity: 1 },
            { name: '氷霜をまとう皮', quantity: 2 },
          ],
        },
        {
          name: 'ヒドゥンバレットⅠ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 1 },
            { name: '迅竜の厚鱗', quantity: 3 },
            { name: '迅竜の重牙', quantity: 2 },
            { name: '迅竜の重尾棘', quantity: 2 },
          ],
        },
        {
          name: 'ヒドゥンバレットⅡ',
          materials: [
            { name: '迅竜の天鱗', quantity: 1 },
            { name: '迅竜の靭尾', quantity: 1 },
            { name: '迅竜の剛刃翼', quantity: 4 },
            { name: '雷顎竜の重牙', quantity: 3 },
          ],
        },
        {
          name: 'ラヴァバレットⅠ',
          materials: [
            { name: '溶岩竜の鋭牙', quantity: 2 },
            { name: '溶岩竜の上ヒレ', quantity: 2 },
            { name: '溶岩竜の上鱗', quantity: 4 },
          ],
        },
        {
          name: 'ラヴァバレットⅡ',
          materials: [
            { name: '炎王龍のたてがみ', quantity: 2 },
            { name: '溶岩竜の鋭牙', quantity: 3 },
            { name: '溶岩竜の上ヒレ', quantity: 3 },
            { name: '竜玉', quantity: 1 },
          ],
        },
        {
          name: '火砕銃Ⅰ',
          materials: [
            { name: 'バルノスの剛爪', quantity: 2 },
            { name: '溶岩竜の厚鱗', quantity: 3 },
            { name: '溶岩竜の重牙', quantity: 2 },
            { name: '溶岩竜の特上ヒレ', quantity: 1 },
          ],
        },
        {
          name: '火砕銃Ⅱ',
          materials: [
            { name: '剛竜骨', quantity: 3 },
            { name: '蒼火竜の重殻', quantity: 2 },
            { name: '溶岩竜の重牙', quantity: 2 },
            { name: '溶岩竜の特上ヒレ', quantity: 2 },
          ],
        },
        {
          name: '巨牛の大弩Ⅰ',
          materials: [
            { name: '強竜骨', quantity: 3 },
            { name: '猛牛竜の巨大な角', quantity: 1 },
            { name: '猛牛竜の重殻', quantity: 2 },
            { name: '猛牛竜の重甲', quantity: 2 },
          ],
        },
        {
          name: '巨牛の大弩Ⅱ',
          materials: [
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '剛竜骨', quantity: 4 },
            { name: '猛牛竜の巨大な角', quantity: 4 },
            { name: '猛牛竜の靭尾', quantity: 1 },
          ],
        },
        {
          name: 'ドラグロライフルⅠ',
          materials: [
            { name: '土砂竜の甲殻', quantity: 3 },
            { name: '土砂竜の爪', quantity: 1 },
            { name: '土砂竜の背甲', quantity: 2 },
          ],
        },
        {
          name: 'ドラグロライフルⅡ',
          materials: [
            { name: 'ケストドンの甲殻', quantity: 3 },
            { name: '土砂竜の尻尾', quantity: 1 },
            { name: '土砂竜の爪', quantity: 2 },
            { name: 'ドラグライト鉱石', quantity: 3 },
          ],
        },
        {
          name: 'ドラグロライフルⅢ',
          materials: [
            { name: '土砂竜の爪', quantity: 4 },
            { name: '土砂竜の頭殻', quantity: 2 },
            { name: '角竜の甲殻', quantity: 3 },
            { name: '上竜骨', quantity: 3 },
          ],
        },
        {
          name: 'ボルボショットⅠ',
          materials: [
            { name: '土砂竜の鋭爪', quantity: 2 },
            { name: '土砂竜の堅殻', quantity: 3 },
            { name: '土砂竜の堅甲', quantity: 2 },
            { name: 'ケストドンの堅殻', quantity: 5 },
          ],
        },
        {
          name: 'ボルボショットⅡ',
          materials: [
            { name: '角竜の堅殻', quantity: 3 },
            { name: '土砂竜の鋭爪', quantity: 4 },
            { name: '土砂竜の堅殻', quantity: 3 },
            { name: 'ガストドンの堅殻', quantity: 5 },
          ],
        },
        {
          name: 'ボルボショットⅢ',
          materials: [
            { name: '土砂竜の鋭爪', quantity: 5 },
            { name: '土砂竜の堅甲', quantity: 5 },
            { name: '竜玉', quantity: 1 },
            { name: '滅尽龍の大角', quantity: 1 },
          ],
        },
        {
          name: 'ボロスボローカⅠ',
          materials: [
            { name: 'ケストドンの重殻', quantity: 2 },
            { name: '土砂竜の剛爪', quantity: 1 },
            { name: '土砂竜の重殻', quantity: 2 },
            { name: '土砂竜の重甲', quantity: 2 },
          ],
        },
        {
          name: 'ボロスボローカⅡ',
          materials: [
            { name: '角竜の重殻', quantity: 2 },
            { name: '重竜骨', quantity: 3 },
            { name: '土砂竜の剛爪', quantity: 2 },
            { name: '土砂竜の重頭殻', quantity: 1 },
          ],
        },
        {
          name: 'ディオスショットⅠ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 3 },
            { name: '砕竜の重殻', quantity: 4 },
            { name: '砕竜の重頭殻', quantity: 2 },
            { name: '光る粘菌', quantity: 3 },
          ],
        },
        {
          name: 'ディオスショットⅡ',
          materials: [
            { name: '砕竜の剛鉄拳', quantity: 4 },
            { name: '砕竜の靭尾', quantity: 1 },
            { name: '蒼火竜の剛翼', quantity: 3 },
            { name: '光る粘菌', quantity: 5 },
          ],
        },
        {
          name: 'ガロンライフルⅠ',
          materials: [
            { name: '惨爪竜の鱗', quantity: 4 },
            { name: '惨爪竜の爪', quantity: 2 },
            { name: '惨爪竜の牙', quantity: 2 },
          ],
        },
        {
          name: 'ガロンライフルⅡ',
          materials: [
            { name: '惨爪竜の爪', quantity: 2 },
            { name: '惨爪竜の逆鱗', quantity: 1 },
            { name: '惨爪竜の尻尾', quantity: 2 },
            { name: '上質な堅骨', quantity: 5 },
          ],
        },
        {
          name: '宿命の火',
          materials: [
            { name: 'いにしえの龍骨', quantity: 1 },
            { name: '惨爪竜の上鱗', quantity: 8 },
            { name: '惨爪竜の尖爪', quantity: 4 },
            { name: '惨爪竜の鋭牙', quantity: 3 },
          ],
        },
        {
          name: '業【カルマ】',
          materials: [
            { name: '炎龍の尖爪', quantity: 2 },
            { name: '惨爪竜の尖爪', quantity: 6 },
            { name: '惨爪竜の鋭牙', quantity: 5 },
            { name: '惨爪竜の宝玉', quantity: 1 },
          ],
        },
        {
          name: '業【カルマ】改',
          materials: [
            { name: '惨爪竜の剛爪', quantity: 2 },
            { name: '惨爪竜の厚鱗', quantity: 3 },
            { name: '惨爪竜の重牙', quantity: 2 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: '冥府の銃火',
          materials: [
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '兇爪竜の剛爪', quantity: 3 },
            { name: '兇爪竜の厚鱗', quantity: 5 },
            { name: '兇爪竜の重牙', quantity: 2 },
          ],
        },
        {
          name: '死霊【ゴースト】',
          materials: [
            { name: '兇爪竜の強硬筋', quantity: 5 },
            { name: '兇爪竜の剛爪', quantity: 4 },
            { name: '兇爪竜の天鱗', quantity: 1 },
            { name: '溟龍の剛爪', quantity: 2 },
          ],
        },
      ],
    },
    {
      name: '龍骨系系',
      weapons: [
        {
          name: '龍骨弩Ⅰ',
          materials: [
            { name: 'いびつな狂骨', quantity: 5 },
            { name: '強固な岩骨', quantity: 5 },
            { name: '太古の大骨', quantity: 5 },
            { name: 'サンゴの紅骨', quantity: 5 },
          ],
        },
        {
          name: '龍骨弩Ⅱ',
          materials: [
            { name: '竜骨【大】', quantity: 8 },
            { name: '頑丈な骨', quantity: 8 },
            { name: '上竜骨', quantity: 6 },
          ],
        },
        {
          name: '龍骨弩Ⅲ',
          materials: [
            { name: '古龍骨', quantity: 10 },
            { name: '竜玉', quantity: 1 },
            { name: 'いにしえの龍骨', quantity: 2 },
            { name: '荒々しい蛮骨', quantity: 4 },
          ],
        },
        {
          name: '龍封じの弩Ⅰ',
          materials: [
            { name: '頑強な重骨', quantity: 6 },
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '剛竜骨', quantity: 3 },
            { name: '重竜骨', quantity: 4 },
          ],
        },
        {
          name: '龍封じの弩Ⅱ',
          materials: [
            { name: '剛竜骨', quantity: 4 },
            { name: '太古龍骨', quantity: 6 },
            { name: '大竜玉', quantity: 1 },
            { name: '溶岩竜の特上ヒレ', quantity: 2 },
          ],
        },
        {
          name: '盛者必衰ー散華ー',
          materials: [
            { name: '地啼竜の慈鱗', quantity: 6 },
            { name: '地啼竜の慈眼殻', quantity: 2 },
            { name: '地啼竜の慈爪', quantity: 4 },
            { name: '地啼竜の顕玉', quantity: 1 },
          ],
        },
        {
          name: '鬼ヶ島',
          materials: [
            { name: '獄炎石', quantity: 1 },
            { name: '爆鱗竜の尖爪', quantity: 3 },
            { name: '爆鱗竜の爆腺', quantity: 4 },
            { name: '勇気の証G', quantity: 1 },
          ],
        },
        {
          name: '大鬼ヶ島',
          materials: [
            { name: '爆鱗竜の尖爪', quantity: 4 },
            { name: '爆鱗竜の翼', quantity: 4 },
            { name: '爆鱗竜の宝玉', quantity: 1 },
            { name: '冥灯龍の幽爪', quantity: 4 },
          ],
        },
        {
          name: '神ヶ島',
          materials: [
            { name: 'メランジェ鉱石', quantity: 5 },
            { name: '凝縮された爆腺液', quantity: 3 },
            { name: '爆鱗竜の厚鱗', quantity: 4 },
            { name: '爆鱗竜の剛爪', quantity: 3 },
          ],
        },
        {
          name: '幻獣筒',
          materials: [
            { name: 'ライトクリスタル', quantity: 1 },
            { name: '幻獣の雷角', quantity: 3 },
            { name: '幻獣の皮', quantity: 3 },
            { name: '幻獣の尾', quantity: 1 },
          ],
        },
        {
          name: '幻獣筒改',
          materials: [
            { name: '幻獣のたてがみ', quantity: 4 },
            { name: '龍脈の結晶', quantity: 5 },
            { name: '幻獣の上皮', quantity: 5 },
            { name: '幻獣の蒼角', quantity: 4 },
          ],
        },
        {
          name: '幻獣筒【三ツ角】',
          materials: [
            { name: 'ノヴァクリスタル', quantity: 2 },
            { name: '冥灯龍の白殻', quantity: 4 },
            { name: '幻獣の雷尾', quantity: 3 },
            { name: '幻獣の蒼角', quantity: 6 },
          ],
        },
        {
          name: '幻獣筒【三界三禍】',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '幻獣の銀たてがみ', quantity: 4 },
            { name: '幻獣の特上皮', quantity: 3 },
            { name: '幻獣の剛蒼角', quantity: 3 },
          ],
        },
        {
          name: 'ヒドラアクチヌラ',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '溟龍の特上皮', quantity: 5 },
            { name: '溟龍の剛爪', quantity: 4 },
            { name: '溟龍の幻曜ヒゲ', quantity: 2 },
          ],
        },
        {
          name: 'ネロアクチヌラ',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '地啼竜の慈爪', quantity: 2 },
            { name: '溟龍の幻曜ヒゲ', quantity: 4 },
            { name: '溟龍の靭尾', quantity: 2 },
          ],
        },
      ],
    },
    {
      name: '黒鋼系',
      weapons: [
        {
          name: '黒鋼の弩Ⅰ',
          materials: [
            { name: '大地の結晶', quantity: 10 },
            { name: 'ライトクリスタル', quantity: 1 },
            { name: '深海の結晶', quantity: 10 },
            { name: '龍脈の結晶', quantity: 10 },
          ],
        },
        {
          name: '黒鋼の弩Ⅱ',
          materials: [
            { name: '獄炎石', quantity: 1 },
            { name: '竜玉', quantity: 1 },
            { name: 'カブレライト鉱石', quantity: 10 },
            { name: 'ユニオン鉱石', quantity: 5 },
          ],
        },
        {
          name: '鋼氷蜂弩',
          materials: [
            { name: '鋼龍の堅殻', quantity: 5 },
            { name: '鋼龍の尻尾', quantity: 2 },
            { name: '鋼龍の尖爪', quantity: 3 },
            { name: '鋼龍の翼', quantity: 4 },
          ],
        },
        {
          name: 'ホーネス＝ダオラ',
          materials: [
            { name: '鋼龍の尖角', quantity: 5 },
            { name: '鋼龍の宝玉', quantity: 1 },
            { name: '冥灯龍の幽翼', quantity: 2 },
            { name: '鋼龍の尖爪', quantity: 4 },
          ],
        },
        {
          name: 'ザンブル＝ダオラ',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '鋼の厚龍鱗', quantity: 5 },
            { name: '鋼龍の剛爪', quantity: 4 },
            { name: '鋼龍の剛角', quantity: 5 },
          ],
        },
        {
          name: 'ゼノ＝ネキーナ',
          materials: [
            { name: '冥灯龍の白殻', quantity: 6 },
            { name: '冥灯龍の幽爪', quantity: 4 },
            { name: '冥灯龍の幽玉', quantity: 1 },
            { name: '冥灯龍の尻尾', quantity: 2 },
          ],
        },
        {
          name: 'ゼノ＝ネキーナ改',
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
      name: 'クロスボウガン系',
      weapons: [
        {
          name: 'クロスボウガン',
          materials: [
            { name: 'ノヴァクリスタル', quantity: 1 },
            { name: '狩猟王のコイン', quantity: 5 },
            { name: 'ガマルコイン', quantity: 4 },
            { name: 'レウスコイン', quantity: 4 },
          ],
        },
        {
          name: 'グレイトボウガン',
          materials: [
            { name: '竜玉', quantity: 2 },
            { name: '撃龍王のコイン', quantity: 5 },
            { name: '飛竜コイン', quantity: 4 },
            { name: '獣竜コイン', quantity: 4 },
          ],
        },
        {
          name: 'ネオクロスボウガン',
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
          name: 'イビルマシーン',
          materials: [
            { name: '恐暴竜の黒鱗', quantity: 6 },
            { name: '恐暴竜の大牙', quantity: 3 },
            { name: '恐暴竜の鉤爪', quantity: 2 },
            { name: '恐暴竜の唾液', quantity: 2 },
          ],
        },
        {
          name: 'マッドネスグリーフ',
          materials: [
            { name: '恐暴竜の大牙', quantity: 5 },
            { name: '恐暴竜の頭殻', quantity: 2 },
            { name: '恐暴竜の宝玉', quantity: 1 },
            { name: '古龍の血', quantity: 5 },
          ],
        },
        {
          name: '業弩ダークデメント',
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
          name: 'エンプレスシェル',
          materials: [
            { name: '炎妃龍のたてがみ', quantity: 3 },
            { name: '炎妃龍の宝玉', quantity: 1 },
            { name: '炎妃龍の尖角', quantity: 3 },
            { name: '炎妃龍の上鱗', quantity: 4 },
          ],
        },
        {
          name: 'エンプレスシェル・冥灯',
          materials: [
            { name: '冥灯龍の幽角', quantity: 3 },
            { name: '冥灯龍の幽玉', quantity: 1 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の尻尾', quantity: 2 },
          ],
        },
        {
          name: 'エンプレスシェル・滅尽',
          materials: [
            { name: '滅尽龍の宝玉', quantity: 1 },
            { name: '滅尽龍の大角', quantity: 3 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の翼', quantity: 3 },
          ],
        },
        {
          name: 'エンプレスシェル・炎妃',
          materials: [
            { name: '炎王龍の尖角', quantity: 3 },
            { name: '爆鱗竜の宝玉', quantity: 1 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の尖角', quantity: 2 },
          ],
        },
        {
          name: '魂焔の龍弩・炎妃',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '炎妃龍の厚鱗', quantity: 4 },
            { name: '炎妃龍の剛角', quantity: 4 },
            { name: '炎妃龍の大たてがみ', quantity: 4 },
          ],
        },
        {
          name: '魂焔の龍弩・滅尽',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '殲滅の大剛角', quantity: 3 },
            { name: '無窮の新生殻', quantity: 3 },
            { name: '炎妃龍の厚鱗', quantity: 4 },
          ],
        },
        {
          name: '魂焔の龍弩・冥灯',
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
          name: 'ラージャンデグ',
          materials: [
            { name: '金獅子の重牙', quantity: 2 },
            { name: '金獅子の剛爪', quantity: 1 },
            { name: '金獅子の剛角', quantity: 1 },
            { name: '金獅子の黒荒毛', quantity: 2 },
          ],
        },
        {
          name: '金獅子筒【万雷】',
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
          name: '鬼神筒【雷天】',
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
          name: '極弩リュウシン',
          materials: [
            { name: '獄狼竜の滅龍毛', quantity: 2 },
            { name: '獄狼竜の滅龍殻', quantity: 2 },
            { name: '獄狼竜の剛角', quantity: 1 },
            { name: '獄狼竜の剛爪', quantity: 1 },
          ],
        },
        {
          name: '極弩リュウゼツ',
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
          name: '砕光の輝弩',
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
          name: '煌黒の烈弩',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '煌黒龍の凶爪', quantity: 3 },
            { name: '天を統べる角', quantity: 1 },
            { name: '煌黒龍の天鱗', quantity: 3 },
          ],
        },
        {
          name: '煌黒弩アルドミナ',
          materials: [
            { name: '煌黒龍の凶爪', quantity: 2 },
            { name: '煌黒龍の邪翼', quantity: 1 },
            { name: '天を統べる角', quantity: 1 },
            { name: '瑠璃色の龍神玉', quantity: 1 },
          ],
        },
      ],
    },
    {
      name: 'ミラボレアス',
      weapons: [
        {
          name: '黒龍翼弩',
          materials: [
            { name: '黒龍の厚鱗', quantity: 3 },
            { name: '黒龍の重胸殻', quantity: 1 },
            { name: '黒龍の剛角', quantity: 1 },
            { name: '黒龍の邪眼', quantity: 1 },
          ],
        },
        {
          name: '真・黒龍翼弩',
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
      name: 'ストームスリンガー系',
      weapons: [
        {
          name: 'ストームスリンガー(試作)',
          materials: [
            { name: '雷狼竜の雷電殻', quantity: 4 },
            { name: '雷狼竜の剛角', quantity: 1 },
            { name: '雷狼竜の剛爪', quantity: 2 },
            { name: 'バヌーク族戦士の証', quantity: 3 },
          ],
        },
        {
          name: 'ストームスリンガー(逸品)',
          materials: [
            { name: '獄狼竜の滅龍殻', quantity: 4 },
            { name: '獄狼竜の剛角', quantity: 1 },
            { name: '獄狼竜の剛爪', quantity: 2 },
            { name: '碧の宝石', quantity: 2 },
          ],
        },
      ],
    },
    {
      name: 'ギルドパレス系',
      weapons: [
        {
          name: 'ギルドパレスボウガン',
          materials: [
            { name: 'グラシスメタル', quantity: 5 },
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '琥珀色の重牙', quantity: 2 },
            { name: '祭典チケット', quantity: 2 },
          ],
        },
        {
          name: '宮廷警弩【狙星】',
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
