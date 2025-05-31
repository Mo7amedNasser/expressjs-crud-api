// middlewares/validate.js
export const validate = (schema) => (req, res, next) => {
  try {
    // Parse and validate data
    req.body = schema.parse(req.body);
    next();
  } catch (err) {
    return res.status(400).json({
      message: "Validation error",
      errors: err.errors,
    });
  }
};
