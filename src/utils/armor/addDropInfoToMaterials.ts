import { materialsDrops } from './materialsDrops'
import { ArmorType } from './materialsTypes'

export const addDropInfoToMaterials = (armorType: ArmorType): ArmorType => {
  const materialDropMap = new Map<string, string[]>()

  materialsDrops.forEach((materialDrop) => {
    materialDropMap.set(materialDrop.materialName, materialDrop.drop)
  })

  armorType.derivations.forEach((derivation) => {
    derivation.armors.forEach((armor) => {
      armor.materials.forEach((material) => {
        if (materialDropMap.has(material.name)) {
          material.drop = materialDropMap.get(material.name)
        }
      })
    })
  })

  return armorType
}
