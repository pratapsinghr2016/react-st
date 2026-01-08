import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

const PROTO = "./customers.proto";

// ! loadSync
const packageDefination = protoLoader.loadSync(PROTO, {})

// ! connect with package defination
const customersProto = grpc.loadPackageDefinition(packageDefination)

const server = new grpc.Server();

const customers = [
  {
    id: "1",
    name: "John Doe",
    age: 45,
    address: "Abc"
  },
  {
    id: "2",
    name: "Jane Doe",
    age: 55,
    address: "SSC"
  }
]

server.addService(customersProto.customers.CustomerService.service, {
  GetAll: (call, callback) => {
    callback(null, { customers });
  },
  Get: (call, callback) => {
    const customer = customers.find((item) => item.id == call.request.id);
    callback(null, customer);
  },
  Insert: (call, callback) => {
    const newCustomer = call.request;
    newCustomer.id = Date.now().toString();
    customers.push(newCustomer);
    callback(null, newCustomer);
  },
  Update: (call, callback) => {
    let updatedCustomer = null;
    customers.forEach((item, idx) => {
      if (item.id == call.request.id) {
        customers[idx] = {
          ...item,
          ...(call.request || {})
        };
        updatedCustomer = customers[idx];
      }
    });
    callback(null, updatedCustomer);
  },
  Delete: (call, callback) => {
    const idx = customers.findIndex((item) => item.id === call.request.id);
    if (idx !== -1) customers.splice(idx, 1);
    callback(null, {});
  }
});


server.bindAsync(
  "127.0.0.1:30043",
  grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    if (error) {
      console.error("Failed to bind server:", error);
      return;
    }
    console.log(`🚀 gRPC Server running on port ${port}`);
  }
);