import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Placing orders using COD method
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;

        // Order data
        const orderData = {
            userId,
            items,
            amount,
            address,
            PaymentMethod: "COD",
            payment: false,
            Date: Date.now(),
        };

        // Create and save the order
        const newOrder = new orderModel(orderData);
        await newOrder.save();

        // Clear the user's cart data
        await userModel.findByIdAndUpdate(userId,  { cartData: {} } );

        // Send success response
        res.json({ success: true, message: "Order placed successfully" });
    } catch (error) {
        // Log and send error response
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to place order", error: error.message });
    }
};


// placing orders using stripe method
const placeOrderStripe = async (req,res) =>{
    
}

// placing orders using Razorpay method
const placeOrderRazorpay = async (req,res) =>{
    
}

// All orders data for admin panel
const allOrders = async(req,res) =>{

}

//user order data for frontend
const userOrders = async(req,res) =>{

    try {
        const {userId} = req.body

        const orders = await orderModel.find({userId})
        res.json({success:true,orders})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }

}

//update order status for admin panel
const updatestatus = async(req,res) =>{

}

export {placeOrder,placeOrderRazorpay,placeOrderStripe,allOrders,updatestatus,userOrders}