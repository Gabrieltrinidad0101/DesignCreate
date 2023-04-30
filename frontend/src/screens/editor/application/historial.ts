import type IHisitorial from '../domain/historial'

export default class Historial {
  private currentNode?: IHisitorial = undefined

  Add (content: string): void {
    const newNode: IHisitorial = {
      content,
      next: undefined,
      prev: undefined
    }
    if (this.currentNode === undefined) {
      this.currentNode = newNode
      return
    }
    this.currentNode.next = newNode
    newNode.prev = this.currentNode
    this.currentNode = newNode
  }

  Undo (): string | undefined {
    if (this.currentNode?.prev === undefined) return
    this.currentNode &&= this.currentNode?.prev
    return this.currentNode?.content
  }

  Redo (): string | undefined {
    if (this.currentNode?.next === undefined) return
    this.currentNode = this.currentNode?.next
    return this.currentNode?.content
  }
}
