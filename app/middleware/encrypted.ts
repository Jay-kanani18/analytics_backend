import * as jwt from 'jsonwebtoken';
import * as crypto from 'crypto';

const secretKey = 'analyticpsycho';
const iv: string = 'analyticpsychovector';

const JWT_CONFIG = {
    JWT_SECRET: 'F&6j5WgTx"&mfn@',
    noAuthUrls: [/\/users*/, /\/assets*/]
};

const encpryption = (req: any): boolean => {
    let token = null;
    if (
        req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === 'Bearer'
    ) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (token) {
        jwt.verify(token, JWT_CONFIG.JWT_SECRET, (err: Error, decoded: any) => {
            if (err) {
                return false;
            } else {
                req.user = decoded.user;
                return true;
            }
        });
    }
    return true;
};
const decpryption = (req: any): boolean => {
    let token = null;
    if (
        req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === 'Bearer'
    ) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (token) {
        jwt.verify(token, JWT_CONFIG.JWT_SECRET, (err: Error, decoded: any) => {
            if (err) {
                return false;
            } else {
                req.user = decoded.user;
                return true;
            }
        });
    }
    return true;
};

// Function to encrypt data
function encrypt(data: string): string {
    const cipher: crypto.Cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(secretKey), Buffer.from(iv, 'hex'));
    let encrypted: string = cipher.update(data, 'utf-8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

// Function to decrypt data
function decrypt(data: string): string {
    const decipher: crypto.Decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(secretKey), Buffer.from(iv, 'hex'));
    let decrypted: string = decipher.update(data, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8');
    return decrypted;
}

export { encpryption, decpryption };