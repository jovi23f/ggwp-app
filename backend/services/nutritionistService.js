const { prisma } = require('../prismaClient');

const validatePhoneNumber = (phone) => {
  if (!phone.startsWith('+62')) {
    throw { statusCode: 400, message: 'Format nomor telepon harus diawali +62' };
  }
  if (!/^\+62\d+$/.test(phone)) {
    throw { statusCode: 400, message: 'Nomor telepon hanya boleh angka setelah +62' };
  }
  if (phone.length < 12) {
    throw { statusCode: 400, message: 'Nomor telepon terlalu pendek' };
  }
};

exports.getAll = async () => {
  return prisma.nutritionist.findMany();
};

exports.create = async ({ name, phone, status }) => {
  validatePhoneNumber(phone);

  const existing = await prisma.nutritionist.findFirst({ where: { phone } });
  if (existing) {
    throw { statusCode: 409, message: 'Nomor telepon sudah terdaftar' };
  }

  return prisma.nutritionist.create({
    data: { name, phone, status }
  });
};

exports.update = async (id, { name, phone, status }) => {
  validatePhoneNumber(phone);

  const existing = await prisma.nutritionist.findFirst({
    where: {
      phone,
      id: { not: parseInt(id) }
    }
  });
  if (existing) {
    throw { statusCode: 409, message: 'Nomor telepon sudah terdaftar' };
  }

  return prisma.nutritionist.update({
    where: { id: parseInt(id) },
    data: { name, phone, status }
  });
};

exports.delete = async (id) => {
  return prisma.nutritionist.delete({
    where: { id: parseInt(id) }
  });
};
