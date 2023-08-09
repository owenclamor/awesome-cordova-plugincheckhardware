import { __decorate, __extends } from "tslib";
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var PluginCheckHardware = /** @class */ (function (_super) {
    __extends(PluginCheckHardware, _super);
    function PluginCheckHardware() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PluginCheckHardware.prototype.functionName = function (arg1, arg2) { return cordova(this, "functionName", {}, arguments); };
    PluginCheckHardware.prototype.coolMethod = function (arg1) { return cordova(this, "coolMethod", {}, arguments); };
    PluginCheckHardware.prototype.getCPU = function (arg1) { return cordova(this, "getCPU", {}, arguments); };
    PluginCheckHardware.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PluginCheckHardware, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    PluginCheckHardware.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PluginCheckHardware });
    PluginCheckHardware.pluginName = "PluginCheckHardware";
    PluginCheckHardware.plugin = "cordova-plugin-pluginvcheckhardware";
    PluginCheckHardware.pluginRef = "PluginCheckHardware";
    PluginCheckHardware.repo = "";
    PluginCheckHardware.install = "";
    PluginCheckHardware.installVariables = [];
    PluginCheckHardware.platforms = ["Android"];
    PluginCheckHardware = __decorate([], PluginCheckHardware);
    return PluginCheckHardware;
}(AwesomeCordovaNativePlugin));
export { PluginCheckHardware };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PluginCheckHardware, decorators: [{
            type: Injectable
        }], propDecorators: { functionName: [], coolMethod: [], getCPU: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvcGx1Z2luLWNoZWNrLWhhcmR3YXJlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7R0FVRztBQUNILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBbUcsTUFBTSwrQkFBK0IsQ0FBQzs7O0lBa0N2Ryx1Q0FBMEI7Ozs7SUFTakUsMENBQVksYUFBQyxJQUFZLEVBQUUsSUFBWTtJQUl2Qyx3Q0FBVSxhQUFDLElBQVk7SUFJdkIsb0NBQU0sYUFBQyxJQUFZO3FIQWpCUixtQkFBbUI7eUhBQW5CLG1CQUFtQjs7Ozs7Ozs7SUFBbkIsbUJBQW1CLGtCQUFuQixtQkFBbUI7OEJBOUNoQztFQThDeUMsMEJBQTBCO1NBQXRELG1CQUFtQjs0RkFBbkIsbUJBQW1CO2tCQUQvQixVQUFVOzhCQVVULFlBQVksTUFJWixVQUFVLE1BSVYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUaGlzIGlzIGEgdGVtcGxhdGUgZm9yIG5ldyBwbHVnaW4gd3JhcHBlcnNcclxuICpcclxuICogVE9ETzpcclxuICogLSBBZGQvQ2hhbmdlIGluZm9ybWF0aW9uIGJlbG93XHJcbiAqIC0gRG9jdW1lbnQgdXNhZ2UgKGltcG9ydGluZywgZXhlY3V0aW5nIG1haW4gZnVuY3Rpb25hbGl0eSlcclxuICogLSBSZW1vdmUgYW55IGltcG9ydHMgdGhhdCB5b3UgYXJlIG5vdCB1c2luZ1xyXG4gKiAtIFJlbW92ZSBhbGwgdGhlIGNvbW1lbnRzIGluY2x1ZGVkIGluIHRoaXMgdGVtcGxhdGUsIEVYQ0VQVCB0aGUgQFBsdWdpbiB3cmFwcGVyIGRvY3MgYW5kIGFueSBvdGhlciBkb2NzIHlvdSBhZGRlZFxyXG4gKiAtIFJlbW92ZSB0aGlzIG5vdGVcclxuICpcclxuICovXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIENvcmRvdmFJbnN0YW5jZSwgSW5zdGFuY2VQcm9wZXJ0eSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBwbHVnaW4gQ2hlY2sgSGFyZHdhcmVcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IHBsdWdpbkNoZWNrSGFyZHdhcmUgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvcGx1Z2luLWNoZWNrLWhhcmR3YXJlJztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBwbHVnaW5DaGVja0hhcmR3YXJlOiBwbHVnaW5DaGVja0hhcmR3YXJlKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMucGx1Z2luQ2hlY2tIYXJkd2FyZS5mdW5jdGlvbk5hbWUoJ0hlbGxvJywgMTIzKVxyXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnUGx1Z2luQ2hlY2tIYXJkd2FyZScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tcGx1Z2ludmNoZWNraGFyZHdhcmUnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcclxuICBwbHVnaW5SZWY6ICdQbHVnaW5DaGVja0hhcmR3YXJlJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxyXG4gIHJlcG86ICcnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXHJcbiAgaW5zdGFsbDogJycsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xyXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xyXG4gIHBsYXRmb3JtczogW1wiQW5kcm9pZFwiXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGx1Z2luQ2hlY2tIYXJkd2FyZSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiBkb2VzIHNvbWV0aGluZ1xyXG4gICAqIEBwYXJhbSBhcmcxIHtzdHJpbmd9IFNvbWUgcGFyYW0gdG8gY29uZmlndXJlIHNvbWV0aGluZ1xyXG4gICAqIEBwYXJhbSBhcmcyIHtudW1iZXJ9IEFub3RoZXIgcGFyYW0gdG8gY29uZmlndXJlIHNvbWV0aGluZ1xyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGZ1bmN0aW9uTmFtZShhcmcxOiBzdHJpbmcsIGFyZzI6IG51bWJlcik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xyXG4gIH1cclxuICBAQ29yZG92YSgpXHJcbiAgY29vbE1ldGhvZChhcmcxOiBzdHJpbmcpOiBQcm9taXNlPGFueT57XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRDUFUoYXJnMTogc3RyaW5nKTogUHJvbWlzZTxhbnk+e1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbn1cclxuIl19