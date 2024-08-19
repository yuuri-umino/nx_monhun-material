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
          name: 'チェーンベストα',
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
          name: 'チェーンベストβ',
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
            { name: '上質な堅骨', quantity: 4 },
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
            { name: '上質な堅骨', quantity: 4 },
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
            { name: 'いびつな狂骨', quantity: 2 },
          ],
          skill: [
            { name: '体力増強', level: 1 },
            { name: '昆虫標本の達人', level: 1 },
          ],
        },
        {
          name: 'ボーンメイルα',
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
          name: 'ボーンコイルα',
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
            { name: 'いびつな狂骨', quantity: 2 },
          ],
          skill: [{ name: '体力増強', level: 1 }],
        },
        {
          name: 'ボーンメイルβ',
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
          name: 'ボーンコイルβ',
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
          name: 'アロイメイルα',
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
          name: 'アロイコイルα',
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
          name: 'アロイメイルβ',
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
          name: 'アロイコイルβ',
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
          name: 'オウビートペットα',
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
          name: 'オウビートアンカα',
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
          name: 'オウビートペットβ',
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
          name: 'オウビートアンカβ',
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
          name: 'ランゴメイルα',
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
          name: 'ランゴコイルα',
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
          name: 'ランゴメイルβ',
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
          name: 'ランゴコイルβ',
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
          name: 'ジャグラスメイルα',
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
          name: 'ジャグラスコイルα',
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
          name: 'ジャグラスメイルβ',
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
          name: 'ジャグラスコイルβ',
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
          name: 'クルルメイルα',
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
          name: 'クルルコイルα',
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
          name: 'クルルメイルβ',
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
          name: 'クルルコイルβ',
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
          name: 'ツィツィメイルα',
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
          name: 'ツィツィコイルα',
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
          name: 'ツィツィメイルβ',
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
          name: 'ツィツィコイルβ',
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
          name: 'ギルオスメイルα',
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
          name: 'ギルオスコイルα',
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
          name: 'ギルオスメイルβ',
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
          name: 'ギルオスコイルβ',
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
          name: 'プケプケメイルα',
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
          name: 'プケプケコイルα',
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
          name: 'プケプケメイルβ',
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
          name: 'プケプケコイルβ',
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
            { name: '土砂竜の鋭爪', quantity: 3 },
            { name: 'ケストドンの堅殻', quantity: 4 },
          ],
          skill: [{ name: 'ガード性能', level: 2 }],
        },
        {
          name: 'ボロスメイルα',
          materials: [
            { name: '土砂竜の堅殻', quantity: 4 },
            { name: '土砂竜の堅甲', quantity: 2 },
            { name: '土砂竜の鋭爪', quantity: 2 },
            { name: '上質な堅骨', quantity: 5 },
          ],
          skill: [{ name: 'スタミナ奪取', level: 2 }],
        },
        {
          name: 'ボロスアームα',
          materials: [
            { name: '土砂竜の堅甲', quantity: 4 },
            { name: '土砂竜の頭殻', quantity: 2 },
            { name: 'ケストドンの堅殻', quantity: 3 },
            { name: '竜玉', quantity: 1 },
          ],
          skill: [
            { name: 'スタミナ奪取', level: 1 },
            { name: 'ランナー', level: 1 },
          ],
        },
        {
          name: 'ボロスコイルα',
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
            { name: '尖竜骨', quantity: 4 },
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
            { name: '土砂竜の鋭爪', quantity: 3 },
            { name: 'ケストドンの堅殻', quantity: 4 },
          ],
          skill: [{ name: 'ガード性能', level: 1 }],
        },
        {
          name: 'ボロスメイルβ',
          materials: [
            { name: '土砂竜の堅殻', quantity: 4 },
            { name: '土砂竜の堅甲', quantity: 2 },
            { name: '土砂竜の鋭爪', quantity: 2 },
            { name: '上質な堅骨', quantity: 5 },
          ],
          skill: [{ name: 'スタミナ奪取', level: 1 }],
        },
        {
          name: 'ボロスアームβ',
          materials: [
            { name: '土砂竜の堅甲', quantity: 4 },
            { name: '土砂竜の頭殻', quantity: 2 },
            { name: 'ケストドンの堅殻', quantity: 3 },
            { name: '竜玉', quantity: 1 },
          ],
          skill: [{ name: 'ランナー', level: 1 }],
        },
        {
          name: 'ボロスコイルβ',
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
            { name: '尖竜骨', quantity: 4 },
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
          name: 'ジャナフメイルα',
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
          name: 'ジャナフコイルα',
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
          name: 'ジャナフメイルβ',
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
          name: 'ジャナフコイルβ',
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
          name: 'ジュラメイルα',
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
            { name: '咬魚の大ヒゲ', quantity: 2 },
            { name: '尖竜骨', quantity: 3 },
          ],
          skill: [
            { name: '水場適応', level: 1 },
            { name: '水属性攻撃強化', level: 2 },
          ],
        },
        {
          name: 'ジュラコイルα',
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
          name: 'ジュラメイルβ',
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
            { name: '咬魚の大ヒゲ', quantity: 2 },
            { name: '尖竜骨', quantity: 3 },
          ],
          skill: [{ name: '水属性攻撃強化', level: 2 }],
        },
        {
          name: 'ジュラコイルβ',
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
          name: 'カガチメイルα',
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
          name: 'カガチコイルα',
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
          name: 'カガチメイルβ',
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
          name: 'カガチコイルβ',
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
          name: 'ウルムーメイルα',
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
          name: 'ウルムーコイルα',
          materials: [
            { name: '浮空竜の上毛皮', quantity: 4 },
            { name: '浮空竜の上鱗', quantity: 2 },
            { name: 'ゴム質の堅殻', quantity: 3 },
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
          name: 'ウルムーメイルβ',
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
          name: 'ウルムーコイルβ',
          materials: [
            { name: '浮空竜の上毛皮', quantity: 4 },
            { name: '浮空竜の上鱗', quantity: 2 },
            { name: 'ゴム質の堅殻', quantity: 3 },
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
          name: 'ハイメタメイルα',
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
          name: 'ハイメタコイルα',
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
          name: 'ハイメタメイルβ',
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
          name: 'ハイメタコイルβ',
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
          name: 'レイアメイルα',
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
            { name: '尖竜骨', quantity: 4 },
          ],
          skill: [{ name: '毒属性強化', level: 2 }],
        },
        {
          name: 'レイアコイルα',
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
          name: 'レイアメイルβ',
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
            { name: '尖竜骨', quantity: 4 },
          ],
          skill: [{ name: '毒属性強化', level: 1 }],
        },
        {
          name: 'レイアコイルβ',
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
          name: 'リオハートメイルα',
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
          name: 'リオハートコイルα',
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
          name: 'リオハートメイルβ',
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
          name: 'リオハートコイルβ',
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
          name: 'バルキンメイルα',
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
          name: 'バルキンコイルα',
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
          name: 'バルキンメイルβ',
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
          name: 'バルキンコイルβ',
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
          name: 'ガマルメイルα',
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
          name: 'ガマルコイルα',
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
      name: 'ガマルβ',
      armors: [
        {
          name: 'ガマルヘルムβ',
          materials: [
            { name: '岩賊竜の上鱗', quantity: 4 },
            { name: '岩賊竜の上皮', quantity: 2 },
            { name: '岩賊竜の顎', quantity: 1 },
            { name: 'ガストドンの尖角', quantity: 3 },
          ],
          skill: [{ name: '爆破やられ耐性', level: 1 }],
        },
        {
          name: 'ガマルメイルβ',
          materials: [
            { name: '岩賊竜の上皮', quantity: 4 },
            { name: '岩賊竜の尻尾', quantity: 1 },
            { name: '岩賊竜の顎', quantity: 3 },
            { name: '獄炎石', quantity: 1 },
          ],
          skill: [{ name: '爆破属性強化', level: 1 }],
        },
        {
          name: 'ガマルアームβ',
          materials: [
            { name: '岩賊竜の上皮', quantity: 4 },
            { name: '岩賊竜の尖爪', quantity: 4 },
            { name: '岩賊竜の上鱗', quantity: 4 },
            { name: 'ユニオン鉱石', quantity: 6 },
          ],
          skill: [{ name: 'ボマー', level: 1 }],
        },
        {
          name: 'ガマルコイルβ',
          materials: [
            { name: '岩賊竜の上鱗', quantity: 4 },
            { name: '岩賊竜の上皮', quantity: 2 },
            { name: '岩賊竜の顎', quantity: 1 },
            { name: 'ガストドンの堅殻', quantity: 5 },
          ],
          skill: [{ name: '砲術', level: 1 }],
        },
        {
          name: 'ガマルグリーヴβ',
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
      name: 'ゾラマグナα',
      armors: [
        {
          name: 'ゾラマグナヘッドα',
          materials: [
            { name: '熔山龍の熱鱗', quantity: 3 },
            { name: '熔山龍の背甲', quantity: 2 },
            { name: '熔山龍の岩殻', quantity: 6 },
            { name: 'ドラグライト鉱石', quantity: 8 },
          ],
          skill: [
            { name: '匠', level: 1 },
            { name: '爆破属性強化', level: 1 },
          ],
        },
        {
          name: 'ゾラマグナハイドα',
          materials: [
            { name: '熔山龍の岩殻', quantity: 6 },
            { name: '熔山龍の熱鱗', quantity: 1 },
            { name: '熔山龍の背甲', quantity: 2 },
            { name: '熔山龍の胸殻', quantity: 1 },
          ],
          skill: [
            { name: '爆破属性強化', level: 2 },
            { name: '風圧耐性', level: 1 },
          ],
        },
        {
          name: 'ゾラマグナクロウα',
          materials: [
            { name: '熔山龍の熱鱗', quantity: 3 },
            { name: '熔山龍の胸殻', quantity: 3 },
            { name: '熔山龍のマグマ', quantity: 2 },
            { name: 'ドラグライト鉱石', quantity: 8 },
          ],
          skill: [
            { name: '属性解放/装填拡張', level: 1 },
            { name: 'ボマー', level: 1 },
          ],
        },
        {
          name: 'ゾラマグナスパインα',
          materials: [
            { name: '熔山龍の岩殻', quantity: 8 },
            { name: '熔山龍の熱鱗', quantity: 1 },
            { name: '熔山龍の背甲', quantity: 3 },
            { name: '熔山龍のマグマ', quantity: 2 },
          ],
          skill: [
            { name: '不屈', level: 1 },
            { name: '耐震', level: 1 },
          ],
        },
        {
          name: 'ゾラマグナフットα',
          materials: [
            { name: '熔山龍の背甲', quantity: 3 },
            { name: '熔山龍の岩殻', quantity: 3 },
            { name: '熔山龍のマグマ', quantity: 3 },
            { name: '熔山龍の宝玉', quantity: 1 },
          ],
          skill: [
            { name: 'ボマー', level: 2 },
            { name: '耳栓', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'ゾラマグナβ',
      armors: [
        {
          name: 'ゾラマグナヘッドβ',
          materials: [
            { name: '熔山龍の熱鱗', quantity: 3 },
            { name: '熔山龍の背甲', quantity: 2 },
            { name: '熔山龍の岩殻', quantity: 6 },
            { name: 'ドラグライト鉱石', quantity: 8 },
          ],
          skill: [{ name: '匠', level: 1 }],
        },
        {
          name: 'ゾラマグナハイドβ',
          materials: [
            { name: '熔山龍の岩殻', quantity: 6 },
            { name: '熔山龍の熱鱗', quantity: 1 },
            { name: '熔山龍の背甲', quantity: 2 },
            { name: '熔山龍の胸殻', quantity: 1 },
          ],
          skill: [{ name: '爆破属性強化', level: 2 }],
        },
        {
          name: 'ゾラマグナクロウβ',
          materials: [
            { name: '熔山龍の熱鱗', quantity: 3 },
            { name: '熔山龍の胸殻', quantity: 3 },
            { name: '熔山龍のマグマ', quantity: 2 },
            { name: 'ドラグライト鉱石', quantity: 8 },
          ],
          skill: [{ name: '属性解放/装填拡張', level: 1 }],
        },
        {
          name: 'ゾラマグナスパインβ',
          materials: [
            { name: '熔山龍の岩殻', quantity: 8 },
            { name: '熔山龍の熱鱗', quantity: 1 },
            { name: '熔山龍の背甲', quantity: 3 },
            { name: '熔山龍のマグマ', quantity: 2 },
          ],
          skill: [{ name: '不屈', level: 1 }],
        },
        {
          name: 'ゾラマグナフットβ',
          materials: [
            { name: '熔山龍の背甲', quantity: 3 },
            { name: '熔山龍の岩殻', quantity: 3 },
            { name: '熔山龍のマグマ', quantity: 3 },
            { name: '熔山龍の宝玉', quantity: 1 },
          ],
          skill: [{ name: 'ボマー', level: 2 }],
        },
      ],
    },
    {
      name: 'インゴットα',
      armors: [
        {
          name: 'インゴットヘルムα',
          materials: [
            { name: 'ユニオン鉱石', quantity: 2 },
            { name: '堅竜骨', quantity: 1 },
            { name: 'ドラグライト鉱石', quantity: 8 },
            { name: 'ガストドンの尖角', quantity: 3 },
          ],
          skill: [{ name: '雷属性攻撃強化', level: 2 }],
        },
        {
          name: 'インゴットメイルα',
          materials: [
            { name: 'ユニオン鉱石', quantity: 2 },
            { name: '堅竜骨', quantity: 1 },
            { name: 'ドラグライト鉱石', quantity: 8 },
            { name: 'ガストドンの堅殻', quantity: 3 },
          ],
          skill: [{ name: '雷耐性', level: 2 }],
        },
        {
          name: 'インゴットアームα',
          materials: [
            { name: 'ユニオン鉱石', quantity: 3 },
            { name: '堅竜骨', quantity: 1 },
            { name: 'ドラグライト鉱石', quantity: 3 },
            { name: 'ガストドンの尖角', quantity: 1 },
          ],
          skill: [
            { name: '雷属性攻撃強化', level: 1 },
            { name: '体力増強', level: 2 },
          ],
        },
        {
          name: 'インゴットコイルα',
          materials: [
            { name: 'ユニオン鉱石', quantity: 3 },
            { name: '堅竜骨', quantity: 1 },
            { name: 'ドラグライト鉱石', quantity: 3 },
            { name: 'ガストドンの堅殻', quantity: 1 },
          ],
          skill: [{ name: '風圧耐性', level: 2 }],
        },
        {
          name: 'インゴットグリーヴα',
          materials: [
            { name: 'ユニオン鉱石', quantity: 2 },
            { name: '堅竜骨', quantity: 1 },
            { name: 'ドラグライト鉱石', quantity: 3 },
            { name: 'ガストドンの堅殻', quantity: 3 },
          ],
          skill: [
            { name: '風圧耐性', level: 1 },
            { name: '防御', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'インゴットβ',
      armors: [
        {
          name: 'インゴットヘルムβ',
          materials: [
            { name: 'ユニオン鉱石', quantity: 2 },
            { name: '堅竜骨', quantity: 1 },
            { name: 'ドラグライト鉱石', quantity: 8 },
            { name: 'ガストドンの尖角', quantity: 3 },
          ],
          skill: [{ name: '雷属性攻撃強化', level: 1 }],
        },
        {
          name: 'インゴットメイルβ',
          materials: [
            { name: 'ユニオン鉱石', quantity: 2 },
            { name: '堅竜骨', quantity: 1 },
            { name: 'ドラグライト鉱石', quantity: 8 },
            { name: 'ガストドンの堅殻', quantity: 3 },
          ],
          skill: [{ name: '雷耐性', level: 1 }],
        },
        {
          name: 'インゴットアームβ',
          materials: [
            { name: 'ユニオン鉱石', quantity: 3 },
            { name: '堅竜骨', quantity: 1 },
            { name: 'ドラグライト鉱石', quantity: 3 },
            { name: 'ガストドンの尖角', quantity: 1 },
          ],
          skill: [{ name: '体力増強', level: 2 }],
        },
        {
          name: 'インゴットコイルβ',
          materials: [
            { name: 'ユニオン鉱石', quantity: 3 },
            { name: '堅竜骨', quantity: 1 },
            { name: 'ドラグライト鉱石', quantity: 3 },
            { name: 'ガストドンの堅殻', quantity: 1 },
          ],
          skill: [{ name: '風圧耐性', level: 1 }],
        },
        {
          name: 'インゴットグリーヴβ',
          materials: [
            { name: 'ユニオン鉱石', quantity: 2 },
            { name: '堅竜骨', quantity: 1 },
            { name: 'ドラグライト鉱石', quantity: 3 },
            { name: 'ガストドンの堅殻', quantity: 3 },
          ],
          skill: [{ name: '防御', level: 2 }],
        },
      ],
    },
    {
      name: 'ブリゲイドα',
      armors: [
        {
          name: 'ブリゲイドロポスα',
          materials: [
            { name: '狩猟王のコイン', quantity: 2 },
            { name: 'ツィツィコイン', quantity: 4 },
            { name: 'ガマルコイン', quantity: 3 },
            { name: '堅竜骨', quantity: 2 },
          ],
          skill: [{ name: '雷属性攻撃強化', level: 1 }],
        },
        {
          name: 'ブリゲイドスーツα',
          materials: [
            { name: '狩猟王のコイン', quantity: 3 },
            { name: 'ツィツィコイン', quantity: 4 },
            { name: 'レウスコイン', quantity: 3 },
            { name: '堅竜骨', quantity: 2 },
          ],
          skill: [{ name: '雷耐性', level: 1 }],
        },
        {
          name: 'ブリゲイドアームα',
          materials: [
            { name: '狩猟王のコイン', quantity: 2 },
            { name: 'ボロスコイン', quantity: 4 },
            { name: 'レウスコイン', quantity: 3 },
            { name: '堅竜骨', quantity: 2 },
          ],
          skill: [{ name: '体力増強', level: 1 }],
        },
        {
          name: 'ブリゲイドコイルα',
          materials: [
            { name: '狩猟王のコイン', quantity: 2 },
            { name: 'ボロスコイン', quantity: 4 },
            { name: 'ガマルコイン', quantity: 3 },
            { name: '堅竜骨', quantity: 2 },
          ],
          skill: [{ name: '風圧耐性', level: 1 }],
        },
        {
          name: 'ブリゲイドブーツα',
          materials: [
            { name: '狩猟王のコイン', quantity: 2 },
            { name: 'ガマルコイン', quantity: 3 },
            { name: 'レウスコイン', quantity: 3 },
            { name: '堅竜骨', quantity: 2 },
          ],
          skill: [{ name: '防御', level: 1 }],
        },
      ],
    },
    {
      name: 'ブリゲイドα',
      armors: [
        {
          name: 'ブリゲイドロポスα',
          materials: [
            { name: '狩猟王のコイン', quantity: 2 },
            { name: 'ツィツィコイン', quantity: 4 },
            { name: 'ガマルコイン', quantity: 3 },
            { name: '堅竜骨', quantity: 2 },
          ],
          skill: [
            { name: '回復速度', level: 2 },
            { name: '笛吹き名人', level: 1 },
          ],
        },
        {
          name: 'ブリゲイドスーツα',
          materials: [
            { name: '狩猟王のコイン', quantity: 3 },
            { name: 'ツィツィコイン', quantity: 4 },
            { name: 'レウスコイン', quantity: 3 },
            { name: '堅竜骨', quantity: 2 },
          ],
          skill: [{ name: '精霊の加護', level: 2 }],
        },
        {
          name: 'ブリゲイドアームα',
          materials: [
            { name: '狩猟王のコイン', quantity: 2 },
            { name: 'ボロスコイン', quantity: 4 },
            { name: 'レウスコイン', quantity: 3 },
            { name: '堅竜骨', quantity: 2 },
          ],
          skill: [
            { name: '砲撃手', level: 2 },
            { name: '精霊の加護', level: 1 },
          ],
        },
        {
          name: 'ブリゲイドコイルα',
          materials: [
            { name: '狩猟王のコイン', quantity: 2 },
            { name: 'ボロスコイン', quantity: 4 },
            { name: 'ガマルコイン', quantity: 3 },
            { name: '堅竜骨', quantity: 2 },
          ],
          skill: [
            { name: '地質学', level: 2 },
            { name: '回復速度', level: 1 },
          ],
        },
        {
          name: 'ブリゲイドブーツα',
          materials: [
            { name: '狩猟王のコイン', quantity: 2 },
            { name: 'ガマルコイン', quantity: 3 },
            { name: 'レウスコイン', quantity: 3 },
            { name: '堅竜骨', quantity: 2 },
          ],
          skill: [
            { name: '研究者', level: 1 },
            { name: '地質学', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'ブリゲイドβ',
      armors: [
        {
          name: 'ブリゲイドロポスβ',
          materials: [
            { name: '狩猟王のコイン', quantity: 2 },
            { name: 'ツィツィコイン', quantity: 4 },
            { name: 'ガマルコイン', quantity: 3 },
            { name: '堅竜骨', quantity: 2 },
          ],
          skill: [{ name: '回復速度', level: 2 }],
        },
        {
          name: 'ブリゲイドスーツβ',
          materials: [
            { name: '狩猟王のコイン', quantity: 3 },
            { name: 'ツィツィコイン', quantity: 4 },
            { name: 'レウスコイン', quantity: 3 },
            { name: '堅竜骨', quantity: 2 },
          ],
          skill: [{ name: '精霊の加護', level: 1 }],
        },
        {
          name: 'ブリゲイドアームβ',
          materials: [
            { name: '狩猟王のコイン', quantity: 2 },
            { name: 'ボロスコイン', quantity: 4 },
            { name: 'レウスコイン', quantity: 3 },
            { name: '堅竜骨', quantity: 2 },
          ],
          skill: [{ name: '砲撃手', level: 2 }],
        },
        {
          name: 'ブリゲイドコイルβ',
          materials: [
            { name: '狩猟王のコイン', quantity: 2 },
            { name: 'ボロスコイン', quantity: 4 },
            { name: 'ガマルコイン', quantity: 3 },
            { name: '堅竜骨', quantity: 2 },
          ],
          skill: [{ name: '地質学', level: 2 }],
        },
        {
          name: 'ブリゲイドブーツβ',
          materials: [
            { name: '狩猟王のコイン', quantity: 2 },
            { name: 'ガマルコイン', quantity: 3 },
            { name: 'レウスコイン', quantity: 3 },
            { name: '堅竜骨', quantity: 2 },
          ],
          skill: [{ name: '研究者', level: 1 }],
        },
      ],
    },
    {
      name: 'アイルーフェイクα',
      armors: [
        {
          name: 'アイルーフェイクα',
          materials: [
            { name: 'オトモダチケット', quantity: 3 },
            { name: '浮空竜の上毛皮', quantity: 3 },
            { name: '上質な毛皮', quantity: 3 },
            { name: '獄炎石', quantity: 1 },
          ],
          skill: [{ name: 'オトモへの采配', level: 3 }],
        },
      ],
    },
    {
      name: '知略の眼鏡α',
      armors: [
        {
          name: '知略の眼鏡α',
          materials: [
            { name: '獄炎石', quantity: 2 },
            { name: 'ノヴァクリスタル', quantity: 2 },
            { name: 'ユニオン鉱石', quantity: 6 },
          ],
          skill: [{ name: '見切り', level: 2 }],
        },
      ],
    },
    {
      name: 'ラヴァα',
      armors: [
        {
          name: 'ラヴァヘルムα',
          materials: [
            { name: '溶岩竜の上鱗', quantity: 4 },
            { name: '溶岩竜の堅殻', quantity: 3 },
            { name: '溶岩竜の上ヒレ', quantity: 3 },
            { name: '堅竜骨', quantity: 6 },
          ],
          skill: [
            { name: '火属性攻撃強化', level: 2 },
            { name: '納刀術', level: 1 },
          ],
        },
        {
          name: 'ラヴァメイルα',
          materials: [
            { name: '溶岩竜の堅殻', quantity: 4 },
            { name: '溶岩竜の上ヒレ', quantity: 2 },
            { name: '溶岩竜の上鱗', quantity: 6 },
            { name: 'ユニオン鉱石', quantity: 6 },
          ],
          skill: [
            { name: '火属性攻撃強化', level: 2 },
            { name: '熱ダメージ無効', level: 1 },
          ],
        },
        {
          name: 'ラヴァアームα',
          materials: [
            { name: '溶岩竜の堅殻', quantity: 4 },
            { name: '溶岩竜の鋭牙', quantity: 4 },
            { name: '溶岩竜の上鱗', quantity: 6 },
            { name: '咬魚の上皮', quantity: 6 },
          ],
          skill: [
            { name: '滑走強化', level: 1 },
            { name: '広域化', level: 1 },
          ],
        },
        {
          name: 'ラヴァコイルα',
          materials: [
            { name: '溶岩竜の上鱗', quantity: 4 },
            { name: '溶岩竜の堅殻', quantity: 2 },
            { name: '溶岩竜の鋭牙', quantity: 2 },
            { name: '咬魚の大ヒゲ', quantity: 4 },
          ],
          skill: [
            { name: '納刀術', level: 2 },
            { name: '体力回復量UP', level: 1 },
          ],
        },
        {
          name: 'ラヴァグリーヴα',
          materials: [
            { name: '溶岩竜の堅殻', quantity: 6 },
            { name: '溶岩竜の鋭牙', quantity: 2 },
            { name: '溶岩竜の上ヒレ', quantity: 4 },
            { name: '獄炎石', quantity: 1 },
          ],
          skill: [
            { name: '火属性攻撃強化', level: 1 },
            { name: '散弾・剛射強化', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'ラヴァβ',
      armors: [
        {
          name: 'ラヴァヘルムβ',
          materials: [
            { name: '溶岩竜の上鱗', quantity: 4 },
            { name: '溶岩竜の堅殻', quantity: 3 },
            { name: '溶岩竜の上ヒレ', quantity: 3 },
            { name: '堅竜骨', quantity: 6 },
          ],
          skill: [
            { name: '火属性攻撃強化', level: 1 },
            { name: '納刀術', level: 1 },
          ],
        },
        {
          name: 'ラヴァメイルβ',
          materials: [
            { name: '溶岩竜の堅殻', quantity: 4 },
            { name: '溶岩竜の上ヒレ', quantity: 2 },
            { name: '溶岩竜の上鱗', quantity: 6 },
            { name: 'ユニオン鉱石', quantity: 6 },
          ],
          skill: [{ name: '火属性攻撃強化', level: 2 }],
        },
        {
          name: 'ラヴァアームβ',
          materials: [
            { name: '溶岩竜の堅殻', quantity: 4 },
            { name: '溶岩竜の鋭牙', quantity: 4 },
            { name: '溶岩竜の上鱗', quantity: 6 },
            { name: '咬魚の上皮', quantity: 6 },
          ],
          skill: [{ name: '滑走強化', level: 1 }],
        },
        {
          name: 'ラヴァコイルβ',
          materials: [
            { name: '溶岩竜の上鱗', quantity: 4 },
            { name: '溶岩竜の堅殻', quantity: 2 },
            { name: '溶岩竜の鋭牙', quantity: 2 },
            { name: '咬魚の大ヒゲ', quantity: 4 },
          ],
          skill: [{ name: '納刀術', level: 2 }],
        },
        {
          name: 'ラヴァグリーヴβ',
          materials: [
            { name: '溶岩竜の堅殻', quantity: 6 },
            { name: '溶岩竜の鋭牙', quantity: 2 },
            { name: '溶岩竜の上ヒレ', quantity: 4 },
            { name: '獄炎石', quantity: 1 },
          ],
          skill: [{ name: '散弾・剛射強化', level: 1 }],
        },
      ],
    },
    {
      name: 'ギエナα',
      armors: [
        {
          name: 'ギエナヘルムα',
          materials: [
            { name: '風漂竜の上鱗', quantity: 4 },
            { name: '風漂竜の上皮', quantity: 2 },
            { name: '凍結袋', quantity: 2 },
            { name: '眩鳥の上鱗', quantity: 2 },
          ],
          skill: [
            { name: '精霊の加護', level: 2 },
            { name: '氷属性攻撃強化', level: 1 },
          ],
        },
        {
          name: 'ギエナメイルα',
          materials: [
            { name: '風漂竜の上皮', quantity: 6 },
            { name: '風漂竜の尖爪', quantity: 3 },
            { name: '風漂竜の翼', quantity: 3 },
            { name: '風漂竜の宝玉', quantity: 1 },
          ],
          skill: [
            { name: '精霊の加護', level: 1 },
            { name: '回避性能', level: 2 },
          ],
        },
        {
          name: 'ギエナアームα',
          materials: [
            { name: '風漂竜の上皮', quantity: 4 },
            { name: '風漂竜の上鱗', quantity: 4 },
            { name: '風漂竜の尾膜', quantity: 3 },
            { name: 'ノヴァクリスタル', quantity: 1 },
          ],
          skill: [
            { name: '回避性能', level: 1 },
            { name: '飛燕', level: 1 },
          ],
        },
        {
          name: 'ギエナコイルα',
          materials: [
            { name: '風漂竜の上皮', quantity: 4 },
            { name: '風漂竜の上鱗', quantity: 4 },
            { name: '凍結袋', quantity: 2 },
            { name: '風漂竜の逆鱗', quantity: 1 },
          ],
          skill: [
            { name: '氷属性攻撃強化', level: 2 },
            { name: '風圧耐性', level: 1 },
          ],
        },
        {
          name: 'ギエナグリーヴα',
          materials: [
            { name: '風漂竜の上鱗', quantity: 4 },
            { name: '風漂竜の上皮', quantity: 2 },
            { name: '風漂竜の翼', quantity: 2 },
            { name: '眩鳥の上皮', quantity: 2 },
          ],
          skill: [
            { name: '氷耐性', level: 2 },
            { name: '抜刀術【技】', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'ギエナβ',
      armors: [
        {
          name: 'ギエナヘルムβ',
          materials: [
            { name: '風漂竜の上鱗', quantity: 4 },
            { name: '風漂竜の上皮', quantity: 2 },
            { name: '凍結袋', quantity: 2 },
            { name: '眩鳥の上鱗', quantity: 2 },
          ],
          skill: [{ name: '精霊の加護', level: 2 }],
        },
        {
          name: 'ギエナメイルβ',
          materials: [
            { name: '風漂竜の上皮', quantity: 6 },
            { name: '風漂竜の尖爪', quantity: 3 },
            { name: '風漂竜の翼', quantity: 3 },
            { name: '風漂竜の宝玉', quantity: 1 },
          ],
          skill: [{ name: '回避性能', level: 2 }],
        },
        {
          name: 'ギエナアームβ',
          materials: [
            { name: '風漂竜の上皮', quantity: 4 },
            { name: '風漂竜の上鱗', quantity: 4 },
            { name: '風漂竜の尾膜', quantity: 3 },
            { name: 'ノヴァクリスタル', quantity: 1 },
          ],
          skill: [{ name: '飛燕', level: 1 }],
        },
        {
          name: 'ギエナコイルβ',
          materials: [
            { name: '風漂竜の上皮', quantity: 4 },
            { name: '風漂竜の上鱗', quantity: 4 },
            { name: '凍結袋', quantity: 2 },
            { name: '風漂竜の逆鱗', quantity: 1 },
          ],
          skill: [{ name: '氷属性攻撃強化', level: 2 }],
        },
        {
          name: 'ギエナグリーヴβ',
          materials: [
            { name: '風漂竜の上鱗', quantity: 4 },
            { name: '風漂竜の上皮', quantity: 2 },
            { name: '風漂竜の翼', quantity: 2 },
            { name: '眩鳥の上皮', quantity: 2 },
          ],
          skill: [{ name: '氷耐性', level: 2 }],
        },
      ],
    },
    {
      name: 'ガロンα',
      armors: [
        {
          name: 'ガロンヘルムα',
          materials: [
            { name: '惨爪竜の上鱗', quantity: 4 },
            { name: '惨爪竜の大硬筋', quantity: 2 },
            { name: '惨爪竜の尖爪', quantity: 2 },
            { name: 'いびつな狂骨', quantity: 3 },
          ],
          skill: [
            { name: '裂傷耐性', level: 2 },
            { name: '見切り', level: 1 },
          ],
        },
        {
          name: 'ガロンメイルα',
          materials: [
            { name: '惨爪竜の大硬筋', quantity: 4 },
            { name: '惨爪竜の上鱗', quantity: 4 },
            { name: '惨爪竜の逆鱗', quantity: 1 },
            { name: 'カンタロスの堅殻', quantity: 5 },
          ],
          skill: [
            { name: '裂傷耐性', level: 1 },
            { name: '砥石使用高速化', level: 2 },
          ],
        },
        {
          name: 'ガロンアームα',
          materials: [
            { name: '惨爪竜の大硬筋', quantity: 4 },
            { name: '惨爪竜の上鱗', quantity: 4 },
            { name: '風漂竜の尾膜', quantity: 2 },
            { name: 'カンタロスの堅殻', quantity: 4 },
          ],
          skill: [
            { name: '見切り', level: 1 },
            { name: '体術', level: 1 },
          ],
        },
        {
          name: 'ガロンコイルα',
          materials: [
            { name: '惨爪竜の大硬筋', quantity: 6 },
            { name: '惨爪竜の尖爪', quantity: 4 },
            { name: '惨爪竜の鋭牙', quantity: 2 },
            { name: '惨爪竜の宝玉', quantity: 1 },
          ],
          skill: [
            { name: '見切り', level: 2 },
            { name: '裂傷耐性', level: 1 },
          ],
        },
        {
          name: 'ガロングリーヴα',
          materials: [
            { name: '惨爪竜の上鱗', quantity: 4 },
            { name: '惨爪竜の大硬筋', quantity: 2 },
            { name: '惨爪竜の鋭牙', quantity: 2 },
            { name: '堅竜骨', quantity: 6 },
          ],
          skill: [
            { name: '見切り', level: 1 },
            { name: '納刀術', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'ガロンβ',
      armors: [
        {
          name: 'ガロンヘルムβ',
          materials: [
            { name: '惨爪竜の上鱗', quantity: 4 },
            { name: '惨爪竜の大硬筋', quantity: 2 },
            { name: '惨爪竜の尖爪', quantity: 2 },
            { name: 'いびつな狂骨', quantity: 3 },
          ],
          skill: [{ name: '裂傷耐性', level: 2 }],
        },
        {
          name: 'ガロンメイルβ',
          materials: [
            { name: '惨爪竜の大硬筋', quantity: 4 },
            { name: '惨爪竜の上鱗', quantity: 4 },
            { name: '惨爪竜の逆鱗', quantity: 1 },
            { name: 'カンタロスの堅殻', quantity: 5 },
          ],
          skill: [{ name: '砥石使用高速化', level: 2 }],
        },
        {
          name: 'ガロンアームβ',
          materials: [
            { name: '惨爪竜の大硬筋', quantity: 4 },
            { name: '惨爪竜の上鱗', quantity: 4 },
            { name: '風漂竜の尾膜', quantity: 2 },
            { name: 'カンタロスの堅殻', quantity: 4 },
          ],
          skill: [{ name: '体術', level: 1 }],
        },
        {
          name: 'ガロンコイルβ',
          materials: [
            { name: '惨爪竜の大硬筋', quantity: 6 },
            { name: '惨爪竜の尖爪', quantity: 4 },
            { name: '惨爪竜の鋭牙', quantity: 2 },
            { name: '惨爪竜の宝玉', quantity: 1 },
          ],
          skill: [{ name: '見切り', level: 2 }],
        },
        {
          name: 'ガロングリーヴβ',
          materials: [
            { name: '惨爪竜の上鱗', quantity: 4 },
            { name: '惨爪竜の大硬筋', quantity: 2 },
            { name: '惨爪竜の鋭牙', quantity: 2 },
            { name: '堅竜骨', quantity: 6 },
          ],
          skill: [{ name: '納刀術', level: 1 }],
        },
      ],
    },
    {
      name: 'レウスα',
      armors: [
        {
          name: 'レウスヘルムα',
          materials: [
            { name: '火竜の上鱗', quantity: 4 },
            { name: '火竜の堅殻', quantity: 4 },
            { name: '爆炎袋', quantity: 2 },
            { name: '火竜の延髄', quantity: 1 },
          ],
          skill: [
            { name: '攻撃', level: 2 },
            { name: '火属性攻撃強化', level: 1 },
          ],
        },
        {
          name: 'レウスメイルα',
          materials: [
            { name: '火竜の上鱗', quantity: 4 },
            { name: '火竜の堅殻', quantity: 6 },
            { name: '火竜の翼', quantity: 3 },
            { name: '火竜の紅玉', quantity: 1 },
          ],
          skill: [
            { name: '火属性攻撃強化', level: 1 },
            { name: '弱点特攻', level: 2 },
          ],
        },
        {
          name: 'レウスアームα',
          materials: [
            { name: '火竜の堅殻', quantity: 4 },
            { name: '火竜の翼', quantity: 2 },
            { name: '爆炎袋', quantity: 2 },
            { name: '火竜の翼爪', quantity: 6 },
          ],
          skill: [
            { name: '攻撃', level: 1 },
            { name: '火耐性', level: 2 },
          ],
        },
        {
          name: 'レウスコイルα',
          materials: [
            { name: '火竜の上鱗', quantity: 4 },
            { name: '火竜の堅殻', quantity: 4 },
            { name: '火竜の翼', quantity: 2 },
            { name: '火竜の尻尾', quantity: 2 },
          ],
          skill: [
            { name: '火属性攻撃強化', level: 2 },
            { name: '集中', level: 1 },
          ],
        },
        {
          name: 'レウスグリーヴα',
          materials: [
            { name: '火竜の堅殻', quantity: 6 },
            { name: '火竜の上鱗', quantity: 4 },
            { name: '爆炎袋', quantity: 2 },
            { name: '火竜の逆鱗', quantity: 1 },
          ],
          skill: [
            { name: '弱点特攻', level: 1 },
            { name: 'ジャンプ鉄人', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'レウスβ',
      armors: [
        {
          name: 'レウスヘルムβ',
          materials: [
            { name: '火竜の上鱗', quantity: 4 },
            { name: '火竜の堅殻', quantity: 4 },
            { name: '爆炎袋', quantity: 2 },
            { name: '火竜の延髄', quantity: 1 },
          ],
          skill: [{ name: '攻撃', level: 2 }],
        },
        {
          name: 'レウスメイルβ',
          materials: [
            { name: '火竜の上鱗', quantity: 4 },
            { name: '火竜の堅殻', quantity: 6 },
            { name: '火竜の翼', quantity: 3 },
            { name: '火竜の紅玉', quantity: 1 },
          ],
          skill: [{ name: '弱点特攻', level: 2 }],
        },
        {
          name: 'レウスアームβ',
          materials: [
            { name: '火竜の堅殻', quantity: 4 },
            { name: '火竜の翼', quantity: 2 },
            { name: '爆炎袋', quantity: 2 },
            { name: '火竜の翼爪', quantity: 6 },
          ],
          skill: [{ name: '火耐性', level: 2 }],
        },
        {
          name: 'レウスコイルβ',
          materials: [
            { name: '火竜の上鱗', quantity: 4 },
            { name: '火竜の堅殻', quantity: 4 },
            { name: '火竜の翼', quantity: 2 },
            { name: '火竜の尻尾', quantity: 2 },
          ],
          skill: [{ name: '火属性攻撃強化', level: 2 }],
        },
        {
          name: 'レウスグリーヴβ',
          materials: [
            { name: '火竜の堅殻', quantity: 6 },
            { name: '火竜の上鱗', quantity: 4 },
            { name: '爆炎袋', quantity: 2 },
            { name: '火竜の逆鱗', quantity: 1 },
          ],
          skill: [{ name: 'ジャンプ鉄人', level: 1 }],
        },
      ],
    },
    {
      name: 'リオソウルα',
      armors: [
        {
          name: 'リオソウルヘルムα',
          materials: [
            { name: '蒼火竜の上鱗', quantity: 4 },
            { name: '蒼火竜の堅殻', quantity: 4 },
            { name: '蒼火竜の翼', quantity: 2 },
            { name: '火竜の紅玉', quantity: 1 },
          ],
          skill: [
            { name: '超会心', level: 1 },
            { name: '威嚇', level: 2 },
          ],
        },
        {
          name: 'リオソウルメイルα',
          materials: [
            { name: '蒼火竜の上鱗', quantity: 4 },
            { name: '蒼火竜の堅殻', quantity: 6 },
            { name: '蒼火竜の翼', quantity: 3 },
            { name: 'パルノスの上皮', quantity: 1 },
          ],
          skill: [
            { name: '火属性攻撃強化', level: 1 },
            { name: '属性解放/装填拡張', level: 2 },
          ],
        },
        {
          name: 'リオソウルアームα',
          materials: [
            { name: '蒼火竜の堅殻', quantity: 4 },
            { name: '蒼火竜の翼', quantity: 2 },
            { name: '蒼火竜の尻尾', quantity: 2 },
            { name: 'パルノスの尖爪', quantity: 6 },
          ],
          skill: [
            { name: '集中', level: 1 },
            { name: '風圧耐性', level: 2 },
          ],
        },
        {
          name: 'リオソウルコイルα',
          materials: [
            { name: '蒼火竜の上鱗', quantity: 4 },
            { name: '蒼火竜の堅殻', quantity: 4 },
            { name: '火竜の延髄', quantity: 2 },
            { name: '堅竜骨', quantity: 2 },
          ],
          skill: [
            { name: '風圧耐性', level: 2 },
            { name: '集中', level: 1 },
          ],
        },
        {
          name: 'リオソウルグリーヴα',
          materials: [
            { name: '蒼火竜の堅殻', quantity: 6 },
            { name: '蒼火竜の上鱗', quantity: 4 },
            { name: '蒼火竜の尻尾', quantity: 2 },
            { name: '火竜の逆鱗', quantity: 1 },
          ],
          skill: [
            { name: '集中', level: 1 },
            { name: 'クライマー', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'リオソウルβ',
      armors: [
        {
          name: 'リオソウルヘルムβ',
          materials: [
            { name: '蒼火竜の上鱗', quantity: 4 },
            { name: '蒼火竜の堅殻', quantity: 4 },
            { name: '蒼火竜の翼', quantity: 2 },
            { name: '火竜の紅玉', quantity: 1 },
          ],
          skill: [{ name: '超会心', level: 1 }],
        },
        {
          name: 'リオソウルメイルβ',
          materials: [
            { name: '蒼火竜の上鱗', quantity: 4 },
            { name: '蒼火竜の堅殻', quantity: 6 },
            { name: '蒼火竜の翼', quantity: 3 },
            { name: 'パルノスの上皮', quantity: 1 },
          ],
          skill: [{ name: '属性解放/装填拡張', level: 2 }],
        },
        {
          name: 'リオソウルアームβ',
          materials: [
            { name: '蒼火竜の堅殻', quantity: 4 },
            { name: '蒼火竜の翼', quantity: 2 },
            { name: '蒼火竜の尻尾', quantity: 2 },
            { name: 'パルノスの尖爪', quantity: 6 },
          ],
          skill: [{ name: '集中', level: 1 }],
        },
        {
          name: 'リオソウルコイルβ',
          materials: [
            { name: '蒼火竜の上鱗', quantity: 4 },
            { name: '蒼火竜の堅殻', quantity: 4 },
            { name: '火竜の延髄', quantity: 2 },
            { name: '堅竜骨', quantity: 2 },
          ],
          skill: [{ name: '風圧耐性', level: 2 }],
        },
        {
          name: 'リオソウルグリーヴβ',
          materials: [
            { name: '蒼火竜の堅殻', quantity: 6 },
            { name: '蒼火竜の上鱗', quantity: 4 },
            { name: '蒼火竜の尻尾', quantity: 2 },
            { name: '火竜の逆鱗', quantity: 1 },
          ],
          skill: [{ name: '集中', level: 1 }],
        },
      ],
    },
    {
      name: 'ディアブロα',
      armors: [
        {
          name: 'ディアブロヘルムα',
          materials: [
            { name: '角竜の堅甲', quantity: 4 },
            { name: '角竜の牙', quantity: 4 },
            { name: '上質なねじれた角', quantity: 2 },
            { name: '竜玉', quantity: 1 },
          ],
          skill: [
            { name: '抜刀術【技】', level: 2 },
            { name: '火事場力', level: 1 },
          ],
        },
        {
          name: 'ディアブロメイルα',
          materials: [
            { name: '角竜の堅殻', quantity: 4 },
            { name: '角竜の堅甲', quantity: 2 },
            { name: '上質なねじれた角', quantity: 2 },
            { name: 'ライトクリスタル', quantity: 2 },
          ],
          skill: [
            { name: '火事場力', level: 1 },
            { name: 'KO術', level: 2 },
          ],
        },
        {
          name: 'ディアブロアームα',
          materials: [
            { name: '角竜の堅甲', quantity: 4 },
            { name: '角竜の堅殻', quantity: 6 },
            { name: '角竜の尾甲', quantity: 3 },
            { name: 'ケストドンの堅殻', quantity: 5 },
          ],
          skill: [
            { name: '火事場力', level: 2 },
            { name: '耐震', level: 1 },
          ],
        },
        {
          name: 'ディアブロコイルα',
          materials: [
            { name: '角竜の堅殻', quantity: 4 },
            { name: '角竜の堅甲', quantity: 3 },
            { name: '角竜の牙', quantity: 2 },
            { name: 'ケストドンの頭殻', quantity: 3 },
          ],
          skill: [
            { name: '抜刀術【技】', level: 1 },
            { name: 'ランナー', level: 2 },
          ],
        },
        {
          name: 'ディアブログリーヴα',
          materials: [
            { name: '角竜の堅甲', quantity: 6 },
            { name: '角竜の堅殻', quantity: 4 },
            { name: '上質なねじれた角', quantity: 1 },
            { name: '角竜の延髄', quantity: 1 },
          ],
          skill: [
            { name: 'KO術', level: 1 },
            { name: '耐震', level: 2 },
          ],
        },
      ],
    },
    {
      name: 'ディアブロβ',
      armors: [
        {
          name: 'ディアブロヘルムβ',
          materials: [
            { name: '角竜の堅甲', quantity: 4 },
            { name: '角竜の牙', quantity: 4 },
            { name: '上質なねじれた角', quantity: 2 },
            { name: '竜玉', quantity: 1 },
          ],
          skill: [{ name: '抜刀術【技】', level: 2 }],
        },
        {
          name: 'ディアブロメイルβ',
          materials: [
            { name: '角竜の堅殻', quantity: 4 },
            { name: '角竜の堅甲', quantity: 2 },
            { name: '上質なねじれた角', quantity: 2 },
            { name: 'ライトクリスタル', quantity: 2 },
          ],
          skill: [{ name: 'KO術', level: 2 }],
        },
        {
          name: 'ディアブロアームβ',
          materials: [
            { name: '角竜の堅甲', quantity: 4 },
            { name: '角竜の堅殻', quantity: 6 },
            { name: '角竜の尾甲', quantity: 3 },
            { name: 'ケストドンの堅殻', quantity: 5 },
          ],
          skill: [{ name: '火事場力', level: 2 }],
        },
        {
          name: 'ディアブロコイルβ',
          materials: [
            { name: '角竜の堅殻', quantity: 4 },
            { name: '角竜の堅甲', quantity: 3 },
            { name: '角竜の牙', quantity: 2 },
            { name: 'ケストドンの頭殻', quantity: 3 },
          ],
          skill: [{ name: 'ランナー', level: 2 }],
        },
        {
          name: 'ディアブログリーヴβ',
          materials: [
            { name: '角竜の堅甲', quantity: 6 },
            { name: '角竜の堅殻', quantity: 4 },
            { name: '上質なねじれた角', quantity: 1 },
            { name: '角竜の延髄', quantity: 1 },
          ],
          skill: [{ name: '耐震', level: 2 }],
        },
      ],
    },
    {
      name: 'ディアネロα',
      armors: [
        {
          name: 'ディアネロヘルムα',
          materials: [
            { name: '黒角竜の堅甲', quantity: 4 },
            { name: '上質なねじれた角', quantity: 4 },
            { name: '上質な黒巻き角', quantity: 2 },
            { name: 'ノヴァクリスタル', quantity: 1 },
          ],
          skill: [{ name: '集中', level: 2 }],
        },
        {
          name: 'ディアネロメイルα',
          materials: [
            { name: '黒角竜の堅殻', quantity: 4 },
            { name: '黒角竜の堅甲', quantity: 2 },
            { name: '上質なねじれた角', quantity: 2 },
            { name: '角竜の延髄', quantity: 2 },
          ],
          skill: [{ name: '逆恨み', level: 2 }],
        },
        {
          name: 'ディアネロアームα',
          materials: [
            { name: '黒角竜の堅甲', quantity: 4 },
            { name: '黒角竜の堅殻', quantity: 6 },
            { name: 'カブレライト鉱石', quantity: 3 },
            { name: 'ガストドンの堅殻', quantity: 5 },
          ],
          skill: [
            { name: '集中', level: 1 },
            { name: 'ランナー', level: 1 },
          ],
        },
        {
          name: 'ディアネロコイルα',
          materials: [
            { name: '黒角竜の堅殻', quantity: 4 },
            { name: '黒角竜の堅甲', quantity: 3 },
            { name: '角竜の尾甲', quantity: 2 },
            { name: 'ガストドンの尖角', quantity: 3 },
          ],
          skill: [
            { name: '逆恨み', level: 1 },
            { name: '破壊王', level: 1 },
          ],
        },
        {
          name: 'ディアネログリーヴα',
          materials: [
            { name: '黒角竜の堅甲', quantity: 6 },
            { name: '黒角竜の堅殻', quantity: 4 },
            { name: '上質な黒巻き角', quantity: 1 },
            { name: '竜玉', quantity: 1 },
          ],
          skill: [
            { name: '通常弾・通常矢強化', level: 1 },
            { name: '火事場力', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'ディアネロβ',
      armors: [
        {
          name: 'ディアネロヘルムβ',
          materials: [
            { name: '黒角竜の堅甲', quantity: 4 },
            { name: '上質なねじれた角', quantity: 4 },
            { name: '上質な黒巻き角', quantity: 2 },
            { name: 'ノヴァクリスタル', quantity: 1 },
          ],
          skill: [{ name: '集中', level: 1 }],
        },
        {
          name: 'ディアネロメイルβ',
          materials: [
            { name: '黒角竜の堅殻', quantity: 4 },
            { name: '黒角竜の堅甲', quantity: 2 },
            { name: '上質なねじれた角', quantity: 2 },
            { name: '角竜の延髄', quantity: 2 },
          ],
          skill: [{ name: '逆恨み', level: 1 }],
        },
        {
          name: 'ディアネロアームβ',
          materials: [
            { name: '黒角竜の堅甲', quantity: 4 },
            { name: '黒角竜の堅殻', quantity: 6 },
            { name: 'カブレライト鉱石', quantity: 3 },
            { name: 'ガストドンの堅殻', quantity: 5 },
          ],
          skill: [{ name: '集中', level: 1 }],
        },
        {
          name: 'ディアネロコイルβ',
          materials: [
            { name: '黒角竜の堅殻', quantity: 4 },
            { name: '黒角竜の堅甲', quantity: 3 },
            { name: '角竜の尾甲', quantity: 2 },
            { name: 'ガストドンの尖角', quantity: 3 },
          ],
          skill: [{ name: '逆恨み', level: 1 }],
        },
        {
          name: 'ディアネログリーヴβ',
          materials: [
            { name: '黒角竜の堅甲', quantity: 6 },
            { name: '黒角竜の堅殻', quantity: 4 },
            { name: '上質な黒巻き角', quantity: 1 },
            { name: '竜玉', quantity: 1 },
          ],
          skill: [{ name: '通常弾・通常矢強化', level: 1 }],
        },
      ],
    },
    {
      name: 'ガンキンα',
      armors: [
        {
          name: 'ガンキンヘルムα',
          materials: [
            { name: '爆鎚竜の上鱗', quantity: 2 },
            { name: '爆鎚竜の堅殻', quantity: 2 },
            { name: '溶岩塊', quantity: 3 },
            { name: '獄炎石', quantity: 1 },
          ],
          skill: [{ name: '雷耐性', level: 2 }],
        },
        {
          name: 'ガンキンメイルα',
          materials: [
            { name: '爆鎚竜の堅殻', quantity: 2 },
            { name: '爆鎚竜の耐熱殻', quantity: 2 },
            { name: '爆鎚竜の顎', quantity: 4 },
            { name: '爆鎚竜の紅玉', quantity: 2 },
          ],
          skill: [{ name: '破壊王', level: 2 }],
        },
        {
          name: 'ガンキンアームα',
          materials: [
            { name: '爆鎚竜の堅殻', quantity: 3 },
            { name: '爆鎚竜の上鱗', quantity: 2 },
            { name: '爆鎚竜の延髄', quantity: 2 },
            { name: '溶岩塊', quantity: 1 },
          ],
          skill: [
            { name: 'ガード性能', level: 1 },
            { name: '防御', level: 1 },
          ],
        },
        {
          name: 'ガンキンコイルα',
          materials: [
            { name: '爆鎚竜の上鱗', quantity: 2 },
            { name: '爆鎚竜の堅殻', quantity: 1 },
            { name: 'ユニオン鉱石', quantity: 1 },
            { name: '電気袋', quantity: 1 },
          ],
          skill: [
            { name: '破壊王', level: 1 },
            { name: '雷耐性', level: 1 },
          ],
        },
        {
          name: 'ガンキングリーブα',
          materials: [
            { name: '爆鎚竜の堅殻', quantity: 2 },
            { name: '爆鎚竜の上鱗', quantity: 2 },
            { name: '爆鎚竜の耐熱殻', quantity: 2 },
            { name: 'ガストドンの堅殻', quantity: 2 },
          ],
          skill: [{ name: 'ガード性能', level: 2 }],
        },
      ],
    },
    {
      name: 'ガンキンβ',
      armors: [
        {
          name: 'ガンキンヘルムβ',
          materials: [
            { name: '爆鎚竜の上鱗', quantity: 2 },
            { name: '爆鎚竜の堅殻', quantity: 2 },
            { name: '溶岩塊', quantity: 3 },
            { name: '獄炎石', quantity: 1 },
          ],
          skill: [{ name: '雷耐性', level: 1 }],
        },
        {
          name: 'ガンキンメイルβ',
          materials: [
            { name: '爆鎚竜の堅殻', quantity: 2 },
            { name: '爆鎚竜の耐熱殻', quantity: 2 },
            { name: '爆鎚竜の顎', quantity: 4 },
            { name: '爆鎚竜の紅玉', quantity: 2 },
          ],
          skill: [{ name: '破壊王', level: 1 }],
        },
        {
          name: 'ガンキンアームβ',
          materials: [
            { name: '爆鎚竜の堅殻', quantity: 3 },
            { name: '爆鎚竜の上鱗', quantity: 2 },
            { name: '爆鎚竜の延髄', quantity: 2 },
            { name: '溶岩塊', quantity: 1 },
          ],
          skill: [{ name: 'ガード性能', level: 1 }],
        },
        {
          name: 'ガンキンコイルβ',
          materials: [
            { name: '爆鎚竜の上鱗', quantity: 2 },
            { name: '爆鎚竜の堅殻', quantity: 1 },
            { name: 'ユニオン鉱石', quantity: 1 },
            { name: '電気袋', quantity: 1 },
          ],
          skill: [{ name: '破壊王', level: 1 }],
        },
        {
          name: 'ガンキングリーブβ',
          materials: [
            { name: '爆鎚竜の堅殻', quantity: 2 },
            { name: '爆鎚竜の上鱗', quantity: 2 },
            { name: '爆鎚竜の耐熱殻', quantity: 2 },
            { name: 'ガストドンの堅殻', quantity: 2 },
          ],
          skill: [{ name: 'ガード性能', level: 1 }],
        },
      ],
    },
    {
      name: 'バゼルα',
      armors: [
        {
          name: 'バゼルヘルムα',
          materials: [
            { name: '爆鱗竜の堅殻', quantity: 2 },
            { name: '爆鱗竜の尖爪', quantity: 2 },
            { name: '爆鱗竜の翼', quantity: 3 },
            { name: '爆鱗竜の宝玉', quantity: 1 },
          ],
          skill: [
            { name: '耳栓', level: 2 },
            { name: '爆破属性強化', level: 1 },
          ],
        },
        {
          name: 'バゼルメイルα',
          materials: [
            { name: '爆鱗竜の上鱗', quantity: 2 },
            { name: '爆鱗竜の堅殻', quantity: 2 },
            { name: '爆鱗竜の爆腺', quantity: 4 },
            { name: '爆鎚竜の耐熱殻', quantity: 2 },
          ],
          skill: [
            { name: 'ガード性能', level: 2 },
            { name: '爆破やられ耐性', level: 2 },
          ],
        },
        {
          name: 'バゼルアームα',
          materials: [
            { name: '爆鱗竜の堅殻', quantity: 3 },
            { name: '爆鱗竜の尖爪', quantity: 2 },
            { name: '爆鱗竜の尻尾', quantity: 2 },
            { name: '獄炎石', quantity: 1 },
          ],
          skill: [
            { name: '耳栓', level: 1 },
            { name: '抜刀術【技】', level: 2 },
          ],
        },
        {
          name: 'バゼルコイルα',
          materials: [
            { name: '爆鱗竜の堅殻', quantity: 2 },
            { name: '爆鱗竜の上鱗', quantity: 1 },
            { name: '爆鱗竜の爆腺', quantity: 1 },
            { name: '爆鎚竜の延髄', quantity: 1 },
          ],
          skill: [
            { name: '耳栓', level: 2 },
            { name: 'ジャンプ鉄人', level: 1 },
          ],
        },
        {
          name: 'バゼルグリーブα',
          materials: [
            { name: '爆鱗竜の上鱗', quantity: 2 },
            { name: '爆鱗竜の堅殻', quantity: 2 },
            { name: '爆鱗竜の尖爪', quantity: 2 },
            { name: '岩賊竜の上皮', quantity: 2 },
          ],
          skill: [
            { name: '抜刀術【技】', level: 1 },
            { name: 'ボマー', level: 2 },
          ],
        },
      ],
    },
    {
      name: 'バゼルβ',
      armors: [
        {
          name: 'バゼルヘルムβ',
          materials: [
            { name: '爆鱗竜の堅殻', quantity: 2 },
            { name: '爆鱗竜の尖爪', quantity: 2 },
            { name: '爆鱗竜の翼', quantity: 3 },
            { name: '爆鱗竜の宝玉', quantity: 1 },
          ],
          skill: [{ name: '耳栓', level: 2 }],
        },
        {
          name: 'バゼルメイルβ',
          materials: [
            { name: '爆鱗竜の上鱗', quantity: 2 },
            { name: '爆鱗竜の堅殻', quantity: 2 },
            { name: '爆鱗竜の爆腺', quantity: 4 },
            { name: '爆鎚竜の耐熱殻', quantity: 2 },
          ],
          skill: [{ name: 'ガード性能', level: 2 }],
        },
        {
          name: 'バゼルアームβ',
          materials: [
            { name: '爆鱗竜の堅殻', quantity: 3 },
            { name: '爆鱗竜の尖爪', quantity: 2 },
            { name: '爆鱗竜の尻尾', quantity: 2 },
            { name: '獄炎石', quantity: 1 },
          ],
          skill: [{ name: '抜刀術【技】', level: 2 }],
        },
        {
          name: 'バゼルコイルβ',
          materials: [
            { name: '爆鱗竜の堅殻', quantity: 2 },
            { name: '爆鱗竜の上鱗', quantity: 1 },
            { name: '爆鱗竜の爆腺', quantity: 1 },
            { name: '爆鎚竜の延髄', quantity: 1 },
          ],
          skill: [{ name: '耳栓', level: 2 }],
        },
        {
          name: 'バゼルグリーブβ',
          materials: [
            { name: '爆鱗竜の上鱗', quantity: 2 },
            { name: '爆鱗竜の堅殻', quantity: 2 },
            { name: '爆鱗竜の尖爪', quantity: 2 },
            { name: '岩賊竜の上皮', quantity: 2 },
          ],
          skill: [{ name: 'ボマー', level: 2 }],
        },
      ],
    },
    {
      name: 'ダマスクα',
      armors: [
        {
          name: 'ダマスクヘルムα',
          materials: [
            { name: '古龍の血', quantity: 2 },
            { name: 'ユニオン鉱石', quantity: 3 },
            { name: '痺賊竜の大頭巾', quantity: 3 },
            { name: 'ノヴァクリスタル', quantity: 1 },
          ],
          skill: [
            { name: '防御', level: 2 },
            { name: '砥石使用高速化', level: 1 },
          ],
        },
        {
          name: 'ダマスクメイルα',
          materials: [
            { name: '古龍の血', quantity: 2 },
            { name: 'ユニオン鉱石', quantity: 3 },
            { name: '爆鎚竜の耐熱殻', quantity: 3 },
            { name: '獄炎石', quantity: 1 },
          ],
          skill: [
            { name: '防御', level: 2 },
            { name: '集中', level: 2 },
          ],
        },
        {
          name: 'ダマスクアームα',
          materials: [
            { name: '古龍の血', quantity: 2 },
            { name: 'ユニオン鉱石', quantity: 3 },
            { name: '黒角竜の堅甲', quantity: 5 },
            { name: 'ノヴァクリスタル', quantity: 1 },
          ],
          skill: [
            { name: '砥石使用高速化', level: 1 },
            { name: '匠', level: 1 },
          ],
        },
        {
          name: 'ダマスクコイルα',
          materials: [
            { name: '古龍の血', quantity: 2 },
            { name: 'ユニオン鉱石', quantity: 3 },
            { name: '岩賊竜の顎', quantity: 3 },
            { name: '獄炎石', quantity: 1 },
          ],
          skill: [
            { name: '集中', level: 1 },
            { name: '防御力DOWN耐性', level: 2 },
          ],
        },
        {
          name: 'ダマスクグリーブα',
          materials: [
            { name: '古龍の血', quantity: 2 },
            { name: 'ユニオン鉱石', quantity: 3 },
            { name: '溶岩竜の堅殻', quantity: 5 },
            { name: 'ノヴァクリスタル', quantity: 1 },
          ],
          skill: [
            { name: '防御', level: 2 },
            { name: '防御力DOWN耐性', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'ダマスクβ',
      armors: [
        {
          name: 'ダマスクヘルムβ',
          materials: [
            { name: '古龍の血', quantity: 2 },
            { name: 'ユニオン鉱石', quantity: 3 },
            { name: '痺賊竜の大頭巾', quantity: 3 },
            { name: 'ノヴァクリスタル', quantity: 1 },
          ],
          skill: [{ name: '防御', level: 2 }],
        },
        {
          name: 'ダマスクメイルβ',
          materials: [
            { name: '古龍の血', quantity: 2 },
            { name: 'ユニオン鉱石', quantity: 3 },
            { name: '爆鎚竜の耐熱殻', quantity: 3 },
            { name: '獄炎石', quantity: 1 },
          ],
          skill: [{ name: '集中', level: 2 }],
        },
        {
          name: 'ダマスクアームβ',
          materials: [
            { name: '古龍の血', quantity: 2 },
            { name: 'ユニオン鉱石', quantity: 3 },
            { name: '黒角竜の堅甲', quantity: 5 },
            { name: 'ノヴァクリスタル', quantity: 1 },
          ],
          skill: [{ name: '匠', level: 1 }],
        },
        {
          name: 'ダマスクコイルβ',
          materials: [
            { name: '古龍の血', quantity: 2 },
            { name: 'ユニオン鉱石', quantity: 3 },
            { name: '岩賊竜の顎', quantity: 3 },
            { name: '獄炎石', quantity: 1 },
          ],
          skill: [{ name: '集中', level: 1 }],
        },
        {
          name: 'ダマスクグリーブβ',
          materials: [
            { name: '古龍の血', quantity: 2 },
            { name: 'ユニオン鉱石', quantity: 3 },
            { name: '溶岩竜の堅殻', quantity: 5 },
            { name: 'ノヴァクリスタル', quantity: 1 },
          ],
          skill: [{ name: '防御', level: 2 }],
        },
      ],
    },
    {
      name: 'ドーベルα',
      armors: [
        {
          name: 'ドーベルヘルムα',
          materials: [
            { name: '古龍骨', quantity: 3 },
            { name: '上質な堅骨', quantity: 3 },
            { name: '爆鱗竜の爆腺', quantity: 1 },
            { name: 'いにしえの龍骨', quantity: 1 },
          ],
          skill: [
            { name: '属性解放/装填拡張', level: 1 },
            { name: '龍耐性', level: 1 },
          ],
        },
        {
          name: 'ドーベルメイルα',
          materials: [
            { name: '古龍骨', quantity: 3 },
            { name: '上質な堅骨', quantity: 3 },
            { name: '角竜の延髄', quantity: 1 },
            { name: 'いにしえの龍骨', quantity: 1 },
          ],
          skill: [
            { name: '攻撃', level: 2 },
            { name: 'キノコ大好き', level: 1 },
          ],
        },
        {
          name: 'ドーベルアームα',
          materials: [
            { name: '古龍骨', quantity: 3 },
            { name: '上質な堅骨', quantity: 3 },
            { name: '爆鎚竜の延髄', quantity: 1 },
            { name: '荒々しい蛮骨', quantity: 3 },
          ],
          skill: [
            { name: 'スタミナ急速回復', level: 2 },
            { name: 'キノコ大好き', level: 1 },
          ],
        },
        {
          name: 'ドーベルコイルα',
          materials: [
            { name: '古龍骨', quantity: 3 },
            { name: '上質な堅骨', quantity: 3 },
            { name: '火竜の延髄', quantity: 1 },
            { name: '荒々しい蛮骨', quantity: 3 },
          ],
          skill: [
            { name: '龍耐性', level: 2 },
            { name: '攻撃', level: 1 },
          ],
        },
        {
          name: 'ドーベルグリーブα',
          materials: [
            { name: '古龍骨', quantity: 3 },
            { name: '上質な堅骨', quantity: 3 },
            { name: '骨鎚竜の延髄', quantity: 1 },
            { name: 'いにしえの龍骨', quantity: 1 },
          ],
          skill: [
            { name: '攻撃', level: 2 },
            { name: 'スタミナ急速回復', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'ドーベルβ',
      armors: [
        {
          name: 'ドーベルヘルムβ',
          materials: [
            { name: '古龍骨', quantity: 3 },
            { name: '上質な堅骨', quantity: 3 },
            { name: '爆鱗竜の爆膜', quantity: 1 },
            { name: 'いにしえの龍骨', quantity: 1 },
          ],
          skill: [{ name: '属性解放/装填拡張', level: 1 }],
        },
        {
          name: 'ドーベルメイルβ',
          materials: [
            { name: '古龍骨', quantity: 3 },
            { name: '上質な堅骨', quantity: 3 },
            { name: '角竜の延髄', quantity: 1 },
            { name: 'いにしえの龍骨', quantity: 1 },
          ],
          skill: [{ name: '攻撃', level: 2 }],
        },
        {
          name: 'ドーベルアームβ',
          materials: [
            { name: '古龍骨', quantity: 3 },
            { name: '上質な堅骨', quantity: 3 },
            { name: '爆鎚竜の延髄', quantity: 1 },
            { name: '荒々しい蛮骨', quantity: 3 },
          ],
          skill: [
            { name: 'スタミナ急速回復', level: 1 },
            { name: 'キノコ大好き', level: 1 },
          ],
        },
        {
          name: 'ドーベルコイルβ',
          materials: [
            { name: '古龍骨', quantity: 3 },
            { name: '上質な堅骨', quantity: 3 },
            { name: '火竜の延髄', quantity: 1 },
            { name: '荒々しい蛮骨', quantity: 3 },
          ],
          skill: [{ name: '龍耐性', level: 2 }],
        },
        {
          name: 'ドーベルグリーブβ',
          materials: [
            { name: '古龍骨', quantity: 3 },
            { name: '上質な堅骨', quantity: 3 },
            { name: '骨鎚竜の延髄', quantity: 1 },
            { name: 'いにしえの龍骨', quantity: 1 },
          ],
          skill: [{ name: '攻撃', level: 2 }],
        },
      ],
    },
    {
      name: 'デスギアα',
      armors: [
        {
          name: 'デスギアゲヒルα',
          materials: [
            { name: '禍々しい布', quantity: 2 },
            { name: '荒々しい蛮骨', quantity: 1 },
            { name: '屍套龍の被膜', quantity: 1 },
            { name: '鋭利な爪', quantity: 3 },
          ],
          skill: [
            { name: '死中に活', level: 1 },
            { name: '見切り', level: 1 },
          ],
        },
        {
          name: 'デスギアムスケルα',
          materials: [
            { name: '禍々しい布', quantity: 2 },
            { name: '上質な堅骨', quantity: 1 },
            { name: '屍套龍の被膜', quantity: 1 },
            { name: 'モンスターの濃汁', quantity: 2 },
          ],
          skill: [
            { name: '不屈', level: 1 },
            { name: '属性解放/装填拡張', level: 1 },
          ],
        },
        {
          name: 'デスギアファオストα',
          materials: [
            { name: '禍々しい布', quantity: 2 },
            { name: '荒々しい蛮骨', quantity: 2 },
            { name: '屍套龍の被膜', quantity: 2 },
            { name: 'ノヴァクリスタル', quantity: 1 },
          ],
          skill: [
            { name: '集中', level: 2 },
            { name: '龍属性攻撃強化', level: 1 },
          ],
        },
        {
          name: 'デスギアナーベルα',
          materials: [
            { name: '禍々しい布', quantity: 2 },
            { name: '荒々しい蛮骨', quantity: 1 },
            { name: '屍套龍の被膜', quantity: 1 },
            { name: 'モンスターの濃汁', quantity: 2 },
          ],
          skill: [
            { name: '集中', level: 1 },
            { name: '龍属性攻撃強化', level: 2 },
          ],
        },
        {
          name: 'デスギアフェルゼα',
          materials: [
            { name: '禍々しい布', quantity: 2 },
            { name: 'いにしえの龍骨', quantity: 1 },
            { name: '屍套龍の被膜', quantity: 2 },
            { name: 'ノヴァクリスタル', quantity: 1 },
          ],
          skill: [
            { name: '攻撃', level: 2 },
            { name: '匠', level: 2 },
          ],
        },
      ],
    },
    {
      name: 'デスギアβ',
      armors: [
        {
          name: 'デスギアゲヒルβ',
          materials: [
            { name: '禍々しい布', quantity: 2 },
            { name: '荒々しい蛮骨', quantity: 1 },
            { name: '屍套龍の被膜', quantity: 1 },
            { name: '鋭利な爪', quantity: 3 },
          ],
          skill: [{ name: '死中に活', level: 1 }],
        },
        {
          name: 'デスギアムスケルβ',
          materials: [
            { name: '禍々しい布', quantity: 2 },
            { name: '上質な堅骨', quantity: 1 },
            { name: '屍套龍の被膜', quantity: 1 },
            { name: 'モンスターの濃汁', quantity: 2 },
          ],
          skill: [{ name: '不屈', level: 1 }],
        },
        {
          name: 'デスギアファオストβ',
          materials: [
            { name: '禍々しい布', quantity: 2 },
            { name: '荒々しい蛮骨', quantity: 2 },
            { name: '屍套龍の被膜', quantity: 2 },
            { name: 'ノヴァクリスタル', quantity: 1 },
          ],
          skill: [{ name: '集中', level: 2 }],
        },
        {
          name: 'デスギアナーベルβ',
          materials: [
            { name: '禍々しい布', quantity: 2 },
            { name: '荒々しい蛮骨', quantity: 1 },
            { name: '屍套龍の被膜', quantity: 1 },
            { name: 'モンスターの濃汁', quantity: 2 },
          ],
          skill: [{ name: '龍属性攻撃強化', level: 2 }],
        },
        {
          name: 'デスギアフェルゼβ',
          materials: [
            { name: '禍々しい布', quantity: 2 },
            { name: 'いにしえの龍骨', quantity: 1 },
            { name: '屍套龍の被膜', quantity: 2 },
            { name: 'ノヴァクリスタル', quantity: 1 },
          ],
          skill: [{ name: '匠', level: 2 }],
        },
      ],
    },
    {
      name: 'スカルフェイスα',
      armors: [
        {
          name: 'スカルフェイスα',
          materials: [
            { name: 'なぞの頭骨', quantity: 1 },
            { name: '荒々しい蛮骨', quantity: 2 },
            { name: 'いびつな狂骨', quantity: 3 },
            { name: 'いにしえの龍骨', quantity: 1 },
          ],
          skill: [{ name: '匠', level: 1 }],
        },
      ],
    },
    {
      name: 'オーグα',
      armors: [
        {
          name: 'オーグヘルムα',
          materials: [
            { name: '滅尽龍の大角', quantity: 2 },
            { name: '滅尽龍の堅殻', quantity: 6 },
            { name: '不滅の龍鱗', quantity: 4 },
            { name: '滅尽龍の宝玉', quantity: 1 },
          ],
          skill: [
            { name: '渾身', level: 2 },
            { name: '攻撃', level: 1 },
          ],
        },
        {
          name: 'オーグメイルα',
          materials: [
            { name: '滅尽龍の堅殻', quantity: 4 },
            { name: '不滅の龍鱗', quantity: 4 },
            { name: '滅尽龍の尖爪', quantity: 2 },
            { name: '古龍骨', quantity: 3 },
          ],
          skill: [
            { name: '攻撃', level: 2 },
            { name: 'スタミナ急速回復', level: 1 },
          ],
        },
        {
          name: 'オーグアームα',
          materials: [
            { name: '滅尽龍の堅殻', quantity: 4 },
            { name: '滅尽龍の大角', quantity: 1 },
            { name: '滅尽龍の尻尾', quantity: 2 },
            { name: '獄炎石', quantity: 1 },
          ],
          skill: [
            { name: '攻撃', level: 1 },
            { name: '挑戦者', level: 2 },
          ],
        },
        {
          name: 'オーグコイルα',
          materials: [
            { name: '滅尽龍の堅殻', quantity: 4 },
            { name: '不滅の龍鱗', quantity: 4 },
            { name: '滅尽龍の再生殻', quantity: 4 },
            { name: 'ノヴァクリスタル', quantity: 1 },
          ],
          skill: [
            { name: '攻撃', level: 2 },
            { name: 'スタミナ急速回復', level: 1 },
          ],
        },
        {
          name: 'オーググリーブα',
          materials: [
            { name: '滅尽龍の堅殻', quantity: 4 },
            { name: '不滅の龍鱗', quantity: 4 },
            { name: '滅尽龍の再生殻', quantity: 2 },
            { name: '古龍の血', quantity: 2 },
          ],
          skill: [
            { name: '渾身', level: 1 },
            { name: '挑戦者', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'オーグβ',
      armors: [
        {
          name: 'オーグヘルムβ',
          materials: [
            { name: '滅尽龍の大角', quantity: 2 },
            { name: '滅尽龍の堅殻', quantity: 6 },
            { name: '不滅の龍鱗', quantity: 4 },
            { name: '滅尽龍の宝玉', quantity: 1 },
          ],
          skill: [{ name: '渾身', level: 2 }],
        },
        {
          name: 'オーグメイルβ',
          materials: [
            { name: '滅尽龍の堅殻', quantity: 4 },
            { name: '不滅の龍鱗', quantity: 4 },
            { name: '滅尽龍の尖爪', quantity: 2 },
            { name: '古龍骨', quantity: 3 },
          ],
          skill: [{ name: 'スタミナ急速回復', level: 2 }],
        },
        {
          name: 'オーグアームβ',
          materials: [
            { name: '滅尽龍の堅殻', quantity: 4 },
            { name: '滅尽龍の大角', quantity: 1 },
            { name: '滅尽龍の尻尾', quantity: 2 },
            { name: '獄炎石', quantity: 1 },
          ],
          skill: [{ name: '挑戦者', level: 2 }],
        },
        {
          name: 'オーグコイルβ',
          materials: [
            { name: '滅尽龍の堅殻', quantity: 4 },
            { name: '不滅の龍鱗', quantity: 4 },
            { name: '滅尽龍の再生殻', quantity: 4 },
            { name: 'ノヴァクリスタル', quantity: 1 },
          ],
          skill: [{ name: '攻撃', level: 2 }],
        },
        {
          name: 'オーググリーブβ',
          materials: [
            { name: '滅尽龍の堅殻', quantity: 4 },
            { name: '不滅の龍鱗', quantity: 4 },
            { name: '滅尽龍の再生殻', quantity: 2 },
            { name: '古龍の血', quantity: 2 },
          ],
          skill: [{ name: '渾身', level: 1 }],
        },
      ],
    },
    {
      name: 'カイザーα',
      armors: [
        {
          name: 'カイザークラウンα',
          materials: [
            { name: '炎王龍の堅殻', quantity: 5 },
            { name: '炎王龍の尖角', quantity: 2 },
            { name: '炎王龍の尻尾', quantity: 2 },
            { name: '獄炎石', quantity: 1 },
          ],
          skill: [{ name: '力の解放', level: 2 }],
        },
        {
          name: 'カイザーメイルα',
          materials: [
            { name: '炎王龍の堅殻', quantity: 5 },
            { name: '炎龍の翼', quantity: 4 },
            { name: '炎龍の塵粉', quantity: 4 },
            { name: '火竜の逆鱗', quantity: 1 },
          ],
          skill: [
            { name: '特殊射撃強化', level: 2 },
            { name: '力の解放', level: 1 },
          ],
        },
        {
          name: 'カイザーアームα',
          materials: [
            { name: '獄炎の龍鱗', quantity: 4 },
            { name: '炎王龍の堅殻', quantity: 4 },
            { name: '炎龍の尖爪', quantity: 4 },
            { name: '古龍骨', quantity: 4 },
          ],
          skill: [{ name: '弱点特効', level: 2 }],
        },
        {
          name: 'カイザーコイルα',
          materials: [
            { name: '獄炎の龍鱗', quantity: 4 },
            { name: '炎王龍の堅殻', quantity: 4 },
            { name: '炎王龍のたてがみ', quantity: 1 },
            { name: '古龍の血', quantity: 3 },
          ],
          skill: [
            { name: '弱点特効', level: 1 },
            { name: '爆破属性強化', level: 2 },
          ],
        },
        {
          name: 'カイザーグリーヴα',
          materials: [
            { name: '炎王龍の尖角', quantity: 3 },
            { name: '獄炎の龍鱗', quantity: 6 },
            { name: '炎王龍のたてがみ', quantity: 2 },
            { name: '炎龍の宝玉', quantity: 1 },
          ],
          skill: [
            { name: '力の解放', level: 2 },
            { name: '爆破属性強化', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'カイザーβ',
      armors: [
        {
          name: 'カイザークラウンβ',
          materials: [
            { name: '炎王龍の堅殻', quantity: 5 },
            { name: '炎王龍の尖角', quantity: 2 },
            { name: '炎王龍の尻尾', quantity: 2 },
            { name: '獄炎石', quantity: 1 },
          ],
          skill: [{ name: '力の解放', level: 1 }],
        },
        {
          name: 'カイザーメイルβ',
          materials: [
            { name: '炎王龍の堅殻', quantity: 5 },
            { name: '炎龍の翼', quantity: 4 },
            { name: '炎龍の塵粉', quantity: 4 },
            { name: '火竜の逆鱗', quantity: 1 },
          ],
          skill: [{ name: '特殊射撃強化', level: 2 }],
        },
        {
          name: 'カイザーアームβ',
          materials: [
            { name: '獄炎の龍鱗', quantity: 4 },
            { name: '炎王龍の堅殻', quantity: 4 },
            { name: '炎龍の尖爪', quantity: 4 },
            { name: '古龍骨', quantity: 4 },
          ],
          skill: [{ name: '弱点特効', level: 1 }],
        },
        {
          name: 'カイザーコイルβ',
          materials: [
            { name: '獄炎の龍鱗', quantity: 4 },
            { name: '炎王龍の堅殻', quantity: 4 },
            { name: '炎王龍のたてがみ', quantity: 1 },
            { name: '古龍の血', quantity: 3 },
          ],
          skill: [{ name: '爆破属性強化', level: 2 }],
        },
        {
          name: 'カイザーグリーヴβ',
          materials: [
            { name: '炎王龍の尖角', quantity: 3 },
            { name: '獄炎の龍鱗', quantity: 6 },
            { name: '炎王龍のたてがみ', quantity: 2 },
            { name: '炎龍の宝玉', quantity: 1 },
          ],
          skill: [{ name: '力の解放', level: 2 }],
        },
      ],
    },
    {
      name: 'クシャナα',
      armors: [
        {
          name: 'クシャナアンクα',
          materials: [
            { name: '鋼の上龍鱗', quantity: 4 },
            { name: '鋼龍の堅殻', quantity: 4 },
            { name: '鋼龍の翼', quantity: 2 },
            { name: '古龍骨', quantity: 4 },
          ],
          skill: [
            { name: '氷属性攻撃強化', level: 2 },
            { name: '匠', level: 1 },
          ],
        },
        {
          name: 'クシャナディールα',
          materials: [
            { name: '鋼龍の堅殻', quantity: 5 },
            { name: '鋼龍の尖角', quantity: 3 },
            { name: '鋼龍の尖爪', quantity: 2 },
            { name: '鋼龍の宝玉', quantity: 1 },
          ],
          skill: [
            { name: '匠', level: 2 },
            { name: '集中', level: 1 },
          ],
        },
        {
          name: 'クシャナハトゥーα',
          materials: [
            { name: '鋼龍の堅殻', quantity: 5 },
            { name: '鋼龍の尖角', quantity: 2 },
            { name: '鋼龍の尻尾', quantity: 2 },
            { name: '風漂竜の逆鱗', quantity: 1 },
          ],
          skill: [
            { name: '匠', level: 1 },
            { name: '回避性能', level: 2 },
          ],
        },
        {
          name: 'クシャナアンダα',
          materials: [
            { name: '鋼の上龍鱗', quantity: 4 },
            { name: '鋼龍の堅殻', quantity: 4 },
            { name: '鋼龍の尖角', quantity: 2 },
            { name: 'カブレライト鉱石', quantity: 5 },
          ],
          skill: [
            { name: '氷属性攻撃強化', level: 2 },
            { name: '回避距離UP', level: 1 },
          ],
        },
        {
          name: 'クシャナペイルα',
          materials: [
            { name: '鋼龍の堅殻', quantity: 5 },
            { name: '鋼の上龍鱗', quantity: 4 },
            { name: '鋼龍の翼', quantity: 3 },
            { name: '古龍の血', quantity: 3 },
          ],
          skill: [
            { name: '回避距離UP', level: 2 },
            { name: '匠', level: 1 },
          ],
        },
      ],
    },
    {
      name: 'クシャナβ',
      armors: [
        {
          name: 'クシャナアンクβ',
          materials: [
            { name: '鋼の上龍鱗', quantity: 4 },
            { name: '鋼龍の堅殻', quantity: 4 },
            { name: '鋼龍の翼', quantity: 2 },
            { name: '古龍骨', quantity: 4 },
          ],
          skill: [{ name: '氷属性攻撃強化', level: 2 }],
        },
        {
          name: 'クシャナディールβ',
          materials: [
            { name: '鋼龍の堅殻', quantity: 5 },
            { name: '鋼龍の尖角', quantity: 3 },
            { name: '鋼龍の尖爪', quantity: 2 },
            { name: '鋼龍の宝玉', quantity: 1 },
          ],
          skill: [{ name: '匠', level: 2 }],
        },
        {
          name: 'クシャナハトゥーβ',
          materials: [
            { name: '鋼龍の堅殻', quantity: 5 },
            { name: '鋼龍の尖角', quantity: 2 },
            { name: '鋼龍の尻尾', quantity: 2 },
            { name: '風漂竜の逆鱗', quantity: 1 },
          ],
          skill: [{ name: '回避性能', level: 2 }],
        },
        {
          name: 'クシャナアンダβ',
          materials: [
            { name: '鋼の上龍鱗', quantity: 4 },
            { name: '鋼龍の堅殻', quantity: 4 },
            { name: '鋼龍の尖角', quantity: 2 },
            { name: 'カブレライト鉱石', quantity: 5 },
          ],
          skill: [{ name: '氷属性攻撃強化', level: 2 }],
        },
        {
          name: 'クシャナペイルβ',
          materials: [
            { name: '鋼龍の堅殻', quantity: 5 },
            { name: '鋼の上龍鱗', quantity: 4 },
            { name: '鋼龍の翼', quantity: 3 },
            { name: '古龍の血', quantity: 3 },
          ],
          skill: [{ name: '回避距離UP', level: 2 }],
        },
      ],
    },
    {
      name: 'ウルズα',
      armors: [
        {
          name: 'ウルズヘルムα',
          materials: [
            { name: '死屍の龍鱗', quantity: 5 },
            { name: '屍套龍の堅殻', quantity: 4 },
            { name: '屍套龍の尖爪', quantity: 4 },
            { name: '古龍骨', quantity: 4 },
          ],
          skill: [
            { name: 'フルチャージ', level: 1 },
            { name: '龍属性攻撃強化', level: 2 },
          ],
        },
        {
          name: 'ウルズメイルα',
          materials: [
            { name: '屍套龍の堅殻', quantity: 5 },
            { name: '屍套龍の鋭牙', quantity: 3 },
            { name: '屍套龍の尻尾', quantity: 2 },
            { name: '惨爪竜の逆鱗', quantity: 1 },
          ],
          skill: [
            { name: '龍属性攻撃強化', level: 1 },
            { name: '回復速度', level: 2 },
          ],
        },
        {
          name: 'ウルズアームα',
          materials: [
            { name: '屍套龍の鋭牙', quantity: 3 },
            { name: '死屍の龍鱗', quantity: 6 },
            { name: '屍套龍の被膜', quantity: 2 },
            { name: '惨爪竜の宝玉', quantity: 1 },
          ],
          skill: [
            { name: 'フルチャージ', level: 1 },
            { name: '回復速度', level: 1 },
          ],
        },
        {
          name: 'ウルズコイルα',
          materials: [
            { name: '屍套龍の堅殻', quantity: 5 },
            { name: '屍套龍の翼', quantity: 4 },
            { name: '屍套龍の被膜', quantity: 2 },
            { name: '古龍の血', quantity: 3 },
          ],
          skill: [
            { name: 'フルチャージ', level: 1 },
            { name: '瘴気耐性', level: 1 },
          ],
        },
        {
          name: 'ウルズグリーブα',
          materials: [
            { name: '死屍の龍鱗', quantity: 5 },
            { name: '屍套龍の堅殻', quantity: 4 },
            { name: '屍套龍の被膜', quantity: 2 },
            { name: '龍脈の結晶', quantity: 6 },
          ],
          skill: [
            { name: '龍属性攻撃強化', level: 1 },
            { name: '瘴気耐性', level: 2 },
          ],
        },
      ],
    },
    {
      name: 'ウルズβ',
      armors: [
        {
          name: 'ウルズヘルムβ',
          materials: [
            { name: '死屍の龍鱗', quantity: 5 },
            { name: '屍套龍の堅殻', quantity: 4 },
            { name: '屍套龍の尖爪', quantity: 4 },
            { name: '古龍骨', quantity: 4 },
          ],
          skill: [{ name: 'フルチャージ', level: 1 }],
        },
        {
          name: 'ウルズメイルβ',
          materials: [
            { name: '屍套龍の堅殻', quantity: 5 },
            { name: '屍套龍の鋭牙', quantity: 3 },
            { name: '屍套龍の尻尾', quantity: 2 },
            { name: '惨爪竜の逆鱗', quantity: 1 },
          ],
          skill: [{ name: '回復速度', level: 2 }],
        },
        {
          name: 'ウルズアームβ',
          materials: [
            { name: '屍套龍の鋭牙', quantity: 3 },
            { name: '死屍の龍鱗', quantity: 6 },
            { name: '屍套龍の被膜', quantity: 2 },
            { name: '惨爪竜の宝玉', quantity: 1 },
          ],
          skill: [{ name: 'フルチャージ', level: 1 }],
        },
        {
          name: 'ウルズコイルβ',
          materials: [
            { name: '屍套龍の堅殻', quantity: 5 },
            { name: '屍套龍の翼', quantity: 4 },
            { name: '屍套龍の被膜', quantity: 2 },
            { name: '古龍の血', quantity: 3 },
          ],
          skill: [{ name: 'フルチャージ', level: 1 }],
        },
        {
          name: 'ウルズグリーブβ',
          materials: [
            { name: '死屍の龍鱗', quantity: 5 },
            { name: '屍套龍の堅殻', quantity: 4 },
            { name: '屍套龍の被膜', quantity: 2 },
            { name: '龍脈の結晶', quantity: 6 },
          ],
          skill: [{ name: '瘴気耐性', level: 2 }],
        },
      ],
    },
    {
      name: 'キリンα',
      armors: [
        {
          name: 'キリンホーンα',
          materials: [
            { name: '幻獣の上皮', quantity: 3 },
            { name: '幻獣の蒼角', quantity: 1 },
            { name: 'シャムオスの上鱗', quantity: 2 },
            { name: '電撃袋', quantity: 4 },
          ],
          skill: [
            { name: 'ランナー', level: 2 },
            { name: '精霊の加護', level: 1 },
          ],
        },
        {
          name: 'キリンベストα',
          materials: [
            { name: '幻獣の上皮', quantity: 3 },
            { name: '幻獣の蒼角', quantity: 1 },
            { name: '幻獣の雷尾', quantity: 2 },
            { name: 'ユニオン鉱石', quantity: 4 },
          ],
          skill: [
            { name: '精霊の加護', level: 2 },
            { name: '雷属性攻撃強化', level: 1 },
          ],
        },
        {
          name: 'キリンアームロングα',
          materials: [
            { name: '幻獣の上皮', quantity: 3 },
            { name: '幻獣のたてがみ', quantity: 4 },
            { name: 'ゴム質の堅殻', quantity: 3 },
            { name: '龍脈の結晶', quantity: 6 },
          ],
          skill: [
            { name: 'ランナー', level: 1 },
            { name: '雷属性攻撃強化', level: 2 },
          ],
        },
        {
          name: 'キリンフープα',
          materials: [
            { name: '幻獣の上皮', quantity: 4 },
            { name: '幻獣のたてがみ', quantity: 4 },
            { name: '幻獣の蒼角', quantity: 3 },
            { name: 'ノヴァクリスタル', quantity: 1 },
          ],
          skill: [
            { name: '属性やられ耐性', level: 1 },
            { name: '雷属性攻撃強化', level: 1 },
          ],
        },
        {
          name: 'キリンレガースα',
          materials: [
            { name: '幻獣の上皮', quantity: 3 },
            { name: '幻獣の雷尾', quantity: 3 },
            { name: 'ゴム質の堅殻', quantity: 3 },
            { name: 'いにしえの龍骨', quantity: 1 },
          ],
          skill: [
            { name: '属性解放/装填拡張', level: 2 },
            { name: '雷耐性', level: 2 },
          ],
        },
      ],
    },
    {
      name: 'キリンβ',
      armors: [
        {
          name: 'キリンホーンβ',
          materials: [
            { name: '幻獣の上皮', quantity: 3 },
            { name: '幻獣の蒼角', quantity: 1 },
            { name: 'シャムオスの上鱗', quantity: 2 },
            { name: '電撃袋', quantity: 4 },
          ],
          skill: [{ name: 'ランナー', level: 2 }],
        },
        {
          name: 'キリンベストβ',
          materials: [
            { name: '幻獣の上皮', quantity: 3 },
            { name: '幻獣の蒼角', quantity: 1 },
            { name: '幻獣の雷尾', quantity: 2 },
            { name: 'ユニオン鉱石', quantity: 4 },
          ],
          skill: [{ name: '精霊の加護', level: 2 }],
        },
        {
          name: 'キリンアームロングβ',
          materials: [
            { name: '幻獣の上皮', quantity: 3 },
            { name: '幻獣のたてがみ', quantity: 4 },
            { name: 'ゴム質の堅殻', quantity: 3 },
            { name: '龍脈の結晶', quantity: 6 },
          ],
          skill: [{ name: '雷属性攻撃強化', level: 2 }],
        },
        {
          name: 'キリンフープβ',
          materials: [
            { name: '幻獣の上皮', quantity: 4 },
            { name: '幻獣のたてがみ', quantity: 4 },
            { name: '幻獣の蒼角', quantity: 3 },
            { name: 'ノヴァクリスタル', quantity: 1 },
          ],
          skill: [{ name: '属性やられ耐性', level: 1 }],
        },
        {
          name: 'キリンレガースβ',
          materials: [
            { name: '幻獣の上皮', quantity: 3 },
            { name: '幻獣の雷尾', quantity: 3 },
            { name: 'ゴム質の堅殻', quantity: 3 },
            { name: 'いにしえの龍骨', quantity: 1 },
          ],
          skill: [{ name: '属性解放/装填拡張', level: 2 }],
        },
      ],
    },
    {
      name: 'ゼノラージα',
      armors: [
        {
          name: 'ゼノラージヘッドα',
          materials: [
            { name: '冥灯龍の幽鱗', quantity: 5 },
            { name: '冥灯龍の白殻', quantity: 4 },
            { name: '冥灯龍の幽角', quantity: 2 },
            { name: '火竜の逆鱗', quantity: 1 },
          ],
          skill: [
            { name: 'ひるみ軽減', level: 1 },
            { name: '特殊射撃強化', level: 1 },
          ],
        },
        {
          name: 'ゼノラージハイドα',
          materials: [
            { name: '冥灯龍の幽角', quantity: 3 },
            { name: '冥灯龍の幽鱗', quantity: 6 },
            { name: '冥灯龍の幽翼', quantity: 3 },
            { name: '冥灯龍の幽玉', quantity: 1 },
          ],
          skill: [
            { name: '強化持続', level: 1 },
            { name: '属性やられ耐性', level: 1 },
          ],
        },
        {
          name: 'ゼノラージクロウα',
          materials: [
            { name: '冥灯龍の白殻', quantity: 4 },
            { name: '冥灯龍の幽爪', quantity: 3 },
            { name: '冥灯龍の幽幕', quantity: 2 },
            { name: '竜玉', quantity: 1 },
          ],
          skill: [
            { name: 'ひるみ軽減', level: 1 },
            { name: '超会心', level: 1 },
          ],
        },
        {
          name: 'ゼノラージスパインα',
          materials: [
            { name: '冥灯龍の白殻', quantity: 4 },
            { name: '冥灯龍の幽翼', quantity: 2 },
            { name: '冥灯龍の尻尾', quantity: 2 },
            { name: '惨爪竜の逆鱗', quantity: 1 },
          ],
          skill: [
            { name: '特殊射撃強化', level: 1 },
            { name: '属性やられ耐性', level: 2 },
          ],
        },
        {
          name: 'ゼノラージフットα',
          materials: [
            { name: '冥灯龍の幽鱗', quantity: 4 },
            { name: '冥灯龍の白殻', quantity: 2 },
            { name: '冥灯龍の幽幕', quantity: 2 },
            { name: '風漂竜の逆鱗', quantity: 1 },
          ],
          skill: [
            { name: 'ひるみ軽減', level: 1 },
            { name: '強化持続', level: 2 },
          ],
        },
      ],
    },
    {
      name: 'ゼノラージβ',
      armors: [
        {
          name: 'ゼノラージヘッドβ',
          materials: [
            { name: '冥灯龍の幽鱗', quantity: 5 },
            { name: '冥灯龍の白殻', quantity: 4 },
            { name: '冥灯龍の幽角', quantity: 2 },
            { name: '火竜の逆鱗', quantity: 1 },
          ],
          skill: [{ name: 'ひるみ軽減', level: 1 }],
        },
        {
          name: 'ゼノラージハイドβ',
          materials: [
            { name: '冥灯龍の幽角', quantity: 3 },
            { name: '冥灯龍の幽鱗', quantity: 6 },
            { name: '冥灯龍の幽翼', quantity: 3 },
            { name: '冥灯龍の幽玉', quantity: 1 },
          ],
          skill: [{ name: '強化持続', level: 2 }],
        },
        {
          name: 'ゼノラージクロウβ',
          materials: [
            { name: '冥灯龍の白殻', quantity: 4 },
            { name: '冥灯龍の幽爪', quantity: 3 },
            { name: '冥灯龍の幽幕', quantity: 2 },
            { name: '竜玉', quantity: 1 },
          ],
          skill: [{ name: 'ひるみ軽減', level: 1 }],
        },
        {
          name: 'ゼノラージスパインβ',
          materials: [
            { name: '冥灯龍の白殻', quantity: 4 },
            { name: '冥灯龍の幽翼', quantity: 2 },
            { name: '冥灯龍の尻尾', quantity: 2 },
            { name: '惨爪竜の逆鱗', quantity: 1 },
          ],
          skill: [{ name: '属性やられ耐性', level: 2 }],
        },
        {
          name: 'ゼノラージフットβ',
          materials: [
            { name: '冥灯龍の幽鱗', quantity: 4 },
            { name: '冥灯龍の白殻', quantity: 2 },
            { name: '冥灯龍の幽幕', quantity: 2 },
            { name: '風漂竜の逆鱗', quantity: 1 },
          ],
          skill: [{ name: 'ひるみ軽減', level: 1 }],
        },
      ],
    },
    {
      name: '竜王の隻眼α',
      armors: [
        {
          name: '竜王の隻眼α',
          materials: [
            { name: '龍脈の結晶', quantity: 2 },
            { name: '勇気の証G', quantity: 1 },
            { name: '不滅の龍鱗', quantity: 6 },
          ],
          skill: [{ name: '弱点特効', level: 2 }],
        },
      ],
    },
    {
      name: 'バンギスα',
      armors: [
        {
          name: 'バンギスヘルムα',
          materials: [
            { name: '恐暴竜の黒皮', quantity: 5 },
            { name: '恐暴竜の頭殻', quantity: 2 },
            { name: '恐暴竜の鉤爪', quantity: 2 },
            { name: '恐暴竜の宝玉', quantity: 1 },
          ],
          skill: [
            { name: '破壊王', level: 1 },
            { name: '匠', level: 1 },
          ],
        },
        {
          name: 'バンギスメイルα',
          materials: [
            { name: '恐暴竜の黒鱗', quantity: 3 },
            { name: '恐暴竜の黒皮', quantity: 4 },
            { name: '恐暴竜の唾液', quantity: 2 },
            { name: '堅竜骨', quantity: 4 },
          ],
          skill: [
            { name: '匠', level: 1 },
            { name: '早食い', level: 1 },
          ],
        },
        {
          name: 'バンギスアームα',
          materials: [
            { name: '恐暴竜の黒皮', quantity: 4 },
            { name: '恐暴竜の大牙', quantity: 2 },
            { name: '恐暴竜の尻尾', quantity: 2 },
            { name: 'いにしえの龍骨', quantity: 1 },
          ],
          skill: [
            { name: '破壊王', level: 1 },
            { name: '力の解放', level: 2 },
          ],
        },
        {
          name: 'バンギスコイルα',
          materials: [
            { name: '恐暴竜の黒鱗', quantity: 3 },
            { name: '恐暴竜の黒皮', quantity: 4 },
            { name: '恐暴竜の唾液', quantity: 2 },
            { name: 'ギルオスの上鱗', quantity: 3 },
          ],
          skill: [
            { name: '匠', level: 1 },
            { name: '力の解放', level: 1 },
          ],
        },
        {
          name: 'バンギスグリーブα',
          materials: [
            { name: '恐暴竜の黒鱗', quantity: 3 },
            { name: '恐暴竜の黒皮', quantity: 4 },
            { name: '恐暴竜の鉤爪', quantity: 2 },
            { name: 'ギルオスの上皮', quantity: 4 },
          ],
          skill: [
            { name: '破壊王', level: 1 },
            { name: '早食い', level: 2 },
          ],
        },
      ],
    },
    {
      name: 'バンギスβ',
      armors: [
        {
          name: 'バンギスヘルムβ',
          materials: [
            { name: '恐暴竜の黒皮', quantity: 5 },
            { name: '恐暴竜の頭殻', quantity: 2 },
            { name: '恐暴竜の鉤爪', quantity: 2 },
            { name: '恐暴竜の宝玉', quantity: 1 },
          ],
          skill: [{ name: '破壊王', level: 1 }],
        },
        {
          name: 'バンギスメイルβ',
          materials: [
            { name: '恐暴竜の黒鱗', quantity: 3 },
            { name: '恐暴竜の黒皮', quantity: 4 },
            { name: '恐暴竜の唾液', quantity: 2 },
            { name: '堅竜骨', quantity: 4 },
          ],
          skill: [{ name: '早食い', level: 1 }],
        },
        {
          name: 'バンギスアームβ',
          materials: [
            { name: '恐暴竜の黒皮', quantity: 4 },
            { name: '恐暴竜の大牙', quantity: 2 },
            { name: '恐暴竜の尻尾', quantity: 2 },
            { name: 'いにしえの龍骨', quantity: 1 },
          ],
          skill: [{ name: '力の解放', level: 2 }],
        },
        {
          name: 'バンギスコイルβ',
          materials: [
            { name: '恐暴竜の黒鱗', quantity: 3 },
            { name: '恐暴竜の黒皮', quantity: 4 },
            { name: '恐暴竜の唾液', quantity: 2 },
            { name: 'ギルオスの上鱗', quantity: 3 },
          ],
          skill: [{ name: '力の解放', level: 1 }],
        },
        {
          name: 'バンギスグリーブβ',
          materials: [
            { name: '恐暴竜の黒鱗', quantity: 3 },
            { name: '恐暴竜の黒皮', quantity: 4 },
            { name: '恐暴竜の鉤爪', quantity: 2 },
            { name: 'ギルオスの上皮', quantity: 4 },
          ],
          skill: [{ name: '早食い', level: 2 }],
        },
      ],
    },
  ],
}

export default topper
