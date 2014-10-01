/* -*- mode: js; js-basic-offset: 4; indent-tabs-mode: nil -*- */

const AltTab = imports.ui.altTab;

let injections = {};

function _select(app, window, forceAppFocus) {
   return injections._select.call(this, app, window || 0, forceAppFocus);
}

function init(metadata) {
}

function enable() {
   injections._select = AltTab.AppSwitcherPopup.prototype._select;
   AltTab.AppSwitcherPopup.prototype._select = _select;
}

function disable() {
   let prop;
   for(prop in injections) {
      AltTab.AppSwitcherPopup.prototype[prop] = injections[prop];
   }
}
