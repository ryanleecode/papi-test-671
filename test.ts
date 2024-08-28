import { createClient } from "polkadot-api";
import { logsProvider, withLogsRecorder } from "@polkadot-api/logs-provider";
import * as fs from "node:fs";

const log = fs.openSync('test.log', 'w')

const logs = (await Bun.file("./test7.log").text()).trim().split("\n")
const client = createClient(
  withLogsRecorder(
    (l) => {
      console.log(l)
      fs.writeSync(log, `${l}\n`)
    },
    logsProvider(logs) 
  )
);
