import { WeaponType } from './materialsTypes'

const greatsword: WeaponType = {
  type: '操虫棍',
  derivations: [
    {
      name: '防衛隊系',
      weapons: [
        {
          name: '防衛隊両刃型操虫棍Ⅰ',
          materials: [{ name: '鉄鉱石', quantity: 1 }],
        },
        {
          name: '防衛隊両刃型操虫棍Ⅱ',
          materials: [{ name: '蛮顎竜の鱗', quantity: 1 }],
        },
        {
          name: '防衛隊両刃型操虫棍Ⅲ',
          materials: [{ name: '勇気の証', quantity: 1 }],
        },
        {
          name: '防衛隊両刃型操虫棍Ⅳ',
          materials: [{ name: '桜火竜の上鱗', quantity: 1 }],
        },
        {
          name: '防衛隊両刃型操虫棍Ⅴ',
          materials: [{ name: '不滅の龍鱗', quantity: 1 }],
        },
      ],
    },
    {
      name: '鉱石素材系',
      weapons: [
        {
          name: 'アイアンブレードⅠ',
          materials: [{ name: '鉄鉱石', quantity: 1 }],
        },
        {
          name: 'アイアンブレードⅡ',
          materials: [{ name: '鉄鉱石', quantity: 2 }],
        },
        {
          name: 'アイアンブレードⅢ',
          materials: [
            { name: '大地の結晶', quantity: 2 },
            { name: '鉄鉱石', quantity: 5 },
            { name: 'マカライト鉱石', quantity: 2 },
          ],
        },
        {
          name: 'スティールブレードⅠ',
          materials: [
            { name: 'マカライト鉱石', quantity: 5 },
            { name: '竜骨【中】', quantity: 2 },
            { name: 'ドラグライト鉱石', quantity: 2 },
          ],
        },
        {
          name: 'スティールブレードⅡ',
          materials: [
            { name: 'マカライト鉱石', quantity: 10 },
            { name: 'ドラグライト鉱石', quantity: 5 },
            { name: '上竜骨', quantity: 2 },
            { name: '深海の結晶', quantity: 2 },
          ],
        },
        {
          name: 'スティールブレードⅢ',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 5 },
            { name: 'カブレライト鉱石', quantity: 8 },
            { name: '龍脈の結晶', quantity: 2 },
          ],
        },
        {
          name: 'クロムブレードⅠ',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 10 },
            { name: 'カブレライト鉱石', quantity: 5 },
            { name: '龍脈の結晶', quantity: 3 },
            { name: 'ユニオン鉱石', quantity: 8 },
          ],
        },
        {
          name: 'クロムブレードⅡ',
          materials: [
            { name: '古龍の血', quantity: 2 },
            { name: '獄炎石', quantity: 1 },
            { name: 'カブレライト鉱石', quantity: 20 },
            { name: 'ユニオン鉱石', quantity: 13 },
          ],
        },
        {
          name: 'クロムトライデントⅠ',
          materials: [
            { name: 'カブレライト鉱石', quantity: 4 },
            { name: '霊脈の結晶', quantity: 2 },
            { name: 'グラシスメタル', quantity: 1 },
            { name: 'エルトライト鉱石', quantity: 2 },
          ],
        },
        {
          name: 'クロムトライデントⅡ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 2 },
            { name: 'エルトライト鉱石', quantity: 4 },
            { name: '重竜骨', quantity: 3 },
            { name: 'デプスライト鉱石', quantity: 2 },
          ],
        },
        {
          name: 'クロムトライデントⅢ',
          materials: [
            { name: '古龍の浄血', quantity: 3 },
            { name: 'メランジェ鉱石', quantity: 3 },
            { name: 'エルトライト鉱石', quantity: 6 },
            { name: 'ピュアクリスタル', quantity: 1 },
          ],
        },
        {
          name: '王棍イナズマ改',
          materials: [
            { name: '雷狼竜の雷電毛', quantity: 4 },
            { name: '雷狼竜の剛角', quantity: 3 },
            { name: '雷狼竜の天玉', quantity: 5 },
            { name: '超電雷光虫', quantity: 1 },
          ],
        },
        {
          name: '王棍イナズマ',
          materials: [
            { name: '雷電袋', quantity: 3 },
            { name: '雷狼竜の雷電殻', quantity: 2 },
            { name: '雷狼竜の重殻', quantity: 5 },
            { name: '雷狼竜の剛爪', quantity: 3 },
          ],
        },
        {
          name: '王牙棍【別雷】',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '雷狼竜の雷電殻', quantity: 5 },
            { name: '雷狼竜の剛角', quantity: 2 },
            { name: '霊脈の剛竜骨', quantity: 5 },
          ],
        },
        {
          name: 'ネルガルハッシュ',
          materials: [
            { name: '滅尽龍の再生殻', quantity: 4 },
            { name: '滅尽龍の尻尾', quantity: 2 },
            { name: '滅尽龍の堅殻', quantity: 2 },
            { name: '滅尽龍の尖爪', quantity: 3 },
          ],
        },
        {
          name: '撲滅の導灯',
          materials: [
            { name: '滅尽龍の宝玉', quantity: 1 },
            { name: '滅尽龍の尖爪', quantity: 5 },
            { name: '滅尽龍の大角', quantity: 5 },
            { name: '冥灯龍の幽角', quantity: 2 },
          ],
        },
        {
          name: '撲滅の導灯【闇】',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '殲滅の大剛角', quantity: 3 },
            { name: '無窮の新生殻', quantity: 5 },
            { name: '滅尽龍の剛爪', quantity: 4 },
          ],
        },
        {
          name: 'フレイムブレードⅠ',
          materials: [
            { name: '火竜の骨髄', quantity: 1 },
            { name: '火竜の翼膜', quantity: 2 },
            { name: '火炎袋', quantity: 2 },
            { name: '火竜の鱗', quantity: 1 },
          ],
        },
        {
          name: 'フレイムブレードⅡ',
          materials: [
            { name: '火竜の尻尾', quantity: 2 },
            { name: '火竜の逆鱗', quantity: 1 },
            { name: '火竜の鱗', quantity: 6 },
            { name: '爆炎袋', quantity: 3 },
          ],
        },
        {
          name: '火竜棍【炎舞】',
          materials: [
            { name: '火竜の紅玉', quantity: 1 },
            { name: '蒼火竜の上鱗', quantity: 6 },
            { name: '蒼火竜の堅殻', quantity: 4 },
            { name: '蒼火竜の翼', quantity: 3 },
          ],
        },
        {
          name: '火竜棍【炎舞】改',
          materials: [
            { name: '火竜の厚鱗', quantity: 6 },
            { name: '火竜の剛翼', quantity: 3 },
            { name: '火竜の重殻', quantity: 4 },
            { name: '火竜の天鱗', quantity: 1 },
          ],
        },
        {
          name: '蒼炎棍【飛翔】',
          materials: [
            { name: '火竜の天鱗', quantity: 1 },
            { name: '蒼火竜の剛翼', quantity: 3 },
            { name: '蒼火竜の厚鱗', quantity: 6 },
            { name: '蒼火竜の重殻', quantity: 4 },
          ],
        },
        {
          name: '繚乱の輝竜戟',
          materials: [
            { name: '銀火竜の重殻', quantity: 4 },
            { name: '銀火竜の厚鱗', quantity: 8 },
            { name: '火竜の煌液', quantity: 2 },
            { name: '銀火竜の靭尾', quantity: 3 },
          ],
        },
        {
          name: 'クルルブレードⅠ',
          materials: [
            { name: '掻鳥の鱗', quantity: 3 },
            { name: '掻鳥の皮', quantity: 2 },
            { name: '掻鳥のクチバシ', quantity: 1 },
          ],
        },
        {
          name: 'クルルブレードⅡ',
          materials: [
            { name: '強固な岩骨', quantity: 3 },
            { name: '掻鳥の飾り羽', quantity: 2 },
            { name: '掻鳥のクチバシ', quantity: 2 },
            { name: '骨鎚竜の鱗', quantity: 3 },
          ],
        },
        {
          name: 'クルルブレードⅢ',
          materials: [
            { name: 'いびつな狂骨', quantity: 3 },
            { name: '掻鳥の飾り羽', quantity: 4 },
            { name: '掻鳥のクチバシ', quantity: 2 },
            { name: '惨爪竜の爪', quantity: 2 },
          ],
        },
        {
          name: 'アルノーラスⅠ',
          materials: [
            { name: '掻鳥の上鱗', quantity: 6 },
            { name: '掻鳥の上皮', quantity: 4 },
            { name: '掻鳥の大クチバシ', quantity: 3 },
          ],
        },
        {
          name: 'アルノーラスⅡ',
          materials: [
            { name: '掻鳥の大飾り羽', quantity: 3 },
            { name: '掻鳥の大クチバシ', quantity: 4 },
            { name: '荒々しい蛮骨', quantity: 3 },
            { name: '惨爪竜の尖爪', quantity: 2 },
          ],
        },
        {
          name: 'アルノーラスⅢ',
          materials: [
            { name: '掻鳥の大飾り羽', quantity: 4 },
            { name: '掻鳥の大クチバシ', quantity: 5 },
            { name: '鳥竜玉', quantity: 1 },
            { name: '滅尽龍の尖爪', quantity: 2 },
          ],
        },
        {
          name: 'ネスルヤティールⅠ',
          materials: [
            { name: '頑強な重骨', quantity: 2 },
            { name: '掻鳥の巨大クチバシ', quantity: 1 },
            { name: '掻鳥の厚皮', quantity: 2 },
            { name: '掻鳥の厚鱗', quantity: 3 },
          ],
        },
        {
          name: 'ネスルヤティールⅡ',
          materials: [
            { name: '迅竜の重牙', quantity: 2 },
            { name: '重竜骨', quantity: 3 },
            { name: '掻鳥の巨大クチバシ', quantity: 2 },
            { name: '掻鳥の特大飾り羽', quantity: 3 },
          ],
        },
        {
          name: 'ディオスロッド',
          materials: [
            { name: 'メランジェ鉱石', quantity: 3 },
            { name: '砕竜の重殻', quantity: 4 },
            { name: '砕竜の重頭殻', quantity: 2 },
            { name: '光る粘菌', quantity: 3 },
          ],
        },
        {
          name: '爆棍エレクトロッド',
          materials: [
            { name: '砕竜の剛鉄拳', quantity: 3 },
            { name: '砕竜の靭尾', quantity: 2 },
            { name: '蒼火竜の剛翼', quantity: 2 },
            { name: '光る粘菌', quantity: 5 },
          ],
        },
        {
          name: 'イルミナルブレードⅠ',
          materials: [
            { name: '眩鳥の鱗', quantity: 3 },
            { name: '眩鳥の爪', quantity: 2 },
            { name: '眩鳥の発光膜', quantity: 1 },
          ],
        },
        {
          name: 'イルミナルブレードⅡ',
          materials: [
            { name: 'とがった爪', quantity: 3 },
            { name: '眩鳥の爪', quantity: 3 },
            { name: '眩鳥の発光膜', quantity: 2 },
            { name: '風漂竜の尾膜', quantity: 2 },
          ],
        },
        {
          name: 'デステリオバーラⅠ',
          materials: [
            { name: 'ライトクリスタル', quantity: 1 },
            { name: '眩鳥の上鱗', quantity: 5 },
            { name: '眩鳥の尖爪', quantity: 3 },
            { name: '眩鳥の閃光膜', quantity: 1 },
          ],
        },
        {
          name: 'デステリオバーラⅡ',
          materials: [
            { name: '眩鳥の尖爪', quantity: 4 },
            { name: '眩鳥の閃光膜', quantity: 2 },
            { name: '鋭利な爪', quantity: 5 },
            { name: '風漂竜の翼', quantity: 2 },
          ],
        },
        {
          name: 'デステリオバーラⅢ',
          materials: [
            { name: '鳥竜玉', quantity: 1 },
            { name: '眩鳥の尖爪', quantity: 5 },
            { name: '眩鳥の閃光膜', quantity: 3 },
            { name: '鋼龍の翼', quantity: 2 },
          ],
        },
        {
          name: 'ダイヴ＝デステリオⅠ',
          materials: [
            { name: '強靭な爪', quantity: 2 },
            { name: '眩鳥の輝光膜', quantity: 1 },
            { name: '眩鳥の剛爪', quantity: 1 },
            { name: '眩鳥の厚鱗', quantity: 2 },
          ],
        },
        {
          name: 'ダイヴ＝デステリオⅡ',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '眩鳥の輝光膜', quantity: 1 },
            { name: '眩鳥の剛爪', quantity: 2 },
            { name: '風漂竜の剛爪', quantity: 2 },
          ],
        },
        {
          name: 'ヒドゥンケインⅠ',
          materials: [
            { name: 'メランジェ鉱石', quantity: 1 },
            { name: '迅竜の厚鱗', quantity: 3 },
            { name: '迅竜の重牙', quantity: 2 },
            { name: '迅竜の重尾棘', quantity: 2 },
          ],
        },
        {
          name: 'ヒドゥンケインⅡ',
          materials: [
            { name: '迅竜の天鱗', quantity: 1 },
            { name: '迅竜の靭尾', quantity: 2 },
            { name: '迅竜の剛刃翼', quantity: 3 },
            { name: '雷顎竜の重牙', quantity: 2 },
          ],
        },
        {
          name: 'フロストブレードⅠ',
          materials: [
            { name: '深海の結晶', quantity: 3 },
            { name: '風漂竜の鱗', quantity: 4 },
            { name: '風漂竜の爪', quantity: 3 },
            { name: '氷結袋', quantity: 2 },
          ],
        },
        {
          name: 'フロストブレードⅡ',
          materials: [
            { name: '風漂竜の翼膜', quantity: 3 },
            { name: 'シャムオスの上鱗', quantity: 5 },
            { name: '風漂竜の尾膜', quantity: 2 },
            { name: 'カブレライト鉱石', quantity: 5 },
          ],
        },
        {
          name: 'フリーズゲイルⅠ',
          materials: [
            { name: 'ユニオン鉱石', quantity: 5 },
            { name: '風漂竜の上鱗', quantity: 5 },
            { name: '凍結袋', quantity: 3 },
            { name: '風漂竜の翼', quantity: 3 },
          ],
        },
        {
          name: 'フリーズゲイルⅡ',
          materials: [
            { name: '古龍の血', quantity: 3 },
            { name: '竜玉', quantity: 1 },
            { name: '風漂竜の上皮', quantity: 3 },
            { name: '風漂竜の尖爪', quantity: 5 },
          ],
        },
        {
          name: 'フリーズゲイルⅢ',
          materials: [
            { name: 'グラシスメタル', quantity: 2 },
            { name: 'エルトライト鉱石', quantity: 4 },
            { name: 'ウルグの厚毛皮', quantity: 3 },
            { name: '瞬間凍結袋', quantity: 1 },
          ],
        },
        {
          name: 'アンバーハーケン',
          materials: [
            { name: '凍てついた氷骨', quantity: 3 },
            { name: '瞬間凍結袋', quantity: 4 },
            { name: '氷牙竜の剛爪', quantity: 3 },
            { name: '氷牙竜の重殻', quantity: 4 },
          ],
        },
        {
          name: 'アンバーハーケン改',
          materials: [
            { name: '琥珀色の重牙', quantity: 3 },
            { name: '漆黒の氷刃爪', quantity: 2 },
            { name: '大竜玉', quantity: 1 },
            { name: '氷牙竜の重棘', quantity: 3 },
          ],
        },
        {
          name: 'フェンリルストーム',
          materials: [
            { name: '琥珀色の重牙', quantity: 2 },
            { name: '太古龍骨', quantity: 5 },
            { name: '氷牙竜の剛爪', quantity: 4 },
            { name: '冰龍の剛爪', quantity: 2 },
          ],
        },
        {
          name: 'フェンリルフローズ',
          materials: [
            { name: '大竜玉', quantity: 1 },
            { name: '氷牙竜チケット', quantity: 3 },
            { name: '白銀の氷刃牙', quantity: 3 },
            { name: '氷河を砕く剣爪', quantity: 2 },
          ],
        },
        {
          name: 'ブルームブレードⅠ',
          materials: [
            { name: '毒袋', quantity: 1 },
            { name: '毒妖鳥の鱗', quantity: 3 },
            { name: '毒妖鳥の羽根', quantity: 2 },
          ],
        },
        {
          name: 'ブルームブレードⅡ',
          materials: [
            { name: '毒妖鳥の尻尾', quantity: 1 },
            { name: '毒妖鳥の喉袋', quantity: 2 },
            { name: '深海の結晶', quantity: 3 },
            { name: '毒妖鳥の甲殻', quantity: 3 },
          ],
        },
        {
          name: 'ブルームブレードⅢ',
          materials: [
            { name: '毒袋', quantity: 2 },
            { name: '毒妖鳥の喉袋', quantity: 2 },
            { name: '毒妖鳥の羽根', quantity: 4 },
            { name: '上竜骨', quantity: 2 },
          ],
        },
        {
          name: 'ダチュラブレードⅠ',
          materials: [
            { name: '毒妖鳥の翼', quantity: 2 },
            { name: '毒妖鳥の上鱗', quantity: 3 },
            { name: '猛毒袋', quantity: 2 },
            { name: '上質な堅骨', quantity: 3 },
          ],
        },
        {
          name: 'ダチュラブレードⅡ',
          materials: [
            { name: '堅竜骨', quantity: 3 },
            { name: '毒妖鳥の堅殻', quantity: 5 },
            { name: '毒妖鳥の翼', quantity: 3 },
            { name: '猛毒袋', quantity: 2 },
          ],
        },
        {
          name: 'ダチュラブレードⅢ',
          materials: [
            { name: '鳥竜玉', quantity: 1 },
            { name: '毒妖鳥の翼', quantity: 6 },
            { name: '毒妖鳥の大喉袋', quantity: 4 },
            { name: '屍套龍の翼', quantity: 2 },
          ],
        },
        {
          name: 'ダチュラストームⅠ',
          materials: [
            { name: '強竜骨', quantity: 2 },
            { name: '劇烈毒袋', quantity: 2 },
            { name: '毒妖鳥の剛翼', quantity: 2 },
            { name: '毒妖鳥の厚鱗', quantity: 3 },
          ],
        },
        {
          name: 'ダチュラストームⅡ',
          materials: [
            { name: '重竜骨', quantity: 3 },
            { name: '毒妖鳥の靭尾', quantity: 1 },
            { name: '毒妖鳥の特大喉袋', quantity: 1 },
            { name: '雌火竜の秘棘', quantity: 2 },
          ],
        },
        {
          name: 'ニュクスブレードⅠ',
          materials: [
            { name: 'ゴム質の重殻', quantity: 2 },
            { name: '卒倒昏睡袋', quantity: 1 },
            { name: '浮空竜の剛翼', quantity: 2 },
            { name: '浮眠竜の厚毛皮', quantity: 3 },
          ],
        },
        {
          name: 'ニュクスブレードⅡ',
          materials: [
            { name: '黒角竜の重甲', quantity: 2 },
            { name: '大竜玉', quantity: 1 },
            { name: '浮空竜の剛翼', quantity: 3 },
            { name: '浮眠竜の厚鱗', quantity: 5 },
          ],
        },
        {
          name: 'ガマルケインⅠ',
          materials: [
            { name: '岩賊竜の上皮', quantity: 4 },
            { name: '岩賊竜の上鱗', quantity: 6 },
            { name: '岩賊竜の尖爪', quantity: 4 },
          ],
        },
        {
          name: 'ガマルケインⅡ',
          materials: [
            { name: '獄炎の龍鱗', quantity: 4 },
            { name: '竜玉', quantity: 1 },
            { name: '岩賊竜の顎', quantity: 4 },
            { name: '岩賊竜の尻尾', quantity: 3 },
          ],
        },
        {
          name: 'ガマルウィザードⅠ',
          materials: [
            { name: 'ガストドンの重殻', quantity: 2 },
            { name: '岩賊竜の剛爪', quantity: 2 },
            { name: '岩賊竜の厚皮', quantity: 2 },
            { name: '岩賊竜の厚鱗', quantity: 3 },
          ],
        },
        {
          name: 'ガマルウィザードⅡ',
          materials: [
            { name: '岩賊竜の大顎', quantity: 2 },
            { name: '岩賊竜の靭尾', quantity: 1 },
            { name: '砕竜の重黒曜甲', quantity: 2 },
            { name: '重竜骨', quantity: 5 },
          ],
        },
        {
          name: '灼炎のテウザー',
          materials: [
            { name: 'エルトライト鉱石', quantity: 6 },
            { name: '斬竜の厚鱗', quantity: 4 },
            { name: '斬竜の重牙', quantity: 2 },
            { name: '赤熱した溶炉嚢', quantity: 2 },
          ],
        },
        {
          name: '灼炎のテウザー改',
          materials: [
            { name: '兇爪竜の重牙', quantity: 2 },
            { name: '斬竜の獄炎状殻', quantity: 3 },
            { name: '斬竜の天鱗', quantity: 1 },
            { name: '硫斬竜の断剣尾', quantity: 2 },
          ],
        },
        {
          name: '斬竜旋ヘルダイト',
          materials: [
            { name: '古龍の浄血', quantity: 3 },
            { name: '斬竜の獄炎状殻', quantity: 4 },
            { name: '斬竜の重牙', quantity: 5 },
            { name: '炎龍の剛爪', quantity: 2 },
          ],
        },
      ],
    },
    {
      name: '骨素材系',
      weapons: [
        {
          name: 'ボーンロッドⅠ',
          materials: [{ name: '竜骨【小】', quantity: 1 }],
        },
        {
          name: 'ボーンロッドⅡ',
          materials: [{ name: '竜骨【小】', quantity: 2 }],
        },
        {
          name: 'ボーンロッドⅢ',
          materials: [
            { name: '太古の大骨', quantity: 1 },
            { name: '竜骨【中】', quantity: 2 },
          ],
        },
        {
          name: 'ハードボーンロッドⅠ',
          materials: [
            { name: '強固な岩骨', quantity: 2 },
            { name: '竜骨【大】', quantity: 1 },
            { name: '竜骨【中】', quantity: 5 },
          ],
        },
        {
          name: 'ハードボーンロッドⅡ',
          materials: [
            { name: '竜骨【大】', quantity: 1 },
            { name: '頑丈な骨', quantity: 4 },
            { name: '上竜骨', quantity: 2 },
          ],
        },
        {
          name: 'ハードボーンロッドⅢ',
          materials: [
            { name: '上竜骨', quantity: 2 },
            { name: '尖竜骨', quantity: 2 },
            { name: '上質な堅骨', quantity: 2 },
          ],
        },
        {
          name: 'エアリアルロッドⅠ',
          materials: [
            { name: '堅竜骨', quantity: 4 },
            { name: '尖竜骨', quantity: 6 },
            { name: '上質な堅骨', quantity: 10 },
          ],
        },
        {
          name: 'エアリアルロッドⅡ',
          materials: [
            { name: '堅竜骨', quantity: 6 },
            { name: '古龍骨', quantity: 4 },
            { name: '上質な堅骨', quantity: 20 },
            { name: 'いにしえの龍骨', quantity: 1 },
          ],
        },
        {
          name: 'エアリアルウィザードⅠ',
          materials: [
            { name: '堅竜骨', quantity: 4 },
            { name: '上質な堅骨', quantity: 4 },
            { name: '頑強な重骨', quantity: 2 },
            { name: '凍てついた氷骨', quantity: 1 },
          ],
        },
        {
          name: 'エアリアルウィザードⅡ',
          materials: [
            { name: '頑強な重骨', quantity: 4 },
            { name: 'モンスターの特濃', quantity: 2 },
            { name: '剛竜骨', quantity: 2 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: 'エアリアルウィザードⅢ',
          materials: [
            { name: '頑強な重骨', quantity: 6 },
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '剛竜骨', quantity: 4 },
            { name: '太古龍骨', quantity: 3 },
          ],
        },
        {
          name: 'アイスセプター',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '氷晶の厚龍鱗', quantity: 4 },
            { name: '冰龍の剛爪', quantity: 2 },
            { name: '冰龍の靭尾', quantity: 2 },
          ],
        },
        {
          name: '氷賢フィロス',
          materials: [
            { name: '冰龍の冠角', quantity: 4 },
            { name: '冰龍の剛爪', quantity: 4 },
            { name: '冰龍の零玉', quantity: 1 },
            { name: '地啼竜の慈爪', quantity: 3 },
          ],
        },
        {
          name: 'ハザクエントマⅠ',
          materials: [
            { name: '死屍の龍鱗', quantity: 6 },
            { name: '屍套龍の尖爪', quantity: 4 },
            { name: '屍套龍の鋭牙', quantity: 5 },
            { name: '屍套龍の被膜', quantity: 4 },
          ],
        },
        {
          name: 'ハザクエントマⅡ',
          materials: [
            { name: '冥灯龍の幽幕', quantity: 3 },
            { name: '屍套龍の尖爪', quantity: 6 },
            { name: '屍套龍の尻尾', quantity: 2 },
            { name: '屍套龍の宝玉', quantity: 1 },
          ],
        },
        {
          name: '屍杖ヴァルエントマ',
          materials: [
            { name: '屍套龍の剛爪', quantity: 3 },
            { name: '闇を食む牙', quantity: 2 },
            { name: '死屍の厚龍鱗', quantity: 3 },
            { name: '死屍を紡いだ被膜', quantity: 5 },
          ],
        },
        {
          name: 'ヒュドロスアーケーン',
          materials: [
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '溟龍の特上皮', quantity: 5 },
            { name: '溟龍の剛爪', quantity: 4 },
            { name: '溟龍の幻曜ヒゲ', quantity: 2 },
          ],
        },
        {
          name: 'フラムエルカラモス',
          materials: [
            { name: '蛮顎竜の鱗', quantity: 3 },
            { name: '蛮顎竜の牙', quantity: 3 },
            { name: '蛮顎竜の毛皮', quantity: 2 },
            { name: '火炎袋', quantity: 2 },
          ],
        },
        {
          name: 'フラムエルカラモス改',
          materials: [
            { name: '蛮顎竜の逆鱗', quantity: 1 },
            { name: '爆炎袋', quantity: 3 },
            { name: '蛮顎竜の上鱗', quantity: 5 },
            { name: '蛮顎竜の鋭牙', quantity: 4 },
          ],
        },
        {
          name: '蛮顎棍フラムカラモス',
          materials: [
            { name: '蛮顎竜の上毛皮', quantity: 4 },
            { name: '蛮顎竜の大鼻骨', quantity: 2 },
            { name: '蛮顎竜の宝玉', quantity: 1 },
            { name: '屍套龍の鋭牙', quantity: 5 },
          ],
        },
        {
          name: '蛮顎棍フラムカラモス改',
          materials: [
            { name: 'エルトライト鉱石', quantity: 3 },
            { name: '蛮顎竜の重牙', quantity: 1 },
            { name: '蛮顎竜の厚鱗', quantity: 2 },
            { name: '業炎袋', quantity: 1 },
          ],
        },
        {
          name: '蛮炎棍ロギンカラモス',
          materials: [
            { name: '蛮顎竜の重鼻骨', quantity: 2 },
            { name: '蒼火竜の重殻', quantity: 2 },
            { name: '蛮顎竜の厚毛皮', quantity: 3 },
            { name: '蛮顎竜の靭尾', quantity: 1 },
          ],
        },
        {
          name: '雷顎棍ドネルカラモス',
          materials: [
            { name: 'メランジェ鉱石', quantity: 2 },
            { name: '剛竜骨', quantity: 3 },
            { name: '雷顎竜の厚鱗', quantity: 2 },
            { name: '雷顎竜の重牙', quantity: 1 },
          ],
        },
        {
          name: '雷顎棍ドネルカラモス改',
          materials: [
            { name: '雷顎竜の厚毛皮', quantity: 3 },
            { name: '雷顎竜の重鼻骨', quantity: 2 },
            { name: '雷顎竜の靭尾', quantity: 1 },
            { name: '雷電袋', quantity: 3 },
          ],
        },
        {
          name: '蛮雷棍カーリカラモス',
          materials: [
            { name: '雷顎竜の厚毛皮', quantity: 5 },
            { name: '雷顎竜の重牙', quantity: 3 },
            { name: '雷顎竜の天鱗', quantity: 1 },
            { name: '幻獣の銀たてがみ', quantity: 2 },
          ],
        },
        {
          name: 'アクアロッドⅠ',
          materials: [
            { name: '強固な岩骨', quantity: 2 },
            { name: '泥魚竜の鱗', quantity: 3 },
            { name: '泥魚竜の甲殻', quantity: 1 },
            { name: '水袋', quantity: 1 },
          ],
        },
        {
          name: 'アクアロッドⅡ',
          materials: [
            { name: '咬魚の皮', quantity: 3 },
            { name: '泥魚竜の牙', quantity: 2 },
            { name: '泥魚竜のヒレ', quantity: 3 },
            { name: '頑丈な骨', quantity: 5 },
          ],
        },
        {
          name: 'アクアロッドⅢ',
          materials: [
            { name: '咬魚のヒゲ', quantity: 3 },
            { name: '泥魚竜の牙', quantity: 4 },
            { name: '上竜骨', quantity: 2 },
            { name: 'サンゴの紅骨', quantity: 2 },
          ],
        },
        {
          name: 'ウォーターグレイブⅠ',
          materials: [
            { name: '泥魚竜の上鱗', quantity: 3 },
            { name: '泥魚竜の堅殻', quantity: 2 },
            { name: '咬魚の上皮', quantity: 5 },
            { name: '上質な堅骨', quantity: 5 },
          ],
        },
        {
          name: 'ウォーターグレイブⅡ',
          materials: [
            { name: '堅竜骨', quantity: 3 },
            { name: '泥魚竜の上ヒレ', quantity: 4 },
            { name: '大水袋', quantity: 3 },
            { name: '咬魚の大ヒゲ', quantity: 3 },
          ],
        },
        {
          name: 'ウォーターグレイブⅢ',
          materials: [
            { name: '古龍骨', quantity: 4 },
            { name: '竜玉', quantity: 1 },
            { name: '泥魚竜の上ヒレ', quantity: 6 },
            { name: '泥魚竜の鋭牙', quantity: 5 },
          ],
        },
        {
          name: 'ラグーナグレイブⅠ',
          materials: [
            { name: '水妖鳥の剛翼', quantity: 2 },
            { name: '水妖鳥の厚鱗', quantity: 3 },
            { name: 'デプスライト鉱石', quantity: 2 },
            { name: '特大水袋', quantity: 2 },
          ],
        },
        {
          name: 'ラグーナグレイブⅡ',
          materials: [
            { name: '剛竜骨', quantity: 3 },
            { name: '水妖鳥の靭尾', quantity: 1 },
            { name: '水妖鳥の特大喉袋', quantity: 1 },
            { name: '硫斬竜の重牙', quantity: 2 },
          ],
        },
        {
          name: 'レックスロッドⅠ',
          materials: [
            { name: '頑強な重骨', quantity: 5 },
            { name: '轟竜の厚鱗', quantity: 4 },
            { name: '轟竜の剛爪', quantity: 3 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: 'レックスロッドⅡ',
          materials: [
            { name: '轟竜の重牙', quantity: 3 },
            { name: '轟竜の靭尾', quantity: 2 },
            { name: '轟竜の天鱗', quantity: 1 },
            { name: '堅牢な黒巻き角', quantity: 1 },
          ],
        },
        {
          name: 'カーサスロッド',
          materials: [
            { name: '大竜玉', quantity: 1 },
            { name: '黒轟竜の厚鱗', quantity: 5 },
            { name: '黒轟竜の重牙', quantity: 2 },
            { name: '黒轟竜の剛爪', quantity: 3 },
          ],
        },
        {
          name: 'ブロスロッドⅠ',
          materials: [
            { name: '角竜の牙', quantity: 2 },
            { name: 'ねじれた角', quantity: 1 },
            { name: '角竜の甲殻', quantity: 4 },
            { name: '上竜骨', quantity: 3 },
          ],
        },
        {
          name: 'ブロスロッドⅡ',
          materials: [
            { name: '角竜の背甲', quantity: 4 },
            { name: '角竜の尾甲', quantity: 2 },
            { name: '尖竜骨', quantity: 4 },
            { name: '角竜の骨髄', quantity: 1 },
          ],
        },
        {
          name: 'タイラントグレイブⅠ',
          materials: [
            { name: '角竜の延髄', quantity: 1 },
            { name: '角竜の堅殻', quantity: 6 },
            { name: '角竜の堅甲', quantity: 5 },
            { name: '上質なねじれた角', quantity: 3 },
          ],
        },
        {
          name: 'タイラントグレイブⅡ',
          materials: [
            { name: '竜玉', quantity: 1 },
            { name: '黒角竜の堅殻', quantity: 4 },
            { name: '上質な黒巻き角', quantity: 3 },
            { name: '滅尽龍の大角', quantity: 2 },
          ],
        },
        {
          name: 'タイラントグレイブⅢ',
          materials: [
            { name: '角竜の重殻', quantity: 6 },
            { name: '角竜の重甲', quantity: 5 },
            { name: '堅牢なねじれた角', quantity: 3 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: 'タナトスグレイブ',
          materials: [
            { name: '堅牢な黒巻き角', quantity: 3 },
            { name: '剛竜骨', quantity: 3 },
            { name: '黒角竜の重殻', quantity: 3 },
            { name: '大竜玉', quantity: 1 },
          ],
        },
        {
          name: '硫鉄のスピラン',
          materials: [
            { name: '削られた硫晶片', quantity: 4 },
            { name: '硫斬竜の剣山状殻', quantity: 2 },
            { name: '硫斬竜の重牙', quantity: 2 },
            { name: '硫斬竜の断剣尾', quantity: 2 },
          ],
        },
        {
          name: '硫斬旋フォーニャ',
          materials: [
            { name: '斬竜の天鱗', quantity: 1 },
            { name: '硫斬竜の剣山状殻', quantity: 3 },
            { name: '硫斬竜の重牙', quantity: 4 },
            { name: '屍套龍の剛爪', quantity: 2 },
          ],
        },
        {
          name: 'ブラングレイヴⅠ',
          materials: [
            { name: '凍てついた氷骨', quantity: 1 },
            { name: '凍魚竜の厚鱗', quantity: 3 },
            { name: '凍魚竜の剛角', quantity: 1 },
            { name: '凍魚竜の特上ヒレ', quantity: 1 },
          ],
        },
        {
          name: 'ブラングレイヴⅡ',
          materials: [
            { name: '凍魚竜の特上ヒレ', quantity: 2 },
            { name: '瞬間凍結袋', quantity: 2 },
            { name: '大竜玉', quantity: 1 },
            { name: '氷霜をまとう皮', quantity: 2 },
          ],
        },
        {
          name: 'パルサーロッドⅠ',
          materials: [
            { name: '飛雷竜の爪', quantity: 1 },
            { name: '飛雷竜の毛皮', quantity: 2 },
            { name: '飛雷竜の鱗', quantity: 3 },
          ],
        },
        {
          name: 'パルサーロッドⅡ',
          materials: [
            { name: '深海の結晶', quantity: 3 },
            { name: '電気袋', quantity: 2 },
            { name: '飛雷竜の爪', quantity: 3 },
            { name: '飛雷竜の電極針', quantity: 2 },
          ],
        },
        {
          name: 'パルサーロッドⅢ',
          materials: [
            { name: 'いびつな狂骨', quantity: 2 },
            { name: '上竜骨', quantity: 2 },
            { name: '飛雷竜の電極針', quantity: 2 },
            { name: '飛雷竜の皮膜', quantity: 2 },
          ],
        },
        {
          name: 'カガチノハシラⅠ',
          materials: [
            { name: '飛雷竜の上毛皮', quantity: 3 },
            { name: '飛雷竜の上鱗', quantity: 4 },
            { name: '飛雷竜の尖爪', quantity: 3 },
            { name: '龍脈の結晶', quantity: 3 },
          ],
        },
        {
          name: 'カガチノハシラⅡ',
          materials: [
            { name: '上質なねじれた角', quantity: 2 },
            { name: '飛雷竜の雷極針', quantity: 2 },
            { name: '飛雷竜の尖爪', quantity: 4 },
            { name: '電撃袋', quantity: 3 },
          ],
        },
        {
          name: 'カガチノハシラⅢ',
          materials: [
            { name: '竜玉', quantity: 1 },
            { name: '飛雷竜の雷極針', quantity: 4 },
            { name: '飛雷竜の尖爪', quantity: 6 },
            { name: '滅尽龍の尖爪', quantity: 2 },
          ],
        },
        {
          name: 'カガチノイカリⅠ',
          materials: [
            { name: '飛雷竜の厚毛皮', quantity: 2 },
            { name: '飛雷竜の剛爪', quantity: 1 },
            { name: '飛雷竜の厚鱗', quantity: 2 },
            { name: '雷電袋', quantity: 1 },
          ],
        },
        {
          name: 'カガチノイカリⅡ',
          materials: [
            { name: '惨爪竜の強硬筋', quantity: 2 },
            { name: '飛雷竜の剛爪', quantity: 2 },
            { name: '飛雷竜の厚皮膜', quantity: 2 },
            { name: '飛雷竜の雷光針', quantity: 2 },
          ],
        },
        {
          name: 'ベニカガチノマヒバシラⅠ',
          materials: [
            { name: '濃縮麻痺袋', quantity: 1 },
            { name: '飛毒竜の厚毛皮', quantity: 2 },
            { name: '飛毒竜の剛爪', quantity: 1 },
            { name: '飛毒竜の厚鱗', quantity: 2 },
          ],
        },
        {
          name: 'ベニカガチノマヒバシラⅡ',
          materials: [
            { name: '飛毒竜の剛爪', quantity: 2 },
            { name: '飛毒竜の厚皮膜', quantity: 2 },
            { name: '飛毒竜の猛毒針', quantity: 2 },
            { name: '硫斬竜の剣山状殻', quantity: 2 },
          ],
        },
        {
          name: 'ガロンロッドⅠ',
          materials: [
            { name: '惨爪竜の鱗', quantity: 4 },
            { name: '惨爪竜の爪', quantity: 2 },
            { name: '惨爪竜の牙', quantity: 2 },
          ],
        },
        {
          name: 'ガロンロッドⅡ',
          materials: [
            { name: '惨爪竜の爪', quantity: 2 },
            { name: '惨爪竜の逆鱗', quantity: 1 },
            { name: '惨爪竜の尻尾', quantity: 2 },
            { name: '上質な堅骨', quantity: 5 },
          ],
        },
        {
          name: '惑いの三鈷杵',
          materials: [
            { name: 'いにしえの龍骨', quantity: 1 },
            { name: '惨爪竜の上鱗', quantity: 8 },
            { name: '惨爪竜の尖爪', quantity: 4 },
            { name: '惨爪竜の鋭牙', quantity: 3 },
          ],
        },
        {
          name: '悪【ヴァイス】',
          materials: [
            { name: '炎龍の尖爪', quantity: 2 },
            { name: '惨爪竜の尖爪', quantity: 6 },
            { name: '惨爪竜の鋭牙', quantity: 5 },
            { name: '惨爪竜の宝玉', quantity: 1 },
          ],
        },
        {
          name: '悪【ヴァイス】改',
          materials: [
            { name: '惨爪竜の剛爪', quantity: 2 },
            { name: '惨爪竜の厚鱗', quantity: 3 },
            { name: '惨爪竜の重牙', quantity: 2 },
            { name: '重竜骨', quantity: 3 },
          ],
        },
        {
          name: '凶悪【ビシャス】',
          materials: [
            { name: '惨爪竜の剛爪', quantity: 4 },
            { name: '惨爪竜の靭尾', quantity: 2 },
            { name: '惨爪竜の天鱗', quantity: 1 },
            { name: '硫斬竜の断剣尾', quantity: 2 },
          ],
        },
        {
          name: '冥府の三鈷杵',
          materials: [
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '兇爪竜の剛爪', quantity: 3 },
            { name: '兇爪竜の厚鱗', quantity: 5 },
            { name: '兇爪竜の重牙', quantity: 2 },
          ],
        },
        {
          name: '死線【デッドライン】',
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
          name: '龍骨棍Ⅰ',
          materials: [
            { name: 'いびつな狂骨', quantity: 5 },
            { name: '強固な岩骨', quantity: 5 },
            { name: '太古の大骨', quantity: 5 },
            { name: 'サンゴの紅骨', quantity: 5 },
          ],
        },
        {
          name: '龍骨棍Ⅱ',
          materials: [
            { name: '竜骨【大】', quantity: 8 },
            { name: '頑丈な骨', quantity: 8 },
            { name: '上竜骨', quantity: 6 },
          ],
        },
        {
          name: '龍骨棍Ⅲ',
          materials: [
            { name: '古龍骨', quantity: 10 },
            { name: '竜玉', quantity: 1 },
            { name: 'いにしえの龍骨', quantity: 2 },
            { name: '荒々しい蛮骨', quantity: 4 },
          ],
        },
        {
          name: '龍封じの古杖Ⅰ',
          materials: [
            { name: '頑強な重骨', quantity: 6 },
            { name: 'いにしえの巨龍骨', quantity: 1 },
            { name: '剛竜骨', quantity: 3 },
            { name: '重竜骨', quantity: 4 },
          ],
        },
        {
          name: '龍封じの古杖Ⅱ',
          materials: [
            { name: '剛竜骨', quantity: 4 },
            { name: '太古龍骨', quantity: 6 },
            { name: '大竜玉', quantity: 1 },
            { name: '溶岩竜の特上ヒレ', quantity: 2 },
          ],
        },
        {
          name: '三世十方ー智慧ー',
          materials: [
            { name: '地啼竜の慈鱗', quantity: 6 },
            { name: '地啼竜の慈眼殻', quantity: 2 },
            { name: '地啼竜の慈爪', quantity: 4 },
            { name: '地啼竜の顕玉', quantity: 1 },
          ],
        },
        {
          name: '藍の稲光',
          materials: [
            { name: 'ライトクリスタル', quantity: 1 },
            { name: '幻獣の雷角', quantity: 3 },
            { name: '幻獣の皮', quantity: 3 },
            { name: '幻獣の尾', quantity: 1 },
          ],
        },
        {
          name: '蒼の稲魂',
          materials: [
            { name: '幻獣のたてがみ', quantity: 4 },
            { name: '龍脈の結晶', quantity: 5 },
            { name: '幻獣の上皮', quantity: 3 },
            { name: '幻獣の蒼角', quantity: 4 },
          ],
        },
        {
          name: '碧の神鳴',
          materials: [
            { name: 'ノヴァクリスタル', quantity: 2 },
            { name: '冥灯龍の白殻', quantity: 4 },
            { name: '幻獣の雷尾', quantity: 3 },
            { name: '幻獣の蒼角', quantity: 6 },
          ],
        },
        {
          name: '天の幻雷',
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
          name: '黒鋼の長刀Ⅰ',
          materials: [
            { name: '大地の結晶', quantity: 10 },
            { name: 'マカライト鉱石', quantity: 10 },
            { name: 'ライトクリスタル', quantity: 1 },
            { name: '深海の結晶', quantity: 10 },
            { name: '龍脈の結晶', quantity: 10 },
          ],
        },
        {
          name: '黒鋼の長刀Ⅱ',
          materials: [
            { name: '獄炎石', quantity: 1 },
            { name: '竜玉', quantity: 1 },
            { name: 'カブレライト鉱石', quantity: 10 },
            { name: 'ユニオン鉱石', quantity: 5 },
          ],
        },
        {
          name: 'ウルス＝ダオラ',
          materials: [
            { name: '鋼龍の堅殻', quantity: 5 },
            { name: '鋼龍の尻尾', quantity: 2 },
            { name: '鋼龍の尖爪', quantity: 3 },
            { name: '鋼龍の翼', quantity: 4 },
          ],
        },
        {
          name: 'クイド＝ダオラ',
          materials: [
            { name: '鋼龍の尖角', quantity: 5 },
            { name: '鋼龍の宝玉', quantity: 1 },
            { name: '冥灯龍の幽翼', quantity: 2 },
            { name: '鋼龍の尖爪', quantity: 4 },
          ],
        },
        {
          name: 'サムドラ＝ダオラ',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '鋼の厚龍鱗', quantity: 5 },
            { name: '鋼龍の剛爪', quantity: 4 },
            { name: '鋼龍の剛角', quantity: 5 },
          ],
        },
        {
          name: 'ゼノ＝シュマイナ',
          materials: [
            { name: '冥灯龍の白殻', quantity: 6 },
            { name: '冥灯龍の幽爪', quantity: 4 },
            { name: '冥灯龍の幽玉', quantity: 1 },
            { name: '冥灯龍の尻尾', quantity: 2 },
          ],
        },
        {
          name: 'ゼノ＝シュマイナ改',
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
          name: 'バッドウィング',
          materials: [
            { name: '恐暴竜の黒鱗', quantity: 6 },
            { name: '恐暴竜の大牙', quantity: 3 },
            { name: '恐暴竜の鉤爪', quantity: 2 },
            { name: '恐暴竜の唾液', quantity: 2 },
          ],
        },
        {
          name: 'グランジストーム',
          materials: [
            { name: '恐暴竜の大牙', quantity: 5 },
            { name: '恐暴竜の頭殻', quantity: 2 },
            { name: '恐暴竜の宝玉', quantity: 1 },
            { name: '古龍の血', quantity: 5 },
          ],
        },
        {
          name: '業翼ダムドヴィング',
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
          name: 'エンプレスケイン',
          materials: [
            { name: '炎妃龍のたてがみ', quantity: 3 },
            { name: '炎妃龍の宝玉', quantity: 1 },
            { name: '炎妃龍の尖角', quantity: 3 },
            { name: '炎妃龍の上鱗', quantity: 4 },
          ],
        },
        {
          name: 'エンプレスケイン・冥灯',
          materials: [
            { name: '冥灯龍の幽角', quantity: 3 },
            { name: '冥灯龍の幽玉', quantity: 1 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の尻尾', quantity: 2 },
          ],
        },
        {
          name: 'エンプレスケイン・滅尽',
          materials: [
            { name: '滅尽龍の宝玉', quantity: 1 },
            { name: '滅尽龍の大角', quantity: 3 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の翼', quantity: 3 },
          ],
        },
        {
          name: 'エンプレスケイン・炎妃',
          materials: [
            { name: '炎王龍の尖角', quantity: 3 },
            { name: '爆鱗竜の宝玉', quantity: 1 },
            { name: '調査団チケット', quantity: 1 },
            { name: '炎妃龍の尖角', quantity: 2 },
          ],
        },
        {
          name: '魂焔の龍戟・炎妃',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '炎妃龍の厚鱗', quantity: 4 },
            { name: '炎妃龍の剛角', quantity: 4 },
            { name: '炎妃龍の大たてがみ', quantity: 4 },
          ],
        },
        {
          name: '魂焔の龍戟・滅尽',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '殲滅の大剛角', quantity: 3 },
            { name: '無窮の新生殻', quantity: 3 },
            { name: '炎妃龍の厚鱗', quantity: 4 },
          ],
        },
        {
          name: '魂焔の龍戟・冥灯',
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
      name: 'ゲイボルグ系',
      weapons: [
        {
          name: 'ゲイボルグ',
          materials: [
            { name: '獄炎石', quantity: 3 },
            { name: '魔獣の裂爪', quantity: 2 },
            { name: 'エーテライトの欠片', quantity: 3 },
            { name: '魔獣の堅骨', quantity: 3 },
          ],
        },
        {
          name: 'ゲイボルグ・真',
          materials: [
            { name: '古龍の血', quantity: 5 },
            { name: '魔獣の尻尾', quantity: 1 },
            { name: '魔獣の大角', quantity: 2 },
            { name: '魔獣の堅骨', quantity: 2 },
          ],
        },
        {
          name: 'ゲイボルグ・極',
          materials: [
            { name: '古龍の浄血', quantity: 5 },
            { name: '魔獣のたてがみ', quantity: 2 },
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '親友の証', quantity: 1 },
          ],
        },
      ],
    },
    {
      name: '金獅子系',
      weapons: [
        {
          name: '金砕棍棒',
          materials: [
            { name: '金獅子の重牙', quantity: 2 },
            { name: '金獅子の剛爪', quantity: 1 },
            { name: '金獅子の剛角', quantity: 1 },
            { name: '金獅子の黒荒毛', quantity: 2 },
          ],
        },
        {
          name: '金砕棍ゴーデンライ',
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
          name: '鬼神棍【猿王】',
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
          name: '獄棍リュウメイ',
          materials: [
            { name: '獄狼竜の滅龍毛', quantity: 2 },
            { name: '獄狼竜の滅龍殻', quantity: 2 },
            { name: '獄狼竜の剛角', quantity: 1 },
            { name: '獄狼竜の剛爪', quantity: 1 },
          ],
        },
        {
          name: '狼牙棍【亡獄】',
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
          name: '砕光の黒曜杵',
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
          name: '煌黒の龍棍',
          materials: [
            { name: '古龍の大宝玉', quantity: 1 },
            { name: '煌黒龍の凶爪', quantity: 3 },
            { name: '天を統べる角', quantity: 1 },
            { name: '煌黒龍の天鱗', quantity: 3 },
          ],
        },
        {
          name: '煌黒龍棍アルイノ',
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
          name: '黒龍棍',
          materials: [
            { name: '黒龍の厚鱗', quantity: 3 },
            { name: '黒龍の重胸殻', quantity: 1 },
            { name: '黒龍の剛角', quantity: 1 },
            { name: '黒龍の邪眼', quantity: 1 },
          ],
        },
        {
          name: '真・黒龍棍',
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
          name: 'ギルドパレスロッド',
          materials: [
            { name: 'グラシスメタル', quantity: 5 },
            { name: 'ピュアクリスタル', quantity: 1 },
            { name: '琥珀色の重牙', quantity: 2 },
            { name: '祭典チケット', quantity: 2 },
          ],
        },
        {
          name: '宮廷旗杖【巡星】',
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
