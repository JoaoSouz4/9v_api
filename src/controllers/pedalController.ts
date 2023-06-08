import Pedal from "../models/pedalModel";
import { Request, Response } from "express";

class PedalController {
    public static async createPedal(req: any, res: any){
    
        const {name,brand, description, specifications, price, amount, category} = req.body;
        const isAvailable = (amount > 0) ? true : false;

        const pedal = new Pedal({
            name, description, brand, price, specifications, amount, category, isAvailable
        });

        try{
            await pedal.save();
            return res.status(201).json({
                message: 'Pedal registrado com sucesso',
                isSucess: true,
                data: pedal
            })
        }catch(e){
            console.log(e)
        }
    }

    public static async getAllPedals(req: any, res: any){
        try {
            const allPedals = await Pedal.find({});
            return res.status(200).json({allPedals});
        } catch (error) {
            console.log(error)
        }
    }
}

export default PedalController;