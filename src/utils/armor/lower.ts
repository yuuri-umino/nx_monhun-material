import { ArmorType } from './materialsTypes'

const lower: ArmorType = {
  type: '下位',
  derivations: [
    {
      name: 'レザー',
      armors: [
        {
          name: 'レザーヘッド',
          materials: [{ name: '鉄鉱石', quantity: 2 }],
          skill: [{ name: '腹減り耐性', level: 1 }],
        },
        {
          name: 'レザーベスト',
          materials: [{ name: '鉄鉱石', quantity: 1 }],
          skill: [],
        },
        {
          name: 'レザーグラブ',
          materials: [{ name: '鉄鉱石', quantity: 1 }],

          skill: [],
        },
        {
          name: 'レザーベルト',
          materials: [{ name: '鉄鉱石', quantity: 1 }],

          skill: [],
        },
        {
          name: 'レザーパンツ',
          materials: [{ name: '鉄鉱石', quantity: 1 }],

          skill: [],
        },
      ],
    },
    {
      name: 'チェーン',
      armors: [
        {
          name: 'チェーンヘッド',
          materials: [{ name: '鉄鉱石', quantity: 2 }],
          skill: [{ name: '採集の達人', level: 1 }],
        },
        {
          name: '	チェーンベスト',
          materials: [{ name: '鉄鉱石', quantity: 1 }],
          skill: [],
        },
        {
          name: 'チェーングラブ',
          materials: [{ name: '鉄鉱石', quantity: 1 }],
          skill: [],
        },
        {
          name: 'チェーンベルト',
          materials: [{ name: '鉄鉱石', quantity: 1 }],
          skill: [],
        },
        {
          name: 'チェーンパンツ',
          materials: [{ name: '鉄鉱石', quantity: 1 }],
          skill: [],
        },
      ],
    },
    {
      name: 'ハンター',
      armors: [
        {
          name: 'ハンターヘルム',
          materials: [
            { name: 'ジャグラスの皮', quantity: 2 },
            { name: 'ジャグラスの鱗', quantity: 2 },
          ],
          skill: [{ name: '導蟲反応距離UP', level: 1 }],
        },
        {
          name: '	ハンターメイル',
          materials: [
            { name: 'ジャグラスの皮', quantity: 2 },
            { name: '竜骨【小】', quantity: 2 },
          ],
          skill: [{ name: 'スリンガー装填数UP', level: 1 }],
        },
        {
          name: 'ハンターアーム',
          materials: [
            { name: 'ジャグラスの皮', quantity: 1 },
            { name: 'ジャグラスの鱗', quantity: 1 },
          ],
          skill: [{ name: '潜伏', level: 1 }],
        },
        {
          name: '	ハンターコイル',
          materials: [
            { name: 'ジャグラスの皮', quantity: 1 },
            { name: '竜骨【小】', quantity: 1 },
          ],
          skill: [{ name: '追跡の達人', level: 1 }],
        },
        {
          name: 'ハンターグリーヴ',
          materials: [
            { name: 'ジャグラスの皮', quantity: 1 },
            { name: '竜骨【小】', quantity: 1 },
          ],
          skill: [{ name: '肉焼き名人', level: 1 }],
        },
      ],
    },
    {
      name: 'ボーン',
      armors: [
        {
          name: 'ボーンヘルム',
          materials: [
            { name: '竜骨【小】', quantity: 2 },
            { name: '太古の大骨', quantity: 2 },
          ],
          skill: [{ name: '体力増強', level: 1 }],
        },
        {
          name: '	ボーンメイル',
          materials: [
            { name: '竜骨【小】', quantity: 1 },
            { name: '太古の大骨', quantity: 1 },
          ],
          skill: [{ name: '攻撃', level: 1 }],
        },
        {
          name: 'ボーンアーム',
          materials: [
            { name: '竜骨【小】', quantity: 3 },
            { name: 'ケストドンの甲殻', quantity: 2 },
          ],
          skill: [{ name: 'KO術', level: 1 }],
        },
        {
          name: '	ボーンコイル',
          materials: [
            { name: '竜骨【小】', quantity: 1 },
            { name: 'ケストドンの甲殻', quantity: 1 },
          ],
          skill: [{ name: '笛吹き名人', level: 1 }],
        },
        {
          name: 'ボーングリーヴ',
          materials: [
            { name: '竜骨【小】', quantity: 1 },
            { name: '太古の大骨', quantity: 1 },
          ],
          skill: [{ name: '昆虫標本の達人', level: 1 }],
        },
      ],
    },
    {
      name: 'ランゴ',
      armors: [
        {
          name: 'ランゴヘルム',
          materials: [
            { name: 'ランゴスタの甲殻', quantity: 2 },
            { name: '鉄鉱石', quantity: 2 },
          ],
          skill: [{ name: '納刀術', level: 1 }],
        },
        {
          name: '	ランゴメイル',
          materials: [
            { name: 'ランゴスタの甲殻', quantity: 1 },
            { name: 'マカライト鉱石', quantity: 1 },
          ],
          skill: [{ name: '風圧耐性', level: 1 }],
        },
        {
          name: 'ランゴアーム',
          materials: [
            { name: 'ランゴスタの羽', quantity: 2 },
            { name: 'モンスターの体液', quantity: 1 },
          ],
          skill: [{ name: '麻痺属性強化', level: 1 }],
        },
        {
          name: '	ランゴコイル',
          materials: [
            { name: 'ランゴスタの甲殻', quantity: 1 },
            { name: '鉄鉱石', quantity: 4 },
          ],
          skill: [{ name: '麻痺耐性', level: 1 }],
        },
        {
          name: 'ランゴグリーヴ',
          materials: [
            { name: 'ランゴスタの羽', quantity: 2 },
            { name: 'モンスターの体液', quantity: 1 },
          ],
          skill: [{ name: 'ハニーハンタ', level: 1 }],
        },
      ],
    },
    {
      name: 'ケストガード',
      armors: [
        {
          name: 'ケストガード',
          materials: [
            { name: 'ケストドンの甲殻', quantity: 6 },
            { name: 'ケストドンの頭殻', quantity: 3 },
          ],
          skill: [{ name: '滑走強化', level: 1 }],
        },
      ],
    },
    {
      name: 'ガライーブーツ',
      armors: [
        {
          name: 'ガライーブーツ',
          materials: [
            { name: '咬魚の皮', quantity: 4 },
            { name: '咬魚のヒゲ', quantity: 2 },
          ],
          skill: [{ name: '水場適応', level: 1 }],
        },
      ],
    },
    {
      name: 'ジャグラス',
      armors: [
        {
          name: 'ジャグラスヘルム',
          materials: [
            { name: '賊竜の皮', quantity: 2 },
            { name: '賊竜のたてがみ', quantity: 2 },
            { name: '賊竜の爪', quantity: 1 },
            { name: '太古の大骨', quantity: 1 },
          ],
          skill: [{ name: '早食い', level: 1 }],
        },
        {
          name: '	ジャグラスメイル',
          materials: [
            { name: '賊竜の皮', quantity: 2 },
            { name: '賊竜の爪', quantity: 1 },
            { name: '賊竜の鱗', quantity: 2 },
            { name: '竜骨【小】', quantity: 3 },
          ],
          skill: [{ name: '威嚇', level: 1 }],
        },
        {
          name: 'ジャグラスアーム',
          materials: [
            { name: '賊竜の鱗', quantity: 2 },
            { name: '賊竜の皮', quantity: 1 },
            { name: 'ジャグラスの皮', quantity: 3 },
          ],
          skill: [{ name: 'オトモヘの采配', level: 1 }],
        },
        {
          name: '	ジャグラスコイル',
          materials: [
            { name: '賊竜の皮', quantity: 1 },
            { name: '賊竜の鱗', quantity: 2 },
            { name: '賊竜のたてがみ', quantity: 1 },
            { name: 'とがった爪', quantity: 2 },
          ],
          skill: [{ name: '不屈', level: 1 }],
        },
        {
          name: 'ジャグラスグリーヴ',
          materials: [
            { name: '賊竜の鱗', quantity: 1 },
            { name: '賊竜の皮', quantity: 1 },
            { name: '賊竜のたてがみ', quantity: 1 },
            { name: 'ジャグラスの鱗', quantity: 2 },
          ],
          skill: [{ name: 'しゃがみ移動速度UP', level: 1 }],
        },
      ],
    },
    {
      name: 'クルル',
      armors: [
        {
          name: 'クルルヘルム',
          materials: [
            { name: '掻鳥の鱗', quantity: 2 },
            { name: '掻鳥の皮', quantity: 1 },
            { name: '掻鳥の飾り羽', quantity: 1 },
          ],
          skill: [{ name: '火耐性', level: 1 }],
        },
        {
          name: '	クルルメイル',
          materials: [
            { name: '掻鳥の皮', quantity: 2 },
            { name: '賊竜の爪', quantity: 1 },
            { name: '掻鳥のクチバシ', quantity: 1 },
            { name: 'マカライト鉱石', quantity: 2 },
          ],
          skill: [{ name: 'スタミナ休息回復', level: 1 }],
        },
        {
          name: 'クルルアーム',
          materials: [
            { name: '掻鳥の鱗', quantity: 2 },
            { name: '掻鳥の皮', quantity: 1 },
            { name: '鉄鉱石', quantity: 3 },
          ],
          skill: [{ name: '運搬の達人', level: 1 }],
        },
        {
          name: '	クルルコイル',
          materials: [
            { name: '掻鳥の皮', quantity: 2 },
            { name: '掻鳥のクチバシ', quantity: 1 },
            { name: '翼竜の皮', quantity: 2 },
          ],
          skill: [{ name: 'アイテム使用強化', level: 1 }],
        },
        {
          name: 'クルルグリーヴ',
          materials: [
            { name: '掻鳥の皮', quantity: 2 },
            { name: '掻鳥の鱗', quantity: 3 },
            { name: '翼竜の皮', quantity: 2 },
          ],
          skill: [{ name: '見切り', level: 1 }],
        },
      ],
    },
    {
      name: 'アロイ',
      armors: [
        {
          name: 'アロイヘルム',
          materials: [
            { name: 'マカライト鉱石', quantity: 4 },
            { name: '鉄鉱石', quantity: 4 },
            { name: '大地の結晶', quantity: 2 },
          ],
          skill: [{ name: '風圧耐性', level: 1 }],
        },
        {
          name: '	アロイメイル',
          materials: [
            { name: 'マカライト鉱石', quantity: 3 },
            { name: '鉄鉱石', quantity: 6 },
            { name: '大地の結晶', quantity: 1 },
          ],
          skill: [{ name: '水耐性', level: 1 }],
        },
        {
          name: 'アロイアーム',
          materials: [
            { name: 'マカライト鉱石', quantity: 3 },
            { name: '鉄鉱石', quantity: 6 },
            { name: '大地の結晶', quantity: 1 },
          ],
          skill: [{ name: '防御', level: 1 }],
        },
        {
          name: '	アロイコイル',
          materials: [
            { name: 'マカライト鉱石', quantity: 4 },
            { name: '鉄鉱石', quantity: 4 },
            { name: '大地の結晶', quantity: 2 },
          ],
          skill: [{ name: '毒耐性', level: 1 }],
        },
        {
          name: 'アロイグリーヴ',
          materials: [
            { name: 'マカライト鉱石', quantity: 3 },
            { name: '鉄鉱石', quantity: 6 },
            { name: '大地の結晶', quantity: 1 },
          ],
          skill: [{ name: '砥石使用高速化', level: 1 }],
        },
      ],
    },
    {
      name: 'プケプケ',
      armors: [
        {
          name: 'プケプケヘルム',
          materials: [
            { name: '毒妖鳥の甲殻', quantity: 2 },
            { name: '毒妖鳥の尻尾', quantity: 1 },
            { name: '毒妖鳥の羽根', quantity: 2 },
            { name: 'マカライト鉱石', quantity: 2 },
          ],
          skill: [{ name: '綿胞子草の知識', level: 1 }],
        },
        {
          name: '	プケプケメイル',
          materials: [
            { name: '毒妖鳥の鱗', quantity: 2 },
            { name: '毒妖鳥の甲殻', quantity: 1 },
            { name: '鉄鉱石', quantity: 3 },
          ],
          skill: [{ name: 'アイテム使用強化', level: 1 }],
        },
        {
          name: 'プケプケアーム',
          materials: [
            { name: '毒妖鳥の鱗', quantity: 2 },
            { name: '毒妖鳥の甲殻', quantity: 1 },
            { name: '毒袋', quantity: 3 },
          ],
          skill: [{ name: '毒耐性', level: 1 }],
        },
        {
          name: '	プケプケコイル',
          materials: [
            { name: '毒妖鳥の甲殻', quantity: 3 },
            { name: '毒妖鳥の尻尾', quantity: 1 },
            { name: '毒妖鳥の喉袋', quantity: 1 },
            { name: '毒袋', quantity: 1 },
          ],
          skill: [{ name: '毒属性強化', level: 1 }],
        },
        {
          name: 'プケプケグリーヴ',
          materials: [
            { name: '毒妖鳥の甲殻', quantity: 2 },
            { name: '毒妖鳥の喉袋', quantity: 1 },
            { name: '毒妖鳥の鱗', quantity: 2 },
            { name: '竜骨【中】', quantity: 1 },
          ],
          skill: [{ name: '植生学', level: 1 }],
        },
      ],
    },
    {
      name: 'ボロス',
      armors: [
        {
          name: 'ボロスヘルム',
          materials: [
            { name: '土砂竜の背甲', quantity: 2 },
            { name: '土砂竜の尻尾', quantity: 1 },
            { name: '土砂竜の爪', quantity: 2 },
            { name: 'ケストドンの甲殻', quantity: 2 },
          ],
          skill: [{ name: 'ガード性能', level: 1 }],
        },
        {
          name: '	ボロスメイル',
          materials: [
            { name: '土砂竜の甲殻', quantity: 2 },
            { name: '土砂竜の背甲', quantity: 1 },
            { name: '土砂竜の爪', quantity: 1 },
            { name: '強固な岩骨', quantity: 1 },
          ],
          skill: [{ name: 'スタミナ奪取', level: 1 }],
        },
        {
          name: 'ボロスアーム',
          materials: [
            { name: '土砂竜の背甲', quantity: 3 },
            { name: '土砂竜の尻尾', quantity: 1 },
            { name: '土砂竜の頭殻', quantity: 1 },
            { name: 'ケストドンの甲殻', quantity: 1 },
          ],
          skill: [{ name: 'ランナー', level: 1 }],
        },
        {
          name: '	ボロスコイル',
          materials: [
            { name: '土砂竜の甲殻', quantity: 2 },
            { name: '土砂竜の背甲', quantity: 1 },
            { name: '肥沃なドロ', quantity: 2 },
          ],
          skill: [{ name: '泥耐性', level: 1 }],
        },
        {
          name: 'ボロスグリーヴ',
          materials: [
            { name: '土砂竜の背甲', quantity: 2 },
            { name: '土砂竜の頭殻', quantity: 1 },
            { name: '土砂竜の甲殻', quantity: 1 },
            { name: '肥沃なドロ', quantity: 2 },
          ],
          skill: [{ name: '気絶耐性', level: 1 }],
        },
      ],
    },
    {
      name: 'ジュラ',
      armors: [
        {
          name: 'ジュラヘルム',
          materials: [
            { name: '泥魚竜の鱗', quantity: 2 },
            { name: '泥魚竜の甲殻', quantity: 1 },
            { name: '泥魚竜のヒレ', quantity: 1 },
            { name: '咬魚の皮', quantity: 3 },
          ],
          skill: [{ name: '水場適応', level: 1 }],
        },
        {
          name: '	ジュラメイル',
          materials: [
            { name: '泥魚竜の甲殻', quantity: 2 },
            { name: '泥魚竜のヒレ', quantity: 1 },
            { name: '泥魚竜の牙', quantity: 1 },
            { name: '水袋', quantity: 1 },
          ],
          skill: [{ name: '泥耐性', level: 1 }],
        },
        {
          name: 'ジュラアーム',
          materials: [
            { name: '泥魚竜の甲殻', quantity: 2 },
            { name: '泥魚竜の牙', quantity: 1 },
            { name: '咬魚のヒゲ', quantity: 2 },
          ],
          skill: [{ name: '水属性攻撃強化', level: 1 }],
        },
        {
          name: '	ジュラコイル',
          materials: [
            { name: '泥魚竜の鱗', quantity: 2 },
            { name: '泥魚竜の甲殻', quantity: 1 },
            { name: '水袋', quantity: 1 },
          ],
          skill: [{ name: '氷耐性', level: 1 }],
        },
        {
          name: 'ジュラグリーヴ',
          materials: [
            { name: '泥魚竜の甲殻', quantity: 3 },
            { name: '泥魚竜の牙', quantity: 2 },
            { name: '泥魚竜のヒレ', quantity: 2 },
            { name: '大地の結晶', quantity: 3 },
          ],
          skill: [{ name: '集中', level: 1 }],
        },
      ],
    },
    {
      name: 'カガチ',
      armors: [
        {
          name: 'カガチヘルム',
          materials: [
            { name: '飛雷竜の毛皮', quantity: 2 },
            { name: '飛雷竜の電極針', quantity: 2 },
            { name: '飛雷竜の爪', quantity: 1 },
            { name: '電気袋', quantity: 1 },
          ],
          skill: [{ name: '体術', level: 1 }],
        },
        {
          name: '	カガチメイル',
          materials: [
            { name: '飛雷竜の毛皮', quantity: 2 },
            { name: '飛雷竜の電極針', quantity: 1 },
            { name: '飛雷竜の皮膜', quantity: 2 },
            { name: '翼竜の皮', quantity: 2 },
          ],
          skill: [{ name: 'ジャンプ鉄人', level: 1 }],
        },
        {
          name: 'カガチアーム',
          materials: [
            { name: '飛雷竜の毛皮', quantity: 2 },
            { name: '飛雷竜の爪', quantity: 1 },
            { name: '飛雷竜の鱗', quantity: 2 },
            { name: '竜骨【中】', quantity: 2 },
          ],
          skill: [{ name: '回避距離UP', level: 1 }],
        },
        {
          name: '	カガチコイル',
          materials: [
            { name: '飛雷竜の鱗', quantity: 2 },
            { name: '飛雷竜の毛皮', quantity: 1 },
            { name: '電気袋', quantity: 1 },
          ],
          skill: [{ name: '雷属性攻撃強化', level: 1 }],
        },
        {
          name: 'カガチグリーヴ',
          materials: [
            { name: '飛雷竜の鱗', quantity: 2 },
            { name: '飛雷竜の毛皮', quantity: 1 },
            { name: '暖かい毛皮', quantity: 1 },
          ],
          skill: [{ name: '雷耐性', level: 1 }],
        },
      ],
    },
    {
      name: 'ハイメタ',
      armors: [
        {
          name: 'ハイメタヘルム',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 2 },
            { name: 'マカライト鉱石', quantity: 1 },
            { name: '鉄鉱石', quantity: 6 },
          ],
          skill: [{ name: '氷耐性', level: 1 }],
        },
        {
          name: '	ハイメタメイル',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 2 },
            { name: 'マカライト鉱石', quantity: 2 },
            { name: '大地の結晶', quantity: 2 },
            { name: 'とがった爪', quantity: 2 },
          ],
          skill: [{ name: '耳栓', level: 1 }],
        },
        {
          name: 'ハイメタアーム',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 2 },
            { name: 'マカライト鉱石', quantity: 2 },
            { name: '大地の結晶', quantity: 2 },
            { name: 'とがった爪', quantity: 2 },
          ],
          skill: [{ name: '防御', level: 1 }],
        },
        {
          name: '	ハイメタコイル',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 2 },
            { name: 'マカライト鉱石', quantity: 1 },
            { name: '鉄鉱石', quantity: 6 },
          ],
          skill: [{ name: '砲弾装填数UP', level: 1 }],
        },
        {
          name: 'ハイメタグリーヴ',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 2 },
            { name: 'マカライト鉱石', quantity: 1 },
            { name: '鉄鉱石', quantity: 6 },
          ],
          skill: [{ name: '砲撃手', level: 1 }],
        },
      ],
    },
    {
      name: 'オウビート',
      armors: [
        {
          name: 'オウビートテスタ',
          materials: [
            { name: 'オオツノアゲハ', quantity: 1 },
            { name: 'ドラグライト鉱石', quantity: 2 },
            { name: '深海の結晶', quantity: 2 },
            { name: '火炎袋', quantity: 1 },
          ],
          skill: [{ name: '回避性能', level: 1 }],
        },
        {
          name: '	オウビートペット',
          materials: [
            { name: 'オオツノアゲハ', quantity: 1 },
            { name: '大地の結晶', quantity: 2 },
            { name: '深海の結晶', quantity: 2 },
            { name: '毒袋', quantity: 1 },
          ],
          skill: [{ name: '納刀術', level: 1 }],
        },
        {
          name: 'オウビートマーノ',
          materials: [
            { name: 'オオツノアゲハ', quantity: 1 },
            { name: '大地の結晶', quantity: 2 },
            { name: '深海の結晶', quantity: 2 },
            { name: '水袋', quantity: 1 },
          ],
          skill: [{ name: '飛び込み', level: 1 }],
        },
        {
          name: '	オウビートアンカ',
          materials: [
            { name: 'オオツノアゲハ', quantity: 1 },
            { name: '大地の結晶', quantity: 2 },
            { name: 'モンスターの体液', quantity: 1 },
            { name: '電気袋', quantity: 1 },
          ],
          skill: [{ name: 'ハニーハンター', level: 1 }],
        },
        {
          name: 'オウビートガンバ',
          materials: [
            { name: 'オオツノアゲハ', quantity: 1 },
            { name: 'ドラグライト鉱石', quantity: 2 },
            { name: 'モンスターの体液', quantity: 3 },
            { name: '麻痺袋', quantity: 1 },
          ],
          skill: [{ name: '探索者の幸運', level: 1 }],
        },
      ],
    },
    {
      name: 'シャムゴーグル',
      armors: [
        {
          name: 'シャムゴーグル',
          materials: [
            { name: 'シャムオスの皮', quantity: 2 },
            { name: 'シャムオスの鱗', quantity: 3 },
            { name: 'サンゴの紅骨', quantity: 1 },
            { name: '深海の結晶', quantity: 1 },
          ],
          skill: [{ name: '感知', level: 1 }],
        },
      ],
    },
    {
      name: 'タロス',
      armors: [
        {
          name: 'タロスヘルム',
          materials: [
            { name: 'カンタロスの頭', quantity: 1 },
            { name: 'カンタロスの甲殻', quantity: 1 },
            { name: 'マカライト鉱石', quantity: 1 },
            { name: 'モンスターの体液', quantity: 1 },
          ],
          skill: [{ name: 'こやし名人', level: 1 }],
        },
        {
          name: '	タロスメイル',
          materials: [
            { name: 'カンタロスの羽', quantity: 2 },
            { name: 'カンタロスの甲殻', quantity: 2 },
            { name: 'ドラグライト鉱石', quantity: 2 },
            { name: 'マカライト鉱石', quantity: 2 },
          ],
          skill: [{ name: '瘴気環境適応', level: 1 }],
        },
        {
          name: 'タロスアーム',
          materials: [
            { name: 'カンタロスの羽', quantity: 1 },
            { name: 'カンタロスの甲殻', quantity: 1 },
            { name: '鉄鉱石', quantity: 3 },
            { name: 'マカライト鉱石', quantity: 1 },
          ],
          skill: [{ name: '満足感', level: 1 }],
        },
        {
          name: '	タロスコイル',
          materials: [
            { name: 'カンタロスの羽', quantity: 1 },
            { name: 'カンタロスの甲殻', quantity: 1 },
            { name: '鉄鉱石', quantity: 3 },
            { name: 'マカライト鉱石', quantity: 1 },
          ],
          skill: [{ name: '剥ぎ取り鉄人', level: 1 }],
        },
        {
          name: 'タロスグリーヴ',
          materials: [
            { name: 'カンタロスの羽', quantity: 2 },
            { name: 'カンタロスの甲殻', quantity: 2 },
            { name: 'ドラグライト鉱石', quantity: 3 },
            { name: 'モンスターの体液', quantity: 2 },
          ],
          skill: [{ name: '匠', level: 1 }],
        },
      ],
    },
    {
      name: 'ジャナフ',
      armors: [
        {
          name: 'ジャナフヘルム',
          materials: [
            { name: '蛮顎竜の毛皮', quantity: 3 },
            { name: '蛮顎竜の鱗', quantity: 3 },
            { name: '蛮顎竜の尻尾', quantity: 1 },
            { name: '火炎袋', quantity: 1 },
          ],
          skill: [{ name: '火属性攻撃強化', level: 1 }],
        },
        {
          name: '	ジャナフメイル',
          materials: [
            { name: '蛮顎竜の毛皮', quantity: 3 },
            { name: '蛮顎竜の牙', quantity: 2 },
            { name: '蛮顎竜の鼻骨', quantity: 1 },
            { name: '蛮顎竜の逆鱗', quantity: 1 },
          ],
          skill: [{ name: 'ランナー', level: 1 }],
        },
        {
          name: 'ジャナフアーム',
          materials: [
            { name: '蛮顎竜の毛皮', quantity: 2 },
            { name: '蛮顎竜の鱗', quantity: 2 },
            { name: '蛮顎竜の鼻骨', quantity: 1 },
            { name: '竜骨【大】', quantity: 2 },
          ],
          skill: [{ name: '特殊射撃強化', level: 1 }],
        },
        {
          name: '	ジャナフコイル',
          materials: [
            { name: '蛮顎竜の鱗', quantity: 2 },
            { name: '蛮顎竜の毛皮', quantity: 1 },
            { name: '蛮顎竜の牙', quantity: 2 },
            { name: 'マカライト鉱石', quantity: 2 },
          ],
          skill: [{ name: '火耐性', level: 1 }],
        },
        {
          name: 'ジャナフグリーヴ',
          materials: [
            { name: '蛮顎竜の鱗', quantity: 2 },
            { name: '蛮顎竜の毛皮', quantity: 1 },
            { name: '火炎袋', quantity: 1 },
            { name: 'マカライト鉱石', quantity: 2 },
          ],
          skill: [{ name: '砲術', level: 1 }],
        },
      ],
    },
    {
      name: 'レイア',
      armors: [
        {
          name: 'レイアヘルム',
          materials: [
            { name: '雌火竜の甲殻', quantity: 2 },
            { name: '雌火竜の鱗', quantity: 3 },
            { name: '雌火竜の翼膜', quantity: 2 },
            { name: '火炎袋', quantity: 1 },
          ],
          skill: [{ name: '体力増強', level: 1 }],
        },
        {
          name: '	レイアメイル',
          materials: [
            { name: '雌火竜の鱗', quantity: 2 },
            { name: '雌火竜の甲殻', quantity: 1 },
            { name: '雌火竜の翼膜', quantity: 1 },
            { name: '太古の大骨', quantity: 2 },
          ],
          skill: [{ name: '植生学', level: 1 }],
        },
        {
          name: 'レイアアーム',
          materials: [
            { name: '雌火竜の甲殻', quantity: 2 },
            { name: '雌火竜の鱗', quantity: 2 },
            { name: '雌火竜の棘', quantity: 1 },
            { name: '竜骨【大】', quantity: 2 },
          ],
          skill: [{ name: '毒属性強化', level: 1 }],
        },
        {
          name: '	レイアコイル',
          materials: [
            { name: '雌火竜の鱗', quantity: 2 },
            { name: '雌火竜の甲殻', quantity: 1 },
            { name: '火竜の翼爪', quantity: 2 },
            { name: '強固な岩骨', quantity: 2 },
          ],
          skill: [{ name: '毒耐性', level: 1 }],
        },
        {
          name: 'レイアグリーヴ',
          materials: [
            { name: '雌火竜の甲殻', quantity: 3 },
            { name: '雌火竜の棘', quantity: 1 },
            { name: '火竜の翼爪', quantity: 2 },
            { name: '雌火竜の逆鱗', quantity: 1 },
          ],
          skill: [{ name: '体力回復量UP', level: 1 }],
        },
      ],
    },
    {
      name: 'ツィツィ',
      armors: [
        {
          name: 'ツィツィヘルム',
          materials: [
            { name: '眩鳥の鱗', quantity: 2 },
            { name: '眩鳥の皮', quantity: 1 },
            { name: '眩鳥の発光膜', quantity: 1 },
            { name: '深海の結晶', quantity: 1 },
          ],
          skill: [{ name: '閃光強化', level: 1 }],
        },
        {
          name: '	ツィツィメイル',
          materials: [
            { name: '眩鳥の皮', quantity: 3 },
            { name: '眩鳥の爪', quantity: 2 },
            { name: '眩鳥の発光膜', quantity: 2 },
            { name: 'ライトクリスタル', quantity: 1 },
          ],
          skill: [{ name: '体術', level: 1 }],
        },
        {
          name: 'ツィツィアーム',
          materials: [
            { name: '眩鳥の皮', quantity: 2 },
            { name: '眩鳥の発光膜', quantity: 1 },
            { name: '眩鳥の鱗', quantity: 3 },
            { name: '深海の結晶', quantity: 2 },
          ],
          skill: [{ name: '気絶耐性', level: 1 }],
        },
        {
          name: '	ツィツィコイル',
          materials: [
            { name: '眩鳥の皮', quantity: 2 },
            { name: '眩鳥の爪', quantity: 2 },
            { name: '深海の結晶', quantity: 2 },
          ],
          skill: [{ name: '広域化', level: 1 }],
        },
        {
          name: 'ツィツィグリーヴ',
          materials: [
            { name: '眩鳥の鱗', quantity: 2 },
            { name: '眩鳥の皮', quantity: 1 },
            { name: '眩鳥の爪', quantity: 1 },
          ],
          skill: [{ name: '睡眠耐性', level: 1 }],
        },
      ],
    },
    {
      name: 'ウルムー',
      armors: [
        {
          name: 'ウルムーヘルム',
          materials: [
            { name: '浮空竜の鱗', quantity: 2 },
            { name: '浮空竜の翼膜', quantity: 2 },
            { name: 'ゴム質の甲殻', quantity: 2 },
            { name: 'ライトクリスタル', quantity: 1 },
          ],
          skill: [{ name: 'スタミナ急速回復', level: 1 }],
        },
        {
          name: '	ウルムーメイル',
          materials: [
            { name: '浮空竜の鱗', quantity: 2 },
            { name: 'ゴム質の甲殻', quantity: 1 },
            { name: '浮空竜の毛皮', quantity: 2 },
            { name: 'サンゴの紅骨', quantity: 1 },
          ],
          skill: [{ name: '乗り名人', level: 1 }],
        },
        {
          name: 'ウルムーアーム',
          materials: [
            { name: '浮空竜の毛皮', quantity: 2 },
            { name: '浮空竜の鱗', quantity: 1 },
            { name: '浮空竜の翼膜', quantity: 1 },
          ],
          skill: [{ name: '砲術', level: 1 }],
        },
        {
          name: '	ウルムーコイル',
          materials: [
            { name: '浮空竜の毛皮', quantity: 2 },
            { name: '浮空竜の鱗', quantity: 1 },
            { name: 'ゴム質の甲殻', quantity: 1 },
          ],
          skill: [{ name: '精霊の加護', level: 1 }],
        },
        {
          name: 'ウルムーグリーヴ',
          materials: [
            { name: '浮空竜の鱗', quantity: 2 },
            { name: 'ゴム質の毛皮', quantity: 2 },
            { name: '浮空竜の翼膜', quantity: 1 },
            { name: 'サンゴの紅骨', quantity: 1 },
          ],
          skill: [{ name: '風圧耐性', level: 1 }],
        },
      ],
    },
    {
      name: 'ギルオス',
      armors: [
        {
          name: 'ギルオスヘルム',
          materials: [
            { name: '痺賊竜の鱗', quantity: 2 },
            { name: '痺賊竜の皮', quantity: 1 },
            { name: '痺賊竜の頭巾殻', quantity: 1 },
            { name: 'ギルオスの鱗', quantity: 3 },
          ],
          skill: [{ name: '笛吹き名人', level: 1 }],
        },
        {
          name: '	ギルオスメイル',
          materials: [
            { name: '痺賊竜の皮', quantity: 2 },
            { name: '痺賊竜の尻尾', quantity: 1 },
            { name: '痺賊竜の牙', quantity: 2 },
            { name: '麻痺袋', quantity: 2 },
          ],
          skill: [{ name: '麻痺耐性', level: 1 }],
        },
        {
          name: 'ギルオスアーム',
          materials: [
            { name: '痺賊竜の鱗', quantity: 2 },
            { name: '痺賊竜の皮', quantity: 1 },
            { name: 'ギルオスの麻痺牙', quantity: 2 },
          ],
          skill: [{ name: 'オトモへの采配', level: 1 }],
        },
        {
          name: '	ギルオスコイル',
          materials: [
            { name: '痺賊竜の皮', quantity: 2 },
            { name: '痺賊竜の尻尾', quantity: 1 },
            { name: '痺賊竜の頭巾殻', quantity: 1 },
            { name: 'ギルオスの皮', quantity: 3 },
          ],
          skill: [{ name: '瘴気環境適応', level: 1 }],
        },
        {
          name: 'ギルオスグリーヴ',
          materials: [
            { name: '痺賊竜の皮', quantity: 2 },
            { name: '痺賊竜の牙', quantity: 2 },
            { name: '痺賊竜の鱗', quantity: 2 },
            { name: '竜骨【中】', quantity: 4 },
          ],
          skill: [{ name: '麻痺属性強化', level: 1 }],
        },
      ],
    },
    {
      name: 'バルキン',
      armors: [
        {
          name: 'バルキンヘルム',
          materials: [
            { name: '骨鎚竜の甲殻', quantity: 3 },
            { name: '骨鎚竜の黒油殻', quantity: 2 },
            { name: '竜骨塊', quantity: 2 },
            { name: '骨鎚竜の骨髄', quantity: 1 },
          ],
          skill: [{ name: 'KO術', level: 1 }],
        },
        {
          name: '	バルキンメイル',
          materials: [
            { name: '骨鎚竜の鱗', quantity: 2 },
            { name: '骨鎚竜の甲殻', quantity: 1 },
            { name: '骨鎚竜の黒油殻', quantity: 1 },
            { name: '睡眠袋', quantity: 1 },
          ],
          skill: [{ name: '睡眠耐性', level: 1 }],
        },
        {
          name: 'バルキンアーム',
          materials: [
            { name: '骨鎚竜の鱗', quantity: 2 },
            { name: '骨鎚竜の甲殻', quantity: 1 },
            { name: '骨鎚竜の黒油殻', quantity: 1 },
            { name: '頑丈な骨', quantity: 3 },
          ],
          skill: [{ name: '睡眠属性強化', level: 1 }],
        },
        {
          name: '	バルキンコイル',
          materials: [
            { name: '骨鎚竜の鱗', quantity: 2 },
            { name: '骨鎚竜の黒油殻', quantity: 1 },
            { name: '睡眠袋', quantity: 1 },
            { name: '竜骨【大】', quantity: 3 },
          ],
          skill: [{ name: 'ガード性能', level: 1 }],
        },
        {
          name: 'バルキングリーヴ',
          materials: [
            { name: '骨鎚竜の甲殻', quantity: 2 },
            { name: '骨鎚竜の鱗', quantity: 2 },
            { name: '竜骨塊', quantity: 2 },
            { name: 'いびつな狂骨', quantity: 2 },
          ],
          skill: [{ name: '裂傷耐性', level: 1 }],
        },
      ],
    },
    {
      name: 'インゴット',
      armors: [
        {
          name: 'インゴットヘルム',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 2 },
            { name: '上竜骨', quantity: 1 },
            { name: '鉄鉱石', quantity: 8 },
            { name: 'マカライト鉱石', quantity: 3 },
          ],
          skill: [{ name: '雷属性攻撃強化', level: 1 }],
        },
        {
          name: '	インゴットメイル',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 2 },
            { name: '上竜骨', quantity: 1 },
            { name: '鉄鉱石', quantity: 8 },
            { name: 'マカライト鉱石', quantity: 3 },
          ],
          skill: [{ name: '雷耐性', level: 1 }],
        },
        {
          name: 'インゴットアーム',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 3 },
            { name: '上竜骨', quantity: 1 },
            { name: '深海の結晶', quantity: 3 },
            { name: 'ライトクリスタル', quantity: 1 },
          ],
          skill: [{ name: '体力増強', level: 1 }],
        },
        {
          name: '	インゴットコイル',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 3 },
            { name: '上竜骨', quantity: 1 },
            { name: '深海の結晶', quantity: 3 },
            { name: 'ライトクリスタル', quantity: 1 },
          ],
          skill: [{ name: '風圧耐性', level: 1 }],
        },
        {
          name: 'インゴットグリーヴ',
          materials: [
            { name: 'ドラグライト鉱石', quantity: 2 },
            { name: '上竜骨', quantity: 1 },
            { name: '大地の結晶', quantity: 3 },
            { name: 'マカライト鉱石', quantity: 3 },
          ],
          skill: [{ name: '防御', level: 1 }],
        },
      ],
    },
    {
      name: 'ブリゲイド',
      armors: [
        {
          name: 'ブリゲイドロポス',
          materials: [
            { name: '闘技王のコイン', quantity: 2 },
            { name: 'プケプケコイン', quantity: 2 },
            { name: 'クルルコイン', quantity: 2 },
            { name: '勇気の証', quantity: 1 },
          ],
          skill: [{ name: '雷属性攻撃強化', level: 1 }],
        },
        {
          name: '	ブリゲイドスーツ',
          materials: [
            { name: '闘技王のコイン', quantity: 3 },
            { name: 'プケプケコイン', quantity: 2 },
            { name: 'レイアコイン', quantity: 4 },
            { name: 'ライトクリスタル', quantity: 1 },
          ],
          skill: [{ name: '雷耐性', level: 1 }],
        },
        {
          name: 'ブリゲイドアーム',
          materials: [
            { name: '闘技王のコイン', quantity: 2 },
            { name: 'プケプケコイン', quantity: 2 },
            { name: 'クルルコイン', quantity: 2 },
            { name: '勇気の証', quantity: 1 },
          ],
          skill: [{ name: '体力増強', level: 1 }],
        },
        {
          name: '	ブリゲイドコイル',
          materials: [
            { name: '闘技王のコイン', quantity: 2 },
            { name: 'プケプケコイン', quantity: 2 },
            { name: 'クルルコイン', quantity: 2 },
            { name: '勇気の証', quantity: 1 },
          ],
          skill: [{ name: '風圧耐性', level: 1 }],
        },
        {
          name: 'ブリゲイドブーツ',
          materials: [
            { name: '闘技王のコイン', quantity: 3 },
            { name: 'プケプケコイン', quantity: 2 },
            { name: 'レイアコイン', quantity: 4 },
            { name: 'ライトクリスタル', quantity: 1 },
          ],
          skill: [{ name: '防御', level: 1 }],
        },
      ],
    },
    {
      name: 'ギエナ',
      armors: [
        {
          name: 'ギエナヘルム',
          materials: [
            { name: '風漂竜の鱗', quantity: 2 },
            { name: '風漂竜の皮', quantity: 1 },
            { name: '風漂竜の爪', quantity: 1 },
            { name: 'シャムオスの鱗', quantity: 2 },
          ],
          skill: [{ name: '精霊の加護', level: 1 }],
        },
        {
          name: '	ギエナメイル',
          materials: [
            { name: '風漂竜の皮', quantity: 3 },
            { name: '風漂竜の爪', quantity: 2 },
            { name: '風漂竜の翼膜', quantity: 2 },
            { name: '風漂竜の逆鱗', quantity: 1 },
          ],
          skill: [{ name: '回避性能', level: 1 }],
        },
        {
          name: 'ギエナアーム',
          materials: [
            { name: '風漂竜の皮', quantity: 2 },
            { name: '風漂竜の鱗', quantity: 2 },
            { name: '風漂竜の尾膜', quantity: 1 },
            { name: '氷結袋', quantity: 1 },
          ],
          skill: [{ name: '飛燕', level: 1 }],
        },
        {
          name: '	ギエナコイル',
          materials: [
            { name: '風漂竜の皮', quantity: 2 },
            { name: '風漂竜の鱗', quantity: 2 },
            { name: '氷結袋', quantity: 1 },
            { name: 'シャムオスの皮', quantity: 2 },
          ],
          skill: [{ name: '氷属性攻撃強化', level: 1 }],
        },
        {
          name: 'ギエナグリーヴ',
          materials: [
            { name: '風漂竜の鱗', quantity: 2 },
            { name: '風漂竜の皮', quantity: 1 },
            { name: '風漂竜の爪', quantity: 1 },
            { name: 'ドラグライト鉱石', quantity: 2 },
          ],
          skill: [{ name: '氷耐性', level: 1 }],
        },
      ],
    },
    {
      name: 'ガロン',
      armors: [
        {
          name: 'ガロンヘルム',
          materials: [
            { name: '惨爪竜の鱗', quantity: 2 },
            { name: '惨爪竜の硬筋', quantity: 1 },
            { name: '惨爪竜の爪', quantity: 1 },
            { name: 'いびつな狂骨', quantity: 1 },
          ],
          skill: [{ name: '裂傷耐性', level: 1 }],
        },
        {
          name: '	ガロンメイル',
          materials: [
            { name: '惨爪竜の硬筋', quantity: 2 },
            { name: '惨爪竜の鱗', quantity: 2 },
            { name: '惨爪竜の牙', quantity: 1 },
            { name: 'カンタロスの甲殻', quantity: 3 },
          ],
          skill: [{ name: '砥石使用高速化', level: 1 }],
        },
        {
          name: 'ガロンアーム',
          materials: [
            { name: '惨爪竜の硬筋', quantity: 2 },
            { name: '惨爪竜の鱗', quantity: 2 },
            { name: '風漂竜の尾膜', quantity: 1 },
            { name: 'カンタロスの羽', quantity: 2 },
          ],
          skill: [{ name: '体術', level: 1 }],
        },
        {
          name: '	ガロンコイル',
          materials: [
            { name: '惨爪竜の硬筋', quantity: 3 },
            { name: '惨爪竜の爪', quantity: 2 },
            { name: '惨爪竜の牙', quantity: 2 },
            { name: '惨爪竜の逆鱗', quantity: 1 },
          ],
          skill: [{ name: '見切り', level: 1 }],
        },
        {
          name: 'ガロングリーヴ',
          materials: [
            { name: '惨爪竜の鱗', quantity: 2 },
            { name: '惨爪竜の硬筋', quantity: 1 },
            { name: '惨爪竜の爪', quantity: 1 },
            { name: 'ドラグライト鉱石', quantity: 2 },
          ],
          skill: [{ name: '納刀術', level: 1 }],
        },
      ],
    },
    {
      name: 'レウス',
      armors: [
        {
          name: 'レウスヘルム',
          materials: [
            { name: '火竜の鱗', quantity: 2 },
            { name: '火竜の甲殻', quantity: 2 },
            { name: '火竜の翼爪', quantity: 2 },
            { name: '火竜の骨髄', quantity: 1 },
          ],
          skill: [{ name: '攻撃', level: 1 }],
        },
        {
          name: '	レウスメイル',
          materials: [
            { name: '火竜の鱗', quantity: 2 },
            { name: '火竜の甲殻', quantity: 4 },
            { name: '火竜の翼膜', quantity: 2 },
            { name: '火竜の逆鱗', quantity: 1 },
          ],
          skill: [{ name: '弱点特攻', level: 1 }],
        },
        {
          name: 'レウスアーム',
          materials: [
            { name: '火竜の甲殻', quantity: 2 },
            { name: '火竜の翼膜', quantity: 1 },
            { name: '火炎袋', quantity: 2 },
            { name: '上竜骨', quantity: 2 },
          ],
          skill: [{ name: '火耐性', level: 1 }],
        },
        {
          name: '	レウスコイル',
          materials: [
            { name: '火竜の鱗', quantity: 2 },
            { name: '火竜の甲殻', quantity: 2 },
            { name: '火竜の翼膜', quantity: 1 },
            { name: '上竜骨', quantity: 3 },
          ],
          skill: [{ name: '火属性攻撃強化', level: 1 }],
        },
        {
          name: 'レウスグリーヴ',
          materials: [
            { name: '火竜の甲殻', quantity: 3 },
            { name: '火竜の鱗', quantity: 2 },
            { name: '火竜の翼爪', quantity: 2 },
            { name: '火竜の尻尾', quantity: 1 },
          ],
          skill: [{ name: 'ジャンプ鉄人', level: 1 }],
        },
      ],
    },
    {
      name: 'ディアブロ',
      armors: [
        {
          name: 'ディアブロヘルム',
          materials: [
            { name: '角竜の背甲', quantity: 3 },
            { name: '角竜の牙', quantity: 2 },
            { name: 'ねじれた角', quantity: 1 },
            { name: '角竜の骨髄', quantity: 1 },
          ],
          skill: [{ name: '抜刀術【技】', level: 1 }],
        },
        {
          name: '	ディアブロメイル',
          materials: [
            { name: '角竜の甲殻', quantity: 2 },
            { name: '角竜の背甲', quantity: 1 },
            { name: 'ねじれた角', quantity: 2 },
            { name: '上竜骨', quantity: 3 },
          ],
          skill: [{ name: 'KO術', level: 1 }],
        },
        {
          name: 'ディアブロアーム',
          materials: [
            { name: '角竜の背甲', quantity: 2 },
            { name: '角竜の甲殻', quantity: 2 },
            { name: 'ねじれた尾甲角', quantity: 1 },
            { name: 'ライトクリスタル', quantity: 1 },
          ],
          skill: [{ name: '火事場力', level: 1 }],
        },
        {
          name: '	ディアブロコイル',
          materials: [
            { name: '角竜の甲殻', quantity: 2 },
            { name: '角竜の背甲', quantity: 1 },
            { name: '角竜の牙', quantity: 1 },
            { name: '上竜骨', quantity: 2 },
          ],
          skill: [{ name: 'ランナー', level: 1 }],
        },
        {
          name: 'ディアブログリーヴ',
          materials: [
            { name: '角竜の背甲', quantity: 2 },
            { name: '角竜の甲殻', quantity: 2 },
            { name: 'ねじれた角', quantity: 1 },
            { name: '上竜骨', quantity: 3 },
          ],
          skill: [{ name: '耐震', level: 1 }],
        },
      ],
    },
    {
      name: 'キリン',
      armors: [
        {
          name: 'キリンホーン',
          materials: [
            { name: '幻獣の皮', quantity: 2 },
            { name: '幻獣の尾', quantity: 2 },
            { name: '幻獣の雷角', quantity: 3 },
            { name: 'ライトクリスタル', quantity: 1 },
          ],
          skill: [{ name: 'ランナー', level: 1 }],
        },
        {
          name: '	キリンベスト',
          materials: [
            { name: '幻獣の皮', quantity: 2 },
            { name: '幻獣のたてがみ', quantity: 2 },
            { name: '深海の結晶', quantity: 4 },
            { name: 'サンゴの紅骨', quantity: 2 },
          ],
          skill: [{ name: '精霊の加護', level: 1 }],
        },
        {
          name: 'キリンアームロング',
          materials: [
            { name: '幻獣の皮', quantity: 3 },
            { name: '幻獣のたてがみ', quantity: 2 },
            { name: 'ゴム質の甲殻', quantity: 2 },
            { name: 'ライトクリスタル', quantity: 1 },
          ],
          skill: [{ name: '属性やられ耐性', level: 1 }],
        },
        {
          name: '	キリンフープ',
          materials: [
            { name: '幻獣の皮', quantity: 2 },
            { name: '幻獣の雷角', quantity: 1 },
            { name: '幻獣の尾', quantity: 1 },
            { name: '電気袋', quantity: 1 },
          ],
          skill: [{ name: '雷属性攻撃強化', level: 1 }],
        },
        {
          name: 'キリンレガース',
          materials: [
            { name: '幻獣の皮', quantity: 2 },
            { name: '幻獣の雷角', quantity: 2 },
            { name: 'ゴム質の甲殻', quantity: 2 },
          ],
          skill: [{ name: '雷耐性', level: 1 }],
        },
      ],
    },
  ],
}

export default lower
