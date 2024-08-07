import { ArmorType } from './materialsTypes'

const topper: ArmorType = {
  type: '上位',
  derivations: [
    {
      name: 'レザーα',
      armors: [
        {
          name: 'レザーヘッドα',
          materials: [
            { name: 'カブレライト鉱石', quantity: 3 },
            { name: '上質な毛皮', quantity: 1 },
          ],
          skill: [{ name: '腹減り耐性', level: 2 }],
        },
        {
          name: 'レザーベストα',
          materials: [
            { name: 'カブレライト鉱石', quantity: 2 },
            { name: '上質な毛皮', quantity: 1 },
          ],
          skill: [{ name: '火耐性', level: 1 }],
        },
        {
          name: 'レザーグラブα',
          materials: [
            { name: 'カブレライト鉱石', quantity: 2 },
            { name: '上質な毛皮', quantity: 1 },
          ],
          skill: [{ name: '回復速度', level: 1 }],
        },
        {
          name: 'レザーベルトα',
          materials: [
            { name: 'カブレライト鉱石', quantity: 2 },
            { name: '上質な毛皮', quantity: 1 },
          ],
          skill: [{ name: 'スタミナ急速回復', level: 1 }],
        },
        {
          name: 'レザーパンツα',
          materials: [
            { name: 'カブレライト鉱石', quantity: 2 },
            { name: '上質な毛皮', quantity: 1 },
          ],
          skill: [{ name: 'クライマー', level: 1 }],
        },
      ],
    },
    {
      name: 'レザーβ',
      armors: [
        {
          name: 'レザーヘッドβ',
          materials: [
            { name: 'カブレライト鉱石', quantity: 3 },
            { name: '上質な毛皮', quantity: 1 },
          ],
          skill: [{ name: '腹減り耐性', level: 1 }],
        },
        {
          name: 'レザーベストβ',
          materials: [
            { name: 'カブレライト鉱石', quantity: 2 },
            { name: '上質な毛皮', quantity: 1 },
          ],
          skill: [],
        },
        {
          name: 'レザーグラブβ',
          materials: [
            { name: 'カブレライト鉱石', quantity: 2 },
            { name: '上質な毛皮', quantity: 1 },
          ],
          skill: [],
        },
        {
          name: 'レザーベルトβ',
          materials: [
            { name: 'カブレライト鉱石', quantity: 2 },
            { name: '上質な毛皮', quantity: 1 },
          ],
          skill: [],
        },
        {
          name: 'レザーパンツβ',
          materials: [
            { name: 'カブレライト鉱石', quantity: 2 },
            { name: '上質な毛皮', quantity: 1 },
          ],
          skill: [],
        },
      ],
    },
    {
      name: 'チェーンα',
      armors: [
        {
          name: 'チェーンヘッドα',
          materials: [
            { name: 'カブレライト鉱石', quantity: 3 },
            { name: 'ドラグライト鉱石', quantity: 2 },
          ],
          skill: [
            { name: '採集の達人', level: 1 },
            { name: 'ガード性能', level: 1 },
          ],
        },
        {
          name: '	チェーンベストα',
          materials: [
            { name: 'カブレライト鉱石', quantity: 2 },
            { name: 'ドラグライト鉱石', quantity: 2 },
          ],
          skill: [{ name: '水耐性', level: 1 }],
        },
        {
          name: 'チェーングラブα',
          materials: [
            { name: 'カブレライト鉱石', quantity: 2 },
            { name: 'ドラグライト鉱石', quantity: 2 },
          ],
          skill: [{ name: '回復速度', level: 1 }],
        },
        {
          name: 'チェーンベルトα',
          materials: [
            { name: 'カブレライト鉱石', quantity: 2 },
            { name: 'ドラグライト鉱石', quantity: 2 },
          ],
          skill: [{ name: '納刀術', level: 1 }],
        },
        {
          name: 'チェーンパンツα',
          materials: [
            { name: 'カブレライト鉱石', quantity: 2 },
            { name: 'ドラグライト鉱石', quantity: 2 },
          ],
          skill: [{ name: '体力回復量UP', level: 1 }],
        },
      ],
    },
    {
      name: 'チェーンβ',
      armors: [
        {
          name: 'チェーンヘッドβ',
          materials: [
            { name: 'カブレライト鉱石', quantity: 3 },
            { name: 'ドラグライト鉱石', quantity: 2 },
          ],
          skill: [{ name: '採集の達人', level: 1 }],
        },
        {
          name: '	チェーンベストβ',
          materials: [
            { name: 'カブレライト鉱石', quantity: 2 },
            { name: 'ドラグライト鉱石', quantity: 2 },
          ],
          skill: [],
        },
        {
          name: 'チェーングラブβ',
          materials: [
            { name: 'カブレライト鉱石', quantity: 2 },
            { name: 'ドラグライト鉱石', quantity: 2 },
          ],
          skill: [],
        },
        {
          name: 'チェーンベルトβ',
          materials: [
            { name: 'カブレライト鉱石', quantity: 2 },
            { name: 'ドラグライト鉱石', quantity: 2 },
          ],
          skill: [],
        },
        {
          name: 'チェーンパンツβ',
          materials: [
            { name: 'カブレライト鉱石', quantity: 2 },
            { name: 'ドラグライト鉱石', quantity: 2 },
          ],
          skill: [],
        },
      ],
    },
    {
      name: 'ハンターα',
      armors: [
        {
          name: 'ハンターヘルムα',
          materials: [
            { name: 'ジャグラスの上皮', quantity: 3 },
            { name: 'ジャグラスの上鱗', quantity: 4 },
          ],
          skill: [
            { name: '導蟲反応速度UP', level: 1 },
            { name: '研究者', level: 1 },
          ],
        },
        {
          name: 'ハンターメイルα',
          materials: [
            { name: 'ジャグラスの上皮', quantity: 3 },
            { name: '上質な堅骨', quantity: 2 },
          ],
          skill: [{ name: 'スリンガー装填数UP', level: 2 }],
        },
        {
          name: 'ハンターアームα',
          materials: [
            { name: 'ジャグラスの上皮', quantity: 2 },
            { name: 'ジャグラスの上鱗', quantity: 4 },
          ],
          skill: [{ name: '潜伏', level: 2 }],
        },
        {
          name: 'ハンターコイルα',
          materials: [
            { name: 'ジャグラスの上皮', quantity: 2 },
            { name: '上質な堅骨', quantity: 3 },
          ],
          skill: [
            { name: '追跡の達人', level: 1 },
            { name: '採集の達人', level: 1 },
          ],
        },
        {
          name: 'ハンターグリーヴα',
          materials: [
            { name: 'ジャグラスの上皮', quantity: 2 },
            { name: '上質な堅骨', quantity: 3 },
          ],
          skill: [
            { name: 'スリンガー装填数UP', level: 1 },
            { name: '追跡の達人', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'ハンターβ',
      armors: [
        {
          name: 'ハンターヘルムβ',
          materials: [
            { name: 'ジャグラスの上皮', quantity: 3 },
            { name: 'ジャグラスの上鱗', quantity: 4 },
          ],
          skill: [{ name: '導蟲反応速度UP', level: 1 }],
        },
        {
          name: 'ハンターメイルβ',
          materials: [
            { name: 'ジャグラスの上皮', quantity: 3 },
            { name: '上質な堅骨', quantity: 2 },
          ],
          skill: [{ name: 'スリンガー装填数UP', level: 1 }],
        },
        {
          name: 'ハンターアームβ',
          materials: [
            { name: 'ジャグラスの上皮', quantity: 2 },
            { name: 'ジャグラスの上鱗', quantity: 4 },
          ],
          skill: [{ name: '潜伏', level: 1 }],
        },
        {
          name: 'ハンターコイルβ',
          materials: [
            { name: 'ジャグラスの上皮', quantity: 2 },
            { name: '上質な堅骨', quantity: 3 },
          ],
          skill: [{ name: '採集の達人', level: 1 }],
        },
        {
          name: 'ハンターグリーヴβ',
          materials: [
            { name: 'ジャグラスの上皮', quantity: 2 },
            { name: '上質な堅骨', quantity: 3 },
          ],
          skill: [{ name: '追跡の達人', level: 1 }],
        },
      ],
    },
    {
      name: 'ボーンα',
      armors: [
        {
          name: 'ボーンヘルムα',
          materials: [
            { name: '上質な堅骨', quantity: 3 },
            { name: '上竜骨', quantity: 2 },
            { name: '上竜骨', quantity: 2 },
          ],
          skill: [
            { name: '体力増強', level: 1 },
            { name: '昆虫標本の達人', level: 1 },
          ],
        },
        {
          name: '	ボーンメイルα',
          materials: [
            { name: '上質な堅骨', quantity: 2 },
            { name: '上竜骨', quantity: 2 },
            { name: '竜骨【大】', quantity: 3 },
          ],
          skill: [{ name: '攻撃', level: 2 }],
        },
        {
          name: 'ボーンアームα',
          materials: [
            { name: '上質な堅骨', quantity: 3 },
            { name: '上竜骨', quantity: 2 },
            { name: 'サンゴの紅骨', quantity: 2 },
          ],
          skill: [
            { name: '攻撃', level: 1 },
            { name: 'KO術', level: 1 },
          ],
        },
        {
          name: '	ボーンコイルα',
          materials: [
            { name: '上質な堅骨', quantity: 2 },
            { name: '上竜骨', quantity: 2 },
            { name: '太古の大骨', quantity: 3 },
          ],
          skill: [
            { name: '笛吹き名人', level: 1 },
            { name: '釣り名人', level: 1 },
          ],
        },
        {
          name: 'ボーングリーヴα',
          materials: [
            { name: '上質な堅骨', quantity: 2 },
            { name: '上竜骨', quantity: 2 },
            { name: '強固な岩骨', quantity: 3 },
          ],
          skill: [{ name: '昆虫標本の達人', level: 2 }],
        },
      ],
    },
    {
      name: 'ボーンβ',
      armors: [
        {
          name: 'ボーンヘルムβ',
          materials: [
            { name: '上質な堅骨', quantity: 3 },
            { name: '上竜骨', quantity: 2 },
            { name: '上竜骨', quantity: 2 },
          ],
          skill: [{ name: '体力増強', level: 1 }],
        },
        {
          name: '	ボーンメイルβ',
          materials: [
            { name: '上質な堅骨', quantity: 2 },
            { name: '上竜骨', quantity: 2 },
            { name: '竜骨【大】', quantity: 3 },
          ],
          skill: [{ name: '攻撃', level: 1 }],
        },
        {
          name: 'ボーンアームβ',
          materials: [
            { name: '上質な堅骨', quantity: 3 },
            { name: '上竜骨', quantity: 2 },
            { name: 'サンゴの紅骨', quantity: 2 },
          ],
          skill: [{ name: 'KO術', level: 1 }],
        },
        {
          name: '	ボーンコイルβ',
          materials: [
            { name: '上質な堅骨', quantity: 2 },
            { name: '上竜骨', quantity: 2 },
            { name: '太古の大骨', quantity: 3 },
          ],
          skill: [{ name: '笛吹き名人', level: 1 }],
        },
        {
          name: 'ボーングリーヴβ',
          materials: [
            { name: '上質な堅骨', quantity: 2 },
            { name: '上竜骨', quantity: 2 },
            { name: '強固な岩骨', quantity: 3 },
          ],
          skill: [{ name: '昆虫標本の達人', level: 1 }],
        },
      ],
    },
    {
      name: 'アロイα',
      armors: [
        {
          name: 'アロイヘルムα',
          materials: [
            { name: 'カブレライト鉱石', quantity: 3 },
            { name: 'ドラグライト鉱石', quantity: 6 },
            { name: '龍脈の結晶', quantity: 3 },
            { name: 'マカライト鉱石', quantity: 5 },
          ],
          skill: [
            { name: '風圧耐性', level: 1 },
            { name: '防御', level: 1 },
          ],
        },
        {
          name: '	アロイメイルα',
          materials: [
            { name: 'カブレライト鉱石', quantity: 2 },
            { name: 'ドラグライト鉱石', quantity: 4 },
            { name: '深海の結晶', quantity: 4 },
            { name: 'マカライト鉱石', quantity: 5 },
          ],
          skill: [{ name: '水耐性', level: 2 }],
        },
        {
          name: 'アロイアームα',
          materials: [
            { name: 'カブレライト鉱石', quantity: 2 },
            { name: 'ドラグライト鉱石', quantity: 4 },
            { name: '大地の結晶', quantity: 4 },
            { name: 'マカライト鉱石', quantity: 5 },
          ],
          skill: [
            { name: '防御', level: 1 },
            { name: '砥石使用高速化', level: 1 },
          ],
        },
        {
          name: '	アロイコイルα',
          materials: [
            { name: 'カブレライト鉱石', quantity: 3 },
            { name: 'ドラグライト鉱石', quantity: 6 },
            { name: '龍脈の結晶', quantity: 3 },
            { name: 'マカライト鉱石', quantity: 5 },
          ],
          skill: [
            { name: '水耐性+', level: 1 },
            { name: '毒耐性', level: 1 },
          ],
        },
        {
          name: 'アロイグリーヴα',
          materials: [
            { name: 'カブレライト鉱石', quantity: 2 },
            { name: 'ドラグライト鉱石', quantity: 4 },
            { name: 'ライトクリスタル', quantity: 1 },
            { name: 'マカライト鉱石', quantity: 5 },
          ],
          skill: [{ name: '砥石使用高速化', level: 2 }],
        },
      ],
    },
    {
      name: 'アロイβ',
      armors: [
        {
          name: 'アロイヘルムβ',
          materials: [
            { name: 'カブレライト鉱石', quantity: 3 },
            { name: 'ドラグライト鉱石', quantity: 6 },
            { name: '龍脈の結晶', quantity: 3 },
            { name: 'マカライト鉱石', quantity: 5 },
          ],
          skill: [{ name: '風圧耐性', level: 1 }],
        },
        {
          name: '	アロイメイルβ',
          materials: [
            { name: 'カブレライト鉱石', quantity: 2 },
            { name: 'ドラグライト鉱石', quantity: 4 },
            { name: '深海の結晶', quantity: 4 },
            { name: 'マカライト鉱石', quantity: 5 },
          ],
          skill: [{ name: '水耐性', level: 1 }],
        },
        {
          name: 'アロイアームβ',
          materials: [
            { name: 'カブレライト鉱石', quantity: 2 },
            { name: 'ドラグライト鉱石', quantity: 4 },
            { name: '大地の結晶', quantity: 4 },
            { name: 'マカライト鉱石', quantity: 5 },
          ],
          skill: [{ name: '防御', level: 1 }],
        },
        {
          name: '	アロイコイルβ',
          materials: [
            { name: 'カブレライト鉱石', quantity: 3 },
            { name: 'ドラグライト鉱石', quantity: 6 },
            { name: '龍脈の結晶', quantity: 3 },
            { name: 'マカライト鉱石', quantity: 5 },
          ],
          skill: [{ name: '毒耐性', level: 1 }],
        },
        {
          name: 'アロイグリーヴβ',
          materials: [
            { name: 'カブレライト鉱石', quantity: 2 },
            { name: 'ドラグライト鉱石', quantity: 4 },
            { name: 'ライトクリスタル', quantity: 1 },
            { name: 'マカライト鉱石', quantity: 5 },
          ],
          skill: [{ name: '砥石使用高速化', level: 1 }],
        },
      ],
    },
    {
      name: 'オウビートα',
      armors: [
        {
          name: 'オウビートテスタα',
          materials: [
            { name: 'オオツノアゲハ', quantity: 1 },
            { name: 'カブレライト鉱石', quantity: 2 },
            { name: 'モンスターの濃汁', quantity: 2 },
            { name: '爆炎袋', quantity: 3 },
          ],
          skill: [
            { name: '回避性能', level: 2 },
            { name: '植生学', level: 1 },
          ],
        },
        {
          name: '	オウビートペットα',
          materials: [
            { name: 'オオツノアゲハ', quantity: 1 },
            { name: '龍脈の結晶', quantity: 2 },
            { name: 'ランゴスタの堅殻', quantity: 3 },
            { name: '猛毒袋', quantity: 2 },
          ],
          skill: [
            { name: '植生学', level: 1 },
            { name: '納刀術', level: 2 },
          ],
        },
        {
          name: 'オウビートマーノα',
          materials: [
            { name: 'オオツノアゲハ', quantity: 1 },
            { name: '龍脈の結晶', quantity: 2 },
            { name: 'モンスターの濃汁', quantity: 2 },
            { name: '大水袋', quantity: 2 },
          ],
          skill: [
            { name: '植生学', level: 2 },
            { name: '飛び込み', level: 1 },
          ],
        },
        {
          name: '	オウビートアンカα',
          materials: [
            { name: 'オオツノアゲハ', quantity: 1 },
            { name: '龍脈の結晶', quantity: 2 },
            { name: 'ランゴスタの堅殻', quantity: 3 },
            { name: '電撃袋', quantity: 2 },
          ],
          skill: [
            { name: '納刀術', level: 1 },
            { name: 'ハニーハンター', level: 1 },
          ],
        },
        {
          name: 'オウビートガンバα',
          materials: [
            { name: 'オオツノアゲハ', quantity: 1 },
            { name: 'カブレライト鉱石', quantity: 2 },
            { name: 'モンスターの濃汁', quantity: 2 },
            { name: '強力麻痺袋', quantity: 2 },
          ],
          skill: [
            { name: '回避性能', level: 1 },
            { name: '探究者の幸運', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'オウビートβ',
      armors: [
        {
          name: 'オウビートテスタβ',
          materials: [
            { name: 'オオツノアゲハ', quantity: 1 },
            { name: 'カブレライト鉱石', quantity: 2 },
            { name: 'モンスターの濃汁', quantity: 2 },
            { name: '爆炎袋', quantity: 3 },
          ],
          skill: [{ name: '回避性能', level: 2 }],
        },
        {
          name: '	オウビートペットβ',
          materials: [
            { name: 'オオツノアゲハ', quantity: 1 },
            { name: '龍脈の結晶', quantity: 2 },
            { name: 'ランゴスタの堅殻', quantity: 3 },
            { name: '猛毒袋', quantity: 2 },
          ],
          skill: [{ name: '納刀術', level: 2 }],
        },
        {
          name: 'オウビートマーノβ',
          materials: [
            { name: 'オオツノアゲハ', quantity: 1 },
            { name: '龍脈の結晶', quantity: 2 },
            { name: 'モンスターの濃汁', quantity: 2 },
            { name: '大水袋', quantity: 2 },
          ],
          skill: [{ name: '植生学', level: 2 }],
        },
        {
          name: '	オウビートアンカβ',
          materials: [
            { name: 'オオツノアゲハ', quantity: 1 },
            { name: '龍脈の結晶', quantity: 2 },
            { name: 'ランゴスタの堅殻', quantity: 3 },
            { name: '電撃袋', quantity: 2 },
          ],
          skill: [{ name: 'ハニーハンター', level: 1 }],
        },
        {
          name: 'オウビートガンバβ',
          materials: [
            { name: 'オオツノアゲハ', quantity: 1 },
            { name: 'カブレライト鉱石', quantity: 2 },
            { name: 'モンスターの濃汁', quantity: 2 },
            { name: '強力麻痺袋', quantity: 2 },
          ],
          skill: [{ name: '探究者の幸運', level: 1 }],
        },
      ],
    },
    {
      name: 'ランゴα',
      armors: [
        {
          name: 'ランゴヘルムα',
          materials: [
            { name: 'ランゴスタの堅殻', quantity: 3 },
            { name: 'ランゴスタの薄羽', quantity: 2 },
            { name: '尖竜骨', quantity: 2 },
          ],
          skill: [
            { name: '納刀術', level: 1 },
            { name: '麻痺属性強化', level: 1 },
          ],
        },
        {
          name: '	ランゴメイルα',
          materials: [
            { name: 'ランゴスタの堅殻', quantity: 3 },
            { name: 'ランゴスタの薄羽', quantity: 2 },
            { name: '尖竜骨', quantity: 2 },
          ],
          skill: [{ name: '風圧耐性', level: 2 }],
        },
        {
          name: 'ランゴアームα',
          materials: [
            { name: 'ランゴスタの堅殻', quantity: 4 },
            { name: 'ランゴスタの薄羽', quantity: 2 },
            { name: 'モンスターの濃汁', quantity: 3 },
            { name: '強力麻痺袋', quantity: 2 },
          ],
          skill: [{ name: '麻痺属性強化', level: 2 }],
        },
        {
          name: '	ランゴコイルα',
          materials: [
            { name: 'ランゴスタの堅殻', quantity: 3 },
            { name: 'ランゴスタの薄羽', quantity: 2 },
            { name: '尖竜骨', quantity: 2 },
          ],
          skill: [{ name: '麻痺耐性', level: 2 }],
        },
        {
          name: 'ランゴグリーヴα',
          materials: [
            { name: 'ランゴスタの堅殻', quantity: 4 },
            { name: 'ランゴスタの薄羽', quantity: 2 },
            { name: 'モンスターの濃汁', quantity: 3 },
            { name: '強力麻痺袋', quantity: 2 },
          ],
          skill: [
            { name: '麻痺耐性', level: 1 },
            { name: 'ハニーハンター', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'ランゴβ',
      armors: [
        {
          name: 'ランゴヘルムβ',
          materials: [
            { name: 'ランゴスタの堅殻', quantity: 3 },
            { name: 'ランゴスタの薄羽', quantity: 2 },
            { name: '尖竜骨', quantity: 2 },
          ],
          skill: [{ name: '納刀術', level: 1 }],
        },
        {
          name: '	ランゴメイルβ',
          materials: [
            { name: 'ランゴスタの堅殻', quantity: 3 },
            { name: 'ランゴスタの薄羽', quantity: 2 },
            { name: '尖竜骨', quantity: 2 },
          ],
          skill: [{ name: '風圧耐性', level: 1 }],
        },
        {
          name: 'ランゴアームβ',
          materials: [
            { name: 'ランゴスタの堅殻', quantity: 4 },
            { name: 'ランゴスタの薄羽', quantity: 2 },
            { name: 'モンスターの濃汁', quantity: 3 },
            { name: '強力麻痺袋', quantity: 2 },
          ],
          skill: [{ name: '麻痺属性強化', level: 1 }],
        },
        {
          name: '	ランゴコイルβ',
          materials: [
            { name: 'ランゴスタの堅殻', quantity: 3 },
            { name: 'ランゴスタの薄羽', quantity: 2 },
            { name: '尖竜骨', quantity: 2 },
          ],
          skill: [{ name: '麻痺耐性', level: 1 }],
        },
        {
          name: 'ランゴグリーヴβ',
          materials: [
            { name: 'ランゴスタの堅殻', quantity: 4 },
            { name: 'ランゴスタの薄羽', quantity: 2 },
            { name: 'モンスターの濃汁', quantity: 3 },
            { name: '強力麻痺袋', quantity: 2 },
          ],
          skill: [{ name: 'ハニーハンター', level: 1 }],
        },
      ],
    },
    {
      name: 'モスフェイクα',
      armors: [
        {
          name: 'モスフェイクα',
          materials: [
            { name: 'モスの苔皮', quantity: 3 },
            { name: '蛮顎竜の大鼻骨', quantity: 1 },
            { name: '痺賊竜の上皮', quantity: 3 },
            { name: 'ノヴァクリスタル', quantity: 1 },
          ],
          skill: [{ name: 'キノコ大好き', level: 2 }],
        },
      ],
    },
    {
      name: 'ケストガードα',
      armors: [
        {
          name: 'ケストガードα',
          materials: [
            { name: 'ケストドンの堅殻', quantity: 6 },
            { name: 'ケストドンの頭殻', quantity: 3 },
            { name: '上質な堅骨', quantity: 3 },
          ],
          skill: [
            { name: '滑走強化', level: 1 },
            { name: '集中', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'ケストガードβ',
      armors: [
        {
          name: 'ケストガードβ',
          materials: [
            { name: 'ケストドンの堅殻', quantity: 6 },
            { name: 'ケストドンの頭殻', quantity: 3 },
            { name: '上質な堅骨', quantity: 3 },
          ],
          skill: [{ name: '滑走強化', level: 1 }],
        },
      ],
    },
    {
      name: 'ガライーブーツα',
      armors: [
        {
          name: 'ガライーブーツα',
          materials: [
            { name: '咬魚の上皮', quantity: 4 },
            { name: '咬魚の大ヒゲ', quantity: 2 },
            { name: 'カブレライト鉱石', quantity: 3 },
          ],
          skill: [
            { name: '水場適応', level: 2 },
            { name: '水属性攻撃強化', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'ガライーブーツβ',
      armors: [
        {
          name: 'ガライーブーツβ',
          materials: [
            { name: '咬魚の上皮', quantity: 4 },
            { name: '咬魚の大ヒゲ', quantity: 2 },
            { name: 'カブレライト鉱石', quantity: 3 },
          ],
          skill: [
            { name: '水場適応', level: 1 },
            { name: '水属性攻撃強化', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'シャムゴーグルα',
      armors: [
        {
          name: 'シャムゴーグルα',
          materials: [
            { name: 'シャムオスの上皮', quantity: 3 },
            { name: 'シャムオスの上鱗', quantity: 4 },
            { name: '龍脈の結晶', quantity: 3 },
          ],
          skill: [
            { name: '感知', level: 1 },
            { name: '地質学', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'シャムゴーグルβ',
      armors: [
        {
          name: 'シャムゴーグルβ',
          materials: [
            { name: 'シャムオスの上皮', quantity: 3 },
            { name: 'シャムオスの上鱗', quantity: 4 },
            { name: '龍脈の結晶', quantity: 3 },
          ],
          skill: [{ name: '感知', level: 1 }],
        },
      ],
    },
    {
      name: 'ジャグラスα',
      armors: [
        {
          name: 'ジャグラスヘルムα',
          materials: [
            { name: '賊竜の上皮', quantity: 4 },
            { name: '賊竜のたてがみ', quantity: 2 },
            { name: '賊竜の尖爪', quantity: 4 },
            { name: '鋭利な爪', quantity: 2 },
          ],
          skill: [{ name: '早食い', level: 2 }],
        },
        {
          name: '	ジャグラスメイルα',
          materials: [
            { name: '賊竜の上皮', quantity: 2 },
            { name: '賊竜の尖爪', quantity: 4 },
            { name: '賊竜の上鱗', quantity: 4 },
            { name: 'ジャグラスの上皮', quantity: 2 },
          ],
          skill: [{ name: '威嚇', level: 2 }],
        },
        {
          name: 'ジャグラスアームα',
          materials: [
            { name: '賊竜の上鱗', quantity: 4 },
            { name: '賊竜の上皮', quantity: 2 },
            { name: '上竜骨', quantity: 3 },
            { name: 'ジャグラスの上皮', quantity: 1 },
          ],
          skill: [
            { name: '威嚇', level: 1 },
            { name: 'オトモヘの采配', level: 1 },
          ],
        },
        {
          name: '	ジャグラスコイルα',
          materials: [
            { name: '賊竜の上皮', quantity: 3 },
            { name: '賊竜のたてがみ', quantity: 3 },
            { name: '賊竜の上鱗', quantity: 4 },
            { name: 'ジャグラスの上鱗', quantity: 3 },
          ],
          skill: [
            { name: '早食い', level: 1 },
            { name: '不屈', level: 1 },
          ],
        },
        {
          name: 'ジャグラスグリーヴα',
          materials: [
            { name: '賊竜の上鱗', quantity: 4 },
            { name: '賊竜の上皮', quantity: 2 },
            { name: '賊竜のたてがみ', quantity: 2 },
            { name: 'ジャグラスの上鱗', quantity: 1 },
          ],
          skill: [
            { name: 'しゃがみ移動速度UP', level: 1 },
            { name: '満足感', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'ジャグラスβ',
      armors: [
        {
          name: 'ジャグラスヘルムβ',
          materials: [
            { name: '賊竜の上皮', quantity: 4 },
            { name: '賊竜のたてがみ', quantity: 2 },
            { name: '賊竜の尖爪', quantity: 4 },
            { name: '鋭利な爪', quantity: 2 },
          ],
          skill: [{ name: '早食い', level: 1 }],
        },
        {
          name: '	ジャグラスメイルβ',
          materials: [
            { name: '賊竜の上皮', quantity: 2 },
            { name: '賊竜の尖爪', quantity: 4 },
            { name: '賊竜の上鱗', quantity: 4 },
            { name: 'ジャグラスの上皮', quantity: 2 },
          ],
          skill: [{ name: '威嚇', level: 1 }],
        },
        {
          name: 'ジャグラスアームβ',
          materials: [
            { name: '賊竜の上鱗', quantity: 4 },
            { name: '賊竜の上皮', quantity: 2 },
            { name: '上竜骨', quantity: 3 },
            { name: 'ジャグラスの上皮', quantity: 1 },
          ],
          skill: [{ name: 'オトモヘの采配', level: 1 }],
        },
        {
          name: '	ジャグラスコイルβ',
          materials: [
            { name: '賊竜の上皮', quantity: 3 },
            { name: '賊竜のたてがみ', quantity: 3 },
            { name: '賊竜の上鱗', quantity: 4 },
            { name: 'ジャグラスの上鱗', quantity: 3 },
          ],
          skill: [{ name: '不屈', level: 1 }],
        },
        {
          name: 'ジャグラスグリーヴβ',
          materials: [
            { name: '賊竜の上鱗', quantity: 4 },
            { name: '賊竜の上皮', quantity: 2 },
            { name: '賊竜のたてがみ', quantity: 2 },
            { name: 'ジャグラスの上鱗', quantity: 1 },
          ],
          skill: [{ name: 'しゃがみ移動速度UP', level: 1 }],
        },
      ],
    },
    {
      name: 'クルルα',
      armors: [
        {
          name: 'クルルヘルムα',
          materials: [
            { name: '掻鳥の上鱗', quantity: 4 },
            { name: '掻鳥の上皮', quantity: 2 },
            { name: '掻鳥の大飾り羽', quantity: 2 },
          ],
          skill: [
            { name: '火耐性', level: 1 },
            { name: '弱点特効', level: 1 },
          ],
        },
        {
          name: '	クルルメイルα',
          materials: [
            { name: '掻鳥の上皮', quantity: 4 },
            { name: '掻鳥の大飾り羽', quantity: 3 },
            { name: '掻鳥の大クチバシ', quantity: 2 },
            { name: '鳥竜玉', quantity: 1 },
          ],
          skill: [
            { name: 'スタミナ急速回復', level: 1 },
            { name: '見切り', level: 1 },
          ],
        },
        {
          name: 'クルルアームα',
          materials: [
            { name: '掻鳥の上鱗', quantity: 4 },
            { name: '掻鳥の上皮', quantity: 2 },
            { name: 'カブレライト鉱石', quantity: 3 },
          ],
          skill: [
            { name: '見切り', level: 1 },
            { name: '運搬の達人', level: 1 },
          ],
        },
        {
          name: '	クルルコイルα',
          materials: [
            { name: '掻鳥の皮', quantity: 4 },
            { name: '掻鳥の大クチバシ', quantity: 2 },
            { name: '翼竜の上皮', quantity: 3 },
            { name: '大地の結晶', quantity: 2 },
          ],
          skill: [{ name: 'アイテム使用強化', level: 2 }],
        },
        {
          name: 'クルルグリーヴα',
          materials: [
            { name: '掻鳥の上皮', quantity: 4 },
            { name: '掻鳥の上鱗', quantity: 6 },
            { name: '翼竜の上皮', quantity: 2 },
            { name: '大地の結晶', quantity: 2 },
          ],
          skill: [
            { name: '見切り', level: 1 },
            { name: 'アイテム使用強化', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'クルルβ',
      armors: [
        {
          name: 'クルルヘルムβ',
          materials: [
            { name: '掻鳥の上鱗', quantity: 4 },
            { name: '掻鳥の上皮', quantity: 2 },
            { name: '掻鳥の大飾り羽', quantity: 2 },
          ],
          skill: [{ name: '火耐性', level: 1 }],
        },
        {
          name: '	クルルメイルβ',
          materials: [
            { name: '掻鳥の上皮', quantity: 4 },
            { name: '掻鳥の大飾り羽', quantity: 3 },
            { name: '掻鳥の大クチバシ', quantity: 2 },
            { name: '鳥竜玉', quantity: 1 },
          ],
          skill: [{ name: 'スタミナ急速回復', level: 1 }],
        },
        {
          name: 'クルルアームβ',
          materials: [
            { name: '掻鳥の上鱗', quantity: 4 },
            { name: '掻鳥の上皮', quantity: 2 },
            { name: 'カブレライト鉱石', quantity: 3 },
          ],
          skill: [{ name: '運搬の達人', level: 1 }],
        },
        {
          name: '	クルルコイルβ',
          materials: [
            { name: '掻鳥の皮', quantity: 4 },
            { name: '掻鳥の大クチバシ', quantity: 2 },
            { name: '翼竜の上皮', quantity: 3 },
            { name: '大地の結晶', quantity: 2 },
          ],
          skill: [{ name: 'アイテム使用強化', level: 1 }],
        },
        {
          name: 'クルルグリーヴβ',
          materials: [
            { name: '掻鳥の上皮', quantity: 4 },
            { name: '掻鳥の上鱗', quantity: 6 },
            { name: '翼竜の上皮', quantity: 2 },
            { name: '大地の結晶', quantity: 2 },
          ],
          skill: [{ name: '見切り', level: 1 }],
        },
      ],
    },
    {
      name: 'ツィツィα',
      armors: [
        {
          name: 'ツィツィヘルムα',
          materials: [
            { name: '眩鳥の上鱗', quantity: 4 },
            { name: '眩鳥の上皮', quantity: 2 },
            { name: '眩鳥の閃光膜', quantity: 2 },
            { name: '深海の結晶', quantity: 5 },
          ],
          skill: [
            { name: '閃光強化', level: 1 },
            { name: '気絶耐性', level: 1 },
          ],
        },
        {
          name: '	ツィツィメイルα',
          materials: [
            { name: '眩鳥の上皮', quantity: 4 },
            { name: '眩鳥の尖爪', quantity: 4 },
            { name: '眩鳥の閃光膜', quantity: 3 },
            { name: '鳥竜玉', quantity: 1 },
          ],
          skill: [
            { name: '体術', level: 1 },
            { name: '水属性攻撃強化', level: 2 },
          ],
        },
        {
          name: 'ツィツィアームα',
          materials: [
            { name: '眩鳥の上皮', quantity: 4 },
            { name: '眩鳥の発光膜', quantity: 2 },
            { name: '眩鳥の上鱗', quantity: 4 },
            { name: '龍脈の結晶', quantity: 2 },
          ],
          skill: [
            { name: '気絶耐性', level: 2 },
            { name: '広域化', level: 1 },
          ],
        },
        {
          name: '	ツィツィコイルα',
          materials: [
            { name: '眩鳥の上皮', quantity: 2 },
            { name: '眩鳥の尖爪', quantity: 4 },
            { name: '龍脈の結晶', quantity: 3 },
            { name: 'ライトクリスタル', quantity: 2 },
          ],
          skill: [
            { name: '水属性攻撃強化', level: 1 },
            { name: '広域化', level: 2 },
          ],
        },
        {
          name: 'ツィツィグリーヴα',
          materials: [
            { name: '眩鳥の上鱗', quantity: 4 },
            { name: '眩鳥の上皮', quantity: 2 },
            { name: '眩鳥の尖爪', quantity: 2 },
            { name: 'カブレライト鉱石', quantity: 6 },
          ],
          skill: [{ name: '睡眠耐性', level: 2 }],
        },
      ],
    },
    {
      name: 'ツィツィβ',
      armors: [
        {
          name: 'ツィツィヘルムβ',
          materials: [
            { name: '眩鳥の上鱗', quantity: 4 },
            { name: '眩鳥の上皮', quantity: 2 },
            { name: '眩鳥の閃光膜', quantity: 2 },
            { name: '深海の結晶', quantity: 5 },
          ],
          skill: [{ name: '閃光強化', level: 1 }],
        },
        {
          name: '	ツィツィメイルβ',
          materials: [
            { name: '眩鳥の上皮', quantity: 4 },
            { name: '眩鳥の尖爪', quantity: 4 },
            { name: '眩鳥の閃光膜', quantity: 3 },
            { name: '鳥竜玉', quantity: 1 },
          ],
          skill: [{ name: '体術', level: 1 }],
        },
        {
          name: 'ツィツィアームβ',
          materials: [
            { name: '眩鳥の上皮', quantity: 4 },
            { name: '眩鳥の発光膜', quantity: 2 },
            { name: '眩鳥の上鱗', quantity: 4 },
            { name: '龍脈の結晶', quantity: 2 },
          ],
          skill: [{ name: '気絶耐性', level: 2 }],
        },
        {
          name: '	ツィツィコイルβ',
          materials: [
            { name: '眩鳥の上皮', quantity: 2 },
            { name: '眩鳥の尖爪', quantity: 4 },
            { name: '龍脈の結晶', quantity: 3 },
            { name: 'ライトクリスタル', quantity: 2 },
          ],
          skill: [{ name: '広域化', level: 2 }],
        },
        {
          name: 'ツィツィグリーヴβ',
          materials: [
            { name: '眩鳥の上鱗', quantity: 4 },
            { name: '眩鳥の上皮', quantity: 2 },
            { name: '眩鳥の尖爪', quantity: 2 },
            { name: 'カブレライト鉱石', quantity: 6 },
          ],
          skill: [{ name: '睡眠耐性', level: 1 }],
        },
      ],
    },
    {
      name: 'ギルオスα',
      armors: [
        {
          name: 'ギルオスヘルムα',
          materials: [
            { name: '痺賊竜の上鱗', quantity: 4 },
            { name: '痺賊竜の上皮', quantity: 2 },
            { name: '痺賊竜の大頭巾', quantity: 1 },
            { name: 'ギルオスの上鱗', quantity: 4 },
          ],
          skill: [
            { name: '笛吹き名人', level: 1 },
            { name: '麻痺耐性', level: 1 },
          ],
        },
        {
          name: '	ギルオスメイルα',
          materials: [
            { name: '痺賊竜の上皮', quantity: 4 },
            { name: '痺賊竜の鋭牙', quantity: 4 },
            { name: '強力麻痺袋', quantity: 3 },
            { name: '鳥竜玉', quantity: 1 },
          ],
          skill: [{ name: '麻痺耐性', level: 2 }],
        },
        {
          name: 'ギルオスアームα',
          materials: [
            { name: '痺賊竜の上鱗', quantity: 4 },
            { name: '痺賊竜の上皮', quantity: 2 },
            { name: 'ギルオスの麻痺牙', quantity: 2 },
            { name: '強力麻痺袋', quantity: 2 },
          ],
          skill: [{ name: 'オトモへの采配', level: 2 }],
        },
        {
          name: '	ギルオスコイルα',
          materials: [
            { name: '痺賊竜の上皮', quantity: 4 },
            { name: '痺賊竜の尻尾', quantity: 2 },
            { name: '痺賊竜の大頭巾', quantity: 2 },
            { name: 'ギルオスの上皮', quantity: 4 },
          ],
          skill: [
            { name: '瘴気環境適応', level: 1 },
            { name: '麻痺属性強化', level: 1 },
          ],
        },
        {
          name: 'ギルオスグリーヴα',
          materials: [
            { name: '痺賊竜の上皮', quantity: 2 },
            { name: '痺賊竜の鋭牙', quantity: 4 },
            { name: '痺賊竜の上鱗', quantity: 4 },
            { name: 'いびつな狂骨', quantity: 5 },
          ],
          skill: [{ name: '麻痺属性強化', level: 2 }],
        },
      ],
    },
    {
      name: 'ギルオスβ',
      armors: [
        {
          name: 'ギルオスヘルムβ',
          materials: [
            { name: '痺賊竜の上鱗', quantity: 4 },
            { name: '痺賊竜の上皮', quantity: 2 },
            { name: '痺賊竜の大頭巾', quantity: 1 },
            { name: 'ギルオスの上鱗', quantity: 4 },
          ],
          skill: [{ name: '笛吹き名人', level: 1 }],
        },
        {
          name: '	ギルオスメイルβ',
          materials: [
            { name: '痺賊竜の上皮', quantity: 4 },
            { name: '痺賊竜の鋭牙', quantity: 4 },
            { name: '強力麻痺袋', quantity: 3 },
            { name: '鳥竜玉', quantity: 1 },
          ],
          skill: [{ name: '麻痺耐性', level: 1 }],
        },
        {
          name: 'ギルオスアームβ',
          materials: [
            { name: '痺賊竜の上鱗', quantity: 4 },
            { name: '痺賊竜の上皮', quantity: 2 },
            { name: 'ギルオスの麻痺牙', quantity: 2 },
            { name: '強力麻痺袋', quantity: 2 },
          ],
          skill: [{ name: 'オトモへの采配', level: 1 }],
        },
        {
          name: '	ギルオスコイルβ',
          materials: [
            { name: '痺賊竜の上皮', quantity: 4 },
            { name: '痺賊竜の尻尾', quantity: 2 },
            { name: '痺賊竜の大頭巾', quantity: 2 },
            { name: 'ギルオスの上皮', quantity: 4 },
          ],
          skill: [{ name: '瘴気環境適応', level: 1 }],
        },
        {
          name: 'ギルオスグリーヴβ',
          materials: [
            { name: '痺賊竜の上皮', quantity: 2 },
            { name: '痺賊竜の鋭牙', quantity: 4 },
            { name: '痺賊竜の上鱗', quantity: 4 },
            { name: 'いびつな狂骨', quantity: 5 },
          ],
          skill: [{ name: '麻痺属性強化', level: 1 }],
        },
      ],
    },
    {
      name: 'プケプケα',
      armors: [
        {
          name: 'プケプケヘルムα',
          materials: [
            { name: '毒妖鳥の堅殻', quantity: 2 },
            { name: '毒妖鳥の尻尾', quantity: 2 },
            { name: '毒妖鳥の翼', quantity: 3 },
            { name: '猛毒袋', quantity: 2 },
          ],
          skill: [{ name: '綿胞子草の知識', level: 2 }],
        },
        {
          name: '	プケプケメイルα',
          materials: [
            { name: '毒妖鳥の上鱗', quantity: 4 },
            { name: '毒妖鳥の堅殻', quantity: 3 },
            { name: 'カブレライト鉱石', quantity: 3 },
          ],
          skill: [
            { name: 'アイテム使用強化', level: 1 },
            { name: '植生学', level: 1 },
          ],
        },
        {
          name: 'プケプケアームα',
          materials: [
            { name: '毒妖鳥の上鱗', quantity: 4 },
            { name: '毒妖鳥の堅殻', quantity: 3 },
            { name: '猛毒袋', quantity: 1 },
          ],
          skill: [
            { name: '毒耐性', level: 2 },
            { name: '毒属性強化', level: 1 },
          ],
        },
        {
          name: '	プケプケコイルα',
          materials: [
            { name: '毒妖鳥の堅殻', quantity: 4 },
            { name: '毒妖鳥の翼', quantity: 2 },
            { name: '毒妖鳥の大喉袋', quantity: 2 },
            { name: '鳥竜玉', quantity: 1 },
          ],
          skill: [{ name: '毒属性強化', level: 2 }],
        },
        {
          name: 'プケプケグリーヴα',
          materials: [
            { name: '毒妖鳥の堅殻', quantity: 2 },
            { name: '毒妖鳥の大喉袋', quantity: 2 },
            { name: '毒妖鳥の上鱗', quantity: 4 },
            { name: '尖竜骨', quantity: 2 },
          ],
          skill: [
            { name: '綿胞子草の知識', level: 1 },
            { name: '植生学', level: 2 },
          ],
        },
      ],
    },
    {
      name: 'プケプケβ',
      armors: [
        {
          name: 'プケプケヘルムβ',
          materials: [
            { name: '毒妖鳥の堅殻', quantity: 2 },
            { name: '毒妖鳥の尻尾', quantity: 2 },
            { name: '毒妖鳥の翼', quantity: 3 },
            { name: '猛毒袋', quantity: 2 },
          ],
          skill: [{ name: '綿胞子草の知識', level: 1 }],
        },
        {
          name: '	プケプケメイルβ',
          materials: [
            { name: '毒妖鳥の上鱗', quantity: 4 },
            { name: '毒妖鳥の堅殻', quantity: 3 },
            { name: 'カブレライト鉱石', quantity: 3 },
          ],
          skill: [{ name: 'アイテム使用強化', level: 1 }],
        },
        {
          name: 'プケプケアームβ',
          materials: [
            { name: '毒妖鳥の上鱗', quantity: 4 },
            { name: '毒妖鳥の堅殻', quantity: 3 },
            { name: '猛毒袋', quantity: 1 },
          ],
          skill: [{ name: '毒耐性', level: 2 }],
        },
        {
          name: '	プケプケコイルβ',
          materials: [
            { name: '毒妖鳥の堅殻', quantity: 4 },
            { name: '毒妖鳥の翼', quantity: 2 },
            { name: '毒妖鳥の大喉袋', quantity: 2 },
            { name: '鳥竜玉', quantity: 1 },
          ],
          skill: [{ name: '毒属性強化', level: 1 }],
        },
        {
          name: 'プケプケグリーヴβ',
          materials: [
            { name: '毒妖鳥の堅殻', quantity: 2 },
            { name: '毒妖鳥の大喉袋', quantity: 2 },
            { name: '毒妖鳥の上鱗', quantity: 4 },
            { name: '尖竜骨', quantity: 2 },
          ],
          skill: [{ name: '植生学', level: 1 }],
        },
      ],
    },
    {
      name: 'ボロスα',
      armors: [
        {
          name: 'ボロスヘルムα',
          materials: [
            { name: '土砂竜の堅甲', quantity: 3 },
            { name: '土砂竜の尻尾', quantity: 2 },
            { name: '土砂竜の鋭牙', quantity: 3 },
            { name: 'ケストドンの堅殻', quantity: 4 },
          ],
          skill: [{ name: 'ガード性能', level: 2 }],
        },
        {
          name: '	ボロスメイルα',
          materials: [
            { name: '土砂竜の堅殻', quantity: 4 },
            { name: '土砂竜の堅甲', quantity: 2 },
            { name: '土砂竜の鋭牙', quantity: 2 },
            { name: '上質な堅骨', quantity: 5 },
          ],
          skill: [{ name: 'スタミナ奪取', level: 2 }],
        },
        {
          name: 'ボロスアームα',
          materials: [
            { name: '土砂竜の堅甲', quantity: 4 },
            { name: '土砂竜の尻尾', quantity: 2 },
            { name: 'ケストドンの堅殻', quantity: 4 },
            { name: '竜玉', quantity: 1 },
          ],
          skill: [
            { name: 'スタミナ奪取', level: 1 },
            { name: 'ランナー', level: 1 },
          ],
        },
        {
          name: '	ボロスコイルα',
          materials: [
            { name: '土砂竜の堅殻', quantity: 4 },
            { name: '土砂竜の堅甲', quantity: 3 },
            { name: '上竜骨', quantity: 4 },
          ],
          skill: [
            { name: 'ガード性能', level: 1 },
            { name: '泥耐性', level: 1 },
          ],
        },
        {
          name: 'ボロスグリーヴα',
          materials: [
            { name: '土砂竜の堅甲', quantity: 2 },
            { name: '土砂竜の堅殻', quantity: 4 },
            { name: '肥沃なドロ', quantity: 4 },
            { name: '上竜骨', quantity: 4 },
          ],
          skill: [
            { name: 'ランナー', level: 1 },
            { name: '気絶耐性', level: 2 },
          ],
        },
      ],
    },
    {
      name: 'ボロスβ',
      armors: [
        {
          name: 'ボロスヘルムβ',
          materials: [
            { name: '土砂竜の堅甲', quantity: 3 },
            { name: '土砂竜の尻尾', quantity: 2 },
            { name: '土砂竜の鋭牙', quantity: 3 },
            { name: 'ケストドンの堅殻', quantity: 4 },
          ],
          skill: [{ name: 'ガード性能', level: 1 }],
        },
        {
          name: '	ボロスメイルβ',
          materials: [
            { name: '土砂竜の堅殻', quantity: 4 },
            { name: '土砂竜の堅甲', quantity: 2 },
            { name: '土砂竜の鋭牙', quantity: 2 },
            { name: '上質な堅骨', quantity: 5 },
          ],
          skill: [{ name: 'スタミナ奪取', level: 1 }],
        },
        {
          name: 'ボロスアームβ',
          materials: [
            { name: '土砂竜の堅甲', quantity: 4 },
            { name: '土砂竜の尻尾', quantity: 2 },
            { name: 'ケストドンの堅殻', quantity: 4 },
            { name: '竜玉', quantity: 1 },
          ],
          skill: [{ name: 'ランナー', level: 1 }],
        },
        {
          name: '	ボロスコイルβ',
          materials: [
            { name: '土砂竜の堅殻', quantity: 4 },
            { name: '土砂竜の堅甲', quantity: 3 },
            { name: '上竜骨', quantity: 4 },
          ],
          skill: [{ name: '泥耐性', level: 1 }],
        },
        {
          name: 'ボロスグリーヴβ',
          materials: [
            { name: '土砂竜の堅甲', quantity: 2 },
            { name: '土砂竜の堅殻', quantity: 4 },
            { name: '肥沃なドロ', quantity: 4 },
            { name: '上竜骨', quantity: 4 },
          ],
          skill: [{ name: '気絶耐性', level: 1 }],
        },
      ],
    },
    {
      name: 'ジャナフα',
      armors: [
        {
          name: 'ジャナフヘルムα',
          materials: [
            { name: '蛮顎竜の上毛皮', quantity: 4 },
            { name: '蛮顎竜の上鱗', quantity: 4 },
            { name: '蛮顎竜の尻尾', quantity: 2 },
            { name: '爆炎袋', quantity: 3 },
          ],
          skill: [
            { name: '火属性攻撃強化', level: 2 },
            { name: '火耐性', level: 1 },
          ],
        },
        {
          name: '	ジャナフメイルα',
          materials: [
            { name: '蛮顎竜の上毛皮', quantity: 6 },
            { name: '蛮顎竜の鋭牙', quantity: 4 },
            { name: '蛮顎竜の大鼻骨', quantity: 2 },
            { name: '蛮顎竜の宝玉', quantity: 1 },
          ],
          skill: [
            { name: 'ランナー', level: 1 },
            { name: '特殊射撃強化', level: 1 },
          ],
        },
        {
          name: 'ジャナフアームα',
          materials: [
            { name: '蛮顎竜の上毛皮', quantity: 4 },
            { name: '蛮顎竜の上鱗', quantity: 4 },
            { name: '蛮顎竜の大鼻骨', quantity: 1 },
            { name: '尖竜骨', quantity: 4 },
          ],
          skill: [
            { name: '火属性攻撃強化', level: 1 },
            { name: '特殊射撃強化', level: 1 },
          ],
        },
        {
          name: '	ジャナフコイルα',
          materials: [
            { name: '蛮顎竜の上鱗', quantity: 4 },
            { name: '蛮顎竜の上毛皮', quantity: 3 },
            { name: '蛮顎竜の鋭牙', quantity: 3 },
            { name: '鋭利な爪', quantity: 4 },
          ],
          skill: [
            { name: '火耐性', level: 2 },
            { name: '砲術', level: 1 },
          ],
        },
        {
          name: 'ジャナフグリーヴα',
          materials: [
            { name: '蛮顎竜の上鱗', quantity: 4 },
            { name: '蛮顎竜の上毛皮', quantity: 3 },
            { name: '爆炎袋', quantity: 2 },
            { name: 'カブレライト鉱石', quantity: 5 },
          ],
          skill: [{ name: '砲術', level: 2 }],
        },
      ],
    },
    {
      name: 'ジャナフβ',
      armors: [
        {
          name: 'ジャナフヘルムβ',
          materials: [
            { name: '蛮顎竜の上毛皮', quantity: 4 },
            { name: '蛮顎竜の上鱗', quantity: 4 },
            { name: '蛮顎竜の尻尾', quantity: 2 },
            { name: '爆炎袋', quantity: 3 },
          ],
          skill: [{ name: '火属性攻撃強化', level: 2 }],
        },
        {
          name: '	ジャナフメイルβ',
          materials: [
            { name: '蛮顎竜の上毛皮', quantity: 6 },
            { name: '蛮顎竜の鋭牙', quantity: 4 },
            { name: '蛮顎竜の大鼻骨', quantity: 2 },
            { name: '蛮顎竜の宝玉', quantity: 1 },
          ],
          skill: [{ name: 'ランナー', level: 1 }],
        },
        {
          name: 'ジャナフアームβ',
          materials: [
            { name: '蛮顎竜の上毛皮', quantity: 4 },
            { name: '蛮顎竜の上鱗', quantity: 4 },
            { name: '蛮顎竜の大鼻骨', quantity: 1 },
            { name: '尖竜骨', quantity: 4 },
          ],
          skill: [{ name: '特殊射撃強化', level: 1 }],
        },
        {
          name: '	ジャナフコイルβ',
          materials: [
            { name: '蛮顎竜の上鱗', quantity: 4 },
            { name: '蛮顎竜の上毛皮', quantity: 3 },
            { name: '蛮顎竜の鋭牙', quantity: 3 },
            { name: '鋭利な爪', quantity: 4 },
          ],
          skill: [{ name: '火耐性', level: 2 }],
        },
        {
          name: 'ジャナフグリーヴβ',
          materials: [
            { name: '蛮顎竜の上鱗', quantity: 4 },
            { name: '蛮顎竜の上毛皮', quantity: 3 },
            { name: '爆炎袋', quantity: 2 },
            { name: 'カブレライト鉱石', quantity: 5 },
          ],
          skill: [{ name: '砲術', level: 1 }],
        },
      ],
    },
    {
      name: 'ジュラα',
      armors: [
        {
          name: 'ジュラヘルムα',
          materials: [
            { name: '泥魚竜の上鱗', quantity: 4 },
            { name: '泥魚竜の堅殻', quantity: 2 },
            { name: '泥魚竜の上ヒレ', quantity: 2 },
            { name: '咬魚の上皮', quantity: 6 },
          ],
          skill: [{ name: '水場適応', level: 2 }],
        },
        {
          name: '	ジュラメイルα',
          materials: [
            { name: '泥魚竜の堅殻', quantity: 4 },
            { name: '泥魚竜の上ヒレ', quantity: 3 },
            { name: '泥魚竜の鋭牙', quantity: 2 },
            { name: '大水袋', quantity: 2 },
          ],
          skill: [
            { name: '泥耐性', level: 1 },
            { name: '水属性攻撃強化', level: 1 },
          ],
        },
        {
          name: 'ジュラアームα',
          materials: [
            { name: '泥魚竜の堅殻', quantity: 4 },
            { name: '泥魚竜の鋭牙', quantity: 3 },
            { name: '泥魚竜の大ヒゲ', quantity: 2 },
            { name: '尖竜骨', quantity: 3 },
          ],
          skill: [
            { name: '水場適応', level: 1 },
            { name: '水属性攻撃強化', level: 2 },
          ],
        },
        {
          name: '	ジュラコイルα',
          materials: [
            { name: '泥魚竜の上鱗', quantity: 4 },
            { name: '泥魚竜の堅殻', quantity: 2 },
            { name: '大水袋', quantity: 2 },
          ],
          skill: [{ name: '氷耐性', level: 2 }],
        },
        {
          name: 'ジュラグリーヴα',
          materials: [
            { name: '泥魚竜の堅殻', quantity: 4 },
            { name: '泥魚竜の鋭牙', quantity: 2 },
            { name: '泥魚竜の上ヒレ', quantity: 2 },
            { name: '竜玉', quantity: 1 },
          ],
          skill: [{ name: '集中', level: 2 }],
        },
      ],
    },
    {
      name: 'ジュラβ',
      armors: [
        {
          name: 'ジュラヘルムβ',
          materials: [
            { name: '泥魚竜の上鱗', quantity: 4 },
            { name: '泥魚竜の堅殻', quantity: 2 },
            { name: '泥魚竜の上ヒレ', quantity: 2 },
            { name: '咬魚の上皮', quantity: 6 },
          ],
          skill: [{ name: '水場適応', level: 1 }],
        },
        {
          name: '	ジュラメイルβ',
          materials: [
            { name: '泥魚竜の堅殻', quantity: 4 },
            { name: '泥魚竜の上ヒレ', quantity: 3 },
            { name: '泥魚竜の鋭牙', quantity: 2 },
            { name: '大水袋', quantity: 2 },
          ],
          skill: [{ name: '泥耐性', level: 1 }],
        },
        {
          name: 'ジュラアームβ',
          materials: [
            { name: '泥魚竜の堅殻', quantity: 4 },
            { name: '泥魚竜の鋭牙', quantity: 3 },
            { name: '泥魚竜の大ヒゲ', quantity: 2 },
            { name: '尖竜骨', quantity: 3 },
          ],
          skill: [{ name: '水属性攻撃強化', level: 2 }],
        },
        {
          name: '	ジュラコイルβ',
          materials: [
            { name: '泥魚竜の上鱗', quantity: 4 },
            { name: '泥魚竜の堅殻', quantity: 2 },
            { name: '大水袋', quantity: 2 },
          ],
          skill: [{ name: '氷耐性', level: 1 }],
        },
        {
          name: 'ジュラグリーヴβ',
          materials: [
            { name: '泥魚竜の堅殻', quantity: 4 },
            { name: '泥魚竜の鋭牙', quantity: 2 },
            { name: '泥魚竜の上ヒレ', quantity: 2 },
            { name: '竜玉', quantity: 1 },
          ],
          skill: [{ name: '集中', level: 1 }],
        },
      ],
    },
    {
      name: 'カガチα',
      armors: [
        {
          name: 'カガチヘルムα',
          materials: [
            { name: '飛雷竜の上毛皮', quantity: 4 },
            { name: '飛雷竜の雷極針', quantity: 4 },
            { name: '飛雷竜の尖爪', quantity: 4 },
            { name: '竜玉', quantity: 1 },
          ],
          skill: [{ name: '体術', level: 2 }],
        },
        {
          name: '	カガチメイルα',
          materials: [
            { name: '飛雷竜の上毛皮', quantity: 3 },
            { name: '飛雷竜の雷極針', quantity: 2 },
            { name: '飛雷竜の皮膜', quantity: 4 },
            { name: '電撃袋', quantity: 2 },
          ],
          skill: [
            { name: 'ジャンプ鉄人', level: 1 },
            { name: '回避距離UP', level: 1 },
          ],
        },
        {
          name: 'カガチアームα',
          materials: [
            { name: '飛雷竜の上毛皮', quantity: 4 },
            { name: '飛雷竜の尖爪', quantity: 2 },
            { name: '飛雷竜の上鱗', quantity: 2 },
            { name: '尖竜骨', quantity: 4 },
          ],
          skill: [{ name: '回避距離UP', level: 2 }],
        },
        {
          name: '	カガチコイルα',
          materials: [
            { name: '飛雷竜の上鱗', quantity: 4 },
            { name: '飛雷竜の上毛皮', quantity: 3 },
            { name: '電撃袋', quantity: 1 },
            { name: '翼竜の上皮', quantity: 3 },
          ],
          skill: [
            { name: '雷属性攻撃強化', level: 2 },
            { name: '雷耐性', level: 1 },
          ],
        },
        {
          name: 'カガチグリーヴα',
          materials: [
            { name: '飛雷竜の上鱗', quantity: 4 },
            { name: '飛雷竜の皮獏', quantity: 3 },
            { name: '電撃袋', quantity: 1 },
            { name: '上質な毛皮', quantity: 3 },
          ],
          skill: [
            { name: '雷耐性', level: 2 },
            { name: '体術', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'カガチβ',
      armors: [
        {
          name: 'カガチヘルムβ',
          materials: [
            { name: '飛雷竜の上毛皮', quantity: 4 },
            { name: '飛雷竜の雷極針', quantity: 4 },
            { name: '飛雷竜の尖爪', quantity: 4 },
            { name: '竜玉', quantity: 1 },
          ],
          skill: [{ name: '体術', level: 1 }],
        },
        {
          name: '	カガチメイルβ',
          materials: [
            { name: '飛雷竜の上毛皮', quantity: 3 },
            { name: '飛雷竜の雷極針', quantity: 2 },
            { name: '飛雷竜の皮膜', quantity: 4 },
            { name: '電撃袋', quantity: 2 },
          ],
          skill: [{ name: 'ジャンプ鉄人', level: 1 }],
        },
        {
          name: 'カガチアームβ',
          materials: [
            { name: '飛雷竜の上毛皮', quantity: 4 },
            { name: '飛雷竜の尖爪', quantity: 2 },
            { name: '飛雷竜の上鱗', quantity: 2 },
            { name: '尖竜骨', quantity: 4 },
          ],
          skill: [{ name: '回避距離UP', level: 1 }],
        },
        {
          name: '	カガチコイルβ',
          materials: [
            { name: '飛雷竜の上鱗', quantity: 4 },
            { name: '飛雷竜の上毛皮', quantity: 3 },
            { name: '電撃袋', quantity: 1 },
            { name: '翼竜の上皮', quantity: 3 },
          ],
          skill: [{ name: '雷属性攻撃強化', level: 1 }],
        },
        {
          name: 'カガチグリーヴβ',
          materials: [
            { name: '飛雷竜の上鱗', quantity: 4 },
            { name: '飛雷竜の皮獏', quantity: 3 },
            { name: '電撃袋', quantity: 1 },
            { name: '上質な毛皮', quantity: 3 },
          ],
          skill: [{ name: '雷耐性', level: 1 }],
        },
      ],
    },
    {
      name: 'ウルムーα',
      armors: [
        {
          name: 'ウルムーヘルムα',
          materials: [
            { name: '浮空竜の上鱗', quantity: 4 },
            { name: '浮空竜の翼', quantity: 2 },
            { name: '浮空竜の上毛皮', quantity: 2 },
            { name: 'ライトクリスタル', quantity: 2 },
          ],
          skill: [{ name: 'スタミナ急速回復', level: 2 }],
        },
        {
          name: '	ウルムーメイルα',
          materials: [
            { name: '浮空竜の上鱗', quantity: 2 },
            { name: 'ゴム質の堅殻', quantity: 3 },
            { name: '浮空竜の上毛皮', quantity: 2 },
            { name: '尖竜骨', quantity: 4 },
          ],
          skill: [
            { name: '乗り名人', level: 1 },
            { name: '砲術', level: 1 },
          ],
        },
        {
          name: 'ウルムーアームα',
          materials: [
            { name: '浮空竜の上毛皮', quantity: 4 },
            { name: '浮空竜の上鱗', quantity: 2 },
            { name: '浮空竜の翼', quantity: 2 },
            { name: '上質な堅骨', quantity: 5 },
          ],
          skill: [{ name: '砲術', level: 2 }],
        },
        {
          name: '	ウルムーコイルα',
          materials: [
            { name: '浮空竜の上毛皮', quantity: 4 },
            { name: '浮空竜の上鱗', quantity: 2 },
            { name: '浮空竜の堅殻', quantity: 3 },
            { name: 'サンゴの紅骨', quantity: 5 },
          ],
          skill: [{ name: '精霊の加護', level: 2 }],
        },
        {
          name: 'ウルムーグリーヴα',
          materials: [
            { name: '浮空竜の上鱗', quantity: 4 },
            { name: '浮空竜の上毛皮', quantity: 2 },
            { name: '浮空竜の翼', quantity: 4 },
            { name: '竜玉', quantity: 1 },
          ],
          skill: [
            { name: 'スタミナ急速回復', level: 1 },
            { name: '風圧耐性', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'ウルムーβ',
      armors: [
        {
          name: 'ウルムーヘルムβ',
          materials: [
            { name: '浮空竜の上鱗', quantity: 4 },
            { name: '浮空竜の翼', quantity: 2 },
            { name: '浮空竜の上毛皮', quantity: 2 },
            { name: 'ライトクリスタル', quantity: 2 },
          ],
          skill: [{ name: 'スタミナ急速回復', level: 1 }],
        },
        {
          name: '	ウルムーメイルβ',
          materials: [
            { name: '浮空竜の上鱗', quantity: 2 },
            { name: 'ゴム質の堅殻', quantity: 3 },
            { name: '浮空竜の上毛皮', quantity: 2 },
            { name: '尖竜骨', quantity: 4 },
          ],
          skill: [{ name: '乗り名人', level: 1 }],
        },
        {
          name: 'ウルムーアームβ',
          materials: [
            { name: '浮空竜の上毛皮', quantity: 4 },
            { name: '浮空竜の上鱗', quantity: 2 },
            { name: '浮空竜の翼', quantity: 2 },
            { name: '上質な堅骨', quantity: 5 },
          ],
          skill: [{ name: '砲術', level: 1 }],
        },
        {
          name: '	ウルムーコイルβ',
          materials: [
            { name: '浮空竜の上毛皮', quantity: 4 },
            { name: '浮空竜の上鱗', quantity: 2 },
            { name: '浮空竜の堅殻', quantity: 3 },
            { name: 'サンゴの紅骨', quantity: 5 },
          ],
          skill: [{ name: '精霊の加護', level: 1 }],
        },
        {
          name: 'ウルムーグリーヴβ',
          materials: [
            { name: '浮空竜の上鱗', quantity: 4 },
            { name: '浮空竜の上毛皮', quantity: 2 },
            { name: '浮空竜の翼', quantity: 4 },
            { name: '竜玉', quantity: 1 },
          ],
          skill: [{ name: '風圧耐性', level: 1 }],
        },
      ],
    },
    {
      name: 'ハイメタα',
      armors: [
        {
          name: 'ハイメタヘルムα',
          materials: [
            { name: 'ユニオン鉱石', quantity: 3 },
            { name: 'カブレライト鉱石', quantity: 4 },
            { name: '龍脈の結晶', quantity: 2 },
            { name: 'バルノスの上皮', quantity: 3 },
          ],
          skill: [
            { name: '氷耐性', level: 2 },
            { name: '耳栓', level: 1 },
          ],
        },
        {
          name: '	ハイメタメイルα',
          materials: [
            { name: 'ユニオン鉱石', quantity: 4 },
            { name: 'カブレライト鉱石', quantity: 3 },
            { name: '龍脈の結晶', quantity: 4 },
            { name: 'バルノスの尖爪', quantity: 3 },
          ],
          skill: [
            { name: '耳栓', level: 2 },
            { name: '氷属性攻撃強化', level: 1 },
          ],
        },
        {
          name: 'ハイメタアームα',
          materials: [
            { name: 'ユニオン鉱石', quantity: 4 },
            { name: 'カブレライト鉱石', quantity: 3 },
            { name: '龍脈の結晶', quantity: 4 },
            { name: 'バルノスの上皮', quantity: 4 },
          ],
          skill: [
            { name: '氷属性攻撃強化', level: 1 },
            { name: '防御', level: 2 },
          ],
        },
        {
          name: '	ハイメタコイルα',
          materials: [
            { name: 'ユニオン鉱石', quantity: 3 },
            { name: 'カブレライト鉱石', quantity: 4 },
            { name: '龍脈の結晶', quantity: 2 },
            { name: 'バルノスの尖爪', quantity: 2 },
          ],
          skill: [
            { name: '防御', level: 1 },
            { name: '砲弾装填数UP', level: 1 },
          ],
        },
        {
          name: 'ハイメタグリーヴα',
          materials: [
            { name: 'ユニオン鉱石', quantity: 3 },
            { name: 'カブレライト鉱石', quantity: 4 },
            { name: '龍脈の結晶', quantity: 2 },
            { name: 'バルノスの上皮', quantity: 3 },
          ],
          skill: [
            { name: '氷耐性', level: 1 },
            { name: '砲撃手', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'ハイメタβ',
      armors: [
        {
          name: 'ハイメタヘルムβ',
          materials: [
            { name: 'ユニオン鉱石', quantity: 3 },
            { name: 'カブレライト鉱石', quantity: 4 },
            { name: '龍脈の結晶', quantity: 2 },
            { name: 'バルノスの上皮', quantity: 3 },
          ],
          skill: [{ name: '氷耐性', level: 2 }],
        },
        {
          name: '	ハイメタメイルβ',
          materials: [
            { name: 'ユニオン鉱石', quantity: 4 },
            { name: 'カブレライト鉱石', quantity: 3 },
            { name: '龍脈の結晶', quantity: 4 },
            { name: 'バルノスの尖爪', quantity: 3 },
          ],
          skill: [{ name: '耳栓', level: 1 }],
        },
        {
          name: 'ハイメタアームβ',
          materials: [
            { name: 'ユニオン鉱石', quantity: 4 },
            { name: 'カブレライト鉱石', quantity: 3 },
            { name: '龍脈の結晶', quantity: 4 },
            { name: 'バルノスの上皮', quantity: 4 },
          ],
          skill: [{ name: '氷属性攻撃強化', level: 1 }],
        },
        {
          name: '	ハイメタコイルβ',
          materials: [
            { name: 'ユニオン鉱石', quantity: 3 },
            { name: 'カブレライト鉱石', quantity: 4 },
            { name: '龍脈の結晶', quantity: 2 },
            { name: 'バルノスの尖爪', quantity: 2 },
          ],
          skill: [
            { name: '防御', level: 2 },
            { name: '砲弾装填数UP', level: 1 },
          ],
        },
        {
          name: 'ハイメタグリーヴβ',
          materials: [
            { name: 'ユニオン鉱石', quantity: 3 },
            { name: 'カブレライト鉱石', quantity: 4 },
            { name: '龍脈の結晶', quantity: 2 },
            { name: 'バルノスの上皮', quantity: 3 },
          ],
          skill: [{ name: '砲撃手', level: 1 }],
        },
      ],
    },
    {
      name: 'レイアα',
      armors: [
        {
          name: 'レイアヘルムα',
          materials: [
            { name: '雌火竜の堅殻', quantity: 4 },
            { name: '雌火竜の上鱗', quantity: 3 },
            { name: '雌火竜の翼膜', quantity: 2 },
            { name: '爆炎袋', quantity: 3 },
          ],
          skill: [
            { name: '体力増強', level: 2 },
            { name: '毒属性強化', level: 1 },
          ],
        },
        {
          name: '	レイアメイルα',
          materials: [
            { name: '雌火竜の上鱗', quantity: 4 },
            { name: '雌火竜の堅殻', quantity: 2 },
            { name: '雌火竜の翼膜', quantity: 2 },
            { name: '上質な堅骨', quantity: 6 },
          ],
          skill: [
            { name: '植生学', level: 2 },
            { name: '体力回復量UP', level: 1 },
          ],
        },
        {
          name: 'レイアアームα',
          materials: [
            { name: '雌火竜の堅殻', quantity: 4 },
            { name: '雌火竜の上鱗', quantity: 4 },
            { name: '雌火竜の上棘', quantity: 2 },
            { name: '尖角骨', quantity: 4 },
          ],
          skill: [{ name: '毒属性強化', level: 2 }],
        },
        {
          name: '	レイアコイルα',
          materials: [
            { name: '雌火竜の上鱗', quantity: 4 },
            { name: '雌火竜の堅殻', quantity: 2 },
            { name: '爆炎袋', quantity: 2 },
            { name: 'モンスターの濃汁', quantity: 2 },
          ],
          skill: [
            { name: '体力増強', level: 1 },
            { name: '毒耐性', level: 2 },
          ],
        },
        {
          name: 'レイアグリーヴα',
          materials: [
            { name: '雌火竜の堅殻', quantity: 6 },
            { name: '雌火竜の上棘', quantity: 3 },
            { name: '火竜の翼爪', quantity: 4 },
            { name: '雌火竜の紅玉', quantity: 1 },
          ],
          skill: [{ name: '体力回復量UP', level: 2 }],
        },
      ],
    },
    {
      name: 'レイアβ',
      armors: [
        {
          name: 'レイアヘルムβ',
          materials: [
            { name: '雌火竜の堅殻', quantity: 4 },
            { name: '雌火竜の上鱗', quantity: 3 },
            { name: '雌火竜の翼膜', quantity: 2 },
            { name: '爆炎袋', quantity: 3 },
          ],
          skill: [
            { name: '体力増強', level: 1 },
            { name: '毒属性強化', level: 1 },
          ],
        },
        {
          name: '	レイアメイルβ',
          materials: [
            { name: '雌火竜の上鱗', quantity: 4 },
            { name: '雌火竜の堅殻', quantity: 2 },
            { name: '雌火竜の翼膜', quantity: 2 },
            { name: '上質な堅骨', quantity: 6 },
          ],
          skill: [
            { name: '植生学', level: 1 },
            { name: '体力回復量UP', level: 1 },
          ],
        },
        {
          name: 'レイアアームβ',
          materials: [
            { name: '雌火竜の堅殻', quantity: 4 },
            { name: '雌火竜の上鱗', quantity: 4 },
            { name: '雌火竜の上棘', quantity: 2 },
            { name: '尖角骨', quantity: 4 },
          ],
          skill: [{ name: '毒属性強化', level: 1 }],
        },
        {
          name: '	レイアコイルβ',
          materials: [
            { name: '雌火竜の上鱗', quantity: 4 },
            { name: '雌火竜の堅殻', quantity: 2 },
            { name: '爆炎袋', quantity: 2 },
            { name: 'モンスターの濃汁', quantity: 2 },
          ],
          skill: [
            { name: '体力増強', level: 1 },
            { name: '毒耐性', level: 1 },
          ],
        },
        {
          name: 'レイアグリーヴβ',
          materials: [
            { name: '雌火竜の堅殻', quantity: 6 },
            { name: '雌火竜の上棘', quantity: 3 },
            { name: '火竜の翼爪', quantity: 4 },
            { name: '雌火竜の紅玉', quantity: 1 },
          ],
          skill: [{ name: '体力回復量UP', level: 1 }],
        },
      ],
    },
    {
      name: 'リオハートα',
      armors: [
        {
          name: 'リオハートヘルムα',
          materials: [
            { name: '桜火竜の上鱗', quantity: 4 },
            { name: '桜火竜の堅殻', quantity: 2 },
            { name: '桜火竜の堅殻', quantity: 3 },
            { name: 'シャムオスの上鱗', quantity: 4 },
          ],
          skill: [
            { name: '回避距離UP', level: 1 },
            { name: '毒属性強化', level: 1 },
          ],
        },
        {
          name: '	リオハートメイルα',
          materials: [
            { name: '桜火竜の堅殻', quantity: 4 },
            { name: '桜火竜の上鱗', quantity: 3 },
            { name: '雌火竜の上棘', quantity: 2 },
            { name: 'ノヴァクリスタル', quantity: 1 },
          ],
          skill: [{ name: '整備', level: 2 }],
        },
        {
          name: 'リオハートアームα',
          materials: [
            { name: '桜火竜の堅殻', quantity: 6 },
            { name: '桜火竜の上鱗', quantity: 2 },
            { name: '雌火竜の上棘', quantity: 3 },
            { name: '雌火竜の紅玉', quantity: 1 },
          ],
          skill: [{ name: '風圧耐性', level: 2 }],
        },
        {
          name: '	リオハートコイルα',
          materials: [
            { name: '桜火竜の上鱗', quantity: 4 },
            { name: '桜火竜の堅殻', quantity: 3 },
            { name: '桜火竜の堅殻', quantity: 4 },
            { name: '雌火竜の逆鱗', quantity: 1 },
          ],
          skill: [
            { name: '匠', level: 1 },
            { name: '毒耐性', level: 1 },
          ],
        },
        {
          name: 'リオハートグリーヴα',
          materials: [
            { name: '桜火竜の上鱗', quantity: 4 },
            { name: '桜火竜の堅殻', quantity: 2 },
            { name: '火竜の翼爪', quantity: 3 },
            { name: 'シャムオスの上皮', quantity: 3 },
          ],
          skill: [
            { name: '整備', level: 1 },
            { name: '風圧耐性', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'リオハートβ',
      armors: [
        {
          name: 'リオハートヘルムβ',
          materials: [
            { name: '桜火竜の上鱗', quantity: 4 },
            { name: '桜火竜の堅殻', quantity: 2 },
            { name: '桜火竜の堅殻', quantity: 3 },
            { name: 'シャムオスの上鱗', quantity: 4 },
          ],
          skill: [{ name: '回避距離UP', level: 1 }],
        },
        {
          name: '	リオハートメイルβ',
          materials: [
            { name: '桜火竜の堅殻', quantity: 4 },
            { name: '桜火竜の上鱗', quantity: 3 },
            { name: '雌火竜の上棘', quantity: 2 },
            { name: 'ノヴァクリスタル', quantity: 1 },
          ],
          skill: [{ name: '整備', level: 1 }],
        },
        {
          name: 'リオハートアームβ',
          materials: [
            { name: '桜火竜の堅殻', quantity: 6 },
            { name: '桜火竜の上鱗', quantity: 2 },
            { name: '雌火竜の上棘', quantity: 3 },
            { name: '雌火竜の紅玉', quantity: 1 },
          ],
          skill: [{ name: '風圧耐性', level: 1 }],
        },
        {
          name: '	リオハートコイルβ',
          materials: [
            { name: '桜火竜の上鱗', quantity: 4 },
            { name: '桜火竜の堅殻', quantity: 3 },
            { name: '桜火竜の堅殻', quantity: 4 },
            { name: '雌火竜の逆鱗', quantity: 1 },
          ],
          skill: [{ name: '匠', level: 1 }],
        },
        {
          name: 'リオハートグリーヴβ',
          materials: [
            { name: '桜火竜の上鱗', quantity: 4 },
            { name: '桜火竜の堅殻', quantity: 2 },
            { name: '火竜の翼爪', quantity: 3 },
            { name: 'シャムオスの上皮', quantity: 3 },
          ],
          skill: [{ name: '整備', level: 1 }],
        },
      ],
    },
    {
      name: 'バルキンα',
      armors: [
        {
          name: 'バルキンヘルムα',
          materials: [
            { name: '骨鎚竜の堅殻', quantity: 6 },
            { name: '骨鎚竜の上鱗', quantity: 4 },
            { name: '骨鎚竜の延髄', quantity: 2 },
            { name: '竜玉', quantity: 1 },
          ],
          skill: [{ name: '耐震', level: 2 }],
        },
        {
          name: '	バルキンメイルα',
          materials: [
            { name: '骨鎚竜の上鱗', quantity: 4 },
            { name: '骨鎚竜の堅殻', quantity: 3 },
            { name: '昏睡袋', quantity: 2 },
            { name: '上質な堅骨', quantity: 6 },
          ],
          skill: [
            { name: '睡眠属性強化', level: 1 },
            { name: '裂傷耐性', level: 1 },
          ],
        },
        {
          name: 'バルキンアームα',
          materials: [
            { name: '骨鎚竜の上鱗', quantity: 4 },
            { name: '骨鎚竜の堅殻', quantity: 3 },
            { name: '骨鎚竜の黒油殻', quantity: 2 },
            { name: '頑丈な骨', quantity: 8 },
          ],
          skill: [
            { name: '睡眠属性強化', level: 2 },
            { name: 'ガード性能', level: 1 },
          ],
        },
        {
          name: '	バルキンコイルα',
          materials: [
            { name: '骨鎚竜の上鱗', quantity: 4 },
            { name: '骨鎚竜の堅殻', quantity: 3 },
            { name: '昏睡袋', quantity: 3 },
            { name: '竜骨塊', quantity: 5 },
          ],
          skill: [{ name: 'ガード性能', level: 2 }],
        },
        {
          name: 'バルキングリーヴα',
          materials: [
            { name: '骨鎚竜の堅殻', quantity: 4 },
            { name: '骨鎚竜の上鱗', quantity: 4 },
            { name: '骨鎚竜の黒油殻', quantity: 2 },
            { name: '竜骨塊', quantity: 5 },
          ],
          skill: [{ name: '裂傷耐性', level: 2 }],
        },
      ],
    },
    {
      name: 'バルキンβ',
      armors: [
        {
          name: 'バルキンヘルムβ',
          materials: [
            { name: '骨鎚竜の堅殻', quantity: 6 },
            { name: '骨鎚竜の上鱗', quantity: 4 },
            { name: '骨鎚竜の延髄', quantity: 2 },
            { name: '竜玉', quantity: 1 },
          ],
          skill: [{ name: '耐震', level: 1 }],
        },
        {
          name: '	バルキンメイルβ',
          materials: [
            { name: '骨鎚竜の上鱗', quantity: 4 },
            { name: '骨鎚竜の堅殻', quantity: 3 },
            { name: '昏睡袋', quantity: 2 },
            { name: '上質な堅骨', quantity: 6 },
          ],
          skill: [{ name: '睡眠属性強化', level: 1 }],
        },
        {
          name: 'バルキンアームβ',
          materials: [
            { name: '骨鎚竜の上鱗', quantity: 4 },
            { name: '骨鎚竜の堅殻', quantity: 3 },
            { name: '骨鎚竜の黒油殻', quantity: 2 },
            { name: '頑丈な骨', quantity: 8 },
          ],
          skill: [
            { name: '睡眠属性強化', level: 1 },
            { name: 'ガード性能', level: 1 },
          ],
        },
        {
          name: '	バルキンコイルβ',
          materials: [
            { name: '骨鎚竜の上鱗', quantity: 4 },
            { name: '骨鎚竜の堅殻', quantity: 3 },
            { name: '昏睡袋', quantity: 3 },
            { name: '竜骨塊', quantity: 5 },
          ],
          skill: [{ name: 'ガード性能', level: 1 }],
        },
        {
          name: 'バルキングリーヴβ',
          materials: [
            { name: '骨鎚竜の堅殻', quantity: 4 },
            { name: '骨鎚竜の上鱗', quantity: 4 },
            { name: '骨鎚竜の黒油殻', quantity: 2 },
            { name: '竜骨塊', quantity: 5 },
          ],
          skill: [{ name: '裂傷耐性', level: 1 }],
        },
      ],
    },
    {
      name: 'ガストα',
      armors: [
        {
          name: 'ガストα',
          materials: [
            { name: 'ガストドンの尖角', quantity: 3 },
            { name: 'ガストドンの堅殻', quantity: 4 },
            { name: 'ケストドンの堅殻', quantity: 3 },
            { name: 'ドラグライト鉱石', quantity: 5 },
          ],
          skill: [
            { name: 'ひるみ軽減', level: 1 },
            { name: '爆破やられ耐性', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'ガストβ',
      armors: [
        {
          name: 'ガストβ',
          materials: [
            { name: 'ガストドンの尖角', quantity: 3 },
            { name: 'ガストドンの堅殻', quantity: 4 },
            { name: 'ケストドンの堅殻', quantity: 3 },
            { name: 'ドラグライト鉱石', quantity: 5 },
          ],
          skill: [{ name: 'ひるみ軽減', level: 1 }],
        },
      ],
    },
    {
      name: 'バルノスマントα',
      armors: [
        {
          name: 'バルノスマントα',
          materials: [
            { name: 'バルノスの上皮', quantity: 4 },
            { name: 'バルノスの尖爪', quantity: 2 },
            { name: '鋭利な爪', quantity: 3 },
            { name: '龍脈の結晶', quantity: 3 },
          ],
          skill: [
            { name: '熱ダメージ無効', level: 1 },
            { name: '防御力DOWN耐性', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'バルノスマントβ',
      armors: [
        {
          name: 'バルノスマントβ',
          materials: [
            { name: 'バルノスの上皮', quantity: 4 },
            { name: 'バルノスの尖爪', quantity: 2 },
            { name: '鋭利な爪', quantity: 3 },
            { name: '龍脈の結晶', quantity: 3 },
          ],
          skill: [{ name: '熱ダメージ無効', level: 1 }],
        },
      ],
    },
    {
      name: 'ガマルα',
      armors: [
        {
          name: 'ガマルヘルムα',
          materials: [
            { name: '岩賊竜の上鱗', quantity: 4 },
            { name: '岩賊竜の上皮', quantity: 2 },
            { name: '岩賊竜の顎', quantity: 1 },
            { name: 'ガストドンの尖角', quantity: 3 },
          ],
          skill: [{ name: '爆破やられ耐性', level: 2 }],
        },
        {
          name: '	ガマルメイルα',
          materials: [
            { name: '岩賊竜の上皮', quantity: 4 },
            { name: '岩賊竜の尻尾', quantity: 1 },
            { name: '岩賊竜の顎', quantity: 3 },
            { name: '獄炎石', quantity: 1 },
          ],
          skill: [{ name: '爆破属性強化', level: 2 }],
        },
        {
          name: 'ガマルアームα',
          materials: [
            { name: '岩賊竜の上皮', quantity: 4 },
            { name: '岩賊竜の尖爪', quantity: 4 },
            { name: '岩賊竜の上鱗', quantity: 4 },
            { name: 'ユニオン鉱石', quantity: 6 },
          ],
          skill: [{ name: 'ボマー', level: 2 }],
        },
        {
          name: '	ガマルコイルα',
          materials: [
            { name: '岩賊竜の上鱗', quantity: 4 },
            { name: '岩賊竜の上皮', quantity: 2 },
            { name: '岩賊竜の顎', quantity: 1 },
            { name: 'ガストドンの堅殻', quantity: 5 },
          ],
          skill: [
            { name: '爆破やられ耐性', level: 1 },
            { name: '砲術', level: 2 },
          ],
        },
        {
          name: 'ガマルグリーヴα',
          materials: [
            { name: '岩賊竜の上皮', quantity: 6 },
            { name: '岩賊竜の尻尾', quantity: 2 },
            { name: '岩賊竜の尖爪', quantity: 4 },
            { name: '竜玉', quantity: 1 },
          ],
          skill: [
            { name: '爆破属性強化', level: 1 },
            { name: '砲弾装填数UP', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'ガマルα',
      armors: [
        {
          name: 'ガマルヘルムα',
          materials: [
            { name: '岩賊竜の上鱗', quantity: 4 },
            { name: '岩賊竜の上皮', quantity: 2 },
            { name: '岩賊竜の顎', quantity: 1 },
            { name: 'ガストドンの尖角', quantity: 3 },
          ],
          skill: [{ name: '爆破やられ耐性', level: 1 }],
        },
        {
          name: '	ガマルメイルα',
          materials: [
            { name: '岩賊竜の上皮', quantity: 4 },
            { name: '岩賊竜の尻尾', quantity: 1 },
            { name: '岩賊竜の顎', quantity: 3 },
            { name: '獄炎石', quantity: 1 },
          ],
          skill: [{ name: '爆破属性強化', level: 1 }],
        },
        {
          name: 'ガマルアームα',
          materials: [
            { name: '岩賊竜の上皮', quantity: 4 },
            { name: '岩賊竜の尖爪', quantity: 4 },
            { name: '岩賊竜の上鱗', quantity: 4 },
            { name: 'ユニオン鉱石', quantity: 6 },
          ],
          skill: [{ name: 'ボマー', level: 1 }],
        },
        {
          name: '	ガマルコイルα',
          materials: [
            { name: '岩賊竜の上鱗', quantity: 4 },
            { name: '岩賊竜の上皮', quantity: 2 },
            { name: '岩賊竜の顎', quantity: 1 },
            { name: 'ガストドンの堅殻', quantity: 5 },
          ],
          skill: [{ name: '砲術', level: 1 }],
        },
        {
          name: 'ガマルグリーヴα',
          materials: [
            { name: '岩賊竜の上皮', quantity: 6 },
            { name: '岩賊竜の尻尾', quantity: 2 },
            { name: '岩賊竜の尖爪', quantity: 4 },
            { name: '竜玉', quantity: 1 },
          ],
          skill: [{ name: '砲弾装填数UP', level: 1 }],
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

export default topper
