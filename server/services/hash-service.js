const crypto = require('crypto');
class HashService {
async hashOtp(data){
    const hash = crypto.createHmac('sha256',process.env.HASH_SECRET).update(data).digest('hex');
    return hash;
}
}

module.exports = new HashService();