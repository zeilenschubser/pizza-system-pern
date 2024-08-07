// Pizza model
import { type Document, Model, model, Schema } from "mongoose"
import { FOOD } from "@/config";

export interface FoodDocument extends Document {
    _id: string;
    name: string;
    price: number;
    // Type of food
    type: string;
    // Dietary requirements
    dietary?: string;
    // Size, e.g., 0.5 for half a pizza
    size: number
    // Maximum number of items available
    max: number;
    enabled: boolean;
    createdAt: Date;
}

const foodSchema = new Schema<FoodDocument>({
    name: { type: String, required: true },
    price: {
        required: true,
        type: Number,
        default: 0,
        min: 0,
        max: 100,
    },
    type: {
        type: String,
        required: true
    },
    dietary: {
        type: String,
        required: false
    },
    size: {
        required: true,
        type: Number,
        default: 1,
        min: 0.1,
        max: 1
    },
    max: { type: Number, default: FOOD.MAX_ITEMS },
    enabled: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
});

let Food: Model<FoodDocument>;
try {
    Food = model<FoodDocument>('food', foodSchema);
} catch (error) {
    Food = model<FoodDocument>('food');
}
export { Food }
