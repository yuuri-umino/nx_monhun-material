import { WeaponType } from './materialsTypes'

const greatsword: WeaponType = {
  type: 'チャージアックス',
  derivations: [
    {
      name: '防衛隊系',
      weapons: [
        {
          name: '防衛隊合体式盾斧Ⅰ',
          materials: [{ name: '鉄鉱石', quantity: 1 }],
        },
        {
          name: '防衛隊合体式盾斧Ⅱ',
          materials: [{ name: '蛮顎竜の鱗', quantity: 1 }],
        },
        {
          name: '防衛隊合体式盾斧Ⅲ',
          materials: [{ name: '勇気の証', quantity: 1 }],
        },
        {
          name: '防衛隊合体式盾斧Ⅳ',
          materials: [{ name: '桜火竜の上鱗', quantity: 1 }],
        },
        {
          name: '防衛隊合体式盾斧Ⅴ',
          materials: [{ name: '不滅の龍鱗', quantity: 1 }],
        },
      ],
    },
    {
      name: '鉱石素材系',
      weapons: [
        {
          name: '調査団試作盾斧Ⅰ',
          materials: [{ name: '鉄鉱石', quantity: 1 }],
        },
        {
          name: '調査団試作盾斧Ⅱ',
          materials: [{ name: '鉄鉱石', quantity: 2 }],
        },
        {
          name: '調査団試作盾斧Ⅲ',
          materials: [
            { name: '大地の結晶', quantity: 2 },
            { name: '鉄鉱石', quantity: 5 },
            { name: 'マカライト鉱石', quantity: 2 },
          ],
        },
        {
          name: '精鋭調査団盾斧Ⅰ',
          materials: [
            { name: 'マカライト鉱石', quantity: 5 },
            { name: '竜骨【中】', quantity: 2 },
            { name: 'ドラグライト鉱石', quantity: 2 },
          ],
        },
        {
          name: '精鋭調査団盾斧Ⅱ',
          materials: [
            { name: 'マカライト鉱石', quantity: 10 },
            { name: 'ドラグライト鉱石', quantity: 5 },
            { name: '上竜骨', quantity: 2 },
            { name: '深海の結晶', quantity: 2 },
          ],
        },
        {
          name: '精鋭調査団盾斧Ⅲ',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 5 },
            { name: 'カブレライト鉱石', quantity: 8 },
            { name: '龍脈の結晶', quantity: 2 },
          ],
        },
        {
          name: 'クロムガーディアンⅠ',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 10 },
            { name: 'カブレライト鉱石', quantity: 5 },
            { name: '龍脈の結晶', quantity: 3 },
            { name: 'ユニオン鉱石', quantity: 8 },
          ],
        },
        {
          name: 'クロムガーディアンⅡ',
          materials: [
            { name: '古龍の血', quantity: 2 },
            { name: '獄炎石', quantity: 1 },
            { name: 'カブレライト鉱石', quantity: 20 },
            { name: 'ユニオン鉱石', quantity: 13 },
          ],
        },
        {
          name: 'クロムフォートⅠ',
          materials: [
            { name: 'カブレライト鉱石', quantity: 4 },
            { name: '霊脈の結晶', quantity: 2 },
            { name: 'グラシスメタル', quantity: 1 },
            { name: 'エルトライト鉱石', quantity: 2 },
          ],
        },
        {
          name: 'クロムフォートⅡ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 2 },
            { name: 'エルトライト鉱石', quantity: 4 },
            { name: '重竜骨', quantity: 3 },
            { name: 'デプスライト鉱石', quantity: 2 },
          ],
        },
        {
          name: 'クロムフォートⅢ',
          materials: [
            { name: '古龍の浄血', quantity: 3 },
            { name: 'メランジェ鉱石', quantity: 3 },
            { name: 'エルトライト鉱石', quantity: 6 },
            { name: 'ピュアクリスタル', quantity: 1 },
          ],
        },
        {
          name: '王盾斧ライモン改',
          materials: [
            { name: '雷狼竜の雷電毛', quantity: 4 },
            { name: '雷狼竜の剛角', quantity: 3 },
            { name: '雷狼竜の天玉', quantity: 1 },
            { name: '超電雷光虫', quantity: 5 },
          ],
        },
        {
          name: '王盾斧ライモン',
          materials: [
            { name: '雷電袋', quantity: 3 },
            { name: '雷狼竜の雷電殻', quantity: 2 },
            { name: '雷狼竜の重殻', quantity: 5 },
            { name: '雷狼竜の剛爪', quantity: 3 },
          ],
        },
        {
          name: '王牙盾斧【風雷】',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '雷狼竜の雷電殻', quantity: 2 },
            { name: '雷狼竜の剛角', quantity: 5 },
            { name: '霊脈の剛竜骨', quantity: 5 },
          ],
        },
        {
          name: 'ネルガルスイング',
          materials: [
            { name: '滅尽龍の再生殻', quantity: 4 },
            { name: '滅尽龍の尻尾', quantity: 2 },
            { name: '滅尽龍の堅殻', quantity: 2 },
            { name: '滅尽龍の尖爪', quantity: 3 },
          ],
        },
        {
          name: '壊滅の一束',
          materials: [
            { name: '滅尽龍の宝玉', quantity: 1 },
            { name: '滅尽龍の尖爪', quantity: 5 },
            { name: '滅尽龍の大角', quantity: 5 },
            { name: '冥灯龍の幽角', quantity: 2 },
          ],
        },
        {
          name: '壊滅の一束【裂】',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '殲滅の大剛角', quantity: 3 },
            { name: '無窮の新生殻', quantity: 5 },
            { name: '滅尽龍の剛爪', quantity: 4 },
          ],
        },
        {
          name: '火竜の盾斧Ⅰ',
          materials: [
            { name: '火竜の骨髄', quantity: 1 },
            { name: '火竜の翼膜', quantity: 2 },
            { name: '火炎袋', quantity: 2 },
            { name: '火竜の鱗', quantity: 1 },
          ],
        },
        {
          name: '火竜の盾斧Ⅱ',
          materials: [
            { name: '火竜の尻尾', quantity: 2 },
            { name: '火竜の逆鱗', quantity: 1 },
            { name: '火竜の鱗', quantity: 6 },
            { name: '爆炎袋', quantity: 1 },
          ],
        },
        {
          name: '炎斧アクセリオン',
          materials: [
            { name: '火竜の延髄', quantity: 1 },
            { name: '火竜の堅殻', quantity: 4 },
            { name: '火竜の上鱗', quantity: 6 },
            { name: '火竜の翼', quantity: 2 },
          ],
        },
        {
          name: '焔斧ハルバリオン',
          materials: [
            { name: '火竜の紅玉', quantity: 1 },
            { name: '蒼火竜の上鱗', quantity: 6 },
            { name: '蒼火竜の堅殻', quantity: 4 },
            { name: '蒼火竜の翼', quantity: 3 },
          ],
        },
        {
          name: '焔斧ハルバリオン改',
          materials: [
            { name: '火竜の厚鱗', quantity: 6 },
            { name: '火竜の剛翼', quantity: 2 },
            { name: '火竜の剛翼爪', quantity: 4 },
            { name: '火竜の重殻', quantity: 4 },
          ],
        },
        {
          name: '蒼炎斧ソウルクラトス',
          materials: [
            { name: '火竜の天鱗', quantity: 1 },
            { name: '蒼火竜の剛翼', quantity: 3 },
            { name: '蒼火竜の厚鱗', quantity: 6 },
            { name: '蒼火竜の重殻', quantity: 4 },
          ],
        },
        {
          name: '業火斧ヘルメスレイ',
          materials: [
            { name: '銀火竜の重殻', quantity: 4 },
            { name: '銀火竜の厚鱗', quantity: 8 },
            { name: '火竜の煌液', quantity: 2 },
            { name: '銀火竜の靭尾', quantity: 3 },
          ],
        },
        {
          name: '泥流の盾斧Ⅰ',
          materials: [
            { name: '泥魚竜の鱗', quantity: 3 },
            { name: '泥魚竜の甲殻', quantity: 1 },
            { name: '泥魚竜のヒレ', quantity: 1 },
            { name: '水袋', quantity: 1 },
          ],
        },
        {
          name: '泥流の盾斧Ⅱ',
          materials: [
            { name: '咬魚の皮', quantity: 3 },
            { name: '泥魚竜の甲殻', quantity: 3 },
            { name: '泥魚竜のヒレ', quantity: 3 },
            { name: '痺賊竜の皮', quantity: 1 },
          ],
        },
        {
          name: '泥流の盾斧Ⅲ',
          materials: [
            { name: '咬魚のヒゲ', quantity: 3 },
            { name: '泥魚竜の甲殻', quantity: 3 },
            { name: '泥魚竜の牙', quantity: 4 },
            { name: '上竜骨', quantity: 2 },
          ],
        },
        {
          name: 'ディープシュラムⅠ',
          materials: [
            { name: '泥魚竜の上鱗', quantity: 3 },
            { name: '泥魚竜の堅殻', quantity: 2 },
            { name: '泥魚竜の上ヒレ', quantity: 2 },
            { name: '咬魚の上皮', quantity: 5 },
          ],
        },
        {
          name: 'ディープシュラムⅡ',
          materials: [
            { name: '堅竜骨', quantity: 3 },
            { name: '泥魚竜の上ヒレ', quantity: 4 },
            { name: '大水袋', quantity: 3 },
            { name: '咬魚の大ヒゲ', quantity: 3 },
          ],
        },
        {
          name: 'ディープシュラムⅢ',
          materials: [
            { name: '古龍骨', quantity: 2 },
            { name: '竜玉', quantity: 1 },
            { name: '泥魚竜の上ヒレ', quantity: 6 },
            { name: '泥魚竜の鋭牙', quantity: 5 },
          ],
        },
        {
          name: 'ディープテロワールⅠ',
          materials: [
            { name: '咬魚の厚皮', quantity: 2 },
            { name: '泥魚竜の厚鱗', quantity: 3 },
            { name: '泥魚竜の重牙', quantity: 1 },
            { name: '泥魚竜の特上ヒレ', quantity: 1 },
          ],
        },
        {
          name: 'ディープテロワールⅡ',
          materials: [
            { name: '咬魚の鋼ヒゲ', quantity: 1 },
            { name: '重竜骨', quantity: 2 },
            { name: '特大水袋', quantity: 2 },
            { name: '泥魚竜の特上ヒレ', quantity: 2 },
          ],
        },
        {
          name: 'ヒドゥンガーディアンⅠ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 1 },
            { name: '迅竜の厚鱗', quantity: 3 },
            { name: '迅竜の重牙', quantity: 2 },
            { name: '迅竜の重尾棘', quantity: 2 },
          ],
        },
        {
          name: 'ヒドゥンガーディアンⅡ',
          materials: [
            { name: '迅竜の天鱗', quantity: 1 },
            { name: '迅竜の靭尾', quantity: 2 },
            { name: '迅竜の剛刃翼', quantity: 3 },
            { name: '雷顎竜の重牙', quantity: 2 },
          ],
        },
        {
          name: 'ディープシュネーゲルⅠ',
          materials: [
            { name: '凍てついた氷骨', quantity: 1 },
            { name: '凍魚竜の厚鱗', quantity: 3 },
            { name: '凍魚竜の剛角', quantity: 1 },
            { name: '凍魚竜の特上ヒレ', quantity: 1 },
          ],
        },
        {
          name: 'ディープシュネーゲルⅡ',
          materials: [
            { name: '凍魚竜の特上ヒレ', quantity: 2 },
            { name: '瞬間凍結袋', quantity: 2 },
            { name: '大竜玉', quantity: 1 },
            { name: '氷霜をまとう皮', quantity: 2 },
          ],
        },
        {
          name: '氷結の盾斧Ⅰ',
          materials: [
            { name: '深海の結晶', quantity: 3 },
            { name: '風漂竜の鱗', quantity: 4 },
            { name: '風漂竜の爪', quantity: 3 },
            { name: '氷結袋', quantity: 2 },
          ],
        },
        {
          name: '氷結の盾斧Ⅱ',
          materials: [
            { name: '風漂竜の翼膜', quantity: 3 },
            { name: 'シャムオスの上鱗', quantity: 5 },
            { name: '風漂竜の尾膜', quantity: 2 },
            { name: 'カブレライト鉱石', quantity: 5 },
          ],
        },
        {
          name: 'ギガフロストⅠ',
          materials: [
            { name: 'ユニオン鉱石', quantity: 5 },
            { name: '風漂竜の上鱗', quantity: 5 },
            { name: '凍結袋', quantity: 3 },
            { name: '風漂竜の翼', quantity: 3 },
          ],
        },
        {
          name: 'ギガフロストⅡ',
          materials: [
            { name: '古龍の血', quantity: 3 },
            { name: '竜玉', quantity: 1 },
            { name: '風漂竜の上皮', quantity: 3 },
            { name: '風漂竜の尖爪', quantity: 5 },
          ],
        },
        {
          name: 'ギガフロストⅢ',
          materials: [
            { name: 'グラシスメタル', quantity: 2 },
            { name: 'エルトライト鉱石', quantity: 4 },
            { name: 'ウルグの厚毛皮', quantity: 3 },
            { name: '瞬間凍結袋', quantity: 1 },
          ],
        },
        {
          name: 'ヴァイスリッター',
          materials: [
            { name: '凍てついた氷骨', quantity: 3 },
            { name: '瞬間凍結袋', quantity: 4 },
            { name: '氷牙竜の剛爪', quantity: 3 },
            { name: '氷牙竜の重殻', quantity: 4 },
          ],
        },
        {
          name: 'ヴァイスリッター改',
          materials: [
            { name: '琥珀色の重牙', quantity: 3 },
            { name: '漆黒の氷刃爪', quantity: 2 },
            { name: '大竜玉', quantity: 1 },
            { name: '氷牙竜の重棘', quantity: 3 },
          ],
        },
        {
          name: 'エルガーヴォルフ',
          materials: [
            { name: '琥珀色の重牙', quantity: 2 },
            { name: '太古龍骨', quantity: 5 },
            { name: '氷牙竜の剛爪', quantity: 4 },
            { name: '冰龍の剛爪', quantity: 2 },
          ],
        },
        {
          name: 'レイジングヴォルフ',
          materials: [
            { name: '大竜玉', quantity: 1 },
            { name: '氷牙竜チケット', quantity: 3 },
            { name: '白銀の氷刃牙', quantity: 3 },
            { name: '氷河を砕く剣爪', quantity: 2 },
          ],
        },
        {
          name: 'ディア＝ルテミス',
          materials: [
            { name: '雌火竜の甲殻', quantity: 4 },
            { name: '雌火竜の鱗', quantity: 5 },
            { name: '雌火竜の棘', quantity: 3 },
          ],
        },
        {
          name: 'ディア＝ルテミア',
          materials: [
            { name: '雌火竜の逆鱗', quantity: 1 },
            { name: '雌火竜の堅殻', quantity: 4 },
            { name: '雌火竜の上鱗', quantity: 5 },
            { name: '雌火竜の上棘', quantity: 3 },
          ],
        },
        {
          name: 'ディア＝ヘカテル',
          materials: [
            { name: '雌火竜の上棘', quantity: 4 },
            { name: '竜玉', quantity: 1 },
            { name: '桜火竜の堅殻', quantity: 4 },
            { name: '桜火竜の上鱗', quantity: 5 },
          ],
        },
        {
          name: 'ディア＝ヘカテリア',
          materials: [
            { name: '古龍の血', quantity: 3 },
            { name: '雌火竜の紅玉', quantity: 1 },
            { name: '雌火竜の上棘', quantity: 5 },
            { name: '桜火竜の上鱗', quantity: 6 },
          ],
        },
        {
          name: 'ディア＝ロゼ',
          materials: [
            { name: '雌火竜の厚鱗', quantity: 5 },
            { name: '雌火竜の重殻', quantity: 4 },
            { name: '雌火竜の秘棘', quantity: 3 },
          ],
        },
        {
          name: 'ディア＝ロゼッタ',
          materials: [
            { name: '桜火竜の厚鱗', quantity: 4 },
            { name: '桜火竜の重殻', quantity: 3 },
            { name: '剛竜骨', quantity: 5 },
            { name: '雌火竜の天鱗', quantity: 1 },
          ],
        },
        {
          name: 'ルナ＝エストオレ',
          materials: [
            { name: '火竜の煌液', quantity: 1 },
            { name: '金火竜の重殻', quantity: 4 },
            { name: '金火竜の厚鱗', quantity: 5 },
            { name: '金火竜の秘棘', quantity: 3 },
          ],
        },
      ],
    },
    {
      name: '骨素材系',
      weapons: [
        {
          name: 'ボーンアームズⅠ',
          materials: [{ name: '竜骨【小】', quantity: 1 }],
        },
        {
          name: 'ボーンアームズⅡ',
          materials: [{ name: '竜骨【小】', quantity: 2 }],
        },
        {
          name: 'ボーンアームズⅢ',
          materials: [
            { name: '太古の大骨', quantity: 1 },
            { name: '竜骨【中】', quantity: 2 },
          ],
        },
        {
          name: 'ハードボーンアームズⅠ',
          materials: [
            { name: '強固な岩骨', quantity: 2 },
            { name: '竜骨【大】', quantity: 1 },
            { name: '竜骨【中】', quantity: 5 },
          ],
        },
        {
          name: 'ハードボーンアームズⅡ',
          materials: [
            { name: '竜骨【大】', quantity: 1 },
            { name: '頑丈な骨', quantity: 4 },
            { name: '上竜骨', quantity: 2 },
          ],
        },
        {
          name: 'ハードボーンアームズⅢ',
          materials: [
            { name: '上竜骨', quantity: 2 },
            { name: '尖竜骨', quantity: 2 },
            { name: '上質な堅骨', quantity: 2 },
          ],
        },
        {
          name: 'ストロングアームズⅠ',
          materials: [
            { name: '堅竜骨', quantity: 4 },
            { name: '尖竜骨', quantity: 6 },
            { name: '上質な堅骨', quantity: 10 },
          ],
        },
        {
          name: 'ストロングアームズⅡ',
          materials: [
            { name: '堅竜骨', quantity: 6 },
            { name: '古龍骨', quantity: 4 },
            { name: '上質な堅骨', quantity: 20 },
            { name: 'いにしえの龍骨', quantity: 1 },
          ],
        },
        {
          name: 'ワイルドフォースⅠ',
          materials: [
            { name: '堅竜骨', quantity: 4 },
            { name: '上質な堅骨', quantity: 4 },
            { name: '頑強な重骨', quantity: 2 },
            { name: '凍てついた氷骨', quantity: 1 },
          ],
        },
        {
          name: 'ワイルドフォースⅡ',
          materials: [
            { name: '頑強な重骨', quantity: 4 },
            { name: 'モンスターの特濃', quantity: 2 },
            { name: '剛竜骨', quantity: 2 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: 'ワイルドフォースⅢ',
          materials: [
            { name: '頑強な重骨', quantity: 6 },
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '剛竜骨', quantity: 4 },
            { name: '太古龍骨', quantity: 3 },
          ],
        },
        {
          name: 'アイスガーディアン',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '氷晶の厚龍鱗', quantity: 4 },
            { name: '冰龍の剛爪', quantity: 2 },
            { name: '冰龍の靭尾', quantity: 2 },
          ],
        },
        {
          name: '氷臣ダルク',
          materials: [
            { name: '冰龍の冠角', quantity: 4 },
            { name: '冰龍の剛爪', quantity: 4 },
            { name: '冰龍の零玉', quantity: 1 },
            { name: '地啼竜の慈爪', quantity: 3 },
          ],
        },
        {
          name: 'ブロスウォールⅠ',
          materials: [
            { name: '角竜の牙', quantity: 2 },
            { name: 'ねじれた角', quantity: 1 },
            { name: '角竜の甲殻', quantity: 4 },
            { name: '上竜骨', quantity: 3 },
          ],
        },
        {
          name: 'ブロスウォールⅡ',
          materials: [
            { name: '角竜の背甲', quantity: 4 },
            { name: '角竜の尾甲', quantity: 2 },
            { name: '尖竜骨', quantity: 4 },
            { name: '角竜の骨髄', quantity: 1 },
          ],
        },
        {
          name: 'タイラントブロスⅠ',
          materials: [
            { name: '角竜の延髄', quantity: 1 },
            { name: '角竜の堅殻', quantity: 6 },
            { name: '角竜の堅甲', quantity: 5 },
            { name: '上質なねじれた角', quantity: 3 },
          ],
        },
        {
          name: 'タイラントブロスⅡ',
          materials: [
            { name: '竜玉', quantity: 1 },
            { name: '黒角竜の堅殻', quantity: 4 },
            { name: '上質な黒巻き角', quantity: 3 },
            { name: '滅尽龍の大角', quantity: 2 },
          ],
        },
        {
          name: 'タイラントブロスⅢ',
          materials: [
            { name: '角竜の重殻', quantity: 6 },
            { name: '角竜の重甲', quantity: 5 },
            { name: '堅牢なねじれた角', quantity: 3 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: '硫鉄のマクマリー',
          materials: [
            { name: '削られた硫晶片', quantity: 4 },
            { name: '硫斬竜の剣山状殻', quantity: 2 },
            { name: '硫斬竜の重牙', quantity: 2 },
            { name: '硫斬竜の断剣尾', quantity: 2 },
          ],
        },
        {
          name: '硫斬合刃メリッサーニ',
          materials: [
            { name: '斬竜の天鱗', quantity: 1 },
            { name: '硫斬竜の剣山状殻', quantity: 3 },
            { name: '硫斬竜の重牙', quantity: 4 },
            { name: '屍套龍の剛爪', quantity: 2 },
          ],
        },
        {
          name: 'ジャグラスアームズⅠ',
          materials: [
            { name: '賊竜の鱗', quantity: 3 },
            { name: '賊竜の皮', quantity: 1 },
            { name: '賊竜の爪', quantity: 1 },
            { name: 'とがった爪', quantity: 1 },
          ],
        },
        {
          name: 'ジャグラスアームズⅡ',
          materials: [
            { name: '賊竜のたてがみ', quantity: 2 },
            { name: '賊竜の爪', quantity: 2 },
            { name: '眩鳥の爪', quantity: 3 },
            { name: 'サンゴの紅骨', quantity: 2 },
          ],
        },
        {
          name: 'ジャグラスアームズⅢ',
          materials: [
            { name: '賊竜の鱗', quantity: 5 },
            { name: '賊竜のたてがみ', quantity: 3 },
            { name: '賊竜の爪', quantity: 3 },
            { name: '上竜骨', quantity: 3 },
          ],
        },
        {
          name: 'ジャグラスエスクードⅠ',
          materials: [
            { name: '賊竜のたてがみ', quantity: 6 },
            { name: '賊竜の尖爪', quantity: 4 },
            { name: '痺賊竜の上鱗', quantity: 6 },
            { name: '鋭利な爪', quantity: 5 },
          ],
        },
        {
          name: 'ジャグラスエスクードⅡ',
          materials: [
            { name: 'ジャグラスの上皮', quantity: 6 },
            { name: '堅竜骨', quantity: 4 },
            { name: '賊竜の尖爪', quantity: 6 },
            { name: '眩鳥の尖爪', quantity: 5 },
          ],
        },
        {
          name: 'ジャグラスエスクードⅢ',
          materials: [
            { name: '賊竜の上皮', quantity: 6 },
            { name: '賊竜の尖爪', quantity: 8 },
            { name: 'ノヴァクリスタル', quantity: 1 },
            { name: '屍套龍の尖爪', quantity: 2 },
          ],
        },
        {
          name: '牙竜盾斧【荒喰】Ⅰ',
          materials: [
            { name: 'ジャグラスの厚鱗', quantity: 2 },
            { name: '賊竜の大たてがみ', quantity: 2 },
            { name: '賊竜の剛爪', quantity: 1 },
            { name: '賊竜の厚鱗', quantity: 2 },
          ],
        },
        {
          name: '牙竜盾斧【荒喰】Ⅱ',
          materials: [
            { name: '強靭な爪', quantity: 3 },
            { name: '重竜骨', quantity: 3 },
            { name: '賊竜の剛爪', quantity: 3 },
            { name: '賊竜の厚皮', quantity: 3 },
          ],
        },
        {
          name: '灼炎のディマンダー',
          materials: [
            { name: 'エルトライト鉱石', quantity: 6 },
            { name: '斬竜の厚鱗', quantity: 4 },
            { name: '斬竜の重牙', quantity: 2 },
            { name: '赤熱した溶炉嚢', quantity: 2 },
          ],
        },
        {
          name: '灼炎のディマンダー改',
          materials: [
            { name: '兇爪竜の重牙', quantity: 2 },
            { name: '斬竜の獄炎状殻', quantity: 3 },
            { name: '斬竜の天鱗', quantity: 1 },
            { name: '硫斬竜の断剣尾', quantity: 2 },
          ],
        },
        {
          name: '斬竜合刃バルドレッド',
          materials: [
            { name: '古龍の浄血', quantity: 3 },
            { name: '斬竜の獄炎状殻', quantity: 4 },
            { name: '斬竜の重牙', quantity: 5 },
            { name: '炎龍の剛爪', quantity: 2 },
          ],
        },
        {
          name: 'ガマルシルトⅠ',
          materials: [
            { name: '岩賊竜の上皮', quantity: 4 },
            { name: '岩賊竜の上鱗', quantity: 6 },
            { name: '岩賊竜の尖爪', quantity: 4 },
          ],
        },
        {
          name: 'ガマルシルトⅡ',
          materials: [
            { name: '獄炎の龍鱗', quantity: 4 },
            { name: '竜玉', quantity: 1 },
            { name: '岩賊竜の顎', quantity: 4 },
            { name: '岩賊竜の尻尾', quantity: 3 },
          ],
        },
        {
          name: 'ガマルエスクードⅠ',
          materials: [
            { name: 'ガストドンの重殻', quantity: 2 },
            { name: '岩賊竜の剛爪', quantity: 2 },
            { name: '岩賊竜の厚皮', quantity: 2 },
            { name: '岩賊竜の厚鱗', quantity: 3 },
          ],
        },
        {
          name: 'ガマルエスクードⅡ',
          materials: [
            { name: '岩賊竜の大顎', quantity: 2 },
            { name: '岩賊竜の靭尾', quantity: 1 },
            { name: '砕竜の重黒曜甲', quantity: 2 },
            { name: '重竜骨', quantity: 5 },
          ],
        },
        {
          name: 'レックスアームズⅠ',
          materials: [
            { name: '頑強な重骨', quantity: 5 },
            { name: '轟竜の厚鱗', quantity: 4 },
            { name: '轟竜の剛爪', quantity: 3 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: 'レックスアームズⅡ',
          materials: [
            { name: '轟竜の重牙', quantity: 3 },
            { name: '轟竜の靭尾', quantity: 2 },
            { name: '轟竜の天鱗', quantity: 1 },
            { name: '堅牢な黒巻き角', quantity: 1 },
          ],
        },
        {
          name: 'カーサスアームズ',
          materials: [
            { name: '大竜玉', quantity: 1 },
            { name: '黒轟竜の厚鱗', quantity: 5 },
            { name: '黒轟竜の重牙', quantity: 2 },
            { name: '黒轟竜の剛爪', quantity: 3 },
          ],
        },
        {
          name: 'ギルオスアームズⅠ',
          materials: [
            { name: '痺賊竜の鱗', quantity: 3 },
            { name: '痺賊竜の牙', quantity: 1 },
            { name: 'ギルオスの麻痺牙', quantity: 3 },
          ],
        },
        {
          name: 'ギルオスアームズⅡ',
          materials: [
            { name: '角竜の牙', quantity: 2 },
            { name: '痺賊竜の頭巾殻', quantity: 2 },
            { name: '痺賊竜の牙', quantity: 3 },
            { name: '麻痺袋', quantity: 2 },
          ],
        },
        {
          name: 'ギルオスナージャⅠ',
          materials: [
            { name: '痺賊竜の尻尾', quantity: 2 },
            { name: '痺賊竜の上鱗', quantity: 5 },
            { name: '痺賊竜の鋭牙', quantity: 3 },
            { name: 'ギルオスの上鱗', quantity: 6 },
          ],
        },
        {
          name: 'ギルオスナージャⅡ',
          materials: [
            { name: '角竜の延髄', quantity: 1 },
            { name: '痺賊竜の大頭巾', quantity: 2 },
            { name: '痺賊竜の鋭牙', quantity: 4 },
            { name: '強力麻痺袋', quantity: 4 },
          ],
        },
        {
          name: 'ギルオスナージャⅢ',
          materials: [
            { name: '鳥竜玉', quantity: 1 },
            { name: '痺賊竜の大頭巾', quantity: 3 },
            { name: '痺賊竜の鋭牙', quantity: 5 },
            { name: '屍套龍の鋭牙', quantity: 2 },
          ],
        },
        {
          name: 'ナーガ＝ガダブⅠ',
          materials: [
            { name: '強靭な爪', quantity: 2 },
            { name: '濃縮麻痺袋', quantity: 2 },
            { name: '痺賊竜の重牙', quantity: 2 },
            { name: '痺賊竜の靭尾', quantity: 1 },
          ],
        },
        {
          name: 'ナーガ＝ガダブⅡ',
          materials: [
            { name: '幻鳥竜玉', quantity: 1 },
            { name: '惨爪竜の重牙', quantity: 2 },
            { name: '痺賊竜の厚鱗', quantity: 4 },
            { name: '痺賊竜の重頭巾', quantity: 2 },
          ],
        },
        {
          name: 'ディオスアームズ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 3 },
            { name: '砕竜の重殻', quantity: 4 },
            { name: '砕竜の重頭殻', quantity: 2 },
            { name: '光る粘菌', quantity: 3 },
          ],
        },
        {
          name: '爆盾斧バンカームズ',
          materials: [
            { name: '砕竜の重黒曜甲', quantity: 4 },
            { name: '砕竜の重頭殻', quantity: 3 },
            { name: '砕竜の天殻', quantity: 1 },
            { name: '凝縮された爆腺液', quantity: 3 },
          ],
        },
        {
          name: 'ハザクアスピダⅠ',
          materials: [
            { name: '死屍の龍鱗', quantity: 6 },
            { name: '屍套龍の尖爪', quantity: 4 },
            { name: '屍套龍の鋭牙', quantity: 5 },
            { name: '屍套龍の被膜', quantity: 4 },
          ],
        },
        {
          name: 'ハザクアスピダⅡ',
          materials: [
            { name: '冥灯龍の幽幕', quantity: 3 },
            { name: '屍套龍の尖爪', quantity: 6 },
            { name: '屍套龍の尻尾', quantity: 2 },
            { name: '屍套龍の宝玉', quantity: 1 },
          ],
        },
        {
          name: '屍盾斧ヴァルアスピダ',
          materials: [
            { name: '屍套龍の剛爪', quantity: 3 },
            { name: '闇を食む牙', quantity: 2 },
            { name: '死屍の厚龍鱗', quantity: 5 },
            { name: '死屍を紡いだ被膜', quantity: 3 },
          ],
        },
        {
          name: 'ヒュドロスカルディア',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '溟龍の特上皮', quantity: 5 },
            { name: '溟龍の剛爪', quantity: 4 },
            { name: '溟龍の幻曜ヒゲ', quantity: 2 },
          ],
        },
        {
          name: 'パルサーアームズⅠ',
          materials: [
            { name: '飛雷竜の爪', quantity: 1 },
            { name: '飛雷竜の毛皮', quantity: 2 },
            { name: '飛雷竜の鱗', quantity: 3 },
          ],
        },
        {
          name: 'パルサーアームズⅡ',
          materials: [
            { name: '深海の結晶', quantity: 3 },
            { name: '電気袋', quantity: 2 },
            { name: '飛雷竜の爪', quantity: 3 },
            { name: '飛雷竜の電極針', quantity: 2 },
          ],
        },
        {
          name: 'パルサーアームズⅢ',
          materials: [
            { name: 'いびつな狂骨', quantity: 2 },
            { name: '上竜骨', quantity: 2 },
            { name: '飛雷竜の電極針', quantity: 2 },
            { name: '飛雷竜の皮膜', quantity: 2 },
          ],
        },
        {
          name: 'カガチノカイナⅠ',
          materials: [
            { name: '飛雷竜の上毛皮', quantity: 3 },
            { name: '飛雷竜の上鱗', quantity: 4 },
            { name: '飛雷竜の尖爪', quantity: 3 },
            { name: '龍脈の結晶', quantity: 3 },
          ],
        },
        {
          name: 'カガチノカイナⅡ',
          materials: [
            { name: '上質なねじれた角', quantity: 2 },
            { name: '飛雷竜の雷極針', quantity: 2 },
            { name: '飛雷竜の尖爪', quantity: 4 },
            { name: '電撃袋', quantity: 3 },
          ],
        },
        {
          name: 'カガチノカイナⅢ',
          materials: [
            { name: '竜玉', quantity: 1 },
            { name: '飛雷竜の雷極針', quantity: 4 },
            { name: '飛雷竜の尖爪', quantity: 6 },
            { name: '滅尽龍の尖爪', quantity: 2 },
          ],
        },
        {
          name: 'カガチノミタマⅠ',
          materials: [
            { name: '飛雷竜の厚毛皮', quantity: 2 },
            { name: '飛雷竜の剛爪', quantity: 1 },
            { name: '飛雷竜の厚鱗', quantity: 2 },
            { name: '雷電袋', quantity: 1 },
          ],
        },
        {
          name: 'カガチノミタマⅡ',
          materials: [
            { name: '惨爪竜の強硬筋', quantity: 2 },
            { name: '飛雷竜の剛爪', quantity: 2 },
            { name: '飛雷竜の厚皮膜', quantity: 2 },
            { name: '飛雷竜の雷光針', quantity: 2 },
          ],
        },
        {
          name: 'ベニカガチノドクシュⅠ',
          materials: [
            { name: '劇烈毒袋', quantity: 1 },
            { name: '飛毒竜の厚毛皮', quantity: 2 },
            { name: '飛毒竜の剛爪', quantity: 1 },
            { name: '飛毒竜の厚鱗', quantity: 2 },
          ],
        },
        {
          name: 'ベニカガチノドクシュⅡ',
          materials: [
            { name: '飛毒竜の剛爪', quantity: 2 },
            { name: '飛毒竜の厚皮膜', quantity: 2 },
            { name: '飛毒竜の猛毒針', quantity: 2 },
            { name: '硫斬竜の剣山状殻', quantity: 2 },
          ],
        },
        {
          name: 'ガロンアームズⅠ',
          materials: [
            { name: '惨爪竜の鱗', quantity: 4 },
            { name: '惨爪竜の爪', quantity: 2 },
            { name: '惨爪竜の牙', quantity: 2 },
          ],
        },
        {
          name: 'ガロンアームズⅡ',
          materials: [
            { name: '惨爪竜の爪', quantity: 2 },
            { name: '惨爪竜の逆鱗', quantity: 1 },
            { name: '惨爪竜の尻尾', quantity: 2 },
            { name: '上質な堅骨', quantity: 5 },
          ],
        },
        {
          name: '憎しみの炎',
          materials: [
            { name: 'いにしえの龍骨', quantity: 1 },
            { name: '惨爪竜の上鱗', quantity: 8 },
            { name: '惨爪竜の尖爪', quantity: 4 },
            { name: '惨爪竜の鋭牙', quantity: 3 },
          ],
        },
        {
          name: '憎【オディウム】',
          materials: [
            { name: '炎龍の尖爪', quantity: 2 },
            { name: '惨爪竜の尖爪', quantity: 6 },
            { name: '惨爪竜の鋭牙', quantity: 5 },
            { name: '惨爪竜の宝玉', quantity: 1 },
          ],
        },
        {
          name: '憎【オディウム】改',
          materials: [
            { name: '惨爪竜の剛爪', quantity: 2 },
            { name: '惨爪竜の厚鱗', quantity: 3 },
            { name: '惨爪竜の重牙', quantity: 2 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: '憎悪【アニムス】',
          materials: [
            { name: '惨爪竜の剛爪', quantity: 4 },
            { name: '惨爪竜の靭尾', quantity: 2 },
            { name: '惨爪竜の天鱗', quantity: 1 },
            { name: '硫斬竜の断剣尾', quantity: 2 },
          ],
        },
        {
          name: '冥府の炎',
          materials: [
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '兇爪竜の剛爪', quantity: 3 },
            { name: '兇爪竜の厚鱗', quantity: 5 },
            { name: '兇爪竜の重牙', quantity: 2 },
          ],
        },
        {
          name: '死怨【グラッジ】',
          materials: [
            { name: '兇爪竜の剛爪', quantity: 4 },
            { name: '兇爪竜の靭尾', quantity: 2 },
            { name: '兇爪竜の天鱗', quantity: 1 },
            { name: '溟龍の剛爪', quantity: 2 },
          ],
        },
      ],
    },
    {
      name: '龍骨系',
      weapons: [
        {
          name: '龍骨盾斧Ⅰ',
          materials: [
            { name: 'いびつな狂骨', quantity: 5 },
            { name: '強固な岩骨', quantity: 5 },
            { name: '太古の大骨', quantity: 5 },
            { name: 'サンゴの紅骨', quantity: 5 },
          ],
        },
        {
          name: '龍骨盾斧Ⅱ',
          materials: [
            { name: '竜骨【大】', quantity: 8 },
            { name: '頑丈な骨', quantity: 8 },
            { name: '上竜骨', quantity: 6 },
          ],
        },
        {
          name: '龍骨盾斧Ⅲ',
          materials: [
            { name: '古龍骨', quantity: 10 },
            { name: '竜玉', quantity: 1 },
            { name: 'いにしえの龍骨', quantity: 2 },
            { name: '荒々しい蛮骨', quantity: 4 },
          ],
        },
        {
          name: '龍封じの盾斧Ⅰ',
          materials: [
            { name: '頑強な重骨', quantity: 6 },
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '剛竜骨', quantity: 3 },
            { name: '重竜骨', quantity: 4 },
          ],
        },
        {
          name: '龍封じの盾斧Ⅱ',
          materials: [
            { name: '剛竜骨', quantity: 4 },
            { name: '太古龍骨', quantity: 6 },
            { name: '大竜玉', quantity: 1 },
            { name: '溶岩竜の特上ヒレ', quantity: 2 },
          ],
        },
        {
          name: '業力不滅ー閻王ー',
          materials: [
            { name: '地啼竜の慈鱗', quantity: 6 },
            { name: '地啼竜の慈眼殻', quantity: 2 },
            { name: '地啼竜の慈爪', quantity: 4 },
            { name: '地啼竜の顕玉', quantity: 1 },
          ],
        },
        {
          name: 'マグダ・マヌス',
          materials: [
            { name: '熔山龍の熱鱗', quantity: 4 },
            { name: '熔山龍のマグマ', quantity: 4 },
            { name: '熔山龍の岩殻', quantity: 8 },
            { name: '熔山龍の宝玉', quantity: 1 },
          ],
        },
        {
          name: '捲土重来マグマヌス',
          materials: [
            { name: '獄炎石', quantity: 3 },
            { name: '熔山龍の背甲', quantity: 2 },
            { name: '熔山龍の胸殻', quantity: 2 },
            { name: '冥灯龍の白殻', quantity: 4 },
          ],
        },
        {
          name: '真・捲土重来マグマス',
          materials: [
            { name: '龍脈の古龍骨', quantity: 3 },
            { name: '龍脈の剛龍骨', quantity: 5 },
            { name: '龍脈の重龍骨', quantity: 6 },
            { name: '古龍の大宝玉', quantity: 1 },
          ],
        },
      ],
    },
    {
      name: '黒鋼系',
      weapons: [
        {
          name: '黒鋼の盾斧Ⅰ',
          materials: [
            { name: '大地の結晶', quantity: 10 },
            { name: 'ライトクリスタル', quantity: 1 },
            { name: '深海の結晶', quantity: 10 },
            { name: '龍脈の結晶', quantity: 10 },
          ],
        },
        {
          name: '黒鋼の盾斧Ⅱ',
          materials: [
            { name: '獄炎石', quantity: 1 },
            { name: '竜玉', quantity: 1 },
            { name: 'カブレライト鉱石', quantity: 10 },
            { name: 'ユニオン鉱石', quantity: 5 },
          ],
        },
        {
          name: 'ダオラ＝カスカ',
          materials: [
            { name: '鋼龍の堅殻', quantity: 5 },
            { name: '鋼龍の尻尾', quantity: 2 },
            { name: '鋼龍の尖爪', quantity: 3 },
            { name: '鋼龍の翼', quantity: 4 },
          ],
        },
        {
          name: 'ダオラ＝ゲンム',
          materials: [
            { name: '鋼龍の尖角', quantity: 5 },
            { name: '鋼龍の宝玉', quantity: 1 },
            { name: '冥灯龍の幽翼', quantity: 2 },
            { name: '鋼龍の尖爪', quantity: 4 },
          ],
        },
        {
          name: 'ダオラ＝アクパーラ',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '鋼の厚龍鱗', quantity: 5 },
            { name: '鋼龍の剛爪', quantity: 4 },
            { name: '鋼龍の剛角', quantity: 5 },
          ],
        },
        {
          name: 'ゼノ＝ラーツ',
          materials: [
            { name: '冥灯龍の白殻', quantity: 6 },
            { name: '冥灯龍の幽爪', quantity: 4 },
            { name: '冥灯龍の幽玉', quantity: 1 },
            { name: '冥灯龍の尻尾', quantity: 2 },
          ],
        },
        {
          name: 'ゼノ＝ラーツ改',
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
          name: '暴虐の盾斧',
          materials: [
            { name: '恐暴竜の黒鱗', quantity: 6 },
            { name: '恐暴竜の大牙', quantity: 3 },
            { name: '恐暴竜の鉤爪', quantity: 2 },
            { name: '恐暴竜の唾液', quantity: 2 },
          ],
        },
        {
          name: 'デストネーター',
          materials: [
            { name: '恐暴竜の大牙', quantity: 5 },
            { name: '恐暴竜の頭殻', quantity: 2 },
            { name: '恐暴竜の宝玉', quantity: 1 },
            { name: '古龍の血', quantity: 5 },
          ],
        },
        {
          name: '業盾グルドレッド',
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
      name: 'ダンテの魔剣系',
      weapons: [
        {
          name: 'ダンテの魔剣',
          materials: [
            { name: '炎王龍のたてがみ', quantity: 4 },
            { name: '蛮顎竜の宝玉', quantity: 1 },
            { name: '惨爪竜の宝玉', quantity: 1 },
            { name: 'レッドオーブ', quantity: 2 },
          ],
        },
        {
          name: 'ダンテの魔剣・改',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '炎龍の剛爪', quantity: 3 },
            { name: '雷狼竜の剛角', quantity: 2 },
            { name: '親友の証', quantity: 1 },
          ],
        },
      ],
    },
    {
      name: '炎妃龍系',
      weapons: [
        {
          name: 'エンプレスアルマ',
          materials: [
            { name: '炎妃龍のたてがみ', quantity: 3 },
            { name: '炎妃龍の宝玉', quantity: 1 },
            { name: '炎妃龍の尖角', quantity: 3 },
            { name: '炎妃龍の上鱗', quantity: 4 },
          ],
        },
        {
          name: 'エンプレスアルマ・冥灯',
          materials: [
            { name: '冥灯龍の幽角', quantity: 3 },
            { name: '冥灯龍の幽玉', quantity: 1 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の尻尾', quantity: 2 },
          ],
        },
        {
          name: 'エンプレスアルマ・滅尽',
          materials: [
            { name: '滅尽龍の宝玉', quantity: 1 },
            { name: '滅尽龍の大角', quantity: 3 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の翼', quantity: 3 },
          ],
        },
        {
          name: 'エンプレスアルマ・炎妃',
          materials: [
            { name: '炎王龍の尖角', quantity: 3 },
            { name: '爆鱗竜の宝玉', quantity: 1 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の尖角', quantity: 2 },
          ],
        },
        {
          name: '魂焔の盾斧・炎妃',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '炎妃龍の厚鱗', quantity: 4 },
            { name: '炎妃龍の剛角', quantity: 4 },
            { name: '炎妃龍の大たてがみ', quantity: 4 },
          ],
        },
        {
          name: '魂焔の盾斧・滅尽',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '殲滅の大剛角', quantity: 3 },
            { name: '無窮の新生殻', quantity: 3 },
            { name: '炎妃龍の厚鱗', quantity: 4 },
          ],
        },
        {
          name: '魂焔の盾斧・冥灯',
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
          name: '金剛盾斧',
          materials: [
            { name: '金獅子の重牙', quantity: 2 },
            { name: '金獅子の剛爪', quantity: 1 },
            { name: '金獅子の剛角', quantity: 1 },
            { name: '金獅子の黒荒毛', quantity: 2 },
          ],
        },
        {
          name: '金剛盾斧イカヅチ',
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
          name: '鬼神盾斧【夜叉】',
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
      name: 'ダークイーグル系',
      weapons: [
        {
          name: 'ダークイーグル',
          materials: [
            { name: '迅竜の豪黒毛', quantity: 4 },
            { name: '浮眠竜の厚毛皮', quantity: 4 },
            { name: '浮眠竜の剛翼', quantity: 2 },
            { name: '黒鷲の図面', quantity: 1 },
          ],
        },
        {
          name: '雷光のダークイーグル',
          materials: [
            { name: 'ピュアクリスタル', quantity: 2 },
            { name: '迅竜の剛刃翼', quantity: 4 },
            { name: '覇王の証', quantity: 1 },
            { name: '黒鷲の図面', quantity: 3 },
          ],
        },
      ],
    },
    {
      name: '獄狼竜系',
      weapons: [
        {
          name: '獄盾斧リュウケン',
          materials: [
            { name: '獄狼竜の滅龍毛', quantity: 2 },
            { name: '獄狼竜の滅龍殻', quantity: 2 },
            { name: '獄狼竜の剛角', quantity: 1 },
            { name: '獄狼竜の剛爪', quantity: 1 },
          ],
        },
        {
          name: '狼牙盾斧【呪獄】',
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
          name: '砕光の盾斧',
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
          name: '煌黒の盾斧',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '煌黒龍の凶爪', quantity: 3 },
            { name: '天を統べる角', quantity: 1 },
            { name: '煌黒龍の天鱗', quantity: 3 },
          ],
        },
        {
          name: '煌黒盾斧アルブルガ',
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
          name: '黒龍盾斧',
          materials: [
            { name: '黒龍の厚鱗', quantity: 3 },
            { name: '黒龍の重胸殻', quantity: 1 },
            { name: '黒龍の剛角', quantity: 1 },
            { name: '黒龍の邪眼', quantity: 1 },
          ],
        },
        {
          name: '真・黒龍盾斧',
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
          name: 'ギルドパレスディスク',
          materials: [
            { name: 'グラシスメタル', quantity: 5 },
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '琥珀色の重牙', quantity: 2 },
            { name: '祭典チケット', quantity: 2 },
          ],
        },
        {
          name: '宮廷鏡盾【機星】',
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
