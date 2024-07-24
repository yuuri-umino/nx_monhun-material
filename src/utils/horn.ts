import { WeaponType } from './materialsTypes'

const greatsword: WeaponType = {
  type: '狩猟笛',
  derivations: [
    {
      name: '防衛隊系',
      weapons: [
        {
          name: '防衛隊支援型大鼓Ⅰ',
          materials: [{ name: '鉄鉱石', quantity: 1 }],
        },
        {
          name: '防衛隊支援型大鼓Ⅱ',
          materials: [{ name: '蛮顎竜の鱗', quantity: 1 }],
        },
        {
          name: '防衛隊支援型大鼓Ⅲ',
          materials: [{ name: '勇気の証', quantity: 1 }],
        },
        {
          name: '防衛隊支援型大鼓Ⅳ',
          materials: [{ name: '桜火竜の上鱗', quantity: 1 }],
        },
        {
          name: '防衛隊支援型大鼓Ⅴ',
          materials: [{ name: '不滅の龍鱗', quantity: 1 }],
        },
      ],
    },
    {
      name: '鉱石素材系',
      weapons: [
        {
          name: 'メタルバグパイプⅠ',
          materials: [{ name: '鉄鉱石', quantity: 1 }],
        },
        {
          name: 'メタルバグパイプⅡ',
          materials: [{ name: '鉄鉱石', quantity: 2 }],
        },
        {
          name: 'メタルバグパイプⅢ',
          materials: [
            { name: '大地の結晶', quantity: 2 },
            { name: '鉄鉱石', quantity: 5 },
            { name: 'マカライト鉱石', quantity: 2 },
          ],
        },
        {
          name: 'グレートバグパイプⅠ',
          materials: [
            { name: 'マカライト鉱石', quantity: 5 },
            { name: '竜骨【中】', quantity: 2 },
            { name: 'ドラグライト鉱石', quantity: 2 },
          ],
        },
        {
          name: 'グレートバグパイプⅡ',
          materials: [
            { name: 'マカライト鉱石', quantity: 10 },
            { name: 'ドラグライト鉱石', quantity: 5 },
            { name: '上竜骨', quantity: 2 },
            { name: '深海の結晶', quantity: 2 },
          ],
        },
        {
          name: 'グレートバグパイプⅢ',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 5 },
            { name: 'カブレライト鉱石', quantity: 8 },
            { name: '龍脈の結晶', quantity: 2 },
          ],
        },
        {
          name: 'フォルティッシモⅠ',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 10 },
            { name: 'カブレライト鉱石', quantity: 5 },
            { name: '龍脈の結晶', quantity: 3 },
            { name: 'ユニオン鉱石', quantity: 8 },
          ],
        },
        {
          name: 'フォルティッシモⅡ',
          materials: [
            { name: '古龍の血', quantity: 2 },
            { name: '獄炎石', quantity: 1 },
            { name: 'カブレライト鉱石', quantity: 20 },
            { name: 'ユニオン鉱石', quantity: 13 },
          ],
        },
        {
          name: 'スフォルツァンドⅠ',
          materials: [
            { name: 'カブレライト鉱石', quantity: 4 },
            { name: '霊脈の結晶', quantity: 2 },
            { name: 'グラシスメタル', quantity: 1 },
            { name: 'エルトライト鉱石', quantity: 2 },
          ],
        },
        {
          name: 'スフォルツァンドⅡ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 2 },
            { name: 'エルトライト鉱石', quantity: 4 },
            { name: '重竜骨', quantity: 3 },
            { name: 'デプスライト鉱石', quantity: 2 },
          ],
        },
        {
          name: 'スフォルツァンドⅢ',
          materials: [
            { name: '古龍の浄血', quantity: 3 },
            { name: 'メランジェ鉱石', quantity: 3 },
            { name: 'エルトライト鉱石', quantity: 6 },
            { name: 'ピュアクリスタル', quantity: 1 },
          ],
        },
        {
          name: 'シャミセン【鳥】',
          materials: [
            { name: '幻鳥竜玉', quantity: 1 },
            { name: '黒狼鳥の銀狼毛', quantity: 4 },
            { name: '黒狼鳥の厚鱗', quantity: 3 },
            { name: '黒狼鳥の地獄耳', quantity: 2 },
          ],
        },
        {
          name: 'シャミセン【狼】',
          materials: [
            { name: '大竜玉', quantity: 1 },
            { name: 'イカしたクチバシ', quantity: 3 },
            { name: '黒狼鳥の剛翼', quantity: 2 },
            { name: '傷痕の紫甲殻', quantity: 3 },
          ],
        },
        {
          name: 'ネルガルグルーヴ',
          materials: [
            { name: '滅尽龍の再生殻', quantity: 4 },
            { name: '滅尽龍の尻尾', quantity: 2 },
            { name: '滅尽龍の堅殻', quantity: 2 },
            { name: '滅尽龍の尖爪', quantity: 3 },
          ],
        },
        {
          name: '寂滅の一節',
          materials: [
            { name: '滅尽龍の宝玉', quantity: 1 },
            { name: '滅尽龍の尖爪', quantity: 5 },
            { name: '滅尽龍の大角', quantity: 5 },
            { name: '冥灯龍の幽角', quantity: 2 },
          ],
        },
        {
          name: '寂滅の一節【魂】',
          materials: [
            { name: '殲滅の大剛角', quantity: 3 },
            { name: '滅尽龍の剛爪', quantity: 4 },
            { name: '無窮の新生殻', quantity: 5 },
            { name: '古龍の大宝玉', quantity: 1 },
          ],
        },
        {
          name: 'サンダーガイダⅠ',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 5 },
            { name: '電気袋', quantity: 1 },
            { name: '飛雷竜の爪', quantity: 2 },
            { name: '飛雷竜の電極針', quantity: 1 },
          ],
        },
        {
          name: 'サンダーガイダⅡ',
          materials: [
            { name: '上竜骨', quantity: 2 },
            { name: '深海の結晶', quantity: 3 },
            { name: '飛雷竜の電極針', quantity: 2 },
            { name: '飛雷竜の皮膜', quantity: 2 },
          ],
        },
        {
          name: 'ライトニングドラムⅠ',
          materials: [
            { name: 'ランゴスタの薄羽', quantity: 3 },
            { name: '飛雷竜の上毛皮', quantity: 3 },
            { name: '飛雷竜の上鱗', quantity: 4 },
            { name: 'カブレライト鉱石', quantity: 5 },
          ],
        },
        {
          name: 'ライトニングドラムⅡ',
          materials: [
            { name: '飛雷竜の皮膜', quantity: 4 },
            { name: '飛雷竜の雷極針', quantity: 2 },
            { name: '電撃袋', quantity: 3 },
            { name: 'ユニオン鉱石', quantity: 5 },
          ],
        },
        {
          name: 'ライトニングドラムⅢ',
          materials: [
            { name: '古龍の血', quantity: 3 },
            { name: '竜玉', quantity: 1 },
            { name: '飛雷竜の雷極針', quantity: 4 },
            { name: '飛雷竜の尖爪', quantity: 6 },
          ],
        },
        {
          name: 'ライトニングドラムⅣ',
          materials: [
            { name: '飛雷竜の厚毛皮', quantity: 2 },
            { name: '飛雷竜の剛爪', quantity: 1 },
            { name: '飛雷竜の厚鱗', quantity: 2 },
            { name: '雷電袋', quantity: 1 },
          ],
        },
        {
          name: '王琴トドロキ改',
          materials: [
            { name: '雷狼竜の雷電毛', quantity: 4 },
            { name: '雷狼竜の剛角', quantity: 3 },
            { name: '雷狼竜の天玉', quantity: 1 },
            { name: '超電雷光虫', quantity: 5 },
          ],
        },
        {
          name: '王琴トドロキ',
          materials: [
            { name: '雷電袋', quantity: 3 },
            { name: '雷狼竜の雷電殻', quantity: 2 },
            { name: '雷狼竜の重殻', quantity: 5 },
            { name: '雷狼竜の剛爪', quantity: 3 },
          ],
        },
        {
          name: '王牙琴【鳴雷】',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '雷狼竜の雷電殻', quantity: 5 },
            { name: '雷狼竜の剛角', quantity: 2 },
            { name: '霊脈の剛竜骨', quantity: 5 },
          ],
        },
        {
          name: 'クルルドゥダⅠ',
          materials: [
            { name: '掻鳥の鱗', quantity: 3 },
            { name: '掻鳥の皮', quantity: 2 },
            { name: '掻鳥のクチバシ', quantity: 1 },
          ],
        },
        {
          name: 'クルルドゥダⅡ',
          materials: [
            { name: '強固な岩骨', quantity: 3 },
            { name: '掻鳥の飾り羽', quantity: 2 },
            { name: '掻鳥のクチバシ', quantity: 2 },
            { name: '骨鎚竜の鱗', quantity: 3 },
          ],
        },
        {
          name: 'クルルドゥダⅢ',
          materials: [
            { name: 'いびつな狂骨', quantity: 3 },
            { name: '掻鳥の飾り羽', quantity: 4 },
            { name: '掻鳥のクチバシ', quantity: 2 },
            { name: '惨爪竜の爪', quantity: 2 },
          ],
        },
        {
          name: 'リーシャタブルⅠ',
          materials: [
            { name: '掻鳥の上鱗', quantity: 6 },
            { name: '掻鳥の上皮', quantity: 4 },
            { name: '掻鳥の大クチバシ', quantity: 3 },
          ],
        },
        {
          name: 'リーシャタブルⅡ',
          materials: [
            { name: '掻鳥の大飾り羽', quantity: 3 },
            { name: '掻鳥の大クチバシ', quantity: 4 },
            { name: '荒々しい蛮骨', quantity: 3 },
            { name: '惨爪竜の尖爪', quantity: 2 },
          ],
        },
        {
          name: 'リーシャタブルⅢ',
          materials: [
            { name: '掻鳥の大飾り羽', quantity: 4 },
            { name: '掻鳥の大クチバシ', quantity: 5 },
            { name: '鳥竜玉', quantity: 1 },
            { name: '滅尽龍の尖爪', quantity: 2 },
          ],
        },
        {
          name: 'ネスルジェレサⅠ',
          materials: [
            { name: '頑強な重骨', quantity: 2 },
            { name: '掻鳥の巨大クチバシ', quantity: 1 },
            { name: '掻鳥の厚皮', quantity: 2 },
            { name: '掻鳥の厚鱗', quantity: 3 },
          ],
        },
        {
          name: 'ネスルジェレサⅡ',
          materials: [
            { name: '迅竜の重牙', quantity: 2 },
            { name: '重竜骨', quantity: 3 },
            { name: '掻鳥の巨大クチバシ', quantity: 2 },
            { name: '掻鳥の特大飾り羽', quantity: 3 },
          ],
        },
        {
          name: 'ストライプドラゴング',
          materials: [
            { name: '頑強な重骨', quantity: 5 },
            { name: '轟竜の厚鱗', quantity: 4 },
            { name: '轟竜の剛爪', quantity: 3 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: 'ストライプドラゴング改',
          materials: [
            { name: '轟竜の重牙', quantity: 4 },
            { name: '轟竜の靭尾', quantity: 1 },
            { name: '轟竜の天鱗', quantity: 1 },
            { name: '堅牢な黒巻き角', quantity: 2 },
          ],
        },
        {
          name: '轟鼓【虎鐘】',
          materials: [
            { name: '古龍の浄血', quantity: 5 },
            { name: '轟竜の重牙', quantity: 2 },
            { name: '轟竜の重殻', quantity: 4 },
            { name: '鋼龍の剛爪', quantity: 2 },
          ],
        },
        {
          name: 'カーサスドラゴング',
          materials: [
            { name: '大竜玉', quantity: 1 },
            { name: '黒轟竜の厚鱗', quantity: 5 },
            { name: '黒轟竜の重牙', quantity: 2 },
            { name: '黒轟竜の剛爪', quantity: 3 },
          ],
        },
        {
          name: '吼鼓【鬼咬】',
          materials: [
            { name: '轟竜の天鱗', quantity: 1 },
            { name: '黒轟竜の重牙', quantity: 3 },
            { name: '黒轟竜の剛爪', quantity: 4 },
            { name: '歴戦の黒アギト', quantity: 5 },
          ],
        },
        {
          name: 'ヴァルキリコーダー',
          materials: [
            { name: '雌火竜の甲殻', quantity: 4 },
            { name: '雌火竜の鱗', quantity: 5 },
            { name: '雌火竜の棘', quantity: 3 },
          ],
        },
        {
          name: 'クイーンリコーダー',
          materials: [
            { name: '雌火竜の逆鱗', quantity: 1 },
            { name: '雌火竜の堅殻', quantity: 4 },
            { name: '雌火竜の上鱗', quantity: 5 },
            { name: '雌火竜の上棘', quantity: 3 },
          ],
        },
        {
          name: 'サクラノリコーダー',
          materials: [
            { name: '雌火竜の上棘', quantity: 4 },
            { name: '竜玉', quantity: 1 },
            { name: '桜火竜の堅殻', quantity: 4 },
            { name: '桜火竜の上鱗', quantity: 5 },
          ],
        },
        {
          name: 'ロイヤルリコーダー',
          materials: [
            { name: '古龍の血', quantity: 3 },
            { name: '雌火竜の紅玉', quantity: 1 },
            { name: '雌火竜の上棘', quantity: 5 },
            { name: '桜火竜の上鱗', quantity: 6 },
          ],
        },
        {
          name: 'ロイヤルリコーダー改',
          materials: [
            { name: '雌火竜の厚鱗', quantity: 5 },
            { name: '雌火竜の重殻', quantity: 4 },
            { name: '雌火竜の秘棘', quantity: 3 },
          ],
        },
        {
          name: 'ハイネスリコーダー',
          materials: [
            { name: '桜火竜の厚鱗', quantity: 4 },
            { name: '桜火竜の重殻', quantity: 3 },
            { name: '剛竜骨', quantity: 5 },
            { name: '雌火竜の天鱗', quantity: 1 },
          ],
        },
        {
          name: 'ゴルトリコーダー',
          materials: [
            { name: '火竜の煌液', quantity: 1 },
            { name: '金火竜の重殻', quantity: 4 },
            { name: '金火竜の厚鱗', quantity: 5 },
            { name: '金火竜の秘棘', quantity: 3 },
          ],
        },
        {
          name: 'アクアバグパイプⅠ',
          materials: [
            { name: '大地の結晶', quantity: 3 },
            { name: '泥魚竜の鱗', quantity: 3 },
            { name: '泥魚竜の甲殻', quantity: 1 },
            { name: '水袋', quantity: 1 },
          ],
        },
        {
          name: 'アクアバグパイプⅡ',
          materials: [
            { name: '咬魚の皮', quantity: 3 },
            { name: '泥魚竜の牙', quantity: 2 },
            { name: '泥魚竜のヒレ', quantity: 3 },
            { name: 'ドラグライト鉱石', quantity: 5 },
          ],
        },
        {
          name: 'アクアバグパイプⅢ',
          materials: [
            { name: '咬魚のヒゲ', quantity: 3 },
            { name: '泥魚竜の牙', quantity: 4 },
            { name: '上竜骨', quantity: 2 },
            { name: '深海の結晶', quantity: 3 },
          ],
        },
        {
          name: 'ウォータータムタムⅠ',
          materials: [
            { name: '泥魚竜の上鱗', quantity: 3 },
            { name: '泥魚竜の堅殻', quantity: 2 },
            { name: '咬魚の上皮', quantity: 5 },
            { name: 'カブレライト鉱石', quantity: 5 },
          ],
        },
        {
          name: 'ウォータータムタムⅡ',
          materials: [
            { name: '泥魚竜の上ヒレ', quantity: 4 },
            { name: '大水袋', quantity: 3 },
            { name: '咬魚の大ヒゲ', quantity: 3 },
            { name: 'ユニオン鉱石', quantity: 5 },
          ],
        },
        {
          name: 'ウォータータムタムⅢ',
          materials: [
            { name: '古龍の血', quantity: 3 },
            { name: '竜玉', quantity: 1 },
            { name: '泥魚竜の上ヒレ', quantity: 6 },
            { name: '泥魚竜の鋭牙', quantity: 5 },
          ],
        },
        {
          name: 'ウォータータムタムⅣ',
          materials: [
            { name: '咬魚の厚皮', quantity: 2 },
            { name: '泥魚竜の厚鱗', quantity: 3 },
            { name: '泥魚竜の重牙', quantity: 1 },
            { name: '泥魚竜の特上ヒレ', quantity: 1 },
          ],
        },
        {
          name: 'ラグーナドラムⅠ',
          materials: [
            { name: '水妖鳥の剛翼', quantity: 2 },
            { name: '水妖鳥の厚鱗', quantity: 3 },
            { name: 'デプスライト鉱石', quantity: 2 },
            { name: '特大水袋', quantity: 2 },
          ],
        },
        {
          name: 'ラグーナドラムⅡ',
          materials: [
            { name: '剛竜骨', quantity: 3 },
            { name: '水妖鳥の靭尾', quantity: 1 },
            { name: '水妖鳥の特大喉袋', quantity: 1 },
            { name: '硫斬竜の重牙', quantity: 2 },
          ],
        },
        {
          name: 'ヒドゥントーン',
          materials: [
            { name: 'メランジェ鉱石', quantity: 1 },
            { name: '迅竜の厚鱗', quantity: 3 },
            { name: '迅竜の重牙', quantity: 2 },
            { name: '迅竜の重尾棘', quantity: 2 },
          ],
        },
        {
          name: 'ヒドゥントーン改',
          materials: [
            { name: '迅竜の天鱗', quantity: 1 },
            { name: '迅竜の靭尾', quantity: 1 },
            { name: '迅竜の剛刃翼', quantity: 4 },
            { name: '雷顎竜の重牙', quantity: 3 },
          ],
        },
        {
          name: '夜笛【逢魔】',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '迅竜の重牙', quantity: 4 },
            { name: '迅竜の剛刃翼', quantity: 4 },
            { name: '闇を食む牙', quantity: 2 },
          ],
        },
        {
          name: 'グレイスバグパイプⅠ',
          materials: [
            { name: '風漂竜の鱗', quantity: 4 },
            { name: '風漂竜の爪', quantity: 3 },
            { name: '氷結袋', quantity: 2 },
          ],
        },
        {
          name: 'グレイスバグパイプⅡ',
          materials: [
            { name: '浮空竜の翼', quantity: 4 },
            { name: '風漂竜の爪', quantity: 4 },
            { name: '風漂竜の逆鱗', quantity: 1 },
            { name: '風漂竜の尾膜', quantity: 3 },
          ],
        },
        {
          name: 'レイ＝セクタード',
          materials: [
            { name: '鋼龍の尖爪', quantity: 2 },
            { name: '風漂竜の上皮', quantity: 3 },
            { name: '風漂竜の尖爪', quantity: 5 },
            { name: '風漂竜の宝玉', quantity: 1 },
          ],
        },
        {
          name: 'レイ＝セクタード改',
          materials: [
            { name: '凍てついた氷骨', quantity: 4 },
            { name: '風漂竜の剛爪', quantity: 3 },
            { name: '風漂竜の厚鱗', quantity: 4 },
            { name: '風漂竜の重尾膜', quantity: 1 },
          ],
        },
        {
          name: 'ブリーナ＝セクタード',
          materials: [
            { name: '漆黒の氷刃爪', quantity: 2 },
            { name: '瞬間凍結袋', quantity: 4 },
            { name: '氷霜をまとう皮', quantity: 5 },
            { name: '冷厳なる翼', quantity: 2 },
          ],
        },
        {
          name: 'リルン＝グレイシア',
          materials: [
            { name: '漆黒の氷刃爪', quantity: 4 },
            { name: '冰龍の剛爪', quantity: 2 },
            { name: '風漂竜の天鱗', quantity: 1 },
            { name: '冷厳なる翼', quantity: 2 },
          ],
        },
      ],
    },
    {
      name: '骨素材系',
      weapons: [
        {
          name: 'ボーンホルンⅠ',
          materials: [{ name: '竜骨【小】', quantity: 1 }],
        },
        {
          name: 'ボーンホルンⅡ',
          materials: [{ name: '竜骨【小】', quantity: 2 }],
        },
        {
          name: 'ボーンホルンⅢ',
          materials: [
            { name: '太古の大骨', quantity: 1 },
            { name: '竜骨【中】', quantity: 2 },
          ],
        },
        {
          name: 'ハードボーンホルンⅠ',
          materials: [
            { name: '強固な岩骨', quantity: 2 },
            { name: '竜骨【大】', quantity: 1 },
            { name: '竜骨【中】', quantity: 5 },
          ],
        },
        {
          name: 'ハードボーンホルンⅡ',
          materials: [
            { name: '竜骨【大】', quantity: 1 },
            { name: '頑丈な骨', quantity: 4 },
            { name: '上竜骨', quantity: 2 },
          ],
        },
        {
          name: 'ハードボーンホルンⅢ',
          materials: [
            { name: '上竜骨', quantity: 2 },
            { name: '尖竜骨', quantity: 2 },
            { name: '上質な堅骨', quantity: 2 },
          ],
        },
        {
          name: 'ヘビィボーンホルンⅠ',
          materials: [
            { name: '堅竜骨', quantity: 4 },
            { name: '上竜骨', quantity: 10 },
            { name: '尖竜骨', quantity: 6 },
          ],
        },
        {
          name: 'ヘビィボーンホルンⅡ',
          materials: [
            { name: '堅竜骨', quantity: 6 },
            { name: '古龍骨', quantity: 4 },
            { name: '上質な堅骨', quantity: 20 },
            { name: 'いにしえの龍骨', quantity: 1 },
          ],
        },
        {
          name: 'マッドボーンホルンⅠ',
          materials: [
            { name: '堅竜骨', quantity: 4 },
            { name: '上質な堅骨', quantity: 4 },
            { name: '頑強な重骨', quantity: 2 },
            { name: '凍てついた氷骨', quantity: 1 },
          ],
        },
        {
          name: 'マッドボーンホルンⅡ',
          materials: [
            { name: '頑強な重骨', quantity: 4 },
            { name: 'モンスターの特濃', quantity: 2 },
            { name: '剛竜骨', quantity: 2 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: 'マッドボーンホルンⅢ',
          materials: [
            { name: '頑強な重骨', quantity: 6 },
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '剛竜骨', quantity: 4 },
            { name: '太古龍骨', quantity: 3 },
          ],
        },
        {
          name: 'アイスシュピール',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '氷晶の厚龍鱗', quantity: 5 },
            { name: '冰龍の剛爪', quantity: 3 },
            { name: '冰龍の靭尾', quantity: 1 },
          ],
        },
        {
          name: '氷琴アイスフィール',
          materials: [
            { name: '冰龍の冠角', quantity: 4 },
            { name: '冰龍の剛爪', quantity: 4 },
            { name: '冰龍の零玉', quantity: 1 },
            { name: '地啼竜の慈爪', quantity: 3 },
          ],
        },
        {
          name: 'ガマルホルンⅠ',
          materials: [
            { name: '岩賊竜の上皮', quantity: 4 },
            { name: '岩賊竜の上鱗', quantity: 6 },
            { name: '岩賊竜の尖爪', quantity: 4 },
          ],
        },
        {
          name: 'ガマルホルンⅡ',
          materials: [
            { name: '獄炎の龍鱗', quantity: 4 },
            { name: '竜玉', quantity: 1 },
            { name: '岩賊竜の顎', quantity: 4 },
            { name: '岩賊竜の尻尾', quantity: 3 },
          ],
        },
        {
          name: 'ガマルコーラスⅠ',
          materials: [
            { name: 'ガストドンの重殻', quantity: 2 },
            { name: '岩賊竜の剛爪', quantity: 2 },
            { name: '岩賊竜の厚皮', quantity: 2 },
            { name: '岩賊竜の厚鱗', quantity: 3 },
          ],
        },
        {
          name: 'ガマルコーラスⅡ',
          materials: [
            { name: '岩賊竜の大顎', quantity: 2 },
            { name: '岩賊竜の靭尾', quantity: 1 },
            { name: '砕竜の重黒曜甲', quantity: 2 },
            { name: '重竜骨', quantity: 5 },
          ],
        },
        {
          name: '灼炎のフランアニマー',
          materials: [
            { name: 'エルトライト鉱石', quantity: 6 },
            { name: '斬竜の厚鱗', quantity: 4 },
            { name: '斬竜の重牙', quantity: 2 },
            { name: '赤熱した溶炉嚢', quantity: 2 },
          ],
        },
        {
          name: '灼炎のフランアニマー改',
          materials: [
            { name: '兇爪竜の重牙', quantity: 3 },
            { name: '斬竜の獄炎状殻', quantity: 4 },
            { name: '斬竜の断剣尾', quantity: 1 },
            { name: '斬竜の天鱗', quantity: 1 },
          ],
        },
        {
          name: '斬竜笛イブレス',
          materials: [
            { name: '古龍の浄血', quantity: 3 },
            { name: '斬竜の獄炎状殻', quantity: 4 },
            { name: '斬竜の重牙', quantity: 5 },
            { name: '炎龍の剛爪', quantity: 2 },
          ],
        },
        {
          name: 'ブレイズホルンⅠ',
          materials: [
            { name: '蛮顎竜の鱗', quantity: 3 },
            { name: '蛮顎竜の牙', quantity: 2 },
            { name: '火炎袋', quantity: 1 },
          ],
        },
        {
          name: 'ブレイズホルンⅡ',
          materials: [
            { name: '火竜の骨髄', quantity: 1 },
            { name: '蛮顎竜の牙', quantity: 4 },
            { name: '蛮顎竜の尻尾', quantity: 1 },
            { name: '蛮顎竜の鼻骨', quantity: 1 },
          ],
        },
        {
          name: 'ジャナフバローネⅠ',
          materials: [
            { name: '蛮顎竜の逆鱗', quantity: 1 },
            { name: '爆炎袋', quantity: 3 },
            { name: '蛮顎竜の上鱗', quantity: 5 },
            { name: '蛮顎竜の鋭牙', quantity: 4 },
          ],
        },
        {
          name: 'ジャナフバローネⅡ',
          materials: [
            { name: '火竜の延髄', quantity: 2 },
            { name: '獄炎石', quantity: 1 },
            { name: '蛮顎竜の上毛皮', quantity: 4 },
            { name: '蛮顎竜の鋭牙', quantity: 5 },
          ],
        },
        {
          name: 'ジャナフバローネⅢ',
          materials: [
            { name: '炎王龍のたてがみ', quantity: 2 },
            { name: '蛮顎竜の鋭牙', quantity: 6 },
            { name: '蛮顎竜の大鼻骨', quantity: 2 },
            { name: '蛮顎竜の宝玉', quantity: 1 },
          ],
        },
        {
          name: '蛮顎竜ノ鼻唄Ⅰ',
          materials: [
            { name: 'エルトライト鉱石', quantity: 3 },
            { name: '蛮顎竜の重牙', quantity: 1 },
            { name: '蛮顎竜の厚鱗', quantity: 2 },
            { name: '業炎袋', quantity: 1 },
          ],
        },
        {
          name: '蛮顎竜ノ鼻唄Ⅱ',
          materials: [
            { name: '蛮顎竜の重鼻骨', quantity: 2 },
            { name: '蒼火竜の重殻', quantity: 2 },
            { name: '蛮顎竜の厚毛皮', quantity: 3 },
            { name: '蛮顎竜の靭尾', quantity: 1 },
          ],
        },
        {
          name: 'ホーン＝ジャナールⅠ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 2 },
            { name: '剛竜骨', quantity: 3 },
            { name: '雷顎竜の厚鱗', quantity: 2 },
            { name: '雷顎竜の重牙', quantity: 1 },
          ],
        },
        {
          name: 'ホーン＝ジャナールⅡ',
          materials: [
            { name: '雷顎竜の厚毛皮', quantity: 3 },
            { name: '雷顎竜の重鼻骨', quantity: 2 },
            { name: '雷顎竜の靭尾', quantity: 1 },
            { name: '雷電袋', quantity: 3 },
          ],
        },
        {
          name: '硫鉄のスフィルド',
          materials: [
            { name: '削られた硫晶片', quantity: 4 },
            { name: '硫斬竜の剣山状殻', quantity: 3 },
            { name: '硫斬竜の重牙', quantity: 3 },
            { name: '硫斬竜の断剣尾', quantity: 1 },
          ],
        },
        {
          name: '硫斬笛パラドーラ',
          materials: [
            { name: '斬竜の天鱗', quantity: 1 },
            { name: '硫斬竜の剣山状殻', quantity: 3 },
            { name: '硫斬竜の重牙', quantity: 4 },
            { name: '屍套龍の剛爪', quantity: 2 },
          ],
        },
        {
          name: 'ブルームホルンⅠ',
          materials: [
            { name: '毒袋', quantity: 1 },
            { name: '毒妖鳥の鱗', quantity: 3 },
            { name: '毒妖鳥の羽根', quantity: 2 },
          ],
        },
        {
          name: 'ブルームホルンⅡ',
          materials: [
            { name: '毒妖鳥の尻尾', quantity: 1 },
            { name: '毒妖鳥の喉袋', quantity: 2 },
            { name: '深海の結晶', quantity: 3 },
            { name: '毒妖鳥の甲殻', quantity: 3 },
          ],
        },
        {
          name: 'ブルームホルンⅢ',
          materials: [
            { name: '毒袋', quantity: 2 },
            { name: '毒妖鳥の喉袋', quantity: 2 },
            { name: '毒妖鳥の羽根', quantity: 4 },
            { name: '上竜骨', quantity: 2 },
          ],
        },
        {
          name: 'ダチュラホルンⅠ',
          materials: [
            { name: '毒妖鳥の翼', quantity: 2 },
            { name: '毒妖鳥の上鱗', quantity: 3 },
            { name: '猛毒袋', quantity: 2 },
            { name: '上質な堅骨', quantity: 3 },
          ],
        },
        {
          name: 'ダチュラホルンⅡ',
          materials: [
            { name: '堅竜骨', quantity: 3 },
            { name: '毒妖鳥の堅殻', quantity: 5 },
            { name: '毒妖鳥の翼', quantity: 3 },
            { name: '猛毒袋', quantity: 2 },
          ],
        },
        {
          name: 'ダチュラホルンⅢ',
          materials: [
            { name: '鳥竜玉', quantity: 1 },
            { name: '毒妖鳥の翼', quantity: 6 },
            { name: '毒妖鳥の大喉袋', quantity: 4 },
            { name: '屍套龍の翼', quantity: 2 },
          ],
        },
        {
          name: 'ダチュラマエストロⅠ',
          materials: [
            { name: '強竜骨', quantity: 2 },
            { name: '劇烈毒袋', quantity: 2 },
            { name: '毒妖鳥の剛翼', quantity: 2 },
            { name: '毒妖鳥の厚鱗', quantity: 3 },
          ],
        },
        {
          name: 'ダチュラマエストロⅡ',
          materials: [
            { name: '重竜骨', quantity: 3 },
            { name: '毒妖鳥の靭尾', quantity: 1 },
            { name: '毒妖鳥の特大喉袋', quantity: 1 },
            { name: '雌火竜の秘棘', quantity: 2 },
          ],
        },
        {
          name: 'アイシクルホルンⅠ',
          materials: [
            { name: '凍てついた氷骨', quantity: 3 },
            { name: '瞬間凍結袋', quantity: 4 },
            { name: '氷牙竜の剛爪', quantity: 3 },
            { name: '氷牙竜の重殻', quantity: 4 },
          ],
        },
        {
          name: 'アイシクルホルンⅡ',
          materials: [
            { name: '琥珀色の重牙', quantity: 3 },
            { name: '漆黒の氷刃爪', quantity: 2 },
            { name: '大竜玉', quantity: 1 },
            { name: '氷牙竜の重棘', quantity: 3 },
          ],
        },
        {
          name: 'グィラキエース',
          materials: [
            { name: '大竜玉', quantity: 1 },
            { name: '氷牙竜チケット', quantity: 3 },
            { name: '白銀の氷刃牙', quantity: 3 },
            { name: '氷河を砕く剣爪', quantity: 2 },
          ],
        },
        {
          name: 'ウルムーホルンⅠ',
          materials: [
            { name: '浮空竜の毛皮', quantity: 2 },
            { name: '浮空竜の鱗', quantity: 3 },
            { name: 'ゴム質の甲殻', quantity: 1 },
          ],
        },
        {
          name: 'ウルムーホルンⅡ',
          materials: [
            { name: '角竜の甲殻', quantity: 3 },
            { name: '浮空竜の翼膜', quantity: 2 },
            { name: 'ゴム質の甲殻', quantity: 3 },
            { name: 'シャムオスの鱗', quantity: 5 },
          ],
        },
        {
          name: 'ウルムーバローネⅠ',
          materials: [
            { name: '浮空竜の上毛皮', quantity: 4 },
            { name: '浮空竜の上鱗', quantity: 5 },
            { name: 'シャムオスの上鱗', quantity: 5 },
            { name: 'ゴム質の堅殻', quantity: 3 },
          ],
        },
        {
          name: 'ウルムーバローネⅡ',
          materials: [
            { name: '角竜の延髄', quantity: 2 },
            { name: '浮空竜の翼', quantity: 3 },
            { name: 'ゴム質の堅殻', quantity: 4 },
            { name: 'ノヴァクリスタル', quantity: 1 },
          ],
        },
        {
          name: 'ウルムーバローネⅢ',
          materials: [
            { name: '古龍骨', quantity: 3 },
            { name: '竜玉', quantity: 1 },
            { name: '浮空竜の上鱗', quantity: 7 },
            { name: 'ゴム質の堅殻', quantity: 5 },
          ],
        },
        {
          name: 'ウルムーハミングⅠ',
          materials: [
            { name: 'ゴム質の重殻', quantity: 1 },
            { name: 'シャムオスの厚鱗', quantity: 2 },
            { name: '浮空竜の厚毛皮', quantity: 3 },
            { name: '浮空竜の剛翼', quantity: 1 },
          ],
        },
        {
          name: 'ウルムーハミングⅡ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 5 },
            { name: 'ゴム質の重殻', quantity: 2 },
            { name: '氷霜をまとう皮', quantity: 2 },
            { name: '浮空竜の厚鱗', quantity: 3 },
          ],
        },
        {
          name: 'ニュクスバローネⅠ',
          materials: [
            { name: 'ゴム質の重殻', quantity: 2 },
            { name: '卒倒昏睡袋', quantity: 1 },
            { name: '浮空竜の剛翼', quantity: 2 },
            { name: '浮眠竜の厚毛皮', quantity: 3 },
          ],
        },
        {
          name: 'ニュクスバローネⅡ',
          materials: [
            { name: '黒角竜の重甲', quantity: 2 },
            { name: '大竜玉', quantity: 1 },
            { name: '浮眠竜の剛翼', quantity: 3 },
            { name: '浮眠竜の厚鱗', quantity: 5 },
          ],
        },
        {
          name: '爆鱗の太鼓',
          materials: [
            { name: '獄炎石', quantity: 1 },
            { name: '爆鱗竜の尖爪', quantity: 3 },
            { name: '爆鱗竜の上鱗', quantity: 5 },
            { name: '爆鱗竜の爆腺', quantity: 4 },
          ],
        },
        {
          name: '爆鱗鼓バゼルライド',
          materials: [
            { name: '爆鱗竜の尖爪', quantity: 4 },
            { name: '爆鱗竜の翼', quantity: 4 },
            { name: '爆鱗竜の宝玉', quantity: 1 },
            { name: '冥灯龍の幽翼', quantity: 2 },
          ],
        },
        {
          name: '爆炎の太鼓',
          materials: [
            { name: 'メランジェ鉱石', quantity: 5 },
            { name: '凝縮された爆腺液', quantity: 3 },
            { name: '爆鱗竜の厚鱗', quantity: 4 },
            { name: '爆鱗竜の剛爪', quantity: 3 },
          ],
        },
        {
          name: '爆炎鼓バゼルバルディ',
          materials: [
            { name: '天を焦がす銀翼', quantity: 4 },
            { name: '爆鱗竜の天鱗', quantity: 1 },
            { name: '爆鱗竜の剛爪', quantity: 4 },
            { name: '地啼竜の散華石', quantity: 2 },
          ],
        },
        {
          name: 'ソニックホルンⅠ',
          materials: [
            { name: '太古の大骨', quantity: 1 },
            { name: 'ランゴスタの羽', quantity: 1 },
            { name: 'ランゴスタの甲殻', quantity: 2 },
          ],
        },
        {
          name: 'ソニックホルンⅡ',
          materials: [
            { name: 'ランゴスタの羽', quantity: 2 },
            { name: 'モンスターの体液', quantity: 2 },
            { name: 'ランゴスタの甲殻', quantity: 2 },
            { name: '麻痺袋', quantity: 1 },
          ],
        },
        {
          name: 'ソニックホルンⅢ',
          materials: [
            { name: 'ランゴスタの羽', quantity: 3 },
            { name: 'カンタロスの羽', quantity: 3 },
            { name: 'ギルオスの麻痺牙', quantity: 6 },
            { name: '麻痺袋', quantity: 2 },
          ],
        },
        {
          name: 'ロイヤルビードロー',
          materials: [
            { name: 'モンスターの濃汁', quantity: 5 },
            { name: 'ランゴスタの堅殻', quantity: 6 },
            { name: 'ランゴスタの薄羽', quantity: 3 },
            { name: '強力麻痺袋', quantity: 2 },
          ],
        },
        {
          name: 'ロイヤルビードロー改',
          materials: [
            { name: 'カンタロスの薄羽', quantity: 6 },
            { name: 'ランゴスタの薄羽', quantity: 6 },
            { name: '痺賊竜の鋭牙', quantity: 5 },
            { name: '荒々しい蛮骨', quantity: 2 },
          ],
        },
        {
          name: '女王笛ランゴスタ',
          materials: [
            { name: 'カンタロスの頭', quantity: 1 },
            { name: 'ランゴスタの薄羽', quantity: 3 },
            { name: 'ノヴァクリスタル', quantity: 2 },
            { name: '鋼龍の翼', quantity: 3 },
          ],
        },
        {
          name: '女王笛ランゴスタ改',
          materials: [
            { name: '霊脈の結晶', quantity: 3 },
            { name: '強靭な爪', quantity: 2 },
            { name: 'モンスターの特濃', quantity: 2 },
            { name: 'ランゴスタの斬羽', quantity: 2 },
          ],
        },
        {
          name: '女王笛ランゴスタⅡ世',
          materials: [
            { name: 'ランゴスタの斬羽', quantity: 3 },
            { name: '兇爪竜の重牙', quantity: 2 },
            { name: '剛竜骨', quantity: 3 },
            { name: '濃縮麻痺袋', quantity: 2 },
          ],
        },
        {
          name: 'スパイクホルンⅠ',
          materials: [
            { name: '骨鎚竜の鱗', quantity: 4 },
            { name: '睡眠袋', quantity: 2 },
            { name: '竜骨塊', quantity: 2 },
          ],
        },
        {
          name: 'スパイクホルンⅡ',
          materials: [
            { name: '上竜骨', quantity: 3 },
            { name: '骨鎚竜の黒油殻', quantity: 2 },
            { name: '骨鎚竜の骨髄', quantity: 1 },
            { name: '竜骨塊', quantity: 3 },
          ],
        },
        {
          name: 'バルキンホルンⅠ',
          materials: [
            { name: '尖竜骨', quantity: 3 },
            { name: '骨鎚竜の黒油殻', quantity: 3 },
            { name: '骨鎚竜の堅殻', quantity: 4 },
            { name: '昏睡袋', quantity: 2 },
          ],
        },
        {
          name: 'バルキンホルンⅡ',
          materials: [
            { name: '堅竜骨', quantity: 5 },
            { name: '骨鎚竜の上鱗', quantity: 8 },
            { name: '骨鎚竜の延髄', quantity: 1 },
            { name: '昏睡袋', quantity: 3 },
          ],
        },
        {
          name: 'バルキンホルンⅢ',
          materials: [
            { name: '古龍骨', quantity: 5 },
            { name: '竜玉', quantity: 1 },
            { name: '骨鎚竜の堅殻', quantity: 6 },
            { name: '昏睡袋', quantity: 4 },
          ],
        },
        {
          name: 'バルキンラトリングⅠ',
          materials: [
            { name: '強竜骨', quantity: 3 },
            { name: '骨鎚竜の厚鱗', quantity: 2 },
            { name: '骨鎚竜の重殻', quantity: 2 },
            { name: '卒倒昏睡袋', quantity: 1 },
          ],
        },
        {
          name: 'バルキンラトリングⅡ',
          materials: [
            { name: '頑強な重骨', quantity: 5 },
            { name: '剛竜骨', quantity: 3 },
            { name: '骨鎚竜の重油殻', quantity: 2 },
            { name: '大竜骨塊', quantity: 3 },
          ],
        },
        {
          name: 'ディオスホルンⅠ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 3 },
            { name: '砕竜の重殻', quantity: 4 },
            { name: '砕竜の重頭殻', quantity: 2 },
            { name: '光る粘菌', quantity: 3 },
          ],
        },
        {
          name: 'ディオスホルンⅡ',
          materials: [
            { name: '砕竜の剛鉄拳', quantity: 4 },
            { name: '砕竜の靭尾', quantity: 1 },
            { name: '蒼火竜の剛翼', quantity: 3 },
            { name: '光る粘菌', quantity: 5 },
          ],
        },
      ],
    },
    {
      name: '龍骨系系',
      weapons: [
        {
          name: '龍骨古笛Ⅰ',
          materials: [
            { name: 'いびつな狂骨', quantity: 5 },
            { name: '強固な岩骨', quantity: 5 },
            { name: '太古の大骨', quantity: 5 },
            { name: 'サンゴの紅骨', quantity: 5 },
          ],
        },
        {
          name: '龍骨古笛Ⅱ',
          materials: [
            { name: '竜骨【大】', quantity: 8 },
            { name: '頑丈な骨', quantity: 8 },
            { name: '上竜骨', quantity: 6 },
          ],
        },
        {
          name: '龍骨古笛Ⅲ',
          materials: [
            { name: '古龍骨', quantity: 10 },
            { name: '竜玉', quantity: 1 },
            { name: 'いにしえの龍骨', quantity: 2 },
            { name: '荒々しい蛮骨', quantity: 4 },
          ],
        },
        {
          name: '龍封じの古笛Ⅰ',
          materials: [
            { name: '頑強な重骨', quantity: 6 },
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '剛竜骨', quantity: 3 },
            { name: '重竜骨', quantity: 4 },
          ],
        },
        {
          name: '龍封じの古笛Ⅱ',
          materials: [
            { name: '剛竜骨', quantity: 4 },
            { name: '太古龍骨', quantity: 6 },
            { name: '大竜玉', quantity: 1 },
            { name: '溶岩竜の特上ヒレ', quantity: 2 },
          ],
        },
        {
          name: '極楽浄土ー華厳ー',
          materials: [
            { name: '地啼竜の慈鱗', quantity: 6 },
            { name: '地啼竜の慈眼殻', quantity: 2 },
            { name: '地啼竜の慈爪', quantity: 4 },
            { name: '地啼竜の顕玉', quantity: 1 },
          ],
        },
        {
          name: '雷鳴ノ笛',
          materials: [
            { name: 'ライトクリスタル', quantity: 1 },
            { name: '幻獣の雷角', quantity: 3 },
            { name: '幻獣の皮', quantity: 3 },
            { name: '幻獣の尾', quantity: 1 },
          ],
        },
        {
          name: '雷光ノ笛Ⅰ',
          materials: [
            { name: '幻獣のたてがみ', quantity: 4 },
            { name: '龍脈の結晶', quantity: 5 },
            { name: '幻獣の上皮', quantity: 5 },
            { name: '幻獣の蒼角', quantity: 4 },
          ],
        },
        {
          name: '雷光ノ笛Ⅱ',
          materials: [
            { name: 'ノヴァクリスタル', quantity: 2 },
            { name: '冥灯龍の白殻', quantity: 4 },
            { name: '幻獣の雷尾', quantity: 3 },
            { name: '幻獣の蒼角', quantity: 6 },
          ],
        },
        {
          name: '幻雷ノ魔笛',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '幻獣の銀たてがみ', quantity: 3 },
            { name: '幻獣の特上皮', quantity: 4 },
            { name: '幻獣の剛蒼角', quantity: 3 },
          ],
        },
        {
          name: 'ヒュドロスホルン',
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
          name: '黒鋼の龍笛Ⅰ',
          materials: [
            { name: '大地の結晶', quantity: 10 },
            { name: 'ライトクリスタル', quantity: 1 },
            { name: '深海の結晶', quantity: 10 },
            { name: '龍脈の結晶', quantity: 10 },
          ],
        },
        {
          name: '黒鋼の龍笛Ⅱ',
          materials: [
            { name: '獄炎石', quantity: 1 },
            { name: '竜玉', quantity: 1 },
            { name: 'カブレライト鉱石', quantity: 10 },
            { name: 'ユニオン鉱石', quantity: 5 },
          ],
        },
        {
          name: 'テオ＝クエルダ',
          materials: [
            { name: '炎王龍のたてがみ', quantity: 2 },
            { name: '炎王龍の堅殻', quantity: 5 },
            { name: '炎龍の塵粉', quantity: 4 },
            { name: '炎龍の尖爪', quantity: 2 },
          ],
        },
        {
          name: 'テオ＝オルフェス',
          materials: [
            { name: '炎王龍の尖角', quantity: 5 },
            { name: '炎龍の尖爪', quantity: 2 },
            { name: '炎龍の宝玉', quantity: 1 },
            { name: '冥灯龍の幽鱗', quantity: 5 },
          ],
        },
        {
          name: 'テスカデルムシカ',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '炎王龍の大たてがみ', quantity: 4 },
            { name: '炎王龍の剛角', quantity: 5 },
            { name: '炎龍の剛爪', quantity: 4 },
          ],
        },
        {
          name: 'ゼノ＝マナシーナ',
          materials: [
            { name: '冥灯龍の白殻', quantity: 6 },
            { name: '冥灯龍の幽爪', quantity: 4 },
            { name: '冥灯龍の幽玉', quantity: 1 },
            { name: '冥灯龍の尻尾', quantity: 2 },
          ],
        },
        {
          name: 'ゼノ＝マナシーナ',
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
          name: '鎖縛の暴竜',
          materials: [
            { name: '恐暴竜の黒鱗', quantity: 6 },
            { name: '恐暴竜の大牙', quantity: 3 },
            { name: '恐暴竜の鉤爪', quantity: 2 },
            { name: '恐暴竜の唾液', quantity: 2 },
          ],
        },
        {
          name: 'ディープヴェロウ',
          materials: [
            { name: '恐暴竜の大牙', quantity: 5 },
            { name: '恐暴竜の頭殻', quantity: 2 },
            { name: '恐暴竜の宝玉', quantity: 1 },
            { name: '古龍の血', quantity: 5 },
          ],
        },
        {
          name: '業奏グレイプニール',
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
          name: 'エンプレスドラム',
          materials: [
            { name: '炎妃龍のたてがみ', quantity: 3 },
            { name: '炎妃龍の宝玉', quantity: 1 },
            { name: '炎妃龍の尖角', quantity: 3 },
            { name: '炎妃龍の上鱗', quantity: 4 },
          ],
        },
        {
          name: 'エンプレスドラム・冥灯',
          materials: [
            { name: '冥灯龍の幽角', quantity: 3 },
            { name: '冥灯龍の幽玉', quantity: 1 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の尻尾', quantity: 2 },
          ],
        },
        {
          name: 'エンプレスドラム・滅尽',
          materials: [
            { name: '滅尽龍の宝玉', quantity: 1 },
            { name: '滅尽龍の大角', quantity: 3 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の翼', quantity: 3 },
          ],
        },
        {
          name: 'エンプレスドラム・炎妃',
          materials: [
            { name: '炎王龍の尖角', quantity: 3 },
            { name: '爆鱗竜の宝玉', quantity: 1 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の尖角', quantity: 2 },
          ],
        },
        {
          name: '魂焔の龍笛・炎妃',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '炎妃龍の厚鱗', quantity: 4 },
            { name: '炎妃龍の剛角', quantity: 4 },
            { name: '炎妃龍の大たてがみ', quantity: 4 },
          ],
        },
        {
          name: '魂焔の龍笛・滅尽',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '殲滅の大剛角', quantity: 3 },
            { name: '無窮の新生殻', quantity: 3 },
            { name: '炎妃龍の厚鱗', quantity: 4 },
          ],
        },
        {
          name: '魂焔の龍笛・冥灯',
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
          name: '電電太鼓',
          materials: [
            { name: '金獅子の重牙', quantity: 2 },
            { name: '金獅子の剛爪', quantity: 1 },
            { name: '金獅子の剛角', quantity: 1 },
            { name: '金獅子の黒荒毛', quantity: 2 },
          ],
        },
        {
          name: '電電太鼓【雷轟】',
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
          name: '鬼神電鼓【緋ノ魂】',
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
          name: '獄琴リュウセイ',
          materials: [
            { name: '獄狼竜の滅龍毛', quantity: 2 },
            { name: '獄狼竜の滅龍殻', quantity: 2 },
            { name: '獄狼竜の剛角', quantity: 1 },
            { name: '獄狼竜の剛爪', quantity: 1 },
          ],
        },
        {
          name: '狼牙琴【異獄】',
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
          name: '砕光の陽鈴',
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
          name: '煌黒の風琴',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '煌黒龍の凶爪', quantity: 3 },
            { name: '天を統べる角', quantity: 1 },
            { name: '煌黒龍の天鱗', quantity: 3 },
          ],
        },
        {
          name: '煌黒琴アルリゼ',
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
          name: 'ミラメノス',
          materials: [
            { name: '黒龍の厚鱗', quantity: 3 },
            { name: '黒龍の重胸殻', quantity: 1 },
            { name: '黒龍の剛角', quantity: 1 },
            { name: '黒龍の邪眼', quantity: 1 },
          ],
        },
        {
          name: 'ミラメノスアギガ',
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
          name: 'ギルドパレスバード',
          materials: [
            { name: 'グラシスメタル', quantity: 5 },
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '琥珀色の重牙', quantity: 2 },
            { name: '祭典チケット', quantity: 2 },
          ],
        },
        {
          name: '宮廷奏琴【響星】',
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
