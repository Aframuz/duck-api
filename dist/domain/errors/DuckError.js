"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuckError = void 0;
class DuckError extends Error {
    constructor(message, code = 500) {
        super(message);
        this.code = code;
        this.name = "Holy Duck error";
    }
}
exports.DuckError = DuckError;
//# sourceMappingURL=DuckError.js.map