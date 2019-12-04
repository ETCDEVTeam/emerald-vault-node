import {Config, Account, UnsignedTx, Update, ImportMnemonic, AddressBookItem, ImportPrivateKey} from './types';
var addon = require('../native');

export class EmeraldVaultNative {
    private conf: Config;

    constructor(conf?: Config | undefined) {
        this.conf = conf || {};
    }

    vaultVersion(): string {
        return "0.27.0"
    }

    listAccounts(chain: string): Array<Account> {
        let opts = Object.assign({}, this.conf, {chain: chain});
        return addon.listAccounts(opts);
    }

    importAccount(chain: string, data: any): string {
        let opts = Object.assign({}, this.conf, {chain: chain});
        return addon.importAccount(opts, JSON.stringify(data)).address;
    }

    importPk(chain: string, data: ImportPrivateKey): string {
        let opts = Object.assign({}, this.conf, {chain: chain});
        return addon.importPk(opts, JSON.stringify(data)).address;
    }

    exportPk(chain: string, address: string, password: string): string {
        let opts = Object.assign({}, this.conf, {chain: chain});
        return addon.exportPk(opts, address, password);
    }

    exportAccount(chain: string, address: string): any {
        let opts = Object.assign({}, this.conf, {chain: chain});
        return JSON.parse(addon.exportAccount(opts, address));
    }

    updateAccount(chain: string, address: string, update: Update): boolean {
        let opts = Object.assign({}, this.conf, {chain: chain});
        return addon.updateAccount(opts, address, JSON.stringify(update));
    }

    removeAccount(chain: string, address: string): boolean {
        let opts = Object.assign({}, this.conf, {chain: chain});
        return addon.removeAccount(opts, address);
    }

    signTx(chain: string, tx: UnsignedTx, password: string): string {
        let opts = Object.assign({}, this.conf, {chain: chain});
        return addon.signTx(opts, JSON.stringify(tx), password);
    }

    importMnemonic(chain: string, mnemonic: ImportMnemonic): string {
        let opts = Object.assign({}, this.conf, {chain: chain});
        return addon.importMnemonic(opts, JSON.stringify(mnemonic)).address;
    }

    generateMnemonic(size: number): string {
        return addon.generateMnemonic(size);
    }

    listAddressBook(chain: string): AddressBookItem[] {
        // disabled MIGRATE_V3
        return [];
        // let opts = Object.assign({}, this.conf, {chain: chain});
        // return addon.listAddressBook(opts);
    }

    addToAddressBook(chain: string, item: AddressBookItem): boolean {
        // disabled MIGRATE_V3
        return false;
        // let opts = Object.assign({}, this.conf, {chain: chain});
        // return addon.addToAddressBook(opts, JSON.stringify(item));
    }

    removeFromAddressBook(chain: string, address: string): boolean {
        // disabled MIGRATE_V3
        return false;
        // let opts = Object.assign({}, this.conf, {chain: chain});
        // return addon.removeFromAddressBook(opts, address);
    }
}
