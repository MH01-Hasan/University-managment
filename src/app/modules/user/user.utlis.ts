import { User } from './user.madel';

export const finduserLastID = async () => {
  const lastID = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean();
  return lastID?.id;
};

export const creatuderID = async () => {
  const currentID = (await finduserLastID()) || (0).toString().padStart(5, '0');
  // increment id
  const incrementId = (parseInt(currentID) + 1).toString().padStart(5, '0');

  return incrementId;
};
