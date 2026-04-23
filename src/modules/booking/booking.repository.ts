let bookings: any[] = [];

export const create = async (data: any) => {
  bookings.push(data);
  return data;
};

export const findConflict = async (data: any) => {
  return bookings.find(
    b =>
      b.carId === data.carId &&
      b.startDate === data.startDate
  );
};