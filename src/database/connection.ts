import mongoose from "mongoose";
import { mongourl } from "@/constants";

type ConnectionObject = {
  isConnected?: number;
};
const ConnectionInstance: ConnectionObject = {};

/**
 * Establishes a connection to a MongoDB database using Mongoose.
 *
 * This function first checks if a connection already exists by inspecting the
 * `ConnectionInstance` object. If a connection is already established, it logs
 * a message and exits. If no connection exists, it retrieves the MongoDB connection
 * string from the environment variables (`MONGOURL`). If the connection string is not
 * found, it logs an error and terminates the process.
 *
 * The function then attempts to connect to the MongoDB database using Mongoose.
 * Upon a successful connection, it updates the `ConnectionInstance` object with the
 * connection state and logs a success message including the host name of the MongoDB
 * server. If the connection fails, it logs an error message and terminates the process.
 */
async function connection() {
  if (ConnectionInstance.isConnected) {
    console.log("Connection to the database already exists");
    return;
  }

  if (!mongourl) {
    console.error(
      "MongoDB connection string (MONGOURL) is not defined in environment variables."
    );
    process.exit(1);
  }

  try {
    const response = await mongoose.connect((mongourl as string) || "", {});
    const Connection = mongoose.connection;
    ConnectionInstance.isConnected = response.connections[0].readyState;

    if (!ConnectionInstance.isConnected) {
      console.log(
        "MongoDB connection error. Please make sure MongoDB is running."
      );
      process.exit(1);
    }

    Connection.on("error", (error) => {
      console.log(
        "MongoDB connection error. Please make sure MongoDB is running.",
        error
      );
      process.exit(1);
    });

    Connection.on("connected", () => {
      console.log(
        `\nMongoDB Connected Successfully.: ${response.connection.host}`
      );
    });
  } catch (error) {
    console.error("MongoDB connection failed.", error);
    process.exit(1);
  }
}

export default connection;
