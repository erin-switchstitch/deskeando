import { Router } from "express";
import desks from "./tem-templateData.json";

const router = Router();

router.get("/", (_, res) => {
	res.send(desks);
});

router.get("/wheelchair", (_, res) => {
	const desksWheelchairUsers = desks.filter((desk) => desk.desk_features.includes("wheelchair"));
	res.send(desksWheelchairUsers);
});

router.get("/toilet", (_, res) => {
	const desksNearToilet = desks.filter((desk) => desk.desk_features.includes("toilet"));
	res.send(desksNearToilet);
});

router.get("/true", (_, res) => {
	const deskBookedTrue = desks.filter((desk) => desk.desk_booked === true);
	res.send(deskBookedTrue);
});

router.get("/false", (_, res) => {
	const deskBookedTrue = desks.filter((desk) => desk.desk_booked === false);
	res.send(deskBookedTrue);
});

router.get("/moreFeatures", (_, res) => {
	const moreFeatures = desks.filter((desk) => desk.desk_features.includes("wheelchair") && desk.desk_features.includes("screen reader"));
	res.send(moreFeatures);
});

router.get("/desks/:desk_id", (req, res) => {
	const deskId = +req.params.desk_id;
	const requireDeskId = desks.filter((desk) => desk.desk_id === deskId);
	res.send(requireDeskId);
});


export default router;
