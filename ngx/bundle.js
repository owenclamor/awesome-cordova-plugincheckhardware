'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

var PluginCheckHardware = /** @class */ (function (_super) {
    tslib.__extends(PluginCheckHardware, _super);
    function PluginCheckHardware() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PluginCheckHardware.prototype.functionName = function (arg1, arg2) { return core.cordova(this, "functionName", {}, arguments); };
    PluginCheckHardware.prototype.coolMethod = function (arg1) { return core.cordova(this, "coolMethod", {}, arguments); };
    PluginCheckHardware.prototype.getCPU = function (arg1) { return core.cordova(this, "getCPU", {}, arguments); };
    PluginCheckHardware.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: PluginCheckHardware, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    PluginCheckHardware.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: PluginCheckHardware });
    PluginCheckHardware.pluginName = "PluginCheckHardware";
    PluginCheckHardware.plugin = "cordova-plugin-pluginvcheckhardware";
    PluginCheckHardware.pluginRef = "PluginCheckHardware";
    PluginCheckHardware.repo = "";
    PluginCheckHardware.install = "";
    PluginCheckHardware.installVariables = [];
    PluginCheckHardware.platforms = ["Android"];
    PluginCheckHardware = tslib.__decorate([], PluginCheckHardware);
    return PluginCheckHardware;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: PluginCheckHardware, decorators: [{
            type: i0.Injectable
        }], propDecorators: { functionName: [], coolMethod: [], getCPU: [] } });

exports.PluginCheckHardware = PluginCheckHardware;
