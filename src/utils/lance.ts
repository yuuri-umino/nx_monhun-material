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
      weapons: [
        {
          name: 'アイアンランスⅠ',
          materials: [{ name: '鉄鉱石', quantity: 1 }],
        },
        {
          name: 'アイアンランスⅡ',
          materials: [{ name: '鉄鉱石', quantity: 2 }],
        },
        {
          name: 'アイアンランスⅢ',
          materials: [
            { name: '大地の結晶', quantity: 2 },
            { name: '鉄鉱石', quantity: 5 },
            { name: 'マカライト鉱石', quantity: 2 },
          ],
        },
        {
          name: 'スティールランスⅠ',
          materials: [
            { name: 'マカライト鉱石', quantity: 5 },
            { name: '竜骨【中】', quantity: 2 },
            { name: 'ドラグライト鉱石', quantity: 2 },
          ],
        },
        {
          name: 'スティールランスⅡ',
          materials: [
            { name: 'マカライト鉱石', quantity: 10 },
            { name: 'ドラグライト鉱石', quantity: 5 },
            { name: '上竜骨', quantity: 2 },
            { name: '深海の結晶', quantity: 2 },
          ],
        },
        {
          name: 'スティールランスⅢ',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 5 },
            { name: 'カブレライト鉱石', quantity: 8 },
            { name: '龍脈の結晶', quantity: 2 },
          ],
        },
        {
          name: 'クロムランツェⅠ',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 10 },
            { name: 'カブレライト鉱石', quantity: 5 },
            { name: '龍脈の結晶', quantity: 3 },
            { name: 'ユニオン鉱石', quantity: 8 },
          ],
        },
        {
          name: 'クロムランツェⅡ',
          materials: [
            { name: '古龍の血', quantity: 2 },
            { name: '獄炎石', quantity: 1 },
            { name: 'カブレライト鉱石', quantity: 20 },
            { name: 'ユニオン鉱石', quantity: 13 },
          ],
        },
        {
          name: 'クロムスクリューⅠ',
          materials: [
            { name: 'カブレライト鉱石', quantity: 4 },
            { name: '霊脈の結晶', quantity: 2 },
            { name: 'グラシスメタル', quantity: 1 },
            { name: 'エルトライト鉱石', quantity: 2 },
          ],
        },
        {
          name: 'クロムスクリューⅡ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 2 },
            { name: 'エルトライト鉱石', quantity: 4 },
            { name: '重竜骨', quantity: 3 },
            { name: 'デプスライト鉱石', quantity: 2 },
          ],
        },
        {
          name: 'クロムスクリューⅢ',
          materials: [
            { name: '古龍の浄血', quantity: 3 },
            { name: 'メランジェ鉱石', quantity: 3 },
            { name: 'エルトライト鉱石', quantity: 6 },
            { name: 'ピュアクリスタル', quantity: 1 },
          ],
        },
        {
          name: 'ホウテンゲキ【鳥】',
          materials: [
            { name: '幻鳥竜玉', quantity: 1 },
            { name: '黒狼鳥の銀狼毛', quantity: 4 },
            { name: '黒狼鳥の厚鱗', quantity: 3 },
            { name: '黒狼鳥の地獄耳', quantity: 2 },
          ],
        },
        {
          name: 'ホウテンゲキ【狼】',
          materials: [
            { name: '大竜玉', quantity: 1 },
            { name: 'イカしたクチバシ', quantity: 3 },
            { name: '黒狼鳥の剛翼', quantity: 2 },
            { name: '傷痕の紫甲殻', quantity: 3 },
          ],
        },
        {
          name: 'ネルガルカルガ',
          materials: [
            { name: '滅尽龍の再生殻', quantity: 4 },
            { name: '滅尽龍の尻尾', quantity: 2 },
            { name: '滅尽龍の堅殻', quantity: 2 },
            { name: '滅尽龍の尖爪', quantity: 3 },
          ],
        },
        {
          name: '亡滅の腕',
          materials: [
            { name: '滅尽龍の宝玉', quantity: 1 },
            { name: '滅尽龍の尖爪', quantity: 5 },
            { name: '滅尽龍の大角', quantity: 5 },
            { name: '冥灯龍の幽角', quantity: 2 },
          ],
        },
        {
          name: '亡滅の腕【邪】',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '殲滅の大剛角', quantity: 3 },
            { name: '無窮の新生殻', quantity: 5 },
            { name: '滅尽龍の剛爪', quantity: 4 },
          ],
        },
        {
          name: 'グレイスランサーⅠ',
          materials: [
            { name: '風漂竜の鱗', quantity: 4 },
            { name: '風漂竜の爪', quantity: 3 },
            { name: '氷結袋', quantity: 2 },
          ],
        },
        {
          name: 'グレイスランサーⅡ',
          materials: [
            { name: '浮空竜の翼', quantity: 4 },
            { name: '風漂竜の爪', quantity: 4 },
            { name: '風漂竜の逆鱗', quantity: 1 },
            { name: '風漂竜の尾膜', quantity: 3 },
          ],
        },
        {
          name: 'ギエナハルバⅠ',
          materials: [
            { name: '風漂竜の上鱗', quantity: 5 },
            { name: '凍結袋', quantity: 2 },
            { name: '風漂竜の尖爪', quantity: 3 },
            { name: '風漂竜の翼', quantity: 3 },
          ],
        },
        {
          name: 'ギエナハルバⅡ',
          materials: [
            { name: '鋼龍の尖爪', quantity: 2 },
            { name: '風漂竜の上皮', quantity: 3 },
            { name: '風漂竜の尖爪', quantity: 5 },
            { name: '風漂竜の宝玉', quantity: 1 },
          ],
        },
        {
          name: 'ギエナハルバⅢ',
          materials: [
            { name: '凍てついた氷骨', quantity: 4 },
            { name: '風漂竜の剛爪', quantity: 2 },
            { name: '風漂竜の厚鱗', quantity: 3 },
            { name: '風漂竜の重尾膜', quantity: 2 },
          ],
        },
        {
          name: 'ブリーナハルバ',
          materials: [
            { name: '漆黒の氷刃爪', quantity: 2 },
            { name: '瞬間凍結袋', quantity: 5 },
            { name: '氷霜をまとう皮', quantity: 2 },
            { name: '冷厳なる翼', quantity: 4 },
          ],
        },
        {
          name: 'ニュクスハルバⅠ',
          materials: [
            { name: 'ゴム質の重殻', quantity: 2 },
            { name: '卒倒昏睡袋', quantity: 1 },
            { name: '浮眠竜の厚毛皮', quantity: 3 },
            { name: '浮眠竜の剛翼', quantity: 2 },
          ],
        },
        {
          name: 'ニュクスハルバⅡ',
          materials: [
            { name: '黒角竜の重甲', quantity: 2 },
            { name: '大竜玉', quantity: 1 },
            { name: '浮眠竜の剛翼', quantity: 3 },
            { name: '浮眠竜の厚鱗', quantity: 5 },
          ],
        },
        {
          name: 'クルルランスⅠ',
          materials: [
            { name: '掻鳥の鱗', quantity: 3 },
            { name: '掻鳥の皮', quantity: 2 },
            { name: '掻鳥の翼', quantity: 2 },
            { name: '掻鳥の赤角', quantity: 1 },
          ],
        },
        {
          name: 'クルルランスⅡ',
          materials: [
            { name: '掻鳥の剛角', quantity: 1 },
            { name: '掻鳥の重殻', quantity: 3 },
            { name: '掻鳥の爪', quantity: 3 },
            { name: '掻鳥の骨髄', quantity: 2 },
          ],
        },
        {
          name: 'クルルランスⅢ',
          materials: [
            { name: 'いびつな狂骨', quantity: 3 },
            { name: '掻鳥の飾り羽', quantity: 4 },
            { name: '掻鳥のクチバシ', quantity: 2 },
            { name: '惨爪竜の爪', quantity: 2 },
          ],
        },
        {
          name: 'クルルハスターⅠ',
          materials: [
            { name: '掻鳥の上鱗', quantity: 6 },
            { name: '掻鳥の上皮', quantity: 4 },
            { name: '掻鳥の大クチバシ', quantity: 3 },
          ],
        },
        {
          name: 'クルルハスターⅡ',
          materials: [
            { name: '掻鳥の大飾り羽', quantity: 3 },
            { name: '掻鳥の大クチバシ', quantity: 4 },
            { name: '荒々しい蛮骨', quantity: 3 },
            { name: '惨爪竜の尖爪', quantity: 2 },
          ],
        },
        {
          name: 'クルルハスターⅢ',
          materials: [
            { name: '掻鳥の大飾り羽', quantity: 4 },
            { name: '掻鳥の大クチバシ', quantity: 5 },
            { name: '鳥竜玉', quantity: 1 },
            { name: '滅尽龍の尖爪', quantity: 2 },
          ],
        },
        {
          name: 'ネスルメンカールⅠ',
          materials: [
            { name: '頑強な重骨', quantity: 2 },
            { name: '掻鳥の巨大クチバシ', quantity: 1 },
            { name: '掻鳥の厚皮', quantity: 2 },
            { name: '掻鳥の厚鱗', quantity: 3 },
          ],
        },
        {
          name: 'ネスルメンカールⅡ',
          materials: [
            { name: '迅竜の重牙', quantity: 2 },
            { name: '重竜骨', quantity: 3 },
            { name: '掻鳥の巨大クチバシ', quantity: 2 },
            { name: '掻鳥の特大飾り羽', quantity: 3 },
          ],
        },
        {
          name: 'トゥースランス',
          materials: [
            { name: '凍てついた氷骨', quantity: 3 },
            { name: '瞬間凍結袋', quantity: 4 },
            { name: '氷牙竜の剛爪', quantity: 3 },
            { name: '氷牙竜の重殻', quantity: 4 },
          ],
        },
        {
          name: 'トゥースランス改',
          materials: [
            { name: '琥珀色の重牙', quantity: 3 },
            { name: '漆黒の氷刃爪', quantity: 2 },
            { name: '大竜玉', quantity: 1 },
            { name: '氷牙竜の重棘', quantity: 3 },
          ],
        },
        {
          name: 'セイバートゥース',
          materials: [
            { name: '琥珀色の重牙', quantity: 2 },
            { name: '太古龍骨', quantity: 5 },
            { name: '氷牙竜の剛爪', quantity: 4 },
            { name: '冰龍の剛爪', quantity: 2 },
          ],
        },
        {
          name: 'セイバーロドス',
          materials: [
            { name: '大竜玉', quantity: 1 },
            { name: '氷牙竜チケット', quantity: 3 },
            { name: '白銀の氷刃牙', quantity: 3 },
            { name: '氷河を砕く剣爪', quantity: 2 },
          ],
        },
        {
          name: 'ガマルパイルⅠ',
          materials: [
            { name: '岩賊竜の上皮', quantity: 4 },
            { name: '岩賊竜の上鱗', quantity: 6 },
            { name: '岩賊竜の尖爪', quantity: 4 },
          ],
        },
        {
          name: 'ガマルパイルⅡ',
          materials: [
            { name: '獄炎の龍鱗', quantity: 4 },
            { name: '竜玉', quantity: 1 },
            { name: '岩賊竜の顎', quantity: 4 },
            { name: '岩賊竜の尻尾', quantity: 3 },
          ],
        },
        {
          name: 'ガマルスクリューⅠ',
          materials: [
            { name: 'ガストドンの重殻', quantity: 2 },
            { name: '岩賊竜の剛爪', quantity: 2 },
            { name: '岩賊竜の厚皮', quantity: 2 },
            { name: '岩賊竜の厚鱗', quantity: 3 },
          ],
        },
        {
          name: 'ガマルスクリューⅡ',
          materials: [
            { name: '岩賊竜の大顎', quantity: 2 },
            { name: '岩賊竜の靭尾', quantity: 1 },
            { name: '砕竜の重黒曜甲', quantity: 2 },
            { name: '重竜骨', quantity: 5 },
          ],
        },
        {
          name: 'ヒドゥンハスターⅠ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 1 },
            { name: '迅竜の厚鱗', quantity: 3 },
            { name: '迅竜の重牙', quantity: 2 },
            { name: '迅竜の重尾棘', quantity: 2 },
          ],
        },
        {
          name: 'ヒドゥンハスターⅡ',
          materials: [
            { name: '迅竜の天鱗', quantity: 1 },
            { name: '迅竜の靭尾', quantity: 2 },
            { name: '迅竜の剛刃翼', quantity: 3 },
            { name: '雷顎竜の重牙', quantity: 2 },
          ],
        },
        {
          name: 'サンダーランスⅠ',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 5 },
            { name: '電気袋', quantity: 1 },
            { name: '飛雷竜の爪', quantity: 2 },
            { name: '飛雷竜の電極針', quantity: 1 },
          ],
        },
        {
          name: 'サンダーランスⅡ',
          materials: [
            { name: '上竜骨', quantity: 2 },
            { name: '深海の結晶', quantity: 3 },
            { name: '飛雷竜の電極針', quantity: 2 },
            { name: '飛雷竜の皮膜', quantity: 2 },
          ],
        },
        {
          name: 'ライトニングパイルⅠ',
          materials: [
            { name: 'ランゴスタの薄羽', quantity: 3 },
            { name: '飛雷竜の上毛皮', quantity: 3 },
            { name: '飛雷竜の上鱗', quantity: 4 },
            { name: 'カブレライト鉱石', quantity: 5 },
          ],
        },
        {
          name: 'ライトニングパイルⅡ',
          materials: [
            { name: '飛雷竜の皮膜', quantity: 4 },
            { name: '飛雷竜の雷極針', quantity: 2 },
            { name: '電撃袋', quantity: 3 },
            { name: 'ユニオン鉱石', quantity: 5 },
          ],
        },
        {
          name: 'ライトニングパイルⅢ',
          materials: [
            { name: '古龍の血', quantity: 3 },
            { name: '竜玉', quantity: 1 },
            { name: '飛雷竜の雷極針', quantity: 4 },
            { name: '飛雷竜の尖爪', quantity: 6 },
          ],
        },
        {
          name: 'ライトニングボルトⅠ',
          materials: [
            { name: '飛雷竜の厚毛皮', quantity: 2 },
            { name: '飛雷竜の剛爪', quantity: 1 },
            { name: '飛雷竜の厚鱗', quantity: 2 },
            { name: '雷電袋', quantity: 1 },
          ],
        },
        {
          name: 'ライトニングボルトⅡ',
          materials: [
            { name: '惨爪竜の強硬筋', quantity: 2 },
            { name: '飛雷竜の剛爪', quantity: 2 },
            { name: '飛雷竜の厚皮膜', quantity: 2 },
            { name: '飛雷竜の雷光針', quantity: 2 },
          ],
        },
        {
          name: '迅雷の疾槍Ⅰ',
          materials: [
            { name: '雷電袋', quantity: 3 },
            { name: '雷狼竜の雷電殻', quantity: 2 },
            { name: '雷狼竜の重殻', quantity: 5 },
            { name: '雷狼竜の剛爪', quantity: 3 },
          ],
        },
        {
          name: '迅雷の疾槍Ⅱ',
          materials: [
            { name: '雷狼竜の雷電毛', quantity: 4 },
            { name: '雷狼竜の剛角', quantity: 3 },
            { name: '雷狼竜の天玉', quantity: 1 },
            { name: '超電雷光虫', quantity: 5 },
          ],
        },
        {
          name: 'ブルームランスⅠ',
          materials: [
            { name: '毒袋', quantity: 1 },
            { name: '毒妖鳥の鱗', quantity: 3 },
            { name: '毒妖鳥の羽根', quantity: 2 },
          ],
        },
        {
          name: 'ブルームランスⅡ',
          materials: [
            { name: '毒妖鳥の尻尾', quantity: 1 },
            { name: '毒妖鳥の喉袋', quantity: 2 },
            { name: '深海の結晶', quantity: 3 },
            { name: '毒妖鳥の甲殻', quantity: 3 },
          ],
        },
        {
          name: 'ブルームランスⅢ',
          materials: [
            { name: '毒袋', quantity: 2 },
            { name: '毒妖鳥の喉袋', quantity: 2 },
            { name: '毒妖鳥の羽根', quantity: 4 },
            { name: '上竜骨', quantity: 2 },
          ],
        },
        {
          name: 'ダチュラパイクⅠ',
          materials: [
            { name: '毒妖鳥の翼', quantity: 2 },
            { name: '毒妖鳥の上鱗', quantity: 3 },
            { name: '猛毒袋', quantity: 2 },
            { name: '上質な堅骨', quantity: 3 },
          ],
        },
        {
          name: 'ダチュラパイクⅡ',
          materials: [
            { name: '堅竜骨', quantity: 3 },
            { name: '毒妖鳥の堅殻', quantity: 5 },
            { name: '毒妖鳥の翼', quantity: 3 },
            { name: '猛毒袋', quantity: 2 },
          ],
        },
        {
          name: 'ダチュラパイクⅢ',
          materials: [
            { name: '鳥竜玉', quantity: 1 },
            { name: '毒妖鳥の翼', quantity: 6 },
            { name: '毒妖鳥の大喉袋', quantity: 4 },
            { name: '屍套龍の翼', quantity: 2 },
          ],
        },
        {
          name: 'ダチュラスプラウトⅠ',
          materials: [
            { name: '強竜骨', quantity: 2 },
            { name: '劇烈毒袋', quantity: 2 },
            { name: '毒妖鳥の剛翼', quantity: 2 },
            { name: '毒妖鳥の厚鱗', quantity: 3 },
          ],
        },
        {
          name: 'ダチュラスプラウトⅡ',
          materials: [
            { name: '重竜骨', quantity: 3 },
            { name: '毒妖鳥の靭尾', quantity: 1 },
            { name: '毒妖鳥の特大喉袋', quantity: 1 },
            { name: '雌火竜の秘棘', quantity: 2 },
          ],
        },
        {
          name: 'ラグーナパイクⅠ',
          materials: [
            { name: '水妖鳥の剛翼', quantity: 2 },
            { name: '水妖鳥の厚鱗', quantity: 3 },
            { name: 'デプスライト鉱石', quantity: 2 },
            { name: '特大水袋', quantity: 2 },
          ],
        },
        {
          name: 'ラグーナパイクⅡ',
          materials: [
            { name: '剛竜骨', quantity: 3 },
            { name: '水妖鳥の靭尾', quantity: 1 },
            { name: '水妖鳥の特大喉袋', quantity: 1 },
            { name: '硫斬竜の重牙', quantity: 2 },
          ],
        },
        {
          name: 'フレイムランスⅠ',
          materials: [
            { name: '火竜の骨髄', quantity: 1 },
            { name: '火竜の翼膜', quantity: 2 },
            { name: '火炎袋', quantity: 2 },
            { name: '火竜の鱗', quantity: 1 },
          ],
        },
        {
          name: 'フレイムランスⅡ',
          materials: [
            { name: '火竜の尻尾', quantity: 2 },
            { name: '火竜の逆鱗', quantity: 1 },
            { name: '火竜の鱗', quantity: 6 },
            { name: '爆炎袋', quantity: 3 },
          ],
        },
        {
          name: 'レッドテイル',
          materials: [
            { name: '火竜の延髄', quantity: 1 },
            { name: '火竜の堅殻', quantity: 4 },
            { name: '火竜の上鱗', quantity: 6 },
            { name: '火竜の翼', quantity: 2 },
          ],
        },
        {
          name: 'ブルーテイル',
          materials: [
            { name: '火竜の紅玉', quantity: 1 },
            { name: '蒼火竜の上鱗', quantity: 6 },
            { name: '蒼火竜の堅殻', quantity: 4 },
            { name: '蒼火竜の翼', quantity: 3 },
          ],
        },
        {
          name: 'ブループロミネンス',
          materials: [
            { name: '炎王龍の尖角', quantity: 2 },
            { name: '火竜の紅玉', quantity: 1 },
            { name: '蒼火竜の上鱗', quantity: 8 },
            { name: '蒼火竜の尻尾', quantity: 3 },
          ],
        },
        {
          name: 'ブループロミネンス改',
          materials: [
            { name: '火竜の厚鱗', quantity: 6 },
            { name: '火竜の剛翼', quantity: 2 },
            { name: '火竜の剛翼爪', quantity: 4 },
            { name: '火竜の重殻', quantity: 4 },
          ],
        },
        {
          name: 'ソウルプロミネンス',
          materials: [
            { name: '火竜の天鱗', quantity: 1 },
            { name: '蒼火竜の剛翼', quantity: 3 },
            { name: '蒼火竜の厚鱗', quantity: 6 },
            { name: '蒼火竜の重殻', quantity: 4 },
          ],
        },
        {
          name: 'シルバープロミネンス',
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
          name: 'ボーンランスⅠ',
          materials: [{ name: '竜骨【小】', quantity: 1 }],
        },
        {
          name: 'ボーンランスⅡ',
          materials: [{ name: '竜骨【小】', quantity: 2 }],
        },
        {
          name: 'ボーンランスⅢ',
          materials: [
            { name: '太古の大骨', quantity: 1 },
            { name: '竜骨【中】', quantity: 2 },
          ],
        },
        {
          name: 'ハードボーンランスⅠ',
          materials: [
            { name: '強固な岩骨', quantity: 2 },
            { name: '竜骨【大】', quantity: 1 },
            { name: '竜骨【中】', quantity: 5 },
          ],
        },
        {
          name: 'ハードボーンランスⅡ',
          materials: [
            { name: '竜骨【大】', quantity: 1 },
            { name: '頑丈な骨', quantity: 4 },
            { name: '上竜骨', quantity: 2 },
          ],
        },
        {
          name: 'ハードボーンランスⅢ',
          materials: [
            { name: '上竜骨', quantity: 2 },
            { name: '尖竜骨', quantity: 2 },
            { name: '上質な堅骨', quantity: 2 },
          ],
        },
        {
          name: 'ヘビィボーンランスⅠ',
          materials: [
            { name: '堅竜骨', quantity: 4 },
            { name: '尖竜骨', quantity: 6 },
            { name: '上質な堅骨', quantity: 10 },
          ],
        },
        {
          name: 'ヘビィボーンランスⅡ',
          materials: [
            { name: '堅竜骨', quantity: 6 },
            { name: '古龍骨', quantity: 4 },
            { name: '上質な堅骨', quantity: 20 },
            { name: 'いにしえの龍骨', quantity: 1 },
          ],
        },
        {
          name: 'グランドハルバードⅠ',
          materials: [
            { name: '堅竜骨', quantity: 4 },
            { name: '上質な堅骨', quantity: 4 },
            { name: '頑強な重骨', quantity: 2 },
            { name: '凍てついた氷骨', quantity: 1 },
          ],
        },
        {
          name: 'グランドハルバードⅡ',
          materials: [
            { name: '頑強な重骨', quantity: 4 },
            { name: 'モンスターの特濃', quantity: 2 },
            { name: '剛竜骨', quantity: 2 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: 'グランドハルバードⅢ',
          materials: [
            { name: '頑強な重骨', quantity: 6 },
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '剛竜骨', quantity: 4 },
            { name: '太古龍骨', quantity: 3 },
          ],
        },
        {
          name: 'アイスランサー',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '氷晶の厚龍鱗', quantity: 4 },
            { name: '冰龍の剛爪', quantity: 2 },
            { name: '冰龍の靭尾', quantity: 2 },
          ],
        },
        {
          name: '氷騎エクティス',
          materials: [
            { name: '冰龍の冠角', quantity: 4 },
            { name: '冰龍の剛爪', quantity: 4 },
            { name: '冰龍の零玉', quantity: 1 },
            { name: '地啼竜の慈爪', quantity: 3 },
          ],
        },
        {
          name: 'ハザクヴェヒター',
          materials: [
            { name: '死屍の龍鱗', quantity: 6 },
            { name: '屍套龍の尖爪', quantity: 4 },
            { name: '屍套龍の鋭牙', quantity: 5 },
            { name: '屍套龍の被膜', quantity: 4 },
          ],
        },
        {
          name: 'ラ・モールの哀愁',
          materials: [
            { name: '冥灯龍の幽幕', quantity: 3 },
            { name: '屍套龍の尖爪', quantity: 6 },
            { name: '屍套龍の尻尾', quantity: 2 },
            { name: '屍套龍の宝玉', quantity: 1 },
          ],
        },
        {
          name: 'ラ・モールの悲劇',
          materials: [
            { name: '屍套龍の剛爪', quantity: 3 },
            { name: '闇を食む牙', quantity: 2 },
            { name: '死屍の厚龍鱗', quantity: 5 },
            { name: '死屍を紡いだ被膜', quantity: 3 },
          ],
        },
        {
          name: 'ブレイン＝ラ・モール',
          materials: [
            { name: '屍套龍の剛爪', quantity: 5 },
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '屍套龍の重尾', quantity: 2 },
            { name: '地啼竜の慈爪', quantity: 2 },
          ],
        },
        {
          name: 'タロスランスⅠ',
          materials: [
            { name: 'カンタロスの羽', quantity: 2 },
            { name: 'カンタロスの甲殻', quantity: 3 },
            { name: 'モンスターの体液', quantity: 2 },
          ],
        },
        {
          name: 'タロスランスⅡ',
          materials: [
            { name: 'カンタロスの羽', quantity: 4 },
            { name: 'カンタロスの甲殻', quantity: 5 },
            { name: 'カンタロスの頭', quantity: 2 },
            { name: '惨爪竜の牙', quantity: 2 },
          ],
        },
        {
          name: 'ダークスティンガーⅠ',
          materials: [
            { name: 'カンタロスの堅殻', quantity: 5 },
            { name: 'カンタロスの薄羽', quantity: 4 },
            { name: 'モンスターの濃汁', quantity: 2 },
            { name: '龍脈の結晶', quantity: 3 },
          ],
        },
        {
          name: 'ダークスティンガーⅡ',
          materials: [
            { name: 'カンタロスの堅殻', quantity: 5 },
            { name: 'カンタロスの薄羽', quantity: 4 },
            { name: 'ノヴァクリスタル', quantity: 1 },
            { name: '蒼火竜の翼', quantity: 2 },
          ],
        },
        {
          name: 'ダークスティンガーⅢ',
          materials: [
            { name: 'カンタロスの堅殻', quantity: 8 },
            { name: 'カンタロスの薄羽', quantity: 6 },
            { name: '竜玉', quantity: 1 },
            { name: '屍套龍の鋭牙', quantity: 3 },
          ],
        },
        {
          name: 'ダークネスアグレッサⅠ',
          materials: [
            { name: '霊脈の結晶', quantity: 3 },
            { name: '強靭な爪', quantity: 1 },
            { name: 'モンスターの特濃', quantity: 2 },
            { name: 'カンタロスの斬羽', quantity: 2 },
          ],
        },
        {
          name: 'ダークネスアグレッサⅡ',
          materials: [
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: 'モンスターの特濃', quantity: 3 },
            { name: 'カンタロスの斬羽', quantity: 3 },
            { name: '惨爪竜の剛爪', quantity: 2 },
          ],
        },
        {
          name: '灼炎のスヴァロー',
          materials: [
            { name: 'エルトライト鉱石', quantity: 6 },
            { name: '赤熱した溶炉嚢', quantity: 2 },
            { name: '硫斬竜の厚鱗', quantity: 4 },
            { name: '硫斬竜の重牙', quantity: 2 },
          ],
        },
        {
          name: '灼炎のスヴァロー改',
          materials: [
            { name: '兇爪竜の重牙', quantity: 2 },
            { name: '斬竜の獄炎状殻', quantity: 3 },
            { name: '斬竜の天鱗', quantity: 1 },
            { name: '硫斬竜の断剣尾', quantity: 2 },
          ],
        },
        {
          name: '斬竜槍グラナト',
          materials: [
            { name: '古龍の浄血', quantity: 3 },
            { name: '斬竜の獄炎状殻', quantity: 4 },
            { name: '斬竜の重牙', quantity: 5 },
            { name: '炎龍の剛爪', quantity: 2 },
          ],
        },
        {
          name: 'ドラグロランスⅠ',
          materials: [
            { name: '土砂竜の甲殻', quantity: 3 },
            { name: '土砂竜の爪', quantity: 1 },
            { name: '土砂竜の背甲', quantity: 2 },
          ],
        },
        {
          name: 'ドラグロランスⅡ',
          materials: [
            { name: 'ケストドンの甲殻', quantity: 3 },
            { name: '土砂竜の尻尾', quantity: 1 },
            { name: '土砂竜の爪', quantity: 2 },
            { name: 'ドラグライト鉱石', quantity: 3 },
          ],
        },
        {
          name: 'ドラグロランスⅢ',
          materials: [
            { name: '土砂竜の爪', quantity: 4 },
            { name: '土砂竜の頭殻', quantity: 2 },
            { name: '角竜の甲殻', quantity: 3 },
            { name: '上竜骨', quantity: 3 },
          ],
        },
        {
          name: 'ボロススティンガーⅠ',
          materials: [
            { name: '土砂竜の鋭爪', quantity: 2 },
            { name: '土砂竜の堅殻', quantity: 3 },
            { name: '土砂竜の堅甲', quantity: 2 },
            { name: 'ケストドンの堅殻', quantity: 5 },
          ],
        },
        {
          name: 'ボロススティンガーⅡ',
          materials: [
            { name: '角竜の堅殻', quantity: 3 },
            { name: '土砂竜の鋭爪', quantity: 4 },
            { name: '土砂竜の堅殻', quantity: 3 },
            { name: 'ガストドンの堅殻', quantity: 5 },
          ],
        },
        {
          name: 'ボロススティンガーⅢ',
          materials: [
            { name: '土砂竜の鋭爪', quantity: 5 },
            { name: '土砂竜の堅甲', quantity: 5 },
            { name: '竜玉', quantity: 1 },
            { name: '滅尽龍の大角', quantity: 1 },
          ],
        },
        {
          name: 'ボロスハルバードⅠ',
          materials: [
            { name: 'ケストドンの重殻', quantity: 2 },
            { name: '土砂竜の剛爪', quantity: 1 },
            { name: '土砂竜の重殻', quantity: 2 },
            { name: '土砂竜の重甲', quantity: 2 },
          ],
        },
        {
          name: 'ボロスハルバードⅡ',
          materials: [
            { name: '角竜の重殻', quantity: 2 },
            { name: '重竜骨', quantity: 3 },
            { name: '土砂竜の剛爪', quantity: 2 },
            { name: '土砂竜の重頭殻', quantity: 1 },
          ],
        },
        {
          name: 'ディオスハルバードⅠ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 3 },
            { name: '砕竜の重殻', quantity: 4 },
            { name: '砕竜の重頭殻', quantity: 2 },
            { name: '光る粘菌', quantity: 3 },
          ],
        },
        {
          name: 'ディオスハルバードⅡ',
          materials: [
            { name: '砕竜の剛鉄拳', quantity: 3 },
            { name: '砕竜の靭尾', quantity: 2 },
            { name: '蒼火竜の剛翼', quantity: 2 },
            { name: '光る粘菌', quantity: 5 },
          ],
        },
        {
          name: 'ガロンランスⅠ',
          materials: [
            { name: '惨爪竜の鱗', quantity: 4 },
            { name: '惨爪竜の爪', quantity: 2 },
            { name: '惨爪竜の牙', quantity: 2 },
          ],
        },
        {
          name: 'ガロンランスⅡ',
          materials: [
            { name: '惨爪竜の爪', quantity: 2 },
            { name: '惨爪竜の逆鱗', quantity: 1 },
            { name: '惨爪竜の尻尾', quantity: 2 },
            { name: '上質な堅骨', quantity: 5 },
          ],
        },
        {
          name: 'ガロンダーラⅠ',
          materials: [
            { name: 'いにしえの龍骨', quantity: 1 },
            { name: '惨爪竜の上鱗', quantity: 8 },
            { name: '惨爪竜の尖爪', quantity: 4 },
            { name: '惨爪竜の鋭牙', quantity: 3 },
          ],
        },
        {
          name: 'ガロンダーラⅡ',
          materials: [
            { name: '炎龍の尖爪', quantity: 2 },
            { name: '惨爪竜の尖爪', quantity: 6 },
            { name: '惨爪竜の鋭牙', quantity: 5 },
            { name: '惨爪竜の宝玉', quantity: 1 },
          ],
        },
        {
          name: '惨槍オドガロンⅠ',
          materials: [
            { name: '惨爪竜の剛爪', quantity: 2 },
            { name: '惨爪竜の厚鱗', quantity: 3 },
            { name: '惨爪竜の重牙', quantity: 2 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: '惨槍オドガロンⅡ',
          materials: [
            { name: '惨爪竜の剛爪', quantity: 4 },
            { name: '惨爪竜の靭尾', quantity: 2 },
            { name: '惨爪竜の天鱗', quantity: 1 },
            { name: '硫斬竜の断剣尾', quantity: 2 },
          ],
        },
        {
          name: '兇槍デスガロン',
          materials: [
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '兇爪竜の剛爪', quantity: 3 },
            { name: '兇爪竜の厚鱗', quantity: 5 },
            { name: '兇爪竜の重牙', quantity: 2 },
          ],
        },
        {
          name: 'アクアホーンⅠ',
          materials: [
            { name: '強固な岩骨', quantity: 2 },
            { name: '泥魚竜の鱗', quantity: 3 },
            { name: '泥魚竜の甲殻', quantity: 1 },
            { name: '水袋', quantity: 1 },
          ],
        },
        {
          name: 'アクアホーンⅡ',
          materials: [
            { name: '咬魚の皮', quantity: 3 },
            { name: '泥魚竜の牙', quantity: 2 },
            { name: '泥魚竜のヒレ', quantity: 3 },
            { name: '頑丈な骨', quantity: 5 },
          ],
        },
        {
          name: 'アクアホーンⅢ',
          materials: [
            { name: '咬魚のヒゲ', quantity: 3 },
            { name: '泥魚竜の牙', quantity: 4 },
            { name: '上竜骨', quantity: 2 },
            { name: 'サンゴの紅骨', quantity: 2 },
          ],
        },
        {
          name: 'ウォータースパイクⅠ',
          materials: [
            { name: '泥魚竜の上鱗', quantity: 3 },
            { name: '泥魚竜の堅殻', quantity: 2 },
            { name: '咬魚の上皮', quantity: 5 },
            { name: '上質な堅骨', quantity: 5 },
          ],
        },
        {
          name: 'ウォータースパイクⅡ',
          materials: [
            { name: '堅竜骨', quantity: 3 },
            { name: '泥魚竜の上ヒレ', quantity: 4 },
            { name: '大水袋', quantity: 3 },
            { name: '咬魚の大ヒゲ', quantity: 3 },
          ],
        },
        {
          name: 'ウォータースパイクⅢ',
          materials: [
            { name: '古龍骨', quantity: 4 },
            { name: '竜玉', quantity: 1 },
            { name: '泥魚竜の上ヒレ', quantity: 6 },
            { name: '泥魚竜の鋭牙', quantity: 5 },
          ],
        },
        {
          name: 'ウォータースパイクⅣ',
          materials: [
            { name: '咬魚の厚皮', quantity: 2 },
            { name: '泥魚竜の厚鱗', quantity: 3 },
            { name: '泥魚竜の重牙', quantity: 1 },
            { name: '泥魚竜の特上ヒレ', quantity: 1 },
          ],
        },
        {
          name: 'ヒュドロスウーラ',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '溟龍の特上皮', quantity: 5 },
            { name: '溟龍の剛爪', quantity: 4 },
            { name: '溟龍の幻曜ヒゲ', quantity: 2 },
          ],
        },
        {
          name: 'ティガスティンガー',
          materials: [
            { name: '頑強な重骨', quantity: 5 },
            { name: '轟竜の厚鱗', quantity: 4 },
            { name: '轟竜の剛爪', quantity: 3 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: 'ティガスティンガー改',
          materials: [
            { name: '轟竜の重牙', quantity: 3 },
            { name: '轟竜の靭尾', quantity: 2 },
            { name: '轟竜の天鱗', quantity: 1 },
            { name: '堅牢な黒巻き角', quantity: 1 },
          ],
        },
        {
          name: '轟槍【独虎】',
          materials: [
            { name: '古龍の浄血', quantity: 5 },
            { name: '轟竜の重牙', quantity: 2 },
            { name: '轟竜の重殻', quantity: 4 },
            { name: '鋼龍の剛爪', quantity: 2 },
          ],
        },
        {
          name: 'カーサススティンガー',
          materials: [
            { name: '大竜玉', quantity: 1 },
            { name: '黒轟竜の厚鱗', quantity: 5 },
            { name: '黒轟竜の重牙', quantity: 2 },
            { name: '黒轟竜の剛爪', quantity: 3 },
          ],
        },
        {
          name: '吼槍【逆咬】',
          materials: [
            { name: '轟竜の天鱗', quantity: 1 },
            { name: '黒轟竜の重牙', quantity: 3 },
            { name: '黒轟竜の剛爪', quantity: 4 },
            { name: '歴戦の黒アギト', quantity: 5 },
          ],
        },
        {
          name: '硫鉄のケトン',
          materials: [
            { name: '削られた硫晶片', quantity: 4 },
            { name: '硫斬竜の剣山状殻', quantity: 2 },
            { name: '硫斬竜の重牙', quantity: 2 },
            { name: '硫斬竜の断剣尾', quantity: 2 },
          ],
        },
        {
          name: '硫斬槍ドリーネ',
          materials: [
            { name: '斬竜の天鱗', quantity: 1 },
            { name: '硫斬竜の剣山状殻', quantity: 3 },
            { name: '硫斬竜の重牙', quantity: 4 },
            { name: '屍套龍の剛爪', quantity: 2 },
          ],
        },
      ],
    },
    {
      name: '龍骨系',
      weapons: [
        {
          name: '龍骨槍Ⅰ',
          materials: [
            { name: 'いびつな狂骨', quantity: 5 },
            { name: '強固な岩骨', quantity: 5 },
            { name: '太古の大骨', quantity: 5 },
            { name: 'サンゴの紅骨', quantity: 5 },
          ],
        },
        {
          name: '龍骨槍Ⅱ',
          materials: [
            { name: '竜骨【大】', quantity: 8 },
            { name: '頑丈な骨', quantity: 8 },
            { name: '上竜骨', quantity: 6 },
          ],
        },
        {
          name: '龍骨槍Ⅲ',
          materials: [
            { name: '古龍骨', quantity: 10 },
            { name: '竜玉', quantity: 1 },
            { name: 'いにしえの龍骨', quantity: 2 },
            { name: '荒々しい蛮骨', quantity: 4 },
          ],
        },
        {
          name: '龍封じの古槍Ⅰ',
          materials: [
            { name: '頑強な重骨', quantity: 6 },
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '剛竜骨', quantity: 3 },
            { name: '重竜骨', quantity: 4 },
          ],
        },
        {
          name: '龍封じの古槍Ⅱ',
          materials: [
            { name: '剛竜骨', quantity: 4 },
            { name: '太古龍骨', quantity: 6 },
            { name: '大竜玉', quantity: 1 },
            { name: '溶岩竜の特上ヒレ', quantity: 2 },
          ],
        },
        {
          name: '金剛輪宝ー仁王ー',
          materials: [
            { name: '地啼竜の慈鱗', quantity: 6 },
            { name: '地啼竜の慈眼殻', quantity: 2 },
            { name: '地啼竜の慈爪', quantity: 4 },
            { name: '地啼竜の顕玉', quantity: 1 },
          ],
        },
        {
          name: '爆鱗の突撃槍',
          materials: [
            { name: '獄炎石', quantity: 1 },
            { name: '爆鱗竜の尖爪', quantity: 3 },
            { name: '爆鱗竜の上鱗', quantity: 5 },
            { name: '爆鱗竜の爆腺', quantity: 4 },
          ],
        },
        {
          name: '爆鱗槍バゼルミニアド',
          materials: [
            { name: '爆鱗竜の尖爪', quantity: 4 },
            { name: '爆鱗竜の翼', quantity: 4 },
            { name: '爆鱗竜の宝玉', quantity: 1 },
            { name: '冥灯龍の幽翼', quantity: 3 },
          ],
        },
        {
          name: '爆炎の突撃槍',
          materials: [
            { name: 'メランジェ鉱石', quantity: 5 },
            { name: '凝縮された爆腺液', quantity: 3 },
            { name: '爆鱗竜の厚鱗', quantity: 4 },
            { name: '爆鱗竜の剛爪', quantity: 3 },
          ],
        },
        {
          name: '爆炎槍バゼルロケット',
          materials: [
            { name: '天を焦がす銀翼', quantity: 4 },
            { name: '爆鱗竜の天鱗', quantity: 1 },
            { name: '爆鱗竜の剛爪', quantity: 4 },
            { name: '地啼竜の散華石', quantity: 2 },
          ],
        },
        {
          name: '雷槍',
          materials: [
            { name: 'ライトクリスタル', quantity: 1 },
            { name: '幻獣の雷角', quantity: 3 },
            { name: '幻獣の皮', quantity: 3 },
            { name: '幻獣の尾', quantity: 1 },
          ],
        },
        {
          name: '雷槍【イカズチ】',
          materials: [
            { name: '幻獣のたてがみ', quantity: 4 },
            { name: '龍脈の結晶', quantity: 5 },
            { name: '幻獣の上皮', quantity: 5 },
            { name: '幻獣の蒼角', quantity: 4 },
          ],
        },
        {
          name: '雷槍【タケミカヅチ】',
          materials: [
            { name: 'ノヴァクリスタル', quantity: 2 },
            { name: '冥灯龍の白殻', quantity: 4 },
            { name: '幻獣の雷尾', quantity: 3 },
            { name: '幻獣の蒼角', quantity: 6 },
          ],
        },
        {
          name: '雷槍【ナルカミ】',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '幻獣の銀たてがみ', quantity: 3 },
            { name: '幻獣の特上皮', quantity: 4 },
            { name: '幻獣の剛蒼角', quantity: 3 },
          ],
        },
      ],
    },
    {
      name: '黒鋼系',
      weapons: [
        {
          name: '黒鋼の槍Ⅰ',
          materials: [
            { name: '大地の結晶', quantity: 10 },
            { name: 'ライトクリスタル', quantity: 1 },
            { name: '深海の結晶', quantity: 10 },
            { name: '龍脈の結晶', quantity: 10 },
          ],
        },
        {
          name: '黒鋼の槍Ⅱ',
          materials: [
            { name: '獄炎石', quantity: 1 },
            { name: '竜玉', quantity: 1 },
            { name: 'カブレライト鉱石', quantity: 10 },
            { name: 'ユニオン鉱石', quantity: 5 },
          ],
        },
        {
          name: '鋼氷槍',
          materials: [
            { name: '鋼龍の尻尾', quantity: 2 },
            { name: '滅尽龍の堅殻', quantity: 5 },
            { name: '鋼龍の尖爪', quantity: 3 },
            { name: '鋼龍の翼', quantity: 4 },
          ],
        },
        {
          name: 'テリオス＝ダオラ',
          materials: [
            { name: '鋼龍の尖角', quantity: 5 },
            { name: '鋼龍の宝玉', quantity: 1 },
            { name: '冥灯龍の幽翼', quantity: 2 },
            { name: '鋼龍の尖爪', quantity: 4 },
          ],
        },
        {
          name: 'レグルス＝ダオラ',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '鋼の厚龍鱗', quantity: 5 },
            { name: '鋼龍の剛爪', quantity: 4 },
            { name: '鋼龍の剛角', quantity: 5 },
          ],
        },
        {
          name: 'ゼノ＝ザウータ',
          materials: [
            { name: '冥灯龍の白殻', quantity: 6 },
            { name: '冥灯龍の幽爪', quantity: 4 },
            { name: '冥灯龍の幽玉', quantity: 1 },
            { name: '冥灯龍の尻尾', quantity: 2 },
          ],
        },
        {
          name: 'ゼノ＝ザウータ改',
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
