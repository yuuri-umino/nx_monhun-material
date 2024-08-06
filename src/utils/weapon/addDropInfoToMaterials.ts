import { materialsDrops } from './materialsDrops'
import { WeaponType } from './materialsTypes'

export const addDropInfoToMaterials = (weaponType: WeaponType): WeaponType => {
  const materialDropMap = new Map<string, string[]>()

  materialsDrops.forEach((materialDrop) => {
    materialDropMap.set(materialDrop.materialName, materialDrop.drop)
  })

  weaponType.derivations.forEach((derivation) => {
    derivation.weapons.forEach((weapon) => {
      weapon.materials.forEach((material) => {
        if (materialDropMap.has(material.name)) {
          material.drop = materialDropMap.get(material.name)
        }
      })
    })
  })

  return weaponType
}
