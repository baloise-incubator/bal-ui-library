import { AbstractVariantRenderer } from './abstract-variant.renderer'
import { PopupVariantRenderer, PopupComponentInterface } from './variant.interfaces'

export class FullscreenVariantRenderer extends AbstractVariantRenderer implements PopupVariantRenderer {
  async present(component: PopupComponentInterface): Promise<boolean> {
    if (component.containerEl) {
      component.balWillAnimate.emit()
      component.containerEl.style.setProperty('inset', `0px auto auto 0px`)
      this.showBackdropElement(component)
      this.showContainerElement(component)
      this.showArrowElement(component)
      component.containerEl.classList.add('container')
      component.presented = true
      component.balDidAnimate.emit()
      return true
    }
    return false
  }

  async update(_component: PopupComponentInterface): Promise<boolean> {
    return true
  }

  async dismiss(component: PopupComponentInterface): Promise<boolean> {
    if (component.containerEl) {
      component.balWillAnimate.emit()
      this.hideBackdropElement(component)
      this.hideContainerElement(component)
      this.hideArrowElement(component)
      component.containerEl.style.removeProperty('inset')
      component.containerEl.classList.remove('container')
      component.presented = false
      component.balDidAnimate.emit()
      return true
    }
    return false
  }
}