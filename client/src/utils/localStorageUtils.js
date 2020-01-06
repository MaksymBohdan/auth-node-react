import Lockr from 'lockr';
import { STORAGE_PREFIX } from '../helpers/localStorageConstans';

const saveToStorage = (key, value) => {
  Lockr.prefix = STORAGE_PREFIX;
  Lockr.set(key, value);
};

const getFromStorage = (key, defaultValue) =>
  Lockr.get(`${STORAGE_PREFIX}${key}`, defaultValue);

const clearStorage = () => Lockr.flush();

export { saveToStorage, getFromStorage, clearStorage };
