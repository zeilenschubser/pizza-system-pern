import { Request, Response } from "express";
import moment from "moment/moment";
import { constants, tokens } from "../../config/config";
import { db } from "../db";
import { auth_bearer_tokens } from "../../db/schema";

export function index(req: Request, res: Response) {
    res.send('Welcome to the API');
}

export async function login(req: Request, res: Response) {
    var bearer = {token: '', expires: 0};
    if (req.body != null) {
        if ("token" in req.body) {
            const token: string = req.body.token as string;
            if (token) {
                //check token
                const correct_token: string = tokens.PAYMENT_ADMIN_TOKEN;
                if (token === correct_token) {
                    const expires: Date = moment().add(constants.LIFETIME_BEARER_HOURS, "hours").toDate();
                    const inserted = await db.insert(auth_bearer_tokens).values({
                        expiresAt: expires,
                        token: uuidv4() as string,
                        userId: 1, //for now we dont care
                    }).returning();
                    if (inserted.length == 1) {
                        //create a new bearer
                        bearer.token = inserted[0].token;
                        bearer.expires = moment(inserted[0].expiresAt).unix();
                    }
                }
            }
        }
    }

    if (bearer.expires > 0)
        res.send(bearer);
    else
        res.status(403).end();
};

export function logout(req: Request, res: Response) {
    res.send("logout");
};