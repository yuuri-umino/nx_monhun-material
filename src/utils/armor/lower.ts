import { ArmorType } from './materialsTypes'

const longSword: ArmorType = {
  type: '下位',
  derivations: [
    {
      name: 'レザーシリーズ',
      armors: [
        {
          name: 'レザーヘッド',
          materials: [{ name: '鉄鉱石', quantity: 2 }],
          skill: [{ name: '鉄鉱石', level: 2 }],
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
      name: 'チェーンシリーズ',
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
      name: 'ハンターシリーズ',
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
      name: 'ボーンシリーズ',
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
      name: 'ランゴシリーズ',
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
      name: 'ジャグラスシリーズ',
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
            { name: '賊竜の皮', quantity: 2 },
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
      name: 'クルルシリーズ',
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
          skill: [{ name: '採集の達人', level: 1 }],
        },
        {
          name: 'クルルアーム',
          materials: [
            { name: '掻鳥の鱗', quantity: 2 },
            { name: '掻鳥の皮', quantity: 1 },
            { name: '鉄鉱石', quantity: 3 },
          ],
          skill: [{ name: '採集の達人', level: 1 }],
        },
        {
          name: '	クルルコイル',
          materials: [
            { name: '掻鳥の皮', quantity: 2 },
            { name: '掻鳥のクチバシ', quantity: 1 },
            { name: '翼竜の皮', quantity: 2 },
          ],
          skill: [{ name: '採集の達人', level: 1 }],
        },
        {
          name: 'クルルグリーヴ',
          materials: [
            { name: '掻鳥の皮', quantity: 2 },
            { name: '掻鳥の鱗', quantity: 3 },
            { name: '翼竜の皮', quantity: 2 },
          ],
          skill: [{ name: '採集の達人', level: 1 }],
        },
      ],
    },
    {
      name: 'アロイシリーズ',
      armors: [
        {
          name: 'アロイヘルム',
          materials: [
            { name: 'マカライト鉱石', quantity: 4 },
            { name: '鉄鉱石', quantity: 4 },
            { name: '大地の結晶', quantity: 2 },
          ],
          skill: [{ name: '採集の達人', level: 1 }],
        },
        {
          name: '	アロイメイル',
          materials: [
            { name: 'マカライト鉱石', quantity: 3 },
            { name: '鉄鉱石', quantity: 6 },
            { name: '大地の結晶', quantity: 1 },
          ],
          skill: [{ name: '採集の達人', level: 1 }],
        },
        {
          name: 'アロイアーム',
          materials: [
            { name: 'マカライト鉱石', quantity: 3 },
            { name: '鉄鉱石', quantity: 6 },
            { name: '大地の結晶', quantity: 1 },
          ],
          skill: [{ name: '採集の達人', level: 1 }],
        },
        {
          name: '	アロイコイル',
          materials: [
            { name: 'マカライト鉱石', quantity: 4 },
            { name: '鉄鉱石', quantity: 4 },
            { name: '大地の結晶', quantity: 2 },
          ],
          skill: [{ name: '採集の達人', level: 1 }],
        },
        {
          name: 'アロイグリーヴ',
          materials: [
            { name: 'マカライト鉱石', quantity: 3 },
            { name: '鉄鉱石', quantity: 6 },
            { name: '大地の結晶', quantity: 1 },
          ],
          skill: [{ name: '採集の達人', level: 1 }],
        },
      ],
    },
    {
      name: 'プケプケシリーズ',
      armors: [
        {
          name: 'プケプケヘルム',
          materials: [
            { name: '毒妖鳥の甲殻', quantity: 2 },
            { name: '毒妖鳥の尻尾', quantity: 1 },
            { name: '毒妖鳥の羽根', quantity: 2 },
            { name: 'マカライト鉱石', quantity: 2 },
          ],
          skill: [{ name: '採集の達人', level: 1 }],
        },
        {
          name: '	プケプケメイル',
          materials: [
            { name: '毒妖鳥の鱗', quantity: 2 },
            { name: '毒妖鳥の甲殻', quantity: 1 },
            { name: '鉄鉱石', quantity: 3 },
          ],
          skill: [{ name: '採集の達人', level: 1 }],
        },
        {
          name: 'プケプケアーム',
          materials: [
            { name: '毒妖鳥の鱗', quantity: 2 },
            { name: '毒妖鳥の甲殻', quantity: 1 },
            { name: '毒袋', quantity: 3 },
          ],
          skill: [{ name: '採集の達人', level: 1 }],
        },
        {
          name: '	プケプケコイル',
          materials: [
            { name: '毒妖鳥の甲殻', quantity: 3 },
            { name: '毒妖鳥の尻尾', quantity: 1 },
            { name: '毒妖鳥の喉袋', quantity: 1 },
            { name: '毒袋', quantity: 1 },
          ],
          skill: [{ name: '採集の達人', level: 1 }],
        },
        {
          name: 'プケプケグリーヴ',
          materials: [
            { name: '毒妖鳥の甲殻', quantity: 2 },
            { name: '毒妖鳥の喉袋', quantity: 1 },
            { name: '毒妖鳥の鱗', quantity: 2 },
            { name: '竜骨【中】', quantity: 1 },
          ],
          skill: [{ name: '採集の達人', level: 1 }],
        },
      ],
    },
    {
      name: 'ボロスシリーズ',
      armors: [
        {
          name: 'ボロスヘルム',
          materials: [
            { name: '土砂竜の背甲', quantity: 2 },
            { name: '土砂竜の尻尾', quantity: 1 },
            { name: '土砂竜の爪', quantity: 2 },
            { name: 'ケストドンの甲殻', quantity: 2 },
          ],
          skill: [{ name: '採集の達人', level: 1 }],
        },
        {
          name: '	ボロスメイル',
          materials: [
            { name: '土砂竜の甲殻', quantity: 2 },
            { name: '土砂竜の背甲', quantity: 1 },
            { name: '土砂竜の爪', quantity: 1 },
            { name: '強固な岩骨', quantity: 1 },
          ],
          skill: [{ name: '採集の達人', level: 1 }],
        },
        {
          name: 'ボロスアーム',
          materials: [
            { name: '土砂竜の背甲', quantity: 3 },
            { name: '土砂竜の尻尾', quantity: 1 },
            { name: '土砂竜の頭殻', quantity: 1 },
            { name: 'ケストドンの甲殻', quantity: 1 },
          ],
          skill: [{ name: '採集の達人', level: 1 }],
        },
        {
          name: '	ボロスコイル',
          materials: [
            { name: '土砂竜の甲殻', quantity: 2 },
            { name: '土砂竜の背甲', quantity: 1 },
            { name: '肥沃なドロ', quantity: 2 },
          ],
          skill: [{ name: '採集の達人', level: 1 }],
        },
        {
          name: 'ボロスグリーヴ',
          materials: [
            { name: '土砂竜の背甲', quantity: 2 },
            { name: '土砂竜の頭殻', quantity: 1 },
            { name: '土砂竜の甲殻', quantity: 1 },
            { name: '肥沃なドロ', quantity: 2 },
          ],
          skill: [{ name: '採集の達人', level: 1 }],
        },
      ],
    },
    {
      name: 'ジュラシリーズ',
      armors: [
        {
          name: 'ジュラヘルム',
          materials: [
            { name: '泥魚竜の鱗', quantity: 2 },
            { name: '泥魚竜の甲殻', quantity: 1 },
            { name: '泥魚竜のヒレ', quantity: 1 },
            { name: '咬魚の皮', quantity: 3 },
          ],
          skill: [{ name: '採集の達人', level: 1 }],
        },
        {
          name: '	ジュラメイル',
          materials: [
            { name: '泥魚竜の甲殻', quantity: 2 },
            { name: '泥魚竜のヒレ', quantity: 1 },
            { name: '泥魚竜の牙', quantity: 1 },
            { name: '水袋', quantity: 1 },
          ],
          skill: [{ name: '採集の達人', level: 1 }],
        },
        {
          name: 'ジュラアーム',
          materials: [
            { name: '泥魚竜の甲殻', quantity: 2 },
            { name: '泥魚竜の牙', quantity: 1 },
            { name: '咬魚のヒゲ', quantity: 2 },
          ],
          skill: [{ name: '採集の達人', level: 1 }],
        },
        {
          name: '	ジュラコイル',
          materials: [
            { name: '泥魚竜の鱗', quantity: 2 },
            { name: '泥魚竜の甲殻', quantity: 1 },
            { name: '水袋', quantity: 1 },
          ],
          skill: [{ name: '採集の達人', level: 1 }],
        },
        {
          name: 'ジュラグリーヴ',
          materials: [
            { name: '泥魚竜の甲殻', quantity: 3 },
            { name: '泥魚竜の牙', quantity: 2 },
            { name: '泥魚竜のヒレ', quantity: 2 },
            { name: '大地の結晶', quantity: 3 },
          ],
          skill: [{ name: '採集の達人', level: 1 }],
        },
      ],
    },
  ],
}

export default longSword
