import { assert, config, util } from "chai";
import { readFileSync, statSync } from "fs";
import { join } from "path";

import { reverse } from "./solution";

const { inspect } = util;

config.truncateThreshold = 0;

const getFileName = (file = './solution.ts') => (
  join(import.meta.dir, file)
);

const getCodeSize = (file = './solution.ts') => (
  statSync(getFileName(file)).size
);

const getCode = (file = './solution.ts') => (
  readFileSync(getFileName(file), 'utf-8')
);

const codeSize = getCodeSize();
console.log('<LOG::Code size>', codeSize);

describe('reverse', () => {
  it('should reverse arrays', () => {
    assert.deepEqual(reverse([1, 2, 3]), [3, 2, 1]);
    assert.deepEqual(reverse([...'01234567890123456789']), [...'98765432109876543210']);
    assert.deepEqual(reverse([0, undefined]), [undefined, 0]);
  });
});

describe('Code', () => {
  it('should be short enough', () => {
    const codeSize = getCodeSize();
    assert(codeSize <= 47, 'Code is too long');
  });
  it('should not use `require`, `import`, `from`', () => {
    const code = getCode();
    assert(!code.includes('require'), 'Code uses `require`');
    assert(!code.includes('import'), 'Code uses `import`');
    assert(!code.includes('from'), 'Code uses `from`');
  });
});
