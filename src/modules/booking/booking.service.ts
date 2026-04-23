import * as bookingRepo from "./booking.repository";

export const createBooking = async (data: any) => {
  const existing = await bookingRepo.findConflict(data);

  if (existing) {
    throw new Error("Car already booked for this time");
  }

  return await bookingRepo.create(data);
};