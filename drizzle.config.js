/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-interview-mocker_owner:RS3aKWft7xGC@ep-winter-voice-a5ruw6tx.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
    } 
  };
