/**
 * Created by hqq on 2017/8/26.
 */
const PROTO_PATH = __dirname + '/proto/eslint.proto'
const grpc = require('grpc')
const eslintProto = grpc.load(PROTO_PATH).eslint

function main() {
  let client = new eslintProto.checkServer('localhost:50051',
    grpc.credentials.createInsecure())
  client.checkRpc({
    files: 'a.js'
  }, function(err, response) {
    console.log('Files:', response.checkResult)
  })
}

main()
