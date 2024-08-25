'use babel';

import SavetheclocktowerTestAnotherPackageRenameView from './savetheclocktower-test-another-package-rename-view';
import { CompositeDisposable } from 'atom';

export default {

  savetheclocktowerTestAnotherPackageRenameView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.savetheclocktowerTestAnotherPackageRenameView = new SavetheclocktowerTestAnotherPackageRenameView(state.savetheclocktowerTestAnotherPackageRenameViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.savetheclocktowerTestAnotherPackageRenameView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'savetheclocktower-test-another-package-rename:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.savetheclocktowerTestAnotherPackageRenameView.destroy();
  },

  serialize() {
    return {
      savetheclocktowerTestAnotherPackageRenameViewState: this.savetheclocktowerTestAnotherPackageRenameView.serialize()
    };
  },

  toggle() {
    console.log('SavetheclocktowerTestAnotherPackageRename was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
