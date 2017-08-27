/**
 * Created by hqq on 2017/8/26.
 */
const PROTO_PATH = __dirname + '/proto/eslint.proto'
const grpc = require('grpc')
const eslintProto = grpc.load(PROTO_PATH).eslint

function checkRpc (call, callback) {
  callback(null, {checkResult: call.request.files})
}

function main () {
  const server = new grpc.Server()
  server.addProtoService(eslintProto.checkServer.service, {checkRpc: checkRpc})
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure())
  server.start()
}

main()
