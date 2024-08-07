import { WeaponType } from './materialsTypes'

const longSword: WeaponType = {
  type: '太刀',
  derivations: [
    {
      name: '防衛隊系',
      weapons: [
        {
          name: '防衛隊連刃式太刀Ⅰ',
          materials: [{ name: '鉄鉱石', quantity: 1 }],
        },
        {
          name: '防衛隊連刃式太刀Ⅱ',
          materials: [{ name: '蛮顎竜の鱗', quantity: 1 }],
        },
        {
          name: '防衛隊連刃式太刀Ⅲ',
          materials: [{ name: '勇気の証', quantity: 1 }],
        },
        {
          name: '防衛隊連刃式太刀Ⅳ',
          materials: [{ name: '桜火竜の上鱗', quantity: 1 }],
        },
        {
          name: '防衛隊連刃式太刀Ⅴ',
          materials: [{ name: '不滅の龍鱗', quantity: 1 }],
        },
      ],
    },
    {
      name: '鉱石素材系',
      weapons: [
        {
          name: '鉄刀Ⅰ',
          materials: [{ name: '鉄鉱石', quantity: 1 }],
        },
        {
          name: '鉄刀Ⅱ',
          materials: [{ name: '鉄鉱石', quantity: 2 }],
        },
        {
          name: '鉄刀Ⅲ',
          materials: [
            { name: '大地の結晶', quantity: 2 },
            { name: '鉄鉱石', quantity: 5 },
            { name: 'マカライト鉱石', quantity: 2 },
          ],
        },
        {
          name: '鉄刀【禊】Ⅰ',
          materials: [
            { name: 'マカライト鉱石', quantity: 5 },
            { name: '竜骨【中】', quantity: 2 },
            { name: 'ドラグライト鉱石', quantity: 2 },
          ],
        },
        {
          name: '鉄刀【禊】Ⅱ',
          materials: [
            { name: 'マカライト鉱石', quantity: 10 },
            { name: 'ドラグライト鉱石', quantity: 5 },
            { name: '上竜骨', quantity: 2 },
            { name: '深海の結晶', quantity: 2 },
          ],
        },
        {
          name: '鉄刀【禊】Ⅲ',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 5 },
            { name: 'カブレライト鉱石', quantity: 8 },
            { name: '龍脈の結晶', quantity: 2 },
          ],
        },
        {
          name: '鉄刀【神楽】Ⅰ',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 10 },
            { name: 'カブレライト鉱石', quantity: 5 },
            { name: '龍脈の結晶', quantity: 3 },
            { name: 'ユニオン鉱石', quantity: 8 },
          ],
        },
        {
          name: '鉄刀【神楽】Ⅱ',
          materials: [
            { name: '古龍の血', quantity: 2 },
            { name: '獄炎石', quantity: 1 },
            { name: 'カブレライト鉱石', quantity: 20 },
            { name: 'ユニオン鉱石', quantity: 13 },
          ],
        },
        {
          name: 'ネルガルリーヴェ',
          materials: [
            { name: '滅尽龍の再生殻', quantity: 4 },
            { name: '滅尽龍の尻尾', quantity: 2 },
            { name: '滅尽龍の堅殻', quantity: 2 },
            { name: '滅尽龍の尖爪', quantity: 3 },
          ],
        },
        {
          name: '滅尽の一刀',
          materials: [
            { name: '滅尽龍の宝玉', quantity: 1 },
            { name: '滅尽龍の尖爪', quantity: 5 },
            { name: '滅尽龍の大角', quantity: 5 },
            { name: '冥灯龍の幽角', quantity: 2 },
          ],
        },
        {
          name: '滅尽の一刀【絶】',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '殲滅の大剛角', quantity: 3 },
            { name: '無窮の新生殻', quantity: 5 },
            { name: '滅尽龍の剛爪', quantity: 4 },
          ],
        },
        {
          name: '鉄刀【神威】Ⅰ',
          materials: [
            { name: 'カブレライト鉱石', quantity: 4 },
            { name: '霊脈の結晶', quantity: 2 },
            { name: 'グラシスメタル', quantity: 1 },
            { name: 'エルトライト鉱石', quantity: 2 },
          ],
        },
        {
          name: '鉄刀【神威】ⅠⅠ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 2 },
            { name: 'エルトライト鉱石', quantity: 4 },
            { name: '重竜骨', quantity: 3 },
            { name: 'デプスライト鉱石', quantity: 2 },
          ],
        },
        {
          name: '鉄刀【神威】ⅠⅡ',
          materials: [
            { name: '古龍の浄血', quantity: 3 },
            { name: 'メランジェ鉱石', quantity: 3 },
            { name: 'エルトライト鉱石', quantity: 6 },
            { name: 'ピュアクリスタル', quantity: 1 },
          ],
        },
        {
          name: 'ダイトウ',
          materials: [
            { name: '幻鳥竜玉', quantity: 1 },
            { name: '黒狼鳥の銀狼毛', quantity: 4 },
            { name: '黒狼鳥の厚鱗', quantity: 3 },
            { name: '黒狼鳥の地獄耳', quantity: 2 },
          ],
        },
        {
          name: 'ダイトウ【狼】',
          materials: [
            { name: '大竜玉', quantity: 1 },
            { name: 'イカしたクチバシ', quantity: 3 },
            { name: '黒狼鳥の剛翼', quantity: 2 },
            { name: '傷痕の紫甲殻', quantity: 3 },
          ],
        },
        {
          name: '王刀ライキリ',
          materials: [
            { name: '雷電袋', quantity: 3 },
            { name: '雷狼竜の雷電殻', quantity: 2 },
            { name: '雷狼竜の重殻', quantity: 5 },
            { name: '雷狼竜の剛爪', quantity: 3 },
          ],
        },
        {
          name: '王刀ライキリⅠ',
          materials: [
            { name: '雷狼竜の雷電毛', quantity: 4 },
            { name: '雷狼竜の剛角', quantity: 3 },
            { name: '雷狼竜の天玉', quantity: 1 },
            { name: '超電雷光虫', quantity: 5 },
          ],
        },
        {
          name: '王牙刀【伏雷】',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '雷狼竜の雷電殻', quantity: 5 },
            { name: '雷狼竜の剛角', quantity: 2 },
            { name: '霊脈の剛竜骨', quantity: 5 },
          ],
        },
        {
          name: '眩刀【揺】Ⅰ',
          materials: [
            { name: '眩鳥の鱗', quantity: 3 },
            { name: '眩鳥の爪', quantity: 2 },
            { name: '眩鳥の発光膜', quantity: 1 },
          ],
        },
        {
          name: '眩刀【揺】Ⅱ',
          materials: [
            { name: 'とがった爪', quantity: 3 },
            { name: '眩鳥の爪', quantity: 3 },
            { name: '眩鳥の発光膜', quantity: 2 },
            { name: '風漂竜の尾膜', quantity: 2 },
          ],
        },
        {
          name: '眩惑刀【閃】Ⅰ',
          materials: [
            { name: 'ライトクリスタル', quantity: 1 },
            { name: '眩鳥の上鱗', quantity: 5 },
            { name: '眩鳥の尖爪', quantity: 3 },
            { name: '眩鳥の閃光膜', quantity: 1 },
          ],
        },
        {
          name: '眩惑刀【閃】Ⅱ',
          materials: [
            { name: '眩鳥の尖爪', quantity: 4 },
            { name: '眩鳥の閃光膜', quantity: 2 },
            { name: '鋭利な爪', quantity: 5 },
            { name: '風漂竜の翼', quantity: 2 },
          ],
        },
        {
          name: '眩惑刀【閃】Ⅲ',
          materials: [
            { name: '鳥竜玉', quantity: 1 },
            { name: '眩鳥の尖爪', quantity: 5 },
            { name: '眩鳥の閃光膜', quantity: 3 },
            { name: '鋼龍の翼', quantity: 2 },
          ],
        },
        {
          name: '眩惑乱刀【閃光】Ⅰ',
          materials: [
            { name: '強靭な爪', quantity: 2 },
            { name: '眩鳥の輝光膜', quantity: 1 },
            { name: '眩鳥の剛爪', quantity: 1 },
            { name: '眩鳥の厚鱗', quantity: 2 },
          ],
        },
        {
          name: '眩惑乱刀【閃光】Ⅱ',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '眩鳥の輝光膜', quantity: 1 },
            { name: '眩鳥の剛爪', quantity: 2 },
            { name: '風漂竜の剛爪', quantity: 2 },
          ],
        },
        {
          name: '氷牙刀【琥珀】Ⅰ',
          materials: [
            { name: '凍てついた氷骨', quantity: 3 },
            { name: '瞬間凍結袋', quantity: 4 },
            { name: '氷牙竜の剛爪', quantity: 3 },
            { name: '氷牙竜の重殻', quantity: 4 },
          ],
        },
        {
          name: '氷牙刀【琥珀】Ⅱ',
          materials: [
            { name: '琥珀色の重牙', quantity: 3 },
            { name: '漆黒の氷刃爪', quantity: 2 },
            { name: '大竜玉', quantity: 1 },
            { name: '氷牙竜の重棘', quantity: 3 },
          ],
        },
        {
          name: 'アデュラルエッジ',
          materials: [
            { name: '大竜玉', quantity: 1 },
            { name: '氷牙竜チケット', quantity: 3 },
            { name: '白銀の氷刃牙', quantity: 3 },
            { name: '氷河を砕く剣爪', quantity: 2 },
          ],
        },
        {
          name: 'アルリーシャⅠ',
          materials: [
            { name: '掻鳥の鱗', quantity: 3 },
            { name: '掻鳥の皮', quantity: 2 },
            { name: '掻鳥のクチバシ', quantity: 1 },
          ],
        },
        {
          name: 'アルリーシャⅡ',
          materials: [
            { name: '強固な岩骨', quantity: 3 },
            { name: '掻鳥の飾り羽', quantity: 2 },
            { name: '掻鳥のクチバシ', quantity: 2 },
            { name: '骨鎚竜の鱗', quantity: 3 },
          ],
        },
        {
          name: 'アルリーシャⅢ',
          materials: [
            { name: 'いびつな狂骨', quantity: 3 },
            { name: '掻鳥の飾り羽', quantity: 4 },
            { name: '掻鳥のクチバシ', quantity: 2 },
            { name: '惨爪竜の爪', quantity: 2 },
          ],
        },
        {
          name: 'アルダジャージュⅠ',
          materials: [
            { name: '掻鳥の上鱗', quantity: 6 },
            { name: '掻鳥の上皮', quantity: 4 },
            { name: '掻鳥の大クチバシ', quantity: 3 },
          ],
        },
        {
          name: 'アルダジャージュⅡ',
          materials: [
            { name: '掻鳥の大飾り羽', quantity: 3 },
            { name: '掻鳥の大クチバシ', quantity: 4 },
            { name: '荒々しい蛮骨', quantity: 3 },
            { name: '惨爪竜の尖爪', quantity: 2 },
          ],
        },
        {
          name: 'アルダジャージュⅢ',
          materials: [
            { name: '掻鳥の大飾り羽', quantity: 4 },
            { name: '掻鳥の大クチバシ', quantity: 5 },
            { name: '鳥竜玉', quantity: 1 },
            { name: '滅尽龍の尖爪', quantity: 2 },
          ],
        },
        {
          name: 'ネスルラフィークⅠ',
          materials: [
            { name: '頑強な重骨', quantity: 2 },
            { name: '掻鳥の巨大クチバシ', quantity: 1 },
            { name: '掻鳥の厚皮', quantity: 2 },
            { name: '掻鳥の厚鱗', quantity: 3 },
          ],
        },
        {
          name: 'ネスルラフィークⅡ',
          materials: [
            { name: '迅竜の重牙', quantity: 2 },
            { name: '重竜骨', quantity: 3 },
            { name: '掻鳥の巨大クチバシ', quantity: 2 },
            { name: '掻鳥の特大飾り羽', quantity: 3 },
          ],
        },
        {
          name: 'ヒドゥンサーベル',
          materials: [
            { name: 'メランジェ鉱石', quantity: 1 },
            { name: '迅竜の厚鱗', quantity: 3 },
            { name: '迅竜の重牙', quantity: 2 },
            { name: '迅竜の重尾棘', quantity: 2 },
          ],
        },
        {
          name: 'ヒドゥンサーベル改',
          materials: [
            { name: '迅竜の天鱗', quantity: 1 },
            { name: '迅竜の靭尾', quantity: 2 },
            { name: '迅竜の剛刃翼', quantity: 3 },
            { name: '雷顎竜の重牙', quantity: 2 },
          ],
        },
        {
          name: '夜刀【月影】',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '迅竜の重牙', quantity: 4 },
            { name: '迅竜の剛刃翼', quantity: 4 },
            { name: '闇を食む牙', quantity: 2 },
          ],
        },
        {
          name: 'ブラスリッジⅠ',
          materials: [
            { name: '爆鎚竜の顎', quantity: 1 },
            { name: '爆鎚竜の堅殻', quantity: 4 },
            { name: '爆鎚竜の上鱗', quantity: 6 },
            { name: '爆鎚竜の延髄', quantity: 1 },
          ],
        },
        {
          name: 'ブラスリッジⅡ',
          materials: [
            { name: '炎王龍の堅殻', quantity: 4 },
            { name: '爆鎚竜の顎', quantity: 2 },
            { name: '爆鎚竜の紅玉', quantity: 1 },
            { name: '爆鎚竜の耐熱殻', quantity: 4 },
          ],
        },
        {
          name: '重刃ブラスⅠ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 2 },
            { name: '爆鎚竜の厚鱗', quantity: 3 },
            { name: '爆鎚竜の重殻', quantity: 2 },
            { name: '爆鎚竜の重顎', quantity: 1 },
          ],
        },
        {
          name: '重刃ブラスⅡ',
          materials: [
            { name: '爆鎚竜の重顎', quantity: 1 },
            { name: '爆鎚竜の重耐熱殻', quantity: 2 },
            { name: '爆鎚竜の天殻', quantity: 1 },
            { name: '硫斬竜の重牙', quantity: 2 },
          ],
        },
        {
          name: 'ディノスパーダⅠ',
          materials: [
            { name: 'エルトライト鉱石', quantity: 6 },
            { name: '斬竜の厚鱗', quantity: 4 },
            { name: '斬竜の重牙', quantity: 2 },
            { name: '赤熱した溶炉嚢', quantity: 2 },
          ],
        },
        {
          name: 'ディノスパーダⅡ',
          materials: [
            { name: '兇爪竜の重牙', quantity: 2 },
            { name: '斬竜の獄炎状殻', quantity: 3 },
            { name: '斬竜の断剣尾', quantity: 2 },
            { name: '斬竜の天鱗', quantity: 1 },
          ],
        },
        {
          name: '飛竜刀【青葉】',
          materials: [
            { name: '雌火竜の甲殻', quantity: 4 },
            { name: '雌火竜の鱗', quantity: 5 },
            { name: '雌火竜の棘', quantity: 3 },
          ],
        },
        {
          name: '飛竜刀【翠】',
          materials: [
            { name: '雌火竜の逆鱗', quantity: 1 },
            { name: '雌火竜の堅殻', quantity: 4 },
            { name: '雌火竜の上鱗', quantity: 5 },
            { name: '雌火竜の上棘', quantity: 3 },
          ],
        },
        {
          name: '飛竜刀【葵】',
          materials: [
            { name: '古龍の血', quantity: 3 },
            { name: '雌火竜の紅玉', quantity: 1 },
            { name: '雌火竜の上棘', quantity: 5 },
            { name: '桜火竜の上鱗', quantity: 6 },
          ],
        },
        {
          name: '飛竜刀【桜花】',
          materials: [
            { name: '雌火竜の厚鱗', quantity: 5 },
            { name: '雌火竜の重殻', quantity: 4 },
            { name: '雌火竜の秘棘', quantity: 3 },
          ],
        },
        {
          name: '飛竜刀【桜花】改',
          materials: [
            { name: '桜火竜の厚鱗', quantity: 4 },
            { name: '桜火竜の重殻', quantity: 3 },
            { name: '剛竜骨', quantity: 5 },
            { name: '雌火竜の天鱗', quantity: 1 },
          ],
        },
        {
          name: '飛竜刀【月】',
          materials: [
            { name: '火竜の煌液', quantity: 1 },
            { name: '金火竜の重殻', quantity: 4 },
            { name: '金火竜の厚鱗', quantity: 5 },
            { name: '金火竜の秘棘', quantity: 3 },
          ],
        },
        {
          name: '飛竜刀【紅葉】',
          materials: [
            { name: '火竜の甲殻', quantity: 2 },
            { name: '火竜の骨髄', quantity: 1 },
            { name: '火炎袋', quantity: 2 },
            { name: '火竜の翼爪', quantity: 3 },
          ],
        },
        {
          name: '飛竜刀【朱】',
          materials: [
            { name: '火竜の逆鱗', quantity: 1 },
            { name: '火竜の堅殻', quantity: 4 },
            { name: '火竜の上鱗', quantity: 6 },
            { name: '火竜の翼', quantity: 2 },
          ],
        },
        {
          name: '飛竜刀【蒼】',
          materials: [
            { name: '火竜の延髄', quantity: 1 },
            { name: '蒼火竜の上鱗', quantity: 6 },
            { name: '蒼火竜の堅殻', quantity: 4 },
            { name: '蒼火竜の翼', quantity: 3 },
          ],
        },
        {
          name: '飛竜刀【藍染】',
          materials: [
            { name: '炎王龍の尖角', quantity: 2 },
            { name: '火竜の紅玉', quantity: 1 },
            { name: '蒼火竜の上鱗', quantity: 8 },
            { name: '蒼火竜の尻尾', quantity: 3 },
          ],
        },
        {
          name: '飛竜刀【藍染】改',
          materials: [
            { name: '火竜の厚鱗', quantity: 6 },
            { name: '火竜の剛翼', quantity: 2 },
            { name: '火竜の剛翼爪', quantity: 4 },
            { name: '火竜の重殻', quantity: 4 },
          ],
        },
        {
          name: '飛竜刀【蒼天】',
          materials: [
            { name: '火竜の天鱗', quantity: 1 },
            { name: '蒼火竜の剛翼', quantity: 3 },
            { name: '蒼火竜の厚鱗', quantity: 6 },
            { name: '蒼火竜の重殻', quantity: 4 },
          ],
        },
        {
          name: '飛竜刀【銀】',
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
          name: 'ボーンショテルⅠ',
          materials: [{ name: '竜骨【小】', quantity: 1 }],
        },
        {
          name: 'ボーンショテルⅡ',
          materials: [{ name: '竜骨【小】', quantity: 2 }],
        },
        {
          name: 'ボーンショテルⅢ',
          materials: [
            { name: '太古の大骨', quantity: 1 },
            { name: '竜骨【中】', quantity: 2 },
          ],
        },
        {
          name: 'ハードボーンショテルⅠ',
          materials: [
            { name: '強固な岩骨', quantity: 2 },
            { name: '竜骨【大】', quantity: 1 },
            { name: '竜骨【中】', quantity: 5 },
          ],
        },
        {
          name: 'ハードボーンショテルⅡ',
          materials: [
            { name: '竜骨【大】', quantity: 1 },
            { name: '頑丈な骨', quantity: 4 },
            { name: '上竜骨', quantity: 2 },
          ],
        },
        {
          name: 'ハードボーンショテルⅢ',
          materials: [
            { name: '上竜骨', quantity: 2 },
            { name: '尖竜骨', quantity: 2 },
            { name: '上質な堅骨', quantity: 2 },
          ],
        },
        {
          name: 'ボーンリーパーⅠ',
          materials: [
            { name: '堅竜骨', quantity: 4 },
            { name: '尖竜骨', quantity: 6 },
            { name: '上質な堅骨', quantity: 10 },
          ],
        },
        {
          name: 'ボーンリーパーⅡ',
          materials: [
            { name: '堅竜骨', quantity: 6 },
            { name: '古龍骨', quantity: 4 },
            { name: '上質な堅骨', quantity: 20 },
            { name: 'いにしえの龍骨', quantity: 1 },
          ],
        },
        {
          name: 'グランドケペシュⅠ',
          materials: [
            { name: '堅竜骨', quantity: 4 },
            { name: '上質な堅骨', quantity: 4 },
            { name: '頑強な重骨', quantity: 2 },
            { name: '凍てついた氷骨', quantity: 1 },
          ],
        },
        {
          name: 'グランドケペシュⅡ',
          materials: [
            { name: '頑強な重骨', quantity: 4 },
            { name: 'モンスターの特濃', quantity: 2 },
            { name: '剛竜骨', quantity: 2 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: 'グランドケペシュⅢ',
          materials: [
            { name: '頑強な重骨', quantity: 6 },
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '剛竜骨', quantity: 4 },
            { name: '太古龍骨', quantity: 3 },
          ],
        },
        {
          name: 'アイスラーミナ',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '氷晶の厚龍鱗', quantity: 4 },
            { name: '冰龍の剛爪', quantity: 2 },
            { name: '冰龍の靭尾', quantity: 2 },
          ],
        },
        {
          name: '一虎刀',
          materials: [
            { name: '頑強な重骨', quantity: 5 },
            { name: '轟竜の厚鱗', quantity: 4 },
            { name: '轟竜の剛爪', quantity: 3 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: '一虎刀改',
          materials: [
            { name: '轟竜の重牙', quantity: 3 },
            { name: '轟竜の靭尾', quantity: 2 },
            { name: '轟竜の天鱗', quantity: 1 },
            { name: '堅牢な黒巻き角', quantity: 1 },
          ],
        },
        {
          name: '吼虎刀',
          materials: [
            { name: '大竜玉', quantity: 1 },
            { name: '黒轟竜の厚鱗', quantity: 5 },
            { name: '黒轟竜の重牙', quantity: 2 },
            { name: '黒轟竜の剛爪', quantity: 3 },
          ],
        },
        {
          name: '吼虎刀【餓咬】',
          materials: [
            { name: '轟竜の天鱗', quantity: 1 },
            { name: '黒轟竜の重牙', quantity: 3 },
            { name: '黒轟竜の剛爪', quantity: 4 },
            { name: '歴戦の黒アギト', quantity: 5 },
          ],
        },
        {
          name: '爆鱗の大刀',
          materials: [
            { name: '獄炎石', quantity: 1 },
            { name: '爆鱗竜の尖爪', quantity: 3 },
            { name: '爆鱗竜の上鱗', quantity: 5 },
            { name: '爆鱗竜の爆腺', quantity: 4 },
          ],
        },
        {
          name: '爆鱗刀バゼルバルガー',
          materials: [
            { name: '爆鱗竜の尖爪', quantity: 4 },
            { name: '爆鱗竜の翼', quantity: 4 },
            { name: '爆鱗竜の宝玉', quantity: 1 },
            { name: '冥灯龍の幽翼', quantity: 3 },
          ],
        },
        {
          name: '爆炎の太刀',
          materials: [
            { name: 'メランジェ鉱石', quantity: 5 },
            { name: '凝縮された爆腺液', quantity: 3 },
            { name: '爆鱗竜の厚鱗', quantity: 4 },
            { name: '爆鱗竜の剛爪', quantity: 3 },
          ],
        },
        {
          name: '爆炎刀バゼルプロジオ',
          materials: [
            { name: '天を焦がす銀翼', quantity: 4 },
            { name: '爆鱗竜の天鱗', quantity: 1 },
            { name: '爆鱗竜の剛爪', quantity: 4 },
            { name: '地啼竜の散華石', quantity: 2 },
          ],
        },
        {
          name: 'ブレイズショテルⅠ',
          materials: [
            { name: '蛮顎竜の鱗', quantity: 3 },
            { name: '蛮顎竜の牙', quantity: 2 },
            { name: '火炎袋', quantity: 1 },
          ],
        },
        {
          name: 'ブレイズショテルⅡ',
          materials: [
            { name: '火竜の骨髄', quantity: 1 },
            { name: '蛮顎竜の牙', quantity: 4 },
            { name: '蛮顎竜の尻尾', quantity: 1 },
            { name: '蛮顎竜の鼻骨', quantity: 1 },
          ],
        },
        {
          name: 'ジャナフシミターⅠ',
          materials: [
            { name: '蛮顎竜の逆鱗', quantity: 1 },
            { name: '爆炎袋', quantity: 3 },
            { name: '蛮顎竜の上鱗', quantity: 5 },
            { name: '蛮顎竜の鋭牙', quantity: 4 },
          ],
        },
        {
          name: 'ジャナフシミターⅡ',
          materials: [
            { name: '火竜の延髄', quantity: 2 },
            { name: '獄炎石', quantity: 1 },
            { name: '蛮顎竜の上毛皮', quantity: 4 },
            { name: '蛮顎竜の鋭牙', quantity: 5 },
          ],
        },
        {
          name: 'ジャナフシミターⅢ',
          materials: [
            { name: '炎王龍のたてがみ', quantity: 2 },
            { name: '蛮顎竜の鋭牙', quantity: 6 },
            { name: '蛮顎竜の大鼻骨', quantity: 2 },
            { name: '蛮顎竜の宝玉', quantity: 1 },
          ],
        },
        {
          name: '蛮顎竜ノ激牙Ⅰ',
          materials: [
            { name: 'エルトライト鉱石', quantity: 3 },
            { name: '蛮顎竜の重牙', quantity: 1 },
            { name: '蛮顎竜の厚鱗', quantity: 2 },
            { name: '業炎袋', quantity: 1 },
          ],
        },
        {
          name: '蛮顎竜ノ激牙Ⅱ',
          materials: [
            { name: '蛮顎竜の重鼻骨', quantity: 2 },
            { name: '蒼火竜の重殻', quantity: 2 },
            { name: '蛮顎竜の厚毛皮', quantity: 3 },
            { name: '蛮顎竜の靭尾', quantity: 1 },
          ],
        },
        {
          name: 'モルダ＝ジャナールⅠ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 2 },
            { name: '剛竜骨', quantity: 3 },
            { name: '雷顎竜の厚鱗', quantity: 2 },
            { name: '雷顎竜の重牙', quantity: 1 },
          ],
        },
        {
          name: 'モルダ＝ジャナールⅡ',
          materials: [
            { name: '雷顎竜の厚毛皮', quantity: 3 },
            { name: '雷顎竜の重鼻骨', quantity: 2 },
            { name: '雷顎竜の靭尾', quantity: 1 },
            { name: '雷電袋', quantity: 3 },
          ],
        },
        {
          name: 'シュラムショテルⅠ',
          materials: [
            { name: '泥魚竜の鱗', quantity: 3 },
            { name: '泥魚竜の甲殻', quantity: 1 },
            { name: '泥魚竜のヒレ', quantity: 1 },
            { name: '水袋', quantity: 1 },
          ],
        },
        {
          name: 'シュラムショテルⅡ',
          materials: [
            { name: '咬魚の皮', quantity: 3 },
            { name: '泥魚竜の甲殻', quantity: 3 },
            { name: '泥魚竜のヒレ', quantity: 3 },
            { name: '痺賊竜の皮', quantity: 2 },
          ],
        },
        {
          name: 'シュラムショテルⅢ',
          materials: [
            { name: '咬魚のヒゲ', quantity: 3 },
            { name: '泥魚竜の甲殻', quantity: 3 },
            { name: '泥魚竜の牙', quantity: 4 },
            { name: '上竜骨', quantity: 2 },
          ],
        },
        {
          name: 'ディプテルスⅠ',
          materials: [
            { name: '泥魚竜の上鱗', quantity: 3 },
            { name: '泥魚竜の堅殻', quantity: 2 },
            { name: '泥魚竜の上ヒレ', quantity: 2 },
            { name: '咬魚の上皮', quantity: 5 },
          ],
        },
        {
          name: 'ディプテルスⅡ',
          materials: [
            { name: '堅竜骨', quantity: 3 },
            { name: '泥魚竜の上ヒレ', quantity: 4 },
            { name: '大水袋', quantity: 3 },
            { name: '咬魚の大ヒゲ', quantity: 3 },
          ],
        },
        {
          name: 'ディプテルスⅢ',
          materials: [
            { name: '古龍骨', quantity: 2 },
            { name: '竜玉', quantity: 1 },
            { name: '泥魚竜の上ヒレ', quantity: 6 },
            { name: '泥魚竜の鋭牙', quantity: 5 },
          ],
        },
        {
          name: 'ディプ＝バルゼアⅠ',
          materials: [
            { name: '咬魚の厚皮', quantity: 2 },
            { name: '泥魚竜の厚鱗', quantity: 3 },
            { name: '泥魚竜の重牙', quantity: 1 },
            { name: '泥魚竜の特上ヒレ', quantity: 1 },
          ],
        },
        {
          name: 'ディプ＝バルゼアⅡ',
          materials: [
            { name: '咬魚の鋼ヒゲ', quantity: 1 },
            { name: '重竜骨', quantity: 2 },
            { name: '特大水袋', quantity: 2 },
            { name: '泥魚竜の特上ヒレ', quantity: 2 },
          ],
        },
        {
          name: '巨牛の大太刀Ⅰ',
          materials: [
            { name: '強竜骨', quantity: 3 },
            { name: '猛牛竜の巨大な角', quantity: 1 },
            { name: '猛牛竜の重殻', quantity: 2 },
            { name: '猛牛竜の重甲', quantity: 2 },
          ],
        },
        {
          name: '巨牛の大太刀Ⅱ',
          materials: [
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '剛竜骨', quantity: 3 },
            { name: '猛牛竜の巨大な角', quantity: 3 },
            { name: '猛牛竜の靭尾', quantity: 2 },
          ],
        },
        {
          name: 'グレイスショテルⅠ',
          materials: [
            { name: '風漂竜の鱗', quantity: 4 },
            { name: '風漂竜の爪', quantity: 3 },
            { name: '氷結袋', quantity: 2 },
          ],
        },
        {
          name: 'グレイスショテルⅡ',
          materials: [
            { name: '浮空竜の翼', quantity: 4 },
            { name: '風漂竜の爪', quantity: 4 },
            { name: '風漂竜の逆鱗', quantity: 1 },
            { name: '風漂竜の尾膜', quantity: 3 },
          ],
        },
        {
          name: 'レイ＝スティーラー',
          materials: [
            { name: '鋼龍の尖爪', quantity: 2 },
            { name: '風漂竜の上皮', quantity: 3 },
            { name: '風漂竜の尖爪', quantity: 5 },
            { name: '風漂竜の宝玉', quantity: 1 },
          ],
        },
        {
          name: 'レイ＝スティーラー改',
          materials: [
            { name: '凍てついた氷骨', quantity: 4 },
            { name: '風漂竜の剛爪', quantity: 2 },
            { name: '風漂竜の厚鱗', quantity: 3 },
            { name: '風漂竜の重尾膜', quantity: 2 },
          ],
        },
        {
          name: 'ブリーナ＝スティーラー',
          materials: [
            { name: '漆黒の氷刃爪', quantity: 2 },
            { name: '瞬間凍結袋', quantity: 4 },
            { name: '氷霜をまとう皮', quantity: 5 },
            { name: '冷厳なる翼', quantity: 2 },
          ],
        },
        {
          name: 'アブサラ＝グレイシア',
          materials: [
            { name: '漆黒の氷刃爪', quantity: 4 },
            { name: '冰龍の剛爪', quantity: 2 },
            { name: '風漂竜の天鱗', quantity: 1 },
            { name: '冷厳なる翼', quantity: 2 },
          ],
        },
        {
          name: 'ダークショテルⅠ',
          materials: [
            { name: 'カンタロスの羽', quantity: 2 },
            { name: 'カンタロスの甲殻', quantity: 3 },
            { name: 'モンスターの体液', quantity: 2 },
          ],
        },
        {
          name: 'ダークショテルⅡ',
          materials: [
            { name: 'カンタロスの羽', quantity: 4 },
            { name: 'カンタロスの甲殻', quantity: 5 },
            { name: 'カンタロスの頭', quantity: 2 },
            { name: '惨爪竜の牙', quantity: 2 },
          ],
        },
        {
          name: 'ダークシミターⅠ',
          materials: [
            { name: 'カンタロスの堅殻', quantity: 5 },
            { name: 'カンタロスの薄羽', quantity: 4 },
            { name: 'モンスターの濃汁', quantity: 2 },
            { name: '龍脈の結晶', quantity: 3 },
          ],
        },
        {
          name: 'ダークシミターⅡ',
          materials: [
            { name: 'カンタロスの堅殻', quantity: 5 },
            { name: 'カンタロスの薄羽', quantity: 4 },
            { name: 'ノヴァクリスタル', quantity: 1 },
            { name: '蒼火竜の翼', quantity: 2 },
          ],
        },
        {
          name: 'ダークシミターⅢ',
          materials: [
            { name: 'カンタロスの堅殻', quantity: 8 },
            { name: 'カンタロスの薄羽', quantity: 6 },
            { name: '竜玉', quantity: 1 },
            { name: '屍套龍の鋭牙', quantity: 3 },
          ],
        },
        {
          name: 'ダークネスモルダー',
          materials: [
            { name: '霊脈の結晶', quantity: 3 },
            { name: '強靭な爪', quantity: 1 },
            { name: 'モンスターの特濃', quantity: 2 },
            { name: 'カンタロスの斬羽', quantity: 2 },
          ],
        },
        {
          name: 'ダークネスモルダーⅡ',
          materials: [
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: 'モンスターの特濃', quantity: 3 },
            { name: 'カンタロスの斬羽', quantity: 3 },
            { name: '惨爪竜の剛爪', quantity: 2 },
            { name: 'メランジェ鉱石', quantity: 3 },
          ],
        },
        {
          name: 'ディオスシミターⅡ',
          materials: [
            { name: '砕竜の剛鉄拳', quantity: 3 },
            { name: '砕竜の靭尾', quantity: 2 },
            { name: '蒼火竜の剛翼', quantity: 2 },
            { name: '光る粘菌', quantity: 5 },
          ],
        },
      ],
    },
    {
      name: '龍骨系',
      weapons: [
        {
          name: '龍骨刀Ⅰ',
          materials: [
            { name: 'いびつな狂骨', quantity: 5 },
            { name: '強固な岩骨', quantity: 5 },
            { name: '太古の大骨', quantity: 5 },
            { name: 'サンゴの紅骨', quantity: 5 },
          ],
        },
        {
          name: '龍骨刀ⅠⅠ',
          materials: [
            { name: '竜骨【大】', quantity: 8 },
            { name: '頑丈な骨', quantity: 8 },
            { name: '上竜骨', quantity: 6 },
          ],
        },
        {
          name: '龍骨刀ⅠⅡ',
          materials: [
            { name: '古龍骨', quantity: 10 },
            { name: '竜玉', quantity: 1 },
            { name: 'いにしえの龍骨', quantity: 2 },
            { name: '荒々しい蛮骨', quantity: 4 },
          ],
        },
        {
          name: '龍封じの古刀Ⅰ',
          materials: [
            { name: '頑強な重骨', quantity: 6 },
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '剛竜骨', quantity: 3 },
            { name: '重竜骨', quantity: 4 },
          ],
        },
        {
          name: '龍封じの古刀Ⅱ',
          materials: [
            { name: '剛竜骨', quantity: 4 },
            { name: '太古龍骨', quantity: 6 },
            { name: '大竜玉', quantity: 1 },
            { name: '溶岩竜の特上ヒレ', quantity: 2 },
          ],
        },
        {
          name: '行雲流水ー和光ー',
          materials: [
            { name: '地啼竜の慈鱗', quantity: 6 },
            { name: '地啼竜の慈眼殻', quantity: 2 },
            { name: '地啼竜の慈爪', quantity: 4 },
            { name: '地啼竜の顕玉', quantity: 1 },
          ],
        },
        {
          name: 'マグダ・ファクルタスⅠ',
          materials: [
            { name: '熔山龍の熱鱗', quantity: 4 },
            { name: '熔山龍のマグマ', quantity: 4 },
            { name: '熔山龍の岩殻', quantity: 8 },
            { name: '熔山龍の宝玉', quantity: 1 },
          ],
        },
        {
          name: 'マグダ・ファクルタスⅡ',
          materials: [
            { name: '獄炎石', quantity: 3 },
            { name: '熔山龍の背甲', quantity: 2 },
            { name: '熔山龍の胸殻', quantity: 2 },
            { name: '冥灯龍の白殻', quantity: 4 },
          ],
        },
        {
          name: '熔山刀マグダファクル',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '龍脈の重竜骨', quantity: 6 },
            { name: '龍脈の剛竜骨', quantity: 5 },
            { name: '龍脈の古龍骨', quantity: 3 },
          ],
        },
        {
          name: 'ヒドラトルナリア',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '溟龍の特上皮', quantity: 5 },
            { name: '溟龍の剛爪', quantity: 4 },
            { name: '溟龍の幻曜ヒゲ', quantity: 2 },
          ],
        },
        {
          name: 'ネロトルナリア',
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
          name: '黒鋼の太刀Ⅰ',
          materials: [
            { name: '大地の結晶', quantity: 10 },
            { name: 'ライトクリスタル', quantity: 1 },
            { name: '深海の結晶', quantity: 10 },
            { name: '龍脈の結晶', quantity: 10 },
          ],
        },
        {
          name: '黒鋼の太刀Ⅱ',
          materials: [
            { name: '獄炎石', quantity: 1 },
            { name: '竜玉', quantity: 1 },
            { name: 'カブレライト鉱石', quantity: 10 },
            { name: 'ユニオン鉱石', quantity: 5 },
          ],
        },
        {
          name: '帝王刀【陽炎】',
          materials: [
            { name: '炎王龍の尖角', quantity: 5 },
            { name: '炎龍の尖爪', quantity: 2 },
            { name: '炎龍の宝玉', quantity: 1 },
            { name: '冥灯龍の幽鱗', quantity: 5 },
          ],
        },
        {
          name: '炎帝王刀【蜃気楼】',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '炎王龍の大たてがみ', quantity: 4 },
            { name: '炎王龍の剛角', quantity: 5 },
            { name: '炎龍の剛爪', quantity: 4 },
          ],
        },
        {
          name: 'ゼノ＝サイファ',
          materials: [
            { name: '冥灯龍の白殻', quantity: 6 },
            { name: '冥灯龍の幽爪', quantity: 4 },
            { name: '冥灯龍の幽玉', quantity: 1 },
            { name: '冥灯龍の尻尾', quantity: 2 },
          ],
        },
        {
          name: 'ゼノ＝サイファ改',
          materials: [
            { name: '赤龍の重殻', quantity: 8 },
            { name: '裂光の龍脈殻', quantity: 7 },
            { name: '赤龍の剛角', quantity: 3 },
            { name: '赤龍の剛爪', quantity: 6 },
          ],
        },
      ],
    },
    {
      name: '天下無双刀系',
      weapons: [
        {
          name: '天下無双刀',
          materials: [
            { name: 'ノヴァクリスタル', quantity: 1 },
            { name: '狩猟王のコイン', quantity: 5 },
            { name: 'ガマルコイン', quantity: 4 },
            { name: 'レウスコイン', quantity: 4 },
          ],
        },
        {
          name: '天上天下無双刀',
          materials: [
            { name: '竜玉', quantity: 2 },
            { name: '撃龍王のコイン', quantity: 5 },
            { name: '飛竜コイン', quantity: 4 },
            { name: '獣竜コイン', quantity: 4 },
          ],
        },
        {
          name: '天上天下天地無双刀',
          materials: [
            { name: 'バフバロコイン', quantity: 2 },
            { name: 'ナルガコイン', quantity: 2 },
            { name: 'ディノコイン', quantity: 2 },
            { name: '英雄王のコイン', quantity: 1 },
          ],
        },
      ],
    },
    {
      name: '恐暴竜系',
      weapons: [
        {
          name: 'クルーエルペイン',
          materials: [
            { name: '恐暴竜の黒鱗', quantity: 6 },
            { name: '恐暴竜の大牙', quantity: 3 },
            { name: '恐暴竜の鉤爪', quantity: 2 },
            { name: '恐暴竜の唾液', quantity: 2 },
          ],
        },
        {
          name: 'カラミティペイン',
          materials: [
            { name: '恐暴竜の大牙', quantity: 5 },
            { name: '恐暴竜の頭殻', quantity: 2 },
            { name: '恐暴竜の宝玉', quantity: 1 },
            { name: '古龍の血', quantity: 5 },
          ],
        },
        {
          name: '業刀ダインスレイヴ',
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
      name: '蒼星ノ太刀系',
      weapons: [
        {
          name: '蒼星ノ太刀',
          materials: [
            { name: '賊竜の爪', quantity: 4 },
            { name: '竜骨【中】', quantity: 4 },
            { name: 'ライトクリスタル', quantity: 1 },
            { name: '蒼星のかけら', quantity: 3 },
          ],
        },
        {
          name: '蒼星ノ太刀【舞龍】',
          materials: [
            { name: '火竜の紅玉', quantity: 1 },
            { name: 'ノヴァクリスタル', quantity: 1 },
            { name: '岩賊竜の尖爪', quantity: 4 },
            { name: '蒼星の宝玉', quantity: 2 },
          ],
        },
        {
          name: '真・蒼星ノ太刀【舞龍】',
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
      name: '炎妃龍系',
      weapons: [
        {
          name: 'エンプレスソード',
          materials: [
            { name: '炎妃龍のたてがみ', quantity: 3 },
            { name: '炎妃龍の宝玉', quantity: 1 },
            { name: '炎妃龍の尖角', quantity: 3 },
            { name: '炎妃龍の上鱗', quantity: 4 },
          ],
        },
        {
          name: 'エンプレスソード・冥灯',
          materials: [
            { name: '冥灯龍の幽角', quantity: 3 },
            { name: '冥灯龍の幽玉', quantity: 1 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の尻尾', quantity: 2 },
          ],
        },
        {
          name: 'エンプレスソード・滅尽',
          materials: [
            { name: '滅尽龍の宝玉', quantity: 1 },
            { name: '滅尽龍の大角', quantity: 3 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の翼', quantity: 3 },
          ],
        },
        {
          name: 'エンプレスソード・炎妃',
          materials: [
            { name: '炎王龍の尖角', quantity: 3 },
            { name: '爆鱗竜の宝玉', quantity: 1 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の尖角', quantity: 2 },
          ],
        },
        {
          name: '魂焔の龍刀・炎妃',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '炎妃龍の厚鱗', quantity: 4 },
            { name: '炎妃龍の剛角', quantity: 4 },
            { name: '炎妃龍の大たてがみ', quantity: 4 },
          ],
        },
        {
          name: '魂焔の龍刀・滅尽',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '殲滅の大剛角', quantity: 3 },
            { name: '無窮の新生殻', quantity: 3 },
            { name: '炎妃龍の厚鱗', quantity: 4 },
          ],
        },
        {
          name: '魂焔の龍刀・冥灯',
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
          name: '鬼薙刀',
          materials: [
            { name: '金獅子の重牙', quantity: 2 },
            { name: '金獅子の剛爪', quantity: 1 },
            { name: '金獅子の剛角', quantity: 1 },
            { name: '金獅子の黒荒毛', quantity: 2 },
          ],
        },
        {
          name: '大鬼薙刀',
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
          name: '鬼神薙刀【阿修羅】',
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
          name: '獄刀リュウコツ',
          materials: [
            { name: '獄狼竜の滅龍毛', quantity: 2 },
            { name: '獄狼竜の滅龍殻', quantity: 2 },
            { name: '獄狼竜の剛角', quantity: 1 },
            { name: '獄狼竜の剛爪', quantity: 1 },
          ],
        },
        {
          name: '狼牙刀【悪獄】',
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
      name: '鋼鉄ピッケル',
      weapons: [
        {
          name: '鋼鉄ピッケル【採掘狂】',
          materials: [
            { name: 'メランジェ鉱石', quantity: 5 },
            { name: 'エルトライト鉱石', quantity: 15 },
            { name: '砕竜の重黒曜甲', quantity: 5 },
            { name: 'ピッケルチケット', quantity: 2 },
          ],
        },
        {
          name: '鋼鉄ピッケル【採掘鬼】',
          materials: [
            { name: '黄昏の結晶', quantity: 3 },
            { name: '荒地の結晶', quantity: 5 },
            { name: '導きの龍骨【森林】', quantity: 1 },
            { name: 'ピッケルチケット', quantity: 1 },
          ],
        },
      ],
    },
    {
      name: '臨界ブラキ',
      weapons: [
        {
          name: '砕光の暁刀',
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
          name: '漆黒の爪',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '煌黒龍の凶爪', quantity: 3 },
            { name: '天を統べる角', quantity: 1 },
            { name: '煌黒龍の天鱗', quantity: 3 },
          ],
        },
        {
          name: '漆黒爪【終焉】',
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
          name: 'ミラドレバノン',
          materials: [
            { name: '黒龍の厚鱗', quantity: 3 },
            { name: '黒龍の重胸殻', quantity: 1 },
            { name: '黒龍の剛角', quantity: 1 },
            { name: '黒龍の邪眼', quantity: 1 },
          ],
        },
        {
          name: 'ミラザーゲスパノン',
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
          name: 'ギルドパレスサーベル',
          materials: [
            { name: 'グラシスメタル', quantity: 5 },
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '琥珀色の重牙', quantity: 2 },
            { name: '祭典チケット', quantity: 2 },
          ],
        },
        {
          name: '宮廷礼刀【将星】',
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

export default longSword
