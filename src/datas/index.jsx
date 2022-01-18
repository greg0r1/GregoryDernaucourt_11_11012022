import json from './logements.json'

export default class Datas {
  static getAll() {
    return (this.datas = json)
  }

  static getCard(id) {
    this.datas = json
    const card = this.datas.find((el) => el.id === id)
    return card
  }
}
