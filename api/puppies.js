const router = require("express").Router();
const { asyncErrorHandler } = require("./utils");

const prisma = require("../prisma/prisma");

router.get(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const puppies = await prisma.puppies.findMany();
    res.send(puppies);
  })
);

module.exports = router;
