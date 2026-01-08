import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

const PROTO = "./customers.proto";

const packageDefinition = protoLoader.loadSync(PROTO, {})

const CustomerService = grpc.loadPackageDefinition(packageDefinition).customers.CustomerService

const client = new CustomerService(
  "127.0.0.1:30043",
  grpc.credentials.createInsecure()
)

export default client