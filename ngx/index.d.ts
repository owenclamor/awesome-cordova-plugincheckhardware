import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name plugin Check Hardware
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { pluginCheckHardware } from '@awesome-cordova-plugins/plugin-check-hardware';
 *
 *
 * constructor(private pluginCheckHardware: pluginCheckHardware) { }
 *
 * ...
 *
 *
 * this.pluginCheckHardware.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class PluginCheckHardware extends AwesomeCordovaNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    functionName(arg1: string, arg2: number): Promise<any>;
    coolMethod(arg1: string): Promise<any>;
    getCPU(arg1: string): Promise<any>;
}
