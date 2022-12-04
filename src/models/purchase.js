export default class Purchase {
  constructor(userId, deviceId, price, color, purchaseTime, id) {
    this.userId = userId;
    this.deviceId = deviceId;
    this.price = price;
    this.purchaseTime = purchaseTime;
    this.id = id;
  }
}
