import * as jwt from 'jsonwebtoken';

const JWT_CONFIG = {
	JWT_SECRET: 'F&6j5WgTx"&mfn@',
	noAuthUrls: [/\/users*/, /\/assets*/]
};

const requestValidator =async (req: any): Promise<boolean> => {
	let token = null;
  
	if (
	  req.headers.authorization &&
	  req.headers.authorization.split(' ')[0] === 'Bearer'
	) {
	  token = req.headers.authorization.split(' ')[1];
	}
  
	if (token) {
	  try {
		const decoded: any =  jwt.verify(token, JWT_CONFIG.JWT_SECRET);
		req.user = decoded.user;
		return true;
	  } catch (err) {
		return false;
	  }
	}
  
	return true;
  };

export { JWT_CONFIG, requestValidator };