import { useEffect, useState } from "react";
import { useLocation,useNavigate } from "react-router";
import { userRequest } from '../requestMethod'
import {useSelector} from 'react-redux'

const Success = () => {


  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector(state=>state.user?.currentUser)
  const data = location.state?.address;
  const cart = location.state?.cart;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const axiosInstance = userRequest(user?.accessToken);
        const res = await axiosInstance.post("/order", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address:{
            country:data.address_country,
            city:data.address_city,
            street:data.address_line1,
            pincode:data.address_zip
          } ,
        });
        console.log(res.data);
        setOrderId(res.data._id);
      } catch {}
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <button onClick={()=>{navigate('/')}} style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
    </div>
  );
};

export default Success;