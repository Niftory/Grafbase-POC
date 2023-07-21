import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";
import * as schema from "./schema";
import { config } from "./lib";

// create the connection
const connection = connect(config);

export const client = drizzle(connection, { schema });

export const conn = connect(config);
