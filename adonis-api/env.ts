import Env from "@ioc:Adonis/Core/Env";

export default Env.rules({
  NODE_ENV: Env.schema.enum(["development", "testing", "production"] as const),
  HOST: Env.schema.string({ format: "host" }),
  PORT: Env.schema.number(),
  APP_KEY: Env.schema.string(),

  // REDIS
  REDIS_CONNECTION: Env.schema.enum(["local"] as const),
  REDIS_HOST: Env.schema.string({ format: "host" }),
  REDIS_PORT: Env.schema.number(),
  REDIS_PASSWORD: Env.schema.string.optional(),
  REDIS_EXPIRES: Env.schema.number()
});
