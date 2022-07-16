import { initClient } from "../client";
import { initCommands } from "../command"

export default {
  Start: function() {
    initCommands(),
    initClient()
  }
}