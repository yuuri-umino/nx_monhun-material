import { WeaponType } from './materialsTypes'

const bow: WeaponType = {
  type: '弓',
  derivations: [
    {
      name: '防衛隊系',
      weapons: [
        {
          name: '防衛隊迎撃用強弓Ⅰ',
          materials: [{ name: '鉄鉱石', quantity: 1 }],
        },
        {
          name: '防衛隊迎撃用強弓Ⅱ',
          materials: [{ name: '蛮顎竜の鱗', quantity: 1 }],
        },
        {
          name: '防衛隊迎撃用強弓Ⅲ',
          materials: [{ name: '勇気の証', quantity: 1 }],
        },
        {
          name: '防衛隊迎撃用強弓Ⅳ',
          materials: [{ name: '桜火竜の上鱗', quantity: 1 }],
        },
        {
          name: '防衛隊迎撃用強弓Ⅴ',
          materials: [{ name: '不滅の龍鱗', quantity: 1 }],
        },
      ],
    },
    {
      name: '鉱石素材系',
      weapons: [
        {
          name: '鉄弓Ⅰ',
          materials: [{ name: '鉄鉱石', quantity: 1 }],
        },
        {
          name: '鉄弓Ⅱ',
          materials: [{ name: '鉄鉱石', quantity: 2 }],
        },
        {
          name: '鉄弓Ⅲ',
          materials: [
            { name: '大地の結晶', quantity: 2 },
            { name: '鉄鉱石', quantity: 5 },
            { name: 'マカライト鉱石', quantity: 2 },
          ],
        },
        {
          name: '王弓エンライ',
          materials: [
            { name: '雷電袋', quantity: 3 },
            { name: '雷狼竜の雷電殻', quantity: 2 },
            { name: '雷狼竜の重殻', quantity: 5 },
            { name: '雷狼竜の剛爪', quantity: 3 },
          ],
        },
        {
          name: '王弓エンライ改',
          materials: [
            { name: '雷狼竜の雷電毛', quantity: 4 },
            { name: '雷狼竜の剛角', quantity: 3 },
            { name: '雷狼竜の天玉', quantity: 1 },
            { name: '超電雷光虫', quantity: 5 },
          ],
        },
        {
          name: '王牙弓【稚雷】',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '雷狼竜の雷電殻', quantity: 5 },
            { name: '雷狼竜の剛角', quantity: 2 },
            { name: '霊脈の剛竜骨', quantity: 5 },
          ],
        },
        {
          name: 'ネルガルファウル',
          materials: [
            { name: '滅尽龍の再生殻', quantity: 4 },
            { name: '滅尽龍の尻尾', quantity: 2 },
            { name: '滅尽龍の堅殻', quantity: 2 },
            { name: '滅尽龍の尖爪', quantity: 3 },
          ],
        },
        {
          name: '必滅の一矢',
          materials: [
            { name: '滅尽龍の宝玉', quantity: 1 },
            { name: '滅尽龍の尖爪', quantity: 5 },
            { name: '滅尽龍の大角', quantity: 5 },
            { name: '冥灯龍の幽角', quantity: 2 },
          ],
        },
        {
          name: '必滅の一矢【烈】',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '殲滅の大剛角', quantity: 3 },
            { name: '無窮の新生殻', quantity: 5 },
            { name: '滅尽龍の剛爪', quantity: 4 },
          ],
        },
        {
          name: 'クルルアローⅠ',
          materials: [
            { name: '掻鳥の鱗', quantity: 3 },
            { name: '掻鳥の皮', quantity: 2 },
            { name: '掻鳥のクチバシ', quantity: 1 },
          ],
        },
        {
          name: 'クルルアローⅡ',
          materials: [
            { name: '強固な岩骨', quantity: 3 },
            { name: '掻鳥の飾り羽', quantity: 2 },
            { name: '掻鳥のクチバシ', quantity: 2 },
            { name: '骨鎚竜の鱗', quantity: 3 },
          ],
        },
        {
          name: 'クルルアローⅢ',
          materials: [
            { name: 'いびつな狂骨', quantity: 3 },
            { name: '掻鳥の飾り羽', quantity: 4 },
            { name: '掻鳥のクチバシ', quantity: 2 },
            { name: '惨爪竜の爪', quantity: 2 },
          ],
        },
        {
          name: 'リーシャアルサクルⅠ',
          materials: [
            { name: '掻鳥の上鱗', quantity: 6 },
            { name: '掻鳥の上皮', quantity: 4 },
            { name: '掻鳥の大クチバシ', quantity: 3 },
          ],
        },
        {
          name: 'リーシャアルサクルⅡ',
          materials: [
            { name: '掻鳥の大飾り羽', quantity: 3 },
            { name: '掻鳥の大クチバシ', quantity: 4 },
            { name: '荒々しい蛮骨', quantity: 3 },
            { name: '惨爪竜の尖爪', quantity: 2 },
          ],
        },
        {
          name: 'リーシャアルサクルⅢ',
          materials: [
            { name: '掻鳥の大飾り羽', quantity: 4 },
            { name: '掻鳥の大クチバシ', quantity: 5 },
            { name: '鳥竜玉', quantity: 1 },
            { name: '滅尽龍の尖爪', quantity: 2 },
          ],
        },
        {
          name: 'ネスルアルカウスⅠ',
          materials: [
            { name: '頑強な重骨', quantity: 2 },
            { name: '掻鳥の巨大クチバシ', quantity: 1 },
            { name: '掻鳥の厚皮', quantity: 2 },
            { name: '掻鳥の厚鱗', quantity: 3 },
          ],
        },
        {
          name: 'ネスルアルカウスⅡ',
          materials: [
            { name: '迅竜の重牙', quantity: 2 },
            { name: '重竜骨', quantity: 3 },
            { name: '掻鳥の巨大クチバシ', quantity: 2 },
            { name: '掻鳥の特大飾り羽', quantity: 3 },
          ],
        },
        {
          name: 'レックスボウⅠ',
          materials: [
            { name: '頑強な重骨', quantity: 5 },
            { name: '轟竜の厚鱗', quantity: 4 },
            { name: '轟竜の剛爪', quantity: 3 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: 'レックスボウⅡ',
          materials: [
            { name: '轟竜の重牙', quantity: 4 },
            { name: '轟竜の靭尾', quantity: 1 },
            { name: '轟竜の天鱗', quantity: 1 },
            { name: '堅牢な黒巻き角', quantity: 2 },
          ],
        },
        {
          name: 'カーサスアーク',
          materials: [
            { name: '大竜玉', quantity: 1 },
            { name: '黒轟竜の厚鱗', quantity: 5 },
            { name: '黒轟竜の重牙', quantity: 2 },
            { name: '黒轟竜の剛爪', quantity: 3 },
          ],
        },
        {
          name: 'ディオスアロー',
          materials: [
            { name: 'メランジェ鉱石', quantity: 3 },
            { name: '砕竜の重殻', quantity: 4 },
            { name: '砕竜の重頭殻', quantity: 2 },
            { name: '光る粘菌', quantity: 3 },
          ],
        },
        {
          name: '爆弓ツァーリアロー',
          materials: [
            { name: '砕竜の重黒曜甲', quantity: 4 },
            { name: '砕竜の重頭殻', quantity: 3 },
            { name: '砕竜の天殻', quantity: 1 },
            { name: '凝縮された爆腺液', quantity: 3 },
          ],
        },
        {
          name: 'ブラスコルダ',
          materials: [
            { name: '爆鎚竜の顎', quantity: 1 },
            { name: '爆鎚竜の堅殻', quantity: 4 },
            { name: '爆鱗竜の上鱗', quantity: 6 },
            { name: '爆鎚竜の延髄', quantity: 1 },
          ],
        },
        {
          name: '重弓ヘラギガス',
          materials: [
            { name: '炎王龍の堅殻', quantity: 4 },
            { name: '爆鎚竜の顎', quantity: 2 },
            { name: '爆鎚竜の紅玉', quantity: 1 },
            { name: '爆鎚竜の耐熱殻', quantity: 4 },
          ],
        },
        {
          name: '剛重弓ギガントマキア',
          materials: [
            { name: '爆鎚竜の重顎', quantity: 1 },
            { name: '爆鎚竜の重耐熱殻', quantity: 2 },
            { name: '爆鎚竜の天殻', quantity: 1 },
            { name: '硫斬竜の重牙', quantity: 2 },
          ],
        },
        {
          name: 'プリンセスアローⅠ',
          materials: [
            { name: '雌火竜の甲殻', quantity: 4 },
            { name: '雌火竜の鱗', quantity: 5 },
            { name: '雌火竜の棘', quantity: 3 },
          ],
        },
        {
          name: 'プリンセスアローⅡ',
          materials: [
            { name: '雌火竜の逆鱗', quantity: 1 },
            { name: '雌火竜の堅殻', quantity: 4 },
            { name: '雌火竜の上鱗', quantity: 5 },
            { name: '雌火竜の上棘', quantity: 3 },
          ],
        },
        {
          name: 'プリンセスアローⅢ',
          materials: [
            { name: '古龍の血', quantity: 3 },
            { name: '雌火竜の紅玉', quantity: 1 },
            { name: '雌火竜の上棘', quantity: 5 },
            { name: '桜火竜の上鱗', quantity: 6 },
          ],
        },
        {
          name: 'プリンセスアローⅣ',
          materials: [
            { name: '雌火竜の厚鱗', quantity: 5 },
            { name: '雌火竜の重殻', quantity: 4 },
            { name: '雌火竜の秘棘', quantity: 3 },
          ],
        },
        {
          name: 'ローゼスアロー',
          materials: [
            { name: '桜火竜の厚鱗', quantity: 4 },
            { name: '桜火竜の重殻', quantity: 3 },
            { name: '剛竜骨', quantity: 5 },
            { name: '雌火竜の天鱗', quantity: 1 },
          ],
        },
        {
          name: 'ルナティックアロー',
          materials: [
            { name: '火竜の煌液', quantity: 1 },
            { name: '金火竜の重殻', quantity: 4 },
            { name: '金火竜の厚鱗', quantity: 5 },
            { name: '金火竜の秘棘', quantity: 3 },
          ],
        },
        {
          name: '火竜の強弓Ⅰ',
          materials: [
            { name: '火竜の甲殻', quantity: 2 },
            { name: '火竜の骨髄', quantity: 1 },
            { name: '火炎袋', quantity: 2 },
            { name: '火竜の翼爪', quantity: 3 },
          ],
        },
        {
          name: '火竜の強弓Ⅱ',
          materials: [
            { name: '火竜の延髄', quantity: 1 },
            { name: '火竜の堅殻', quantity: 4 },
            { name: '火竜の上鱗', quantity: 6 },
            { name: '火竜の翼', quantity: 2 },
          ],
        },
        {
          name: '火竜の強弓Ⅲ',
          materials: [
            { name: '火竜の紅玉', quantity: 1 },
            { name: '蒼火竜の上鱗', quantity: 6 },
            { name: '蒼火竜の堅殻', quantity: 4 },
            { name: '蒼火竜の翼', quantity: 3 },
          ],
        },
        {
          name: '火竜の強弓Ⅳ',
          materials: [
            { name: '火竜の厚鱗', quantity: 6 },
            { name: '火竜の剛翼', quantity: 2 },
            { name: '火竜の剛翼爪', quantity: 4 },
            { name: '火竜の重殻', quantity: 4 },
          ],
        },
        {
          name: '蒼火竜の剛弓',
          materials: [
            { name: '火竜の天鱗', quantity: 1 },
            { name: '蒼火竜の剛翼', quantity: 3 },
            { name: '蒼火竜の厚鱗', quantity: 6 },
            { name: '蒼火竜の重殻', quantity: 4 },
          ],
        },
        {
          name: '銀火竜の烈弓',
          materials: [
            { name: '銀火竜の重殻', quantity: 6 },
            { name: '銀火竜の厚鱗', quantity: 8 },
            { name: '火竜の煌液', quantity: 2 },
            { name: '銀火竜の靭尾', quantity: 1 },
          ],
        },
        {
          name: 'アクアアローⅠ',
          materials: [
            { name: '大地の結晶', quantity: 3 },
            { name: '泥魚竜の鱗', quantity: 3 },
            { name: '泥魚竜の甲殻', quantity: 1 },
            { name: '水袋', quantity: 1 },
          ],
        },
        {
          name: 'アクアアローⅡ',
          materials: [
            { name: '咬魚の皮', quantity: 3 },
            { name: '泥魚竜の牙', quantity: 2 },
            { name: '泥魚竜のヒレ', quantity: 3 },
            { name: 'ドラグライト鉱石', quantity: 5 },
          ],
        },
        {
          name: 'アクアアローⅢ',
          materials: [
            { name: '咬魚のヒゲ', quantity: 3 },
            { name: '泥魚竜の牙', quantity: 4 },
            { name: '上竜骨', quantity: 2 },
            { name: '深海の結晶', quantity: 3 },
          ],
        },
        {
          name: 'ウォーターシュートⅠ',
          materials: [
            { name: '泥魚竜の上鱗', quantity: 3 },
            { name: '泥魚竜の堅殻', quantity: 2 },
            { name: '咬魚の上皮', quantity: 5 },
            { name: 'カブレライト鉱石', quantity: 5 },
          ],
        },
        {
          name: 'ウォーターシュートⅡ',
          materials: [
            { name: '泥魚竜の上ヒレ', quantity: 4 },
            { name: '大水袋', quantity: 3 },
            { name: '咬魚の大ヒゲ', quantity: 3 },
            { name: 'ユニオン鉱石', quantity: 5 },
          ],
        },
        {
          name: 'ウォーターシュートⅢ',
          materials: [
            { name: '古龍の血', quantity: 3 },
            { name: '竜玉', quantity: 1 },
            { name: '泥魚竜の上ヒレ', quantity: 6 },
            { name: '泥魚竜の鋭牙', quantity: 5 },
          ],
        },
        {
          name: 'ウォーターシュートⅣ',
          materials: [
            { name: '咬魚の厚皮', quantity: 2 },
            { name: '泥魚竜の厚鱗', quantity: 3 },
            { name: '泥魚竜の重牙', quantity: 1 },
            { name: '泥魚竜の特上ヒレ', quantity: 1 },
          ],
        },
        {
          name: 'ラグーナシュートⅠ',
          materials: [
            { name: '水妖鳥の剛翼', quantity: 2 },
            { name: '水妖鳥の厚鱗', quantity: 3 },
            { name: 'デプスライト鉱石', quantity: 2 },
            { name: '特大水袋', quantity: 2 },
          ],
        },
        {
          name: 'ラグーナシュートⅡ',
          materials: [
            { name: '剛竜骨', quantity: 3 },
            { name: '水妖鳥の靭尾', quantity: 1 },
            { name: '水妖鳥の特大喉袋', quantity: 1 },
            { name: '硫斬竜の重牙', quantity: 2 },
          ],
        },
        {
          name: 'アイシクルブリザードⅠ',
          materials: [
            { name: '凍てついた氷骨', quantity: 3 },
            { name: '瞬間凍結袋', quantity: 4 },
            { name: '氷牙竜の剛爪', quantity: 3 },
            { name: '氷牙竜の重殻', quantity: 4 },
          ],
        },
        {
          name: 'アイシクルブリザードⅡ',
          materials: [
            { name: '琥珀色の重牙', quantity: 3 },
            { name: '漆黒の氷刃爪', quantity: 2 },
            { name: '大竜玉', quantity: 1 },
            { name: '氷牙竜の重棘', quantity: 3 },
          ],
        },
        {
          name: 'エーデルエスタ',
          materials: [
            { name: '氷牙竜チケット', quantity: 3 },
            { name: '白銀の氷刃牙', quantity: 3 },
            { name: '氷河を砕く剣爪', quantity: 1 },
            { name: 'グラシスメタル', quantity: 5 },
          ],
        },
        {
          name: 'ヒドゥンボウ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 1 },
            { name: '迅竜の厚鱗', quantity: 3 },
            { name: '迅竜の重牙', quantity: 2 },
            { name: '迅竜の重尾棘', quantity: 2 },
          ],
        },
        {
          name: 'ヒドゥンボウ改',
          materials: [
            { name: '迅竜の天鱗', quantity: 1 },
            { name: '迅竜の靭尾', quantity: 1 },
            { name: '迅竜の剛刃翼', quantity: 4 },
            { name: '雷顎竜の重牙', quantity: 3 },
          ],
        },
        {
          name: '闇夜弓【影縫】',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '迅竜の重牙', quantity: 4 },
            { name: '迅竜の剛刃翼', quantity: 4 },
            { name: '闇を食む牙', quantity: 2 },
          ],
        },
        {
          name: 'グレイスアローⅠ',
          materials: [
            { name: '風漂竜の鱗', quantity: 4 },
            { name: '風漂竜の爪', quantity: 3 },
            { name: '氷結袋', quantity: 2 },
          ],
        },
        {
          name: 'グレイスアローⅡ',
          materials: [
            { name: '浮空竜の翼', quantity: 4 },
            { name: '風漂竜の爪', quantity: 4 },
            { name: '風漂竜の逆鱗', quantity: 1 },
            { name: '風漂竜の尾膜', quantity: 3 },
          ],
        },
        {
          name: 'ファーンライク',
          materials: [
            { name: '風漂竜の上鱗', quantity: 5 },
            { name: '凍結袋', quantity: 2 },
            { name: '風漂竜の尖爪', quantity: 3 },
            { name: '風漂竜の翼', quantity: 3 },
          ],
        },
        {
          name: 'レイ＝ファーンライク',
          materials: [
            { name: '鋼龍の尖爪', quantity: 2 },
            { name: '風漂竜の上皮', quantity: 3 },
            { name: '風漂竜の尖爪', quantity: 5 },
            { name: '風漂竜の宝玉', quantity: 1 },
          ],
        },
        {
          name: 'レイ＝ファーンライク改',
          materials: [
            { name: '凍てついた氷骨', quantity: 4 },
            { name: '風漂竜の剛爪', quantity: 3 },
            { name: '風漂竜の厚鱗', quantity: 4 },
            { name: '風漂竜の重尾膜', quantity: 1 },
          ],
        },
        {
          name: 'ブリーナ＝ファーン',
          materials: [
            { name: '漆黒の氷刃爪', quantity: 3 },
            { name: '瞬間凍結袋', quantity: 4 },
            { name: '氷霜をまとう皮', quantity: 4 },
            { name: '冷厳なる翼', quantity: 1 },
          ],
        },
        {
          name: 'ミスト＝グレイシア',
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
          name: 'ハンターボウⅠ',
          materials: [{ name: '竜骨【小】', quantity: 1 }],
        },
        {
          name: 'ハンターボウⅡ',
          materials: [{ name: '竜骨【小】', quantity: 2 }],
        },
        {
          name: 'ハンターボウⅢ',
          materials: [
            { name: '太古の大骨', quantity: 1 },
            { name: '竜骨【中】', quantity: 2 },
          ],
        },
        {
          name: 'パワーハンターボウⅠ',
          materials: [
            { name: '強固な岩骨', quantity: 2 },
            { name: '竜骨【大】', quantity: 1 },
            { name: '竜骨【中】', quantity: 5 },
          ],
        },
        {
          name: 'パワーハンターボウⅡ',
          materials: [
            { name: '竜骨【大】', quantity: 1 },
            { name: '頑丈な骨', quantity: 4 },
            { name: '上竜骨', quantity: 2 },
          ],
        },
        {
          name: 'パワーハンターボウⅢ',
          materials: [
            { name: '上竜骨', quantity: 2 },
            { name: '尖竜骨', quantity: 2 },
            { name: '上質な堅骨', quantity: 2 },
          ],
        },
        {
          name: 'ブレイブハンターボウⅠ',
          materials: [
            { name: '堅竜骨', quantity: 4 },
            { name: '尖竜骨', quantity: 6 },
            { name: '上質な堅骨', quantity: 10 },
          ],
        },
        {
          name: 'ブレイブハンターボウⅡ',
          materials: [
            { name: '堅竜骨', quantity: 6 },
            { name: '古龍骨', quantity: 4 },
            { name: '上質な堅骨', quantity: 20 },
            { name: 'いにしえの龍骨', quantity: 1 },
          ],
        },
        {
          name: 'ワイズハンターボウⅠ',
          materials: [
            { name: '堅竜骨', quantity: 4 },
            { name: '上質な堅骨', quantity: 4 },
            { name: '頑強な重骨', quantity: 2 },
            { name: '凍てついた氷骨', quantity: 1 },
          ],
        },
        {
          name: 'ワイズハンターボウⅡ',
          materials: [
            { name: '頑強な重骨', quantity: 4 },
            { name: 'モンスターの特濃', quantity: 2 },
            { name: '剛竜骨', quantity: 2 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: 'ワイズハンターボウⅢ',
          materials: [
            { name: '頑強な重骨', quantity: 6 },
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '剛竜骨', quantity: 4 },
            { name: '太古龍骨', quantity: 3 },
          ],
        },
        {
          name: 'アイスライザー',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '氷晶の厚龍鱗', quantity: 5 },
            { name: '冰龍の剛爪', quantity: 3 },
            { name: '冰龍の靭尾', quantity: 1 },
          ],
        },
        {
          name: '氷妖イヴェリア',
          materials: [
            { name: '冰龍の冠角', quantity: 4 },
            { name: '冰龍の剛爪', quantity: 4 },
            { name: '冰龍の零玉', quantity: 1 },
            { name: '地啼竜の慈爪', quantity: 3 },
          ],
        },
        {
          name: '巨牛の大弓Ⅰ',
          materials: [
            { name: '強竜骨', quantity: 3 },
            { name: '猛牛竜の巨大な角', quantity: 1 },
            { name: '猛牛竜の重殻', quantity: 2 },
            { name: '猛牛竜の重甲', quantity: 2 },
          ],
        },
        {
          name: '巨牛の大弓Ⅱ',
          materials: [
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '剛竜骨', quantity: 4 },
            { name: '猛牛竜の巨大な角', quantity: 4 },
            { name: '猛牛竜の重甲', quantity: 1 },
          ],
        },
        {
          name: 'ディノアローⅠ',
          materials: [
            { name: 'エルトライト鉱石', quantity: 6 },
            { name: '斬竜の厚鱗', quantity: 4 },
            { name: '斬竜の重牙', quantity: 2 },
            { name: '赤熱した溶炉嚢', quantity: 2 },
          ],
        },
        {
          name: 'ディノアローⅡ',
          materials: [
            { name: '兇爪竜の重牙', quantity: 3 },
            { name: '斬竜の獄炎状殻', quantity: 4 },
            { name: '斬竜の断剣尾', quantity: 1 },
            { name: '斬竜の天鱗', quantity: 1 },
          ],
        },
        {
          name: 'ザルファーアローⅠ',
          materials: [
            { name: '削られた硫晶片', quantity: 4 },
            { name: '硫斬竜の剣山状殻', quantity: 3 },
            { name: '硫斬竜の重牙', quantity: 3 },
            { name: '硫斬竜の断剣尾', quantity: 1 },
          ],
        },
        {
          name: 'ザルファーアローⅡ',
          materials: [
            { name: '斬竜の天鱗', quantity: 1 },
            { name: '硫斬竜の剣山状殻', quantity: 3 },
            { name: '硫斬竜の重牙', quantity: 4 },
            { name: '屍套龍の剛爪', quantity: 2 },
          ],
        },
        {
          name: 'ハザクヴェロスⅠ',
          materials: [
            { name: '死屍の龍鱗', quantity: 6 },
            { name: '屍套龍の尖爪', quantity: 4 },
            { name: '屍套龍の鋭牙', quantity: 5 },
            { name: '屍套龍の被膜', quantity: 4 },
          ],
        },
        {
          name: 'ハザクヴェロスⅡ',
          materials: [
            { name: '冥灯龍の幽幕', quantity: 3 },
            { name: '屍套龍の尖爪', quantity: 6 },
            { name: '屍套龍の尻尾', quantity: 2 },
            { name: '屍套龍の宝玉', quantity: 1 },
          ],
        },
        {
          name: '屍弓ヴァルヴェロス',
          materials: [
            { name: '屍套龍の剛爪', quantity: 3 },
            { name: '闇を食む牙', quantity: 2 },
            { name: '死屍の厚龍鱗', quantity: 5 },
            { name: '死屍を紡いだ被膜', quantity: 3 },
          ],
        },
        {
          name: 'ヒドラプラヌラ',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '溟龍の特上皮', quantity: 5 },
            { name: '溟龍の剛爪', quantity: 4 },
            { name: '溟龍の幻曜ヒゲ', quantity: 2 },
          ],
        },
        {
          name: 'ネロプラヌラ',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '地啼竜の慈爪', quantity: 3 },
            { name: '溟龍の幻曜ヒゲ', quantity: 5 },
            { name: '溟龍の靭尾', quantity: 1 },
          ],
        },
        {
          name: 'ブロスボウⅠ',
          materials: [
            { name: '角竜の牙', quantity: 2 },
            { name: 'ねじれた角', quantity: 1 },
            { name: '角竜の甲殻', quantity: 4 },
            { name: '上竜骨', quantity: 3 },
          ],
        },
        {
          name: 'ブロスボウⅡ',
          materials: [
            { name: '角竜の背甲', quantity: 4 },
            { name: '角竜の尾甲', quantity: 2 },
            { name: '尖竜骨', quantity: 4 },
            { name: '角竜の骨髄', quantity: 1 },
          ],
        },
        {
          name: 'ブロスホーンボウ',
          materials: [
            { name: '角竜の延髄', quantity: 1 },
            { name: '角竜の堅殻', quantity: 6 },
            { name: '角竜の堅甲', quantity: 5 },
            { name: '上質なねじれた角', quantity: 3 },
          ],
        },
        {
          name: 'ゲイルホーンボウ',
          materials: [
            { name: '竜玉', quantity: 1 },
            { name: '黒角竜の堅甲', quantity: 2 },
            { name: '黒角竜の堅殻', quantity: 4 },
            { name: '上質な黒巻き角', quantity: 1 },
          ],
        },
        {
          name: '角王弓ゲイルホーン',
          materials: [
            { name: 'いにしえの龍骨', quantity: 2 },
            { name: '黒角竜の堅殻', quantity: 6 },
            { name: '上質な黒巻き角', quantity: 3 },
            { name: '冥灯龍の尻尾', quantity: 2 },
          ],
        },
        {
          name: '角王弓ゲイルホーン改',
          materials: [
            { name: '角竜の重殻', quantity: 6 },
            { name: '角竜の重甲', quantity: 5 },
            { name: '堅牢なねじれた角', quantity: 3 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: '剛角王弓ディアホーン',
          materials: [
            { name: '堅牢な黒巻き角', quantity: 3 },
            { name: '剛竜骨', quantity: 3 },
            { name: '黒角竜の重殻', quantity: 3 },
            { name: '大竜玉', quantity: 1 },
          ],
        },
        {
          name: 'ブルームアーチⅠ',
          materials: [
            { name: '毒袋', quantity: 1 },
            { name: '毒妖鳥の鱗', quantity: 3 },
            { name: '毒妖鳥の羽根', quantity: 2 },
          ],
        },
        {
          name: 'ブルームアーチⅡ',
          materials: [
            { name: '毒妖鳥の尻尾', quantity: 1 },
            { name: '毒妖鳥の喉袋', quantity: 2 },
            { name: '深海の結晶', quantity: 3 },
            { name: '毒妖鳥の甲殻', quantity: 3 },
          ],
        },
        {
          name: 'ブルームアーチⅢ',
          materials: [
            { name: '毒袋', quantity: 2 },
            { name: '毒妖鳥の喉袋', quantity: 2 },
            { name: '毒妖鳥の羽根', quantity: 4 },
            { name: '上竜骨', quantity: 2 },
          ],
        },
        {
          name: 'ダチュラストリングⅠ',
          materials: [
            { name: '毒妖鳥の翼', quantity: 2 },
            { name: '毒妖鳥の上鱗', quantity: 3 },
            { name: '猛毒袋', quantity: 2 },
            { name: '上質な堅骨', quantity: 3 },
          ],
        },
        {
          name: 'ダチュラストリングⅡ',
          materials: [
            { name: '堅竜骨', quantity: 3 },
            { name: '毒妖鳥の堅殻', quantity: 5 },
            { name: '毒妖鳥の翼', quantity: 3 },
            { name: '猛毒袋', quantity: 2 },
          ],
        },
        {
          name: 'ダチュラストリングⅢ',
          materials: [
            { name: '鳥竜玉', quantity: 1 },
            { name: '毒妖鳥の翼', quantity: 6 },
            { name: '毒妖鳥の大喉袋', quantity: 4 },
            { name: '屍套龍の翼', quantity: 2 },
          ],
        },
        {
          name: 'ダチュラスコールⅠ',
          materials: [
            { name: '強竜骨', quantity: 2 },
            { name: '劇烈毒袋', quantity: 2 },
            { name: '毒妖鳥の剛翼', quantity: 2 },
            { name: '毒妖鳥の厚鱗', quantity: 3 },
          ],
        },
        {
          name: 'ダチュラスコールⅡ',
          materials: [
            { name: '重竜骨', quantity: 3 },
            { name: '毒妖鳥の靭尾', quantity: 1 },
            { name: '毒妖鳥の特大喉袋', quantity: 1 },
            { name: '雌火竜の秘棘', quantity: 2 },
          ],
        },
        {
          name: 'ナイトメアストリングⅠ',
          materials: [
            { name: 'ゴム質の重殻', quantity: 2 },
            { name: '卒倒昏睡袋', quantity: 1 },
            { name: '浮空竜の剛翼', quantity: 2 },
            { name: '浮眠竜の厚毛皮', quantity: 3 },
          ],
        },
        {
          name: 'ナイトメアストリングⅡ',
          materials: [
            { name: '黒角竜の重甲', quantity: 2 },
            { name: '大竜玉', quantity: 1 },
            { name: '浮空竜の剛翼', quantity: 3 },
            { name: '浮眠竜の厚鱗', quantity: 5 },
          ],
        },
        {
          name: 'ブレイズボウⅠ',
          materials: [
            { name: '蛮顎竜の鱗', quantity: 3 },
            { name: '蛮顎竜の牙', quantity: 2 },
            { name: '火炎袋', quantity: 1 },
          ],
        },
        {
          name: 'ブレイズボウⅡ',
          materials: [
            { name: '火竜の骨髄', quantity: 1 },
            { name: '蛮顎竜の牙', quantity: 4 },
            { name: '蛮顎竜の尻尾', quantity: 1 },
            { name: '蛮顎竜の鼻骨', quantity: 1 },
          ],
        },
        {
          name: 'ジャナフアルカウスⅠ',
          materials: [
            { name: '蛮顎竜の逆鱗', quantity: 1 },
            { name: '爆炎袋', quantity: 3 },
            { name: '蛮顎竜の上鱗', quantity: 5 },
            { name: '蛮顎竜の鋭牙', quantity: 4 },
          ],
        },
        {
          name: 'ジャナフアルカウスⅡ',
          materials: [
            { name: '火竜の延髄', quantity: 2 },
            { name: '獄炎石', quantity: 1 },
            { name: '蛮顎竜の上毛皮', quantity: 4 },
            { name: '蛮顎竜の鋭牙', quantity: 5 },
          ],
        },
        {
          name: 'ジャナフアルカウスⅢ',
          materials: [
            { name: '炎王龍のたてがみ', quantity: 2 },
            { name: '蛮顎竜の鋭牙', quantity: 6 },
            { name: '蛮顎竜の大鼻骨', quantity: 2 },
            { name: '蛮顎竜の宝玉', quantity: 1 },
          ],
        },
        {
          name: '蛮顎竜ノ火矢Ⅰ',
          materials: [
            { name: 'エルトライト鉱石', quantity: 3 },
            { name: '蛮顎竜の重牙', quantity: 1 },
            { name: '蛮顎竜の厚鱗', quantity: 2 },
            { name: '業炎袋', quantity: 1 },
          ],
        },
        {
          name: '蛮顎竜ノ火矢Ⅱ',
          materials: [
            { name: '蛮顎竜の重鼻骨', quantity: 2 },
            { name: '蒼火竜の重殻', quantity: 2 },
            { name: '蛮顎竜の厚毛皮', quantity: 3 },
            { name: '蛮顎竜の靭尾', quantity: 1 },
          ],
        },
        {
          name: 'レラ＝ジャナールⅠ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 2 },
            { name: '剛竜骨', quantity: 3 },
            { name: '雷顎竜の厚鱗', quantity: 2 },
            { name: '雷顎竜の重牙', quantity: 1 },
          ],
        },
        {
          name: 'レラ＝ジャナールⅡ',
          materials: [
            { name: '雷顎竜の厚毛皮', quantity: 3 },
            { name: '雷顎竜の重鼻骨', quantity: 2 },
            { name: '雷顎竜の靭尾', quantity: 1 },
            { name: '雷電袋', quantity: 3 },
          ],
        },
        {
          name: 'パルサーボウⅠ',
          materials: [
            { name: '飛雷竜の爪', quantity: 1 },
            { name: '飛雷竜の毛皮', quantity: 2 },
            { name: '飛雷竜の鱗', quantity: 3 },
          ],
        },
        {
          name: 'パルサーボウⅡ',
          materials: [
            { name: '深海の結晶', quantity: 3 },
            { name: '電気袋', quantity: 2 },
            { name: '飛雷竜の爪', quantity: 3 },
            { name: '飛雷竜の電極針', quantity: 2 },
          ],
        },
        {
          name: 'パルサーボウⅢ',
          materials: [
            { name: 'いびつな狂骨', quantity: 2 },
            { name: '上竜骨', quantity: 2 },
            { name: '飛雷竜の電極針', quantity: 2 },
            { name: '飛雷竜の皮膜', quantity: 2 },
          ],
        },
        {
          name: '飛雷弓イテカガチ',
          materials: [
            { name: '飛雷竜の上毛皮', quantity: 3 },
            { name: '飛雷竜の上鱗', quantity: 4 },
            { name: '飛雷竜の尖爪', quantity: 3 },
            { name: '龍脈の結晶', quantity: 3 },
          ],
        },
        {
          name: '飛雷弓【羽々矢】',
          materials: [
            { name: '竜玉', quantity: 1 },
            { name: '飛雷竜の雷極針', quantity: 4 },
            { name: '飛雷竜の尖爪', quantity: 6 },
            { name: '滅尽龍の尖爪', quantity: 2 },
          ],
        },
        {
          name: '飛雷弓【羽々矢】改',
          materials: [
            { name: '飛雷竜の厚毛皮', quantity: 2 },
            { name: '飛雷竜の剛爪', quantity: 1 },
            { name: '飛雷竜の厚鱗', quantity: 2 },
            { name: '雷電袋', quantity: 1 },
          ],
        },
        {
          name: '万雷弓【羽々矢】',
          materials: [
            { name: '惨爪竜の強硬筋', quantity: 2 },
            { name: '飛雷竜の剛爪', quantity: 2 },
            { name: '飛雷竜の厚皮膜', quantity: 2 },
            { name: '飛雷竜の雷光針', quantity: 2 },
          ],
        },
        {
          name: '飛毒弓ベニアラシ',
          materials: [
            { name: '劇烈毒袋', quantity: 1 },
            { name: '飛毒竜の厚毛皮', quantity: 2 },
            { name: '飛毒竜の剛爪', quantity: 1 },
            { name: '飛毒竜の厚鱗', quantity: 2 },
          ],
        },
        {
          name: '飛毒弓ベニアラシ改',
          materials: [
            { name: '飛毒竜の剛爪', quantity: 2 },
            { name: '飛毒竜の厚皮膜', quantity: 2 },
            { name: '飛毒竜の猛毒針', quantity: 2 },
            { name: '硫斬竜の剣山状殻', quantity: 2 },
          ],
        },
        {
          name: '飛毒弓【紅時雨】',
          materials: [
            { name: '太古龍骨', quantity: 3 },
            { name: '大竜玉', quantity: 1 },
            { name: '濃縮麻痺袋', quantity: 3 },
            { name: '飛毒竜の猛毒針', quantity: 3 },
          ],
        },
      ],
    },
    {
      name: '龍骨系',
      weapons: [
        {
          name: '龍骨弓Ⅰ',
          materials: [
            { name: 'いびつな狂骨', quantity: 5 },
            { name: '強固な岩骨', quantity: 5 },
            { name: '太古の大骨', quantity: 5 },
            { name: 'サンゴの紅骨', quantity: 5 },
          ],
        },
        {
          name: '龍骨弓Ⅱ',
          materials: [
            { name: '竜骨【大】', quantity: 8 },
            { name: '頑丈な骨', quantity: 8 },
            { name: '上竜骨', quantity: 6 },
          ],
        },
        {
          name: '龍骨弓Ⅲ',
          materials: [
            { name: '古龍骨', quantity: 10 },
            { name: '竜玉', quantity: 1 },
            { name: 'いにしえの龍骨', quantity: 2 },
            { name: '荒々しい蛮骨', quantity: 4 },
          ],
        },
        {
          name: '龍封じの古弓Ⅰ',
          materials: [
            { name: '頑強な重骨', quantity: 6 },
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '剛竜骨', quantity: 3 },
            { name: '重竜骨', quantity: 4 },
          ],
        },
        {
          name: '龍封じの古弓Ⅱ',
          materials: [
            { name: '剛竜骨', quantity: 4 },
            { name: '太古龍骨', quantity: 6 },
            { name: '大竜玉', quantity: 1 },
            { name: '溶岩竜の特上ヒレ', quantity: 2 },
          ],
        },
        {
          name: '三界双樹ー光明ー',
          materials: [
            { name: '地啼竜の慈鱗', quantity: 6 },
            { name: '地啼竜の慈眼殻', quantity: 2 },
            { name: '地啼竜の慈爪', quantity: 4 },
            { name: '地啼竜の顕玉', quantity: 1 },
          ],
        },
      ],
    },
    {
      name: '黒鋼系',
      weapons: [
        {
          name: '黒鋼の弓Ⅰ',
          materials: [
            { name: '大地の結晶', quantity: 10 },
            { name: 'ライトクリスタル', quantity: 1 },
            { name: '深海の結晶', quantity: 10 },
            { name: '龍脈の結晶', quantity: 10 },
          ],
        },
        {
          name: '黒鋼の弓Ⅱ',
          materials: [
            { name: '獄炎石', quantity: 1 },
            { name: '竜玉', quantity: 1 },
            { name: 'カブレライト鉱石', quantity: 10 },
            { name: 'ユニオン鉱石', quantity: 5 },
          ],
        },
        {
          name: '鋼氷馬弓',
          materials: [
            { name: '鋼龍の尻尾', quantity: 2 },
            { name: '滅尽龍の堅殻', quantity: 5 },
            { name: '鋼龍の尖爪', quantity: 3 },
            { name: '鋼龍の翼', quantity: 4 },
          ],
        },
        {
          name: 'アルナス＝ダオラ',
          materials: [
            { name: '鋼龍の尖角', quantity: 5 },
            { name: '鋼龍の宝玉', quantity: 1 },
            { name: '冥灯龍の幽幕', quantity: 2 },
            { name: '鋼龍の尖爪', quantity: 4 },
          ],
        },
        {
          name: 'サジタル＝ダオラ',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '鋼の厚龍鱗', quantity: 5 },
            { name: '鋼龍の剛爪', quantity: 4 },
            { name: '鋼龍の剛角', quantity: 5 },
          ],
        },
        {
          name: 'ゼノ＝メートラ',
          materials: [
            { name: '冥灯龍の白殻', quantity: 6 },
            { name: '冥灯龍の幽爪', quantity: 4 },
            { name: '冥灯龍の幽玉', quantity: 1 },
            { name: '冥灯龍の尻尾', quantity: 2 },
          ],
        },
        {
          name: 'ゼノ＝メートラ',
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
      name: 'ハンターボウ系',
      weapons: [
        {
          name: 'クロスハンターボウ',
          materials: [
            { name: 'ノヴァクリスタル', quantity: 1 },
            { name: '狩猟王のコイン', quantity: 5 },
            { name: 'ボロスコイン', quantity: 4 },
            { name: 'レウスコイン', quantity: 4 },
          ],
        },
        {
          name: 'グレイトハンターボウ',
          materials: [
            { name: '竜玉', quantity: 2 },
            { name: '撃龍王のコイン', quantity: 5 },
            { name: '飛竜コイン', quantity: 4 },
            { name: '獣竜コイン', quantity: 4 },
          ],
        },
        {
          name: 'ネオ・ハンターボウ',
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
      name: 'アーロイ系',
      weapons: [
        {
          name: 'アーロイの弓',
          materials: [
            { name: '蛮顎竜の逆鱗', quantity: 1 },
            { name: '尖竜骨', quantity: 5 },
            { name: '蛮顎竜の鋭牙', quantity: 3 },
            { name: 'ノラ族義勇兵の証', quantity: 2 },
          ],
        },
        {
          name: 'アーロイの戦弓',
          materials: [
            { name: '古龍骨', quantity: 3 },
            { name: '竜玉', quantity: 1 },
            { name: '蛮顎竜の上鱗', quantity: 7 },
            { name: 'ノラ族義勇兵の証', quantity: 3 },
          ],
        },
        {
          name: 'アーロイの戦弓(逸品)',
          materials: [
            { name: '恐暴竜の厚黒鱗', quantity: 6 },
            { name: '極悪な牙', quantity: 2 },
            { name: '恐暴竜の剛鉤爪', quantity: 3 },
            { name: 'デーモンチケット', quantity: 2 },
          ],
        },
      ],
    },
    {
      name: '恐暴竜系',
      weapons: [
        {
          name: '暴徒の凶弓',
          materials: [
            { name: '恐暴竜の黒鱗', quantity: 6 },
            { name: '恐暴竜の大牙', quantity: 3 },
            { name: '恐暴竜の鉤爪', quantity: 2 },
            { name: '恐暴竜の唾液', quantity: 2 },
          ],
        },
        {
          name: 'ヴィランブレイス',
          materials: [
            { name: '恐暴竜の大牙', quantity: 5 },
            { name: '恐暴竜の頭殻', quantity: 2 },
            { name: '恐暴竜の宝玉', quantity: 1 },
            { name: '古龍の血', quantity: 5 },
          ],
        },
        {
          name: '業弓ジャールート',
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
          name: 'エンプレスアロー',
          materials: [
            { name: '炎妃龍のたてがみ', quantity: 3 },
            { name: '炎妃龍の宝玉', quantity: 1 },
            { name: '炎妃龍の尖角', quantity: 3 },
            { name: '炎妃龍の上鱗', quantity: 4 },
          ],
        },
        {
          name: 'エンプレスアロー・冥灯',
          materials: [
            { name: '冥灯龍の幽角', quantity: 3 },
            { name: '冥灯龍の幽玉', quantity: 1 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の尻尾', quantity: 2 },
          ],
        },
        {
          name: 'エンプレスアロー・滅尽',
          materials: [
            { name: '滅尽龍の宝玉', quantity: 1 },
            { name: '滅尽龍の大角', quantity: 3 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の翼', quantity: 3 },
          ],
        },
        {
          name: 'エンプレスアロー炎妃',
          materials: [
            { name: '炎王龍の尖角', quantity: 3 },
            { name: '爆鱗竜の宝玉', quantity: 1 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の尖角', quantity: 2 },
          ],
        },
        {
          name: '魂焔の龍弓・炎妃',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '炎妃龍の厚鱗', quantity: 4 },
            { name: '炎妃龍の剛角', quantity: 4 },
            { name: '炎妃龍の大たてがみ', quantity: 4 },
          ],
        },
        {
          name: '魂焔の龍弓・滅尽',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '殲滅の大剛角', quantity: 3 },
            { name: '無窮の新生殻', quantity: 3 },
            { name: '炎妃龍の厚鱗', quantity: 4 },
          ],
        },
        {
          name: '魂焔の龍弓・冥灯',
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
          name: '雷弓【獣王】',
          materials: [
            { name: '金獅子の重牙', quantity: 2 },
            { name: '金獅子の剛爪', quantity: 1 },
            { name: '金獅子の剛角', quantity: 1 },
            { name: '金獅子の黒荒毛', quantity: 2 },
          ],
        },
        {
          name: '雷弓【百獣王】',
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
          name: '雷公弓【大聖】',
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
          name: '獄弓リュウガン',
          materials: [
            { name: '獄狼竜の滅龍毛', quantity: 2 },
            { name: '獄狼竜の滅龍殻', quantity: 2 },
            { name: '獄狼竜の剛角', quantity: 1 },
            { name: '獄狼竜の剛爪', quantity: 1 },
          ],
        },
        {
          name: '狼牙弓【邪獄】',
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
          name: '砕光の閃矢',
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
          name: '煌黒の強弓',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '煌黒龍の凶爪', quantity: 3 },
            { name: '天を統べる角', quantity: 1 },
            { name: '煌黒龍の天鱗', quantity: 3 },
          ],
        },
        {
          name: '煌黒弓アルカニス',
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
          name: '殲滅と破壊の剛弓',
          materials: [
            { name: '黒龍の厚鱗', quantity: 3 },
            { name: '黒龍の重胸殻', quantity: 1 },
            { name: '黒龍の剛角', quantity: 1 },
            { name: '黒龍の邪眼', quantity: 1 },
          ],
        },
        {
          name: '断滅と崩壊の剛烈弓',
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
      name: '蒼世ノ龍弓',
      weapons: [
        {
          name: '蒼世ノ龍弓【天翔】',
          materials: [
            { name: '古龍の浄血', quantity: 2 },
            { name: '冰龍の冠角', quantity: 1 },
            { name: '冰龍の剛爪', quantity: 2 },
            { name: '蒼世の証', quantity: 1 },
          ],
        },
        {
          name: '真・蒼世ノ龍弓【天翔】',
          materials: [
            { name: '冰龍の零玉', quantity: 1 },
            { name: '白銀の氷刃牙', quantity: 1 },
            { name: '氷河を砕く剣爪', quantity: 1 },
            { name: '蒼世の大宝玉', quantity: 1 },
          ],
        },
      ],
    },
    {
      name: 'ギルドパレス系',
      weapons: [
        {
          name: 'ギルドパレスアーク',
          materials: [
            { name: 'グラシスメタル', quantity: 5 },
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '琥珀色の重牙', quantity: 2 },
            { name: '祭典チケット', quantity: 2 },
          ],
        },
        {
          name: '宮廷翼弓【極星】',
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

export default bow
