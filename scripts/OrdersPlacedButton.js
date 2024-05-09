import { placeOrder } from "./TransientState.js"


     const handleOrderButtonClick = (clickEvent) => {
      if (clickEvent.target.id === "OrderButton") {
        placeOrder()
      }
  }

export const OrderButton = () => {
  document.addEventListener("click", handleOrderButtonClick)

  //let html = "<button id='ordersPlacedButton'>Create Custom Order</button>"
  return "<div><button id='ordersPlacedButton'>Create Custom Order</button></div>"
}