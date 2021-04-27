import { isIP } from "net";

/**
 * 坐标接口
 */
export interface IPonit {
    x: number,
    y: number
}

export interface IViewer {
    show(): void
    remove(): void
}