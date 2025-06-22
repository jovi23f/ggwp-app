const nutritionistService = require('../services/nutritionistService');

exports.getAll = async (req, res) => {
  try {
    const contacts = await nutritionistService.getAll();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
};

exports.create = async (req, res) => {
  try {
    const contact = await nutritionistService.create(req.body);
    res.status(201).json({
      message: 'Kontak berhasil ditambahkan',
      data: contact
    });
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message || 'Terjadi kesalahan server' });
  }
};

exports.update = async (req, res) => {
  try {
    const contact = await nutritionistService.update(req.params.id, req.body);
    res.status(200).json({
    message: 'Kontak berhasil diupdate',
    data: contact
  });

  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message || 'Terjadi kesalahan server' });
  }
};

exports.delete = async (req, res) => {
  try {
    await nutritionistService.delete(req.params.id);
    res.json({ message: 'Kontak berhasil dihapus' });
  } catch (err) {
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
};
