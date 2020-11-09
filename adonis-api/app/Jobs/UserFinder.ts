import User from "App/Models/User";
import { Job } from "bullmq";

export default async (job: Job) => {
  // Parameters
  const { user_id } = job.data;

  const user = await User.find(user_id);

  console.log(user?.toJSON());

  return Promise.resolve();
};
