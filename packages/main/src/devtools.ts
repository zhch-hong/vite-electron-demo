import installExtension, {VUEJS3_DEVTOOLS} from 'electron-devtools-installer';

export function installVueJSDevTools() {
  return installExtension(VUEJS3_DEVTOOLS);
}
