import mongose from 'mongoose'

const orderSchema = new mongose.Schema({
    userId: { type: String, required: true },
    items: { type: Array, required: true },
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, required: true, default: 'Order placed' },
    PaymentMethod: { type: String, required: true },
    Payment: { type: Boolean, required: true, default: false },
    Date: { type: Number, required: true }
})

const orderModel = mongose.models.order || mongose.model('order', orderSchema)
export default orderModel;
