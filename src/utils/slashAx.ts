import { WeaponType } from './materialsTypes'

const slashAx: WeaponType = {
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
      weapons: [
        {
          name: '鉄製試作剣斧Ⅰ',
          materials: [{ name: '鉄鉱石', quantity: 1 }],
        },
        {
          name: '鉄製試作剣斧Ⅱ',
          materials: [{ name: '鉄鉱石', quantity: 2 }],
        },
        {
          name: '鉄製試作剣斧Ⅲ',
          materials: [
            { name: '大地の結晶', quantity: 2 },
            { name: '鉄鉱石', quantity: 5 },
            { name: 'マカライト鉱石', quantity: 2 },
          ],
        },
        {
          name: '鋼鉄製改良剣斧Ⅰ',
          materials: [
            { name: 'マカライト鉱石', quantity: 5 },
            { name: '竜骨【中】', quantity: 2 },
            { name: 'ドラグライト鉱石', quantity: 2 },
          ],
        },
        {
          name: '鋼鉄製改良剣斧Ⅱ',
          materials: [
            { name: 'マカライト鉱石', quantity: 10 },
            { name: 'ドラグライト鉱石', quantity: 5 },
            { name: '上竜骨', quantity: 2 },
            { name: '深海の結晶', quantity: 2 },
          ],
        },
        {
          name: '鋼鉄製改良剣斧Ⅲ',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 5 },
            { name: 'カブレライト鉱石', quantity: 8 },
            { name: '龍脈の結晶', quantity: 2 },
          ],
        },
        {
          name: '合金製完成剣斧Ⅰ',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 10 },
            { name: 'カブレライト鉱石', quantity: 5 },
            { name: '龍脈の結晶', quantity: 3 },
            { name: 'ユニオン鉱石', quantity: 8 },
          ],
        },
        {
          name: '合金製完成剣斧Ⅱ',
          materials: [
            { name: '古龍の血', quantity: 2 },
            { name: '獄炎石', quantity: 1 },
            { name: 'カブレライト鉱石', quantity: 20 },
            { name: 'ユニオン鉱石', quantity: 13 },
          ],
        },
        {
          name: 'クロムデスマキナⅠ',
          materials: [
            { name: 'カブレライト鉱石', quantity: 4 },
            { name: '霊脈の結晶', quantity: 2 },
            { name: 'グラシスメタル', quantity: 1 },
            { name: 'エルトライト鉱石', quantity: 2 },
          ],
        },
        {
          name: 'クロムデスマキナⅡ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 2 },
            { name: 'エルトライト鉱石', quantity: 4 },
            { name: '重竜骨', quantity: 3 },
            { name: 'デプスライト鉱石', quantity: 2 },
          ],
        },
        {
          name: 'クロムデスマキナⅢ',
          materials: [
            { name: '古龍の浄血', quantity: 3 },
            { name: 'メランジェ鉱石', quantity: 3 },
            { name: 'エルトライト鉱石', quantity: 6 },
            { name: 'ピュアクリスタル', quantity: 1 },
          ],
        },
        {
          name: '黒羽の剣斧Ⅰ',
          materials: [
            { name: '幻鳥竜玉', quantity: 1 },
            { name: '黒狼鳥の銀狼毛', quantity: 4 },
            { name: '黒狼鳥の厚鱗', quantity: 3 },
            { name: '黒狼鳥の地獄耳', quantity: 2 },
          ],
        },
        {
          name: '黒羽の剣斧Ⅱ',
          materials: [
            { name: '大竜玉', quantity: 1 },
            { name: 'イカしたクチバシ', quantity: 3 },
            { name: '黒狼鳥の剛翼', quantity: 2 },
            { name: '傷痕の紫甲殻', quantity: 3 },
          ],
        },
        {
          name: 'ネルガルガッシュ',
          materials: [
            { name: '滅尽龍の再生殻', quantity: 4 },
            { name: '滅尽龍の尻尾', quantity: 2 },
            { name: '滅尽龍の堅殻', quantity: 2 },
            { name: '滅尽龍の尖爪', quantity: 3 },
          ],
        },
        {
          name: '断滅の一閃',
          materials: [
            { name: '滅尽龍の宝玉', quantity: 1 },
            { name: '滅尽龍の尖爪', quantity: 5 },
            { name: '滅尽龍の大角', quantity: 5 },
            { name: '冥灯龍の幽角', quantity: 2 },
          ],
        },
        {
          name: '断滅の一閃【破】',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '殲滅の大剛角', quantity: 3 },
            { name: '無窮の新生殻', quantity: 5 },
            { name: '滅尽龍の剛爪', quantity: 4 },
          ],
        },
        {
          name: 'グレイスアックスⅠ',
          materials: [
            { name: '風漂竜の鱗', quantity: 4 },
            { name: '風漂竜の爪', quantity: 3 },
            { name: '氷結袋', quantity: 2 },
          ],
        },
        {
          name: 'グレイスアックスⅡ',
          materials: [
            { name: '浮空竜の翼', quantity: 4 },
            { name: '風漂竜の爪', quantity: 4 },
            { name: '風漂竜の逆鱗', quantity: 1 },
            { name: '風漂竜の尾膜', quantity: 3 },
          ],
        },
        {
          name: 'レイ＝ホロウコラム',
          materials: [
            { name: '鋼龍の尖爪', quantity: 2 },
            { name: '風漂竜の上皮', quantity: 3 },
            { name: '風漂竜の尖爪', quantity: 5 },
            { name: '風漂竜の宝玉', quantity: 1 },
          ],
        },
        {
          name: 'レイ＝ホロウコラム改',
          materials: [
            { name: '凍てついた氷骨', quantity: 4 },
            { name: '風漂竜の剛爪', quantity: 2 },
            { name: '風漂竜の厚鱗', quantity: 3 },
            { name: '風漂竜の重尾膜', quantity: 2 },
          ],
        },
        {
          name: 'ブリーナ＝ホロウコラム',
          materials: [
            { name: '漆黒の氷刃爪', quantity: 2 },
            { name: '瞬間凍結袋', quantity: 4 },
            { name: '氷霜をまとう皮', quantity: 5 },
            { name: '冷厳なる翼', quantity: 2 },
          ],
        },
        {
          name: 'ヘクター＝グレイシア',
          materials: [
            { name: '漆黒の氷刃爪', quantity: 4 },
            { name: '冰龍の剛爪', quantity: 2 },
            { name: '風漂竜の天鱗', quantity: 1 },
            { name: '冷厳なる翼', quantity: 2 },
          ],
        },
        {
          name: 'サンダーアックスⅠ',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 5 },
            { name: '電気袋', quantity: 1 },
            { name: '飛雷竜の爪', quantity: 2 },
            { name: '飛雷竜の電極針', quantity: 1 },
          ],
        },
        {
          name: 'サンダーアックスⅡ',
          materials: [
            { name: '上竜骨', quantity: 2 },
            { name: '深海の結晶', quantity: 3 },
            { name: '飛雷竜の電極針', quantity: 2 },
            { name: '飛雷竜の皮膜', quantity: 2 },
          ],
        },
        {
          name: 'ライトニングアクセルⅠ',
          materials: [
            { name: 'ランゴスタの薄羽', quantity: 3 },
            { name: '飛雷竜の上毛皮', quantity: 3 },
            { name: '飛雷竜の上鱗', quantity: 4 },
            { name: 'カブレライト鉱石', quantity: 5 },
          ],
        },
        {
          name: 'ライトニングアクセルⅡ',
          materials: [
            { name: '飛雷竜の皮膜', quantity: 4 },
            { name: '飛雷竜の雷極針', quantity: 2 },
            { name: '電撃袋', quantity: 3 },
            { name: 'ユニオン鉱石', quantity: 5 },
          ],
        },
        {
          name: 'ライトニングアクセルⅢ',
          materials: [
            { name: '古龍の血', quantity: 3 },
            { name: '竜玉', quantity: 1 },
            { name: '飛雷竜の雷極針', quantity: 4 },
            { name: '飛雷竜の尖爪', quantity: 6 },
          ],
        },
        {
          name: 'ライトニングアクセルⅣ',
          materials: [
            { name: '飛雷竜の厚毛皮', quantity: 2 },
            { name: '飛雷竜の剛爪', quantity: 1 },
            { name: '飛雷竜の厚鱗', quantity: 2 },
            { name: '雷電袋', quantity: 1 },
          ],
        },
        {
          name: '迅雷の剣斧Ⅱ',
          materials: [
            { name: '雷狼竜の雷電毛', quantity: 4 },
            { name: '雷狼竜の剛角', quantity: 3 },
            { name: '雷狼竜の天玉', quantity: 1 },
            { name: '超電雷光虫', quantity: 5 },
          ],
        },
        {
          name: '迅雷の剣斧Ⅰ',
          materials: [
            { name: '雷電袋', quantity: 3 },
            { name: '雷狼竜の雷電殻', quantity: 2 },
            { name: '雷狼竜の重殻', quantity: 5 },
            { name: '雷狼竜の剛爪', quantity: 3 },
          ],
        },
        {
          name: 'ヒドゥンアックス',
          materials: [
            { name: 'メランジェ鉱石', quantity: 1 },
            { name: '迅竜の厚鱗', quantity: 3 },
            { name: '迅竜の重牙', quantity: 2 },
            { name: '迅竜の重尾棘', quantity: 2 },
          ],
        },
        {
          name: 'ヒドゥンアックス改',
          materials: [
            { name: '迅竜の天鱗', quantity: 1 },
            { name: '迅竜の靭尾', quantity: 2 },
            { name: '迅竜の剛刃翼', quantity: 3 },
            { name: '雷顎竜の重牙', quantity: 2 },
          ],
        },
        {
          name: '闇夜剣斧【弦月】',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '迅竜の重牙', quantity: 4 },
            { name: '迅竜の剛刃翼', quantity: 4 },
            { name: '闇を食む牙', quantity: 2 },
          ],
        },
        {
          name: 'ダチュラガーデンⅠ',
          materials: [
            { name: '強竜骨', quantity: 2 },
            { name: '劇烈毒袋', quantity: 2 },
            { name: '毒妖鳥の剛翼', quantity: 2 },
            { name: '毒妖鳥の厚鱗', quantity: 3 },
          ],
        },
        {
          name: 'ダチュラガーデンⅡ',
          materials: [
            { name: '重竜骨', quantity: 3 },
            { name: '毒妖鳥の靭尾', quantity: 1 },
            { name: '毒妖鳥の特大喉袋', quantity: 1 },
            { name: '雌火竜の秘棘', quantity: 2 },
          ],
        },
        {
          name: 'ルブラルラグーンⅠ',
          materials: [
            { name: '水妖鳥の剛翼', quantity: 2 },
            { name: '水妖鳥の厚鱗', quantity: 3 },
            { name: 'デプスライト鉱石', quantity: 2 },
            { name: '特大水袋', quantity: 2 },
          ],
        },
        {
          name: 'ルブラルラグーンⅡ',
          materials: [
            { name: '剛竜骨', quantity: 3 },
            { name: '水妖鳥の靭尾', quantity: 1 },
            { name: '水妖鳥の特大喉袋', quantity: 1 },
            { name: '硫斬竜の重牙', quantity: 2 },
          ],
        },
        {
          name: 'モーターアクセルⅠ',
          materials: [
            { name: '爆鎚竜の顎', quantity: 1 },
            { name: '爆鎚竜の堅殻', quantity: 4 },
            { name: '爆鎚竜の上鱗', quantity: 1 },
            { name: '爆鎚竜の延髄', quantity: 1 },
          ],
        },
        {
          name: 'モーターアクセルⅡ',
          materials: [
            { name: '炎王龍の堅殻', quantity: 4 },
            { name: '爆鎚竜の顎', quantity: 2 },
            { name: '爆鎚竜の紅玉', quantity: 1 },
            { name: '爆鎚竜の耐熱殻', quantity: 4 },
          ],
        },
        {
          name: '重機ギガントモーターⅠ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 2 },
            { name: '爆鎚竜の厚鱗', quantity: 3 },
            { name: '爆鎚竜の重殻', quantity: 2 },
            { name: '爆鎚竜の重顎', quantity: 1 },
          ],
        },
        {
          name: '重機ギガントモーターⅡ',
          materials: [
            { name: '爆鎚竜の重顎', quantity: 1 },
            { name: '爆鎚竜の重耐熱殻', quantity: 2 },
            { name: '爆鎚竜の天殻', quantity: 1 },
            { name: '硫斬竜の重牙', quantity: 2 },
          ],
        },
        {
          name: 'レックスレイダーⅠ',
          materials: [
            { name: '頑強な重骨', quantity: 5 },
            { name: '轟竜の厚鱗', quantity: 4 },
            { name: '轟竜の剛爪', quantity: 3 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: 'レックスレイダーⅡ',
          materials: [
            { name: '轟竜の重牙', quantity: 3 },
            { name: '轟竜の靭尾', quantity: 2 },
            { name: '轟竜の天鱗', quantity: 1 },
            { name: '堅牢な黒巻き角', quantity: 1 },
          ],
        },
        {
          name: 'カーサスレイダー',
          materials: [
            { name: '大竜玉', quantity: 1 },
            { name: '黒轟竜の厚鱗', quantity: 2 },
            { name: '黒轟竜の重牙', quantity: 5 },
            { name: '黒轟竜の剛爪', quantity: 3 },
          ],
        },
        {
          name: 'ジャグラスアックスⅠ',
          materials: [
            { name: '賊竜の鱗', quantity: 3 },
            { name: '賊竜の皮', quantity: 1 },
            { name: '賊竜の爪', quantity: 1 },
            { name: 'とがった爪', quantity: 1 },
          ],
        },
        {
          name: 'ジャグラスアックスⅡ',
          materials: [
            { name: '賊竜のたてがみ', quantity: 2 },
            { name: '賊竜の爪', quantity: 2 },
            { name: '眩鳥の爪', quantity: 3 },
            { name: 'サンゴの紅骨', quantity: 2 },
          ],
        },
        {
          name: 'ジャグラスアックスⅢ',
          materials: [
            { name: '賊竜の鱗', quantity: 5 },
            { name: '賊竜のたてがみ', quantity: 3 },
            { name: '賊竜の爪', quantity: 3 },
            { name: '上竜骨', quantity: 3 },
          ],
        },
        {
          name: 'ジャグラスレイダーⅠ',
          materials: [
            { name: '賊竜のたてがみ', quantity: 6 },
            { name: '賊竜の上鱗', quantity: 6 },
            { name: '賊竜の尖爪', quantity: 4 },
            { name: '鋭利な爪', quantity: 5 },
          ],
        },
        {
          name: 'ジャグラスレイダーⅡ',
          materials: [
            { name: 'ジャグラスの上皮', quantity: 6 },
            { name: '堅竜骨', quantity: 4 },
            { name: '賊竜の尖爪', quantity: 6 },
            { name: '眩鳥の尖爪', quantity: 5 },
          ],
        },
        {
          name: 'ジャグラスレイダーⅢ',
          materials: [
            { name: '賊竜の上皮', quantity: 6 },
            { name: '賊竜の尖爪', quantity: 8 },
            { name: 'ノヴァクリスタル', quantity: 1 },
            { name: '屍套龍の尖爪', quantity: 2 },
          ],
        },
        {
          name: '牙竜剣斧【喰裂】Ⅰ',
          materials: [
            { name: 'ジャグラスの厚鱗', quantity: 2 },
            { name: '賊竜の大たてがみ', quantity: 2 },
            { name: '賊竜の剛爪', quantity: 1 },
            { name: '賊竜の厚鱗', quantity: 2 },
          ],
        },
        {
          name: '牙竜剣斧【喰裂】Ⅱ',
          materials: [
            { name: '強靭な爪', quantity: 3 },
            { name: '重竜骨', quantity: 3 },
            { name: '賊竜の剛爪', quantity: 3 },
            { name: '賊竜の厚皮', quantity: 3 },
          ],
        },
        {
          name: 'アンバースラッシュ',
          materials: [
            { name: '凍てついた氷骨', quantity: 3 },
            { name: '瞬間凍結袋', quantity: 4 },
            { name: '氷牙竜の剛爪', quantity: 3 },
            { name: '氷牙竜の重殻', quantity: 4 },
          ],
        },
        {
          name: 'アンバースラッシュ改',
          materials: [
            { name: '琥珀色の重牙', quantity: 3 },
            { name: '漆黒の氷刃爪', quantity: 2 },
            { name: '大竜玉', quantity: 1 },
            { name: '氷牙竜の重棘', quantity: 3 },
          ],
        },
        {
          name: 'ゴアフロストアンバー',
          materials: [
            { name: '琥珀色の重牙', quantity: 2 },
            { name: '太古龍骨', quantity: 5 },
            { name: '氷牙竜の剛爪', quantity: 4 },
            { name: '冰龍の剛爪', quantity: 2 },
          ],
        },
        {
          name: 'ゴアフロストオラリア',
          materials: [
            { name: '氷牙竜チケット', quantity: 3 },
            { name: '白銀の氷刃牙', quantity: 3 },
            { name: '氷河を砕く剣爪', quantity: 1 },
            { name: 'グラシスメタル', quantity: 5 },
          ],
        },
        {
          name: 'バゼルレイダーⅠ',
          materials: [
            { name: '獄炎石', quantity: 1 },
            { name: '爆鱗竜の尖爪', quantity: 3 },
            { name: '爆鱗竜の上鱗', quantity: 5 },
            { name: '爆鱗竜の爆腺', quantity: 4 },
          ],
        },
        {
          name: 'バゼルレイダーⅡ',
          materials: [
            { name: '炎龍の塵粉', quantity: 3 },
            { name: '爆鱗竜の尖爪', quantity: 4 },
            { name: '爆鱗竜の翼', quantity: 4 },
            { name: '爆鱗竜の宝玉', quantity: 1 },
          ],
        },
        {
          name: 'バゼルハート',
          materials: [
            { name: 'メランジェ鉱石', quantity: 5 },
            { name: '凝縮された爆腺液', quantity: 3 },
            { name: '爆鱗竜の厚鱗', quantity: 4 },
            { name: '爆鱗竜の剛爪', quantity: 3 },
          ],
        },
        {
          name: '火竜の剣斧Ⅰ',
          materials: [
            { name: '火竜の骨髄', quantity: 1 },
            { name: '火竜の翼膜', quantity: 2 },
            { name: '火炎袋', quantity: 2 },
            { name: '火竜の鱗', quantity: 1 },
          ],
        },
        {
          name: '火竜の剣斧Ⅱ',
          materials: [
            { name: '火竜の尻尾', quantity: 2 },
            { name: '火竜の逆鱗', quantity: 1 },
            { name: '火竜の鱗', quantity: 6 },
            { name: '爆炎袋', quantity: 3 },
          ],
        },
        {
          name: '火竜斧レウスギアⅠ',
          materials: [
            { name: '火竜の延髄', quantity: 1 },
            { name: '火竜の堅殻', quantity: 4 },
            { name: '火竜の上鱗', quantity: 6 },
            { name: '火竜の翼', quantity: 2 },
          ],
        },
        {
          name: '火竜斧レウスギアⅡ',
          materials: [
            { name: '火竜の紅玉', quantity: 1 },
            { name: '蒼火竜の上鱗', quantity: 6 },
            { name: '蒼火竜の堅殻', quantity: 4 },
            { name: '蒼火竜の翼', quantity: 3 },
          ],
        },
        {
          name: '火竜斧レウスギアⅢ',
          materials: [
            { name: '火竜の厚鱗', quantity: 6 },
            { name: '火竜の剛翼', quantity: 2 },
            { name: '火竜の剛翼爪', quantity: 4 },
            { name: '火竜の重殻', quantity: 4 },
          ],
        },
        {
          name: '蒼炎斧ブルーギア',
          materials: [
            { name: '火竜の天鱗', quantity: 1 },
            { name: '蒼火竜の剛翼', quantity: 3 },
            { name: '蒼火竜の厚鱗', quantity: 6 },
            { name: '蒼火竜の重殻', quantity: 4 },
          ],
        },
        {
          name: '煌竜斧シルバーギア',
          materials: [
            { name: '銀火竜の重殻', quantity: 4 },
            { name: '銀火竜の厚鱗', quantity: 8 },
            { name: '火竜の煌液', quantity: 2 },
            { name: '銀火竜の靭尾', quantity: 3 },
          ],
        },
        {
          name: '竜姫の剣斧',
          materials: [
            { name: '雌火竜の厚鱗', quantity: 5 },
            { name: '雌火竜の重殻', quantity: 4 },
            { name: '雌火竜の秘棘', quantity: 3 },
          ],
        },
        {
          name: '竜姫の剣斧改',
          materials: [
            { name: '桜火竜の厚鱗', quantity: 4 },
            { name: '桜火竜の重殻', quantity: 3 },
            { name: '剛竜骨', quantity: 5 },
            { name: '雌火竜の天鱗', quantity: 1 },
          ],
        },
        {
          name: '煌戦の金剣斧',
          materials: [
            { name: '銀火竜の重殻', quantity: 4 },
            { name: '銀火竜の厚鱗', quantity: 5 },
            { name: '火竜の煌液', quantity: 1 },
            { name: '金火竜の秘棘', quantity: 3 },
          ],
        },
      ],
    },
    {
      name: '骨素材系',
      weapons: [
        {
          name: 'ボーンアックスⅠ',
          materials: [{ name: '竜骨【小】', quantity: 1 }],
        },
        {
          name: 'ボーンアックスⅡ',
          materials: [{ name: '竜骨【小】', quantity: 2 }],
        },
        {
          name: 'ボーンアックスⅢ',
          materials: [
            { name: '太古の大骨', quantity: 1 },
            { name: '竜骨【中】', quantity: 2 },
          ],
        },
        {
          name: 'ボーンスマッシャーⅠ',
          materials: [
            { name: '強固な岩骨', quantity: 2 },
            { name: '竜骨【大】', quantity: 1 },
            { name: '竜骨【中】', quantity: 5 },
          ],
        },
        {
          name: 'ボーンスマッシャーⅡ',
          materials: [
            { name: '竜骨【大】', quantity: 1 },
            { name: '頑丈な骨', quantity: 4 },
            { name: '上竜骨', quantity: 2 },
          ],
        },
        {
          name: 'ボーンスマッシャーⅢ',
          materials: [
            { name: '上竜骨', quantity: 2 },
            { name: '尖竜骨', quantity: 2 },
            { name: '上質な堅骨', quantity: 2 },
          ],
        },
        {
          name: 'パワースマッシャーⅠ',
          materials: [
            { name: '堅竜骨', quantity: 4 },
            { name: '尖竜骨', quantity: 6 },
            { name: '上質な堅骨', quantity: 10 },
          ],
        },
        {
          name: 'パワースマッシャーⅡ',
          materials: [
            { name: '堅竜骨', quantity: 6 },
            { name: '古龍骨', quantity: 4 },
            { name: '上質な堅骨', quantity: 20 },
            { name: 'いにしえの龍骨', quantity: 1 },
          ],
        },
        {
          name: 'マイティ＝ギアⅠ',
          materials: [
            { name: '堅竜骨', quantity: 4 },
            { name: '上質な堅骨', quantity: 4 },
            { name: '頑強な重骨', quantity: 2 },
            { name: '凍てついた氷骨', quantity: 1 },
          ],
        },
        {
          name: 'マイティ＝ギアⅡ',
          materials: [
            { name: '頑強な重骨', quantity: 4 },
            { name: 'モンスターの特濃', quantity: 2 },
            { name: '剛竜骨', quantity: 2 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: 'マイティ＝ギアⅢ',
          materials: [
            { name: '頑強な重骨', quantity: 6 },
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '剛竜骨', quantity: 4 },
            { name: '太古龍骨', quantity: 3 },
          ],
        },
        {
          name: 'アイスルード',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '氷晶の厚龍鱗', quantity: 4 },
            { name: '冰龍の剛爪', quantity: 2 },
            { name: '冰龍の靭尾', quantity: 2 },
          ],
        },
        {
          name: '氷魔ニーズウォック',
          materials: [
            { name: '冰龍の冠角', quantity: 4 },
            { name: '冰龍の剛爪', quantity: 4 },
            { name: '冰龍の零玉', quantity: 1 },
            { name: '地啼竜の慈爪', quantity: 3 },
          ],
        },
        {
          name: 'ハザクデミオスⅠ',
          materials: [
            { name: '死屍の龍鱗', quantity: 6 },
            { name: '屍套龍の尖爪', quantity: 4 },
            { name: '屍套龍の鋭牙', quantity: 5 },
            { name: '屍套龍の被膜', quantity: 4 },
          ],
        },
        {
          name: 'ハザクデミオスⅡ',
          materials: [
            { name: '冥灯龍の幽幕', quantity: 3 },
            { name: '屍套龍の尖爪', quantity: 6 },
            { name: '屍套龍の尻尾', quantity: 2 },
            { name: '屍套龍の宝玉', quantity: 1 },
          ],
        },
        {
          name: '屍剣斧ヴァルデミオス',
          materials: [
            { name: '屍套龍の剛爪', quantity: 3 },
            { name: '闇を食む牙', quantity: 2 },
            { name: '死屍の厚龍鱗', quantity: 5 },
            { name: '死屍を紡いだ被膜', quantity: 3 },
          ],
        },
        {
          name: 'ザルファスマッシャーⅠ',
          materials: [
            { name: '削られた硫晶片', quantity: 4 },
            { name: '硫斬竜の剣山状殻', quantity: 2 },
            { name: '硫斬竜の重牙', quantity: 2 },
            { name: '硫斬竜の断剣尾', quantity: 2 },
          ],
        },
        {
          name: 'ザルファスマッシャーⅡ',
          materials: [
            { name: '斬竜の天鱗', quantity: 1 },
            { name: '硫斬竜の剣山状殻', quantity: 3 },
            { name: '硫斬竜の重牙', quantity: 4 },
            { name: '屍套龍の剛爪', quantity: 2 },
          ],
        },
        {
          name: 'マッドアックスⅠ',
          materials: [
            { name: '泥魚竜の鱗', quantity: 3 },
            { name: '泥魚竜の甲殻', quantity: 1 },
            { name: '泥魚竜のヒレ', quantity: 1 },
            { name: '水袋', quantity: 1 },
          ],
        },
        {
          name: 'マッドアックスⅡ',
          materials: [
            { name: '咬魚の皮', quantity: 3 },
            { name: '泥魚竜の甲殻', quantity: 3 },
            { name: '泥魚竜のヒレ', quantity: 3 },
            { name: '痺賊竜の皮', quantity: 2 },
          ],
        },
        {
          name: 'マッドアックスⅢ',
          materials: [
            { name: '咬魚のヒゲ', quantity: 3 },
            { name: '泥魚竜の甲殻', quantity: 3 },
            { name: '泥魚竜の牙', quantity: 4 },
            { name: '上竜骨', quantity: 2 },
          ],
        },
        {
          name: 'シュラムドラウトⅠ',
          materials: [
            { name: '泥魚竜の上鱗', quantity: 3 },
            { name: '泥魚竜の堅殻', quantity: 2 },
            { name: '泥魚竜の上ヒレ', quantity: 2 },
            { name: '咬魚の上皮', quantity: 5 },
          ],
        },
        {
          name: 'シュラムドラウトⅡ',
          materials: [
            { name: '堅竜骨', quantity: 3 },
            { name: '泥魚竜の上ヒレ', quantity: 4 },
            { name: '大水袋', quantity: 3 },
            { name: '咬魚の大ヒゲ', quantity: 3 },
          ],
        },
        {
          name: 'シュラムドラウトⅢ',
          materials: [
            { name: '古龍骨', quantity: 2 },
            { name: '竜玉', quantity: 1 },
            { name: '泥魚竜の上ヒレ', quantity: 6 },
            { name: '泥魚竜の鋭牙', quantity: 5 },
          ],
        },
        {
          name: 'シュラムスヴァーシュⅠ',
          materials: [
            { name: '咬魚の厚皮', quantity: 2 },
            { name: '泥魚竜の厚鱗', quantity: 3 },
            { name: '泥魚竜の重牙', quantity: 1 },
            { name: '泥魚竜の特上ヒレ', quantity: 1 },
          ],
        },
        {
          name: 'シュラムスヴァーシュⅡ',
          materials: [
            { name: '咬魚の鋼ヒゲ', quantity: 1 },
            { name: '重竜骨', quantity: 2 },
            { name: '特大水袋', quantity: 2 },
            { name: '泥魚竜の特上ヒレ', quantity: 2 },
          ],
        },
        {
          name: '巨牛の大剣斧Ⅰ',
          materials: [
            { name: '強竜骨', quantity: 3 },
            { name: '猛牛竜の巨大な角', quantity: 1 },
            { name: '猛牛竜の重殻', quantity: 2 },
            { name: '猛牛竜の重甲', quantity: 2 },
          ],
        },
        {
          name: '巨牛の大剣斧Ⅱ',
          materials: [
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '剛竜骨', quantity: 3 },
            { name: '猛牛竜の巨大な角', quantity: 3 },
            { name: '猛牛竜の靭尾', quantity: 2 },
          ],
        },
        {
          name: 'ウルムーアックスⅠ',
          materials: [
            { name: '浮空竜の毛皮', quantity: 2 },
            { name: '浮空竜の鱗', quantity: 3 },
            { name: 'ゴム質の甲殻', quantity: 1 },
          ],
        },
        {
          name: 'ウルムーアックスⅡ',
          materials: [
            { name: '角竜の甲殻', quantity: 3 },
            { name: '浮空竜の翼膜', quantity: 2 },
            { name: 'ゴム質の甲殻', quantity: 3 },
            { name: 'シャムオスの鱗', quantity: 5 },
          ],
        },
        {
          name: 'ウルムースマッシャーⅠ',
          materials: [
            { name: '浮空竜の上毛皮', quantity: 4 },
            { name: '浮空竜の上鱗', quantity: 5 },
            { name: 'シャムオスの上鱗', quantity: 5 },
            { name: 'ゴム質の堅殻', quantity: 3 },
          ],
        },
        {
          name: 'ウルムースマッシャーⅡ',
          materials: [
            { name: '角竜の延髄', quantity: 2 },
            { name: '浮空竜の翼', quantity: 3 },
            { name: 'ゴム質の堅殻', quantity: 4 },
            { name: 'ノヴァクリスタル', quantity: 1 },
          ],
        },
        {
          name: 'ウルムースマッシャーⅢ',
          materials: [
            { name: '古龍骨', quantity: 3 },
            { name: '竜玉', quantity: 1 },
            { name: '浮空竜の上鱗', quantity: 7 },
            { name: 'ゴム質の堅殻', quantity: 5 },
          ],
        },
        {
          name: 'カラクルウルムーⅠ',
          materials: [
            { name: 'ゴム質の重殻', quantity: 1 },
            { name: 'シャムオスの厚鱗', quantity: 2 },
            { name: '浮空竜の厚毛皮', quantity: 3 },
            { name: '浮空竜の剛翼', quantity: 1 },
          ],
        },
        {
          name: 'カラクルウルムーⅡ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 5 },
            { name: 'ゴム質の重殻', quantity: 2 },
            { name: '氷霜をまとう皮', quantity: 2 },
            { name: '浮空竜の厚鱗', quantity: 3 },
          ],
        },
        {
          name: 'ニュクススマッシャーⅠ',
          materials: [
            { name: 'ゴム質の重殻', quantity: 2 },
            { name: '卒倒昏睡袋', quantity: 1 },
            { name: '浮眠竜の厚毛皮', quantity: 3 },
            { name: '浮眠竜の剛翼', quantity: 2 },
          ],
        },
        {
          name: 'ニュクススマッシャーⅡ',
          materials: [
            { name: '黒角竜の重甲', quantity: 2 },
            { name: '大竜玉', quantity: 1 },
            { name: '浮眠竜の剛翼', quantity: 3 },
            { name: '浮眠竜の厚鱗', quantity: 5 },
          ],
        },
        {
          name: 'ディノスマッシャーⅠ',
          materials: [
            { name: 'エルトライト鉱石', quantity: 6 },
            { name: '斬竜の厚鱗', quantity: 4 },
            { name: '斬竜の重牙', quantity: 2 },
            { name: '赤熱した溶炉嚢', quantity: 2 },
          ],
        },
        {
          name: 'ディノスマッシャーⅡ',
          materials: [
            { name: '兇爪竜の重牙', quantity: 2 },
            { name: '斬竜の獄炎状殻', quantity: 3 },
            { name: '斬竜の天鱗', quantity: 1 },
            { name: '硫斬竜の断剣尾', quantity: 2 },
          ],
        },
        {
          name: 'ドラグロアックスⅠ',
          materials: [
            { name: '土砂竜の甲殻', quantity: 3 },
            { name: '土砂竜の爪', quantity: 1 },
            { name: '土砂竜の背甲', quantity: 2 },
          ],
        },
        {
          name: 'ドラグロアックスⅡ',
          materials: [
            { name: 'ケストドンの甲殻', quantity: 3 },
            { name: '土砂竜の尻尾', quantity: 1 },
            { name: '土砂竜の爪', quantity: 2 },
            { name: 'ドラグライト鉱石', quantity: 3 },
          ],
        },
        {
          name: 'ドラグロアックスⅢ',
          materials: [
            { name: '土砂竜の爪', quantity: 4 },
            { name: '土砂竜の頭殻', quantity: 2 },
            { name: '角竜の甲殻', quantity: 3 },
            { name: '上竜骨', quantity: 3 },
          ],
        },
        {
          name: 'ボルボグランダーⅠ',
          materials: [
            { name: '土砂竜の鋭爪', quantity: 2 },
            { name: '土砂竜の堅殻', quantity: 3 },
            { name: '土砂竜の堅甲', quantity: 2 },
            { name: 'ケストドンの堅殻', quantity: 5 },
          ],
        },
        {
          name: 'ボルボグランダーⅡ',
          materials: [
            { name: '角竜の堅殻', quantity: 3 },
            { name: '土砂竜の鋭爪', quantity: 4 },
            { name: '土砂竜の堅殻', quantity: 3 },
            { name: 'ガストドンの堅殻', quantity: 5 },
          ],
        },
        {
          name: 'ボルボグランダーⅢ',
          materials: [
            { name: '土砂竜の鋭爪', quantity: 5 },
            { name: '土砂竜の堅甲', quantity: 5 },
            { name: '竜玉', quantity: 1 },
            { name: '滅尽龍の大角', quantity: 1 },
          ],
        },
        {
          name: 'ボルボドーザーⅠ',
          materials: [
            { name: 'ケストドンの重殻', quantity: 2 },
            { name: '土砂竜の剛爪', quantity: 1 },
            { name: '土砂竜の重殻', quantity: 2 },
            { name: '土砂竜の重甲', quantity: 2 },
          ],
        },
        {
          name: 'ボルボドーザーⅡ',
          materials: [
            { name: '角竜の重殻', quantity: 2 },
            { name: '重竜骨', quantity: 3 },
            { name: '土砂竜の剛爪', quantity: 2 },
            { name: '土砂竜の重頭殻', quantity: 1 },
          ],
        },
        {
          name: 'ディオススマッシャーⅠ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 3 },
            { name: '砕竜の重殻', quantity: 4 },
            { name: '砕竜の重頭殻', quantity: 2 },
            { name: '光る粘菌', quantity: 3 },
          ],
        },
        {
          name: 'ディオススマッシャーⅡ',
          materials: [
            { name: '砕竜の剛鉄拳', quantity: 3 },
            { name: '砕竜の靭尾', quantity: 2 },
            { name: '蒼火竜の剛翼', quantity: 2 },
            { name: '光る粘菌', quantity: 5 },
          ],
        },
        {
          name: 'ブロスアックスⅠ',
          materials: [
            { name: '角竜の牙', quantity: 2 },
            { name: 'ねじれた角', quantity: 1 },
            { name: '角竜の甲殻', quantity: 4 },
            { name: '上竜骨', quantity: 3 },
          ],
        },
        {
          name: 'ブロスアックスⅡ',
          materials: [
            { name: '角竜の背甲', quantity: 4 },
            { name: '角竜の尾甲', quantity: 2 },
            { name: '尖竜骨', quantity: 4 },
            { name: '角竜の骨髄', quantity: 1 },
          ],
        },
        {
          name: 'デモン',
          materials: [
            { name: 'いにしえの龍骨', quantity: 2 },
            { name: '黒角竜の堅殻', quantity: 6 },
            { name: '上質な黒巻き角', quantity: 3 },
            { name: '冥灯龍の尻尾', quantity: 2 },
          ],
        },
        {
          name: 'デモン改',
          materials: [
            { name: '角竜の重殻', quantity: 6 },
            { name: '角竜の重甲', quantity: 5 },
            { name: '堅牢なねじれた角', quantity: 3 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: 'ハデス',
          materials: [
            { name: '堅牢な黒巻き角', quantity: 0 },
            { name: '剛竜骨', quantity: 0 },
            { name: '黒角竜の重殻', quantity: 0 },
            { name: '大竜玉', quantity: 0 },
          ],
        },
        {
          name: 'フラムエルシスカ',
          materials: [
            { name: '蛮顎竜の鱗', quantity: 3 },
            { name: '蛮顎竜の牙', quantity: 2 },
            { name: '蛮顎竜の毛皮', quantity: 2 },
            { name: '火炎袋', quantity: 2 },
          ],
        },
        {
          name: 'フラムエルシスカ改',
          materials: [
            { name: '蛮顎竜の逆鱗', quantity: 1 },
            { name: '爆炎袋', quantity: 3 },
            { name: '蛮顎竜の上鱗', quantity: 5 },
            { name: '蛮顎竜の鋭牙', quantity: 4 },
          ],
        },
        {
          name: '蛮顎剣斧フラムシスカ',
          materials: [
            { name: '蛮顎竜の上毛皮', quantity: 4 },
            { name: '蛮顎竜の大鼻骨', quantity: 2 },
            { name: '蛮顎竜の宝玉', quantity: 1 },
            { name: '屍套龍の鋭牙', quantity: 5 },
          ],
        },
        {
          name: '蛮顎剣斧フラムシスカ改',
          materials: [
            { name: 'エルトライト鉱石', quantity: 3 },
            { name: '蛮顎竜の重牙', quantity: 1 },
            { name: '蛮顎竜の厚鱗', quantity: 2 },
            { name: '業炎袋', quantity: 1 },
          ],
        },
        {
          name: '蛮炎剣斧ロギンシスカ',
          materials: [
            { name: '蛮顎竜の重鼻骨', quantity: 2 },
            { name: '蒼火竜の重殻', quantity: 2 },
            { name: '蛮顎竜の厚毛皮', quantity: 3 },
            { name: '蛮顎竜の靭尾', quantity: 1 },
          ],
        },
        {
          name: '雷顎剣斧ドネルシスカ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 2 },
            { name: '剛竜骨', quantity: 3 },
            { name: '雷顎竜の厚鱗', quantity: 2 },
            { name: '雷顎竜の重牙', quantity: 1 },
          ],
        },
        {
          name: '雷顎剣斧ドネルシスカ改',
          materials: [
            { name: '雷顎竜の厚毛皮', quantity: 3 },
            { name: '雷顎竜の重鼻骨', quantity: 2 },
            { name: '雷顎竜の靭尾', quantity: 1 },
            { name: '雷電袋', quantity: 3 },
          ],
        },
        {
          name: '蛮雷剣斧カーリシスカ',
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
      name: '龍骨系',
      weapons: [
        {
          name: '龍骨剣斧Ⅰ',
          materials: [
            { name: 'いびつな狂骨', quantity: 5 },
            { name: '強固な岩骨', quantity: 5 },
            { name: '太古の大骨', quantity: 5 },
            { name: 'サンゴの紅骨', quantity: 5 },
          ],
        },
        {
          name: '龍骨剣斧Ⅱ',
          materials: [
            { name: '竜骨【大】', quantity: 8 },
            { name: '頑丈な骨', quantity: 8 },
            { name: '上竜骨', quantity: 6 },
          ],
        },
        {
          name: '龍骨剣斧Ⅲ',
          materials: [
            { name: '古龍骨', quantity: 10 },
            { name: '竜玉', quantity: 1 },
            { name: 'いにしえの龍骨', quantity: 2 },
            { name: '荒々しい蛮骨', quantity: 4 },
          ],
        },
        {
          name: '龍封じの剣斧Ⅰ',
          materials: [
            { name: '頑強な重骨', quantity: 6 },
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '剛竜骨', quantity: 3 },
            { name: '重竜骨', quantity: 4 },
          ],
        },
        {
          name: '龍封じの剣斧Ⅱ',
          materials: [
            { name: '剛竜骨', quantity: 4 },
            { name: '太古龍骨', quantity: 6 },
            { name: '大竜玉', quantity: 1 },
            { name: '溶岩竜の特上ヒレ', quantity: 2 },
          ],
        },
        {
          name: '諸行無常ー灯籠ー',
          materials: [
            { name: '地啼竜の慈鱗', quantity: 6 },
            { name: '地啼竜の慈眼殻', quantity: 2 },
            { name: '地啼竜の慈爪', quantity: 4 },
            { name: '地啼竜の顕玉', quantity: 1 },
          ],
        },
        {
          name: '雷斧',
          materials: [
            { name: 'ライトクリスタル', quantity: 1 },
            { name: '幻獣の雷角', quantity: 3 },
            { name: '幻獣の皮', quantity: 3 },
            { name: '幻獣の尾', quantity: 1 },
          ],
        },
        {
          name: '雷斧改',
          materials: [
            { name: '幻獣のたてがみ', quantity: 4 },
            { name: '龍脈の結晶', quantity: 5 },
            { name: '幻獣の上皮', quantity: 5 },
            { name: '幻獣の蒼角', quantity: 4 },
          ],
        },
        {
          name: '断雷斧キリン',
          materials: [
            { name: 'ノヴァクリスタル', quantity: 2 },
            { name: '冥灯龍の白殻', quantity: 4 },
            { name: '幻獣の雷尾', quantity: 3 },
            { name: '幻獣の蒼角', quantity: 6 },
          ],
        },
        {
          name: '雷公宝斧キリン',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '幻獣の銀たてがみ', quantity: 3 },
            { name: '幻獣の特上皮', quantity: 4 },
            { name: '幻獣の剛蒼角', quantity: 3 },
          ],
        },
        {
          name: 'ヒドラストロビラ',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '溟龍の特上皮', quantity: 5 },
            { name: '溟龍の剛爪', quantity: 4 },
            { name: '溟龍の幻曜ヒゲ', quantity: 2 },
          ],
        },
        {
          name: 'ネロストロビラ',
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
          name: '黒鋼の剣斧Ⅰ',
          materials: [
            { name: '大地の結晶', quantity: 10 },
            { name: 'ライトクリスタル', quantity: 1 },
            { name: '深海の結晶', quantity: 10 },
            { name: '龍脈の結晶', quantity: 10 },
          ],
        },
        {
          name: '黒鋼の剣斧Ⅱ',
          materials: [
            { name: '獄炎石', quantity: 1 },
            { name: '竜玉', quantity: 1 },
            { name: 'カブレライト鉱石', quantity: 10 },
            { name: 'ユニオン鉱石', quantity: 5 },
          ],
        },
        {
          name: 'テオ＝アルクス',
          materials: [
            { name: '炎王龍のたてがみ', quantity: 2 },
            { name: '炎王龍の堅殻', quantity: 5 },
            { name: '炎龍の塵粉', quantity: 4 },
            { name: '炎龍の尖爪', quantity: 2 },
          ],
        },
        {
          name: 'テオ＝キャッスル',
          materials: [
            { name: '炎王龍の尖角', quantity: 5 },
            { name: '炎龍の尖爪', quantity: 2 },
            { name: '炎龍の宝玉', quantity: 1 },
            { name: '冥灯龍の幽鱗', quantity: 5 },
          ],
        },
        {
          name: 'テスカデルバルテ',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '炎王龍の大たてがみ', quantity: 4 },
            { name: '炎王龍の剛角', quantity: 5 },
            { name: '炎龍の剛爪', quantity: 4 },
          ],
        },
        {
          name: 'ゼノ＝マルトーシュ',
          materials: [
            { name: '冥灯龍の白殻', quantity: 6 },
            { name: '冥灯龍の幽爪', quantity: 4 },
            { name: '冥灯龍の幽玉', quantity: 1 },
            { name: '冥灯龍の尻尾', quantity: 2 },
          ],
        },
        {
          name: 'ゼノ＝マルトーシュ改',
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
          name: 'テュランノス',
          materials: [
            { name: '恐暴竜の黒鱗', quantity: 6 },
            { name: '恐暴竜の大牙', quantity: 3 },
            { name: '恐暴竜の鉤爪', quantity: 2 },
            { name: '恐暴竜の唾液', quantity: 2 },
          ],
        },
        {
          name: 'テラーテュランノス',
          materials: [
            { name: '恐暴竜の大牙', quantity: 5 },
            { name: '恐暴竜の頭殻', quantity: 2 },
            { name: '恐暴竜の宝玉', quantity: 1 },
            { name: '古龍の血', quantity: 5 },
          ],
        },
        {
          name: '業斧グラバリタ',
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
          name: 'エンプレスアクス',
          materials: [
            { name: '炎妃龍のたてがみ', quantity: 3 },
            { name: '炎妃龍の宝玉', quantity: 1 },
            { name: '炎妃龍の尖角', quantity: 3 },
            { name: '炎妃龍の上鱗', quantity: 4 },
          ],
        },
        {
          name: 'エンプレスアクス・冥灯',
          materials: [
            { name: '冥灯龍の幽角', quantity: 3 },
            { name: '冥灯龍の幽玉', quantity: 1 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の尻尾', quantity: 2 },
          ],
        },
        {
          name: 'エンプレスアクス・滅尽',
          materials: [
            { name: '滅尽龍の宝玉', quantity: 1 },
            { name: '滅尽龍の大角', quantity: 3 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の翼', quantity: 3 },
          ],
        },
        {
          name: 'エンプレスアクス・炎妃',
          materials: [
            { name: '炎王龍の尖角', quantity: 3 },
            { name: '爆鱗竜の宝玉', quantity: 1 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の尖角', quantity: 2 },
          ],
        },
        {
          name: '魂焔の剣斧・炎妃',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '炎妃龍の厚鱗', quantity: 4 },
            { name: '炎妃龍の剛角', quantity: 4 },
            { name: '炎妃龍の大たてがみ', quantity: 4 },
          ],
        },
        {
          name: '魂焔の剣斧・滅尽',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '殲滅の大剛角', quantity: 3 },
            { name: '無窮の新生殻', quantity: 3 },
            { name: '炎妃龍の厚鱗', quantity: 4 },
          ],
        },
        {
          name: '魂焔の剣斧・冥灯',
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
      name: '金獅子系',
      weapons: [
        {
          name: '金剛角斧',
          materials: [
            { name: '金獅子の重牙', quantity: 2 },
            { name: '金獅子の剛爪', quantity: 1 },
            { name: '金獅子の剛角', quantity: 1 },
            { name: '金獅子の黒荒毛', quantity: 2 },
          ],
        },
        {
          name: '金剛角斧カンナリ',
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
          name: '鬼神角斧【雷火豊】',
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
          name: '獄界の斬裂斧',
          materials: [
            { name: '獄狼竜の滅龍毛', quantity: 2 },
            { name: '獄狼竜の滅龍殻', quantity: 2 },
            { name: '獄狼竜の剛角', quantity: 1 },
            { name: '獄狼竜の剛爪', quantity: 1 },
          ],
        },
        {
          name: '獄界の斬裂斧改',
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
          name: '砕光の剣斧',
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
          name: '黒の剣斧',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '煌黒龍の凶爪', quantity: 3 },
            { name: '天を統べる角', quantity: 1 },
            { name: '煌黒龍の天鱗', quantity: 3 },
          ],
        },
        {
          name: 'ブラックハーベスト',
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
          name: '黒龍剣斧',
          materials: [
            { name: '黒龍の厚鱗', quantity: 3 },
            { name: '黒龍の重胸殻', quantity: 1 },
            { name: '黒龍の剛角', quantity: 1 },
            { name: '黒龍の邪眼', quantity: 1 },
          ],
        },
        {
          name: '真・黒龍剣斧',
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
          name: 'ギルドパレスクライヴ',
          materials: [
            { name: 'グラシスメタル', quantity: 5 },
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '琥珀色の重牙', quantity: 2 },
            { name: '祭典チケット', quantity: 2 },
          ],
        },
        {
          name: '宮廷衛剣斧【巨星】',
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

export default slashAx
