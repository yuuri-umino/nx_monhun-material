import { WeaponType } from './materialsTypes'

const greatsword: WeaponType = {
  type: '双剣',
  derivations: [
    {
      name: '防衛隊系',
      weapons: [
        {
          name: '防衛隊機械式双鋸Ⅰ',
          materials: [{ name: '鉄鉱石', quantity: 1 }],
        },
        {
          name: '防衛隊機械式双鋸Ⅱ',
          materials: [{ name: '蛮顎竜の鱗', quantity: 1 }],
        },
        {
          name: '防衛隊機械式双鋸Ⅲ',
          materials: [{ name: '勇気の証', quantity: 1 }],
        },
        {
          name: '防衛隊機械式双鋸Ⅳ',
          materials: [{ name: '桜火竜の上鱗', quantity: 1 }],
        },
        {
          name: '防衛隊機械式双鋸Ⅴ',
          materials: [{ name: '不滅の龍鱗', quantity: 1 }],
        },
      ],
    },
    {
      name: '鉱石素材系',
      weapons: [
        {
          name: 'ツインダガーⅠ',
          materials: [{ name: '鉄鉱石', quantity: 1 }],
        },
        {
          name: 'ツインダガーⅡ',
          materials: [{ name: '鉄鉱石', quantity: 2 }],
        },
        {
          name: 'ツインダガーⅢ',
          materials: [
            { name: '大地の結晶', quantity: 2 },
            { name: '鉄鉱石', quantity: 5 },
            { name: 'マカライト鉱石', quantity: 2 },
          ],
        },
        {
          name: 'デュエルツインダガーⅠ',
          materials: [
            { name: 'マカライト鉱石', quantity: 5 },
            { name: '竜骨【中】', quantity: 2 },
            { name: 'ドラグライト鉱石', quantity: 2 },
          ],
        },
        {
          name: 'デュエルツインダガーⅡ',
          materials: [
            { name: 'マカライト鉱石', quantity: 10 },
            { name: 'ドラグライト鉱石', quantity: 5 },
            { name: '上竜骨', quantity: 2 },
            { name: '深海の結晶', quantity: 2 },
          ],
        },
        {
          name: 'デュエルツインダガーⅢ',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 5 },
            { name: 'カブレライト鉱石', quantity: 8 },
            { name: '龍脈の結晶', quantity: 2 },
          ],
        },
        {
          name: 'クロムツインダガーⅠ',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 10 },
            { name: 'カブレライト鉱石', quantity: 5 },
            { name: '龍脈の結晶', quantity: 3 },
            { name: 'ユニオン鉱石', quantity: 8 },
          ],
        },
        {
          name: 'クロムツインダガーⅡ',
          materials: [
            { name: '古龍の血', quantity: 2 },
            { name: '獄炎石', quantity: 1 },
            { name: 'カブレライト鉱石', quantity: 20 },
            { name: 'ユニオン鉱石', quantity: 13 },
          ],
        },
        {
          name: 'クロムクロスⅠ',
          materials: [
            { name: 'カブレライト鉱石', quantity: 4 },
            { name: '霊脈の結晶', quantity: 2 },
            { name: 'グラシスメタル', quantity: 1 },
            { name: 'エルトライト鉱石', quantity: 2 },
          ],
        },
        {
          name: 'クロムクロスⅡ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 2 },
            { name: 'エルトライト鉱石', quantity: 4 },
            { name: '重竜骨', quantity: 3 },
            { name: 'デプスライト鉱石', quantity: 2 },
          ],
        },
        {
          name: 'クロムクロスⅢ',
          materials: [
            { name: '古龍の浄血', quantity: 3 },
            { name: 'メランジェ鉱石', quantity: 3 },
            { name: 'エルトライト鉱石', quantity: 6 },
            { name: 'ピュアクリスタル', quantity: 1 },
          ],
        },
        {
          name: '王双刃ハタタカミ改',
          materials: [
            { name: '雷狼竜の雷電毛', quantity: 4 },
            { name: '雷狼竜の剛角', quantity: 3 },
            { name: '雷狼竜の天玉', quantity: 1 },
            { name: '超電雷光虫', quantity: 5 },
          ],
        },
        {
          name: '王双刃ハタタカミ',
          materials: [
            { name: '雷電袋', quantity: 3 },
            { name: '雷狼竜の雷電殻', quantity: 2 },
            { name: '雷狼竜の重殻', quantity: 5 },
            { name: '雷狼竜の剛爪', quantity: 3 },
          ],
        },
        {
          name: '王牙双刃【土雷】',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '雷狼竜の雷電殻', quantity: 5 },
            { name: '雷狼竜の剛角', quantity: 2 },
            { name: '霊脈の剛竜骨', quantity: 5 },
          ],
        },
        {
          name: 'ネルガルガウジ',
          materials: [
            { name: '滅尽龍の再生殻', quantity: 4 },
            { name: '滅尽龍の尻尾', quantity: 2 },
            { name: '滅尽龍の堅殻', quantity: 2 },
            { name: '滅尽龍の尖爪', quantity: 3 },
          ],
        },
        {
          name: '残滅の爪',
          materials: [
            { name: '滅尽龍の宝玉', quantity: 1 },
            { name: '滅尽龍の尖爪', quantity: 5 },
            { name: '滅尽龍の大角', quantity: 5 },
            { name: '冥灯龍の幽角', quantity: 2 },
          ],
        },
        {
          name: '残滅の爪【鬼】',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '殲滅の大剛角', quantity: 3 },
            { name: '無窮の新生殻', quantity: 5 },
            { name: '滅尽龍の剛爪', quantity: 4 },
          ],
        },
        {
          name: 'イルミナルダガーⅠ',
          materials: [
            { name: '眩鳥の鱗', quantity: 3 },
            { name: '眩鳥の爪', quantity: 2 },
            { name: '眩鳥の発光膜', quantity: 1 },
          ],
        },
        {
          name: 'イルミナルダガーⅡ',
          materials: [
            { name: 'とがった爪', quantity: 3 },
            { name: '眩鳥の爪', quantity: 3 },
            { name: '眩鳥の発光膜', quantity: 2 },
            { name: '風漂竜の尾膜', quantity: 2 },
          ],
        },
        {
          name: 'デュエルデステリオⅠ',
          materials: [
            { name: 'ライトクリスタル', quantity: 1 },
            { name: '眩鳥の上鱗', quantity: 5 },
            { name: '眩鳥の尖爪', quantity: 3 },
            { name: '眩鳥の閃光膜', quantity: 1 },
          ],
        },
        {
          name: 'デュエルデステリオⅡ',
          materials: [
            { name: '眩鳥の尖爪', quantity: 4 },
            { name: '眩鳥の閃光膜', quantity: 2 },
            { name: '鋭利な爪', quantity: 5 },
            { name: '風漂竜の翼', quantity: 2 },
          ],
        },
        {
          name: 'デュエルデステリオⅢ',
          materials: [
            { name: '鳥竜玉', quantity: 1 },
            { name: '眩鳥の尖爪', quantity: 5 },
            { name: '眩鳥の閃光膜', quantity: 3 },
            { name: '鋼龍の翼', quantity: 2 },
          ],
        },
        {
          name: 'クロス＝デステリオⅠ',
          materials: [
            { name: '強靭な爪', quantity: 2 },
            { name: '眩鳥の輝光膜', quantity: 1 },
            { name: '眩鳥の剛爪', quantity: 1 },
            { name: '眩鳥の厚鱗', quantity: 2 },
          ],
        },
        {
          name: 'クロス＝デステリオⅡ',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '眩鳥の輝光膜', quantity: 1 },
            { name: '眩鳥の剛爪', quantity: 2 },
            { name: '風漂竜の剛爪', quantity: 2 },
          ],
        },
        {
          name: 'ヒドゥントマホークⅠ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 1 },
            { name: '迅竜の厚鱗', quantity: 3 },
            { name: '迅竜の重牙', quantity: 2 },
            { name: '迅竜の重尾棘', quantity: 2 },
          ],
        },
        {
          name: 'ヒドゥントマホークⅡ',
          materials: [
            { name: '迅竜の天鱗', quantity: 1 },
            { name: '迅竜の靭尾', quantity: 2 },
            { name: '迅竜の剛刃翼', quantity: 3 },
            { name: '雷顎竜の重牙', quantity: 2 },
          ],
        },
        {
          name: '爆鱗の手斧',
          materials: [
            { name: '獄炎石', quantity: 1 },
            { name: '爆鱗竜の尖爪', quantity: 3 },
            { name: '爆鱗竜の上鱗', quantity: 5 },
            { name: '爆鱗竜の爆腺', quantity: 4 },
          ],
        },
        {
          name: '爆鱗双斧バゼルホーク',
          materials: [
            { name: '爆鱗竜の尖爪', quantity: 4 },
            { name: '爆鱗竜の翼', quantity: 4 },
            { name: '爆鱗竜の宝玉', quantity: 1 },
            { name: '冥灯龍の幽翼', quantity: 3 },
          ],
        },
        {
          name: '爆炎の双戦斧',
          materials: [
            { name: 'メランジェ鉱石', quantity: 5 },
            { name: '凝縮された爆腺液', quantity: 3 },
            { name: '爆鱗竜の厚鱗', quantity: 4 },
            { name: '爆鱗竜の剛爪', quantity: 3 },
          ],
        },
        {
          name: '爆炎双斧バゼルボンバー',
          materials: [
            { name: '天を焦がす銀翼', quantity: 4 },
            { name: '爆鱗竜の天鱗', quantity: 1 },
            { name: '爆鱗竜の剛爪', quantity: 4 },
            { name: '地啼竜の散華石', quantity: 2 },
          ],
        },
        {
          name: 'フリーズダガーⅠ',
          materials: [
            { name: '深海の結晶', quantity: 3 },
            { name: '風漂竜の鱗', quantity: 4 },
            { name: '風漂竜の爪', quantity: 3 },
            { name: '氷結袋', quantity: 2 },
          ],
        },
        {
          name: 'フリーズダガーⅡ',
          materials: [
            { name: '風漂竜の翼膜', quantity: 3 },
            { name: 'シャムオスの上鱗', quantity: 5 },
            { name: '風漂竜の尾膜', quantity: 2 },
            { name: 'カブレライト鉱石', quantity: 5 },
          ],
        },
        {
          name: 'フリーズチェーンⅠ',
          materials: [
            { name: 'ユニオン鉱石', quantity: 5 },
            { name: '風漂竜の上鱗', quantity: 5 },
            { name: '凍結袋', quantity: 3 },
            { name: '風漂竜の翼', quantity: 3 },
          ],
        },
        {
          name: 'フリーズチェーンⅡ',
          materials: [
            { name: '古龍の血', quantity: 3 },
            { name: '竜玉', quantity: 1 },
            { name: '風漂竜の上皮', quantity: 3 },
            { name: '風漂竜の尖爪', quantity: 5 },
          ],
        },
        {
          name: 'ニヴルブリザード',
          materials: [
            { name: '凍てついた氷骨', quantity: 3 },
            { name: '瞬間凍結袋', quantity: 4 },
            { name: '氷牙竜の剛爪', quantity: 3 },
            { name: '氷牙竜の重殻', quantity: 4 },
          ],
        },
        {
          name: 'ニヴルブリザード改',
          materials: [
            { name: '琥珀色の重牙', quantity: 3 },
            { name: '漆黒の氷刃爪', quantity: 2 },
            { name: '大竜玉', quantity: 1 },
            { name: '氷牙竜の重棘', quantity: 3 },
          ],
        },
        {
          name: 'ベルゲルブリザード',
          materials: [
            { name: '琥珀色の重牙', quantity: 2 },
            { name: '太古龍骨', quantity: 5 },
            { name: '氷牙竜の剛爪', quantity: 4 },
            { name: '冰龍の剛爪', quantity: 2 },
          ],
        },
        {
          name: 'ベルゲルヴァトラ',
          materials: [
            { name: '大竜玉', quantity: 1 },
            { name: '氷牙竜チケット', quantity: 3 },
            { name: '白銀の氷刃牙', quantity: 3 },
            { name: '氷河を砕く剣爪', quantity: 2 },
          ],
        },
        {
          name: 'ビークダガーⅠ',
          materials: [
            { name: '掻鳥の鱗', quantity: 3 },
            { name: '掻鳥の皮', quantity: 2 },
            { name: '掻鳥のクチバシ', quantity: 1 },
          ],
        },
        {
          name: 'ビークダガーⅡ',
          materials: [
            { name: '強固な岩骨', quantity: 3 },
            { name: '掻鳥の飾り羽', quantity: 2 },
            { name: '掻鳥のクチバシ', quantity: 2 },
            { name: '骨鎚竜の鱗', quantity: 3 },
          ],
        },
        {
          name: 'ビークダガーⅢ',
          materials: [
            { name: 'いびつな狂骨', quantity: 3 },
            { name: '掻鳥の飾り羽', quantity: 4 },
            { name: '掻鳥のクチバシ', quantity: 2 },
            { name: '惨爪竜の爪', quantity: 2 },
          ],
        },
        {
          name: 'アルカナリアⅠ',
          materials: [
            { name: '掻鳥の上鱗', quantity: 6 },
            { name: '掻鳥の上皮', quantity: 4 },
            { name: '掻鳥の大クチバシ', quantity: 3 },
          ],
        },
        {
          name: 'アルカナリアⅡ',
          materials: [
            { name: '掻鳥の大飾り羽', quantity: 3 },
            { name: '掻鳥の大クチバシ', quantity: 4 },
            { name: '荒々しい蛮骨', quantity: 3 },
            { name: '惨爪竜の尖爪', quantity: 2 },
          ],
        },
        {
          name: 'アルカナリアⅢ',
          materials: [
            { name: '掻鳥の大飾り羽', quantity: 4 },
            { name: '掻鳥の大クチバシ', quantity: 5 },
            { name: '鳥竜玉', quantity: 1 },
            { name: '滅尽龍の尖爪', quantity: 2 },
          ],
        },
        {
          name: 'ネスルアーセファーⅠ',
          materials: [
            { name: '頑強な重骨', quantity: 2 },
            { name: '掻鳥の巨大クチバシ', quantity: 1 },
            { name: '掻鳥の厚皮', quantity: 2 },
            { name: '掻鳥の厚鱗', quantity: 3 },
          ],
        },
        {
          name: 'ネスルアーセファーⅡ',
          materials: [
            { name: '迅竜の重牙', quantity: 2 },
            { name: '重竜骨', quantity: 3 },
            { name: '掻鳥の巨大クチバシ', quantity: 2 },
            { name: '掻鳥の特大飾り羽', quantity: 3 },
          ],
        },
        {
          name: 'レックスチェーンⅠ',
          materials: [
            { name: '頑強な重骨', quantity: 5 },
            { name: '轟竜の厚鱗', quantity: 4 },
            { name: '轟竜の剛爪', quantity: 3 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: 'レックスチェーンⅡ',
          materials: [
            { name: '轟竜の重牙', quantity: 3 },
            { name: '轟竜の靭尾', quantity: 2 },
            { name: '轟竜の天鱗', quantity: 1 },
            { name: '堅牢な黒巻き角', quantity: 1 },
          ],
        },
        {
          name: 'カーサスチェーン',
          materials: [
            { name: '大竜玉', quantity: 1 },
            { name: '黒轟竜の厚鱗', quantity: 5 },
            { name: '黒轟竜の重牙', quantity: 2 },
            { name: '黒轟竜の剛爪', quantity: 3 },
          ],
        },
        {
          name: 'ツインフレイム',
          materials: [
            { name: '火竜の厚鱗', quantity: 4 },
            { name: '火竜の剛翼爪', quantity: 3 },
            { name: '業炎袋', quantity: 4 },
            { name: '雌火竜の厚鱗', quantity: 4 },
          ],
        },
        {
          name: '双剣リュウノツガイ',
          materials: [
            { name: '桜火竜の厚鱗', quantity: 4 },
            { name: '蒼火竜の厚鱗', quantity: 4 },
            { name: '蒼火竜の靭尾', quantity: 2 },
            { name: '大竜玉', quantity: 1 },
          ],
        },
        {
          name: 'ゲキリュウノツガイ',
          materials: [
            { name: '銀火竜の厚鱗', quantity: 4 },
            { name: '火竜の煌液', quantity: 2 },
            { name: '銀火竜の靭尾', quantity: 2 },
            { name: '金火竜の厚鱗', quantity: 4 },
          ],
        },
        {
          name: 'オーダーレイピア',
          materials: [
            { name: '大地の結晶', quantity: 6 },
            { name: 'マカライト鉱石', quantity: 5 },
            { name: 'ライトクリスタル', quantity: 1 },
            { name: 'ドラグライト鉱石', quantity: 3 },
          ],
        },
        {
          name: 'オーダーレイピア改',
          materials: [
            { name: '深海の結晶', quantity: 8 },
            { name: 'カブレライト鉱石', quantity: 5 },
            { name: '勇気の証', quantity: 2 },
            { name: '龍脈の結晶', quantity: 4 },
          ],
        },
        {
          name: 'ホーリーセーバー',
          materials: [
            { name: '竜玉', quantity: 2 },
            { name: 'ノヴァクリスタル', quantity: 2 },
            { name: '龍脈の結晶', quantity: 6 },
            { name: '勇気の証G', quantity: 3 },
          ],
        },
        {
          name: 'ギルドナイトセーバー',
          materials: [
            { name: '霊脈の結晶', quantity: 6 },
            { name: 'グラシスメタル', quantity: 4 },
            { name: 'エルトライト鉱石', quantity: 8 },
            { name: '猛牛竜の巨大な角', quantity: 2 },
          ],
        },
        {
          name: 'マスターセーバー',
          materials: [
            { name: 'メランジェ鉱石', quantity: 6 },
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '漆黒の氷刃爪', quantity: 3 },
            { name: 'デプスライト鉱石', quantity: 4 },
          ],
        },
        {
          name: '双聖剣ギルドナイト',
          materials: [
            { name: '古龍の浄血', quantity: 4 },
            { name: '太古龍骨', quantity: 3 },
            { name: '大竜玉', quantity: 1 },
            { name: '覇王の証', quantity: 3 },
          ],
        },
      ],
    },
    {
      name: '骨素材系',
      weapons: [
        {
          name: 'ボーンハチェットⅠ',
          materials: [{ name: '竜骨【小】', quantity: 1 }],
        },
        {
          name: 'ボーンハチェットⅡ',
          materials: [{ name: '竜骨【小】', quantity: 2 }],
        },
        {
          name: 'ボーンハチェットⅢ',
          materials: [
            { name: '太古の大骨', quantity: 1 },
            { name: '竜骨【中】', quantity: 2 },
          ],
        },
        {
          name: 'ワイルドハチェットⅠ',
          materials: [
            { name: '強固な岩骨', quantity: 2 },
            { name: '竜骨【大】', quantity: 1 },
            { name: '竜骨【中】', quantity: 5 },
          ],
        },
        {
          name: 'ワイルドハチェットⅡ',
          materials: [
            { name: '竜骨【大】', quantity: 1 },
            { name: '頑丈な骨', quantity: 4 },
            { name: '上竜骨', quantity: 2 },
          ],
        },
        {
          name: 'ワイルドハチェットⅢ',
          materials: [
            { name: '頑丈な骨', quantity: 2 },
            { name: '上竜骨', quantity: 2 },
            { name: '尖竜骨', quantity: 2 },
          ],
        },
        {
          name: 'ストロングハチェットⅠ',
          materials: [
            { name: '尖竜骨', quantity: 2 },
            { name: '竜骨塊', quantity: 4 },
            { name: '上質な堅骨', quantity: 2 },
          ],
        },
        {
          name: 'ストロングハチェットⅡ',
          materials: [
            { name: '堅竜骨', quantity: 6 },
            { name: '古龍骨', quantity: 4 },
            { name: '上質な堅骨', quantity: 20 },
            { name: 'いにしえの龍骨', quantity: 1 },
          ],
        },
        {
          name: 'マッシブチョッパーⅠ',
          materials: [
            { name: '堅竜骨', quantity: 4 },
            { name: '上質な堅骨', quantity: 4 },
            { name: '頑強な重骨', quantity: 2 },
            { name: '凍てついた氷骨', quantity: 1 },
          ],
        },
        {
          name: 'マッシブチョッパーⅡ',
          materials: [
            { name: '頑強な重骨', quantity: 4 },
            { name: 'モンスターの特濃', quantity: 2 },
            { name: '剛竜骨', quantity: 2 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: 'マッシブチョッパーⅢ',
          materials: [
            { name: '頑強な重骨', quantity: 6 },
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '剛竜骨', quantity: 4 },
            { name: '太古龍骨', quantity: 3 },
          ],
        },
        {
          name: 'アイスフェザー',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '氷晶の厚龍鱗', quantity: 4 },
            { name: '冰龍の剛爪', quantity: 2 },
            { name: '冰龍の靭尾', quantity: 2 },
          ],
        },
        {
          name: '氷聖ヘル',
          materials: [
            { name: '冰龍の冠角', quantity: 4 },
            { name: '冰龍の剛爪', quantity: 4 },
            { name: '冰龍の零玉', quantity: 1 },
            { name: '地啼竜の慈爪', quantity: 3 },
          ],
        },
        {
          name: 'ブレイズハチェットⅠ',
          materials: [
            { name: '蛮顎竜の鱗', quantity: 3 },
            { name: '蛮顎竜の牙', quantity: 2 },
            { name: '火炎袋', quantity: 1 },
          ],
        },
        {
          name: 'ブレイズハチェットⅡ',
          materials: [
            { name: '火竜の骨髄', quantity: 1 },
            { name: '蛮顎竜の牙', quantity: 4 },
            { name: '蛮顎竜の尻尾', quantity: 1 },
            { name: '蛮顎竜の鼻骨', quantity: 1 },
          ],
        },
        {
          name: 'ジャナフサイクロンⅠ',
          materials: [
            { name: '蛮顎竜の逆鱗', quantity: 1 },
            { name: '爆炎袋', quantity: 3 },
            { name: '蛮顎竜の上鱗', quantity: 5 },
            { name: '蛮顎竜の鋭牙', quantity: 4 },
          ],
        },
        {
          name: 'ジャナフサイクロンⅡ',
          materials: [
            { name: '火竜の延髄', quantity: 2 },
            { name: '獄炎石', quantity: 1 },
            { name: '蛮顎竜の上毛皮', quantity: 4 },
            { name: '蛮顎竜の鋭牙', quantity: 5 },
          ],
        },
        {
          name: 'ジャナフサイクロンⅢ',
          materials: [
            { name: '炎王龍のたてがみ', quantity: 2 },
            { name: '蛮顎竜の鋭牙', quantity: 6 },
            { name: '蛮顎竜の大鼻骨', quantity: 2 },
            { name: '蛮顎竜の宝玉', quantity: 1 },
          ],
        },
        {
          name: '蛮顎竜ノ烈爪Ⅰ',
          materials: [
            { name: 'エルトライト鉱石', quantity: 3 },
            { name: '蛮顎竜の重牙', quantity: 1 },
            { name: '蛮顎竜の厚鱗', quantity: 2 },
            { name: '業炎袋', quantity: 1 },
          ],
        },
        {
          name: '蛮顎竜ノ烈爪Ⅱ',
          materials: [
            { name: '蛮顎竜の重鼻骨', quantity: 2 },
            { name: '蒼火竜の重殻', quantity: 2 },
            { name: '蛮顎竜の厚毛皮', quantity: 3 },
            { name: '蛮顎竜の靭尾', quantity: 1 },
          ],
        },
        {
          name: 'トルネ＝ジャナールⅠ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 2 },
            { name: '剛竜骨', quantity: 3 },
            { name: '雷顎竜の厚鱗', quantity: 2 },
            { name: '雷顎竜の重牙', quantity: 1 },
          ],
        },
        {
          name: 'トルネ＝ジャナールⅡ',
          materials: [
            { name: '雷顎竜の厚毛皮', quantity: 3 },
            { name: '雷顎竜の重鼻骨', quantity: 2 },
            { name: '雷顎竜の靭尾', quantity: 1 },
            { name: '雷電袋', quantity: 3 },
          ],
        },
        {
          name: 'ブロスハチェットⅠ',
          materials: [
            { name: '角竜の牙', quantity: 2 },
            { name: 'ねじれた角', quantity: 1 },
            { name: '角竜の甲殻', quantity: 4 },
            { name: '上竜骨', quantity: 3 },
          ],
        },
        {
          name: 'ブロスハチェットⅡ',
          materials: [
            { name: '角竜の背甲', quantity: 4 },
            { name: '角竜の尾甲', quantity: 2 },
            { name: '尖竜骨', quantity: 4 },
            { name: '角竜の骨髄', quantity: 1 },
          ],
        },
        {
          name: 'ブロスクラブⅠ',
          materials: [
            { name: '角竜の延髄', quantity: 1 },
            { name: '角竜の堅殻', quantity: 6 },
            { name: '角竜の堅甲', quantity: 5 },
            { name: '上質なねじれた角', quantity: 3 },
          ],
        },
        {
          name: 'ブロスクラブⅡ',
          materials: [
            { name: '竜玉', quantity: 1 },
            { name: '黒角竜の堅殻', quantity: 4 },
            { name: '上質な黒巻き角', quantity: 3 },
            { name: '滅尽龍の大角', quantity: 2 },
          ],
        },
        {
          name: 'タナトスクラブ',
          materials: [
            { name: '堅牢な黒巻き角', quantity: 3 },
            { name: '剛竜骨', quantity: 3 },
            { name: '黒角竜の重殻', quantity: 3 },
            { name: '大竜玉', quantity: 1 },
          ],
        },
        {
          name: '硫鉄のオルト',
          materials: [
            { name: '削られた硫晶片', quantity: 4 },
            { name: '硫斬竜の剣山状殻', quantity: 2 },
            { name: '硫斬竜の重牙', quantity: 2 },
            { name: '硫斬竜の断剣尾', quantity: 2 },
          ],
        },
        {
          name: '硫斬双刃ソンドン',
          materials: [
            { name: '斬竜の天鱗', quantity: 1 },
            { name: '硫斬竜の剣山状殻', quantity: 3 },
            { name: '硫斬竜の重牙', quantity: 4 },
            { name: '屍套龍の剛爪', quantity: 2 },
          ],
        },
        {
          name: '巨牛の大骨Ⅰ',
          materials: [
            { name: '強竜骨', quantity: 3 },
            { name: '猛牛竜の巨大な角', quantity: 1 },
            { name: '猛牛竜の重殻', quantity: 2 },
            { name: '猛牛竜の重甲', quantity: 2 },
          ],
        },
        {
          name: '巨牛の大骨Ⅱ',
          materials: [
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '剛竜骨', quantity: 3 },
            { name: '猛牛竜の巨大な角', quantity: 3 },
            { name: '猛牛竜の靭尾', quantity: 2 },
          ],
        },
        {
          name: 'マッドバンガーⅠ',
          materials: [
            { name: '泥魚竜の鱗', quantity: 3 },
            { name: '泥魚竜の甲殻', quantity: 1 },
            { name: '泥魚竜のヒレ', quantity: 1 },
            { name: '水袋', quantity: 1 },
          ],
        },
        {
          name: 'マッドバンガーⅡ',
          materials: [
            { name: '咬魚の皮', quantity: 3 },
            { name: '泥魚竜の甲殻', quantity: 3 },
            { name: '泥魚竜のヒレ', quantity: 3 },
            { name: '痺賊竜の皮', quantity: 2 },
          ],
        },
        {
          name: 'マッドバンガーⅢ',
          materials: [
            { name: '咬魚のヒゲ', quantity: 3 },
            { name: '泥魚竜の甲殻', quantity: 3 },
            { name: '泥魚竜の牙', quantity: 4 },
            { name: '上竜骨', quantity: 2 },
          ],
        },
        {
          name: 'シュラムハチェットⅠ',
          materials: [
            { name: '泥魚竜の上鱗', quantity: 3 },
            { name: '泥魚竜の堅殻', quantity: 2 },
            { name: '泥魚竜の上ヒレ', quantity: 2 },
            { name: '咬魚の上皮', quantity: 5 },
          ],
        },
        {
          name: 'シュラムハチェットⅡ',
          materials: [
            { name: '堅竜骨', quantity: 3 },
            { name: '泥魚竜の上ヒレ', quantity: 4 },
            { name: '大水袋', quantity: 3 },
            { name: '咬魚の大ヒゲ', quantity: 3 },
          ],
        },
        {
          name: 'シュラムハチェットⅢ',
          materials: [
            { name: '古龍骨', quantity: 2 },
            { name: '竜玉', quantity: 1 },
            { name: '泥魚竜の上ヒレ', quantity: 6 },
            { name: '泥魚竜の鋭牙', quantity: 5 },
          ],
        },
        {
          name: 'シュラムグローヴⅠ',
          materials: [
            { name: '咬魚の厚皮', quantity: 2 },
            { name: '泥魚竜の厚鱗', quantity: 3 },
            { name: '泥魚竜の重牙', quantity: 1 },
            { name: '泥魚竜の特上ヒレ', quantity: 1 },
          ],
        },
        {
          name: 'シュラムグローヴⅡ',
          materials: [
            { name: '咬魚の鋼ヒゲ', quantity: 1 },
            { name: '重竜骨', quantity: 2 },
            { name: '特大水袋', quantity: 2 },
            { name: '泥魚竜の特上ヒレ', quantity: 2 },
          ],
        },
        {
          name: 'テッセン【烏】',
          materials: [
            { name: '幻鳥竜玉', quantity: 1 },
            { name: '黒狼鳥の銀狼毛', quantity: 4 },
            { name: '黒狼鳥の厚鱗', quantity: 3 },
            { name: '黒狼鳥の地獄耳', quantity: 2 },
          ],
        },
        {
          name: 'テッセン【狼】',
          materials: [
            { name: '大竜玉', quantity: 1 },
            { name: 'イカしたクチバシ', quantity: 3 },
            { name: '黒狼鳥の剛翼', quantity: 2 },
            { name: '傷痕の紫甲殻', quantity: 3 },
          ],
        },
        {
          name: 'ブランハチェットⅠ',
          materials: [
            { name: '凍てついた氷骨', quantity: 1 },
            { name: '凍魚竜の厚鱗', quantity: 3 },
            { name: '凍魚竜の剛角', quantity: 1 },
            { name: '凍魚竜の特上ヒレ', quantity: 1 },
          ],
        },
        {
          name: 'ブランハチェットⅡ',
          materials: [
            { name: '凍魚竜の特上ヒレ', quantity: 2 },
            { name: '瞬間凍結袋', quantity: 2 },
            { name: '大竜玉', quantity: 1 },
            { name: '氷霜をまとう皮', quantity: 2 },
          ],
        },
        {
          name: 'ラヴァサイクロンⅠ',
          materials: [
            { name: '溶岩竜の鋭牙', quantity: 2 },
            { name: '溶岩竜の上ヒレ', quantity: 2 },
            { name: '溶岩竜の上鱗', quantity: 4 },
          ],
        },
        {
          name: 'ラヴァサイクロンⅡ',
          materials: [
            { name: '炎王龍のたてがみ', quantity: 2 },
            { name: '溶岩竜の鋭牙', quantity: 3 },
            { name: '溶岩竜の上ヒレ', quantity: 3 },
            { name: '竜玉', quantity: 1 },
          ],
        },
        {
          name: '火砕双刃Ⅰ',
          materials: [
            { name: 'バルノスの剛爪', quantity: 2 },
            { name: '溶岩竜の厚鱗', quantity: 3 },
            { name: '溶岩竜の重牙', quantity: 2 },
            { name: '溶岩竜の特上ヒレ', quantity: 1 },
          ],
        },
        {
          name: '火砕双刃Ⅱ',
          materials: [
            { name: '剛竜骨', quantity: 3 },
            { name: '蒼火竜の重殻', quantity: 2 },
            { name: '溶岩竜の重牙', quantity: 2 },
            { name: '溶岩竜の特上ヒレ', quantity: 2 },
          ],
        },
        {
          name: '灼炎のロガー',
          materials: [
            { name: 'エルトライト鉱石', quantity: 6 },
            { name: '斬竜の厚鱗', quantity: 4 },
            { name: '斬竜の重牙', quantity: 2 },
            { name: '赤熱した溶炉嚢', quantity: 2 },
          ],
        },
        {
          name: '灼炎のロガー改',
          materials: [
            { name: '兇爪竜の重牙', quantity: 2 },
            { name: '斬竜の獄炎状殻', quantity: 3 },
            { name: '斬竜の断剣尾', quantity: 2 },
            { name: '斬竜の天鱗', quantity: 1 },
          ],
        },
        {
          name: '斬竜双刃エタンゼル',
          materials: [
            { name: '古龍の浄血', quantity: 3 },
            { name: '斬竜の獄炎状殻', quantity: 4 },
            { name: '斬竜の重牙', quantity: 5 },
            { name: '炎龍の剛爪', quantity: 2 },
          ],
        },
        {
          name: 'タロスバンガーⅠ',
          materials: [
            { name: 'カンタロスの羽', quantity: 2 },
            { name: 'カンタロスの甲殻', quantity: 3 },
            { name: 'モンスターの体液', quantity: 2 },
          ],
        },
        {
          name: 'タロスバンガーⅡ',
          materials: [
            { name: 'カンタロスの羽', quantity: 4 },
            { name: 'カンタロスの甲殻', quantity: 5 },
            { name: 'カンタロスの頭', quantity: 2 },
            { name: '惨爪竜の牙', quantity: 2 },
          ],
        },
        {
          name: 'ダークリッパーⅠ',
          materials: [
            { name: 'カンタロスの堅殻', quantity: 5 },
            { name: 'カンタロスの薄羽', quantity: 4 },
            { name: 'モンスターの濃汁', quantity: 2 },
            { name: '龍脈の結晶', quantity: 3 },
          ],
        },
        {
          name: 'ダークリッパーⅡ',
          materials: [
            { name: 'カンタロスの堅殻', quantity: 5 },
            { name: 'カンタロスの薄羽', quantity: 4 },
            { name: 'ノヴァクリスタル', quantity: 1 },
            { name: '蒼火竜の翼', quantity: 2 },
          ],
        },
        {
          name: 'ダークリッパーⅢ',
          materials: [
            { name: 'カンタロスの堅殻', quantity: 8 },
            { name: 'カンタロスの薄羽', quantity: 6 },
            { name: '竜玉', quantity: 1 },
            { name: '屍套龍の鋭牙', quantity: 3 },
          ],
        },
        {
          name: 'ダークネスイーターⅠ',
          materials: [
            { name: '霊脈の結晶', quantity: 3 },
            { name: '強靭な爪', quantity: 1 },
            { name: 'モンスターの特濃', quantity: 2 },
            { name: 'カンタロスの斬羽', quantity: 2 },
          ],
        },
        {
          name: 'ダークネスイーターⅡ',
          materials: [
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: 'モンスターの特濃', quantity: 3 },
            { name: 'カンタロスの斬羽', quantity: 3 },
            { name: '惨爪竜の剛爪', quantity: 2 },
          ],
        },
        {
          name: 'ディオスバンガーⅠ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 3 },
            { name: '砕竜の重殻', quantity: 4 },
            { name: '砕竜の重頭殻', quantity: 2 },
            { name: '光る粘菌', quantity: 3 },
          ],
        },
        {
          name: 'ディオスバンガーⅡ',
          materials: [
            { name: '砕竜の剛鉄拳', quantity: 3 },
            { name: '砕竜の靭尾', quantity: 2 },
            { name: '蒼火竜の剛翼', quantity: 2 },
            { name: '光る粘菌', quantity: 5 },
          ],
        },
        {
          name: 'パルサーハチェットⅠ',
          materials: [
            { name: '飛雷竜の爪', quantity: 1 },
            { name: '飛雷竜の毛皮', quantity: 2 },
            { name: '飛雷竜の鱗', quantity: 3 },
          ],
        },
        {
          name: 'パルサーハチェットⅡ',
          materials: [
            { name: '深海の結晶', quantity: 3 },
            { name: '電気袋', quantity: 2 },
            { name: '飛雷竜の爪', quantity: 3 },
            { name: '飛雷竜の電極針', quantity: 2 },
          ],
        },
        {
          name: 'パルサーハチェットⅢ',
          materials: [
            { name: 'いびつな狂骨', quantity: 2 },
            { name: '上竜骨', quantity: 2 },
            { name: '飛雷竜の電極針', quantity: 2 },
            { name: '飛雷竜の皮膜', quantity: 2 },
          ],
        },
        {
          name: 'カガチノツメⅠ',
          materials: [
            { name: '飛雷竜の上毛皮', quantity: 3 },
            { name: '飛雷竜の上鱗', quantity: 4 },
            { name: '飛雷竜の尖爪', quantity: 3 },
            { name: '龍脈の結晶', quantity: 3 },
          ],
        },
        {
          name: 'カガチノツメⅡ',
          materials: [
            { name: '上質なねじれた角', quantity: 2 },
            { name: '飛雷竜の雷極針', quantity: 2 },
            { name: '飛雷竜の尖爪', quantity: 4 },
            { name: '電撃袋', quantity: 3 },
          ],
        },
        {
          name: 'カガチノツメⅢ',
          materials: [
            { name: '竜玉', quantity: 1 },
            { name: '飛雷竜の雷極針', quantity: 4 },
            { name: '飛雷竜の尖爪', quantity: 6 },
            { name: '滅尽龍の尖爪', quantity: 2 },
          ],
        },
        {
          name: 'カガチノオオナタⅠ',
          materials: [
            { name: '飛雷竜の厚毛皮', quantity: 2 },
            { name: '飛雷竜の剛爪', quantity: 1 },
            { name: '飛雷竜の厚鱗', quantity: 2 },
            { name: '雷電袋', quantity: 1 },
          ],
        },
        {
          name: 'カガチノオオナタⅡ',
          materials: [
            { name: '惨爪竜の強硬筋', quantity: 2 },
            { name: '飛雷竜の剛爪', quantity: 2 },
            { name: '飛雷竜の厚皮膜', quantity: 2 },
            { name: '飛雷竜の雷光針', quantity: 2 },
          ],
        },
        {
          name: 'ベニカガチノドクヅメⅠ',
          materials: [
            { name: '劇烈毒袋', quantity: 1 },
            { name: '飛毒竜の厚毛皮', quantity: 2 },
            { name: '飛毒竜の剛爪', quantity: 1 },
            { name: '飛毒竜の厚鱗', quantity: 2 },
          ],
        },
        {
          name: 'ベニカガチノドクヅメⅡ',
          materials: [
            { name: '飛毒竜の剛爪', quantity: 2 },
            { name: '飛毒竜の厚皮膜', quantity: 2 },
            { name: '飛毒竜の猛毒針', quantity: 2 },
            { name: '硫斬竜の剣山状殻', quantity: 2 },
          ],
        },
        {
          name: 'ガロンハチェットⅠ',
          materials: [
            { name: '惨爪竜の鱗', quantity: 4 },
            { name: '惨爪竜の爪', quantity: 2 },
            { name: '惨爪竜の牙', quantity: 2 },
          ],
        },
        {
          name: 'ガロンハチェットⅡ',
          materials: [
            { name: '惨爪竜の爪', quantity: 2 },
            { name: '惨爪竜の逆鱗', quantity: 1 },
            { name: '惨爪竜の尻尾', quantity: 2 },
            { name: '上質な堅骨', quantity: 5 },
          ],
        },
        {
          name: '血吸いの鎖鎌',
          materials: [
            { name: 'いにしえの龍骨', quantity: 1 },
            { name: '惨爪竜の上鱗', quantity: 8 },
            { name: '惨爪竜の尖爪', quantity: 6 },
            { name: '惨爪竜の鋭牙', quantity: 3 },
          ],
        },
        {
          name: '罪【シン】',
          materials: [
            { name: '炎龍の尖爪', quantity: 2 },
            { name: '惨爪竜の尖爪', quantity: 6 },
            { name: '惨爪竜の鋭牙', quantity: 5 },
            { name: '惨爪竜の宝玉', quantity: 1 },
          ],
        },
        {
          name: '罪【シン】改',
          materials: [
            { name: '惨爪竜の剛爪', quantity: 2 },
            { name: '惨爪竜の厚鱗', quantity: 3 },
            { name: '惨爪竜の重牙', quantity: 2 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: '罪悪【クライム】',
          materials: [
            { name: '惨爪竜の剛爪', quantity: 4 },
            { name: '惨爪竜の靭尾', quantity: 2 },
            { name: '惨爪竜の天鱗', quantity: 1 },
            { name: '硫斬竜の断剣尾', quantity: 2 },
          ],
        },
        {
          name: '冥府の鎖鎌',
          materials: [
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '兇爪竜の剛爪', quantity: 3 },
            { name: '兇爪竜の厚鱗', quantity: 5 },
            { name: '兇爪竜の重牙', quantity: 2 },
          ],
        },
        {
          name: '死罪【デスロウ】',
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
      name: '龍骨系系',
      weapons: [
        {
          name: '龍骨双刃Ⅰ',
          materials: [
            { name: 'いびつな狂骨', quantity: 5 },
            { name: '強固な岩骨', quantity: 5 },
            { name: '太古の大骨', quantity: 5 },
            { name: 'サンゴの紅骨', quantity: 5 },
          ],
        },
        {
          name: '龍骨双刃Ⅱ',
          materials: [
            { name: '竜骨【大】', quantity: 8 },
            { name: '頑丈な骨', quantity: 8 },
            { name: '上竜骨', quantity: 6 },
          ],
        },
        {
          name: '封龍剣【超絶一門】',
          materials: [
            { name: '古龍骨', quantity: 10 },
            { name: '竜玉', quantity: 1 },
            { name: 'いにしえの龍骨', quantity: 2 },
            { name: '荒々しい蛮骨', quantity: 4 },
          ],
        },
        {
          name: '封龍剣【真絶一門】',
          materials: [
            { name: '頑強な重骨', quantity: 6 },
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '剛竜骨', quantity: 3 },
            { name: '重竜骨', quantity: 4 },
          ],
        },
        {
          name: '封龍剣【極絶一門】',
          materials: [
            { name: '剛竜骨', quantity: 4 },
            { name: '太古龍骨', quantity: 6 },
            { name: '大竜玉', quantity: 1 },
            { name: '溶岩竜の特上ヒレ', quantity: 2 },
          ],
        },
        {
          name: '邪鬼霧散ー慧眼ー',
          materials: [
            { name: '地啼竜の慈鱗', quantity: 6 },
            { name: '地啼竜の慈眼殻', quantity: 2 },
            { name: '地啼竜の慈爪', quantity: 4 },
            { name: '地啼竜の顕玉', quantity: 1 },
          ],
        },
        {
          name: '迅雷',
          materials: [
            { name: 'ライトクリスタル', quantity: 1 },
            { name: '幻獣の雷角', quantity: 3 },
            { name: '幻獣の皮', quantity: 3 },
            { name: '幻獣の尾', quantity: 1 },
          ],
        },
        {
          name: '双雷剣キリン',
          materials: [
            { name: '幻獣のたてがみ', quantity: 4 },
            { name: '龍脈の結晶', quantity: 5 },
            { name: '幻獣の上皮', quantity: 5 },
            { name: '幻獣の蒼角', quantity: 4 },
          ],
        },
        {
          name: '双雷剣キリン改',
          materials: [
            { name: 'ノヴァクリスタル', quantity: 2 },
            { name: '冥灯龍の白殻', quantity: 4 },
            { name: '幻獣の雷尾', quantity: 3 },
            { name: '幻獣の蒼角', quantity: 6 },
          ],
        },
        {
          name: '双雷宝剣【麒麟児】',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '幻獣の銀たてがみ', quantity: 3 },
            { name: '幻獣の特上皮', quantity: 4 },
            { name: '幻獣の剛蒼角', quantity: 3 },
          ],
        },
        {
          name: 'マグダ・ウングラⅠ',
          materials: [
            { name: '熔山龍の熱鱗', quantity: 4 },
            { name: '熔山龍のマグマ', quantity: 4 },
            { name: '熔山龍の岩殻', quantity: 8 },
            { name: '熔山龍の宝玉', quantity: 1 },
          ],
        },
        {
          name: 'マグダ・ウングラⅡ',
          materials: [
            { name: '獄炎石', quantity: 3 },
            { name: '熔山龍の背甲', quantity: 2 },
            { name: '熔山龍の胸殻', quantity: 2 },
            { name: '冥灯龍の白殻', quantity: 4 },
          ],
        },
        {
          name: '熔山双剣マグダウング',
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
          name: '黒鋼の双剣Ⅰ',
          materials: [
            { name: '大地の結晶', quantity: 10 },
            { name: 'ライトクリスタル', quantity: 1 },
            { name: '深海の結晶', quantity: 10 },
            { name: '龍脈の結晶', quantity: 10 },
          ],
        },
        {
          name: '黒鋼の双剣Ⅱ',
          materials: [
            { name: '獄炎石', quantity: 1 },
            { name: '竜玉', quantity: 1 },
            { name: 'カブレライト鉱石', quantity: 10 },
            { name: 'ユニオン鉱石', quantity: 5 },
          ],
        },
        {
          name: 'ツインネイル',
          materials: [
            { name: '炎龍の尖爪', quantity: 2 },
            { name: '獄炎石', quantity: 2 },
            { name: '竜玉', quantity: 1 },
            { name: '鋼龍の尖爪', quantity: 2 },
          ],
        },
        {
          name: '氷炎剣ヴィルマフレア',
          materials: [
            { name: '炎王龍の尖角', quantity: 3 },
            { name: '鋼龍の尖角', quantity: 3 },
            { name: 'ノヴァクリスタル', quantity: 2 },
            { name: '冥灯龍の幽爪', quantity: 2 },
          ],
        },
        {
          name: '氷炎魔剣ヴィルマクス',
          materials: [
            { name: 'ピュアクリスタル', quantity: 2 },
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '炎龍の剛爪', quantity: 3 },
            { name: '鋼龍の剛爪', quantity: 3 },
          ],
        },
        {
          name: 'ゼノ＝ラクス',
          materials: [
            { name: '冥灯龍の白殻', quantity: 6 },
            { name: '冥灯龍の幽爪', quantity: 4 },
            { name: '冥灯龍の幽玉', quantity: 1 },
            { name: '冥灯龍の尻尾', quantity: 2 },
          ],
        },
        {
          name: 'ゼノ＝ラクス改',
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
          name: '憤怒の双刃',
          materials: [
            { name: '恐暴竜の黒鱗', quantity: 6 },
            { name: '恐暴竜の大牙', quantity: 3 },
            { name: '恐暴竜の鉤爪', quantity: 2 },
            { name: '恐暴竜の唾液', quantity: 2 },
          ],
        },
        {
          name: 'ラースプレデター',
          materials: [
            { name: '恐暴竜の大牙', quantity: 5 },
            { name: '恐暴竜の頭殻', quantity: 2 },
            { name: '恐暴竜の宝玉', quantity: 1 },
            { name: '古龍の血', quantity: 5 },
          ],
        },
        {
          name: '業双刃ベガモラルタ',
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
          name: 'エンプレスダガー',
          materials: [
            { name: '炎妃龍のたてがみ', quantity: 3 },
            { name: '炎妃龍の宝玉', quantity: 1 },
            { name: '炎妃龍の尖角', quantity: 3 },
            { name: '炎妃龍の上鱗', quantity: 4 },
          ],
        },
        {
          name: 'エンプレスダガー・冥灯',
          materials: [
            { name: '冥灯龍の幽角', quantity: 3 },
            { name: '冥灯龍の幽玉', quantity: 1 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の尻尾', quantity: 2 },
          ],
        },
        {
          name: 'エンプレスダガー・滅尽',
          materials: [
            { name: '滅尽龍の宝玉', quantity: 1 },
            { name: '滅尽龍の大角', quantity: 3 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の翼', quantity: 3 },
          ],
        },
        {
          name: 'エンプレスダガー・炎妃',
          materials: [
            { name: '炎王龍の尖角', quantity: 3 },
            { name: '爆鱗竜の宝玉', quantity: 1 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の尖角', quantity: 2 },
          ],
        },
        {
          name: '魂焔の双刃・炎妃',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '炎妃龍の厚鱗', quantity: 4 },
            { name: '炎妃龍の剛角', quantity: 4 },
            { name: '炎妃龍の大たてがみ', quantity: 4 },
          ],
        },
        {
          name: '魂焔の双刃・滅尽',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '殲滅の大剛角', quantity: 3 },
            { name: '無窮の新生殻', quantity: 3 },
            { name: '炎妃龍の厚鱗', quantity: 4 },
          ],
        },
        {
          name: '魂焔の双刃・冥灯',
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
      name: 'ウィッチャー系',
      weapons: [
        {
          name: 'ジルエアエル',
          materials: [
            { name: 'ノヴァクリスタル', quantity: 2 },
            { name: '古のレーシェン討伐の証', quantity: 1 },
            { name: 'レーシェンの古呪角', quantity: 3 },
            { name: 'レーシェンの樹爪', quantity: 8 },
          ],
        },
        {
          name: 'ジルエアエル＋',
          materials: [
            { name: 'レーシェン討伐の証', quantity: 1 },
            { name: 'ピュアクリスタル', quantity: 2 },
            { name: '溟龍の剛爪', quantity: 2 },
            { name: '親友の証', quantity: 1 },
          ],
        },
      ],
    },
    {
      name: 'フワフワ系',
      weapons: [
        {
          name: 'フワフワの羽根箒',
          materials: [
            { name: '頑丈な骨', quantity: 5 },
            { name: '浮空竜の毛皮', quantity: 3 },
            { name: '睡眠袋', quantity: 2 },
            { name: 'フワフワチケット', quantity: 1 },
          ],
        },
        {
          name: 'フワフワの慈愛',
          materials: [
            { name: '浮空竜の上毛皮', quantity: 3 },
            { name: '昏睡袋', quantity: 3 },
            { name: '勇気の証G', quantity: 1 },
            { name: 'フワフワチケット', quantity: 2 },
          ],
        },
        {
          name: 'フワフワ天国',
          materials: [
            { name: '卒倒昏睡袋', quantity: 4 },
            { name: '覇王の証', quantity: 1 },
            { name: '浮空竜の厚毛皮', quantity: 3 },
            { name: '調査団チケットG', quantity: 2 },
          ],
        },
      ],
    },
    {
      name: '金獅子系',
      weapons: [
        {
          name: '闘鬼【高丸】',
          materials: [
            { name: '金獅子の重牙', quantity: 2 },
            { name: '金獅子の剛爪', quantity: 1 },
            { name: '金獅子の剛角', quantity: 1 },
            { name: '金獅子の黒荒毛', quantity: 2 },
          ],
        },
        {
          name: '闘神鬼【大嶽丸】',
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
          name: '鬼神闘拳【獄殺】',
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
          name: '獄爪リュウキ',
          materials: [
            { name: '獄狼竜の滅龍毛', quantity: 2 },
            { name: '獄狼竜の滅龍殻', quantity: 2 },
            { name: '獄狼竜の剛角', quantity: 1 },
            { name: '獄狼竜の剛爪', quantity: 1 },
          ],
        },
        {
          name: '狼牙双爪【血獄】',
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
          name: '砕光の双閃',
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
      name: 'キレアジセーバー系',
      weapons: [
        {
          name: 'キレアジセーバー',
          materials: [
            { name: 'エルトライト鉱石', quantity: 5 },
            { name: '泥魚竜の厚鱗', quantity: 2 },
            { name: '泥魚竜の特上ヒレ', quantity: 1 },
            { name: 'キレアジチケット', quantity: 1 },
          ],
        },
        {
          name: 'キレアジセーバー改',
          materials: [
            { name: '特大水袋', quantity: 3 },
            { name: '覇王の証', quantity: 1 },
            { name: '溟龍の幻曜ヒゲ', quantity: 3 },
            { name: 'キレアジチケット', quantity: 1 },
          ],
        },
      ],
    },
    {
      name: 'ジョッキ系',
      weapons: [
        {
          name: 'べろべろビーア',
          materials: [
            { name: '重竜骨', quantity: 5 },
            { name: '黒轟竜の重殻', quantity: 3 },
            { name: '黒轟竜の重牙', quantity: 2 },
            { name: '食事場チケット【酒】', quantity: 1 },
          ],
        },
        {
          name: 'へべれけビーア',
          materials: [
            { name: '卒倒昏睡袋', quantity: 3 },
            { name: '濃縮麻痺袋', quantity: 3 },
            { name: '覇王の証', quantity: 1 },
            { name: '食事場チケット【酒】', quantity: 1 },
          ],
        },
      ],
    },
    {
      name: '煌黒龍',
      weapons: [
        {
          name: '煌黒の双剣',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '煌黒龍の凶爪', quantity: 3 },
            { name: '天を統べる角', quantity: 1 },
            { name: '煌黒龍の天鱗', quantity: 3 },
          ],
        },
        {
          name: '煌黒双剣アルブレ',
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
          name: '黒龍双刃',
          materials: [
            { name: '黒龍の厚鱗', quantity: 3 },
            { name: '黒龍の重胸殻', quantity: 1 },
            { name: '黒龍の剛角', quantity: 1 },
            { name: '黒龍の邪眼', quantity: 1 },
          ],
        },
        {
          name: '黒龍双刃【二天】',
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
          name: 'ギルドパレスセーバー',
          materials: [
            { name: 'グラシスメタル', quantity: 5 },
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '琥珀色の重牙', quantity: 2 },
            { name: '祭典チケット', quantity: 2 },
          ],
        },
        {
          name: '宮廷双騎【救星】',
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
