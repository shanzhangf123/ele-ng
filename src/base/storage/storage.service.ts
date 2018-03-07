import { Injectable } from '@angular/core';
import { PersistenceService, StorageType, PersistenceConfig } from 'angular-persistence';

export class StorageService {
  private defaultType = StorageType.SESSION;

  constructor(protected storage: PersistenceService) {}

  /**
   * Get
   * @param key
   */
  get(key: string, type?: StorageType) {
    const t = type ? type : this.defaultType;
    return this.storage.get(key, t);
  }

  /**
   * Set
   * @param key
   * @param value
   */
  set(key: string, value: any, config?: PersistenceConfig) {
    const c = config ? Object.assign({type: StorageType.SESSION}, config) : {type: StorageType.SESSION};
    this.storage.set(key, value, c);
  }

  /**
   * 删除key
   * @param key
   * @param callback
   */
  remove(key: string, type?: StorageType) {
    const t = type ? type : this.defaultType;
    return this.storage.remove(key, t);
  }

  /**
   * 删除所有指定类型的值
   * @param type StorageType
   */
  removeAll(type?: StorageType) {
    const t = type ? type : this.defaultType;
    this.storage.removeAll(t);
  }

  /**
   * 清除缓存中过期指定类型的值
   * @param type StorageType
   */
  clean(type?: StorageType) {
    const t = type ? type : this.defaultType;
    this.storage.clean(t);
  }

  getByKey(key: string, type?: StorageType) {
    const t = type ? type : this.defaultType;
    return this.get(key, t);
  }

  setByKey(key: string, val: any, type?: StorageType) {
    const t = type ? type : this.defaultType;
    this.set(key, val, {type: t});
  }

  removeByKey(key: string, type?: StorageType) {
    const t = type ? type : this.defaultType;
    this.storage.remove(key, t);
  }

}
