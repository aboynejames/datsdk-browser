const SDK = require('dat-sdk')

run()

async function run () {
  const sdk = await SDK()
  console.log(sdk)
  const Hypercore = sdk.Hypercore
  const Hyperdrive = sdk
  const resolveName =  sdk
  const close = sdk // <-- Make sure to call this when you're done
  console.log(Hypercore)

  // Create a hypercore
  // Check out the hypercore docs for what you can do with it
  // https://github.com/mafintosh/hypercore
  const myCore = Hypercore('aboynejamesdat', {
    valueEncoding: 'json',
    persist: false,
    // storage can be set to an instance of `random-access-*`
    // const RAI = require('random-access-idb')
    // otherwise it defaults to `random-access-web` in the browser
    // and `random-access-file` in node
    storage: null // storage: RAI
  })
  console.log(myCore)
  // Add some data to it
  await myCore.append(JSON.stringify({
    type: 'referenceContract',
    nickname: 'datatype',
    text: 'beats per minute',
    timestamp: '2018-11-05T14:26:000Z'
  }))

  await myCore.append(JSON.stringify({
    type: 'referenceContract',
    contract: 'datatype',
    text: 'time',
    timestamp: '2018-10-05T14:26:000Z'
  }))

  let readystore = await myCore.get(0, console.log)
  console.log(readystore)
  let readystore2 = await myCore.get(1, console.log)
  console.log(readystore2)

  console.log(myCore)
}
