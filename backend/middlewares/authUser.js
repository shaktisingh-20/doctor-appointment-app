import jwt from "jsonwebtoken";

// user authentication middleware
const authUser = async (req, res, next) => {
    try {
        const { token } = req.headers;

        if (!token) {
            return res.json({
                success: false,
                message: "Not Authorized. Please Login Again.",
            });
        }

        // Verify the token
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        // Standard Practice: Attach to req.body.userId (if your controller expects it there)
        // OR use req.userId for better security. 
        // For your current GreatStack setup, keep it in req.body.userId:
        req.body.userId = token_decode.id;

        next();
    } catch (error) {
        console.log("Auth Error:", error.message);
        
        // If the token is invalid or expired, let the frontend know specifically
        res.json({ 
            success: false, 
            message: "Session expired or invalid token. Please login again." 
        });
    }
};

export default authUser;