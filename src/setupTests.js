// jsdom 16 (bundled with react-scripts' Jest 27) does not provide TextEncoder /
// TextDecoder, which react-router v7 requires at import time.
import { TextDecoder, TextEncoder } from "util"

if (typeof global.TextEncoder === "undefined") {
  global.TextEncoder = TextEncoder
  global.TextDecoder = TextDecoder
}
