import moment from 'moment';

export class StringUtils {
  static readonly EmailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  static isBlank(str: string): boolean {
    return !str || str.trim().length === 0;
  }

  static formatAmount(src: number): string {
    if (src) {
      return String(src).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
    return null;
  }
  /**
   * Get date without timezone
   * @param datetime
   */
  static dateWithoutTimezone(datetime: Date, containTime: boolean = false): string {
    if (datetime && datetime instanceof Date) {
      return containTime ? datetime.toISOString() : datetime.toISOString().slice(0, 10);
    }
    return null;
  }

  static dateFormat(datetime: Date, format: string = 'YYYY/MM/DD') {
    if (datetime && datetime instanceof Date) {
      return moment(datetime).format(format);
    }
    return null;
  }

  static datetimeFormat(datetime: Date, format: string = 'YYYY/MM/DD HH:mm:ss') {
    if (datetime && datetime instanceof Date) {
      return moment(datetime).format(format);
    }
    return null;
  }

  /**
   * Check password is valid or not
   * @param value
   */
  static isValidPassword(value: string): boolean {
    return /[A-Z]+/.test(value) && /[a-z]+/.test(value) && /[\d]+/.test(value) && value.length >= 8;
  }

  /**
   * Valid email
   * @param value
   */
  static isValidEmail(value: string): boolean {
    return StringUtils.EmailReg.test(value);
  }

  /**
   * Split string by chart
   * @param value input string
   * @param separator
   */
  static splitBy(value: string, separator: string): string {
    if (!value || !separator) {
      return;
    }
    return value.split(separator).join('\n');
  }

  /**
   * Parse as boolean
   * @param value
   */
  static parseBool(value: string | null): boolean | null {
    if (value == null || value === '') {
      return null;
    }
    return value === 'true';
  }

  static getCurrentISODate(): string {
    return new Date().toISOString();
  }

  /**
   * 全角数値から半角へ変更
   * @param input
   */
  static toHalfWidthNumber(input: string): string {
    input = input || '';
    const result = input.replace(/[０-９]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
    });
    return result;
  }

  /**
   * 数値以外の値を取り除く
   * @param input
   */
  static removeNonNumeric(input: string): string {
    input = input || '';
    return input.replace(/[^\d.-]/g, '');
  }
}
