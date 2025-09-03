import { Product } from "./Product"
import product1 from "/public/images/products/s4.jpg"
import product2 from "/public/images/products/s5.jpg"
import product3 from "/public/images/products/s7.jpg"
import product4 from "/public/images/products/s11.jpg"

export const BestSeller = () => {
  const ProductsInfo = [
    {
      id: "product1",
      photo: product1,
      title: "Boat Headphone",
      price: 285,
      salesPrice: 375,
      rating: 4,
    },
    {
      id: "product2",
      photo: product2,
      title: "MacBook Air Pro",
      price: 675,
      salesPrice: 900,
      rating: 5,
    },
    {
      id: "product3",
      photo: product3,
      title: "Red Valvet Dress",
      price: 150,
      salesPrice: 200,
      rating: 5,
    },
    {
      id: "product4",
      photo: product4,
      title: "Cute Soft Teddybear",
      price: 285,
      salesPrice: 345,
      rating: 4,
    },
  ]
  return (
    <>
      <div className="grid grid-cols-12 gap-6">

        {
          ProductsInfo.map((item) => {
            return (
              <div key={item.id} className="lg:col-span-3 md:col-span-6 col-span-12">
                <Product photo={item.photo} title={item.title} price={item.price} salesPrice={item.salesPrice} rating={item.rating} />
              </div>
            )
          })
        }


      </div>
    </>
  )
}