export class MathUtils {
  /**
   * 数値をランダム生成
   * @param min
   * @param max
   */
  static randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * 四捨五入
   * @param num 対象数値
   * @param digit 桁数
   */
  static round(num: number, digit: number = 1): number | undefined {
    if (!num) return undefined;
    const d = Math.pow(10, digit);
    return Math.round(num * d) / d;
  }
}
