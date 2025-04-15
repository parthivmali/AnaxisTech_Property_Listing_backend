import properties from '../data/properties.js';

export const getAllProperties = (req, res) => {
  res.status(200).json(properties);
};
