var compare = require('buffer-compare');

Buffer.prototype.compare = Buffer.prototype.compare || function (buffer) {
  return compare(this, buffer);
}
