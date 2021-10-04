import { notification } from 'antd';
import { NotificationPlacement } from 'antd/lib/notification';
import { localStorageService } from '../services';

export class UIUtils {
  static notifyInsertSuccessed(description: string = '登録に成功しました。', duration: number = 4.5, placement: NotificationPlacement = 'topLeft') {
    UIUtils.notifyX('success', '成功', description, duration, placement);
  }

  static notifyInsertFailed(description: string = '登録に失敗しました。', duration: number = 4.5, placement: NotificationPlacement = 'topLeft') {
    UIUtils.notifyX('error', '失敗', description, duration, placement);
  }

  static notifyUpdateSuccessed(description: string = '更新に成功しました。', duration: number = 4.5, placement: NotificationPlacement = 'topLeft') {
    UIUtils.notifyX('success', '成功', description, duration, placement);
  }

  static notifyUpdateFailed(description: string = '更新に失敗しました。', duration: number = 4.5, placement: NotificationPlacement = 'topLeft') {
    UIUtils.notifyX('error', '失敗', description, duration, placement);
  }

  static notifyDeleteSuccessed(description: string = '削除に成功しました。', duration: number = 4.5, placement: NotificationPlacement = 'topLeft') {
    UIUtils.notifyX('success', '成功', description, duration, placement);
  }

  static notifyDeleteFailed(description: string = '削除に失敗しました。', duration: number = 4.5, placement: NotificationPlacement = 'topLeft') {
    UIUtils.notifyX('error', '失敗', description, duration, placement);
  }

  static notifyUploadSuccessed(description: string = 'アップロードに成功しました。', duration: number = 4.5, placement: NotificationPlacement = 'topLeft') {
    UIUtils.notifyX('success', '成功', description, duration, placement);
  }

  static notifyUploadFailed(description: string = 'アップロードに失敗しました。', duration: number = 4.5, placement: NotificationPlacement = 'topLeft') {
    UIUtils.notifyX('error', '失敗', description, duration, placement);
  }

  public static notifySuccess(message: string = '', description: string = '', duration: number = 4.5, placement: NotificationPlacement = 'topLeft') {
    UIUtils.notifyX('success', message, description, duration, placement);
  }

  public static notifyError(message: string = '', description: string = '', duration: number = 4.5, placement: NotificationPlacement = 'topLeft') {
    UIUtils.notifyX('error', message, description, duration, placement);
  }

  public static notifyX(
    type = '',
    message: string = '',
    description: string = '登録に失敗しました。',
    duration: number = 4.5,
    placement: NotificationPlacement = 'topLeft'
  ) {
    notification[type]({
      message: message,
      description: description,
      duration: duration,
      placement: placement,
    });
  }

  /**
   * スマホ判定
   */
  public static isMobile(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
}
