const router = require("express").Router();
const { asyncErrorHandler } = require("./utils");

const prisma = require("../prisma/prisma");

router.get(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const puppies = await prisma.puppies.findMany({
      include: {
        puppies_tricks: {
          include: {
            tricks: true,
          },
        },
      },
    });
    res.send(puppies);
  })
);

router.get(
  "/:puppyId",
  asyncErrorHandler(async (req, res, next) => {
    const singlePup = await prisma.puppies.findUnique({
      where: {
        id: +req.params.puppyId,
      },
      include: {
        puppies_tricks: {
          include: {
            tricks: true,
          },
        },
      },
    });
    res.send(singlePup);
  })
);

router.post(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    //const {} = req.body;
    const createdPup = await prisma.puppies.create({
      data: req.body,
    });
    res.send(createdPup);
  })
);

router.patch(
  "/:puppyId",
  asyncErrorHandler(async (req, res, next) => {
    const updatedPup = await prisma.puppies.update({
      where: {
        id: +req.params.puppyId,
      },
      data: req.body,
    });
    res.send(updatedPup);
  })
);

router.delete(
  "/:puppyId",
  asyncErrorHandler(async (req, res, next) => {
    const deletedPup = await prisma.puppies.delete({
      where: {
        id: +req.params.puppyId,
      },
    });
    res.send(deletedPup);
  })
);
module.exports = router;
