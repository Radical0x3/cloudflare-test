/**
 * @param {string[]} code
 * @return {string}
 */
module.exports = (code) => `
// DO NOT TOUCH!
// AUTOGENERATED!

/* eslint-disable @typescript-eslint/no-unused-vars */
namespace NodeJS {
    /* eslint-disable @typescript-eslint/naming-convention */
    interface ProcessEnv {

${code.join('\n\n')}

    }
}
`;
