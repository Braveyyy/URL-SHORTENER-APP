import express from "express";
import { urlModel } from "../model/shortUrl";
import { url } from "inspector";

export const createUrl = async (req: express.Request, res: express.Response) => {
    try {
        console.log("The fullUrl is ", req.body.fullUrl);
        const {fullUrl} = req.body;
        const urlFound = await urlModel.find({fullUrl});
        if(urlFound.length > 0) {
            res.status(409).send(urlFound);
        }
        else {
            const shortUrl = await urlModel.create({fullUrl});
            res.status(201).send(shortUrl);
        }
    } catch (error) {
        res.status(500).send({message: "Something went wrong."});
    }
    
}
export const getAllUrl = async (req: express.Request, res: express.Response) => {
    try {
        const shortUrls = await urlModel.find();
        if(shortUrls.length < 0) {
            res.status(404).send({message: "Short Urls not found."});
        }
        else {
            res.status(200).send(shortUrls);
        }
    }
    catch(error) {
        res.status(500).send({message: "Something went wrong."});
    }
}
export const getUrl = async (req: express.Request, res: express.Response) => {
    
}
export const deleteUrl = async (req: express.Request, res: express.Response) => {
    
}